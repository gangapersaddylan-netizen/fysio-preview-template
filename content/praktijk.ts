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
  "naam": "fysiosportief",
  "plaats": "Groningen",
  "telefoon": "050 318 28 28",
  "telefoonHref": "tel:+31503182828",
  "whatsapp": "https://wa.me/31503182828",
  "boekUrl": "#contact",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Weer Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Schouderpijn en beperkingen door blessures of slijtage",
      "slug": "schouder",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rug",
      "sub": "Rugklachten, lage rugpijn en nekproblemen",
      "slug": "rug",
      "icoon": "Bone"
    },
    {
      "label": "Hardlopen",
      "sub": "Hardloopblessures en preventie voor lopers",
      "slug": "hardlopen",
      "icoon": "Activity"
    },
    {
      "label": "Sport",
      "sub": "Sportblessures en revalidatie na blessure",
      "slug": "sport",
      "icoon": "Dumbbell"
    },
    {
      "label": "Heup",
      "sub": "Heupklachten en herstel na heupoperatie",
      "slug": "heup",
      "icoon": "Bone"
    },
    {
      "label": "Kinderfysio",
      "sub": "Fysiotherapie voor kinderen en ontwikkeling",
      "slug": "kinderfysio",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Lisa",
      "klacht": "Schouder",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Na maanden schouderpijn eindelijk weer normaal kunnen bewegen. De behandeling was gericht en persoonlijk.",
      "toestemming": true
    },
    {
      "naam": "Thomas",
      "klacht": "Hardlopen",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Ik kon bijna niet meer hardlopen door kniepijn. Nu loop ik weer mijn trainingen zonder last. Ze hebben echt naar de oorzaak gekeken.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "Rug",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Mijn rugpijn was zo erg dat ik mijn werk amper nog kon doen. Na een paar weken hier ben ik weer volledig aan het werk.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Sport",
      "plaats": "Haren",
      "sterren": 4,
      "quote": "Sportblessure opgelopen tijdens voetballen. Ze wisten precies wat er moest gebeuren en ik sta nu weer op het veld.",
      "toestemming": true
    },
    {
      "naam": "Emma",
      "klacht": "Heup",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Na mijn heupoperatie voelde ik me onzeker over bewegen. Hier kreeg ik stap voor stap de begeleiding die ik nodig had.",
      "toestemming": true
    },
    {
      "naam": "Mark",
      "klacht": "Rug",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Jarenlang last van lage rugpijn. Eindelijk iemand die écht uitzoekt waar het vandaan komt.",
      "toestemming": true
    },
    {
      "naam": "Julia",
      "klacht": "Kinderfysio",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Onze zoon had moeite met bepaalde bewegingen. De kinderfysio heeft hem zo goed geholpen, hij speelt nu zorgeloos.",
      "toestemming": true
    },
    {
      "naam": "Roel",
      "klacht": "Hardlopen",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Ik dacht dat mijn hardlooptijd voorbij was door achillespijn. Nu train ik weer voor de marathon, ongelooflijk.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, want bewegen doet gewoon te veel pijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je twijfelt of je nog langer moet wachten of dat het eindelijk tijd is om hulp te zoeken.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Bij elke nieuwe afspraak zit je weer bij iemand anders en moet je je hele verhaal opnieuw vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar jouw klacht precies vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij fysiosportief werken vakidioten én alleskunners die écht de tijd nemen om jouw klacht te begrijpen. We zoeken altijd naar de oorzaak, niet alleen de symptomen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We nemen ruim de tijd om je klacht te begrijpen en onderzoeken grondig wat er speelt. Jouw verhaal staat centraal.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van onze bevindingen stellen we een plan op dat écht bij jou past. We leggen helder uit wat we gaan doen en waarom.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "Stap voor stap werken we aan jouw herstel met hands-on behandelingen en gerichte oefeningen. Je merkt week na week vooruitgang.",
      "duur": "4-8 weken gemiddeld",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Anneroos",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/e9ba404f18fcef766ee1d453ffb8af27aa017f6b-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Anouk",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/25ae940d9561e1d5af6de7e51c5eb901445acc07-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Bart",
      "functie": "Fysiotherapeut, manueel therapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/98ff4a410e1af58fce6b2a3fcf4cc94722bd88b8-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Daan",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/12/FysioSportief-28nov-0068-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Dannie",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/d16935ed79c7a0c22c55a12dd1be65f8584ab93f-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Don",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2026/01/fysiozonderfoto-1024x1024.jpeg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/11/DSF6793_Fysiosportief_Behandelingen_Fotografie_Jesse_Schaap_WEBSIZE-683x1024.jpg"
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
      "antwoord": "Nee, je kunt direct bij ons terecht zonder verwijzing. De meeste zorgverzekeraars vergoeden fysiotherapie uit het basispakket of de aanvullende verzekering."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht. Tijdens de intake krijg je een inschatting. Gemiddeld merken mensen na 4 tot 8 sessies duidelijk verbetering."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We proberen je binnen 1 tot 3 werkdagen te helpen. Bij spoed doen we er alles aan om je zo snel mogelijk in te plannen."
    },
    {
      "vraag": "Zie ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij fysiosportief word je behandeld door één vaste therapeut die jouw dossier en verhaal kent. Continuïteit vinden wij belangrijk."
    },
    {
      "vraag": "Wat kost een behandeling als ik niet verzekerd ben?",
      "antwoord": "Een behandeling kost €42 tot €48 per sessie, afhankelijk van de duur. We werken transparant en je weet vooraf waar je aan toe bent."
    }
  ],
  "stappenKop": "Hoe werkt jouw behandeltraject?",
  "stappenSub": "Van eerste afspraak tot het moment dat je weer zorgeloos beweegt.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#f97316",
    "donker": "#c2410c",
    "licht": "#ffedd5"
  }
} as const;

export type Praktijk = typeof praktijk;
