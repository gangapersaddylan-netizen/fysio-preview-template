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
  "naam": "LEEF!",
  "plaats": "Zaandam",
  "telefoon": "075 612 3456",
  "telefoonHref": "tel:+31756123456",
  "whatsapp": "https://wa.me/31756123456",
  "boekUrl": "https://leef.nu/afspraak_maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Ontdek Kracht",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 312,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug & Nek",
      "sub": "Rugpijn, nekklachten en chronische spanning",
      "slug": "rug-en-nek",
      "icoon": "Bone"
    },
    {
      "label": "Oncologie",
      "sub": "Begeleiding tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Sport",
      "sub": "Sportblessures en revalidatie",
      "slug": "sport",
      "icoon": "Activity"
    },
    {
      "label": "Oedeem",
      "sub": "Lymfeoedeem en vochtophoping",
      "slug": "oedeem",
      "icoon": "PersonStanding"
    },
    {
      "label": "Conditie",
      "sub": "Opbouw van kracht en uithoudingsvermogen",
      "slug": "conditie",
      "icoon": "Dumbbell"
    },
    {
      "label": "Arbeidsrevalidatie",
      "sub": "Terugkeer naar werk na langdurig verzuim",
      "slug": "arbeidsrevalidatie",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Na jaren rondlopen met nekklachten eindelijk iemand gevonden die echt naar me luistert. Ik kan weer slapen zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Sport",
      "plaats": "Westzaan",
      "sterren": 5,
      "quote": "Mijn knieblessure leek het einde van mijn hardloopcarrière. Nu loop ik weer wedstrijden dankzij het gerichte plan.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Conditie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik durfde niet meer te sporten na mijn hartoperatie. Het team heeft me stap voor stap weer zelfvertrouwen gegeven.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Arbeidsrevalidatie",
      "plaats": "Krommenie",
      "sterren": 4,
      "quote": "Dacht dat ik nooit meer zou kunnen werken na mijn burn-out. Ben nu weer fulltime aan de slag.",
      "toestemming": true
    },
    {
      "naam": "Fatima",
      "klacht": "Oedeem",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "De zwelling in mijn arm na chemo was zo beperkend. Nu heb ik eindelijk weer bewegingsvrijheid.",
      "toestemming": true
    },
    {
      "naam": "Tom",
      "klacht": "Rug & Nek",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "Jarenlange rugpijn verdween na een behandeling die écht gericht was op de oorzaak, niet alleen de symptomen.",
      "toestemming": true
    },
    {
      "naam": "Ingrid",
      "klacht": "Oncologie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "De begeleiding tijdens mijn chemokuren was onmisbaar. Ik voelde me gehoord en begrepen in een moeilijke tijd.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Sport",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "Mijn schouder deed maanden pijn bij elke training. Nu kan ik weer volledig sporten zonder beperkingen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je favoriete sport ligt al maanden stil en je durft niet meer te beginnen uit angst het alleen maar erger te maken.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt zo lang gewacht met hulp zoeken dat je niet meer weet waar je moet beginnen, en je staat er helemaal alleen voor.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer een nieuw gezicht, elke keer opnieuw je verhaal vertellen zonder dat iemand je echt kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt een lijst met oefeningen mee, maar niemand heeft écht uitgezocht waar de pijn vandaan komt of waarom het steeds terugkomt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! werken we anders: we nemen de tijd om jouw verhaal te horen, zoeken samen naar de werkelijke oorzaak en begeleiden je persoonlijk van klacht naar kracht.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking en intake",
      "tekst": "We beginnen met een uitgebreid gesprek waarin we jouw klachten, medische voorgeschiedenis en doelen bespreken. Vervolgens doen we onderzoek om de oorzaak te achterhalen.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we samen een behandelplan op dat past bij jouw klachten en levensstijl. Je krijgt heldere uitleg over wat we gaan doen en waarom.",
      "duur": "Opgesteld binnen 48 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We begeleiden je met hands-on behandelingen, begeleide oefeningen en persoonlijk advies. Je voortgang wordt continu gemonitord tot je jouw doel bereikt.",
      "duur": "4-12 weken gemiddeld",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/13-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/14-1.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/Ontwerp-zonder-titel-5.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/3.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/Ontwerp-zonder-titel-6.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://leef.nu/wp-content/uploads/2024/03/3-1.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://leef.nu/wp-content/uploads/2025/06/IMG_7119-scaled.jpeg"
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
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Je mag zelf kiezen waar je behandeld wilt worden. Voor manuele therapie heb je wel een verwijzing van de huisarts nodig."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat is per persoon verschillend en hangt af van je klacht. Gemiddeld hebben mensen 6 tot 10 behandelingen nodig, maar na de intake geven we je een duidelijke inschatting voor jouw situatie."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om je binnen 48 uur te kunnen helpen. Bij spoedgevallen proberen we vaak nog dezelfde dag een plekje te vinden."
    },
    {
      "vraag": "Zie ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij LEEF! word je behandeld door één vaste therapeut die jouw verhaal kent en je van begin tot eind begeleidt. Zo bouwen we een persoonlijke relatie op."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost gemiddeld €45 tot €55 per sessie,afhankelijk van de behandelvorm. We adviseren altijd even te checken wat jouw zorgverzekeraar vergoedt."
    }
  ],
  "stappenKop": "Jouw traject naar herstel",
  "stappenSub": "Van eerste afspraak tot volledige kracht: zo werken we samen aan jouw herstel.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a4d233",
    "donker": "#7fa826",
    "licht": "#f4f9e8"
  }
} as const;

export type Praktijk = typeof praktijk;
