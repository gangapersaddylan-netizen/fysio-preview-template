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
  "plaats": "Amsterdam",
  "telefoon": "020 205 35 35",
  "telefoonHref": "tel:+31202053535",
  "whatsapp": "https://wa.me/31202053535",
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
      "sub": "Pijn bij lopen of bewegen door artrose",
      "slug": "heup",
      "icoon": "Bone"
    },
    {
      "label": "Knie",
      "sub": "Artrose en bewegingsbeperking",
      "slug": "knie",
      "icoon": "Activity"
    },
    {
      "label": "Hand & Pols",
      "sub": "Carpaal tunnel, triggervinger en tintelingen",
      "slug": "hand-pols",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Bewegingsbeperking en pijn bij gebruik",
      "slug": "schouder",
      "icoon": "Dumbbell"
    },
    {
      "label": "Oog",
      "sub": "Staar, hoornvlies en laserbehandelingen",
      "slug": "oog",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra V.",
      "klacht": "Heup",
      "plaats": "Amstelveen",
      "sterren": 5,
      "quote": "Binnen drie weken geholpen na jarenlang wachten. Ik loop nu weer wandelingen zonder pijn en kan weer genieten van mijn kleinkinderen.",
      "toestemming": true
    },
    {
      "naam": "Mark de J.",
      "klacht": "Knie",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "De uitleg was helder en ik voelde me serieus genomen. De operatie verliep soepel en ik kon sneller dan verwacht weer aan het werk.",
      "toestemming": true
    },
    {
      "naam": "Linda S.",
      "klacht": "Hand & Pols",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Na maanden tintelingen in mijn vingers eindelijk verlossing. Ik kan weer typen zonder problemen.",
      "toestemming": true
    },
    {
      "naam": "Rob H.",
      "klacht": "Schouder",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "Ik was bang dat ik nooit meer zou kunnen sporten, maar nu doe ik alles wat ik deed voor de klachten. Dankbaar voor de snelle hulp.",
      "toestemming": true
    },
    {
      "naam": "Marieke B.",
      "klacht": "Knie",
      "plaats": "Amsterdam",
      "sterren": 4,
      "quote": "De kliniek was modern en overzichtelijk. Iedereen was vriendelijk en de communicatie was duidelijk.",
      "toestemming": true
    },
    {
      "naam": "Peter van D.",
      "klacht": "Heup",
      "plaats": "Rozendaal",
      "sterren": 5,
      "quote": "Ik stond versteld hoe snel ik weer kon lopen. De nazorg was ook uitstekend.",
      "toestemming": true
    },
    {
      "naam": "Esther M.",
      "klacht": "Hand & Pols",
      "plaats": "Enschede",
      "sterren": 5,
      "quote": "Eindelijk geen pijn meer bij het schrijven. Ik had dit eerder moeten doen.",
      "toestemming": true
    },
    {
      "naam": "Jan K.",
      "klacht": "Knie",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "De kortste wachttijd die ik ooit heb meegemaakt in de zorg. Professioneel en efficiënt.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan in de kast, die wandeling met vrienden laat je weer afzeggen en dingen die vanzelfsprekend waren, zijn nu te pijnlijk.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je weet dat je geholpen moet worden, maar waar kun je terecht en hoe lang moet je wachten voordat er eindelijk iemand naar je kijkt?",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Telkens een ander gezicht, steeds opnieuw uitleggen wat er aan de hand is en het gevoel dat niemand de tijd neemt om echt te begrijpen wat jouw verhaal is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand legt uit waar de klacht vandaan komt of waarom dit de juiste aanpak voor jou zou zijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Xpert Clinics nemen we de tijd om uit te zoeken wat er echt aan de hand is en leggen we helder uit wat de beste oplossing voor jou is.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We beginnen met een uitgebreid intakegesprek waarin we precies uitzoeken wat de oorzaak van je klachten is. Je krijgt duidelijke uitleg over je situatie.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van onze bevindingen stellen we een behandelplan op dat past bij jouw situatie. We bespreken samen de vervolgstappen en beantwoorden al je vragen.",
      "duur": "Binnen 1 week",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en herstel",
      "tekst": "We voeren de behandeling uit met aandacht voor jouw comfort en herstel. Je wordt begeleid tot je weer kunt doen wat je graag wilt.",
      "duur": "Afhankelijk van behandeling",
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
    "groepsfoto": "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D1280%26quality%3D100%26format%3Dwebp%26mode%3Dcrop&w=3840&q=100"
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
      "antwoord": "Voor orthopedie heb je een verwijsbrief van je huisarts of specialist nodig. Voor hand- en polszorg kun je zonder verwijzing bij ons terecht."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Tijdens het intakegesprek bespreken we een realistisch behandelplan met het verwachte aantal afspraken."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om je binnen 2 tot 5 dagen te kunnen ontvangen voor een eerste consult. Voor operaties hangt de wachttijd af van de urgentie en beschikbaarheid."
    },
    {
      "vraag": "Zie ik steeds dezelfde behandelaar?",
      "antwoord": "Ja, je wordt gedurende het hele traject door dezelfde specialist behandeld, zodat er continuïteit is en je je verhaal niet steeds opnieuw hoeft te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per behandeling. Neem contact met ons op voor een prijsindicatie. Veel behandelingen worden volledig vergoed vanuit de basisverzekering."
    }
  ],
  "stappenKop": "Jouw traject naar herstel",
  "stappenSub": "Van eerste afspraak tot het moment dat je weer kunt doen wat je graag wilt.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#0ea5e9",
    "donker": "#0369a1",
    "licht": "#e0f2fe"
  }
} as const;

export type Praktijk = typeof praktijk;
