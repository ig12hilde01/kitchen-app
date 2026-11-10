# SCANNER SPEZIFIKATION — Haushalts Vorrat

## Problem
Der aktuelle Scanner ist buggy:
- BarcodeDetector format names wrong (Bindestriche statt Unterstriche)
- HTML wird nicht korrekt gerendert (scr+= statt scr.innerHTML=)
- Safari unterstützt BarcodeDetector nicht → kein Auto-Scan
- QR Codes werden nicht erkannt
- Keine visuelle Bestätigung beim Scan

## Anforderungen
1. **Kamera-Scan** mit BarcodeDetector (Chrome, Edge, Firefox)
2. **QR Code Support** — QR Codes UND Barcode Barcodes
3. **Safari-Fallback** — Kamera-Preview + manuelle Eingabe mit Hinweis
4. **Manuelle Eingabe** — numerische Tastatur auf Mobile, Platzhalter-Beispiel
5. **Visuelles Feedback** — "Scanne..." → "✅ Gescannt!" oder "⚠️ Manuell"
6. **Alle Barcode-Formate** — EAN-13, EAN-8, UPC-A, UPC-E, Code-128, Code-39, QR, DataMatrix, PDF417, Aztec, ITF, Codabar
7. **OpenFoodFacts API** — Barcode nachschlagen und Produktfeld vorausfüllen
8. **CloseScan** — Kamera-Stream korrekt stoppen (keine LED bleibt an)

## Tech-Entscheidungen
- **BarcodeDetector API** (chromium-basierte Browser)
- **Safari-Erkennung**: `/Apple Computer/.test(navigator.vendor)`
- **Kamera**: navigator.mediaDevices.getUserMedia mit facingMode='environment'
- **Video-Setup**: playsinline (iOS), 1280x720, 15fps
- **Scan-Intervall**: 200ms
- **OpenFoodFacts**: world.openfoodfacts.org/api/v2/product/{code}.json
- **Format-Namen**: ean-13, ean-8, upc-a, upc-e, code-128, code-39, code-93, qr-code, datamatrix, pdf417, aztec, itf, codabar (MIT BINDESTRICHEN!)

## UI Design (Apple-inspiriert, hell)
- Kamera-Preview mit rounded corners
- Scan-Overlay mit Fokusrahmen (4 Eck-Indikatoren)
- Status-Anzeige: "📷 Kamera wird geöffnet — Barcode in den Fokus halten"
- Scan-Button: 🔍 blau (#0071e3)
- Manueller Modus: "Kamera-Scan wird von diesem Browser nicht unterstützt" + Input-Feld
- Mobile: inputmode="numeric" für automatische numerische Tastatur
- Platzhalter: "z.B. 7622210449283"

## HTML Struktur
```html
<div class="scanner-container">
  <!-- Kamera-Modus (Chrome/Edge) -->
  <video id="scanVideo" playsinline></video>
  <div class="scan-overlay">
    <div class="corner corner-tl"></div>
    <div class="corner corner-tr"></div>
    <div class="corner corner-bl"></div>
    <div class="corner corner-br"></div>
  </div>
  <p id="scanStatus">Scanne...</p>
  <div class="manual-input">
    <input id="barcodeInput" type="text" inputmode="numeric" placeholder="Barcode eingeben…">
    <button id="scanBtn">🔍</button>
  </div>
</div>
```

## JavaScript — Funktionen
- `openScanFor(prodId)` — Scanner öffnen, prodId merken
- `openScan()` — Scanner öffnen ohne prodId
- `initScan()` — Kamera + BarcodeDetector setup (async)
- `handleScan(barcode)` — Barcode verarbeiten, OpenFoodFacts query, Produkt-Felder füllen
- `closeScan()` — Kamera stoppen, Scanner schließen
- `doScan()` — manueller Scan-Button

## handleScan Flow
1. Barcode bereinigen (nur Ziffern)
2. Falls < 6 Ziffern: toast("Barcode zu kurz")
3. Fetch OpenFoodFacts API
4. Falls Produkt gefunden: openProd(), setTimeout 100ms, Felder füllen, toast("✅ Produkt gefunden")
5. Falls nicht gefunden: toast("Produkt nicht gefunden"), Barcode speichern
6. Falls Netzwerkfehler: toast("Netzwerkfehler"), Barcode speichern

## closeScan Flow
1. scanInterval clearInterval
2. video.srcObject getTracks stop
3. Modal schließen (clM)
4. scanner.innerHTML clear

## WICHTIG
- ALLES HTML in EINEM scr.innerHTML= statement — KEIN scr+= !
- Event Listener NUR wenn Element existiert (getElementOrNull Check)
- playsinlinesetAttribute (iOS Safari Support)
- Video: playsinline, object-fit: cover, 1280x720 ideal, 15fps ideal
