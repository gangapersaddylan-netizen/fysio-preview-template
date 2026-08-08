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
  "naam": "Fysio Bakker",
  "plaats": "Leeuwarden",
  "telefoon": "058 - 203 83 10",
  "telefoonHref": "tel:+31582038310",
  "whatsapp": "https://wa.me/31582038310",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Pijnvrij Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 287,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Pijn, beperkte beweging en ontstekingen",
      "slug": "schouderklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rug",
      "sub": "Lage rugpijn, hernia en spanning",
      "slug": "rugklachten",
      "icoon": "Bone"
    },
    {
      "label": "Nek",
      "sub": "Nekpijn, stijfheid en hoofdpijn",
      "slug": "nekklachten",
      "icoon": "Brain"
    },
    {
      "label": "Knie",
      "sub": "Kniepijn, slijtage en instabiliteit",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessure",
      "sub": "Blessures en herstel voor sporters",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Chronische hoofdpijn en spanning",
      "slug": "hoofdpijn",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Marieke V.",
      "klacht": "Schouder",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na maanden schouderpijn kon ik eindelijk weer slapen. De behandeling was professioneel en ik voelde me gehoord.",
      "toestemming": true
    },
    {
      "naam": "Jan de B.",
      "klacht": "Rug",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Mijn rugklachten zijn enorm verminderd. Ik kan nu weer zonder pijn met mijn kleinkinderen spelen.",
      "toestemming": true
    },
    {
      "naam": "Linda S.",
      "klacht": "Nek",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Ik had dagelijks nekpijn door mijn bureauwerk. Nu weet ik hoe ik het moet aanpakken en ben ik pijnvrij.",
      "toestemming": true
    },
    {
      "naam": "Pieter H.",
      "klacht": "Knie",
      "plaats": "Heerenveen",
      "sterren": 4,
      "quote": "Knieprobleem na hardlopen is opgelost. Ik kon snel terecht en de uitleg was helder.",
      "toestemming": true
    },
    {
      "naam": "Sanne K.",
      "klacht": "Sportblessure",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Mijn enkelblessure werd serieus genomen. Dankzij het trainingsprogramma sta ik weer op het hockeyveld.",
      "toestemming": true
    },
    {
      "naam": "Thomas R.",
      "klacht": "Hoofdpijn",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Jarenlange spanningshoofdpijn eindelijk onder controle. Ik had niet verwacht dat fysiotherapie zo zou helpen.",
      "toestemming": true
    },
    {
      "naam": "Anneke D.",
      "klacht": "Rug",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "De manuele therapie heeft mijn lage rugpijn verholpen. Ik ben weer actief en blij.",
      "toestemming": true
    },
    {
      "naam": "Mark J.",
      "klacht": "Schouder",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Binnen drie weken enorme verbetering in mijn schouderbeweeglijkheid. Top behandeling!",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je wakker worden met pijn en je afvragen of het ooit overgaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Geen energie meer hebben voor de dingen die je graag doet.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Steeds weer uitstellen wat je eigenlijk zou willen doen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Het gevoel hebben dat niemand echt begrijpt hoe beperkend je klacht is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we wat klachten met je doen. Onze ervaren therapeuten nemen de tijd om naar je te luisteren en werken met je samen aan een oplossing die bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Onze fysiotherapeuten analyseren je klacht en stellen een behandelplan op. Door gerichte oefeningen en hands-on behandeling krijg je bewegingsvrijheid en kracht terug.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Met gerichte mobilisaties en manipulaties werken we aan gewrichten en wervels. Deze behandeling vermindert pijn, verbetert beweging en herstelt functie.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry Needling",
      "tekst": "Door het inbrengen van dunne naalden in triggerpunten lossen we verhardingen op. Dit geeft snelle pijnverlichting en verbetert spierfunctie merkbaar.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Echografie en EPTE",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Parkinson en neurologie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Manuele therapie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sjanne Postma",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Dry needling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Rene Bosch",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Schouderklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Oedeemtherapeut",
      "specialisatie": "Lymfedrainage en oedeem",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_6_hwafmn.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.fysiobakker.nl/uploads/images/Full-HD/fysiobakker-groepsfoto-home-002.jpg"
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
      "antwoord": "Nee, een verwijzing is niet nodig. Je kunt direct bij ons terecht. Sinds 2006 heeft fysiotherapie vrije toegang, wat betekent dat je zelf kunt kiezen voor behandeling zonder tussenkomst van de huisarts."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Na het intakegesprek en onderzoek geven we een inschatting. Gemiddeld zien we verbetering binnen 3 tot 6 behandelingen, maar we evalueren dit steeds samen met jou."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Vaak kunnen we je binnen 24 uur helpen. We vinden het belangrijk dat je snel terecht kunt, zeker bij acute klachten. Bel of app ons voor een spoedige afspraak."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, je krijgt een vaste therapeut die je behandeltraject begeleidt. Dit zorgt voor continuïteit en een vertrouwensband. Mocht je therapeut er een keer niet zijn, dan wordt je behandeling overgedragen aan een collega."
    },
    {
      "vraag": "Wat kost een behandeling zonder verzekering?",
      "antwoord": "Een behandeling van 30 minuten kost €37,50. Voor langere behandelingen of specialistische therapie zoals manuele therapie of dry needling kunnen andere tarieven gelden. Neem contact op voor een compleet overzicht."
    }
  ],
  "stappenKop": "Onze behandelmogelijkheden",
  "stappenSub": "We bieden diverse specialisaties om jouw klacht effectief te behandelen en je snel weer in beweging te krijgen.",
  "kleuren": {
    "primair": "#ff5722",
    "donker": "#d84315",
    "licht": "#ffe0d6"
  }
} as const;

export type Praktijk = typeof praktijk;
