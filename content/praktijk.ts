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
  "telefoon": "075 616 7070",
  "telefoonHref": "tel:+31756167070",
  "whatsapp": "https://wa.me/31756167070",
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
      "sub": "Herstel van blessures en optimalisatie van beweging",
      "slug": "fysiotherapie",
      "icoon": "Activity"
    },
    {
      "label": "Manuele therapie",
      "sub": "Gewrichts- en spierklachten behandelen",
      "slug": "manuele-therapie",
      "icoon": "Bone"
    },
    {
      "label": "Sportbegeleiding",
      "sub": "Van herstel tot topprestatie onder begeleiding",
      "slug": "sporten",
      "icoon": "Dumbbell"
    },
    {
      "label": "Oedeem therapie",
      "sub": "Behandeling van vocht- en lymfeklachten",
      "slug": "oedeem-therapie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Oncologie",
      "sub": "Ondersteuning tijdens en na kankerbehandeling",
      "slug": "oncologische-fysiotherapie",
      "icoon": "Brain"
    },
    {
      "label": "Arbeidsrevalidatie",
      "sub": "Terug naar werk na langdurige uitval",
      "slug": "arbeidsrevalidatie",
      "icoon": "PersonStanding"
    }
  ],
  "reviews": [
    {
      "naam": "Marloes",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Eindelijk weer kunnen bewegen zonder constant aan mijn rug te denken. De persoonlijke aandacht en het echte begrip voor mijn situatie hebben het verschil gemaakt.",
      "toestemming": true
    },
    {
      "naam": "Dennis",
      "klacht": "Sportbegeleiding",
      "plaats": "Zaanstad",
      "sterren": 5,
      "quote": "Ik dacht dat hardlopen voorbij was na mijn knieblessure. Nu loop ik weer wedstrijden en voel me sterker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Suzanne",
      "klacht": "Manuele therapie",
      "plaats": "Westzaan",
      "sterren": 5,
      "quote": "Na jaren rondlopen met nekklachten kreeg ik hier eindelijk duidelijkheid over de oorzaak. De behandeling werkt echt en ik slaap weer goed.",
      "toestemming": true
    },
    {
      "naam": "Erik",
      "klacht": "Arbeidsrevalidatie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Dankzij het stappenplan kon ik gefaseerd terugkeren naar mijn werk. Ik voelde me gesteund in elk onderdeel van het proces.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Oncologie",
      "plaats": "Krommenie",
      "sterren": 5,
      "quote": "De begeleiding tijdens mijn herstel na chemo heeft me niet alleen fysiek maar ook mentaal geholpen. Ik voel me weer mezelf.",
      "toestemming": true
    },
    {
      "naam": "Thomas",
      "klacht": "Fysiotherapie",
      "plaats": "Wormerveer",
      "sterren": 4,
      "quote": "Goede uitleg en een duidelijk plan. Het kostte wat tijd, maar de resultaten zijn er nu wel.",
      "toestemming": true
    },
    {
      "naam": "Patricia",
      "klacht": "Oedeem therapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Na maanden van vocht vasthouden eindelijk opluchting. De therapeut nam echt de tijd om alles uit te leggen en samen het beste traject te kiezen.",
      "toestemming": true
    },
    {
      "naam": "Robert",
      "klacht": "Sportbegeleiding",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "Ik train nu gerichter en voorkom blessures. Het programma is precies op mijn doelen afgestemd.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt je sportschoenen al weken niet meer uit de kast gepakt, want bewegen doet gewoon te veel pijn en dat deel van je leven staat stil.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt de afspraak steeds uit omdat je niet weet waar je het beste terecht kunt en het voelt alsof je er alleen voor staat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je bent bij verschillende plekken geweest en elke keer zie je een ander gezicht, waardoor je steeds opnieuw je verhaal moet vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je kreeg standaardoefeningen mee zonder dat iemand echt de tijd nam om uit te zoeken waar jouw klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! nemen we de tijd om jouw verhaal écht te begrijpen en de oorzaak van je klacht te achterhalen. Je krijgt een vaste behandelaar die met je meedenkt en een behandelplan op maat opstelt, zodat je niet alleen je klachten kwijtraakt maar ook begrijpt hoe je voorkomt dat ze terugkomen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "Tijdens het eerste consult nemen we uitgebreid de tijd voor jouw verhaal en onderzoeken we grondig waar je klacht vandaan komt. Je krijgt meteen duidelijkheid over de oorzaak en wat we gaan doen.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een plan op maat op, met heldere doelen en een realistische planning. Je weet precies wat je kunt verwachten en hoe lang het traject duurt.",
      "duur": "Samen bepaald",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je vaste behandelaar begeleidt je stap voor stap naar je doel, past waar nodig het plan aan en zorgt ervoor dat je niet alleen klachtenvrij wordt maar ook weet hoe je dat blijft. Het eindresultaat is dat je weer volop kunt leven.",
      "duur": "4-12 weken gemiddeld",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Manueel therapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Oncologiefysiotherapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Oefentherapeut Mensendieck",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Oedeemtherapeut",
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
      "antwoord": "Nee, je kunt rechtstreeks contact met ons opnemen zonder verwijzing van je huisarts. Wel is een verwijzing soms handig voor je verzekering, afhankelijk van je polis."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Tijdens de intake bespreken we een inschatting en stellen we samen een behandelplan op met realistische doelen en een tijdlijn."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kun je binnen 48 uur terecht voor een eerste afspraak. We bieden ook avond- en weekendafspraken voor extra flexibiliteit."
    },
    {
      "vraag": "Krijg ik een vaste behandelaar?",
      "antwoord": "Ja, bij LEEF! wordt je behandeld door één vaste therapeut die jouw verhaal kent en je begeleidt van start tot finish. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat als ik geen fysiotherapie vergoed heb?",
      "antwoord": "Ook zonder verzekering ben je welkom. We hanteren transparante tarieven en bespreken vooraf de kosten, zodat je weet waar je aan toe bent."
    }
  ],
  "stappenKop": "Jouw traject bij LEEF!",
  "stappenSub": "Van eerste afspraak tot blijvend resultaat: zo begeleiden we jou naar een klachtenvrij leven.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a3c617",
    "donker": "#7a9411",
    "licht": "#f4f8e8"
  }
} as const;

export type Praktijk = typeof praktijk;
