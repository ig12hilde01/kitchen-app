# ROBUSTER BARCODE-SCANNER — Technische Spezifikation

## Problem
- `BarcodeDetector` API ist experimentell, funktioniert in Chrome oft nicht zuverlässig
- Video-Stream wird angezeigt, aber Barcodes werden NICHT erkannt
- Keine Fehlermeldung, keine visuelle Bestätigung
- User muss Barcode manuell tippen können (Fallback)

## Lösung
**QuaggaJS** (quaggajs.com) verwenden — bewährte JS-Bibliothek für Barcode-Scanner im Browser:
- Erkennt 20+ Barcode-Formate: EAN-13, EAN-8, CODE-128, CODE-39, UPC-A, UPC-E, ITP, CODABAR, QR
- Funktioniert in ALLEN Browsern (Chrome, Firefox, Safari, Edge, Mobile)
- Funktioniert lokal (file://) und über HTTPS
- Live-Camera-Scan + manuelle Fallback-Eingabe

## Technische Umsetzung

### 1. QuaggaJS einbinden
CDN: `<script src="https://unpkg.com/quagga/dist/quagga.min.js"></script>`
Oder direkt inline (um CDN-Abhängigkeit zu vermeiden)

### 2. Scanner-Modul (ersetzt initScan/handleScan/closeScan)

```javascript
async function initScan() {
  var scr = document.getElementById('scanner');
  document.getElementById('sr').textContent = '📷 Barcode scannen oder eingeben';
  
  // Prüfe Kamera-Verfügbarkeit
  var hasCamera = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  
  if (hasCamera) {
    // Kamera + QuaggaJS Scanner
    var h = '<div class="scanner-wrapper">';
    h += '<div id="scanner-container" style="width:100%;max-width:400px;margin:0 auto;position:relative;">';
    h += '<div id="interactive" style="position:relative;overflow:hidden;width:100%;aspect-ratio:4/3;border-radius:12px;"></div>';
    // Scan-Overlay (Fokusrahmen)
    h += '<div class="scan-frame"></div>';
    h += '</div>';
    h += '<p id="scanStatus" style="color:var(--tx2);font-size:14px;text-align:center;margin:12px 0 0;">Scanne…</p>';
    h += '<div class="manual-section">';
    h += '<p style="color:var(--tx2);font-size:13px;margin:0 0 8px;">Oder Barcode manuell eingeben:</p>';
    h += '<div style="display:flex;gap:8px;align-items:center;">';
    h += '<input id="barcodeInput" type="text" inputmode="numeric" pattern="[0-9]*" placeholder="z.B. 7622210449283" style="flex:1;padding:12px;border:2px solid var(--ac);border-radius:12px;font-size:16px;text-align:center;background:var(--bg);color:var(--tx);">';
    h += '<button id="scanBtn" style="padding:12px 16px;background:var(--ac);color:#fff;border:none;border-radius:12px;font-size:16px;cursor:pointer;">🔍</button>';
    h += '</div>';
    h += '</div></div>';
    
    scr.innerHTML = h;
    
    // QuaggaJS Scanner starten
    try {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector('#interactive'),
          constraints: {
            facingMode: "environment",  // Rückkamera auf Mobile
            width: { ideal: 640 },
            height: { ideal: 480 }
          }
        },
        decoder: {
          readers: [
            "ean_reader",
            "ean_8_reader", 
            "code_128_reader",
            "code_39_reader",
            "upc_a_reader",
            "upc_e_reader",
            "i2of5_reader",
            "codabar_reader",
            "qr_reader"
          ]
        },
        locate: true  // Barcode im Bild finden
      }, function(err) {
        if (err) {
          console.error('Quagga init failed:', err);
          document.getElementById('scanStatus').textContent = '⚠️ Kamera-Scan nicht verfügbar — unten manuell eingeben';
          return;
        }
        Quagga.start();
      });
      
      // Barcode-Erkennung Event
      Quagga.onDetected(function(result) {
        var code = result.codeResult.code;
        // Verhindere Mehrfacherkennung
        if (window._lastScannedCode === code) return;
        window._lastScannedCode = code;
        
        document.getElementById('scanStatus').textContent = '✅ Gescannt: ' + code;
        // Kurze Pause bevor Modal geöffnet wird
        setTimeout(function() {
          handleScan(code);
        }, 500);
      });
      
      window._quaggaInitialized = true;
    } catch (e) {
      console.error('Quagga error:', e);
      document.getElementById('scanStatus').textContent = '⚠️ Kamera-Scan nicht verfügbar — unten manuell eingeben';
    }
    
    // Manueller Scan-Button
    var btn = document.getElementById('scanBtn');
    if (btn) {
      btn.addEventListener('click', function() {
        var val = document.getElementById('barcodeInput').value.trim();
        if (val) handleScan(val);
      });
    }
    
    // Enter-Taste
    var input = document.getElementById('barcodeInput');
    if (input) {
      input.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') handleScan(this.value);
      });
    }
    
  } else {
    // Kein Kamera-Support — nur manuelle Eingabe
    scr.innerHTML = '<div style="text-align:center;padding:30px 20px">' +
      '<div style="font-size:48px;margin-bottom:12px">📷</div>' +
      '<p style="color:var(--tx2);font-size:14px;margin-bottom:16px;">Barcode manuell eingeben</p>' +
      '<input id="barcodeInput" type="text" inputmode="numeric" pattern="[0-9]*" placeholder="z.B. 7622210449283" style="width:85%;padding:14px;border:2px solid var(--ac);border-radius:12px;font-size:16px;background:var(--bg);color:var(--tx);text-align:center;">' +
      '<p style="color:var(--tx2);font-size:12px;margin-top:10px;">8–13 Ziffern (Getränke, Dosen, Schokolade)</p>' +
      '</div>';
    (function(){var el=document.getElementById('barcodeInput');if(el)el.addEventListener('keyup',function(e){if(e.key==='Enter')handleScan(this.value);});})();
  }
}

function closeScan() {
  // QuaggaJS stoppen
  if (window._quaggaInitialized) {
    try { Quagga.stop(); } catch(e) {}
    window._quaggaInitialized = false;
  }
  window._lastScannedCode = null;
  window._scanInterval = null;
  
  // Kamera stoppen (Quagga macht das meist automatisch, aber sicherheitshalber)
  var video = document.getElementById('scanVideo');
  if (video && video.srcObject) {
    video.srcObject.getTracks().forEach(function(t) { t.stop(); });
  }
  
  clM('mSc');
  var scanner = document.getElementById('scanner');
  if (scanner) scanner.innerHTML = '';
}
```

### 3. handleScan (bleibt gleich)
- Bereinigt Barcode auf Ziffern
- Query OpenFoodFacts API
- Füllt Produkt-Modal mit Daten

### 4. WICHTIG — QuaggaJS muss eingebunden werden
In `index.html` <head> oder vor `</body>`:
```html
<script src="https://unpkg.com/quagga/dist/quagga.min.js"></script>
```

## Test-Barcodes
- EAN-13: 7622210449283 (Prince)
- EAN-13: 4260334640437 (Kaffee)
- UPC-A: 012345678905

## Bekannte QuaggaJS Limitationen
- Benötigt HTTPS oder localhost (file:// funktioniert auf Desktop)
- Auf Safari iOS: Kamera-Permission nötig
- Auf sehr alten Geräten: langsam

## UX
- Scanner-Overlay mit Fokusrahmen
- "Scanne…" Status-Anzeige
- "✅ Gescannt: 123456789012" bei Erfolg
- Manuelle Fallback-Section immer sichtbar
- Numerische Tastatur auf Mobile (inputmode="numeric")
- Barcode wird NICHT doppelt gescannt (window._lastScannedCode)
