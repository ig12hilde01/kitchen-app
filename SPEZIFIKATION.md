# Haushalt Vorrat - Spezifikation v2

## Architektur
- Single-File HTML mit Supabase für Cloud-Sync
- PWA (installierbar auf Handy)
- Offline-first mit localStorage als Cache
- Auth über Supabase (Email/Passwort oder Google)

## Kategorien (vollständig)
1. **Küche** - Lebensmittel, Konserven, Gewürze, Öl, Nudeln, Reis
2. **Getränke** - Wasser, Saft, Wein, Kaffee, Tee, Bier
3. **Kühlung** - Milch, Joghurt, Käse, Fleisch, Fisch
4. **Tiefkühl** - Tiefkühlpizza, Eis, Gemüse, Berry
5. **Reinigung** - Waschmittel, Spüler, Allzweck, Glas, Boden
6. **Bad** - WC-Papier, Seife, Shampoo, Duschgel, Zahnpasta
7. **Papier** - Küchenrolle, Toilettenpapier, Papiertücher
8. **Haushalt** - Kerzen, Glühbirnen, Batterien, Folie, Alufolie
9. **Garten** - Erde, Dünger, Saatgut, Pflanzenschutz
10. **Auto** - Öl, Scheibenwischer, Frostschutz
11. **Büro** - Stifte, Papier, Hefte, Büroklammern
12. **Baby** - Windeln, Fläschchen, Brei, Feuchttücher
13. **Haustier** - Futter, Streu, Leckerlis, Reinigung
14. **Medizin** - Verband, Desinfektion, Schmerzmittel, Vitamine
15. **Sonstiges** - Alles was nicht passt

## Smart Features
1. **MHD-Tracker** - Farbige Warnung (grün/gelb/rot) bei Ablauf
2. **Niedrigbestand-Warnung** - Auto-Alert bei < Mindestmenge
3. **Verbrauchs-Tracker** - Zeigt Durchschnittsverbrauch pro Woche
4. **Smart-Einkaufsliste** - Automatisiert aus:
   - Abgelaufenen Produkten
   - Produkten unter Mindestmenge
   - Geplanten Rezepten
5. **Preis-Verlauf** - Tracking der Preise pro Produkt
6. **Raum-Zuordnung** - Küche, Bad, Keller, Garage, etc.
7. **Wiederauffüllen-Erinnerung** - Basierend auf Verbrauch
8. **Haushalts-Budget** - Ausgaben tracking
9. **Multi-User** - Mehrere Haushalte möglich
10. **QR/Barcode Scan** - Schnelles Hinzufügen
11. **Meal Planner** - Wochenant planning mit Zutaten-Liste
12. **Saison-Kalender** - Was ist gerade saisonal?
13. **Rezept-Integration** - Zutaten auf Einkaufsliste
14. **Teilen-Funktion** - Einkaufsliste mit Partner teilen

## UI/UX
- Apple-inspiriert: Clean, minimal, premium
- Bottom Navigation: 🏠 Vorrat | 🛒 Einkauf | 📅 Plan | 📊 Stats | ⚙️ Setups
- Produktkarten mit Status-Badges
- Pull-to-Refresh
- Swipe-to-Action
- Search mit Filtern
- Dark/Light Mode

## Datenmodell
- Produkte: id, name, category, room, brand, size, qty, unit, minQty, expiry, barcode, price, dateAdded, dateUpdated
- Rezepte: id, name, category, portions, ingredients[], steps[], prepTime
- Einkaufsliste: id, productId, name, qty, unit, checked, source
- Wochenplan: id, date, recipeId
- Haushalts-Settings: budget, currency, householdName
