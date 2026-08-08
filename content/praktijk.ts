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
  "plaats": "Damwoude",
  "telefoon": "0511 422 944",
  "telefoonHref": "tel:+31511422944",
  "whatsapp": "https://wa.me/31511422944",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijf Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 247,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Pijnklachten, frozen shoulder en sportblessures",
      "slug": "schouderklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rugklachten",
      "sub": "Lage rugpijn, hernia en nekklachten",
      "slug": "rugklachten",
      "icoon": "Bone"
    },
    {
      "label": "Knie",
      "sub": "Kruisband, meniscus en overbelasting",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessure",
      "sub": "Sneller terug naar topsport en recreatie",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanning, migraine en nekgerelateerde klachten",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Jan Dijkstra",
      "klacht": "Rugklachten",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk de juiste hulp gevonden. Matthijs heeft me goed geholpen met oefeningen en uitleg. Ik kan weer gewoon werken.",
      "toestemming": true
    },
    {
      "naam": "Marieke Visser",
      "klacht": "Schouder",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek niet meer over te gaan. Dankzij de behandelingen bij Fysio Bakker kan ik weer normaal bewegen. Super tevreden!",
      "toestemming": true
    },
    {
      "naam": "Pieter de Vries",
      "klacht": "Knie",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Snelle afspraak na mijn kruisbandoperatie. De revalidatie verliep soepel en ik sta alweer op het voetbalveld.",
      "toestemming": true
    },
    {
      "naam": "Anne Boersma",
      "klacht": "Hoofdpijn",
      "plaats": "Veenwouden",
      "sterren": 4,
      "quote": "Jarenlang last van hoofdpijn gehad. De manuele therapie en oefeningen hebben echt geholpen om de frequentie te verminderen.",
      "toestemming": true
    },
    {
      "naam": "Henk Jansen",
      "klacht": "Sportblessure",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Als hardloper had ik een kuitblessure. Rene heeft me uitstekend begeleid. Goede uitleg en persoonlijke aandacht.",
      "toestemming": true
    },
    {
      "naam": "Sjoukje Mulder",
      "klacht": "Rugklachten",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Professionele aanpak en fijne behandelaars. Mijn nekklachten zijn binnen een paar weken enorm verminderd. Aanrader!",
      "toestemming": true
    },
    {
      "naam": "Tjeerd Hoekstra",
      "klacht": "Knie",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Binnen 24 uur een afspraak kunnen maken. De behandeling was effectief en ik kreeg bruikbare adviezen voor thuis.",
      "toestemming": true
    },
    {
      "naam": "Grietje Bakker",
      "klacht": "Schouder",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Fijne praktijk met ervaren therapeuten. Mijn schouderklachten zijn verholpen en ik kan weer volop genieten van tuinieren.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je wilt gewoon weer normaal kunnen bewegen, maar de pijn houdt je tegen in je dagelijkse activiteiten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Wachten op behandeling duurt vaak te lang, terwijl elke dag telt om weer fit te worden.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd, maar weet niet meer waar je de oplossing moet zoeken.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "De onzekerheid over wanneer je weer kunt sporten of werken vreet aan je.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker krijg je binnen 24 uur een afspraak met een specialist die jouw klacht écht begrijpt. Met persoonlijke aandacht en moderne behandelmethoden werken we samen aan jouw herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Onze fysiotherapeuten stellen een gedegen diagnose en beginnen met hands-on behandeling. Je krijgt een persoonlijk oefenprogramma om thuis mee verder te gaan.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Voor hardnekkige gewrichts- en nekklachten zetten we manuele therapie in. Deze gespecialiseerde techniek herstelt de mobiliteit en vermindert pijn effectief.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry Needling",
      "tekst": "Bij chronische spierpijn en triggerpunten biedt dry needling verlichting. Deze gerichte behandeling zorgt voor snelle ontspanning van verharde spieren.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Laura Hendriks",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Sportblessures en revalidatie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10273&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Thomas van Dam",
      "functie": "Manueel therapeut",
      "specialisatie": "Nekklachten en hoofdpijn",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10276&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Verhoeven",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Knie- en schouderklachten",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10278&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Daan Kuipers",
      "functie": "Fysiotherapeut",
      "specialisatie": "Rugklachten en dry needling",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10267&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Emma de Jong",
      "functie": "Oedeemtherapeut",
      "specialisatie": "Lymfedrainage en oedeem",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10271&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Bram Schouten",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Manuele therapie en echografie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10348&max=730",
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
      "antwoord": "Nee, je kunt direct bij ons terecht zonder verwijzing. Fysiotherapie is sinds 2006 vrij toegankelijk in Nederland. Je kunt zelf een afspraak maken via telefoon, WhatsApp of ons online formulier."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Na de intake kunnen we een inschatting maken. Veel klachten zijn binnen 3 tot 6 behandelingen verholpen, maar chronische klachten kunnen langer duren. We evalueren regelmatig de voortgang."
    },
    {
      "vraag": "Hoe lang moet ik wachten op een afspraak?",
      "antwoord": "Bij Fysio Bakker streven we ernaar om je binnen 24 uur te helpen. We hebben 8 locaties in Friesland, waardoor we flexibel zijn in het inplannen van afspraken op een moment dat jou uitkomt."
    },
    {
      "vraag": "Kan ik bij dezelfde therapeut blijven?",
      "antwoord": "Ja, continuïteit vinden wij belangrijk. Je krijgt een vaste therapeut die jouw behandeltraject begeleidt. Mocht je therapeut er een keer niet zijn, dan wordt de behandeling overgenomen door een collega die volledig op de hoogte is."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost €37,50 per sessie. Manuele therapie kost €40,- per behandeling. Specialistische behandelingen zoals echografie of dry needling kunnen iets afwijken. We hebben contracten met alle zorgverzekeraars."
    }
  ],
  "stappenKop": "Ons behandelaanbod",
  "stappenSub": "Met moderne technieken en specialisaties bieden wij de juiste zorg voor jouw klacht",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ff6b35",
    "donker": "#cc4419",
    "licht": "#fff0eb"
  }
} as const;

export type Praktijk = typeof praktijk;
