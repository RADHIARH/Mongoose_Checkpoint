const mongoose = require("mongoose");
// import models
const users = require("./model/users");
const electro_product = require("./model/electromenager");
const cuisine_products = require("./model/cuisine");
const pc = require("./model/pc.js");
// connect to mongodb cluster
const url = `mongodb+srv://radhia_rh:RADHIARAHMANI2022@cluster0.b8mc7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database "); //Success
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`); //Failure
  });

// users list
const data = [
  {
    Lastname: "Ben Lahmer",
    Firstname: "Fares",
    Email: "fares@gmail.com",
    age: 26,
    password: "faresfares26",
  },
  {
    Lastname: "Fatnassi",
    Firstname: "Sarra",
    Email: "sarra.f@gmail.com",
    age: 40,
    password: "SarraSarourra1996",
  },
  {
    Lastname: "Ben Yahia",
    Firstname: "Rym",
    age: 4,
    password: "Rymbenyahia",
  },
  {
    Lastname: "Cherif",
    Firstname: "Sami",
    age: 3,
    password: "sami1587423",
  },
];
// insert users list to mongodb database
users
  .insertMany(data)
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
// list of products (category:electromenager)
const data1 = [
  {
    nom: "Machine à Café Nespresso Magimix Inissia - Noir",
    url: "https://tdiscount.tn/modules/tdiselectro/scripts/webp-img/ELE3.png.webp",
    prix: 399,
    puissance: 1260,
    pression: 19,
    capacite: 0.7,
    points_forts:
      "Détartrage automatique | Longueurs de tasses multiples |Mise en veille (économiseur d'énergie) | Nettoyage facile | Repose tasse ajustable",
    garantie: 1,
  },
  {
    nom: "Mini Four électrique Simfer 45 L avec afficheur - Noir",
    url: "https://tdiscount.tn/modules/tdiselectro/scripts/webp-img/ELE4.png.webp",
    prix: 279,
    puissance: 1400,
    pression: 19,
    capacite: 0.7,
    points_forts:
      "Horloge numérique programmable Bouton pop-up dissimulable Fonction Yaourt - Defrost Nettoyage Vapeur - Cavite Emaillee Chaleur Tournante - 1 x Grille - 1 x plateau Rond - 1 x plateau Rectangulaire ",
    garantie: 1,
  },
  {
    nom: "Cafetière Korkmaz Smart 4 tasses - Inox",
    url: "https://tdiscount.tn/modules/tdiselectro/scripts/webp-img/ELE2.png.webp",
    prix: 84.0,
    puissance: 400,
    pression: 18,
    capacite: 4,
    points_forts:
      "Fonction rotative à 360 ° C | Système de sécurité qui empêche le fonctionnement sans eau | Poignée ergonomique | Corps élégant en inox ",
    garantie: 1,
  },
  {
    nom: "Grille Viande Korkmaz 1800 W - Rose Gold",
    url: "https://tdiscount.tn/modules/tdiselectro/scripts/webp-img/ELE1.png.webp",
    prix: 189,
    puissance: 1800,
    pression: 18,
    capacite: 4,
    points_forts:
      "Grilles 100% aluminium moulé | Cuisson et de friture polyvalentes ",
    garantie: 1,
  },
  {
    nom: "Machine à laver automatique Whirlpool 8 Kg 1200tr/mn - Blanc",
    prix: 1979,
    puissance: 1900,
    url: "https://tdiscount.tn/modules/tdiselectro/scripts/webp-img/ELE5.png.webp",
    pression: 18,
    capacite: 8,
    points_forts:
      "Technologie 6ème Sens | FreshCare+ | Front loader | Thermostat réglable | Afficheur texte LCD ",
    garantie: 1,
  },
  {
    nom: "Réfrigérateur No Frost Combiné Whirlpool 338L 6ème Sens - Inox",
    url: "https://tdiscount.tn/modules/tdiselectro/scripts/webp-img/ELE6.png.webp",
    prix: 2259,
    pression: 20,
    puissance: 1800,
    capacite: 388,
    points_forts:
      "6ème Sens Control | Alarme température | Réfrigération rapide | Plateau à accès direct | Clever out",
    garantie: 1,
  },
];
// insert data (category:electromenager) to mongodb database
electro_product
  .insertMany(data1)
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
// list of products (category:cuisine)
const data2 = [
  {
    url: "https://tdiscount.tn/modules/tdistvson/scripts/webp-img/CUI5.png.webp",
    nom: "Théière Korkmaz Hera-Rouge",
    prix: 87,
    materiau: "Inox 18-10 Cr-Ni",
    points_forts:
      "Poignées ergonomiques en acier inoxydable qui ne brûlent pas à la main | Base triple capsule | Soigneusement poli pour conserver la brillance | Design exclusif",
    garantie: 1,
  },
  {
    url: "https://tdiscount.tn/modules/tdistvson/scripts/webp-img/CUI4.png.webp",
    prix: 29,
    nom: "Casserole",
    materiau: "Aluminium ",
    points_forts:
      "Adaptée à tous types feux sauf induction | Durable et léger, excellent diffuseur de chaleur | Poignée Fixe | Facile à nettoyer Fabriqué en France",
    garantie: 1,
  },
  {
    url: "https://tdiscount.tn/modules/tdistvson/scripts/webp-img/CUIS1.png.webp",
    prix: 95,
    nom: "Poêle à griller Korkmaz Gusto 35 cm *25 cm",
    materiau: "Aluminium moulé",
    points_forts:
      "Extrêmement résistante aux rayures | Performance 2 fois plus élevée | Compatible avec tous feux y compris induction",
    garantie: 1,
  },
  {
    url: "https://tdiscount.tn/modules/tdiselectro/scripts/webp-img/ELE5.png.webp",
    nom: "Faitout Korkmaz Alfa 26 cm",
    prix: 99,
    materiau: "Inox",
    points_forts:
      "Faitout  avec poignées et boutons ergonomiques en acier inoxydable au toucher Surfaces extérieures soigneusement polies qui conservent leur éclat Système de base solaire",
    garantie: 1,
  },
  {
    nom: "Moule à Tarte Tefal 24 cm",
    prix: 19,
    materiau: "Aluminium",
    points_forts:
      "Répartition parfaite de la chaleur | Design élégant et élégant | Facile à nettoyer  | Lavable au Lave-vaisselle | Un revêtement en granit",
    url: "https://tdiscount.tn/modules/tdistvson/scripts/webp-img/CUIS2.png.webp",
    garantie: 1,
  },
  {
    nom: "Poêle Tefal Wok Cook & Clean 28 Cm",
    prix: 19,
    url: "https://tdiscount.tn/modules/tdistvson/scripts/webp-img/CUIS3.png.webp",
    materiau: "Aluminium",
    points_forts:
      "Matériau : aluminium - Utilisation sur tables de cuisson : Gaz-électrique- céramique - halogéne | Compatible lave-vaisselle |adaptée au gaz| 100 % FACILE A NETTOYER gamme revêtue à l'intérieur et à l'extérieur pour un nettoyage ultra simple et facile à utiliser même pour les cuisiniers débutant | Fabriqué en France",
    garantie: 1,
  },
];
// insert data(category :cuisine) to mongodb database
cuisine_products
  .insertMany(data2)
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
//  list of products (category: pc)
const data3 = [
  {
    nom: "Ordinateur Portable Lenovo IdeaPad 3 15IGL05 N4020 4Go 1To - Bleu",
    prix: 785.0,
    processeur: "Intel Celeron N4020",
    disque_dur: "1To HDD",
    ram: "4 Go DDR4-2400",
    systeme_exploitation: "FreeDos",
    carte_graphique: "Intel UHD Graphics",
    taille_ecran: "15,6 pouces | Résolution : FULL HD ",
    connecteurs:
      "1 port USB 2.0 | 2 ports USB 3.2 Gen 1 | 1 port HDMI 1.4b | 1 prise combinée casque/microphone (3,5 mm) | lecteur de carte",
    perepheriques: "Wifi |  Bluetooth",
    garantie: 1,
    url: "https://tdiscount.tn/modules/tdispc/scripts/webp-img/PC2_20220321082309.png.webp",
  },
  {
    nom: "Ordinateur Portable Asus X509FA i3 10ème génération 12Go 1To - Bleu",
    url: "https://tdiscount.tn/modules/tdispc/scripts/webp-img/P6_20220321082435.png.webp",
    prix: 1469,
    processeur:
      "Intel Core i3-10110U (2.10 GHz up to 4.10 GHz, 4Mo Mémoire cache, Dual-Core",
    ram: "12Go DDR4",
    disque_dur: "1 To",
    systeme_exploitation: "Windows 10",
    carte_graphique: "Intel HD Graphics",
    connecteurs:
      "1 port USB 3.2 | 1 port USB 3.2 Type C | 2 port USB 2.0 | 1 port HDMI | 1 prise audio COMBO | Lecteur carte mémoire",
    taille_ecran: "15.6| Résolution:HD",
    perepheriques: "Wifi |  Bluetooth",
    garantie: 1,
  },
  {
    nom: "Ordinateur Portable HP 15-dw3020nk i3 11éme génération 4 Go 256Go SSD - Noir",
    prix: 1499,
    url: "https://tdiscount.tn/modules/tdispc/scripts/webp-img/PC3_20220321082522.png.webp",
    processeur: "Intel Core i3 11éme génération i3-1115G4",
    ram: "4Go DDR4 ",
    disque_dur: "256 Go SSD",
    systeme_exploitation: "Windows 10 Home",
    carte_graphique: "Intel® UHD Graphics",
    connecteurs:
      "1 port USB Type-C | 2 ports USB Type-A | 1 port HDMI 1.4b |1 port RJ-45 | 1 prise secteur Smart Pin | 1 prise combinée casque/microphone",
    taille_ecran: "15.6 | Résolution : HD",
    perepheriques: "Wifi |  Bluetooth",
    garantie: 1,
  },
  {
    url: "https://tdiscount.tn/modules/tdispc/scripts/webp-img/P3_20220321082552.png.webp",
    nom: "Ordinateur Portable HP 15-dw3020nk i3 11éme génération 4 Go 256Go SSD - Noir",
    prix: 2399.0,
    processeur: "Intel Core i5 11éme génération",
    ram: "4Go DDR4 ",
    disque_dur: "512Go SSD",
    systeme_exploitation: "Windows 11 Famille",
    carte_graphique: "Intel® UHD Graphics",
    connecteurs: "1 USB-C | 1 USB 3.2 Gen 1 | 2 USB 2.0 (USB-A)",
    taille_ecran: "15.6 IPS (1920x1080)",
    perepheriques: "Wifi |  Bluetooth 5.0",
    garantie: 1,
  },
  {
    url: "https://tdiscount.tn/modules/tdispc/scripts/webp-img/P5_20220321082634.png.webp",
    nom: "Ordinateur Portable Dell Vostro 3510 i7 11ème génération 8 Go 1 To - Noir",
    prix: 2519.0,
    processeur: "Intel Core I7-1165G7",
    ram: "8Go",
    disque_dur: "512Go SSD1 To",
    systeme_exploitation: "Ubuntu",
    carte_graphique: "INVIDIA GeForce RTX 3050 avec 2 GB de mémoire",
    connecteurs:
      " 2 ports USB 3.2 Gen 1 | 1 port USB 2.0 | 1 prise audio | 1 port HDMI 1.4 | 1 port RJ-45 rabattable 10/100/1000 Mbps",
    taille_ecran: "15.6| Résolution : FHD",
    perepheriques: "Wifi |  Bluetooth 5.0",
    garantie: 1,
  },
  {
    url: "https://tdiscount.tn/modules/tdispc/scripts/webp-img/PC1_20220321083317.png.webp",
    nom: "Ordinateur Portable Gaming MSI GL75 Leopard i7 10ème génération 16 Go 512 Go SSD - Noir",
    prix: 3999,
    processeur: "Intel Core i7-10750H",
    ram: "16 Go DDR4 ",
    disque_dur: "512Go SSD",
    systeme_exploitation: "FreeDos",
    carte_graphique: "NVIDIA GeForce RTX 2060 | 6Go de mémoire dédiée GDDR6",
    connecteurs:
      "USB Type-A 3.2 Gen1| USB Type-C 3.2 Gen2 | Mini DisplayPort | HDMI 1.4 et RJ45",
    taille_ecran:
      "17.3 pouces | Résolution : FHD | Taux de rafraichissement: 144Hz",
    perepheriques: "Wifi |  Bluetooth 5.0",
    garantie: 1,
  },
];
// insert data (category:pc) to mongodb database
pc.insertMany(data3)
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
