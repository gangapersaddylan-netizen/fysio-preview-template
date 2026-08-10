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
  "naam": "Xpert Clinics",
  "plaats": "Amstelveen",
  "telefoon": "020 799 1100",
  "telefoonHref": "tel:+31207991100",
  "whatsapp": "https://wa.me/31207991100",
  "boekUrl": "https://booking.xpertclinics.nl/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Snel Herstel",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 320,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Heupklachten",
      "sub": "Artrose, impingement, beweegpijn",
      "slug": "heupklachten",
      "icoon": "Bone"
    },
    {
      "label": "Knieklachten",
      "sub": "Artrose, meniscus, kraakbeen",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Hand & Pols",
      "sub": "Carpaal tunnel, triggervinger",
      "slug": "hand-pols",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Rotator cuff, impingement, slijmbeursontsteking",
      "slug": "schouder",
      "icoon": "Dumbbell"
    },
    {
      "label": "Voet & Enkel",
      "sub": "Hallux valgus, achillespees, verstuiking",
      "slug": "voet-enkel",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Heupklachten",
      "plaats": "Amstelveen",
      "sterren": 5,
      "quote": "Eindelijk kon ik weer zonder pijn bewegen. De uitleg was helder en ik voelde me meteen op mijn gemak.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Knieklachten",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Binnen twee weken geholpen en nu weer actief aan het wandelen. De snelheid en service waren uitstekend.",
      "toestemming": true
    },
    {
      "naam": "Laura",
      "klacht": "Hand & Pols",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Ik had last van tintelingen, maar na de behandeling kon ik alles weer normaal doen. Het hele team was fantastisch.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Schouder",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Na maanden pijn eindelijk verlost. Ik kan weer bovenhands gooien en ben weer actief in de sportschool.",
      "toestemming": true
    },
    {
      "naam": "Inge",
      "klacht": "Voet & Enkel",
      "plaats": "Eindhoven",
      "sterren": 4,
      "quote": "Snelle afspraak en goede uitleg. Ik was binnen drie weken al weer aan het hardlopen.",
      "toestemming": true
    },
    {
      "naam": "Robert",
      "klacht": "Knieklachten",
      "plaats": "Rozendaal",
      "sterren": 5,
      "quote": "De operatie verliep vlekkeloos en ik stond er zelf van versteld hoe snel ik kon lopen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt je sportschoenen allang weggestopt omdat bewegen alleen maar pijn doet.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je blijft het uitstellen omdat je niet weet waar je terecht kunt en de wachttijd maanden duurt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer zie je weer een ander gezicht en moet je je hele verhaal opnieuw vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand legt uit waar je klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij ons krijg je duidelijkheid en persoonlijke uitleg. We nemen de tijd om de oorzaak te achterhalen en begeleiden je van begin tot eind met dezelfde specialist.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake & Diagnose",
      "tekst": "We luisteren naar je verhaal en onderzoeken grondig waar je klacht vandaan komt. Je krijgt direct duidelijkheid en een behandelplan.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk Behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een plan op dat past bij jouw situatie en doelen.",
      "duur": "1-2 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering & Resultaat",
      "tekst": "We begeleiden je stap voor stap naar herstel. Of het nu gaat om fysiotherapie, een operatie of nazorg: je bent in vaste handen.",
      "duur": "4-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Muhammed Ali Kedilioglu",
      "functie": "Hand- en polschirurg",
      "specialisatie": "Hand- en polschirurgie",
      "foto": "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D1280%26quality%3D100%26format%3Dwebp%26mode%3Dcrop&w=3840&q=100",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D1280%26quality%3D100%26format%3Dwebp%26mode%3Dcrop&w=3840&q=100",
    "extraFotos": [
      "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fnyrj5ezo%2Fxpert-clinics-amersfoort.png%3Fwidth%3D440%26height%3D220%26quality%3D90%26format%3Dwebp%26mode%3Dcrop&w=3840&q=90",
      "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fitgpnsay%2Fxpert-clinics-amsterdam-laarderhoogtweg.png%3Fwidth%3D440%26height%3D220%26quality%3D90%26format%3Dwebp%26mode%3Dcrop&w=3840&q=90",
      "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Ffvrbd3vl%2Fxpert-clinics-drachten.png%3Fwidth%3D440%26height%3D220%26quality%3D90%26format%3Dwebp%26mode%3Dcrop&w=3840&q=90"
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
      "antwoord": "Voor de meeste behandelingen heb je een verwijzing van je huisarts nodig. Voor bepaalde consulten kun je ook zonder verwijzing terecht. Neem contact op voor meer informatie."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht. Na de intake bespreken we een behandelplan op maat. Sommige klachten zijn in enkele weken opgelost, andere vragen meer tijd."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "We streven naar korte wachttijden. Gemiddeld kun je binnen 1 tot 5 dagen terecht voor een consult, afhankelijk van de beschikbaarheid."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, je wordt gedurende het hele traject begeleid door dezelfde specialist. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat als ik geen verzekering heb?",
      "antwoord": "Ook zonder verzekering kun je bij ons terecht. We maken dan een offerte op maat. Neem contact op voor de mogelijkheden en kosten."
    }
  ],
  "stappenKop": "Van eerste afspraak tot volledig herstel",
  "stappenSub": "We begeleiden je in drie heldere stappen naar een pijnvrij en actief leven.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#0066cc",
    "donker": "#004d99",
    "licht": "#e6f2ff"
  }
} as const;

export type Praktijk = typeof praktijk;
