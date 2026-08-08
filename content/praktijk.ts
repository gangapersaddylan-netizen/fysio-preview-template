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
  "heroTitel": "Gewoon Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 287,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug",
      "sub": "Lage rugpijn, hernia, ischias en andere rugklachten",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Nek",
      "sub": "Nekpijn, whiplash en stijve nek",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, impingement en schouderpijn",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Knie",
      "sub": "Meniscus, kruisband en kniepijn",
      "slug": "knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Blessures door sport en overbelasting",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn en nekgerelateerde hoofdpijn",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Jan de Vries",
      "klacht": "Rug",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk weer verlost. De combinatie van manuele therapie en oefeningen heeft mij enorm geholpen.",
      "toestemming": true
    },
    {
      "naam": "Marieke Jansen",
      "klacht": "Schouder",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek niet meer weg te gaan. Dankzij de gerichte behandeling kan ik nu weer normaal bewegen.",
      "toestemming": true
    },
    {
      "naam": "Pieter Posthuma",
      "klacht": "Knie",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Ik kon niet meer hardlopen door kniepijn. Na zes weken behandeling loop ik weer mijn trainingsrondjes.",
      "toestemming": true
    },
    {
      "naam": "Sanne Visser",
      "klacht": "Hoofdpijn",
      "plaats": "Burgum",
      "sterren": 4,
      "quote": "Jarenlang last van spanningshoofdpijn gehad. Door de nekbehandeling zijn de klachten sterk verminderd.",
      "toestemming": true
    },
    {
      "naam": "Henk Boersma",
      "klacht": "Sportblessure",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Na een achillespeesblessure snel weer terug kunnen sporten. De begeleiding was top van begin tot eind.",
      "toestemming": true
    },
    {
      "naam": "Linda de Boer",
      "klacht": "Nek",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Chronische nekpijn maakte mijn werk onmogelijk. Nu zit ik weer comfortabel achter mijn bureau.",
      "toestemming": true
    },
    {
      "naam": "Tom Dijkstra",
      "klacht": "Rug",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Ischias klachten werkelijk weggewerkt met dry needling en manuele therapie. Ik ben weer de oude.",
      "toestemming": true
    },
    {
      "naam": "Anja Mulder",
      "klacht": "Schouder",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Kon mijn arm nauwelijks optillen. De behandeling heeft mij mijn bewegingsvrijheid teruggegeven.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je rugpijn beperkt je in alles wat je graag doet en je bent bang dat het nooit meer overgaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Elke beweging doet pijn en je weet niet meer hoe je je lichaam moet belasten zonder klachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd maar niets lijkt echt te helpen en dat frustreert enorm.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Wachten op behandeling duurt veel te lang terwijl je nu hulp nodig hebt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker helpen we je binnen 24 uur met een persoonlijke behandeling. Onze specialisten combineren verschillende technieken om jouw klacht effectief aan te pakken, zodat je snel weer kunt doen waar je van houdt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Onze fysiotherapeuten analyseren je klacht en stellen een behandelplan op. Met hands-on technieken en gerichte oefeningen werken we aan jouw herstel en voorkomen we terugkeer van de klachten.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Voor hardnekkige gewrichts- en spierklachten zetten we manuele therapie in. Door mobilisaties en manipulaties herstellen we de bewegelijkheid en verminderen we pijn direct.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry Needling",
      "tekst": "Bij diepe spierpijn en triggerpunten gebruiken we dry needling. Deze techniek verlicht pijn effectief en versnelt het herstel van verharde spieren en peesblessures.",
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
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10273&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Parkinson en neurologie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10276&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Manuele therapie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10278&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Sjanne Postma",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Dry needling specialist",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10267&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Sport en revalidatie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10271&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Fysiotherapeut",
      "specialisatie": "Oedeemtherapie en thuiszorg",
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, je hebt geen verwijzing nodig. Je kunt direct contact met ons opnemen voor een afspraak. Voor sommige aanvullende verzekeringen kan een verwijzing wel verplicht zijn, check dit bij je verzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en klacht. Na het eerste consult geven we een inschatting van het aantal benodigde behandelingen. Gemiddeld zijn dat 6 tot 8 sessies, maar dit kan korter of langer zijn."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Bij Fysio Bakker kun je binnen 24 uur terecht voor een eerste behandeling. We vinden het belangrijk dat je snel geholpen wordt, daarom houden we altijd spoedplekken vrij."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, je wordt behandeld door één vaste therapeut die gespecialiseerd is in jouw klacht. Zo bouwen we een behandelrelatie op en kunnen we jouw voortgang optimaal volgen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost €42,50. Een intake of uitgebreide behandeling kost €52,50. Manuele therapie kost €35,- per sessie. De meeste zorgverzekeringen vergoeden fysiotherapie geheel of gedeeltelijk."
    }
  ],
  "stappenKop": "Ons behandelaanbod",
  "stappenSub": "Verschillende specialisaties onder één dak voor de beste zorg",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#FF6600",
    "donker": "#CC5200",
    "licht": "#FFF0E6"
  }
} as const;

export type Praktijk = typeof praktijk;
