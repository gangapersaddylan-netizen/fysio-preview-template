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
    "aantalReviews": 70,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Nek & Schouder",
      "sub": "Stijve nek, schouderpijn en spanningsklachten",
      "slug": "nek-schouder",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rugpijn",
      "sub": "Chronische rugklachten en onderrugpijn",
      "slug": "rugpijn",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessures",
      "sub": "Herstel na sportblessures en overbelasting",
      "slug": "sportblessures",
      "icoon": "Activity"
    },
    {
      "label": "Kaakklachten",
      "sub": "TMD, kaakpijn en aangezichtsklachten",
      "slug": "kaakklachten",
      "icoon": "Brain"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn en nekgerelateerde hoofdpijn",
      "slug": "hoofdpijn",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Iris Weijer",
      "klacht": "Nek & Schouder",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Mijn man had acuut een stijve nek en kon zich bijna niet bewegen. Er werd direct tijd vrijgemaakt. Na een dry needling behandeling liep hij binnen een half uur pijnvrij de kliniek uit.",
      "toestemming": true
    },
    {
      "naam": "Lianne van Gameren",
      "klacht": "Rugpijn",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "De dry needling behandeling heeft ervoor gezorgd dat ik geen pijn meer heb in mijn onderrug. Ik kan weer sporten elke week.",
      "toestemming": true
    },
    {
      "naam": "Erik Bever",
      "klacht": "Sportblessures",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Hij heeft me snel geholpen bij mijn chronische klachten en langdurige blessures. Neemt echt de tijd, luistert goed, en zoekt naar de beste oplossing. Ik voel me weer als vanouds.",
      "toestemming": true
    },
    {
      "naam": "Michael van Beest",
      "klacht": "Nek & Schouder",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Via dry needling ben ik in 4 sessies voor 80% verlost van vijf maanden durende ernstige klachten in mijn rechterschouder. De juiste diagnose en de oplossing direct aangedragen.",
      "toestemming": true
    },
    {
      "naam": "Sophie de Vries",
      "klacht": "Hoofdpijn",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Jarenlang last gehad van spanningshoofdpijn. Na behandeling met dry needling ben ik eindelijk van mijn klachten af. Ontzettend blij met het resultaat.",
      "toestemming": true
    },
    {
      "naam": "Tom Jansen",
      "klacht": "Rugpijn",
      "plaats": "Schiedam",
      "sterren": 5,
      "quote": "Ik had chronische onderrugpijn door mijn werk. De combinatie van fysiotherapie en dry needling heeft mij enorm geholpen. Kan nu weer zonder pijn werken.",
      "toestemming": true
    },
    {
      "naam": "Linda Bakker",
      "klacht": "Kaakklachten",
      "plaats": "Capelle aan den IJssel",
      "sterren": 5,
      "quote": "Ik kwam voor kaakfysiotherapie en werd vakkundig geholpen. De klachten zijn significant verminderd en ik kan weer normaal eten.",
      "toestemming": true
    },
    {
      "naam": "Mark Peters",
      "klacht": "Sportblessures",
      "plaats": "Rotterdam",
      "sterren": 4,
      "quote": "Na een hardloopblessure weer snel terug in training gekomen. De begeleiding was professioneel en gericht op mijn sportdoelen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je favoriete sport of activiteit ligt al weken stil, terwijl je lichaam schreeuwt om beweging.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je wacht met pijn en onzekerheid, want waar kun je terecht voor een snelle en effectieve behandeling?",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een ander gezicht, en je verhaal steeds opnieuw vertellen zonder dat je werkelijk wordt gehoord.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt echt uit waar jouw klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapie Kilic krijg je direct duidelijkheid over de oorzaak van je klacht. We nemen de tijd voor een grondige intake en maken een behandelplan dat écht bij jou past, zodat je snel weer pijnvrij kunt bewegen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een grondige intake waarin we luisteren naar je klacht en een nauwkeurig onderzoek doen. Zo stellen we de juiste diagnose en ontdekken we de werkelijke oorzaak van je pijn.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen een behandelplan op dat volledig op jouw situatie is afgestemd. We kiezen de meest effectieve technieken, zoals dry needling, manuele therapie of sportherstel.",
      "duur": "Binnen 1 werkdag",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We voeren de behandeling uit met gerichte aandacht en expertise. De meeste cliënten ervaren al binnen 1 tot 4 sessies significant verschil en kunnen weer pijnvrij bewegen.",
      "duur": "1-4 sessies",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Murat Kilic",
      "functie": "Fysiotherapeut",
      "specialisatie": "Dry Needling Specialist",
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
      "vraag": "Heb ik een verwijzing nodig voor fysiotherapie?",
      "antwoord": "Nee, je hebt geen verwijzing van de huisarts nodig. Je kunt direct bij ons terecht. Wel is het verstandig om vooraf te checken of je zorgverzekeraar directe toegang vergoedt."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht, maar 95% van onze cliënten ervaart al binnen 1 tot 4 behandelingen een groot verschil. Na de intake bespreken we een realistisch behandelplan."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We proberen je altijd zo snel mogelijk te helpen. Bij acute klachten maken we vaak nog dezelfde dag tijd vrij. Normaal gesproken kun je binnen 1 tot 2 dagen terecht."
    },
    {
      "vraag": "Krijg ik bij elke afspraak dezelfde therapeut?",
      "antwoord": "Ja, je wordt behandeld door dezelfde fysiotherapeut gedurende het hele traject. Zo hoef je je verhaal niet steeds opnieuw te vertellen en bouwen we samen aan jouw herstel."
    },
    {
      "vraag": "Wat kost een behandeling zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost €45,- zonder verzekering. Dry needling behandelingen kunnen iets afwijken in prijs. We werken met alle zorgverzekeraars, dus bij de meeste mensen wordt fysiotherapie volledig vergoed vanuit de basisverzekering."
    }
  ],
  "stappenKop": "Jouw weg naar pijnvrij bewegen",
  "stappenSub": "Van eerste afspraak tot resultaat: zo helpen we je stap voor stap naar herstel.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#3b82f6",
    "donker": "#1e40af",
    "licht": "#dbeafe"
  }
} as const;

export type Praktijk = typeof praktijk;
