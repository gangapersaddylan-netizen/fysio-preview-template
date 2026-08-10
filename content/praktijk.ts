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
  "naam": "Xpert Clinics",
  "plaats": "Amstelveen",
  "telefoon": "020 799 1200",
  "telefoonHref": "tel:+31207991200",
  "whatsapp": "https://wa.me/31207991200",
  "boekUrl": "https://booking.xpertclinics.nl/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Snel Herstel",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 320,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Heup",
      "sub": "Artrose, bewegingsbeperking, heupslijtage",
      "slug": "heup",
      "icoon": "Bone"
    },
    {
      "label": "Knie",
      "sub": "Artrose, meniscus, kniepijn, instabiliteit",
      "slug": "knie",
      "icoon": "Activity"
    },
    {
      "label": "Hand & Pols",
      "sub": "Carpaal tunnel, triggervinger, artrose",
      "slug": "hand-pols",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Slijtage, bevroren schouder, bewegingsklachten",
      "slug": "schouder",
      "icoon": "Dumbbell"
    },
    {
      "label": "Oog",
      "sub": "Staar, hoornvlies, laserbehandelingen",
      "slug": "oog",
      "icoon": "Brain"
    },
    {
      "label": "Anaal",
      "sub": "Aambeien, fissuren, abcessen",
      "slug": "anaal",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Jan de Vries",
      "klacht": "Heup",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na jaren pijn eindelijk geholpen. De operatie verliep soepel en ik kon snel weer bewegen. Hele fijne begeleiding.",
      "toestemming": true
    },
    {
      "naam": "Sandra Jansen",
      "klacht": "Knie",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Ik stond versteld van de snelheid. Binnen twee weken geholpen en het resultaat is geweldig. Kan alles weer doen.",
      "toestemming": true
    },
    {
      "naam": "Peter Bakker",
      "klacht": "Hand & Pols",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "De tintelingen in mijn handen zijn weg. Alles werd uitgelegd en ik voelde me goed verzorgd.",
      "toestemming": true
    },
    {
      "naam": "Marieke Smit",
      "klacht": "Schouder",
      "plaats": "Rotterdam",
      "sterren": 4,
      "quote": "Vriendelijke mensen en goede uitleg. Mijn schouder is al stukken beter na de behandeling.",
      "toestemming": true
    },
    {
      "naam": "Erik van Dijk",
      "klacht": "Oog",
      "plaats": "Rozendaal",
      "sterren": 5,
      "quote": "Staaroperatie perfect verlopen, zie alles weer scherp. Professionele zorg en snel geholpen.",
      "toestemming": true
    },
    {
      "naam": "Linda Visser",
      "klacht": "Anaal",
      "plaats": "Amstelveen",
      "sterren": 5,
      "quote": "Eindelijk verlost van mijn klachten. De behandeling was pijnloos en ik werd goed begeleid.",
      "toestemming": true
    },
    {
      "naam": "Tom Hendriks",
      "klacht": "Knie",
      "plaats": "Enschede",
      "sterren": 5,
      "quote": "Kan weer alles doen wat ik wil. De kliniek is modern en het personeel is erg betrokken.",
      "toestemming": true
    },
    {
      "naam": "Anne Mulder",
      "klacht": "Hand & Pols",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Carpaal tunnel syndroom verholpen. Snel, professioneel en met veel aandacht. Top!",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan alweer een tijd in de kast, want bewegen zoals je dat gewend was lukt niet meer door de pijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het al maanden uit omdat je niet weet waar je terecht kunt en bang bent voor lange wachttijden.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je ziet elke keer een ander gezicht en moet je verhaal steeds opnieuw doen, zonder dat je het gevoel hebt dat iemand je echt kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand neemt echt de tijd om uit te zoeken waar je klachten nou precies vandaan komen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Xpert Clinics staan jij en je klacht centraal. We nemen de tijd om uit te zoeken wat er echt aan de hand is en leggen duidelijk uit wat we gaan doen. Zo weet je precies waar je aan toe bent.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We luisteren naar je verhaal, onderzoeken je klacht grondig en stellen een duidelijke diagnose. Je weet direct wat er aan de hand is.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Je krijgt een op maat gemaakt behandelplan dat precies aansluit bij jouw situatie en wensen. We bespreken alle opties en stappen.",
      "duur": "1 week",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "We voeren de behandeling uit met de nieuwste technieken en begeleiden je tot volledig herstel. Zo kom je snel terug naar je normale leven.",
      "duur": "2-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Muhammed Ali Kedilioglu",
      "functie": "Hand- en polschirurg",
      "specialisatie": "Hand- en polschirurgie",
      "foto": "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D1280%26quality%3D100%26format%3Dwebp%26mode%3Dcrop&w=3840&q=100",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D1280%26quality%3D100%26format%3Dwebp%26mode%3Dcrop&w=3840&q=100",
    "extraFotos": [
      "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D760%26quality%3D90%26format%3Dwebp%26mode%3Dcrop&w=3840&q=90"
    ]
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
      "antwoord": "Voor de meeste behandelingen heb je een verwijsbrief van je huisarts nodig. Voor hand- en polszorg en proctologie kun je bij sommige locaties ook zonder verwijzing terecht. Neem contact op om te checken wat voor jou geldt."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en behandeling. Bij de intake maken we een behandelplan op maat en bespreken we het verwachte aantal afspraken met je."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Bij Xpert Clinics werken we met korte wachttijden. Vaak kun je binnen een paar dagen tot twee weken terecht voor je eerste afspraak. Voor acute klachten doen we ons best je nog sneller te helpen."
    },
    {
      "vraag": "Krijg ik een vaste behandelaar?",
      "antwoord": "Ja, waar mogelijk werken we met vaste behandelaren zodat je niet steeds je verhaal hoeft te herhalen. Je specialist kent je klacht en kan je optimaal begeleiden."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De behandeling wordt vrijwel altijd vergoed vanuit de basisverzekering of aanvullende verzekering. Heb je geen verzekering, dan kun je bij ons een offerte opvragen voor de specifieke behandeling."
    }
  ],
  "stappenKop": "Van intake tot herstel",
  "stappenSub": "In drie stappen naar een leven zonder klachten.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#0077c8",
    "donker": "#005a9e",
    "licht": "#e6f4ff"
  }
} as const;

export type Praktijk = typeof praktijk;
