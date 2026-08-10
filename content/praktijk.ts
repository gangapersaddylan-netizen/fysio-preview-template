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
  "naam": "Fysiosportief",
  "plaats": "Groningen",
  "telefoon": "050 549 1234",
  "telefoonHref": "tel:+31505491234",
  "whatsapp": "https://wa.me/31505491234",
  "boekUrl": "https://fysiosportiefgroningen.nl/keuzehulp/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Weer Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 320,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug",
      "sub": "Rugpijn, hernia, chronische rugklachten",
      "slug": "rug",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Schouderpijn, frozen shoulder, rotator cuff",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Hardlopen",
      "sub": "Hardloopblessures, achillespees, knie",
      "slug": "hardlopen",
      "icoon": "Activity"
    },
    {
      "label": "Sport",
      "sub": "Sportblessures, herstel na operatie",
      "slug": "sport",
      "icoon": "Dumbbell"
    },
    {
      "label": "Kinderen",
      "sub": "Motorische ontwikkeling, bewegingsklachten",
      "slug": "kinderen",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Marloes",
      "klacht": "Rug",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Na jaren last van mijn onderrug kon ik eindelijk weer normaal functioneren. Ze hebben echt naar me geluisterd en een plan gemaakt dat bij mij paste.",
      "toestemming": true
    },
    {
      "naam": "Tom",
      "klacht": "Hardlopen",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Ik durfde niet meer te lopen na mijn achillespeesklachten. Nu loop ik weer mijn trainingen en voel me sterker dan ooit. Dankbaar voor de begeleiding.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Schouder",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek niet meer over te gaan. Hier hebben ze me geholpen met geduld en expertise, nu kan ik mijn arm weer volledig gebruiken.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Sport",
      "plaats": "Groningen",
      "sterren": 4,
      "quote": "Na mijn knieoperatie begeleiden ze me perfect. Ik train weer volledig en heb vertrouwen in mijn lichaam.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "Kinderen",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Mijn zoon had moeite met bewegen en coördinatie. Nu rent hij met zijn vriendjes mee en durft hij alles aan. We zijn zo blij.",
      "toestemming": true
    },
    {
      "naam": "Patrick",
      "klacht": "Rug",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Ik kwam binnen met een hernia en kon nauwelijks lopen. Ze hebben me stap voor stap geholpen en nu ben ik weer actief in mijn werk.",
      "toestemming": true
    },
    {
      "naam": "Anna",
      "klacht": "Schouder",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Ik had al verschillende plekken geprobeerd, maar hier voelde ik me echt gehoord. Mijn schouderpijn is verdwenen en ik kan weer sporten.",
      "toestemming": true
    },
    {
      "naam": "Mark",
      "klacht": "Hardlopen",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Ze snappen echt wat hardlopen vraagt van je lichaam. Mijn knieklachten zijn weg en ik heb mijn PR verbeterd.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, want bewegen zoals vroeger lukt gewoon niet meer.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het al te lang uit en weet niet of je hier wel op de goede plek bent met je klacht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt telkens een andere therapeut en moet je verhaal steeds opnieuw vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand neemt de tijd om echt uit te zoeken waar je klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij fysiosportief werken we anders: je hebt een vaste therapeut die écht voor je klaarstaat, neemt de tijd om de oorzaak te vinden en legt precies uit wat er aan de hand is en wat we gaan doen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking en onderzoek",
      "tekst": "We nemen ruim de tijd voor je verhaal en onderzoeken grondig wat de oorzaak van je klacht is. Je krijgt direct duidelijkheid.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Jouw persoonlijke aanpak",
      "tekst": "Op basis van het onderzoek stellen we samen een behandelplan op dat aansluit bij jouw doelen en situatie. We betrekken je actief bij elke keuze.",
      "duur": "Tijdens intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Aan de slag naar resultaat",
      "tekst": "Je vaste therapeut begeleidt je stap voor stap. We trainen, behandelen en zorgen dat je weer kunt doen wat je wilt.",
      "duur": "4-8 weken gemiddeld",
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Je kunt direct een afspraak maken via onze website of telefoon."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Gemiddeld zie je na 4 tot 8 behandelingen duidelijk resultaat. We bespreken dit altijd tijdens de intake."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kun je binnen 3 werkdagen bij ons terecht. Bij spoedgevallen doen we ons best om je sneller te helpen."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, je hebt een vaste therapeut die je hele traject begeleidt. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat kost een behandeling zonder verzekering?",
      "antwoord": "Een behandeling kost €45 zonder verzekering. De intake duurt langer en kost €65. We declareren rechtstreeks bij je verzekeraar als je verzekerd bent."
    }
  ],
  "stappenKop": "Hoe we je helpen",
  "stappenSub": "Van eerste afspraak tot volledig herstel in drie heldere stappen.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#f97316",
    "donker": "#c2410c",
    "licht": "#ffedd5"
  }
} as const;

export type Praktijk = typeof praktijk;
