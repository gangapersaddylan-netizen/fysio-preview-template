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
  "telefoon": "075 617 0000",
  "telefoonHref": "tel:+31756170000",
  "whatsapp": "https://wa.me/31756170000",
  "boekUrl": "https://leef.nu/afspraak_maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Ontdek Kracht",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 285,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug & Nek",
      "sub": "Chronische rugpijn, nekklachten en hernia's",
      "slug": "rug-nek",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, schouderpijn en blessures",
      "slug": "schouder",
      "icoon": "Activity"
    },
    {
      "label": "Sport",
      "sub": "Sportblessures en revalidatie voor atleten",
      "slug": "sport",
      "icoon": "Dumbbell"
    },
    {
      "label": "Oncologie",
      "sub": "Begeleiding tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Arbeidsrevalidatie",
      "sub": "Werkgerelateerde klachten en re-integratie",
      "slug": "arbeidsrevalidatie",
      "icoon": "PersonStanding"
    }
  ],
  "reviews": [
    {
      "naam": "Marieke",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik had al jaren last van mijn onderrug en durfde nauwelijks meer te bewegen. Na behandeling bij LEEF! kan ik eindelijk weer actief zijn met mijn kleinkinderen.",
      "toestemming": true
    },
    {
      "naam": "Thomas",
      "klacht": "Sport",
      "plaats": "Krommenie",
      "sterren": 5,
      "quote": "Door een hardloopblessure stond mijn trainingsschema volledig stil. Het team hielp me stap voor stap terug naar mijn oude niveau, zelfs beter dan voorheen.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Schouder",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "Mijn frozen shoulder maakte eenvoudige dingen zoals aankleden onmogelijk. Dankzij de behandeling kan ik mijn arm weer vrij bewegen.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Arbeidsrevalidatie",
      "plaats": "Zaandam",
      "sterren": 4,
      "quote": "Na een lang ziekteverzuim wist ik niet hoe ik moest beginnen met terugkeren naar mijn werk. De begeleiding was precies wat ik nodig had om dat vertrouwen terug te krijgen.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Oncologie",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "De oncologische fysiotherapie heeft me door een zware periode heen geholpen. Ik voelde me begrepen en kon mijn kracht langzaam weer opbouwen.",
      "toestemming": true
    },
    {
      "naam": "Rob",
      "klacht": "Rug & Nek",
      "plaats": "Zaandijk",
      "sterren": 5,
      "quote": "Ik had nekklachten door kantoorwerk en slechte houding. Nu weet ik hoe ik mijn lichaam beter kan gebruiken en de pijn is weg.",
      "toestemming": true
    },
    {
      "naam": "Fatima",
      "klacht": "Sport",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Als fanatieke tennisser dacht ik dat mijn elleboogklacht het einde betekende. Het team heeft me weer spelfit gekregen en ik speel nu zelfs beter.",
      "toestemming": true
    },
    {
      "naam": "Jan",
      "klacht": "Schouder",
      "plaats": "Koog aan de Zaan",
      "sterren": 5,
      "quote": "Jarenlang schouderpijn na een val. Ik had nergens meer vertrouwen in, maar hier voelde ik me meteen goed begrepen en geholpen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, want sporten of bewegen zoals vroeger lukt gewoon niet meer door je klachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt een bezoek steeds uit, omdat je niet weet waar je terecht kunt of bang bent voor eindeloos wachten zonder echte aandacht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer zie je een ander gezicht en moet je je verhaal opnieuw vertellen, zonder dat iemand echt de tijd neemt om je te leren kennen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt echt uit waar je klacht vandaan komt of wat jouw lichaam nodig heeft.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! werken we anders: we nemen de tijd om jou en je klacht écht te begrijpen, zoeken samen naar de oorzaak en begeleiden je persoonlijk naar jouw doel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking & intake",
      "tekst": "We luisteren naar jouw verhaal, onderzoeken waar je klacht vandaan komt en stellen samen heldere doelen op.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Jouw behandelplan",
      "tekst": "Op basis van de intake stellen we een persoonlijk plan op, afgestemd op jouw lichaam, leefstijl en wat je wilt bereiken.",
      "duur": "Start binnen 48 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering & resultaat",
      "tekst": "Met gerichte behandelingen en begeleiding werken we stap voor stap naar jouw doel: weer bewegen, sporten en leven zoals jij dat wilt.",
      "duur": "Gemiddeld 6-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
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
      "vraag": "Heb ik een verwijzing nodig voor fysiotherapie?",
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Voor vergoeding via je basisverzekering heb je sinds 2024 geen verwijzing meer nodig. Check wel altijd even je polis voor de specifieke voorwaarden van jouw zorgverzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Tijdens de intake bespreken we een indicatie, maar we evalueren regelmatig en passen het plan aan op basis van jouw voortgang. Gemiddeld zijn 6 tot 12 behandelingen voldoende."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om binnen 48 uur een afspraak in te plannen. Spoed? Neem telefonisch contact op, dan kijken we wat mogelijk is."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij LEEF! word je behandeld door één vaste therapeut die jouw verhaal kent en je persoonlijk begeleidt door het hele traject. Continuïteit en een vertrouwensband vinden wij essentieel."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen verzekering heb?",
      "antwoord": "Een behandeling kost €42,- zonder verzekering. We adviseren altijd om te checken of je fysiotherapie vergoed krijgt vanuit je aanvullende verzekering."
    }
  ],
  "stappenKop": "Jouw traject bij LEEF!",
  "stappenSub": "Van intake tot resultaat begeleiden we je persoonlijk naar een leven zonder klachten.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a4d233",
    "donker": "#7fa325",
    "licht": "#f2f9e6"
  }
} as const;

export type Praktijk = typeof praktijk;
