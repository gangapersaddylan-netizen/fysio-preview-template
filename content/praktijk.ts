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
      "label": "Rugklachten",
      "sub": "Lagere en hogere rugpijn",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Schouderklachten en blessures",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Nekklachten",
      "sub": "Nekpijn en hoofdpijn",
      "slug": "nekklachten",
      "icoon": "Brain"
    },
    {
      "label": "Knieklachten",
      "sub": "Knie- en beenpijn",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessures",
      "sub": "Herstel na sportletsel",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Janke V.",
      "klacht": "Rugklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk de juiste behandeling gevonden. Ik kan weer normaal bewegen.",
      "toestemming": true
    },
    {
      "naam": "Pieter D.",
      "klacht": "Schouder",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Mijn schouder zat helemaal vast. Na een paar weken therapie kan ik weer werken zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Marieke S.",
      "klacht": "Nekklachten",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Chronische hoofdpijn door nekklachten. De behandeling heeft echt geholpen, ik ben zo blij.",
      "toestemming": true
    },
    {
      "naam": "Henk B.",
      "klacht": "Knieklachten",
      "plaats": "Heerenveen",
      "sterren": 4,
      "quote": "Kniepijn na hardlopen. De therapeut nam echt de tijd en ik kan weer trainen.",
      "toestemming": true
    },
    {
      "naam": "Sanne R.",
      "klacht": "Sportblessures",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Voetbalblessure aan mijn enkel. Professionele begeleiding en snel herstel. Top!",
      "toestemming": true
    },
    {
      "naam": "Tjeerd M.",
      "klacht": "Rugklachten",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Lagere rugpijn die maar niet overging. Nu weer pijnvrij dankzij de behandeling.",
      "toestemming": true
    },
    {
      "naam": "Els K.",
      "klacht": "Schouder",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Kon mijn arm niet meer omhoog tillen. Na behandeling weer volledig bewegingsvrijheid.",
      "toestemming": true
    },
    {
      "naam": "Gerrit J.",
      "klacht": "Nekklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Jarenlange nekklachten door bureau werk. Eindelijk de juiste aanpak gevonden.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt al weken pijn, maar het wordt alleen maar erger in plaats van beter.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd, maar niets lijkt echt te helpen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je kunt niet meer doen wat je leuk vindt en voelt je beperkt in je dagelijkse leven.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je wilt gewoon weer normaal kunnen bewegen zonder pijn of ongemak.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we dat. Daarom bieden wij alle specialisaties onder één dak, zodat je snel en effectief geholpen wordt door de juiste specialist.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Onze fysiotherapeuten analyseren je klacht en stellen een behandelplan op. Met gerichte oefeningen en technieken werken we aan herstel van functie en beweging.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Voor hardnekkige gewrichts- en spierklachten zetten we manuele therapie in. Door gerichte mobilisaties en manipulaties herstellen we de bewegelijkheid en verminderen we de pijn.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry Needling",
      "tekst": "Bij spierknopen en chronische pijn gebruiken we dry needling. Deze effectieve behandeling verlicht spierpijn en herstelt de spierbalans snel.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Manuele therapie, Echografie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Manueel therapeut",
      "specialisatie": "Parkinson, EPTE",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Manuele therapie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sjanne Postma",
      "functie": "Manueel therapeut",
      "specialisatie": "Dry needling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Oedeemtherapeut",
      "specialisatie": "Lymfe en oedeem",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Sport revalidatie",
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
      "vraag": "Heb ik een verwijzing nodig van de huisarts?",
      "antwoord": "Nee, bij Fysio Bakker kunt u zonder verwijzing terecht. U kunt direct een afspraak maken via de telefoon, WhatsApp of het contactformulier."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Het aantal behandelingen verschilt per persoon en klacht. Tijdens de intake bespreken we samen een behandelplan en geven we een inschatting van het aantal benodigde sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij Fysio Bakker streven we ernaar om u binnen 24 uur te helpen. Neem contact op en we plannen zo snel mogelijk een afspraak in."
    },
    {
      "vraag": "Word ik door dezelfde therapeut behandeld?",
      "antwoord": "Ja, voor continuïteit wordt u behandeld door dezelfde fysiotherapeut. Dit bevordert een persoonlijke aanpak en optimaal herstel."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €40 tot €50 zonder verzekering. We hebben contracten met alle zorgverzekeraars, dus vaak wordt fysiotherapie vergoed vanuit uw basisverzekering of aanvullende polis."
    }
  ],
  "stappenKop": "Onze behandelmogelijkheden",
  "stappenSub": "Alle specialisaties onder één dak voor de beste zorg",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ff5722",
    "donker": "#d84315",
    "licht": "#ffe8e0"
  }
} as const;

export type Praktijk = typeof praktijk;
