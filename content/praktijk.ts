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
  "telefoon": "075 617 2000",
  "telefoonHref": "tel:+31756172000",
  "whatsapp": "https://wa.me/31756172000",
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
      "label": "Fysiotherapie",
      "sub": "Herstel na blessures, chronische pijn en mobiliteit",
      "slug": "fysiotherapie",
      "icoon": "Activity"
    },
    {
      "label": "Manuele Therapie",
      "sub": "Gewrichts- en spierklachten via gerichte technieken",
      "slug": "manuele-therapie",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessures",
      "sub": "Optimale begeleiding voor sporters en actieve mensen",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Oncologie",
      "sub": "Ondersteuning tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Arbeidsrevalidatie",
      "sub": "Terugkeer naar werk na langdurig verzuim",
      "slug": "arbeidsrevalidatie",
      "icoon": "PersonStanding"
    },
    {
      "label": "Oefentherapie",
      "sub": "Bewustwording en houding via Mensendieck",
      "slug": "oefentherapie",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik kwam met rugklachten en werd echt gehoord. Na een paar weken voelde ik al verschil. Mijn therapeut nam de tijd om uit te leggen wat er speelde.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Manuele Therapie",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "Jarenlang last van mijn nek gehad. Bij LEEF! eindelijk de juiste behandeling gekregen. Ik kan weer zonder hoofdpijn door de dag.",
      "toestemming": true
    },
    {
      "naam": "Ingrid",
      "klacht": "Oncologie",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "De begeleiding tijdens mijn herstel na chemo was onmisbaar. Ik voelde me begrepen en goed geholpen om mijn kracht weer op te bouwen.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Sportblessures",
      "plaats": "Zaandam",
      "sterren": 4,
      "quote": "Knieblessure opgelopen tijdens het voetballen. Nu sta ik weer op het veld, sterker dan voorheen.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Arbeidsrevalidatie",
      "plaats": "Krommenie",
      "sterren": 5,
      "quote": "Door de begeleiding bij LEEF! ben ik stapsgewijs teruggekeerd naar mijn werk. Ze keken naar wat ik wel kon, niet alleen naar mijn beperkingen.",
      "toestemming": true
    },
    {
      "naam": "Rob",
      "klacht": "Oefentherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Mensendieck heeft mij bewust gemaakt van mijn houding. Ik heb nu minder spanningsklachten en ga met meer plezier door het leven.",
      "toestemming": true
    },
    {
      "naam": "Joyce",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandijk",
      "sterren": 5,
      "quote": "Persoonlijke aandacht en een plan dat echt bij mij paste. Ik ben blij dat ik hier terecht ben gekomen.",
      "toestemming": true
    },
    {
      "naam": "Dennis",
      "klacht": "Manuele Therapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Eindelijk iemand die uitlegde waarom ik steeds terugkerende schouderklachten had. De behandeling werkte direct.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast omdat bewegen te veel pijn doet, en je mist dat gevoel van vrijheid.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt die afspraak steeds uit omdat je niet weet waar je terecht kunt en bang bent dat het toch niets oplevert.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een ander gezicht in de praktijk, waardoor je je verhaal keer op keer opnieuw moet vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt onderzoekt waar de oorzaak van je klacht ligt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! werken we anders: we nemen de tijd om jouw verhaal te horen, zoeken de oorzaak op en maken een behandelplan dat echt bij jou past. Samen ontdekken we jouw kracht.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We luisteren naar je verhaal en onderzoeken grondig wat de oorzaak is van je klachten. Je krijgt direct duidelijkheid over wat er speelt.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van je klacht en doelen stellen we samen een plan op. Dit kan bestaan uit fysiotherapie, training of een combinatie van specialisaties.",
      "duur": "Binnen 48 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je werkt met vaste professionals die je begeleiden naar je doel. We evalueren regelmatig en sturen bij waar nodig, zodat je blijvend resultaat behaalt.",
      "duur": "4 tot 12 weken",
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
      "antwoord": "Nee, je kunt direct een afspraak maken zonder verwijsbrief van de huisarts. Fysiotherapie is vrij toegankelijk."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht. Na de intake maken we samen een behandelplan waarin we een inschatting geven van het aantal benodigde sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kun je binnen 48 uur terecht voor een intake. We bieden ook avond- en weekendafspraken aan."
    },
    {
      "vraag": "Krijg ik altijd dezelfde therapeut?",
      "antwoord": "Ja, bij LEEF! werk je met een vaste therapeut die jouw behandeling begeleidt. Dit zorgt voor continuïteit en persoonlijke aandacht."
    },
    {
      "vraag": "Wat kost een behandeling zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost € 42,50. Bij complexere klachten of specialisaties kunnen de kosten afwijken. We informeren je hier altijd vooraf over."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot blijvend resultaat: zo begeleiden wij jou.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a4d037",
    "donker": "#7ea827",
    "licht": "#f2f9e6"
  }
} as const;

export type Praktijk = typeof praktijk;
