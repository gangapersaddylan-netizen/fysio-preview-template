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
  "telefoon": "058 203 83 10",
  "telefoonHref": "tel:+31582038310",
  "whatsapp": "https://wa.me/31582038310",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijf Bewegen",
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
      "sub": "Lage rugpijn, hernia, ischias",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Nek",
      "sub": "Nekpijn, whiplash, hoofdpijn",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, impingement, rotator cuff",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Knie",
      "sub": "Meniscus, kruisband, artrose",
      "slug": "knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Enkelblessures, overbelasting, herstel",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn, nekgerelateerd",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Linda",
      "klacht": "Rug",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na jaren last van mijn rug eindelijk weer zonder pijn kunnen bewegen. De aanpak was helder en resultaatgericht.",
      "toestemming": true
    },
    {
      "naam": "Tjeerd",
      "klacht": "Knie",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Mijn knieklachten waren hardnekkig, maar door de combinatie van therapie en begeleide oefeningen kan ik weer fietsen en wandelen.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Schouder",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Ik kon mijn arm nauwelijks optillen. Na de behandelingen kan ik weer gewoon mijn werk doen en sporten.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Nek",
      "plaats": "Heerenveen",
      "sterren": 4,
      "quote": "De nekpijn na mijn ongeluk leek niet weg te gaan. Hier hebben ze echt naar me geluisterd en een plan gemaakt dat werkte.",
      "toestemming": true
    },
    {
      "naam": "Annemarie",
      "klacht": "Hoofdpijn",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Jarenlang hoofdpijn gehad. Door de behandeling en oefeningen heb ik nu meer hoofdpijnvrije dagen dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Sjoerd",
      "klacht": "Sportblessure",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Na mijn enkelblessure dacht ik dat mijn voetbalseizoen voorbij was. Gelukkig kon ik sneller dan verwacht weer het veld op.",
      "toestemming": true
    },
    {
      "naam": "Grietje",
      "klacht": "Rug",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Ik had last van mijn rug bij het tillen van mijn kleinkinderen. Nu kan ik weer zorgeloos met ze spelen.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Knie",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "De behandeling was professioneel en het contact persoonlijk. Mijn knie voelt weer stabiel aan en ik kan weer zonder zorgen bewegen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je kunt niet meer doen wat je gewend was en dat frustreert enorm.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "De pijn bepaalt je dag en je bent bang dat het nooit meer overgaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd, maar niets lijkt echt te helpen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je wilt gewoon weer normaal kunnen bewegen, zonder pijn of beperkingen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we dat. We werken persoonsgericht en combineren verschillende specialisaties onder één dak om je zo snel mogelijk weer de bewegingsvrijheid te geven die je verdient.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Onze fysiotherapeuten analyseren je klacht grondig en stellen een behandelplan op. Door gerichte oefentherapie, manuele technieken en persoonlijke begeleiding werk je aan herstel en preventie.",
      "duur": "30-45 minuten per sessie",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Met manuele therapie behandelen we gewrichts- en spierklachten hands-on. Door mobilisaties en manipulaties herstellen we de functie van je gewrichten en verminderen we pijn effectief.",
      "duur": "30 minuten per sessie",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Echografie",
      "tekst": "Met echografisch onderzoek maken we direct beeld van spieren, pezen en gewrichten. Zo kunnen we precies zien wat er aan de hand is en je behandeling daarop afstemmen voor het beste resultaat.",
      "duur": "15-20 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826524/echo_k7otr1.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826524/echo_k7otr1.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Echografie, EPTE, Shockwave",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10273&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Manuele therapie, ParkinsonNet",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10276&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Rene Bosch",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Schoudernetwerk, Dry Needling",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10278&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Manuele therapie, Shockwave",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10267&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Fysiotherapeut",
      "specialisatie": "Oedeemtherapie, Fysio-Fitness",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10271&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportrevalidatie, Longaandoeningen",
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
      "vraag": "Heb ik een verwijzing van de huisarts nodig?",
      "antwoord": "Nee, je kunt direct bij ons terecht zonder verwijzing. Fysiotherapie is sinds 2006 vrij toegankelijk in Nederland. Je kunt zelf een afspraak maken via telefoon, WhatsApp of ons online formulier."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat is per persoon verschillend en hangt af van je klacht. Na de intake bespreken we een behandelplan met je. Gemiddeld zien we verbetering na 3 tot 6 sessies, maar dit kan korter of langer zijn."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kunnen we je binnen 24 uur helpen. We hebben verschillende locaties in Friesland en werken met flexibele openingstijden, zodat je snel geholpen wordt."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, continuïteit vinden we belangrijk. Je wordt behandeld door dezelfde fysiotherapeut, zodat deze je klacht goed kan volgen en de behandeling optimaal kan afstemmen."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen aanvullende verzekering heb?",
      "antwoord": "Zonder aanvullende verzekering betaal je circa €37,50 per behandeling van 30 minuten. De eerste intake duurt langer en kost €55. We adviseren altijd om je verzekering te checken, want veel verzekeraars vergoeden fysiotherapie (deels)."
    }
  ],
  "stappenKop": "Ons behandelaanbod",
  "stappenSub": "Alle specialisaties onder één dak voor jouw snelle herstel en blijvende bewegingsvrijheid.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#FF5722",
    "donker": "#D84315",
    "licht": "#FFE0D9"
  }
} as const;

export type Praktijk = typeof praktijk;
