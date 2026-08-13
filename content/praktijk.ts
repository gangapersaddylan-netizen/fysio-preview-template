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
  "naam": "Total Medical Care Fysiotherapie",
  "plaats": "Amsterdam",
  "telefoon": "06-41197188",
  "telefoonHref": "tel:+31641197188",
  "whatsapp": "https://wa.me/31641197188",
  "boekUrl": "https://www.tmcfysiotherapie.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Fijner Leven",
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
      "sub": "Frozen shoulder en chronische schouderklachten",
      "slug": "schouder",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rug & Nek",
      "sub": "Rugpijn, nekklachten en wervelkolomaandoeningen",
      "slug": "rug-nek",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessures",
      "sub": "Herstel en preventie van sportgerelateerde klachten",
      "slug": "sportblessures",
      "icoon": "Activity"
    },
    {
      "label": "Revalidatie",
      "sub": "Postoperatief herstel en medische fitness",
      "slug": "revalidatie",
      "icoon": "Dumbbell"
    },
    {
      "label": "Bewegingsbepe",
      "sub": "Mobiliteit en bewegingsbereik vergroten",
      "slug": "bewegingsbeperking",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden schouderpijn eindelijk de juiste hulp gevonden. Ik kan mijn arm weer normaal bewegen en de pijn is weg.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Sportblessures",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Professionele begeleiding bij mijn knieblessure. Ik sport nu weer op mijn oude niveau, dankzij het maatwerk traject.",
      "toestemming": true
    },
    {
      "naam": "Fatima",
      "klacht": "Rug & Nek",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Mijn rugklachten zijn sterk verminderd. Ze namen echt de tijd om te begrijpen waar het vandaan kwam.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Revalidatie",
      "plaats": "Almere",
      "sterren": 5,
      "quote": "Na mijn operatie super geholpen met de revalidatie. Het herstel verliep voorspoedig en ik voelde me goed begeleid.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Bewegingsbepe",
      "plaats": "Amsterdam",
      "sterren": 4,
      "quote": "Fijne praktijk met persoonlijke aandacht. Ik ben weer veel beweeglijker geworden en dat maakt een enorm verschil in mijn dagelijks leven.",
      "toestemming": true
    },
    {
      "naam": "Ahmed",
      "klacht": "Rug & Nek",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Eindelijk iemand die écht luistert. Mijn nekpijn is na jaren eindelijk verholpen.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Schouder",
      "plaats": "Diemen",
      "sterren": 5,
      "quote": "Ik kon mijn arm niet meer omhoog krijgen. Nu kan ik gewoon weer alles doen, ook mijn werk zonder klachten.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Sportblessures",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Top team dat weet waar ze mee bezig zijn. Ik ben sneller hersteld dan verwacht en kreeg veel nuttige tips mee.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, omdat bewegen gewoon te veel pijn doet en dat deel van je leven stilstaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het uitzoeken van je klachten steeds maar uit, omdat je niet weet waar je terecht kunt en het gevoel hebt er alleen voor te staan.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je ziet elke keer een ander gezicht in de praktijk en moet je verhaal steeds opnieuw vertellen, zonder dat iemand je echt kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaard oefeningen mee zonder dat iemand echt uitzoekt waar je klacht vandaan komt en waarom het niet overgaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij TMC Fysiotherapie staat persoonlijke aandacht voorop: wij nemen de tijd om uw verhaal te horen, de oorzaak te achterhalen en een behandelplan op maat samen te stellen. Zo komen we samen tot duurzaam herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "In het eerste gesprek luisteren we naar uw verhaal en voeren we een grondig onderzoek uit om de oorzaak van uw klachten te achterhalen.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met u een behandelplan op maat op, afgestemd op uw doelen en levensstijl.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en herstel",
      "tekst": "We begeleiden u stap voor stap naar uw doel met hands-on therapie, oefeningen en begeleiding totdat u weer klachtenvrij bent.",
      "duur": "6-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Ali Abbasi",
      "functie": "Fysiotherapeut",
      "specialisatie": "Dry needling, oefentherapie",
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
      "vraag": "Heb ik een verwijzing nodig voor fysiotherapie?",
      "antwoord": "Nee, een verwijzing is niet nodig. U kunt direct een afspraak maken bij onze praktijk. Voor vergoeding door uw zorgverzekeraar is soms wel een verwijzing vereist, afhankelijk van uw polis."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik gemiddeld nodig?",
      "antwoord": "Het aantal behandelingen verschilt per persoon en klacht. Gemiddeld hebben cliënten tussen de 6 en 12 sessies nodig, maar dit bespreken we tijdens de intake op basis van uw specifieke situatie."
    },
    {
      "vraag": "Hoe lang moet ik wachten op een afspraak?",
      "antwoord": "We streven ernaar om u binnen 2 werkdagen te kunnen ontvangen. Bij spoed proberen we altijd een plek te vinden op korte termijn."
    },
    {
      "vraag": "Word ik altijd door dezelfde fysiotherapeut behandeld?",
      "antwoord": "Ja, bij TMC hechten we veel waarde aan continuïteit. U wordt gedurende het gehele traject behandeld door uw vaste fysiotherapeut, die uw klacht kent en uw voortgang nauwlettend volgt."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen fysiotherapie in mijn verzekering heb?",
      "antwoord": "Voor cliënten zonder fysiotherapie in hun pakket bieden wij aantrekkelijke tarieven aan. Een behandeling kost € 47,50 en we hebben ook voordeelpakketten beschikbaar. Neem contact op voor meer informatie."
    }
  ],
  "stappenKop": "Uw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot duurzaam resultaat, we begeleiden u persoonlijk.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#D4A136",
    "donker": "#B88A2B",
    "licht": "#FBF5E8"
  }
} as const;

export type Praktijk = typeof praktijk;
