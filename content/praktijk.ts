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
  "naam": "De Praktijk",
  "plaats": "De Bilt",
  "telefoon": "030 220 1432",
  "telefoonHref": "tel:+31302201432",
  "whatsapp": "https://wa.me/31302201432",
  "boekUrl": "https://fysio-depraktijk.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Gezond Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 156,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Bij acute en chronische rugpijn",
      "slug": "rugklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Voor frozen shoulder en blessures",
      "slug": "schouder",
      "icoon": "PersonStanding"
    },
    {
      "label": "Sportblessure",
      "sub": "Sneller terug in je sport",
      "slug": "sportblessure",
      "icoon": "Dumbbell"
    },
    {
      "label": "Bekkenklacht",
      "sub": "Voor tijdens en na zwangerschap",
      "slug": "bekkenklacht",
      "icoon": "HeartPulse"
    },
    {
      "label": "Nekklachten",
      "sub": "Bij spanning en hoofdpijn",
      "slug": "nekklachten",
      "icoon": "Brain"
    },
    {
      "label": "Knie",
      "sub": "Voor artrose en loopklachten",
      "slug": "knie",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Mark",
      "klacht": "Rugklachten",
      "plaats": "De Bilt",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk weer klachtenvrij. De persoonlijke aanpak en gerichte oefeningen hebben echt geholpen.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Bekkenklacht",
      "plaats": "Bilthoven",
      "sterren": 5,
      "quote": "Tijdens mijn zwangerschap super goed geholpen. De therapeut nam echt de tijd en luisterde naar mijn verhaal.",
      "toestemming": true
    },
    {
      "naam": "Tom",
      "klacht": "Sportblessure",
      "plaats": "Maartensdijk",
      "sterren": 5,
      "quote": "Door mijn knieblessure kon ik niet meer hardlopen. Nu train ik weer volop en weet ik hoe ik blessures kan voorkomen.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Schouder",
      "plaats": "De Bilt",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek niet over te gaan, maar hier hebben ze me echt verder geholpen met gerichte behandeling.",
      "toestemming": true
    },
    {
      "naam": "Jasper",
      "klacht": "Nekklachten",
      "plaats": "Bilthoven",
      "sterren": 4,
      "quote": "Veel last van nekpijn door kantoorwerk. De oefeningen en uitleg waren duidelijk en effectief.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Knie",
      "plaats": "Soesterberg",
      "sterren": 5,
      "quote": "Ik dacht dat ik door artrose niet meer goed zou kunnen bewegen, maar dankzij de behandeling loop ik nu veel soepeler.",
      "toestemming": true
    },
    {
      "naam": "Ruben",
      "klacht": "Rugklachten",
      "plaats": "De Bilt",
      "sterren": 5,
      "quote": "Fijne praktijk met korte lijntjes. Ik werd snel geholpen en de therapeut wist precies waar het probleem zat.",
      "toestemming": true
    },
    {
      "naam": "Emma",
      "klacht": "Sportblessure",
      "plaats": "Bilthoven",
      "sterren": 5,
      "quote": "Na een hockeyblessure weer volledig hersteld. Het team werkt goed samen en denkt echt met je mee.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al weken in de kast omdat bewegen pijn doet en je dat deel van je leven moet missen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt een afspraak uit omdat je niet weet waar je het beste terecht kunt en je er eigenlijk alleen voor staat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je ziet elke keer een ander gezicht en moet steeds opnieuw uitleggen wat er aan de hand is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar jouw klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij De Praktijk nemen we de tijd om jouw unieke lichaam en klachten te begrijpen. Met gebundelde expertise en persoonlijke aandacht werken we samen aan een oplossing die bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een uitgebreid gesprek en onderzoek om precies te begrijpen wat er speelt. Je vertelt je verhaal en we analyseren samen waar de klacht vandaan komt.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we een behandelplan op dat aansluit bij jouw situatie en doelen. Je krijgt duidelijke uitleg over de aanpak en wat je kunt verwachten.",
      "duur": "Vanaf behandeling 2",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "We voeren het plan stap voor stap uit met hands-on behandeling, gerichte oefeningen en begeleiding. Samen werken we toe naar blijvend herstel en een gezond bewegend lichaam.",
      "duur": "4 tot 8 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Bram Louman",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/Portret-Bram-300x200.png",
      "uitgelicht": true
    },
    {
      "naam": "Sara van der Zwaag",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/portret-Sara-300x200.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Marijke van Zutphen",
      "functie": "Bekkenfysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/Portret-Marijke-300x200.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Ruud Middel",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/portret-Ruud-300x200.jpeg",
      "uitgelicht": true
    },
    {
      "naam": "Leonie de Bree",
      "functie": "Geriatrisch fysiotherapeut & Sportfysiotherapeut",
      "specialisatie": "Geriatrie en Sport",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2026/04/leonie-300x200-1.png",
      "uitgelicht": true
    },
    {
      "naam": "Swen ten Broeke",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/portret.png",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/Groepsfoto-scaled.jpg"
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
      "antwoord": "Nee, je kunt direct een afspraak maken zonder verwijzing van de huisarts. Fysiotherapie wordt vergoed vanuit de basisverzekering na het eigen risico, of volledig vanuit je aanvullende verzekering."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat is per persoon verschillend en hangt af van je klacht en herstelproces. Na de intake bespreken we een inschatting en een behandelplan. Gemiddeld zijn tussen de 6 en 10 behandelingen nodig."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om je binnen 3 werkdagen te kunnen helpen. Bij acute klachten doen we ons best om je zo snel mogelijk in te plannen."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, je wordt behandeld door één vaste therapeut die jouw situatie kent en je begeleidt door het hele traject. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €42 voor een vervolgbehandeling van 30 minuten en €70 voor een intakegesprek van 60 minuten. We adviseren altijd om te controleren wat jouw verzekering vergoedt."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot blijvend resultaat: zo werken we samen aan jouw herstel.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#d94545",
    "donker": "#b02a2a",
    "licht": "#fef2f2"
  }
} as const;

export type Praktijk = typeof praktijk;
