// === Haushalt Vorrat - Main JavaScript ===

const K = {P:'hv_p',R:'hv_r',C:'hv_c',L:'hv_l',S:'hv_sh',W:'hv_w',H:'hv_h',B:'hv_b',F:'hv_f'};
const gw = 'a2d5aed8429e5dd6ae98e2bc7b23e2f4060c29bf502f0f747bbf10469106d61c'; // SHA256 of 'vorrat2024'
const CATS = ['Küche','Getränke','Kühlung','Tiefkühl','Reinigung','Bad','Papier','Haushalt','Garten','Auto','Büro','Baby','Haustier','Medizin','Sonstiges'];
const LOCS = ['Küche','Badezimmer','Schlafzimmer','Keller','Garage','Balkon','Büro','Garten','Flur','Abstellraum','Speisekammer','Schrank','Schublade','Regal'];
const SEASON = [
  {m:1,n:'Karotten, Kartoffeln, Lauch',i:'🥕'},{m:2,n:'Karotten, Kartoffeln, Rosenkohl',i:'🥕'},
  {m:3,n:'Spargel, Rucola, Firstenbohnen',i:'🥬'},{m:4,n:'Spargel, Rucola, Erdbeeren',i:'🍓'},
  {m:5,n:'Erdbeeren, Rhabarber, Blattspinat',i:'🍓'},{m:6,n:'Erdbeeren, Spargel, Gurken',i:'🍓'},
  {m:7,n:'Kirschen, Zucchini, Paprika',i:'🍒'},{m:8,n:'Zwetschgen, Tomaten, Paprika',i:'🍑'},
  {m:9,n:'Äpfel, Birnen, Kürbis',i:'🍎'},{m:10,n:'Äpfel, Pilze, Kürbis',i:'🍎'},
  {m:11,n:'Kohl, Rosenkohl, Wurzelgemüse',i:'🥦'},{m:12,n:'Kohl, Rosenkohl, Kartoffeln',i:'🥦'}
];
const RC_SEED = [
  {id:'c1',n:'Spaghetti Carbonara',c:'Hauptgerichte',p:4,ing:[{a:400,u:'g',n:'Spaghetti'},{a:200,u:'g',n:'Speck'},{a:4,u:'Stk',n:'Eier'},{a:100,u:'g',n:'Parmesan'},{a:1,u:'Prise',n:'Pfeffer'}],st:['Spaghetti kochen','Speck braten','Eier mit Käse','Nudeln mit Speck','Vermengen','Pfeffer']},
  {id:'c2',n:'Lasagne Bolognese',c:'Hauptgerichte',p:6,ing:[{a:12,u:'Stk',n:'Lasagne'},{a:500,u:'g',n:'Hack'},{a:400,u:'g',n:'Tomaten'},{a:1,u:'Stk',n:'Zwiebel'},{a:80,u:'g',n:'Parmesan'},{a:200,u:'g',n:'Mozzarella'}],st:['Sofrito','Nudeln kochen','Schichten','Überbacken','30min bei 180°C']},
  {id:'c3',n:'Chili con Carne',c:'Hauptgerichte',p:4,ing:[{a:600,u:'g',n:'Hack'},{a:2,u:'Dose',n:'Bohnen'},{a:400,u:'g',n:'Tomaten'},{a:2,u:'Stk',n:'Paprika'},{a:2,u:'Stk',n:'Zwiebel'},{a:3,u:'Zehen',n:'Knoblauch'}],st:['Fleisch braten','Gemüse dazu','Tomaten','Köcheln','Reis dazu']},
  {id:'c4',n:'Schnitzel Wiener Art',c:'Hauptgerichte',p:4,ing:[{a:4,u:'Stk',n:'Schnitzel'},{a:100,u:'g',n:'Mehl'},{a:2,u:'Stk',n:'Eier'},{a:150,u:'g',n:'Brösel'},{a:100,u:'g',n:'Butter'}],st:['Klopfen','Panieren','Braten','Zitrone','Kartoffeln']},
  {id:'c5',n:'Gulasch',c:'Hauptgerichte',p:6,ing:[{a:800,u:'g',n:'Rindfleisch'},{a:3,u:'Stk',n:'Zwiebel'},{a:3,u:'Stk',n:'Paprika'},{a:600,u:'g',n:'Kartoffeln'}],st:['Fleisch braten','Zwiebeln','Paprika','Kartoffeln','1,5Std köcheln']},
  {id:'c6',n:'Pizza selbst machen',c:'Hauptgerichte',p:2,ing:[{a:300,u:'g',n:'Mehl'},{a:7,u:'g',n:'Hefe'},{a:180,u:'ml',n:'Wasser'},{a:200,u:'ml',n:'Soße'},{a:200,u:'g',n:'Käse'}],st:['Teig','gehen lassen','Belegen','Backen','Basilikum']},
  {id:'c7',n:'Tomatensuppe',c:'Suppen',p:4,ing:[{a:800,u:'g',n:'Tomaten'},{a:1,u:'Stk',n:'Zwiebel'},{a:2,u:'Zehen',n:'Knoblauch'},{a:100,u:'ml',n:'Sahne'}],st:['Anbraten','Köcheln','Pürieren','Sahne','Croutons']},
  {id:'c8',n:'Rührkuchen',c:'Desserts',p:8,ing:[{a:250,u:'g',n:'Butter'},{a:250,u:'g',n:'Zucker'},{a:4,u:'Stk',n:'Eier'},{a:250,u:'g',n:'Mehl'},{a:100,u:'g',n:'Streusel'}],st:['Cremig rühren','Eier','Mehl','Form','45min backen']},
  {id:'c9',n:'Apfelstrudel',c:'Desserts',p:6,ing:[{a:1,u:'Paket',n:'Blätterteig'},{a:6,u:'Stk',n:'Äpfel'},{a:100,u:'g',n:'Zucker'},{a:2,u:'TL',n:'Zimt'}],st:['Äpfel','Zimt','Teig','Rollen','30min backen','Vanillesoße']},
  {id:'c10',n:'Nudelsalat mit Feta',c:'Salate',p:4,ing:[{a:400,u:'g',n:'Nudeln'},{a:200,u:'g',n:'Feta'},{a:1,u:'Stk',n:'Gurke'},{a:200,u:'g',n:'Tomaten'},{a:4,u:'EL',n:'Olivenöl'}],st:['Nudeln','Würfeln','Vermengen','Dressing','Kalt stellen']},
  {id:'c11',n:'Kartoffelsalat',c:'Salate',p:6,ing:[{a:1000,u:'g',n:'Kartoffeln'},{a:2,u:'Stk',n:'Zwiebel'},{a:200,u:'ml',n:'Brühe'},{a:3,u:'EL',n:'Essig'}],st:['Kochen','Würfel','Brühe heiß','Schnittlauch','Warm servieren']},
  {id:'c12',n:'Crepes Nutella',c:'Desserts',p:4,ing:[{a:200,u:'g',n:'Mehl'},{a:3,u:'Stk',n:'Eier'},{a:500,u:'ml',n:'Milch'},{a:200,u:'g',n:'Nutella'}],st:['Teig','Ruhem','Backen','Füllen','Falten','Puderzucker']},
  {id:'c13',n:'Flammkuchen',c:'Hauptgerichte',p:4,ing:[{a:300,u:'g',n:'Mehl'},{a:200,u:'g',n:'Joghurt'},{a:200,u:'ml',n:'Sahne'},{a:150,u:'g',n:'Speck'}],st:['Teig','Ausrollen','Creme','Belegen','10min backen']},
  {id:'c14',n:'Bratreis',c:'Hauptgerichte',p:2,ing:[{a:400,u:'g',n:'Reis kalt'},{a:2,u:'Stk',n:'Eier'},{a:100,u:'g',n:'Erbsen'},{a:3,u:'EL',n:'Sojasoße'}],st:['Wok heiß','Eier','Gemüse','Reis','Sojasoße']},
  {id:'c15',n:'Pancakes',c:'Desserts',p:4,ing:[{a:200,u:'g',n:'Mehl'},{a:300,u:'ml',n:'Milch'},{a:2,u:'Stk',n:'Eier'},{a:100,u:'ml',n:'Ahornsirup'}],st:['Mischen','Nicht zu lang rühren','Backen','Sirup','Beeren']},
  {id:'c16',n:'Thunfisch Pasta',c:'Hauptgerichte',p:2,ing:[{a:250,u:'g',n:'Pasta'},{a:1,u:'Dose',n:'Thunfisch'},{a:200,u:'g',n:'Tomaten'},{a:3,u:'EL',n:'Olivenöl'}],st:['Kochen','Knoblauch','Thunfisch','Vermengen','Zitrone']},
  {id:'c17',n:'Quiche Lorraine',c:'Hauptgerichte',p:6,ing:[{a:1,u:'Paket',n:'Teig'},{a:200,u:'g',n:'Speck'},{a:4,u:'Stk',n:'Eier'},{a:300,u:'ml',n:'Sahne'}],st:['Teig','Speck','Eier','Sahne','35min backen']},
  {id:'c18',n:'Milchreis',c:'Desserts',p:4,ing:[{a:200,u:'g',n:'Milchreis'},{a:1,u:'L',n:'Milch'},{a:60,u:'g',n:'Zucker'},{a:1,u:'Stange',n:'Zimt'}],st:['Alles in Topf','50min rühren','Förmchen','Kalt','Zimt']},
  {id:'c19',n:'Waffeln',c:'Desserts',p:4,ing:[{a:250,u:'g',n:'Mehl'},{a:300,u:'ml',n:'Milch'},{a:125,u:'g',n:'Butter'},{a:4,u:'Stk',n:'Eier'}],st:['Butter','Mehl','Eischnee','Eisen backen','Puderzucker']},
  {id:'c20',n:'Knoblauchbrot',c:'Snacks',p:4,ing:[{a:1,u:'Laib',n:'Ciabatta'},{a:100,u:'g',n:'Butter'},{a:4,u:'Zehen',n:'Knoblauch'},{a:50,u:'g',n:'Parmesan'}],st:['Butter mischen','Aufschneiden','Parmesan','10min backen']},
  {id:'c21',n:'Gyros mit Pita',c:'Hauptgerichte',p:4,ing:[{a:500,u:'g',n:'Schwein'},{a:4,u:'Stk',n:'Pita'},{a:200,u:'g',n:'Joghurt'},{a:1,u:'Stk',n:'Gurke'}],st:['Grillen','Sauce','Gemüse','Zusammen']},
  {id:'c22',n:'Kartoffelgratin',c:'Beilagen',p:6,ing:[{a:1000,u:'g',n:'Kartoffeln'},{a:300,u:'ml',n:'Sahne'},{a:150,u:'g',n:'Käse'}],st:['Schichten','Sahne','Käse','45min backen']},
  {id:'c23',n:'Spätzle',c:'Beilagen',p:4,ing:[{a:300,u:'g',n:'Mehl'},{a:3,u:'Stk',n:'Eier'},{a:100,u:'ml',n:'Wasser'}],st:['Teig','Spätzlepresse','Kochen','Butter','Schnittlauch']},
  {id:'c24',n:'Kaiserschmarrn',c:'Desserts',p:4,ing:[{a:200,u:'g',n:'Mehl'},{a:4,u:'Stk',n:'Eier'},{a:300,u:'ml',n:'Milch'}],st:['Teig','Pfanne','Stücke reißen','Butter','Zwetschgen']},
  {id:'c25',n:'Wok Gemüse',c:'Hauptgerichte',p:4,ing:[{a:500,u:'g',n:'Hähnchen'},{a:2,u:'Stk',n:'Paprika'},{a:200,u:'g',n:'Champignons'}],st:['Wok heiß','Fleisch','Gemüse','Sojasoße','Reis']},
  {id:'c26',n:'Lachs Zitrone',c:'Hauptgerichte',p:4,ing:[{a:4,u:'Stk',n:'Lachs'},{a:2,u:'Stk',n:'Zitrone'},{a:200,u:'ml',n:'Sahne'}],st:['Salzen','Braten','Sauce','Kartoffeln']},
  {id:'c27',n:'Hummus',c:'Snacks',p:4,ing:[{a:2,u:'Dose',n:'Kichererbsen'},{a:4,u:'EL',n:'Tahini'},{a:1,u:'Stk',n:'Zitrone'}],st:['Abtropfen','Mixen','Olivenöl','Pita']},
  {id:'c28',n:'Gemüsesuppe',c:'Suppen',p:6,ing:[{a:300,u:'g',n:'Karotten'},{a:400,u:'g',n:'Kartoffeln'},{a:200,u:'g',n:'Erbsen'}],st:['Würfeln','Köcheln','Kräuter']},
  {id:'c29',n:'Birchermüsli',c:'Desserts',p:4,ing:[{a:200,u:'g',n:'Flocken'},{a:300,u:'g',n:'Joghurt'},{a:2,u:'Stk',n:'Äpfel'}],st:['Mixen','Obst','Kalt','Honig']},
  {id:'c30',n:'Aglio Olio',c:'Hauptgerichte',p:2,ing:[{a:200,u:'g',n:'Spaghetti'},{a:6,u:'Zehen',n:'Knoblauch'},{a:4,u:'EL',n:'Olivenöl'}],st:['Pasta','Knoblauch','Chili','Petersilie']},
  {id:'c31',n:'Cacio Pepe',c:'Hauptgerichte',p:2,ing:[{a:200,u:'g',n:'Pasta'},{a:100,u:'g',n:'Pecorino'},{a:2,u:'TL',n:'Pfeffer'}],st:['Pfeffer rösten','Pasta','Creme werden lassen']},
  {id:'c32',n:'Pfannkuchen',c:'Desserts',p:4,ing:[{a:250,u:'g',n:'Mehl'},{a:500,u:'ml',n:'Milch'},{a:3,u:'Stk',n:'Eier'}],st:['Teig','Backen','Zitrone','Apfelmus']},
  {id:'c33',n:'Reispfanne',c:'Hauptgerichte',p:4,ing:[{a:300,u:'g',n:'Basmati'},{a:2,u:'Stk',n:'Paprika'},{a:200,u:'ml',n:'Kokosmilch'}],st:['Reis','Gemüse','Curry','Koriander']},
  {id:'c34',n:'Bananenbrot',c:'Desserts',p:8,ing:[{a:4,u:'Stk',n:'Bananen'},{a:250,u:'g',n:'Mehl'},{a:150,u:'g',n:'Zucker'}],st:['Zerdrücken','Form','50min backen']},
  {id:'c35',n:'Smoothie',c:'Getränke',p:2,ing:[{a:100,u:'g',n:'Spinat'},{a:2,u:'Stk',n:'Banane'},{a:300,u:'ml',n:'Milch'}],st:['Mixen','Trinken']},
  {id:'c36',n:'Omelett',c:'Hauptgerichte',p:2,ing:[{a:4,u:'Stk',n:'Eier'},{a:1,u:'Stk',n:'Paprika'},{a:50,u:'g',n:'Käse'}],st:['Gemüse','Eier','Falten']},
  {id:'c37',n:'Kürbissuppe',c:'Suppen',p:4,ing:[{a:800,u:'g',n:'Kürbis'},{a:500,u:'ml',n:'Brühe'},{a:100,u:'ml',n:'Sahne'}],st:['Köcheln','Pürieren','Kerne']},
  {id:'c38',n:'Bolognese',c:'Hauptgerichte',p:4,ing:[{a:400,u:'g',n:'Spaghetti'},{a:400,u:'g',n:'Hack'},{a:400,u:'g',n:'Tomaten'}],st:['Sofrito','1Std köcheln','Pasta','Parmesan']},
  {id:'c39',n:'Currywurst',c:'Hauptgerichte',p:4,ing:[{a:4,u:'Stk',n:'Wurst'},{a:400,u:'g',n:'Ketchup'},{a:300,u:'g',n:'Pommes'}],st:['Braten','Sauce','Schneiden','Pommes']},
  {id:'c40',n:'Kartoffelpuffer',c:'Hauptgerichte',p:4,ing:[{a:800,u:'g',n:'Kartoffeln'},{a:2,u:'Stk',n:'Eier'}],st:['Reiben','Ausbacken','Apfelmus']},
  {id:'c41',n:'Gemüse-Curry',c:'Hauptgerichte',p:4,ing:[{a:1,u:'Kürbis',n:'Kürbis'},{a:1,u:'Dose',n:'Kokosmilch'},{a:2,u:'TL',n:'Curry'}],st:['Köcheln','Reis','Koriander']},
  {id:'c42',n:'Griechischer Salat',c:'Salate',p:4,ing:[{a:4,u:'Stk',n:'Tomaten'},{a:200,u:'g',n:'Feta'},{a:4,u:'EL',n:'Olivenöl'}],st:['Würfeln','Feta','Oregano']},
  {id:'c43',n:'Schoko-Kuchen',c:'Desserts',p:8,ing:[{a:200,u:'g',n:'Mehl'},{a:75,u:'g',n:'Kakao'},{a:3,u:'Stk',n:'Eier'}],st:['Alles in Schüssel','Backen','Puderzucker']},
  {id:'c44',n:'Pommes Ofen',c:'Beilagen',p:4,ing:[{a:1000,u:'g',n:'Kartoffeln'},{a:3,u:'EL',n:'Olivenöl'}],st:['Stifte','220°C 30min']},
  {id:'c45',n:'Müsli hausgemacht',c:'Snacks',p:4,ing:[{a:200,u:'g',n:'Flocken'},{a:100,u:'g',n:'Nüsse'},{a:3,u:'EL',n:'Honig'}],st:['Mixen','Backen','Joghurt']},
  {id:'c46',n:'Panna Cotta',c:'Desserts',p:4,ing:[{a:500,u:'ml',n:'Sahne'},{a:100,u:'g',n:'Zucker'},{a:10,u:'g',n:'Gelatine'}],st:['Gelatine','Erhitzen','Kühlen','Beeren']},
  {id:'c47',n:'Falafel',c:'Hauptgerichte',p:4,ing:[{a:400,u:'g',n:'Kichererbsen'},{a:3,u:'Zehen',n:'Knoblauch'}],st:['Einweichen','Mixen','Braten','Tahini']},
  {id:'c48',n:'Vanillepudding',c:'Desserts',p:4,ing:[{a:500,u:'ml',n:'Milch'},{a:4,u:'Eigelb'},{a:80,u:'g',n:'Zucker'}],st:['Aufkochen','Kühlen']},
  {id:'c49',n:'Bratwurst',c:'Hauptgerichte',p:4,ing:[{a:8,u:'Stk',n:'Bratwürste'},{a:4,u:'Stk',n:'Brötchen'}],st:['Braten','Senf','Krautsalat']},
  {id:'c50',n:'Tom Yam',c:'Suppen',p:4,ing:[{a:300,u:'g',n:'Garnelen'},{a:200,u:'ml',n:'Kokosmilch'}],st:['Brühe','Garnelen','Limette']},
  {id:'c51',n:'Focaccia',c:'Snacks',p:4,ing:[{a:4,u:'Stk',n:'Tomaten'},{a:150,u:'g',n:'Mozzarella'}],st:['Belegen','10min backen','Basilikum']},
  {id:'c52',n:'Magerquark Obst',c:'Desserts',p:2,ing:[{a:250,u:'g',n:'Quark'},{a:1,u:'Stk',n:'Banane'}],st:['Glatt rühren','Obst','Müsli']},
  {id:'c53',n:'Ofenlachs',c:'Hauptgerichte',p:4,ing:[{a:4,u:'Stk',n:'Lachs'},{a:800,u:'g',n:'Kartoffeln'}],st:['Kartoffeln','Lachs','25min']},
  {id:'c54',n:'Knödel',c:'Beilagen',p:4,ing:[{a:500,u:'g',n:'Brösel'},{a:250,u:'ml',n:'Milch'}],st:['Quellen','Formen','15min']},
  {id:'c55',n:'Zucchini Pfanne',c:'Hauptgerichte',p:4,ing:[{a:3,u:'Stk',n:'Zucchini'},{a:150,u:'g',n:'Feta'}],st:['Braten','Feta','Fladenbrot']},
  {id:'c56',n:'Schoko-Torte',c:'Desserts',p:8,ing:[{a:200,u:'g',n:'Schokolade'},{a:200,u:'g',n:'Butter'},{a:4,u:'Stk',n:'Eier'}],st:['Schmelzen','Backen','25min']},
  {id:'c57',n:'Eintopf',c:'Suppen',p:6,ing:[{a:500,u:'g',n:'Kartoffeln'},{a:1,u:'Dose',n:'Tomaten'}],st:['Klein schneiden','45min köcheln']},
  {id:'c58',n:'Apfel-Walnuss Salat',c:'Salate',p:4,ing:[{a:4,u:'Stk',n:'Äpfel'},{a:100,u:'g',n:'Walnüsse'}],st:['Stifte','Rösten','Dressing']},
  {id:'c59',n:'Ravioli Salbei',c:'Hauptgerichte',p:4,ing:[{a:500,u:'g',n:'Ravioli'},{a:100,u:'g',n:'Butter'},{a:1,u:'Bund',n:'Salbei'}],st:['Kochen','Braune Butter','Salbei','Parmesan']},
  {id:'c60',n:'Ofenkartoffel Quark',c:'Hauptgerichte',p:4,ing:[{a:800,u:'g',n:'Kartoffeln'},{a:250,u:'g',n:'Quark'}],st:['Einwickeln','60min','Kräuterquark']}
];

let PD=[],RC=[],CA=[],LO=[],SH=[],WP=[],HU={name:'Mein Haushalt'},BD={amount:0,spent:0},SF={sort:'name',view:'all'};
let editId=null,scan=null,activeCat='all',activeLoc='all',editRecId=null;

function gd(k){try{return JSON.parse(localStorage.getItem(k))||{}}catch(e){return{}}}
function sd(k,d){localStorage.setItem(k,JSON.stringify(d))}
function toast(m){const t=document.getElementById('t');t.textContent=m;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2500)}

function seed(){
  if(!CA.length)CA=CATS;
  if(!LO.length)LO=LOCS;
  if(HU.name==='Mein Haushalt')HU={name:'Mein Haushalt'};
  if(!BD.amount)BD={amount:200,spent:0};
  if(!SF.sort)SF={sort:'name',view:'all'};
  if(RC.length)return;
  RC=RC_SEED;
  sd(K.R,RC);
}

// === SHA256 HELPER ===
async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// === PASSWORD ===
async function ckPw(){
  var pw=document.getElementById('pwI').value;
  var hash=await sha256(pw);
  if(hash===gw){
    document.getElementById('pw').style.display='none';
    document.getElementById('app').style.display='block';
    localStorage.setItem('hv_auth','1');
    refreshAll();
  } else {
    document.getElementById('pwE').style.display='block';
  }
}

// === AUTO LOGIN (runs after DOM parsed, with defer) ===
document.addEventListener('DOMContentLoaded', function() {
  if(localStorage.getItem('hv_auth')==='1'){
    document.getElementById('pw').style.display='none';
    document.getElementById('app').style.display='block';
    refreshAll();
  }
});

function logout(){localStorage.removeItem('hv_auth');location.reload();}

// === NAVIGATION ===
function showS(name,el){
  document.querySelectorAll('.sec').forEach(function(s){s.classList.remove('active')});
  document.getElementById(name).classList.add('active');
  var navItems=document.querySelectorAll('nav a');
  var ids=['s0','s1','s2','s3','s4','s5'];
  var idx=ids.indexOf(name);
  for(var i=0;i<navItems.length;i++){navItems[i].classList.toggle('active',i===idx)}
  if(name==='s0')renderHome();
  if(name==='s1')renderShopping();
  if(name==='s2')renderPlan();
  if(name==='s3')renderStats();
  if(name==='s4')renderRecipes();
  if(name==='s5')renderSettings();
}

function openM(id){document.getElementById(id).classList.add('active');}
function clM(id){document.getElementById(id).classList.remove('active');}

// === PRODUCTS ===
function expiryBadge(date){
  if(!date)return'<span class="badge bg-gr">Kein Datum</span>';
  var d=new Date(date),n=new Date(),diff=(d-n)/(864e5);
  if(diff<0)return'<span class="badge bg-err">❌ '+Math.ceil(-diff)+'d abgelaufen</span>';
  if(diff<=7)return'<span class="badge bg-warn">⚠️ '+Math.ceil(diff)+'d</span>';
  if(diff<=30)return'<span class="badge bg-ac">ℹ️ '+Math.ceil(diff)+'d</span>';
  return'<span class="badge bg-ok">✅ '+Math.ceil(diff)+'d</span>';
}

function lowStock(p){return p.qty<=p.minQty;}
function isExpired(p){return p.expiry&&new Date(p.expiry)<new Date();}
function isExpiringSoon(p){if(!p.expiry)return false;var d=new Date(p.expiry),diff=(d-new Date())/(864e5);return diff>0&&diff<=7;}

function populateSel(){
  var html='<option value="">-- Kategorie --</option>';
  for(var i=0;i<CA.length;i++){html+='<option value="'+CA[i]+'">'+CA[i]+'</option>';}
  document.getElementById('pC').innerHTML=html;
  html='<option value="">-- Standort --</option>';
  for(var i=0;i<LO.length;i++){html+='<option value="'+LO[i]+'">'+LO[i]+'</option>';}
  document.getElementById('pL2').innerHTML=html;
}

function openProd(){
  editId=null;
  document.getElementById('mpT').textContent='Produkt hinzufügen';
  document.getElementById('delP').style.display='none';
  document.getElementById('pN').value='';
  document.getElementById('pM').value='';
  document.getElementById('pS').value='';
  document.getElementById('pMin').value='1';
  document.getElementById('pE').value='';
  document.getElementById('pPr').value='';
  document.getElementById('pB').value='';
  document.getElementById('pNt').value='';
  document.getElementById('pQ').value='1';
  document.getElementById('pU').value='Stk';
  populateSel();
  openM('mP');
}

function editProduct(id){
  var p=null;
  for(var i=0;i<PD.length;i++){if(PD[i].id===id){p=PD[i];break;}}
  if(!p)return;
  editId=id;
  document.getElementById('mpT').textContent='Produkt bearbeiten';
  document.getElementById('delP').style.display='block';
  document.getElementById('pN').value=p.name||'';
  document.getElementById('pM').value=p.brand||'';
  document.getElementById('pS').value=p.size||'';
  document.getElementById('pQ').value=p.qty||1;
  document.getElementById('pU').value=p.unit||'Stk';
  document.getElementById('pMin').value=p.minQty||1;
  document.getElementById('pE').value=p.expiry||'';
  document.getElementById('pPr').value=p.price||'';
  document.getElementById('pB').value=p.barcode||'';
  document.getElementById('pNt').value=p.notes||'';
  populateSel();
  document.getElementById('pC').value=p.category||'';
  document.getElementById('pL2').value=p.location||'';
  openM('mP');
}

function saveProd(){
  var name=document.getElementById('pN').value.trim();
  if(!name){alert('Bitte Name eingeben');return;}
  var obj={
    id:editId||'p'+Date.now(),
    name:name,
    brand:document.getElementById('pM').value.trim(),
    size:document.getElementById('pS').value.trim(),
    category:document.getElementById('pC').value,
    location:document.getElementById('pL2').value,
    qty:parseFloat(document.getElementById('pQ').value)||1,
    unit:document.getElementById('pU').value,
    minQty:parseFloat(document.getElementById('pMin').value)||1,
    expiry:document.getElementById('pE').value,
    price:parseFloat(document.getElementById('pPr').value)||0,
    barcode:document.getElementById('pB').value.trim(),
    notes:document.getElementById('pNt').value.trim()
  };
  if(editId){
    for(var i=0;i<PD.length;i++){if(PD[i].id===editId){PD[i]=obj;break;}}
  } else {
    PD.push(obj);
  }
  sd(K.P,PD);
  clM('mP');
  refreshAll();
  toast(editId?'✅ Aktualisiert':'✅ Hinzugefügt');
}

function delProd(){
  if(!editId)return;
  if(!confirm('Löschen?'))return;
  var filtered=[];
  for(var i=0;i<PD.length;i++){if(PD[i].id!==editId)filtered.push(PD[i]);}
  PD=filtered;
  sd(K.P,PD);
  clM('mP');
  refreshAll();
  toast('🗑️ Gelöscht');
}

function incQty(id){
  var p=null;
  for(var i=0;i<PD.length;i++){if(PD[i].id===id){p=PD[i];break;}}
  if(p){p.qty++;sd(K.P,PD);renderHome();}
}

function decQty(id){
  var p=null;
  for(var i=0;i<PD.length;i++){if(PD[i].id===id){p=PD[i];break;}}
  if(p&&p.qty>0){p.qty--;sd(K.P,PD);renderHome();}
}

function renderProducts(containerId,query,filterCat,filterLoc){
  query=query||'';
  filterCat=filterCat||'all';
  filterLoc=filterLoc||'all';
  var list=[];
  for(var i=0;i<PD.length;i++){
    var p=PD[i];
    var matchQ=!query||p.name.toLowerCase().indexOf(query)>=0||(p.brand&&p.brand.toLowerCase().indexOf(query)>=0);
    var matchC=filterCat==='all'||p.category===filterCat;
    var matchL=filterLoc==='all'||p.location===filterLoc;
    if(matchQ&&matchC&&matchL)list.push(p);
  }
  // Sort
  if(SF.sort==='name')list.sort(function(a,b){return a.name.localeCompare(b.name);});
  else if(SF.sort==='expiry'){
    list.sort(function(a,b){
      if(!a.expiry)return 1;if(!b.expiry)return -1;
      return new Date(a.expiry)-new Date(b.expiry);
    });
  }
  else if(SF.sort==='category')list.sort(function(a,b){return(a.category||'').localeCompare(b.category||'');});
  // View filter
  if(SF.view==='low')list=list.filter(function(p){return lowStock(p);});
  else if(SF.view==='expiring')list=list.filter(function(p){return isExpiringSoon(p)||isExpired(p);});

  if(list.length===0){
    document.getElementById(containerId).innerHTML='<div class="es"><div class="ei">📦</div><div class="et">Keine Produkte</div></div>';
    return;
  }
  var html='';
  for(var i=0;i<list.length;i++){
    var p=list[i];
    var locName=p.location||'';
    html+='<div class="cd pc" onclick="editProduct(\''+p.id+'\')">';
    html+='<div class="pi"><div class="pn">'+p.name+'</div>';
    html+='<div class="pm">';
    if(p.brand)html+='<span>'+p.brand+'</span> ';
    if(p.size)html+='<span>'+p.size+'</span> ';
    html+='<span class="badge bg-ac">'+(p.category||'Ohne')+'</span>';
    if(locName)html+='<span class="badge bg-gr">'+locName+'</span>';
    html+=expiryBadge(p.expiry);
    html+='</div></div>';
    html+='<div class="qs">';
    html+='<button class="qb" onclick="event.stopPropagation();decQty(\''+p.id+'\')">−</button>';
    html+='<span class="qv">'+p.qty+'<small> '+p.unit+'</small></span>';
    html+='<button class="qb" onclick="event.stopPropagation();incQty(\''+p.id+'\')">+</button>';
    html+='<button class="bi" onclick="event.stopPropagation();openScanFor(\''+p.id+'\')" style="margin-left:4px">📷</button>';
    html+='</div></div>';
  }
  document.getElementById(containerId).innerHTML=html;
}

function renderHome(q){
  q=q||'';
  renderProducts('pL',q,activeCat,activeLoc);
  renderPills();
  renderSmartTip();
}

function filterHome(q){
  renderProducts('pL',q,activeCat,activeLoc);
}

function renderPills(){
  var html='<div class="pill '+(activeCat==='all'?'active':'')+'" onclick="setF(\'all\',\'all\')">Alle</div>';
  for(var i=0;i<CA.length;i++){
    html+='<div class="pill '+(activeCat===CA[i]?'active':'')+'" onclick="setF(\''+CA[i].replace(/'/g,"\\'")+'\',\'all\')">🏷️ '+CA[i]+'</div>';
  }
  for(var i=0;i<LO.length;i++){
    html+='<div class="pill '+(activeLoc===LO[i]?'active':'')+'" onclick="setF(\'all\',\''+LO[i].replace(/'/g,"\\'")+'\')">'+LO[i]+'</div>';
  }
  document.getElementById('pills').innerHTML=html;
}

function setF(cat,loc){activeCat=cat;activeLoc=loc;renderHome(document.getElementById('sI').value);}

function renderSmartTip(){
  var expiring=0,low=0,expired=0;
  for(var i=0;i<PD.length;i++){
    var p=PD[i];
    if(isExpired(p))expired++;
    if(isExpiringSoon(p))expiring++;
    if(lowStock(p))low++;
  }
  var tip='';
  if(expired>0)tip+='⚠️ '+expired+' Produkt'+(expired>1?'e':'')+' abgelaufen. ';
  if(expiring>0)tip+='⚡ '+expiring+' Produkt'+(expiring>1?'e':'')+' bald ablaufend. ';
  if(low>0)tip+='🛒 '+low+' Produkt'+(low>1?'e':'')+' nachbestellen. ';
  if(!tip)tip='✅ Alles gut! Dein Vorrat ist im Plan.';
  document.getElementById('smartTip').textContent=tip;
}

// === SHOPPING ===
function renderShopping(){
  var active=[],done=[];
  for(var i=0;i<SH.length;i++){
    if(!SH[i].checked)active.push(SH[i]);else done.push(SH[i]);
  }
  var html='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">';
  html+='<strong style="font-size:15px">Aktiv ('+active.length+')</strong>';
  html+='<button class="b bs" onclick="clearDone()" style="padding:6px 12px;font-size:12px">🧹 Abgehakte entfernen</button></div>';
  for(var i=0;i<active.length;i++){
    var x=active[i];
    html+='<div class="si"><div class="sch" onclick="toggleItem(\''+x.id+'\')"></div>';
    html+='<div style="flex:1"><strong>'+x.n+'</strong><br><small style="color:var(--tx2)">'+x.q+' '+x.u+'</small></div>';
    html+='<button class="bi" onclick="removeItem(\''+x.id+'\')" style="width:32px;height:32px;font-size:14px">🗑️</button></div>';
  }
  if(done.length){
    html+='<div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)"><strong style="font-size:14px;color:var(--tx2)">Abgehakt ('+done.length+')</strong>';
    for(var i=0;i<done.length;i++){
      var x=done[i];
      html+='<div class="si chk"><div class="sch ck"></div><div style="flex:1"><strong>'+x.n+'</strong><br><small>'+x.q+' '+x.u+'</small></div></div>';
    }
    html+='</div>';
  }
  if(!active.length&&!done.length)html+='<div class="es"><div class="ei">🛒</div><div class="et">Einkaufsliste leer</div></div>';
  document.getElementById('shopL').innerHTML=html;
}

function autoGenerateShopping(){
  var added=0;
  for(var i=0;i<PD.length;i++){
    var p=PD[i];
    if(p.qty<=p.minQty){
      var found=false;
      for(var j=0;j<SH.length;j++){if(SH[j].n===p.name){found=true;break;}}
      if(!found){
        SH.push({id:'s'+Date.now()+Math.random().toString(36).substr(2,5),n:p.name,q:p.minQty,u:p.unit,checked:false});
        added++;
      }
    }
  }
  for(var i=0;i<PD.length;i++){
    var p=PD[i];
    if(isExpiringSoon(p)){
      var found=false;
      for(var j=0;j<SH.length;j++){if(SH[j].n===p.name){found=true;break;}}
      if(!found){
        SH.push({id:'s'+Date.now()+Math.random().toString(36).substr(2,5),n:p.name+' (bald ablaufend)',q:1,u:p.unit,checked:false});
        added++;
      }
    }
  }
  for(var i=0;i<PD.length;i++){
    var p=PD[i];
    if(isExpired(p)){
      var found=false;
      for(var j=0;j<SH.length;j++){if(SH[j].n===p.name){found=true;break;}}
      if(!found){
        SH.push({id:'s'+Date.now()+Math.random().toString(36).substr(2,5),n:p.name+' (abgelaufen)',q:1,u:p.unit,checked:false});
        added++;
      }
    }
  }
  sd(K.SH,SH);
  renderShopping();
  toast(added?('✅ '+added+' Produkte hinzugefügt'):'✅ Alles vorhanden!');
}

function openShop(){openM('mS');}

function addShop(){
  var n=document.getElementById('sN').value.trim();
  if(!n){alert('Name fehlt');return;}
  SH.push({id:'s'+Date.now()+Math.random().toString(36).substr(2,5),n:n,q:parseFloat(document.getElementById('sQ').value)||1,u:document.getElementById('sU').value,checked:false});
  sd(K.SH,SH);clM('mS');document.getElementById('sN').value='';renderShopping();toast('✅ Hinzugefügt');
}

function toggleItem(id){
  for(var i=0;i<SH.length;i++){if(SH[i].id===id){SH[i].checked=!SH[i].checked;break;}}
  sd(K.SH,SH);renderShopping();
}

function removeItem(id){
  var filtered=[];
  for(var i=0;i<SH.length;i++){if(SH[i].id!==id)filtered.push(SH[i]);}
  SH=filtered;sd(K.SH,SH);renderShopping();
}

function clearDone(){
  if(!confirm('Abgehakte entfernen?'))return;
  var filtered=[];
  for(var i=0;i<SH.length;i++){if(!SH[i].checked)filtered.push(SH[i]);}
  SH=filtered;sd(K.SH,SH);renderShopping();toast('🧹 Bereinigt');
}

function planShop(){
  var added=0;
  for(var i=0;i<WP.length;i++){
    if(!WP[i])continue;
    var r=null;for(var j=0;j<RC.length;j++){if(RC[j].id===WP[i]){r=RC[j];break;}}
    if(!r)continue;
    for(var k=0;k<r.ing.length;k++){
      var ing=r.ing[k];
      var found=false;for(var m=0;m<SH.length;m++){if(SH[m].n===ing.n){found=true;break;}}
      if(found){for(var m=0;m<SH.length;m++){if(SH[m].n===ing.n){SH[m].q+=ing.a;break;}}}
      else{SH.push({id:'s'+Date.now()+Math.random().toString(36).substr(2,5),n:ing.n,q:ing.a,u:ing.u,checked:false});added++;}
    }
  }
  sd(K.SH,SH);showS('s1');renderShopping();toast('📋 '+added+' Zutaten zur Liste hinzugefügt');
}

// === PLAN ===
var days=['Mo','Di','Mi','Do','Fr','Sa','So'];
function renderPlan(){
  if(!WP.length)WP=[null,null,null,null,null,null,null];
  var now=new Date(),today=(now.getDay()+6)%7;
  var html='';
  for(var i=0;i<7;i++){
    var d=new Date(now);d.setDate(now.getDate()+i-today);
    var cls='wd';
    if(i===today)cls+=' today';
    if(WP[i])cls+=' hpl';
    if(!WP[i]&&i!==today)cls+=' emp';
    html+='<div class="'+cls+'" onclick="pickRec('+i+')">';
    html+='<div style="font-size:11px;font-weight:600;color:var(--tx2)">'+days[i]+'</div>';
    html+='<div style="font-size:18px;font-weight:700">'+d.getDate()+'</div>';
    html+='<div style="font-size:10px;color:var(--tx2)">'+(WP[i]?'🍽️':'Planen')+'</div></div>';
  }
  document.getElementById('weekG').innerHTML=html;
  html='';
  for(var i=0;i<7;i++){
    if(WP[i]){
      var r=null;for(var j=0;j<RC.length;j++){if(RC[j].id===WP[i]){r=RC[j];break;}}
      html+='<div class="cd" style="cursor:pointer" onclick="showRec(\''+WP[i]+'\')"><h3>'+days[i]+'</h3><small style="color:var(--tx2)">'+(r?r.n:'?')+' ('+(r?r.p:'?')+' Portionen)</small></div>';
    }
  }
  document.getElementById('planL').innerHTML=html;
}

function pickRec(idx){
  var opts='';
  for(var i=0;i<RC.length;i++){opts+='<option value="'+RC[i].id+'">'+RC[i].n+'</option>';}
  document.getElementById('rPL').innerHTML='<select id="rpick" style="margin-bottom:12px;width:100%;padding:14px 16px;border:1px solid var(--border);border-radius:var(--r);font-size:16px;background:var(--bg);color:var(--tx)">'+opts+'</select>';
  openM('mRP');
  window._pickIdx=idx;
}

function sDP(){
  var sel=document.getElementById('rpick');
  WP[window._pickIdx]=sel.value;
  sd(K.W,WP);clM('mRP');renderPlan();toast('📅 Geplant!');
}

// === STATS ===
function renderStats(){
  var expired=0,expiring=0,lowCount=0;
  var totalVal=0;
  for(var i=0;i<PD.length;i++){
    var p=PD[i];
    if(isExpired(p))expired++;
    if(isExpiringSoon(p))expiring++;
    if(lowStock(p))lowCount++;
    totalVal+=p.price*p.qty;
  }
  var totalItems=PD.length;
  var html='';
  html+='<div class="sc"><div class="sv" style="color:var(--ac)">'+totalItems+'</div><div class="sl">Produkte</div></div>';
  html+='<div class="sc"><div class="sv" style="color:var(--err)">'+expired+'</div><div class="sl">Abgelaufen</div></div>';
  html+='<div class="sc"><div class="sv" style="color:var(--warn)">'+expiring+'</div><div class="sl">Bald ablaufend</div></div>';
  html+='<div class="sc"><div class="sv" style="color:var(--err)">'+lowCount+'</div><div class="sl">Niedrig</div></div>';
  html+='<div class="sc"><div class="sv" style="color:var(--ok)">'+totalVal.toFixed(2)+'€</div><div class="sl">Gesamtwert</div></div>';
  var shopCount=0;for(var i=0;i<SH.length;i++){if(!SH[i].checked)shopCount++;}
  html+='<div class="sc"><div class="sv" style="color:var(--ac)">'+shopCount+'</div><div class="sl">Einkauf offen</div></div>';
  document.getElementById('sG').innerHTML=html;

  var remaining=BD.amount-BD.spent;
  var pct=BD.amount?Math.min(100,BD.spent/BD.amount*100):0;
  var barColor=remaining<0?'var(--err)':remaining<BD.amount*0.2?'var(--warn)':'var(--ok)';
  document.getElementById('budg').innerHTML='<div style="margin-bottom:12px"><strong style="font-size:24px">'+remaining.toFixed(2)+'€</strong> <span style="color:var(--tx2)">/ '+BD.amount+'€</span></div>';
  document.getElementById('budg').innerHTML+='<div class="prog"><div class="prog-bar" style="background:'+barColor+';width:'+pct+'%"></div></div>';
  var msg=remaining<0?'⚠️ Budget überschritten!':remaining<BD.amount*0.2?'⚠️ Fast aufgebraucht':'✅ Gut im Plan';
  document.getElementById('budg').innerHTML+='<p style="font-size:13px;color:var(--tx2);margin-top:8px">'+msg+'</p>';

  // Restock
  var rstkHtml='';
  var rstkCount=0;
  for(var i=0;i<PD.length;i++){if(lowStock(PD[i])&&rstkCount<5){var p=PD[i];rstkHtml+='<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)"><span>'+p.name+' ('+p.qty+' '+p.unit+')</span><button class="b bs" onclick="add2Shop(\''+p.id+'\')" style="padding:6px 12px;font-size:13px">🛒</button></div>';rstkCount++;}}
  document.getElementById('rstk').innerHTML=rstkHtml||'<p style="color:var(--tx2)">Alle Produkte ausreichend ✓</p>';

  // Seasonal
  var month=new Date().getMonth()+1;
  var cur=null;for(var i=0;i<SEASON.length;i++){if(SEASON[i].m===month){cur=SEASON[i];break;}}
  document.getElementById('sason').innerHTML='<div style="font-size:48px;text-align:center;margin-bottom:8px">'+(cur?cur.i:'🌿')+'</div><p style="font-weight:600;margin-bottom:4px">Jetzt Saison: '+(cur?cur.n:'Wurzelgemüse')+'</p><p style="font-size:13px;color:var(--tx2)">Basierend auf deiner Region (Mitteleuropa).</p>';

  // Tips
  var tips=[];
  if(expired>0)tips.push('🗑️ '+expired+' Produkt'+(expired>1?'e':'')+' entsorgen oder auf die Einkaufsliste setzen.');
  if(lowStock>0)tips.push('🛒 '+lowStock+' Produkt'+(lowStock>1?'e':'')+' sind fast aufgebraucht. Smart-Liste erstellen?');
  var hasCleaning=false;for(var i=0;i<PD.length;i++){if(PD[i].category==='Reinigung'){hasCleaning=true;break;}}
  if(!hasCleaning)tips.push('🧹 Du hast noch keine Reinigungsartikel. Waschmittel, Spüler und Allzweckreiniger nicht vergessen!');
  if(tips.length===0)tips.push('✨ Dein Haushalt ist super organisiert!');
  var tipsHtml='';for(var i=0;i<tips.length;i++){tipsHtml+='<div class="tip">'+tips[i]+'</div>';}
  document.getElementById('tips').innerHTML=tipsHtml;
}

function add2Shop(id){
  var p=null;for(var i=0;i<PD.length;i++){if(PD[i].id===id){p=PD[i];break;}}
  if(!p)return;
  var found=false;for(var i=0;i<SH.length;i++){if(SH[i].n===p.name){found=true;break;}}
  if(found){for(var i=0;i<SH.length;i++){if(SH[i].n===p.name){SH[i].q+=p.minQty;break;}}}
  else{SH.push({id:'s'+Date.now()+Math.random().toString(36).substr(2,5),n:p.name,q:p.minQty,u:p.unit,checked:false});}
  sd(K.SH,SH);showS('s1');renderShopping();toast('🛒 '+p.name+' hinzugefügt');
}

// === RECIPES ===
function renderRecipes(){
  var html='';
  if(RC.length===0){html='<div class="es"><div class="ei">🍳</div><div class="et">Keine Rezepte</div></div>';}
  else{
    for(var i=0;i<RC.length;i++){
      var r=RC[i];
      html+='<div class="cd" onclick="showRec(\''+r.id+'\')" style="cursor:pointer">';
      html+='<div style="font-weight:600;margin-bottom:4px">'+r.n+'</div>';
      html+='<div style="font-size:13px;color:var(--tx2)">'+r.c+' · '+r.p+' Portionen · '+r.ing.length+' Zutaten</div>';
      html+='<div style="display:flex;gap:8px;margin-top:8px">';
      html+='<button class="b bs" onclick="event.stopPropagation();addRecShop(\''+r.id+'\')" style="padding:6px 12px;font-size:12px">🛒 Zutaten</button>';
      html+='<button class="b bs" onclick="event.stopPropagation();editRec(\''+r.id+'\')" style="padding:6px 12px;font-size:12px">✏️</button>';
      html+='</div></div>';
    }
  }
  document.getElementById('recL').innerHTML=html;
}

function showRec(id){
  var r=null;for(var i=0;i<RC.length;i++){if(RC[i].id===id){r=RC[i];break;}}
  if(!r)return;
  document.getElementById('rT').textContent=r.n;
  var html='<p style="color:var(--tx2);margin-bottom:16px">'+r.c+' · '+r.p+' Portionen</p>';
  html+='<h3 style="margin-bottom:8px">📝 Zutaten</h3><ul style="margin-bottom:16px;padding-left:20px">';
  for(var i=0;i<r.ing.length;i++){html+='<li style="padding:4px 0">'+r.ing[i].a+' '+r.ing[i].u+' '+r.ing[i].n+'</li>';}
  html+='</ul>';
  html+='<h3 style="margin-bottom:8px">👨‍🍳 Zubereitung</h3><ol style="margin-bottom:16px;padding-left:20px">';
  for(var i=0;i<r.st.length;i++){html+='<li style="padding:6px 0">'+r.st[i]+'</li>';}
  html+='</ol>';
  html+='<button class="b bp" onclick="addRecShop(\''+r.id+'\')" style="width:100%;padding:14px;margin-bottom:8px">🛒 Zutaten auf Einkaufsliste</button>';
  document.getElementById('rC').innerHTML=html;
  openM('mR');
}

function addRecShop(id){
  var r=null;for(var i=0;i<RC.length;i++){if(RC[i].id===id){r=RC[i];break;}}
  if(!r)return;
  for(var i=0;i<r.ing.length;i++){
    var ing=r.ing[i];
    var found=false;for(var j=0;j<SH.length;j++){if(SH[j].n===ing.n){found=true;break;}}
    if(found){for(var j=0;j<SH.length;j++){if(SH[j].n===ing.n){SH[j].q+=ing.a;break;}}}
    else{SH.push({id:'s'+Date.now()+Math.random().toString(36).substr(2,5),n:ing.n,q:ing.a,u:ing.u,checked:false});}
  }
  sd(K.SH,SH);showS('s1');renderShopping();toast(r.n+' → Einkaufsliste!');
}

function openNewRecipe(){
  editRecId=null;
  document.getElementById('rN').value='';
  document.getElementById('rI').value='';
  document.getElementById('rS').value='';
  document.getElementById('rP').value='4';
  openM('mNR');
}

function editRec(id){
  var r=null;for(var i=0;i<RC.length;i++){if(RC[i].id===id){r=RC[i];break;}}
  if(!r)return;
  editRecId=id;
  document.getElementById('rN').value=r.n;
  document.getElementById('rCat').value=r.c;
  document.getElementById('rP').value=r.p;
  var ings='';for(var i=0;i<r.ing.length;i++){ings+=r.ing[i].a+' '+r.ing[i].u+' '+r.ing[i].n+'\n';}
  document.getElementById('rI').value=ings;
  var steps='';for(var i=0;i<r.st.length;i++){steps+=r.st[i]+'\n';}
  document.getElementById('rS').value=steps;
  openM('mNR');
}

function saveNR(){
  var n=document.getElementById('rN').value.trim();
  if(!n){alert('Name fehlt');return;}
  var ingsText=document.getElementById('rI').value.trim();
  var ings=ingsText.split('\n').filter(function(l){return l.trim();}).map(function(l){
    var parts=l.trim().split(/\s+/);
    return{a:parseFloat(parts[0])||1,u:parts[1]||'Stk',n:parts.slice(2).join(' ')||'Unbekannt'};
  });
  var stepsText=document.getElementById('rS').value.trim();
  var steps=stepsText.split('\n').filter(function(l){return l.trim();});
  if(editRecId){
    var r=null;for(var i=0;i<RC.length;i++){if(RC[i].id===editRecId){r=RC[i];break;}}
    if(r){r.n=n;r.c=document.getElementById('rCat').value;r.p=parseInt(document.getElementById('rP').value)||4;r.ing=ings;r.st=steps;}
  } else {
    RC.push({id:'r'+Date.now(),n:n,c:document.getElementById('rCat').value,p:parseInt(document.getElementById('rP').value)||4,ing:ings,st:steps});
  }
  sd(K.R,RC);clM('mNR');renderRecipes();toast('✅ Rezept gespeichert');
}

// === SETTINGS ===
function renderSettings(){
  document.getElementById('budgD').textContent=(BD.amount||0)+'€ ›';
  var catHtml='';
  for(var i=0;i<CA.length;i++){
    catHtml+='<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)"><span>'+CA[i]+'</span><button class="b bd" onclick="remCat(\''+CA[i].replace(/'/g,"\\'")+'\')" style="padding:4px 10px;font-size:12px">✕</button></div>';
  }
  document.getElementById('catL').innerHTML=catHtml;
  var locHtml='';
  for(var i=0;i<LO.length;i++){
    locHtml+='<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)"><span>'+LO[i]+'</span><button class="b bd" onclick="remLoc(\''+LO[i].replace(/'/g,"\\'")+'\')" style="padding:4px 10px;font-size:12px">✕</button></div>';
  }
  document.getElementById('locL').innerHTML=locHtml;
  if(document.getElementById('fSort')){document.getElementById('fSort').value=SF.sort||'name';document.getElementById('fView').value=SF.view||'all';}
}

function addCat(){
  var n=document.getElementById('nc').value.trim();
  if(!n)return;
  if(CA.indexOf(n)>=0){alert('Existiert bereits');return;}
  CA.push(n);sd(K.C,CA);renderSettings();document.getElementById('nc').value='';toast('✅ Kategorie hinzugefügt');
}
function remCat(n){if(!confirm('Löschen?'))return;CA=CA.filter(function(c){return c!==n;});sd(K.C,CA);renderSettings();}
function addLoc(){
  var n=document.getElementById('nl').value.trim();
  if(!n)return;
  LO.push(n);sd(K.L,LO);renderSettings();document.getElementById('nl').value='';toast('✅ Standort hinzugefügt');
}
function remLoc(n){if(!confirm('Löschen?'))return;LO=LO.filter(function(l){return l!==n;});sd(K.L,LO);renderSettings();}
function setBudg(){var amt=prompt('Monatsbudget (€):',BD.amount||200);if(amt!==null){BD.amount=parseFloat(amt)||200;sd(K.B,BD);renderSettings();toast('💰 Budget gesetzt');}}
function editHH(){var name=prompt('Haushaltsname:',HU.name);if(name){HU.name=name;sd(K.H,HU);toast('✅ Aktualisiert');}}
function saveSort(v){SF.sort=v;sd(K.F,SF);refreshAll();}
function saveView(v){SF.view=v;sd(K.F,SF);refreshAll();}

// === EXPORT/IMPORT ===
function expD(){
  var d={products:PD,recipes:RC,categories:CA,locations:LO,shopping:SH,plan:WP,household:HU,budget:BD,settings:SF};
  var json=JSON.stringify(d,null,2);
  var blob=new Blob([json],{type:'application/json'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;a.download='haushalt-vorrat-'+new Date().toISOString().slice(0,10)+'.json';a.click();
  URL.revokeObjectURL(url);toast('📤 Exportiert');
}

function impD(inp){
  var f=inp.files[0];if(!f)return;
  var r=new FileReader();
  r.onload=function(e){
    try{
      var d=JSON.parse(e.target.result);
      if(d.products)PD=d.products;if(d.recipes)RC=d.recipes;if(d.categories)CA=d.categories;
      if(d.locations)LO=d.locations;if(d.shopping)SH=d.shopping;if(d.plan)WP=d.plan;
      if(d.household)HU=d.household;if(d.budget)BD=d.budget;if(d.settings)SF=d.settings;
      sd(K.P,PD);sd(K.R,RC);sd(K.C,CA);sd(K.L,LO);sd(K.SH,SH);sd(K.W,WP);sd(K.H,HU);sd(K.B,BD);sd(K.F,SF);
      toast('✅ Importiert!');refreshAll();
    }catch(err){alert('❌ Fehler: '+err.message);}
  };r.readAsText(f);
}

// === SCANNER ===
function openScanFor(prodId){editId=prodId;openM('mSc');initScan();}
function openScan(){editId=null;openM('mSc');initScan();}

async function initScan(){
  var scr=document.getElementById('scanner');
  document.getElementById('sr').textContent='📷 Barcode scannen oder eingeben';

  // Prüfe ob Kamera + BarcodeDetector verfügbar
  var cameraSupported=false;
  var hasBarcodeDetector=!!window.BarcodeDetector;
  if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
    if(hasBarcodeDetector){
      cameraSupported=true;
    }else{
      try{
        var testStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});
        cameraSupported=true;
        testStream.getTracks().forEach(function(t){t.stop();});
      }catch(e){}
    }
  }

  if(cameraSupported){
    // Kamera-Modus mit Live-Scan
    scr.innerHTML='<div style="position:relative;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#000;">';
    scr.innerHTML+='<video id="scanVideo" playsinline style="width:100%;height:100%;object-fit:cover;max-height:350px;border-radius:12px;"></video>';
    // Scan-Overlay mit Fokusrahmen
    scr+='<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;max-width:300px;height:120px;border:2px solid rgba(0,113,227,0.6);border-radius:4px;pointer-events:none;z-index:1;">';
    scr+='<div style="position:absolute;top:-2px;left:0;width:30px;height:30px;border-top:3px solid #0071e3;border-left:3px solid #0071e3;border-radius:4px 0 0 0;"></div>';
    scr+='<div style="position:absolute;top:-2px;right:0;width:30px;height:30px;border-top:3px solid #0071e3;border-right:3px solid #0071e3;border-radius:0 4px 0 0;"></div>';
    scr+='<div style="position:absolute;bottom:-2px;left:0;width:30px;height:30px;border-bottom:3px solid #0071e3;border-left:3px solid #0071e3;border-radius:0 0 0 4px;"></div>';
    scr+='<div style="position:absolute;bottom:-2px;right:0;width:30px;height:30px;border-bottom:3px solid #0071e3;border-right:3px solid #0071e3;border-radius:0 0 4px 0;"></div>';
    scr+='</div>';
    scr+='<div style="margin-top:10px;display:flex;align-items:center;gap:10px;">';
    scr+='<input id="barcodeInput" type="text" placeholder="Oder Barcode eingeben…" style="flex:1;padding:10px;border:1px solid rgba(255,255,255,0.3);border-radius:8px;font-size:15px;background:rgba(255,255,255,0.1);color:#fff;text-align:center;">';
    scr+='<button id="scanBtn" style="padding:10px 18px;background:#0071e3;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">🔍</button>';
    scr+='</div>';
    scr+='<p id="scanStatus" style="color:rgba(255,255,255,0.6);font-size:11px;margin-top:6px;">Scanne…</p>';
    scr+='</div>';

    // Kamera starten
    try{
      var video=document.getElementById('scanVideo');
      var stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment',width:{ideal:1280},height:{ideal:720},frameRate:{ideal:15}}});
      video.srcObject=stream;
      video.setAttribute('playsinline','true');
      await video.play();

      var scanInterval=null;
      var lastScan='';
      var scanCount=0;

      if(hasBarcodeDetector){
        // Alle unterstützten Formate
        try{
          var detector=new BarcodeDetector({formats:['ean-13','ean-8','code-128','code-39','code-93','qr-code','datamatrix','pdf417','aztec','upc-a','upc-e','itf','codabar']});
          scanCount=0;
          scanInterval=setInterval(function(){
            scanCount++;
            if(video.readyState>=video.HAVE_ENOUGH_DATA){
              detector.detect(video).then(function(barcodes){
                if(barcodes.length>0){
                  clearInterval(scanInterval);
                  var value=barcodes[0].rawValue;
                  document.getElementById('scanStatus').textContent='✅ Gescannt!';
                  handleScan(value);
                }
              }).catch(function(e){
                // Ignorieren
              });
            }
          },200);
        }catch(e){
          // BarcodeDetector mit falschen Formats → Fallback auf Kamera + manuell
          document.getElementById('scanStatus').textContent='⚠️ Manueller Barcode-Eingabe nötig';
        }
      }else{
        // Kein BarcodeDetector → manueller Modus
        document.getElementById('scanStatus').textContent='📷 Kamera aktiv — Barcode manuell eingeben';
      }
      window._scanInterval=scanInterval;

      // Eingabe-Listener
      document.getElementById('barcodeInput').addEventListener('keyup',function(e){
        if(e.key==='Enter')handleScan(this.value);
      });
      document.getElementById('scanBtn').addEventListener('click',function(){
        var val=document.getElementById('barcodeInput').value.trim();
        if(val)handleScan(val);
      });
    }catch(e){
      // Kamera fehlgeschlagen → manueller Modus
      scr.innerHTML='<div style="text-align:center;padding:30px 20px">';
      scr+='<div style="font-size:48px;margin-bottom:12px">📷</div>';
      scr+='<p style="color:var(--tx2);font-size:14px;margin-bottom:16px;">Barcode manuell eingeben</p>';
      scr+='<input id="barcodeInput" type="text" placeholder="Barcode eingeben…" style="width:85%;padding:14px;border:2px solid var(--ac);border-radius:12px;font-size:16px;background:var(--bg);color:var(--tx);text-align:center;">';
      scr+='<p style="color:var(--tx2);font-size:12px;margin-top:10px;">12-stelliger Barcode (z.B. von Getränkedose, Schokolade)</p>';
      scr+='</div>';
      document.getElementById('barcodeInput').addEventListener('keyup',function(e){
        if(e.key==='Enter')handleScan(this.value);
      });
    }
  }else{
    // Kein Kamera-Support
    scr.innerHTML='<div style="text-align:center;padding:30px 20px">';
    scr+='<div style="font-size:48px;margin-bottom:12px">📷</div>';
    scr+='<p style="color:var(--tx2);font-size:14px;margin-bottom:16px;">Barcode manuell eingeben</p>';
    scr+='<input id="barcodeInput" type="text" placeholder="Barcode eingeben…" style="width:85%;padding:14px;border:2px solid var(--ac);border-radius:12px;font-size:16px;background:var(--bg);color:var(--tx);text-align:center;">';
    scr+='<p style="color:var(--tx2);font-size:12px;margin-top:10px;">12-stelliger Barcode (z.B. von Getränkedose, Schokolade)</p>';
    scr+='</div>';
    document.getElementById('barcodeInput').addEventListener('keyup',function(e){
      if(e.key==='Enter')handleScan(this.value);
    });
  }
}

function doScan(){
  var input=document.getElementById('barcodeInput');
  if(!input)return;
  handleScan(input.value);
}

async function handleScan(barcode){
  var code=barcode.replace(/[^0-9]/g,'');
  if(code.length<6){toast('Barcode zu kurz ('+code.length+' Ziffern)');return;}
  try{
    var r=await fetch('https://world.openfoodfacts.org/api/v2/product/'+code+'.json');
    var d=await r.json();
    if(d.status===1&&d.product){
      var p=d.product;
      openProd();
      setTimeout(function(){
        document.getElementById('pN').value=p.product_name||'';
        document.getElementById('pM').value=p.brands||'';
        document.getElementById('pS').value=p.quantity||'';
        document.getElementById('pB').value=barcode;
        toast('✅ Produkt gefunden: '+p.product_name);
      },100);
    }
    else{toast('Produkt nicht gefunden — Name manuell eingeben');openProd();document.getElementById('pB').value=barcode;}
  }catch(e){toast('Netzwerkfehler — Barcode gespeichert, manuell eingeben');openProd();document.getElementById('pB').value=barcode;}
}

function closeScan(){
  if(window._scanInterval){clearInterval(window._scanInterval);window._scanInterval=null;}
  var video=document.getElementById('scanVideo');
  if(video&&video.srcObject){video.srcObject.getTracks().forEach(function(t){t.stop();});}
  clM('mSc');
  document.getElementById('scanner').innerHTML='';
}

// === UTILS ===
function fRecL(q){
  q=q||'';
  var list=[];
  for(var i=0;i<RC.length;i++){
    if(!q||RC[i].n.toLowerCase().indexOf(q)>=0)list.push(RC[i]);
  }
  var html='';
  for(var i=0;i<list.length;i++){
    html+='<div style="padding:12px;border-bottom:1px solid var(--border);cursor:pointer" onclick="document.getElementById(\'rpick\').value=\''+list[i].id+'\'">'+list[i].n+' <small style="color:var(--tx2)">('+list[i].p+' Port.)</small></div>';
  }
  document.getElementById('rPL').innerHTML=html;
}

// === INIT ===
function refreshAll(){
  PD=gd(K.P);RC=gd(K.R);CA=gd(K.C);LO=gd(K.L);SH=gd(K.SH);WP=gd(K.W);
  HU=gd(K.H)||{name:'Mein Haushalt'};BD=gd(K.B)||{amount:0,spent:0};SF=gd(K.F)||{sort:'name',view:'all'};
  // Sicherstellen dass Arrays wirklich Arrays sind
  if(!Array.isArray(PD))PD=[];
  if(!Array.isArray(RC))RC=[];
  if(!Array.isArray(CA))CA=[];
  if(!Array.isArray(LO))LO=[];
  if(!Array.isArray(SH))SH=[];
  if(!Array.isArray(WP))WP=[];
  seed();
  populateSel();
  renderHome();
  renderShopping();
  renderPlan();
  renderStats();
  renderRecipes();
  renderSettings();
}

// Start when DOM is ready
(function(){
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){refreshAll();});}
  else{refreshAll();}
})();
