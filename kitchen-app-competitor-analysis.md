# Kitchen Vorrats-App — Wettbewerbsanalyse & Best-Practice-Report

**Erstellt:** 09. November 2026
**Betroffene Apps analysiert:** Fridge Paltry, NoWaste, SuperCook, Tasty, Yummly, KitchenPal, Well Stockd, Cooklist, FoodShiner, Crumb, FridgeRaid, Pantry AId, Big Oven, Pantry Check, Smantry

---

## 1. TOP 10 UX-Features der führenden Apps

### #1: Barcode-Scanner mit Datenbank-Integration (OpenFoodFacts / 255M+ Produkte)
**Apps:** NoWaste, KitchenPal, PantryCheck, Well Stockd, Fridge Pal, Pantry AId
- Kamera-Scan → automatische Produkterkennung mit Name, Hersteller, Größe
- Stapel-Scan (mehrere Barcodes nacheinander)
- **Unsere App hat:** ✅ OpenFoodFacts bereits implementiert

### #2: Smarte Verfallsdatum-Verfolgung mit Erinnerungen
**Apps:** NoWaste, Well Stockd, FoodShiner, Fridge Pal, PantryCheck
- Push-Benachrichtigungen 2 Tage, am Tag und 1 Tag nach Verfall
- Farbcodierte Frische-Punkte (Grün/Gelb/Rot)
- Automatische Schätzung der Haltbarkeit bei frischen Lebensmitteln
- "Use-first"-Sortierung (nächster Verfall oben)
- **Unsere App hat:** ✅ Verfallsdatum + CSS-Klassen `getExpiryClass()` + Status-Badges, ❌ keine Push-Benachrichtigungen

### #3: Zutaten-zu-Rezept Matching ("Was kann ich heute kochen?")
**Apps:** SuperCook, KitchenPal, Well Stockd, Crumb, Tasty, FridgeRaid
- Rezeptvorschläge basierend auf aktuellen Vorräten
- SuperCook: 11M+ Rezepte aus 18.000 Websites, nur Rezepte die man SOFORT kochen kann
- Well Stockd: "Can make now" vs. "Fehlt 1-2 Zutaten"
- KitchenPal: "Link to pantry manager" — automatische Rezeptmatchings
- **Unsere App hat:** ❌ NICHT vorhanden — großes Feature-Gap

### #4: Receipt-Scan (Quittung scannen → Produkte automatisch hinzufügen)
**Apps:** NoWaste (Pro), Fridge Pal, Well Stockd
- Foto der Quittung → OCR erkennt Produkte und Mengen
- Fridge Pal: "Take a picture of your receipt and stock your kitchen in seconds"
- **Unsere App hat:** ❌ NICHT vorhanden

### #5: Multi-Storage / Lagerplatz-System
**Apps:** KitchenPal, NoWaste, Fridge Pal, PantryCheck
- Fridge / Freezer / Pantry / Bar / Cleaning Supplies / eigene Kategorien
- Fridge Pal: visuelle virtuelle Kühltruhe zum Anklicken
- NoWaste: Locations (Home, Cabin, Boat, Apartment) mit Member-Invite
- **Unsere App hat:** ✅ Storage-System (Kühlregal, Gefrierschrank, Vorrat etc.)

### #6: AI-gestützte Features (Foto-ID, Voice-Input, Chat-Bot)
**Apps:** Pantry AId, Crumb, NoWaste (Pro), Tasty (Botatouille), Well Stockd (Pro)
- Pantry AId: Foto der Einkaufstasche → AI erkennt alle Produkte
- Crumb: Voice Search ("show me dinner ideas with chicken")
- NoWaste: AI Assistant (text/voice) — "add food, check stock"
- Tasty: AI Chat-Bot "Botatouille" (ChatGPT-basiert)
- Well Stockd: Pro-Pattern-Recognition (Fotografie Regal → Produktliste)
- **Unsere App hat:** ❌ NICHT vorhanden

### #7: Meal Planner / Wochenplan
**Apps:** Yummly, Tasty, NoWaste, KitchenPal, Big Oven, Well Stockd, SuperCook
- Wochenkalender mit Frühstück/Mittag/Abend/Snack
- Recipe → Shopping List (automatisch, fehlende Zutaten)
- Yummly: auto-generierte Pläne basierend auf Diät + Vorrat
- **Unsere App hat:** ✅ Wochenplan vorhanden

### #8: Smart Shopping List mit Aisle-Sorting & Integration
**Apps:** Yummly, Well Stockd, KitchenPal, Tasty, Big Oven
- Yummly: Zutaten nach Ladengasse sortiert, Instacart-Integration
- Well Stockd: "Gap list" — nur fehlende Zutaten, Aisle-Sorting, geschätzte Gesamtkosten
- KitchenPal: Rezepte → Shopping List mit einem Klick
- **Unsere App hat:** ✅ Einkaufsliste (basis), ❌ keine Aisle-Sortierung

### #9: Food Waste Score / Gamification
**Apps:** FoodShiner, Well Stockd, NoWaste
- FoodShiner: Food Waste Score & Achievements
- Well Stockd: "Save what's left as portions" → Cook-Leftovers-Tracking
- NoWaste: "Track amount of food you waste"
- **Unsere App hat:** ❌ NICHT vorhanden

### #10: Family Sharing / Household Sync
**Apps:** KitchenPal, NoWaste, Well Stockd, PantryCheck
- Echtzeit-Sync zwischen Familienmitgliedern
- NoWaste: Member-Invite + Pro-Account-Sharing
- Well Stockd: One Pro → Shared Household
- KitchenPal: Real-time family sync
- **Unsere App hat:** ❌ NICHT vorhanden (localStorage only)

---

## 2. Design-Ansatz der Wettbewerber

### Farben
| App | Primary | Secondary | Accent | Vibe |
|-----|---------|-----------|--------|------|
| **Tasty** | Cyan/Turquoise (#00BCD4) | Pink (#FF6B6B), Orange (#FF9800) | Rot (hunger) | Cheerful, magazine-style, vibrant |
| **Yummly** | Grün (#4CAF50) | Weiß, Grau | Orange (CTA) | Clean, professional, nature-herb |
| **NoWaste** | Grün (#43A047) | Hellgrau | Orange (Warnung) | Clean, uncluttered, minimal |
| **Well Stockd** | Dunkelgrün (#2E7D32) | Weiß | Orange/Rot (expiry) | Earthy, functional, minimal |
| **KitchenPal** | Grün (#66BB6A) | Orange (#FFA726) | Blau (info) | Friendly, approachable |
| **FoodShiner** | Türkis (#26C6DA) | Orange (#FF7043) | Dunkelgrau | Playful, waste-focused |
| **Tasty (DesignRush)** | Turquoise + Pink + Orange | Weiß | — | Glossy magazine, infinite scroll |

**Best Practice:** Warm tones (Rot/Orange) → Hunger/Appetit. Grün → Freshness/Gesundheit. Türkis/Cyan → Modern, approachable. Die meisten erfolgreichen Apps kombinieren Grün (primary action) mit warmen Akzenten (expiry/CTA).

### Typografie
- **Serif-Headings + Sans-Serif Body** (Standard bei Tasty, Yummly)
- Body font min. **18px** für Lesbarkeit in der Küche
- Line-height **1.6–1.8** für Schritt-für-Schritt Anleitungen
- Moderne, cleane Fonts: Clarkson, Bujole, Cuciniere, Baskerville (referenziert in Design-Standards)
- System-Sans für mobile Apps (iOS SF Pro, Android Roboto)

### Layout
| Element | Standard bei Top-Apps |
|---------|----------------------|
| **Hero-Images** | 60–80% Screen-Fill (Above the fold), 16:9 landscape Desktop, 4:5 Mobile |
| **White Space** | Generous, clean → signalisiert Qualität/Frische |
| **Food Cards** | Hochwertiges Foto + Name + Zeit + Schwierigkeit auf einer Karte |
| **Navigation** | Bottom Navigation (mobile-first, 5 Tabs) — Standard bei allen Top-Apps |
| **Recipe Page** | Foto oben → Key-Metadata (Zeit, Portionen) → Zutaten → Schritte |
| **Cook Mode** | Fullscreen, Steps fill screen, Swipe back/forward, Loop-Video pro Step |
| **Recipe Grid** | Infinite scroll card grid mit Kategorien (Salmon Dinners, Lunch Inspo) |

---

## 3. Features die in unserer App fehlen (Priorisiert)

### 🔴 HIGH PRIORITY (immediate)

| Feature | Beschreibung | Konkurrenz-Ref | Aufwand |
|---------|-------------|----------------|---------|
| **Zutaten-zu-Rezept Matching** | "Was kann ich mit meinen Vorräten kochen?" — Rezeptvorschläge basierend auf Inventory | SuperCook, KitchenPal, Well Stockd | Mittel |
| **Expiry-Push-Benachrichtigungen** | Browser-Notifications: 2 Tage, am Tag, 1 Tag nach Verfall | NoWaste, Fridge Pal, Well Stockd | Gering-Mittel |
| **Food Waste Score** | Gamification: "You saved €XX this week" + Achievements | FoodShiner, Well Stockd | Gering |
| **Shopping List Aisle-Sortierung** | Automatische Sortierung nach Supermarkt-Gassen | Yummly, Well Stockd | Mittel |

### 🟡 MEDIUM PRIORITY (next sprint)

| Feature | Beschreibung | Konkurrenz-Ref | Aufwand |
|---------|-------------|----------------|---------|
| **Receipt Scan (OCR)** | Quittung fotografieren → Produkte automatisch erfassen | NoWaste, Fridge Pal, Well Stockd | Hoch |
| **Food Waste Tracking** | "How much food did you toss?" mit Statistik | FoodShiner, NoWaste | Gering |
| **Leftover-Tracking** | "Cook a main → save portions → plan another night" | Well Stockd | Mittel |
| **Voice Input** | "Ich habe Eier, Milch, Brot" → Produkte hinzufügen | SuperCook, Crumb, NoWaste | Mittel |

### 🟢 LOW PRIORITY (nice-to-have)

| Feature | Beschreibung | Konkurrenz-Ref | Aufwand |
|---------|-------------|----------------|---------|
| **Family Sharing** | Multi-User Sync über Cloud | KitchenPal, NoWaste, Well Stockd | Sehr Hoch |
| **AI Photo Recognition** | Foto der Tasche/Regal → AI erkennt Produkte | Pantry AId, Well Stockd Pro | Sehr Hoch |
| **Grocery Delivery Integration** | Instacart/Walmart/Amazon Fresh Link | Yummly, Tasty, Well Stockd | Hoch |
| **Guided Cook Mode** | Fullscreen Steps mit Timer, stay-awake | Tasty, Well Stockd, Yummly Pro | Mittel |
| **Social/Community** | Rezepte teilen, Fotos hochladen, Community | Tasty, Big Oven | Hoch |
| **Nutrition/Macro Tracking** | Kalorien, Makros, Allergene | Yummly, Tasty | Mittel |

---

## 4. Best Practices für Food/Kitchen Apps

### Design & UX
1. **Hochwertige Food-Fotografie dominieren** — "You eat with your eyes" — Hero-Images 60-80% Screen
2. **Minimalistische UI mit viel White Space** — signalisiert Frische und Qualität
3. **Farbpsychologie:** Grün = fresh/gesund, Rot/Orange = hunger/CTA, Türkis = modern/freundlich
4. **Bottom Navigation** auf Mobile — Daumen-zentriert, max 5 Tabs
5. **Food Cards** mit: Foto + Name + Kochzeit + Schwierigkeit + Portionen
6. **Swipe-Gesten** — Swipe-to-delete, swipe between recipe steps, swipe to change quantity
7. **Fullscreen Cook Mode** — Schritt füllt gesamten Bildschirm, bleibt an, Swipe zurück/vorwärts

### Technische UX
8. **One-tap add** — Produkte in ≤2 taps hinzufügen (Scan oder Liste)
9. **Autocomplete bei Suche** — Schnelles Tippen mit Vorschlägen (SuperCook, FridgeRaid)
10. **Pre-filled basics** — Salz, Pfeffer, Öl als Default-Seasonings immer vorhanden
11. **Expiry als Farbcodes** — Grün/Gelb/Rot sofort erkennbar (keine Textleserei)
12. **Smart sort** — Items nach Verfallsdatum sortiert (use-first principle)
13. **Quick quantity change** — +/- Button direkt in der Liste (kein Modal nötig)
14. **Offline-first** — Rezeptdaten lokal, App funktioniert ohne Internet (FridgeRaid)
15. **Responsive design** — Desktop/Tablet/Mobile alle bedient

### Business & Retention
16. **Gamification** — Food Waste Score, Achievements, Streaks
17. **Weekly digest** — "Your fridge is expiring Sunday" — Email/Push Digest
18. **AI Personalization** — Lernende Empfehlungen basierend auf Kochverhalten
19. **Freemium Modell** — Basis gratis, Pro für Sharing, Receipt-Scan, AI Features
20. **Data export** — Backup/Restore für Trust (JSON, CSV)

---

## Zusammenfassung: Prioritätsmatrix

```
                        Hohe Impact
                           │
    🔴 HIGH PRIORITY       │  Zutaten→Rezept Matching
    (sofort implementieren)│  Expiry Push-Benachrichtigungen
                           │  Food Waste Score
                           │
───────────────────────────┼──────────────────────────
                           │  🟡 MEDIUM PRIORITY
                           │  (nächster Sprint)
                           │  Receipt Scan
                           │  Leftover Tracking
                           │
                        Niedrige Impact
```

**Empfehlung:** Start with the 3 HIGH PRIORITY features — they match the core value proposition of competing apps (inventory → recipes → waste reduction) and have manageable implementation effort for a single-file web app.
