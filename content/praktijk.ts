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
  "naam": "Fysiotherapie Kilic",
  "plaats": "Rotterdam",
  "telefoon": "06 27 92 06 12",
  "telefoonHref": "tel:+31627920612",
  "whatsapp": "https://wa.me/31627920612",
  "boekUrl": "https://fysiokilic.nl/afspraak",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Pijnvrij Bewegen",
  "trust": {
    "googleScore": 5,
    "aantalReviews": 70,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugpijn",
      "sub": "Chronische of acute klachten in onderrug en bovenrug",
      "slug": "rugpijn",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Schouderpijn en bewegingsbeperking",
      "slug": "schouder",
      "icoon": "PersonStanding"
    },
    {
      "label": "Kaakklachten",
      "sub": "TMD en kaakgewrichtsproblemen",
      "slug": "kaakklachten",
      "icoon": "Brain"
    },
    {
      "label": "Sportblessures",
      "sub": "Herstel na blessures en preventie",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Nekklachten",
      "sub": "Stijve nek en spanningshoofdpijn",
      "slug": "nekklachten",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Iris Weijer",
      "klacht": "Nekklachten",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Mijn man had acute nekpijn en kon bijna niet bewegen. Direct geholpen en na dry needling liep hij pijnvrij de kliniek uit. Echt een aanrader bij acute klachten.",
      "toestemming": true
    },
    {
      "naam": "Lianne van Gameren",
      "klacht": "Rugpijn",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Dry needling heeft ervoor gezorgd dat ik geen onderrugpijn meer heb. Ik kan nu weer genieten van sporten elke week.",
      "toestemming": true
    },
    {
      "naam": "Erik Bever",
      "klacht": "Sportblessures",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Een kundige therapeut die echt de tijd neemt en goed luistert. Hij heeft mij snel geholpen bij mijn langdurige blessures. Ik voel me weer als vanouds.",
      "toestemming": true
    },
    {
      "naam": "Michael van Beest",
      "klacht": "Schouder",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Via dry needling in 4 sessies voor 80% verlost van vijf maanden schouderpijn. Er werd goed geluisterd en de juiste diagnose gesteld.",
      "toestemming": true
    },
    {
      "naam": "Sandra de Vries",
      "klacht": "Rugpijn",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Na jaren rondlopen met rugklachten eindelijk de juiste hulp gevonden. De behandeling werkt echt en ik voel me een stuk fitter.",
      "toestemming": true
    },
    {
      "naam": "Tom Jansen",
      "klacht": "Sportblessures",
      "plaats": "Capelle aan den IJssel",
      "sterren": 5,
      "quote": "Professionele begeleiding na mijn knieblessure. Dankzij het gerichte behandelplan kon ik sneller dan verwacht weer aan de slag.",
      "toestemming": true
    },
    {
      "naam": "Marloes Bakker",
      "klacht": "Kaakklachten",
      "plaats": "Schiedam",
      "sterren": 5,
      "quote": "Jarenlang last van kaakpijn en hoofdpijn. Na een paar behandelingen merk ik echt verschil. Fijn dat er echt naar mij geluisterd wordt.",
      "toestemming": true
    },
    {
      "naam": "Kevin Mulder",
      "klacht": "Nekklachten",
      "plaats": "Rotterdam",
      "sterren": 4,
      "quote": "Goede uitleg over mijn klachten en een duidelijk plan. Mijn nekpijn is al flink verminderd na drie sessies.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je weet dat je vroeger gewoon kon sporten, bewegen zoals je wilde, maar nu staat dat deel van je leven stil door de pijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al zo lang uitgesteld om hulp te zoeken, omdat je niet weet waar je terecht kunt en of je wel serieus genomen wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Bij elke afspraak ergens anders weer een nieuw gezicht, en telkens moet je je hele verhaal opnieuw vertellen zonder echte vooruitgang.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar de pijn vandaan komt en wat jouw lichaam nodig heeft.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapie Kilic krijg je een vaste therapeut die echt de tijd neemt om naar je te luisteren en de oorzaak van je klachten te onderzoeken. Wij leggen duidelijk uit wat er aan de hand is en werken samen met jou aan een persoonlijk behandelplan dat past bij jouw situatie.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Dry Needling voor diepere spieren",
      "tekst": "Met zeer dunne naalden behandelen we triggerpunten in de spier die niet met gewone massage bereikt kunnen worden. Dit zorgt voor directe pijnverlichting en sneller herstel.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    },
    {
      "titel": "Hands-on fysiotherapie",
      "tekst": "Actieve behandeling waarbij we met gerichte oefeningen en manuele technieken werken aan het herstel van je bewegingsvrijheid en kracht. Persoonlijk en effectief.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele therapie voor gewrichten",
      "tekst": "Gespecialiseerde gewrichtsbehandelingen om de mobiliteit te herstellen en bewegingsbeperkingen op te heffen. Ideaal bij nek-, rug- en gewrichtsklachten.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    }
  ],
  "team": [
    {
      "naam": "Murat Kilic",
      "functie": "Fysiotherapeut",
      "specialisatie": "Dry Needling Specialist",
      "foto": "https://fysiokilic.nl/images/murat-kilic.webp",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysiokilic.nl/images/murat-kilic.webp",
    "extraFotos": [
      "https://fysiokilic.nl/images/fotos/_MG_5133.webp",
      "https://fysiokilic.nl/images/fotos/_MG_5213.webp",
      "https://fysiokilic.nl/images/IMG_0928.webp"
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
      "vraag": "Heb ik een verwijzing nodig van mijn huisarts?",
      "antwoord": "Nee, een verwijzing is niet nodig. U kunt direct een afspraak maken bij Fysiotherapie Kilic. Fysiotherapie wordt volledig vergoed vanuit uw basisverzekering, vaak na het eigen risico."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en klacht. Gemiddeld merken onze cliënten al na 1 tot 4 behandelingen een groot verschil. Tijdens het eerste consult bespreken we een realistisch behandelplan."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij acute klachten proberen we u vaak nog dezelfde dag of binnen 24 uur te helpen. Voor reguliere afspraken kunt u meestal binnen 1 tot 2 dagen terecht."
    },
    {
      "vraag": "Krijg ik altijd dezelfde fysiotherapeut?",
      "antwoord": "Ja, bij Fysiotherapie Kilic werken we met vaste therapeut-cliënt relaties. Zo kent uw therapeut uw situatie en kunnen we optimaal samenwerken aan uw herstel."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €45 tot €55, afhankelijk van de duur en het type behandeling. Dry needling of manuele therapie kunnen iets meer kosten. We adviseren altijd om uw verzekering te raadplegen."
    }
  ],
  "stappenKop": "Onze specialistische behandelingen",
  "stappenSub": "Effectieve technieken voor snel en blijvend herstel van uw klachten.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#3b82f6",
    "donker": "#1e40af",
    "licht": "#eff6ff"
  }
} as const;

export type Praktijk = typeof praktijk;
