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
  "naam": "Fysio Loon op Zand",
  "plaats": "Loon op Zand",
  "telefoon": "0416 361528",
  "telefoonHref": "tel:+31416361528",
  "whatsapp": "https://wa.me/31416361528",
  "boekUrl": "https://fysioloonopzand.nl/contact/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Sterker Leven",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Trauma",
      "sub": "Revalidatie na botbreuk of operatie",
      "slug": "trauma-revalidatie",
      "icoon": "Bone"
    },
    {
      "label": "Hand & Pols",
      "sub": "Behandeling van hand, pols en onderarm",
      "slug": "handtherapie",
      "icoon": "Activity"
    },
    {
      "label": "COPD/Astma",
      "sub": "Ademhalingsproblemen en longklachten",
      "slug": "copd-astma",
      "icoon": "HeartPulse"
    },
    {
      "label": "Rug & Nek",
      "sub": "Spier- en gewrichtsklachten",
      "slug": "rug-nek",
      "icoon": "PersonStanding"
    },
    {
      "label": "Sportblessures",
      "sub": "Herstel en terugkeer naar sport",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Marloes V.",
      "klacht": "Trauma",
      "plaats": "Loon op Zand",
      "sterren": 5,
      "quote": "Na mijn operatie durfde ik mijn arm nauwelijks te bewegen. Het team heeft me stap voor stap begeleid en nu kan ik weer gewoon mijn werk doen.",
      "toestemming": true
    },
    {
      "naam": "Jan-Willem B.",
      "klacht": "COPD/Astma",
      "plaats": "Kaatsheuvel",
      "sterren": 5,
      "quote": "Ik had last van kortademigheid en dacht dat het niet meer beter zou worden. Door de behandelingen kan ik nu weer fietsen en wandelen zonder te hijgen.",
      "toestemming": true
    },
    {
      "naam": "Sandra K.",
      "klacht": "Hand & Pols",
      "plaats": "De Moer",
      "sterren": 5,
      "quote": "Mijn pols deed pijn bij alles wat ik deed. Na een paar weken behandeling kan ik weer typen en koken zonder klachten.",
      "toestemming": true
    },
    {
      "naam": "Pieter M.",
      "klacht": "Rug & Nek",
      "plaats": "Loon op Zand",
      "sterren": 4,
      "quote": "Jarenlang last gehad van mijn nek. Eindelijk iemand die naar me luistert en niet alleen maar oefeningen meegeeft.",
      "toestemming": true
    },
    {
      "naam": "Ellen T.",
      "klacht": "Sportblessures",
      "plaats": "Kaatsheuvel",
      "sterren": 5,
      "quote": "Door een knieblessure kon ik niet meer hardlopen. Nu sta ik weer op de atletiekbaan en kan ik mijn trainingen weer oppakken.",
      "toestemming": true
    },
    {
      "naam": "Herman J.",
      "klacht": "Trauma",
      "plaats": "Loon op Zand",
      "sterren": 5,
      "quote": "De revalidatie na mijn val verliep beter dan verwacht. Fijn dat ze ook aan huis kwamen toen ik nog niet mobiel was.",
      "toestemming": true
    },
    {
      "naam": "Yvonne D.",
      "klacht": "Rug & Nek",
      "plaats": "De Moer",
      "sterren": 5,
      "quote": "Mijn rugklachten waren zo erg dat ik 's nachts wakker werd. Nu slaap ik weer door en kan ik zonder pijn bewegen.",
      "toestemming": true
    },
    {
      "naam": "Rob S.",
      "klacht": "Hand & Pols",
      "plaats": "Kaatsheuvel",
      "sterren": 5,
      "quote": "Na carpale tunnel operatie ben ik hier behandeld. Ze namen echt de tijd om alles uit te leggen en mijn hand is weer volledig functioneel.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je moet steeds meer activiteiten laten schieten omdat bewegen te pijnlijk wordt, en daardoor staat een deel van je leven stil.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt behandeling uit omdat je niet weet waar je terecht kunt, of je blijft rondgaan zonder dat het echt beter wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wordt steeds door een ander gezien en moet telkens je verhaal opnieuw vertellen, waardoor je nooit écht verder komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt een lijstje met oefeningen mee, maar niemand neemt de tijd om echt uit te zoeken waar je klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Loon op Zand werk je met een vast team dat de tijd neemt om je klacht echt te begrijpen en uit te leggen wat er aan de hand is. Zo kom je stap voor stap richting herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We beginnen met een grondige intake waarin we echt de tijd nemen om naar je verhaal te luisteren en je klacht te onderzoeken. Met moderne diagnostiek zoals echografie stellen we een accurate diagnose.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op dat aansluit bij jouw situatie en doelen. Je weet precies wat je kunt verwachten en waarom we bepaalde keuzes maken.",
      "duur": "direct",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We begeleiden je met hands-on therapie, gerichte oefeningen en moderne technieken zoals dry needling of medical taping. Stap voor stap werk je toe naar je doel: sterker en fitter leven.",
      "duur": "traject op maat",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Edwin Zwart",
      "functie": "",
      "specialisatie": "",
      "foto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZokt25_HR_9417-1024x1536.webp",
      "uitgelicht": true
    },
    {
      "naam": "Hanneke Vermeer",
      "functie": "",
      "specialisatie": "",
      "foto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZ25-7348-1024x1536.webp",
      "uitgelicht": true
    },
    {
      "naam": "Anne de Cock",
      "functie": "",
      "specialisatie": "",
      "foto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZ25-8127-1024x1536.webp",
      "uitgelicht": true
    },
    {
      "naam": "John van Zelst",
      "functie": "",
      "specialisatie": "",
      "foto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZokt25_HR_9440-1024x1536.webp",
      "uitgelicht": true
    },
    {
      "naam": "Vere van Breugel",
      "functie": "",
      "specialisatie": "",
      "foto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZ25-7275-1024x1536.webp",
      "uitgelicht": true
    },
    {
      "naam": "Kaylee van Caem",
      "functie": "",
      "specialisatie": "",
      "foto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZ25-7288-1024x1536.webp",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZokt25_HR_9371-scaled-1.webp"
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
      "antwoord": "Nee, sinds 2006 kun je zonder verwijzing direct naar de fysiotherapeut. Je kunt zelf een afspraak maken of contact opnemen met je huisarts voor overleg."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Na de intake bespreken we een behandelplan met een inschatting van het aantal sessies. We evalueren regelmatig en passen het plan aan waar nodig."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Gemiddeld kun je binnen 3 werkdagen terecht voor een eerste afspraak. Bij urgente klachten proberen we altijd plek te vinden."
    },
    {
      "vraag": "Kan ik bij dezelfde therapeut blijven?",
      "antwoord": "Ja, continuïteit staat bij ons centraal. Je wordt gedurende het hele traject behandeld door dezelfde fysiotherapeut, tenzij je zelf aangeeft liever met iemand anders verder te gaan."
    },
    {
      "vraag": "Wat zijn de kosten zonder vergoeding?",
      "antwoord": "De kosten voor een behandeling bedragen €42,50 per sessie van 30 minuten. Voor een intake rekenen we €65,- voor 45 minuten. Zonder aanvullende verzekering betaal je dit zelf."
    }
  ],
  "stappenKop": "Van eerste afspraak tot eindresultaat",
  "stappenSub": "In drie duidelijke stappen naar een sterker en fitter leven",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#1e5a8e",
    "donker": "#14405f",
    "licht": "#e8f2f8"
  }
} as const;

export type Praktijk = typeof praktijk;
