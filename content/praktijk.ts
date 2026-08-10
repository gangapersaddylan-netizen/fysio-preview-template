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
    "aantalReviews": 124,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Chronische rugpijn en onderrugklachten",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Schouderpijn en bewegingsbeperking",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Nek",
      "sub": "Nekklachten en stijve nek",
      "slug": "nek",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessure",
      "sub": "Blessures en sportherstel",
      "slug": "sportblessure",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn en migraine",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Kaakklachten",
      "sub": "TMD en kaakgewrichtspijn",
      "slug": "kaakklachten",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Sophie Vermeulen",
      "klacht": "Rugklachten",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Jarenlange rugpijn eindelijk opgelost. Ik kan weer gewoon bewegen zonder constant aan mijn rug te denken.",
      "toestemming": true
    },
    {
      "naam": "Mark de Vries",
      "klacht": "Schouder",
      "plaats": "Capelle aan den IJssel",
      "sterren": 5,
      "quote": "Na maanden schouderpijn kon ik mijn arm nauwelijks optillen. Nu train ik weer normaal in de sportschool.",
      "toestemming": true
    },
    {
      "naam": "Laura Jansen",
      "klacht": "Nek",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Acute nekklachten binnen één behandeling verholpen. Ik was echt verbaasd hoe snel het werkte.",
      "toestemming": true
    },
    {
      "naam": "Tim Bakker",
      "klacht": "Sportblessure",
      "plaats": "Schiedam",
      "sterren": 5,
      "quote": "Mijn hardloopblessure leek eindeloos. Nu loop ik weer mijn trainingsschema zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Emma Visser",
      "klacht": "Hoofdpijn",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Wekelijkse hoofdpijn is verdwenen. Ik had niet verwacht dat fysiotherapie hier zo bij zou helpen.",
      "toestemming": true
    },
    {
      "naam": "Jasper Hendriks",
      "klacht": "Kaakklachten",
      "plaats": "Vlaardingen",
      "sterren": 5,
      "quote": "Kaakpijn die me 's nachts wakker hield is weg. Eindelijk kan ik weer normaal eten en slapen.",
      "toestemming": true
    },
    {
      "naam": "Nina Smit",
      "klacht": "Rugklachten",
      "plaats": "Rotterdam",
      "sterren": 4,
      "quote": "Onderrugpijn door bureauwerk enorm verminderd. Ik merk het verschil elke dag.",
      "toestemming": true
    },
    {
      "naam": "Ruben van Dijk",
      "klacht": "Schouder",
      "plaats": "Spijkenisse",
      "sterren": 5,
      "quote": "Bevroren schouder werd steeds erger. Dankzij de behandeling kan ik mijn arm weer volledig bewegen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je favoriete sport ligt al maanden stil omdat bewegen pijn doet, en dat gemis vreet aan je.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt een afspraak uit omdat je niet weet waar je terechtkan en of je wel serieus genomen wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer een ander gezicht, en elke keer opnieuw je verhaal moeten doen zonder vooruitgang.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt zoekt naar waar je pijn vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapie Kilic krijg je één vaste therapeut die écht naar je luistert en precies uitlegt waar je klachten vandaan komen. Zo weet je waar je aan toe bent en werken we samen aan jouw herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en Diagnose",
      "tekst": "In het eerste gesprek luisteren we goed naar je klachten en onderzoeken we grondig wat de oorzaak is. Je krijgt duidelijke uitleg over wat er aan de hand is.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk Behandelplan",
      "tekst": "We stellen samen met jou een op maat gemaakt behandelplan op, afgestemd op jouw situatie en doelen. Je weet precies wat je kunt verwachten.",
      "duur": "Tijdens intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en Resultaat",
      "tekst": "Met gerichte technieken zoals dry needling en manuele therapie werken we aan jouw herstel. De meeste cliënten merken al binnen 1-4 sessies duidelijk verschil.",
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
    "groepsfoto": "https://fysiokilic.nl/images/murat-kilic.webp",
    "extraFotos": [
      "https://fysiokilic.nl/images/fotos/_MG_5133.webp",
      "https://fysiokilic.nl/images/fotos/_MG_5213.webp",
      "https://fysiokilic.nl/images/IMG_0928.webp"
    ]
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
      "antwoord": "Nee, je kunt direct bij ons terecht zonder verwijzing van de huisarts. Fysiotherapie is vrij toegankelijk in Nederland."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en klacht. 95% van onze cliënten ervaart al binnen 1-4 behandelingen een groot verschil. Tijdens de intake bespreken we een realistisch behandelplan."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We proberen altijd ruimte te maken voor acute klachten. Vaak kun je binnen 1-2 dagen terecht, bij spoed soms nog dezelfde dag."
    },
    {
      "vraag": "Heb ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij ons word je behandeld door één vaste therapeut die jouw volledige behandeltraject begeleidt. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €45-65 afhankelijk van de duur en type behandeling. Met een doorverwijzing van je huisarts wordt fysiotherapie vergoed vanuit je basisverzekering (na eigen risico)."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot pijnvrij bewegen in drie heldere stappen.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#3b82f6",
    "donker": "#1e40af",
    "licht": "#dbeafe"
  }
} as const;

export type Praktijk = typeof praktijk;
