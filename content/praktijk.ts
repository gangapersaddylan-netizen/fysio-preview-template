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
  "naam": "TMC Fysiotherapie",
  "plaats": "Amsterdam",
  "telefoon": "06-41197188",
  "telefoonHref": "tel:+31641197188",
  "whatsapp": "https://wa.me/31641197188",
  "boekUrl": "https://www.tmcfysiotherapie.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Fijner Leven",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 156,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Frozen shoulder en schouderpijn",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Herstel en preventie van sportblessures",
      "slug": "sportblessure",
      "icoon": "Dumbbell"
    },
    {
      "label": "Postoperatief",
      "sub": "Revalidatie na operaties",
      "slug": "postoperatief",
      "icoon": "Activity"
    },
    {
      "label": "Spieren",
      "sub": "Triggerpunten en spierpijn",
      "slug": "spieren",
      "icoon": "PersonStanding"
    },
    {
      "label": "Mobiliteit",
      "sub": "Bewegingsbereik en flexibiliteit",
      "slug": "mobiliteit",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Linda",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden last van mijn schouder kon ik eindelijk weer bewegen zonder pijn. Het team luisterde echt naar mijn verhaal en paste de behandeling daarop aan.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Sportblessure",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Dankzij de gerichte aanpak ben ik sneller hersteld dan verwacht. Ik kon weer sporten en voelde me begrepen.",
      "toestemming": true
    },
    {
      "naam": "Fatima",
      "klacht": "Postoperatief",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "De revalidatie na mijn operatie verliep soepel. Ik kreeg duidelijke uitleg en persoonlijke begeleiding bij elke stap.",
      "toestemming": true
    },
    {
      "naam": "Mark",
      "klacht": "Spieren",
      "plaats": "Amsterdam",
      "sterren": 4,
      "quote": "Mijn chronische spierpijn is eindelijk verholpen. De therapeut nam de tijd om de oorzaak te vinden en aan te pakken.",
      "toestemming": true
    },
    {
      "naam": "Sara",
      "klacht": "Mobiliteit",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Ik kan weer meedoen met mijn kleinkinderen. De behandeling was precies wat ik nodig had.",
      "toestemming": true
    },
    {
      "naam": "Ahmed",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na jaren klachten eindelijk resultaat. Het voelt als een bevrijding om weer normaal te kunnen functioneren.",
      "toestemming": true
    },
    {
      "naam": "Petra",
      "klacht": "Sportblessure",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Professionele begeleiding en oprechte aandacht. Ik voelde me gezien en gehoord tijdens het hele traject.",
      "toestemming": true
    },
    {
      "naam": "Thomas",
      "klacht": "Mobiliteit",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "De flexibiliteit om thuis behandeld te worden maakte het verschil. Goede zorg zonder gedoe.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast omdat bewegen pijn doet en dat maakt je verdrietig.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het steeds weer uit omdat je niet weet waar je terecht kunt en ondertussen word je onzekerder.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Steeds weer een ander gezicht zien en je verhaal opnieuw moeten vertellen zonder dat iemand echt luistert.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee terwijl niemand uitzoekt waar je klacht werkelijk vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij TMC Fysiotherapie werken we anders: we nemen de tijd om jouw verhaal te horen en de echte oorzaak te vinden. Pas dan stellen we samen een persoonlijk behandelplan op dat écht werkt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking en diagnose",
      "tekst": "We luisteren naar je verhaal en onderzoeken grondig wat de oorzaak van je klachten is. Samen bepalen we wat je doel is.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake maken we een plan op maat dat aansluit bij jouw situatie en doelen. Je weet precies wat je kunt verwachten.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We begeleiden je stap voor stap naar herstel met hands-on therapie en oefeningen. Je werkt met dezelfde therapeut die jou kent.",
      "duur": "4-8 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Ali Abbasi",
      "functie": "Fysiotherapeut",
      "specialisatie": "dry needling, oefentherapie, mobilisaties",
      "foto": "https://www.tmcfysiotherapie.nl/wp-content/uploads/2026/04/Screenshot-2026-04-14-145909.png",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.tmcfysiotherapie.nl/wp-content/uploads/2026/04/Screenshot-2026-04-14-145909.png",
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, je kunt direct een afspraak maken zonder verwijzing van de huisarts. Fysiotherapie is vrij toegankelijk."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit verschilt per persoon en klacht. Tijdens de intake bespreken we een indicatie en passen we het plan aan naarmate je vordert."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Gemiddeld kun je binnen 2 dagen terecht voor een eerste afspraak. Voor spoedgevallen doen we er alles aan om je sneller te helpen."
    },
    {
      "vraag": "Krijg ik altijd dezelfde therapeut?",
      "antwoord": "Ja, bij TMC word je behandeld door één vaste therapeut die jouw traject van begin tot eind begeleidt en je verhaal kent."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "We hebben aantrekkelijke tarieven voor zelfbetalers. Neem contact met ons op voor een persoonlijk voorstel dat past bij jouw situatie."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot volledig herstel begeleiden we je persoonlijk.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#D4A853",
    "donker": "#B8903D",
    "licht": "#FDF8EE"
  }
} as const;

export type Praktijk = typeof praktijk;
