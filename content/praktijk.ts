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
  "naam": "Fysiotherapie Centrum",
  "plaats": "Amsterdam",
  "telefoon": "020 123 4567",
  "telefoonHref": "tel:+31201234567",
  "whatsapp": "https://wa.me/31201234567",
  "boekUrl": "#contact",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijven Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugpijn",
      "sub": "Nek-, rug- en lage rugklachten",
      "slug": "rugpijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder en schouderpijn",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Enkelblessures en sportletsels",
      "slug": "sportblessure",
      "icoon": "Activity"
    },
    {
      "label": "Knie",
      "sub": "Knieklachten en artrose",
      "slug": "knie",
      "icoon": "Bone"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn en nekgerelateerde hoofdpijn",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Mark",
      "klacht": "Rugpijn",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk weer zonder klachten wakker worden. De oefeningen zijn simpel maar effectief.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek hopeloos, maar na gerichte behandeling kan ik mijn arm weer volledig bewegen. Ontzettend blij met het resultaat.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Sportblessure",
      "plaats": "Diemen",
      "sterren": 5,
      "quote": "Binnen zes weken van enkelblessure terug naar hardlopen. De begeleiding was top en ik voelde me echt gehoord.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Knie",
      "plaats": "Amsterdam",
      "sterren": 4,
      "quote": "Eindelijk weer fietsen zonder pijn. De therapeut nam echt de tijd om alles uit te leggen.",
      "toestemming": true
    },
    {
      "naam": "Robert",
      "klacht": "Hoofdpijn",
      "plaats": "Amstelveen",
      "sterren": 5,
      "quote": "Mijn wekelijkse hoofdpijn is praktisch verdwenen. Ik had niet verwacht dat fysiotherapie zo zou helpen.",
      "toestemming": true
    },
    {
      "naam": "Emma",
      "klacht": "Rugpijn",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na jaren klachten eindelijk de oorzaak gevonden en aangepakt. Ik voel me jaren jonger.",
      "toestemming": true
    },
    {
      "naam": "David",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Professionele aanpak en persoonlijke aandacht. Mijn schouderklachten zijn volledig verholpen.",
      "toestemming": true
    },
    {
      "naam": "Anna",
      "klacht": "Knie",
      "plaats": "Ouderkerk",
      "sterren": 5,
      "quote": "Ik kan weer sporten zonder pijn. De behandeling was precies wat ik nodig had.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, want sporten lukt gewoon niet meer zoals vroeger.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt de afspraak steeds uit omdat je niet weet waar je terecht kunt en de drempel voelt hoog.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer een ander gezicht en je verhaal opnieuw moeten vertellen voelt vermoeiend.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt echt uit waar je klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij ons krijg je persoonlijke aandacht van een vaste therapeut die echt de tijd neemt om de oorzaak van je klacht te vinden. Met duidelijke uitleg en een plan op maat werken we samen aan jouw herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "Tijdens het eerste consult nemen we uitgebreid de tijd voor jouw verhaal. We onderzoeken grondig wat de oorzaak is van je klachten.",
      "duur": "30-45 minuten",
      "foto": ""
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen een behandelplan op dat perfect bij jou past. Je weet precies wat je kunt verwachten.",
      "duur": "Direct na intake",
      "foto": ""
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We begeleiden je stap voor stap naar je doel met behandelingen en oefeningen. Je merkt al snel vooruitgang en werkt toe naar blijvend resultaat.",
      "duur": "4-8 weken gemiddeld",
      "foto": ""
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_6_hwafmn.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg"
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
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Je kunt direct een afspraak maken en de kosten worden vergoed door je basisverzekering (na eigen risico) of aanvullende verzekering."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Gemiddeld hebben onze patiënten 6-8 behandelingen nodig, maar dit bespreken we tijdens de intake. We stellen samen realistische doelen en maken een behandelplan op maat."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kun je binnen 2-4 werkdagen bij ons terecht. Voor spoedgevallen doen we ons best om sneller een plek te vinden. Bel of app ons gerust om de mogelijkheden te bespreken."
    },
    {
      "vraag": "Zie ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, je krijgt een vaste therapeut toegewezen die je gedurende het hele traject begeleidt. Zo hoef je je verhaal niet steeds opnieuw te vertellen en kan je therapeut je voortgang optimaal volgen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €42,- zonder verzekering. De intake duurt langer en kost €55,-. We adviseren altijd om je verzekering te checken, want fysiotherapie wordt vaak (gedeeltelijk) vergoed."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "In drie duidelijke stappen van klacht naar resultaat.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#2563eb",
    "donker": "#1e40af",
    "licht": "#eff6ff"
  }
} as const;

export type Praktijk = typeof praktijk;
