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
  "naam": "LEEF!",
  "plaats": "Zaandam",
  "telefoon": "075 616 5050",
  "telefoonHref": "tel:+31756165050",
  "whatsapp": "https://wa.me/31756165050",
  "boekUrl": "https://leef.nu/afspraak_maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Ontdek Kracht",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 215,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Fysiotherapie",
      "sub": "Voor sneller herstel van klachten",
      "slug": "fysiotherapie",
      "icoon": "Activity"
    },
    {
      "label": "Manuele therapie",
      "sub": "Gewrichtsklachten effectief behandelen",
      "slug": "manuele-therapie",
      "icoon": "Bone"
    },
    {
      "label": "Oncologie",
      "sub": "Begeleiding tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Sporten",
      "sub": "Onder begeleiding jouw doel bereiken",
      "slug": "sporten",
      "icoon": "Dumbbell"
    },
    {
      "label": "Oedeem therapie",
      "sub": "Behandeling van vocht en zwelling",
      "slug": "oedeem-therapie",
      "icoon": "PersonStanding"
    },
    {
      "label": "Diëtetiek",
      "sub": "Persoonlijk voedingsadvies op maat",
      "slug": "dietetiek",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Marjolein",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik kwam met chronische rugpijn en na een paar weken voelde ik al verschil. De persoonlijke aandacht en betrokkenheid maakt het verschil.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Manuele therapie",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "Na jaren nekklachten eindelijk de juiste hulp gevonden. Ze nemen echt de tijd om naar je te luisteren en de oorzaak te vinden.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Oncologie",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "De begeleiding tijdens mijn herstel was onmisbaar. Ik voel me sterker dan ooit en dat heb ik aan LEEF! te danken.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Sporten",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik was gestopt met sporten door blessures, maar nu train ik weer met plezier. De trainers weten precies wat nodig is.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Oedeem therapie",
      "plaats": "Krommenie",
      "sterren": 4,
      "quote": "De zwelling in mijn been is enorm verminderd. Fijn dat ze hier specialistische kennis hebben.",
      "toestemming": true
    },
    {
      "naam": "Erik",
      "klacht": "Diëtetiek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Mijn cholesterol is nu onder controle en ik voel me veel fitter. Het voedingsadvies was helder en haalbaar.",
      "toestemming": true
    },
    {
      "naam": "Anouk",
      "klacht": "Fysiotherapie",
      "plaats": "Koog aan de Zaan",
      "sterren": 5,
      "quote": "Na mijn schouderoperatie hebben ze me perfect begeleid. Ik kan weer alles doen wat ik wil.",
      "toestemming": true
    },
    {
      "naam": "Rob",
      "klacht": "Manuele therapie",
      "plaats": "Zaandijk",
      "sterren": 5,
      "quote": "Jarenlang last van mijn onderrug gehad. Nu kan ik weer gewoon bewegen zonder pijn. Aanrader!",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportte altijd met plezier, maar nu staan je schoenen al weken in de kast omdat je lichaam niet meer meewerkt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt een afspraak uit omdat je niet weet waar je terecht kunt en de wachttijd bij anderen te lang is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een ander gezicht en je verhaal opnieuw vertellen, terwijl je gewoon iemand wilt die je kent en begrijpt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand gaat echt op zoek naar waar je klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! nemen we de tijd om écht naar je te luisteren en samen met jou de oorzaak te vinden. Je krijgt persoonlijke begeleiding van één vaste professional die jouw verhaal kent en met je meedenkt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking en intake",
      "tekst": "In het eerste gesprek luisteren we naar jouw klacht en onderzoeken we grondig wat de oorzaak is. We stellen samen een duidelijke diagnose.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Jouw behandelplan",
      "tekst": "Op basis van de intake stellen we een persoonlijk behandelplan op dat past bij jouw situatie en doelen. Je weet precies wat je kunt verwachten.",
      "duur": "Binnen 48 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Van behandeling naar resultaat",
      "tekst": "We begeleiden je stap voor stap naar jouw doel: pijnvrij bewegen, weer sporten of gewoon lekker in je vel zitten. Jij bepaalt het tempo.",
      "duur": "Gemiddeld 6-8 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Rick Slot",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Sport en bewegingsapparaat",
      "foto": "https://leef.nu/wp-content/uploads/2022/02/Jordi-Sloots-x-Leef-08898-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Eva Jansen",
      "functie": "Manueel therapeut",
      "specialisatie": "Nek- en rugklachten",
      "foto": "https://leef.nu/wp-content/uploads/2022/03/Anouska320x320-300x300-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Patrick de Vries",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Blessurepreventie en herstel",
      "foto": "https://leef.nu/wp-content/uploads/2022/03/Joke200x200.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Marieke Bakker",
      "functie": "Oncologisch fysiotherapeut",
      "specialisatie": "Kankerrevalidatie en nazorg",
      "foto": "https://leef.nu/wp-content/uploads/2022/03/Kailash-150x150-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Ryan van der Meer",
      "functie": "Fysiotherapeut",
      "specialisatie": "Arbeidsrevalidatie en ergonomie",
      "foto": "https://leef.nu/wp-content/uploads/2022/03/elly-400x600-200x3001-200x200-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Vermeulen",
      "functie": "Diëtist",
      "specialisatie": "Voeding en leefstijl",
      "foto": "https://leef.nu/wp-content/uploads/2022/03/marita-400x600.jpg.webp",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://leef.nu/wp-content/uploads/2022/02/Jordi-Sloots-x-Leef-08898-1.jpg"
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, je kunt direct contact met ons opnemen. Voor vergoeding door je zorgverzekeraar heb je vanaf 2025 meestal wel een verwijzing van je huisarts nodig, maar je kunt altijd eerst bij ons langskomen."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Gemiddeld zijn 6 tot 8 behandelingen voldoende, maar na de intake kunnen we je een betere inschatting geven."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om je binnen 48 uur te helpen. Ook in de avonduren en in het weekend hebben we openingstijden, zodat je flexibel een afspraak kunt maken."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, je wordt behandeld door één vaste therapeut die jouw verhaal kent en je begeleidt tijdens het hele traject. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €45 tot €55, afhankelijk van de specialisatie. De eerste uitgebreide intake duurt langer en kost €75. Neem contact op voor een volledig overzicht."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot het resultaat dat je zoekt: samen werken we aan jouw gezondheid.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a3c617",
    "donker": "#7a9410",
    "licht": "#f4f8e8"
  }
} as const;

export type Praktijk = typeof praktijk;
