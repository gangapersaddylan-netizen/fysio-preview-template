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
  "naam": "OptiFit Fysiotherapie",
  "plaats": "Groningen",
  "telefoon": "050-211 1900",
  "telefoonHref": "tel:+31502111900",
  "whatsapp": "https://wa.me/31683959545",
  "boekUrl": "https://optifitfysiotherapie.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijven Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 134,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug & Nek",
      "sub": "Chronische of acute pijn aan rug of nek",
      "slug": "rug-en-nek",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Bewegingsbeperking en pijn in de schouder",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Blessures door sport en overbelasting",
      "slug": "sportblessure",
      "icoon": "Activity"
    },
    {
      "label": "Knie & Heup",
      "sub": "Gewrichtsklachten aan knie of heup",
      "slug": "knie-en-heup",
      "icoon": "Bone"
    },
    {
      "label": "Chronische pijn",
      "sub": "Aanhoudende pijnklachten zonder duidelijke oorzaak",
      "slug": "chronische-pijn",
      "icoon": "HeartPulse"
    },
    {
      "label": "COPD & Reuma",
      "sub": "Begeleiding bij chronische aandoeningen",
      "slug": "copd-reuma",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Jan W.",
      "klacht": "Rug & Nek",
      "plaats": "Paddepoel",
      "sterren": 5,
      "quote": "Eindelijk iemand die écht naar me luisterde. Na jaren rondgaan met rugpijn voelde ik me hier meteen begrepen. De behandeling werkt en ik snap nu wat er aan de hand was.",
      "toestemming": true
    },
    {
      "naam": "Marieke V.",
      "klacht": "Schouder",
      "plaats": "Vinkhuizen",
      "sterren": 5,
      "quote": "Mijn schouder zat al maanden vast. Na een paar behandelingen kon ik mijn arm weer normaal gebruiken. Fijn dat ze de tijd nemen om uit te leggen wat er gebeurt.",
      "toestemming": true
    },
    {
      "naam": "Peter S.",
      "klacht": "Sportblessure",
      "plaats": "Hoogkerk",
      "sterren": 5,
      "quote": "Blessure aan mijn knie opgelopen tijdens het voetballen. Ze hebben me stap voor stap begeleid tot ik weer kon sporten. Professioneel en betrokken.",
      "toestemming": true
    },
    {
      "naam": "Linda R.",
      "klacht": "Chronische pijn",
      "plaats": "Korrewegwijk",
      "sterren": 5,
      "quote": "Jarenlang pijn in mijn onderrug. Hier voelde ik me niet afgescheept met standaardoefeningen. Ze zochten echt naar de oorzaak en dat maakte het verschil.",
      "toestemming": true
    },
    {
      "naam": "Henk B.",
      "klacht": "Knie & Heup",
      "plaats": "Lewenborg",
      "sterren": 4,
      "quote": "Na mijn heupoperatie weer snel op de been dankzij de begeleiding hier. Ze houden rekening met je tempo en motiveren je precies op het juiste moment.",
      "toestemming": true
    },
    {
      "naam": "Anja K.",
      "klacht": "Rug & Nek",
      "plaats": "Selwerd",
      "sterren": 5,
      "quote": "Nekklachten door lang achter de computer zitten. De therapeut wist precies wat het probleem was en gaf me concrete tips. Ik zit nu pijnvrij.",
      "toestemming": true
    },
    {
      "naam": "Rob M.",
      "klacht": "Sportblessure",
      "plaats": "De Hoogte",
      "sterren": 5,
      "quote": "Hardloopblessure die maar niet overging. Ze hebben me geholpen met een goed trainingsschema en gerichte oefeningen. Ik loop weer zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Els D.",
      "klacht": "COPD & Reuma",
      "plaats": "Beijum",
      "sterren": 5,
      "quote": "Met COPD is bewegen soms lastig. Hier krijg ik begeleiding die bij mij past, zonder dat ik me door moet zetten. Ik merk echt vooruitgang in mijn conditie.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Sporten deed je met plezier, nu liggen je sportschoenen al weken weggestopt in de kast en vraag je je af of dat ooit nog terugkomt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al een paar keer uitgesteld om naar een fysiotherapeut te gaan, want je weet niet waar je moet beginnen en of ze je wel serieus nemen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer een ander gezicht, en telkens moet je opnieuw uitleggen wat er aan de hand is zonder dat iemand echt de draad oppakt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand legt uit waar de klacht vandaan komt of waarom deze oefeningen precies zouden helpen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij OptiFit Fysiotherapie kijken we verder dan de klacht. We nemen de tijd om te luisteren, zoeken de oorzaak op en leggen rustig uit wat er speelt en hoe we je gaan helpen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Manuele therapie",
      "tekst": "Onze gecertificeerde manueel therapeuten behandelen gewrichten, spieren en de wervelkolom met gerichte hands-on technieken. We zoeken de oorzaak van uw klacht en pakken die bij de bron aan.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Oefentherapie op maat",
      "tekst": "In onze eigen sportruimtes werken we met u aan een individueel oefenprogramma. Geen standaardoefeningen, maar een plan dat precies aansluit bij uw situatie en doelen.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Dry needling",
      "tekst": "Bij hardnekkige spierspanning behandelen we triggerpoints met dunne naalden, direct in het weefsel. Effectief voor klachten die met andere methoden moeilijk te bereiken zijn.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Koen Blansjaar",
      "functie": "Eigenaar - Manueel therapeut en fysiotherapeut",
      "specialisatie": "Nek-, schouder- en rugklachten",
      "foto": "https://optifitfysiotherapie.nl/wp-content/uploads/2024/03/Koen-Blansjaar-groot.webp",
      "uitgelicht": true
    },
    {
      "naam": "Pascal Remminga",
      "functie": "Eigenaar - Manueel therapeut en fysiotherapeut",
      "specialisatie": "Schouder- en chronische pijnklachten",
      "foto": "https://optifitfysiotherapie.nl/wp-content/uploads/2024/03/Pascal-Remminga-Groot.webp",
      "uitgelicht": true
    },
    {
      "naam": "Eileen Tuankotta",
      "functie": "Praktijkcoördinator",
      "specialisatie": "",
      "foto": "https://optifitfysiotherapie.nl/wp-content/uploads/2026/06/Eileen-Tuankotta-website.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Iris Bootsma",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://optifitfysiotherapie.nl/wp-content/uploads/2025/08/Iris-Bootsma-1000x1000-1.webp",
      "uitgelicht": true
    },
    {
      "naam": "Auke van Dijken",
      "functie": "Manueel therapeut i.o. en fysiotherapeut",
      "specialisatie": "Dry needling",
      "foto": "https://optifitfysiotherapie.nl/wp-content/uploads/2026/03/Auke-van-Dijken-SOM.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Julian Coops",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://optifitfysiotherapie.nl/wp-content/uploads/2026/06/Julian-Spotonmedics.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://optifitfysiotherapie.nl/wp-content/uploads/2024/04/P1010913-scaled.jpg.webp"
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
      "antwoord": "Nee, via directe toegang fysiotherapie kunt u zonder verwijzing direct een afspraak maken bij OptiFit. Tijdens het eerste consult bepalen wij of fysiotherapie de juiste keuze is voor uw klacht."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Na de intake maken we een behandelplan waarin we een inschatting geven van het aantal benodigde sessies. We evalueren regelmatig en passen het plan aan waar nodig."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We proberen nieuwe patiënten zo snel mogelijk te helpen, vaak binnen enkele werkdagen. U kunt direct online een afspraak inplannen via onze website of bellen naar 050-211 1900."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, waar mogelijk zorgen wij ervoor dat u door dezelfde therapeut wordt behandeld. Zo kent uw therapeut uw situatie en hoeft u uw verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen verzekering heb?",
      "antwoord": "Fysiotherapie wordt normaal gesproken vergoed vanuit de aanvullende verzekering. Heeft u geen verzekering, dan hanteren we transparante tarieven die u vooraf met ons kunt bespreken. Neem contact op voor meer informatie."
    }
  ],
  "stappenKop": "Onze behandelingen",
  "stappenSub": "Elke klacht vraagt om een eigen aanpak, met de juiste techniek op het juiste moment.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#f59e0b",
    "donker": "#d97706",
    "licht": "#fef3c7"
  }
} as const;

export type Praktijk = typeof praktijk;
