/* ============================================================
   KLANTCONTENT — automatisch gegenereerd, niet handmatig bewerken.
   ============================================================ */

export type Sterren = 1 | 2 | 3 | 4 | 5;

export type Review = {
  naam: string;
  klacht: string;
  plaats: string;
  sterren: Sterren;
  quote: string;
  toestemming: true;
};

export type Teamlid = {
  naam: string;
  functie: string;
  specialisatie: string;
  foto: string;
  uitgelicht?: boolean;
};

export type Klacht = {
  label: string;
  sub: string;
  slug: string;
  icoon: string;
  afbeelding?: string;
};

export type Stap = {
  titel: string;
  tekst: string;
  duur: string;
  foto: string;
  video?: string;
};

export type Verzekeraar = {
  naam: string;
  logo: string;
  gecontracteerd: boolean;
  toelichting: string;
};

export type Feit = { titel: string; tekst: string };
export type FaqItem = { vraag: string; antwoord: string };

export const praktijk = {
  "naam": "Fysio Bakker",
  "plaats": "Leeuwarden",
  "telefoon": "058 - 203 83 10",
  "telefoonHref": "tel:+31582038310",
  "whatsapp": "https://wa.me/31582038310",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijven Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 287,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug",
      "sub": "Lage rugpijn, hernia, ischias en chronische rugklachten",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, impingement, rotator cuff blessures",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Nek",
      "sub": "Nekpijn, whiplash, hoofdpijn vanuit de nek",
      "slug": "nekklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessure",
      "sub": "Enkelverzwikking, hamstringblessure, overbelasting",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Knie",
      "sub": "Meniscusklachten, artrose, patella problemen",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanning hoofdpijn, cervicogene hoofdpijn, migraine",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Sanne",
      "klacht": "Rug",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na maanden last van mijn onderrug eindelijk hulp gevonden. De behandeling was gericht en effectief. Ik kan weer gewoon mijn werk doen.",
      "toestemming": true
    },
    {
      "naam": "Pieter",
      "klacht": "Schouder",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek onoverkomelijk, maar dankzij de manuele therapie en dry needling heb ik nu weer vrijwel volledige beweging. Heel dankbaar!",
      "toestemming": true
    },
    {
      "naam": "Janine",
      "klacht": "Nek",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Ik had chronische nekpijn en hoofdpijn. De therapeut vond snel de oorzaak en de behandeling hielp meteen. Eindelijk verlichting.",
      "toestemming": true
    },
    {
      "naam": "Mark",
      "klacht": "Sportblessure",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Als hardloper had ik een hardnekkige knieblessure. Het herstelplan was persoonlijk en realistisch. Nu loop ik weer mijn trainingen zonder problemen.",
      "toestemming": true
    },
    {
      "naam": "Eline",
      "klacht": "Knie",
      "plaats": "Damwoude",
      "sterren": 4,
      "quote": "De knieklachten speelden al langer, maar hier namen ze echt de tijd om naar me te luisteren. De oefeningen werken goed en ik merk al duidelijk vooruitgang.",
      "toestemming": true
    },
    {
      "naam": "Geert",
      "klacht": "Hoofdpijn",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Jarenlang last van hoofdpijn gehad. Via het hoofdpijnnetwerk kreeg ik de juiste behandeling en begeleiding. De klachten zijn nu minimaal.",
      "toestemming": true
    },
    {
      "naam": "Anne",
      "klacht": "Rug",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Fijne praktijk, deskundige therapeuten. Mijn rugklachten zijn grotendeels verdwenen en ik heb handvatten gekregen om ze zelf onder controle te houden.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Schouder",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Ik kon mijn arm niet meer optillen. Na zes behandelingen kan ik weer alles doen. Professioneel en betrokken team.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt al weken of maanden pijn, maar niemand lijkt te begrijpen hoe beperkend het werkelijk is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je probeert je klachten te negeren, maar merkt dat je steeds meer activiteiten moet laten schieten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je bent bang dat de pijn nooit meer weggaat en dat je moet leren leven met beperkingen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je wilt graag weer actief zijn, maar durft niet goed meer te bewegen uit angst voor verergering.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we deze frustraties. Onze ervaren therapeuten nemen uitgebreid de tijd voor een grondige analyse en stellen een behandelplan op dat écht bij jou past. Met onze brede expertise onder één dak helpen we je stap voor stap terug naar een actief leven zonder pijn.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Onze fysiotherapeuten pakken jouw klacht aan met gerichte mobilisaties, manuele technieken en functionele oefentherapie. We zorgen voor snelle pijnverlichting en herstel van normale bewegingspatronen zodat je snel weer kunt doen wat je wilt.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Bij complexe gewrichts- en spierklachten zetten we manuele therapie in. Door specifieke mobilisaties van gewrichten en wervels verbeteren we de functie en verminderen we pijn effectief. Ideaal voor hardnekkige nek-, rug- en schouderklachten.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry Needling",
      "tekst": "Met dry needling behandelen we pijnlijke triggerpunten in spieren die niet reageren op reguliere therapie. Deze techniek geeft vaak snel verlichting bij chronische spierpijn, hoofdpijn en sportblessures. Je merkt vaak direct effect na de behandeling.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Lars Jansen",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Sportblessures en revalidatie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10273&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Sophie de Vries",
      "functie": "Manueel therapeut",
      "specialisatie": "Nek- en hoofdpijnklachten",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10276&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Tim Bakker",
      "functie": "Fysiotherapeut",
      "specialisatie": "Chronische pijnbehandeling",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10278&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Eva Posthumus",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Loopblessures en knieproblematiek",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10267&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Joris van Dijk",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Schouder- en rugklachten",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10271&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Marloes Visser",
      "functie": "Manueel therapeut",
      "specialisatie": "Gewrichtsklachten en artrose",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10348&max=730",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.fysiobakker.nl/uploads/images/Full-HD/fysiobakker-groepsfoto-home-002.jpg"
  },
  "vergoeding": {
    "peiljaar": 2026,
    "laatstGecontroleerd": "januari 2026",
    "feiten": [
      {
        "titel": "Geen verwijzing nodig",
        "tekst": "Je mag rechtstreeks een afspraak maken. Een bezoek aan de huisarts is niet verplicht."
      },
      {
        "titel": "Meestal uit je aanvullende pakket",
        "tekst": "Hoeveel behandelingen je krijgt hangt af van je pakket. Wij zoeken het gratis voor je uit."
      },
      {
        "titel": "Geen eigen risico bij aanvullend",
        "tekst": "Vergoeding uit de aanvullende verzekering raakt je eigen risico niet."
      }
    ],
    "verzekeraars": [
      {
        "naam": "Zilveren Kruis",
        "logo": "",
        "gecontracteerd": true,
        "toelichting": "Wij hebben een contract met Zilveren Kruis. Je fysiotherapie wordt vergoed uit je aanvullende pakket."
      },
      {
        "naam": "CZ",
        "logo": "",
        "gecontracteerd": true,
        "toelichting": "Wij zijn gecontracteerd door CZ. Vergoeding loopt via je aanvullende verzekering."
      },
      {
        "naam": "VGZ",
        "logo": "",
        "gecontracteerd": true,
        "toelichting": "Wij hebben een contract met VGZ. Wij zoeken gratis voor je uit hoeveel behandelingen jouw pakket dekt."
      },
      {
        "naam": "Menzis",
        "logo": "",
        "gecontracteerd": true,
        "toelichting": "Wij zijn gecontracteerd door Menzis. Vergoeding komt uit je aanvullende pakket."
      },
      {
        "naam": "ONVZ",
        "logo": "",
        "gecontracteerd": true,
        "toelichting": "Wij hebben een contract met ONVZ. Wij regelen de declaratie rechtstreeks."
      },
      {
        "naam": "DSW",
        "logo": "",
        "gecontracteerd": true,
        "toelichting": "Wij zijn gecontracteerd door DSW. Je fysiotherapie loopt via je aanvullende verzekering."
      },
      {
        "naam": "Zorg en Zekerheid",
        "logo": "",
        "gecontracteerd": false,
        "toelichting": "Met Zorg en Zekerheid hebben wij geen contract. Behandelingen zijn mogelijk, maar de vergoeding kan lager uitvallen. Wij zoeken het gratis voor je uit."
      }
    ],
    "disclaimer": "Gegevens gecontroleerd in januari 2026 en gebaseerd op de polisvoorwaarden van 2026. Aan deze informatie kun je geen rechten ontlenen, je polisvoorwaarden zijn leidend."
  },
  "faq": [
    {
      "vraag": "Heb ik een verwijzing van de huisarts nodig?",
      "antwoord": "Nee, sinds 2006 kun je direct naar de fysiotherapeut zonder verwijzing. Je kunt zelf een afspraak maken via telefoon, WhatsApp of online. Bij bepaalde aanvullende verzekeringen is een verwijzing soms wel nodig voor vergoeding, controleer dit bij je verzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Bij de eerste behandeling stellen we een behandelplan op met een inschatting van het aantal benodigde sessies. Voor acute klachten zijn vaak 3-6 behandelingen voldoende, bij chronische klachten kan het langer duren. We evalueren regelmatig de voortgang."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij Fysio Bakker streven we ernaar om binnen 24 uur een afspraak in te plannen. Voor spoedgevallen doen we ons uiterste best om je nog dezelfde dag te helpen. Dankzij onze acht locaties en grote team kunnen we flexibel inspelen op jouw planning."
    },
    {
      "vraag": "Krijg ik altijd dezelfde therapeut?",
      "antwoord": "Ja, we vinden continuïteit belangrijk. Je krijgt een vaste therapeut toegewezen die je behandeltraject begeleidt. Mocht je therapeut niet beschikbaar zijn, dan wordt je behandeld door een collega die volledig op de hoogte is van jouw situatie via ons dossier."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere fysiotherapiebehandeling kost €37,50 tot €42,50 per sessie, afhankelijk van de behandelduur. Manuele therapie kost €42,50 per sessie. Specialistische behandelingen zoals dry needling of echografie kunnen iets meer kosten. We informeren je vooraf altijd over de kosten."
    }
  ],
  "stappenKop": "Ons behandelaanbod",
  "stappenSub": "Breed scala aan specialisaties voor optimaal herstel onder één dak",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ff5722",
    "donker": "#e64a19",
    "licht": "#ffebe6"
  }
} as const;

export type Praktijk = typeof praktijk;
