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
  "telefoon": "075 612 34 56",
  "telefoonHref": "tel:+31756123456",
  "whatsapp": "https://wa.me/31756123456",
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
      "label": "Rug & Nek",
      "sub": "Chronische rugpijn, nekklachten en schouderproblematiek",
      "slug": "rug-nek",
      "icoon": "PersonStanding"
    },
    {
      "label": "Sport",
      "sub": "Sportblessures, revalidatie en prestatieoptimalisatie",
      "slug": "sport",
      "icoon": "Activity"
    },
    {
      "label": "Oncologie",
      "sub": "Begeleiding tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Arbeid",
      "sub": "Arbeidsrevalidatie en re-integratie op de werkvloer",
      "slug": "arbeid",
      "icoon": "Dumbbell"
    },
    {
      "label": "Oedeem",
      "sub": "Lymfedrainage en behandeling van vochtophoping",
      "slug": "oedeem",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Na jaren rondlopen met rugpijn eindelijk iemand gevonden die echt naar me luistert. Ik kan weer gewoon sporten en mijn werk doen zonder constant pijn.",
      "toestemming": true
    },
    {
      "naam": "Marcel",
      "klacht": "Sport",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "Knieblessure opgelopen tijdens voetballen. Dankzij het persoonlijke plan sta ik nu weer sterker op het veld dan ooit. Top begeleiding!",
      "toestemming": true
    },
    {
      "naam": "Inge",
      "klacht": "Oncologie",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "De oncologische begeleiding hier heeft me door een moeilijke periode heen geholpen. Ik voel me nu weer sterker en fitter.",
      "toestemming": true
    },
    {
      "naam": "Tom",
      "klacht": "Arbeid",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "RSI-klachten speelden op door mijn werk. Nu kan ik weer volledige dagen werken zonder last. Ze hebben echt gekeken naar de oorzaak.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Rug & Nek",
      "plaats": "Krommenie",
      "sterren": 4,
      "quote": "Ik was sceptisch, maar na een paar weken merk ik echt verschil. De oefeningen zijn simpel maar effectief.",
      "toestemming": true
    },
    {
      "naam": "Robert",
      "klacht": "Sport",
      "plaats": "Zaandijk",
      "sterren": 5,
      "quote": "Hardlopen ging niet meer door mijn achillespees. Ze hebben me stap voor stap opgebouwd en nu loop ik weer wedstrijden. Geweldig!",
      "toestemming": true
    },
    {
      "naam": "Petra",
      "klacht": "Oedeem",
      "plaats": "Westzaan",
      "sterren": 5,
      "quote": "De oedeemtherapie heeft mijn leven veranderd. Mijn benen voelen lichter en ik heb veel meer energie.",
      "toestemming": true
    },
    {
      "naam": "Erik",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Schouderklachten door jarenlang bureawerk. Eindelijk een plek waar ze de tijd nemen en echt willen helpen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan alweer maanden in de kast, want bewegen zoals vroeger lukt gewoon niet meer.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het uit, weet niet waar je terecht kunt, en het voelt alsof je er helemaal alleen voor staat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer dat je ergens komt zie je een ander gezicht en moet je je verhaal weer opnieuw vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand die echt uitzoekt waar jouw klacht nou vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! nemen we de tijd om jou en je klacht écht te leren kennen. We kijken verder dan symptomen, zoeken samen naar de oorzaak en bouwen een plan op maat. Altijd met dezelfde professional, altijd met persoonlijke uitleg.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek waarin we luisteren naar jouw verhaal, klachten en doelen. Samen onderzoeken we waar de klacht vandaan komt.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we een behandelplan op maat samen. We leggen duidelijk uit wat we gaan doen en waarom, zodat jij precies weet waar je aan toe bent.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "We begeleiden je stap voor stap richting jouw doel. Tussentijds evalueren we de voortgang en passen we het plan aan waar nodig, tot je weer kunt doen wat je wilt.",
      "duur": "Gemiddeld 6-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Bert Lemstra",
      "functie": "Eigenaar | Manueel therapeut",
      "specialisatie": "Manueel therapeut",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/13-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Patrick Corzilius",
      "functie": "Eigenaar | Fysiotherapeut",
      "specialisatie": "Fysiotherapeut",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/14-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Lisette Lemstra",
      "functie": "Hoofd administratie",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/Ontwerp-zonder-titel-5.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Yvette Corzilius",
      "functie": "Hoofd administratie",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/3.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Karin Paasman",
      "functie": "Fysiotherapeut | Oedeem therapeut | Oncologie fysiotherapeut | Geriatrie fysiotherapie",
      "specialisatie": "Oedeem, Oncologie, Geriatrie",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/Ontwerp-zonder-titel-6.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Eva Kaatee",
      "functie": "Fysiotherapeut | Chronisch zorgnet",
      "specialisatie": "Chronisch zorgnet",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/3-1.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://leef.nu/wp-content/uploads/2025/06/IMG_7119-scaled.jpeg"
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
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Je kunt direct een afspraak maken via onze website of telefoon. Voor bepaalde specialisaties zoals manuele therapie kan een verwijzing van je huisarts wel handig zijn voor je verzekering."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat is per persoon verschillend en hangt af van je klacht en doelen. Gemiddeld zijn 6 tot 12 behandelingen voldoende, maar dit bespreken we tijdens de intake en evalueren we tussentijds."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "In de meeste gevallen kun je binnen 48 uur terecht voor een eerste afspraak. We hebben ook avond- en weekendmomenten beschikbaar, zodat het altijd in jouw agenda past."
    },
    {
      "vraag": "Zie ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij LEEF! word je behandeld door één vaste therapeut die jouw verhaal kent en je van A tot Z begeleidt. Zo hoef je je verhaal niet steeds opnieuw te vertellen en krijg je persoonlijke continuïteit in je behandeling."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost € 45,- per sessie. Veel verzekeringsmaatregelen vergoeden fysiotherapie (deels) vanuit de basisverzekering of aanvullende verzekering. We adviseren je om dit vooraf bij je verzekeraar na te vragen."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot volledig herstel begeleiden we je persoonlijk.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a4d233",
    "donker": "#7ba324",
    "licht": "#f2f9e6"
  }
} as const;

export type Praktijk = typeof praktijk;
