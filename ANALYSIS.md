# Kitchen App — Spezifikation

## Forschungs-Ergebnisse — Top Features aus Wettbewerbern

### Kern-Features (bereits gewollt)
1. **Barcode-Scanner** mit Kamera-Wechsel (Vor/Rück)
2. **Datenbank** für Lebensmittel + Nicht-Lebensmittel (Waschmittel etc.)
3. **Lagerplätze** anlegbar (Kühlschrank, Gefriertruhe, Vorratskammer, Spülraum, Küche allgemein)
4. **Rezepte** verwalten
5. **Wochenplaner** mit automatischer Einkaufsliste

### Zusätzliche Features aus竞品-Analyse
6. **MHD-Tracking** mit Verfallswarnung (3 Tage / 1 Tag vorher)
7. **Mindestmenge** pro Produkt — automatisch auf Einkaufsliste wenn zu wenig
8. **Verfalls-Dashboard** — alles was bald abläuft auf einen Blick
9. **Mengensteuerung** (+/- Buttons pro Artikel)
10. **Kategorie-Filter** — Produkte nach Kategorie sortieren (Getränke, Milchprodukte, Reinigung etc.)
11. **Suche** über gesamte Datenbank
12. **Kontrollkästchen** auf Einkaufsliste — was gekauft, anhaken
13. **Vergangene Einkaufslisten** speichern und wiederverwenden
14. **Produkt-Archiv** — verbrauchte Artikel werden archiviert
15. **Foto pro Produkt** optional

## Architektur
- Single-File HTML (wie bisher)
- localStorage als Datenbank
- html5-qrcode für Scanner
- PWA-ready (manifest.json)
- Clientseitig (kein Server nötig)

## Design
- Clean, modern, mobile-first
- Große Touch-Targets für Handy-Nutzung
- Helle Farben, Karten-basiertes Layout
- Bottom Navigation (wie native Apps)