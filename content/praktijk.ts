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
  "telefoon": "075 616 5000",
  "telefoonHref": "tel:+31756165000",
  "whatsapp": "https://wa.me/31756165000",
  "boekUrl": "https://leef.nu/afspraak_maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Ontdek Kracht",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 215,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug & Nek",
      "sub": "Blijvende rugpijn of nekklachten die je belemmeren",
      "slug": "rug-nek",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Blessures die je weghouden van je sport",
      "slug": "sportblessure",
      "icoon": "Activity"
    },
    {
      "label": "Kanker",
      "sub": "Oncologische begeleiding tijdens en na behandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Gewicht",
      "sub": "Overgewicht en voedingsgerelateerde klachten",
      "slug": "gewicht",
      "icoon": "Dumbbell"
    },
    {
      "label": "Revalidatie",
      "sub": "Herstel na operatie of langdurig verzuim",
      "slug": "revalidatie",
      "icoon": "PersonStanding"
    },
    {
      "label": "Houding",
      "sub": "Chronische houdingsklachten en bewegingspatronen",
      "slug": "houding",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Marco",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk de oorzaak gevonden. Het team neemt echt de tijd voor je en ik kan weer normaal functioneren.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Sportblessure",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "Door mijn knieblessure kon ik niet meer hardlopen. Nu loop ik weer wedstrijden en voel ik me sterker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Petra",
      "klacht": "Kanker",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "De oncologische begeleiding heeft me door een zware periode geholpen. Ik voel me nu weer fit genoeg om te bewegen en te genieten.",
      "toestemming": true
    },
    {
      "naam": "Hassan",
      "klacht": "Gewicht",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Met de diëtist ben ik 18 kilo afgevallen. Ik heb meer energie en mijn bloedwaardes zijn geweldig verbeterd.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Revalidatie",
      "plaats": "Krommenie",
      "sterren": 4,
      "quote": "Na mijn heupoperatie weer volledig mobiel. De begeleiding was persoonlijk en het resultaat overtrof mijn verwachtingen.",
      "toestemming": true
    },
    {
      "naam": "Tim",
      "klacht": "Houding",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Jarenlang last van nekpijn door mijn bureauwerk. Nu weet ik hoe ik goed moet zitten en de pijn is weg.",
      "toestemming": true
    },
    {
      "naam": "Anouk",
      "klacht": "Sportblessure",
      "plaats": "Wormer",
      "sterren": 5,
      "quote": "Mijn schouderblessure leek chronisch, maar na de behandeling kan ik weer volleyballen zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Rug & Nek",
      "plaats": "Koog aan de Zaan",
      "sterren": 5,
      "quote": "Eindelijk iemand die echt naar me luisterde. De manuele therapie heeft mijn rugklachten verholpen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, omdat bewegen te pijnlijk is geworden en je niet meer kunt doen wat je leuk vindt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al zo lang gewacht met hulp zoeken, en nu weet je niet waar je terecht kunt of wie je echt kan helpen met jouw klacht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer een ander gezicht in de praktijk, waardoor je steeds opnieuw je verhaal moet vertellen en niemand je echt lijkt te kennen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt echt uit waar de pijn vandaan komt en wat de onderliggende oorzaak is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! pakken we het anders aan: we nemen de tijd om jouw verhaal te horen, onderzoeken de echte oorzaak van je klacht en stellen samen met jou een behandelplan op dat echt werkt. Zo kom je weer verder.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en onderzoek",
      "tekst": "We luisteren naar jouw verhaal en onderzoeken grondig wat de oorzaak van je klacht is. Samen bepalen we wat je wilt bereiken.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we een behandelplan op maat samen. Dit kan bestaan uit fysiotherapie, diëtetiek of een combinatie van disciplines.",
      "duur": "Week 1",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We begeleiden je stap voor stap naar je doel. Je werkt met dezelfde professional, zodat je vooruitgang optimaal wordt gemonitord.",
      "duur": "4-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_6_hwafmn.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg"
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
      "antwoord": "Nee, je hebt geen verwijzing nodig om bij LEEF! terecht te kunnen. Je kunt direct een afspraak maken met een van onze therapeuten."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Na de intake bespreken we samen een behandelplan en geven we een indicatie van het aantal benodigde sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij LEEF! kun je meestal binnen 48 uur terecht voor een eerste afspraak. We bieden ook avond- en weekendafspraken aan."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij LEEF! word je behandeld door dezelfde therapeut gedurende je hele traject. Zo kent deze professional jouw verhaal en vooruitgang optimaal."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per behandeling. Een intakegesprek kost circa €45 en vervolgbehandelingen circa €38. Neem voor exacte prijzen contact met ons op."
    }
  ],
  "stappenKop": "Jouw weg naar herstel in drie stappen",
  "stappenSub": "Van eerste afspraak tot het behalen van jouw persoonlijke doelen.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a4d65e",
    "donker": "#7fb342",
    "licht": "#f0f8e6"
  }
} as const;

export type Praktijk = typeof praktijk;
