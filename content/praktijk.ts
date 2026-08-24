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
  "naam": "Jongmans FysioSupport",
  "plaats": "Roosendaal",
  "telefoon": "0165 23 44 23",
  "telefoonHref": "tel:+31165234423",
  "whatsapp": "https://wa.me/31165234423",
  "boekUrl": "https://jongmans-fysiosupport.nl/contact",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blessurevrij Sporten",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 142,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Schouderpijn, frozen shoulder, impingement",
      "slug": "schouderklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Knie",
      "sub": "Knieklachten, VKB-revalidatie, meniscus",
      "slug": "knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Enkel",
      "sub": "Verstuiking, instabiliteit, chronische pijn",
      "slug": "enkelklachten",
      "icoon": "Activity"
    },
    {
      "label": "Rug & nek",
      "sub": "Rugpijn, nekklachten, hernia",
      "slug": "rug-en-nekklachten",
      "icoon": "HeartPulse"
    },
    {
      "label": "Sportblessure",
      "sub": "Revalidatie na blessure, terugkeer naar sport",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Mark",
      "klacht": "Knie",
      "plaats": "Roosendaal",
      "sterren": 5,
      "quote": "Na mijn VKB-operatie kreeg ik een top revalidatietraject. Ik sta nu weer op het veld en voel me sterker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "Schouder",
      "plaats": "Bergen op Zoom",
      "sterren": 5,
      "quote": "Eindelijk weer pijnvrij kunnen sporten! Het team neemt echt de tijd om naar je te luisteren en met je mee te denken.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Rug & nek",
      "plaats": "Etten-Leur",
      "sterren": 5,
      "quote": "Mijn rugklachten waren hardnekkig, maar door de gerichte aanpak ben ik nu weer volledig beweeglijk. Echt top.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Enkel",
      "plaats": "Roosendaal",
      "sterren": 4,
      "quote": "Na meerdere verstuikingen eindelijk stabiel. De behandeling was duidelijk en de oefeningen werkten echt.",
      "toestemming": true
    },
    {
      "naam": "Ruben",
      "klacht": "Sportblessure",
      "plaats": "Wouw",
      "sterren": 5,
      "quote": "Professionele begeleiding na mijn hamstringblessure. Sneller hersteld dan verwacht en weer fit voor de wedstrijden.",
      "toestemming": true
    },
    {
      "naam": "Anouk",
      "klacht": "Schouder",
      "plaats": "Roosendaal",
      "sterren": 5,
      "quote": "Vriendelijk, deskundig en resultaatgericht. Mijn frozen shoulder is verleden tijd.",
      "toestemming": true
    },
    {
      "naam": "Dennis",
      "klacht": "Knie",
      "plaats": "Steenbergen",
      "sterren": 5,
      "quote": "Ik kon niet meer hardlopen door kniepijn. Nu loop ik weer wedstrijden zonder problemen. Super blij!",
      "toestemming": true
    },
    {
      "naam": "Emma",
      "klacht": "Rug & nek",
      "plaats": "Roosendaal",
      "sterren": 5,
      "quote": "De manuele therapie heeft echt geholpen. Ik voel me weer beweeglijk en energiek.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan in de kast omdat je lichaam het niet meer toelaat – terwijl bewegen juist jouw uitlaatklep is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al weken pijn maar blijft wachten, onzeker waar je terecht kunt en of het wel serieus genoeg genomen wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Bij elke nieuwe afspraak moet je je verhaal opnieuw vertellen, omdat je steeds een andere fysiotherapeut ziet die niet weet wat er speelt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt oefeningen mee zonder dat iemand echt uitzoekt waar de klacht vandaan komt – en dan blijft de pijn terugkomen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Jongmans FysioSupport werk je met één vaste therapeut die jouw verhaal kent en écht uitzoekt wat de oorzaak is. Geen standaardoefeningen, maar een persoonlijke aanpak gericht op jouw doel: blessurevrij bewegen en doen waar je van houdt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Sportfysiotherapie",
      "tekst": "Samen werken we aan je terugkeer naar topsport of je favoriete hobby. Met gerichte training en begeleiding herstel je sneller en voorkom je nieuwe blessures.",
      "duur": "Traject op maat",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4"
    },
    {
      "titel": "Manuele therapie",
      "tekst": "Door gewrichten en wervels op de juiste manier te behandelen, pakken we hardnekkige klachten aan nek, rug en gewrichten bij de kern aan. Het resultaat: meer bewegingsvrijheid en minder pijn.",
      "duur": "4-8 sessies",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Fysiotherapie",
      "tekst": "Of je nu herstelt van een operatie of last hebt van dagelijkse pijnklachten, we begeleiden je stap voor stap naar volledige herstel. Met persoonlijke aandacht en bewezen methodes.",
      "duur": "6-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    }
  ],
  "team": [
    {
      "naam": "Tim Aarts",
      "functie": "Manueel therapeut",
      "specialisatie": "SchouderNetwerk, Rugnetwerk, Beweegspecialist huisartsenzorg",
      "foto": "https://jongmans-fysiosupport.nl/Uploads/Images/Small/7e00657c-c28e-4714-8dd5-d93618910777.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Paul Jongmans",
      "functie": "Sportfysiotherapeut MSc.",
      "specialisatie": "Master Sportfysiotherapie, NAC Breda",
      "foto": "https://jongmans-fysiosupport.nl/Uploads/Images/Small/d9b6ff5e-0ef0-4c0c-9b8b-4b7e9be0f20e.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femke Harmsen",
      "functie": "Sportfysiotherapeut MSc.",
      "specialisatie": "VKB-United, enkel knie schouder",
      "foto": "https://jongmans-fysiosupport.nl/Uploads/Images/Small/2fd26e5b-3d45-403a-a1ae-9308021fe0cf.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Kelly Sanderse",
      "functie": "Sportfysiotherapeut MSc.",
      "specialisatie": "Master Sportfysiotherapie, sportgerelateerde klachten",
      "foto": "https://jongmans-fysiosupport.nl/Uploads/Images/Small/a37152ae-13a4-43ce-95c5-59959055cd85.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Henryc van Dongen",
      "functie": "Fysiotherapeut",
      "specialisatie": "spier gewrichtsklachten revalidatietrajecten",
      "foto": "https://jongmans-fysiosupport.nl/Uploads/Images/Small/a27d4829-8f5c-43f5-9e73-f88f724df8e5.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://jongmans-fysiosupport.nl/Uploads/Images/Small/7e00657c-c28e-4714-8dd5-d93618910777.jpg",
    "extraFotos": [
      "https://jongmans-fysiosupport.nl/Uploads/Images/Small/d8935970-43c7-4e8e-b594-bbce0da7eaa6.jpg"
    ],
    "coverFit": "contain"
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
      "vraag": "Heb ik een verwijzing nodig van de huisarts?",
      "antwoord": "Nee, sinds 2006 is directe toegang tot de fysiotherapeut mogelijk. Je kunt dus zonder verwijzing bij ons terecht. Voor vergoeding via je verzekering is het wel verstandig om vooraf je polis te checken."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Na het intakegesprek en onderzoek geven we je een inschatting van het aantal behandelingen. Gemiddeld liggen trajecten tussen de 6 en 12 sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om je binnen 2 tot 3 werkdagen een eerste afspraak te bieden. Bij spoedgevallen doen we er alles aan om je nog sneller te helpen."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij Jongmans FysioSupport werk je met één vaste therapeut gedurende je hele behandeltraject. Zo kennen we jouw verhaal en kunnen we gericht werken aan jouw herstel."
    },
    {
      "vraag": "Wat zijn de kosten als ik niet verzekerd ben?",
      "antwoord": "Een reguliere behandeling kost €42,50 per sessie. Voor manuele therapie of sportfysiotherapie kunnen de tarieven iets afwijken. Neem gerust contact op voor een exacte prijsopgave."
    }
  ],
  "stappenKop": "Ons behandelaanbod",
  "stappenSub": "Van sportrevalidatie tot manuele therapie: we bieden de zorg die bij jouw klacht past.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#0066cc",
    "donker": "#004d99",
    "licht": "#e6f2ff"
  }
} as const;

export type Praktijk = typeof praktijk;
