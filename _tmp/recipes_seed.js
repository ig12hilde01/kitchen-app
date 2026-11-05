recipes_seed = [
  {
    id: 'ck-carbonara',
    name: 'Carbonara wie bei der Mamma in Rom',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["400g Spaghetti", "200g Guanciale oder Pancetta", "4 Eigelb", "100g Pecorino Romano", "Schwarzer Pfeffer", "Salz"],
    steps: '1. Spaghetti in Salzwasser al dente kochen.\n2. Guanciale in grobe Würfel schneiden und in der Pfanne knusprig braten.\n3. Eigelb mit geriebenem Pecorino und viel Pfeffer vermischen.\n4. Nudeln abtropfen (Wasser aufheben!) und in die Pfanne zum Guanciale geben.\n5. Pfanne vom Herd nehmen! Sauce unterrühren – die Resthitze gart die Eier cremig.\n6. Sofort servieren, extra Pecorino darüber.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-lasagne',
    name: 'Lasagne',
    category: 'Hauptgericht',
    servings: 6,
    ingredients: ["500g Lasagneplatten", "500g Rinderhack", "800g Tomaten (passiert)", "1 Zwiebel", "2 Karotten", "2 Stangen Sellerie", "100ml Rotwein", "200ml Sahne", "100g Parmesan", "50g Butter", "50g Mehl", "500ml Milch", "Muskatnuss", "Salz, Pfeffer, Oregano"],
    steps: '1. Zwiebel, Karotten, Sellerie fein würfeln. In Butter anbraten.\n2. Hack dazu, braten. Rotwein ablöschen, Tomaten dazu, 30 Min. köcheln.\n3. Bechamel: Butter schmelzen, Mehl dazu, Milch angießen, dickrühren. Muskat, Salz, Pfeffer.\n4. Schichten: Soße, Nudeln, Bechamel, Parmesan. Wiederholen.\n5. Oben viel Parmesan. 35 Min. bei 180°C backen.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-chili',
    name: 'Chili con Carne',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["500g Rinderfleisch (gewürfelt)", "1 Dose Kidneybohnen", "1 Dose Mais", "800g gehackte Tomaten", "2 Zwiebeln", "3 Knoblauchzehen", "1 Paprika", "2 EL Chilipaste", "1 TL Kreuzkümmel", "1 TL Rauchpaprika", "Koriander", "Sauerrahm"],
    steps: '1. Fleisch in großer Pfanne scharf anbraten, herausnehmen.\n2. Zwiebeln, Knoblauch, Paprika anbraten.\n3. Chili, Kreuzkümmel, Paprikapulver dazu, kurz mitrösten.\n4. Fleisch zurück, Tomaten, Bohnen (abgetropft), Mais dazu.\n5. 45 Min. köcheln lassen. Mit Koriander, Sauerrahm servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-bolognese',
    name: 'Die echte Sauce Bolognese',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["400g Tagliatelle", "500g Rinderhack", "200g Schweinehack", "1 Zwiebel", "1 Karotte", "1 Stange Sellerie", "400g Tomaten (passiert)", "200ml Rotwein", "200ml Milch", "2 EL Tomatenmark", "Olivenöl", "Salz, Pfeffer, Basilikum"],
    steps: '1. Zwiebel, Karotte, Sellerie fein würfeln. In Olivenöl weich dünsten.\n2. Hackfleisch braunbraten, Tomatenmark kurz mitrösten.\n3. Mit Rotwein ablöschen, Milch angießen, 2 Stunden köcheln.\n4. Tomaten dazu, weitere 30 Min.\n5. Tagliatelle kochen, Sauce darüber. Mit Basilikum servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-gulasch',
    name: 'Gulasch nach Oma Magda',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["800g Rindergulasch", "2 Zwiebeln", "3 Karotten", "2 Kartoffeln", "400g Tomaten", "1 Paprika", "2 EL Paprikapulver edelsüß", "1 EL scharf", "Kümmel", "Knoblauch", "Brühe", "Sauerkraut"],
    steps: '1. Fleisch in großem Topf scharf anbraten, herausnehmen.\n2. Zwiebeln glasig dünsten, Paprikapulver einrühren.\n3. Fleisch zurück, mit Brühe ablöschen.\n4. 1,5 Std. köcheln lassen.\n5. Gemüse würfeln, dazu geben, weitere 30 Min.\n6. Mit Semmelknödel oder Brot servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-huhn-butter',
    name: 'Mozzarella-Hähnchen in Basilikum-Sahnesauce',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["4 Hähnchenbrust", "200g Mozzarella", "200ml Sahne", "Frisches Basilikum", "2 EL Olivenöl", "2 Knoblauchzehen", "100ml Weißwein", "Parmesan", "Salz, Pfeffer"],
    steps: '1. Hähnchen salzen, pfeffern, in Olivenöl goldbraun braten.\n2. Herausnehmen, Knoblauch kurz anbraten.\n3. Mit Weißwein ablöschen, Sahne dazu, einkochen lassen.\n4. Mozzarella in Scheiben schneiden, Hähnchen zurück.\n5. Mozzarella in Sauce schmelzen lassen.\n6. Mit Basilikum und Parmesan servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-butter-chicken',
    name: 'Indisches Butter Chicken aus dem Ofen',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["4 Hähnchenbrust", "200ml Sahne", "400g Tomaten (passiert)", "2 EL Garam Masala", "1 TL Kurkuma", "1 TL Chilipulver", "1 EL Ingwer (gehackt)", "3 Knoblauchzehen", "50g Butter", "Natürlicher Joghurt zum Marinieren", "Koriander", "Basmati"],
    steps: '1. Hähnchen mit Joghurt, Garam Masala, Kurkuma marinieren.\n2. 30 Min. im Kühlschrank.\n3. Hähnchen in Ofen bei 200°C ca. 20 Min.\n4. Sauce: Butter schmelzen, Ingwer, Knoblauch anbraten.\n5. Tomaten, Sahne, Chili dazu, 15 Min. köcheln.\n6. Hähnchenstücke in Sauce geben. Mit Basmati und Koriander servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-klopse',
    name: 'Königsberger Klopse',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["400g Hackfleisch (gemischt)", "2 Scheiben Weizenbrötchen", "100ml Milch", "1 Ei", "1 Zwiebel", "60g Butter", "2 EL Mehl", "500ml Fleischbrühe", "2 TL Kapern", "Senf", "Zitronensaft", "Sahne"],
    steps: '1. Brötchen in Milch einweichen. Auspressen.\n2. Mit Hack, Ei, fein gewürfelter Zwiebel verkneten.\n3. Klopse formen, in kochendem Salzwasser 15 Min. garen.\n4. Butter schmelzen, Mehl einrühren, Brühe angießen.\n5. Kapern, Senf, Zitronensaft, Sahne dazu.\n6. Klopse in Sauce setzen. Mit Salz, Pfeffer, Petersilie. Mit Kochkartoffeln servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-tiramisu',
    name: 'Tiramisu',
    category: 'Nachtisch',
    servings: 6,
    ingredients: ["500g Mascarpone", "4 Eier (getrennt)", "100g Zucker", "200g Löffelbisquits", "300ml starker Espresso (gekühlt)", "3 EL Rum", "Kakao"],
    steps: '1. Eigelb mit Zucker cremig schlagen, Mascarpone unterrühren.\n2. Eiweiß steif schlagen, unterheben.\n3. Espresso mit Rum mischen, Löffelbisquits kurz eintunken.\n4. Schichten: Biskuits, Creme, Biskuits, Creme.\n5. Mindestens 4 Std. im Kühlschrank.\n6. Vor dem Servieren reichlich Kakao darüber.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-apfel-kuchen',
    name: 'Supersaftiger Apfelkuchen',
    category: 'Nachtisch',
    servings: 8,
    ingredients: ["6 Äpfel", "250g Butter (weich)", "250g Zucker", "250g Mehl", "5 Eier", "1 Pck. Backpulver", "Zimt", "Vanillepudding-Pulver", "Marzipan zum Dekorieren"],
    steps: '1. Äpfel schälen, in Spalten schneiden.\n2. Butter mit Zucker schaumig rühren, Eier einzeln dazu.\n3. Mehl mit Backpulver, Vanillepudding, Zimt mischen, unterrühren.\n4. Äpfel unter den Teig heben.\n5. In eingefettete Form geben.\n6. 50 Min. bei 180°C backen. Mit Marzipan dekorieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-pancakes',
    name: 'Der perfekte Pfannkuchen',
    category: 'Frühstück',
    servings: 4,
    ingredients: ["250g Mehl", "3 Eier", "250ml Milch", "125ml Wasser", "1 Prise Salz", "2 EL Öl (für den Teig)", "Butter (zum Braten)", "Apfelmuß", "Zucker und Zimt"],
    steps: '1. Mehl, Eier, Milch, Wasser, Salz, Öl in einen Topf geben.\n2. Mit dem Mixer ca. 2 Min. auf höchster Stufe verrühren.\n3. Teig 30 Min. ruhen lassen.\n4. Pfanne vorhitzen, etwas Butter dazu.\n5. Kleine Pfannkuchen backen (ca. 1-2 Min. pro Seite).\n6. Mit Apfelmuß, Zucker und Zimt servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-waffeln',
    name: 'Belgische Waffeln',
    category: 'Frühstück',
    servings: 6,
    ingredients: ["250g Mehl", "10g Backpulver", "50g Zucker", "3 Eier", "150g Butter (geschmolzen)", "300ml Milch", "1 Pck. Vanillezucker", "Puderzucker zum Servieren"],
    steps: '1. Mehl, Backpulver, Zucker, Vanillezucker mischen.\n2. Eier trennen. Eigelb mit Milch und Butter mischen.\n3. Alles vermengen, Eiweiß steif schlagen, unterheben.\n4. Waffeleisen vorheizen, Testwaffel backen.\n5. Waffeln goldbraun backen (ca. 3-4 Min.).\n6. Mit Puderzucker, frischen Beeren servieren.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-nudelauflauf',
    name: 'Cremiger Nudelauflauf mit Tomatensauce',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["400g Rigatoni", "300g Hackfleisch", "400g Tomaten (passiert)", "1 Zwiebel", "2 Knoblauchzehen", "200ml Sahne", "150g Mozzarella", "50g Parmesan", "Oregano", "Salz, Pfeffer"],
    steps: '1. Nudeln al dente kochen.\n2. Hackfleisch mit Zwiebel, Knoblauch anbraten.\n3. Tomaten, Sahne, Oregano dazu, 10 Min. köcheln.\n4. Nudeln unterrühren.\n5. In Auflaufform, Mozzarella und Parmesan darauf.\n6. 25 Min. bei 200°C überbacken.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-gratin',
    name: 'Das beste Kartoffelgratin',
    category: 'Beilage',
    servings: 4,
    ingredients: ["1kg Kartoffeln", "200ml Sahne", "200ml Milch", "3 Knoblauchzehen", "100g Gruyère oder Emmentaler", "Muskatnuss", "Salz, Pfeffer", "Butter zum Einfetten"],
    steps: '1. Kartoffeln schälen, in dünne Scheiben schneiden.\n2. Knoblauch die Form ausreiben.\n3. Sahne, Milch, Muskat, Salz, Pfeffer erhitzen.\n4. Kartoffelschichten in Form legen, Sauce dazwischen.\n5. Käse darüber. Mit Alufolie 40 Min. bei 180°C.\n6. 15 Min. ohne Folie, bis Käse knusprig.',
    dateAdded: new Date().toISOString()
  },
  {
    id: 'ck-kasespaetzle',
    name: 'Schnelle Käsespätzle',
    category: 'Hauptgericht',
    servings: 4,
    ingredients: ["500g Spätzle (oder Nockerl)", "300g Käse (Gouda/Emmentaler)", "4 Zwiebeln", "200ml Sahne", "Butter", "Salz, Pfeffer, Muskat"],
    steps: '1. Spätzle nach Packungsanleitung kochen.\n2. Zwiebeln in Scheiben schneiden, in Butter karamellisieren.\n3. Spätzle mit Käse, Sahne, gewürzten Zwiebeln schichten.\n4. Im Ofen bei 200°C 15 Min. überbacken.',
    dateAdded: new Date().toISOString()
  },
];
