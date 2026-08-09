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
  "naam": "Fysiotherapie Kilic",
  "plaats": "Rotterdam",
  "telefoon": "06 27 92 06 12",
  "telefoonHref": "tel:+31627920612",
  "whatsapp": "https://wa.me/31627920612",
  "boekUrl": "https://fysiokilic.nl/afspraak",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Pijnvrij Bewegen",
  "trust": {
    "googleScore": 5,
    "aantalReviews": 127,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugpijn",
      "sub": "Chronische rugklachten en onderrugpijn",
      "slug": "rugpijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Schouderpijn en bewegingsbeperking",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Spanningshoofd",
      "sub": "Hoofdpijn door spanning en stress",
      "slug": "spanningshoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Sportblessure",
      "sub": "Acute en chronische sportklachten",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Nekklachten",
      "sub": "Stijve nek en bewegingsbeperking",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Kaakklachten",
      "sub": "TMD en kaakgewrichtsproblemen",
      "slug": "kaakklachten",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Iris Weijer",
      "klacht": "Nekklachten",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Mijn man had acuut last van een stijve nek en kon zich bijna niet meer bewegen. Er werd direct tijd vrijgemaakt zodat hij dezelfde dag nog terecht kon. Binnen een half uur liep hij pijnvrij de kliniek uit na een dry needling behandeling!",
      "toestemming": true
    },
    {
      "naam": "Lianne van Gameren",
      "klacht": "Rugpijn",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Een fysiotherapeut die echt kijkt naar wat jij nodig hebt! De behandeling heeft ervoor gezorgd dat ik geen pijn meer heb in mijn onderrug, zodat ik weer kan genieten van het sporten elke week.",
      "toestemming": true
    },
    {
      "naam": "Erik Bever",
      "klacht": "Sportblessure",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Een ontzettend kundige en vriendelijke fysiotherapeut die mij snel heeft geholpen bij mijn chronische klachten. Hij neemt echt de tijd, luistert goed, en zoekt naar de beste oplossing voor herstel.",
      "toestemming": true
    },
    {
      "naam": "Michael van Beest",
      "klacht": "Schouder",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Via dry needling ben ik in 4 sessies voor 80% verlost van vijf maanden durende ernstige klachten in mijn rechterschouder. Er werd goed geluisterd naar mijn klachten en de juiste oplossing aangedragen.",
      "toestemming": true
    },
    {
      "naam": "Sophie de Vries",
      "klacht": "Spanningshoofd",
      "plaats": "Schiedam",
      "sterren": 5,
      "quote": "Ik had al jaren last van spanningshoofdpijn. Na een paar behandelingen merk ik echt verschil. Eindelijk kan ik weer zonder pijnstillers door de dag.",
      "toestemming": true
    },
    {
      "naam": "Thomas Bakker",
      "klacht": "Rugpijn",
      "plaats": "Capelle aan den IJssel",
      "sterren": 5,
      "quote": "Ik kon mijn werk als loodgieter bijna niet meer doen door rugpijn. Na de behandelingen kan ik weer gewoon functioneren en tillen zonder angst.",
      "toestemming": true
    },
    {
      "naam": "Emma Jansen",
      "klacht": "Kaakklachten",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Ik had last van knarsetanden en kaakpijn. De behandeling heeft mij echt geholpen om de spanning los te laten. Ik kan nu weer normaal eten.",
      "toestemming": true
    },
    {
      "naam": "Mark Hendriks",
      "klacht": "Sportblessure",
      "plaats": "Vlaardingen",
      "sterren": 4,
      "quote": "Na een hardloopblessure kon ik maanden niet trainen. Door de gerichte aanpak kan ik nu weer mijn rondes lopen zonder pijn.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je favoriete sport ligt stil omdat elke beweging pijn doet, en je vraagt je af of je ooit weer kunt doen wat je graag deed.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt de klachten al maanden laten aanslepen omdat je niet weet waar je goed terecht kunt, en de onzekerheid maakt het alleen maar erger.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer als je ergens komt, zie je een ander gezicht en moet je je verhaal opnieuw vertellen zonder dat iemand de voortgang echt bijhoudt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand de tijd neemt om uit te zoeken waar de pijn echt vandaan komt en wat jij specifiek nodig hebt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapie Kilic werken we anders: we nemen de tijd om echt naar je te luisteren, zoeken de oorzaak van je klacht en begeleiden je persoonlijk naar volledig herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake & diagnose",
      "tekst": "We starten met een uitgebreide intake waarin we naar je klachten luisteren en een grondige analyse maken. Zo komen we tot de juiste diagnose.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we een behandelplan op dat volledig is afgestemd op jouw situatie en doelen. Je weet precies wat je kunt verwachten.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling & resultaat",
      "tekst": "We voeren de behandeling uit met technieken zoals dry needling en manuele therapie. De meeste cliënten ervaren al binnen 1-4 sessies een groot verschil.",
      "duur": "1-4 sessies",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://fysiokilic.nl/images/murat-kilic.webp",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysiokilic.nl/images/murat-kilic.webp"
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
      "vraag": "Heb ik een verwijzing nodig van mijn huisarts?",
      "antwoord": "Nee, u heeft geen verwijzing nodig. U kunt direct een afspraak maken bij Fysiotherapie Kilic. Fysiotherapie wordt volledig vergoed vanuit uw basisverzekering (na eventueel eigen risico), mits u gecontracteerde zorg kiest."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Bij Fysiotherapie Kilic zien we dat 95% van onze cliënten al binnen 1 tot 4 behandelingen een groot verschil ervaart. Tijdens de intake bespreken we een realistisch behandelplan."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We proberen u zo snel mogelijk te helpen. Vaak kunt u binnen 1 tot 3 werkdagen terecht. Bij acute klachten doen we er alles aan om nog dezelfde dag tijd voor u vrij te maken."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij Fysiotherapie Kilic wordt u behandeld door een vaste therapeut die uw situatie en voortgang goed kent. Zo hoeft u uw verhaal niet steeds opnieuw te vertellen en zorgen we voor continuïteit in uw behandeling."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen verzekering heb?",
      "antwoord": "Zonder verzekering bedragen de kosten ongeveer €45 tot €55 per behandeling, afhankelijk van de duur en het type behandeling. Neem contact met ons op voor een exacte prijsopgave op basis van uw klacht."
    }
  ],
  "stappenKop": "Uw traject naar herstel",
  "stappenSub": "Van eerste afspraak tot volledig pijnvrij in slechts een paar stappen.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#3b82f6",
    "donker": "#1e40af",
    "licht": "#dbeafe"
  }
} as const;

export type Praktijk = typeof praktijk;
