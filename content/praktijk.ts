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
    "aantalReviews": 215,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Fysiotherapie",
      "sub": "Revalidatie en herstel na blessures of chronische klachten",
      "slug": "fysiotherapie",
      "icoon": "Activity"
    },
    {
      "label": "Manuele Therapie",
      "sub": "Gerichte behandeling van gewrichten en spieren",
      "slug": "manuele-therapie",
      "icoon": "Bone"
    },
    {
      "label": "Oncologie",
      "sub": "Begeleiding tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Oedeemtherapie",
      "sub": "Behandeling van vochtophoping en lymfeklachten",
      "slug": "oedeemtherapie",
      "icoon": "Activity"
    },
    {
      "label": "Sporten",
      "sub": "Begeleide training voor optimale resultaten",
      "slug": "sporten",
      "icoon": "Dumbbell"
    },
    {
      "label": "Diëtetiek",
      "sub": "Persoonlijk voedingsadvies voor gezondheid",
      "slug": "dietetiek",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Mark",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik kon amper meer bewegen door mijn rugklachten. Na een paar maanden intensieve begeleiding bij LEEF! ben ik weer volledig terug in mijn oude ritme.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Manuele Therapie",
      "plaats": "Wormer",
      "sterren": 5,
      "quote": "Jarenlang last van mijn nek gehad. De therapeuten hier hebben echt de tijd genomen om te kijken wat er aan de hand was. Wat een verschil!",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Sporten",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik was mijn motivatie helemaal kwijt. De trainers bij LEEF! hebben me geholpen om weer plezier in sporten te vinden en mijn doelen te bereiken.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Oncologie",
      "plaats": "Assendelft",
      "sterren": 5,
      "quote": "Na mijn behandeling voelde ik me zwak en onzeker. De oncologische fysiotherapie heeft me geholpen om stap voor stap sterker te worden.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Diëtetiek",
      "plaats": "Zaandam",
      "sterren": 4,
      "quote": "De diëtist heeft me geholpen om mijn eetpatroon onder controle te krijgen. Ik voel me energieker en gezonder dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Els",
      "klacht": "Oedeemtherapie",
      "plaats": "Krommenie",
      "sterren": 5,
      "quote": "Eindelijk verlost van die vervelende zwellingen. Ik kan weer normaal lopen en mijn benen voelen zoveel lichter aan.",
      "toestemming": true
    },
    {
      "naam": "Rob",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik was sceptisch, maar de behandelaars hier wisten precies wat ze deden. Ze luisteren echt naar je verhaal en passen de behandeling daarop aan.",
      "toestemming": true
    },
    {
      "naam": "Monique",
      "klacht": "Sporten",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "De sfeer is geweldig en de begeleiding heel persoonlijk. Ik heb meer bereikt dan ik voor mogelijk had gehouden.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen liggen alweer weken in de kast, terwijl je vroeger elke week actief was – maar je lichaam laat het nu niet meer toe.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt je klachten te lang voor je uitgeschoven, en nu weet je niet meer waar je terecht kunt of hoe je begint.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer zie je een ander gezicht en moet je opnieuw uitleggen wat er aan de hand is, zonder dat iemand je verhaal echt kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt oefeningen mee, maar niemand legt uit waar je klacht vandaan komt of hoe je écht vooruitgang boekt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! doen we het anders: we nemen de tijd om je verhaal te horen, zoeken samen naar de oorzaak en bieden persoonlijke begeleiding die bij jou past. Zo kom je stap voor stap verder.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek waarin we naar je klachten en doelen luisteren. We voeren een grondige analyse uit om de oorzaak te vinden.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we samen met jou een behandelplan op, afgestemd op jouw situatie en doelen. Je weet precies wat je kunt verwachten.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Begeleiding en resultaat",
      "tekst": "We begeleiden je actief naar je doel met regelmatige voortgangsevaluaties. Stap voor stap werk je toe naar duurzaam herstel en optimale gezondheid.",
      "duur": "Gemiddeld 6-12 weken",
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
      "vraag": "Heb ik een verwijzing nodig voor fysiotherapie?",
      "antwoord": "Nee, sinds 2006 is directe toegang tot fysiotherapie mogelijk. Je kunt dus zonder verwijzing van de huisarts bij ons terecht. Voor vergoeding door je zorgverzekeraar raden we wel aan om vooraf te controleren of een verwijzing nodig is."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake maken we een behandelplan waarin we een indicatie geven. Gemiddeld zijn 6 tot 12 sessies voldoende, maar we evalueren regelmatig je voortgang en passen het plan zo nodig aan."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij LEEF! streven we ernaar om binnen 48 uur een afspraak voor je in te plannen. We hebben ruime openingstijden, ook 's avonds en in het weekend, zodat je altijd op een geschikt moment terechtkan."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde behandelaar?",
      "antwoord": "Ja, continuïteit is belangrijk voor ons. Je wordt behandeld door één vaste therapeut die jouw verhaal kent en je voortgang nauwlettend volgt. Zo bouwen we samen aan jouw herstel."
    },
    {
      "vraag": "Wat kost een behandeling zonder verzekering?",
      "antwoord": "De kosten voor een behandeling variëren afhankelijk van de specialisatie en duur. Gemiddeld betaal je tussen de €40 en €60 per sessie. Neem gerust contact met ons op voor een exacte prijsopgave."
    }
  ],
  "stappenKop": "Jouw traject bij LEEF!",
  "stappenSub": "Van eerste afspraak tot duurzaam resultaat, zo werken we samen aan jouw herstel.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a3d900",
    "donker": "#7ba500",
    "licht": "#f4fce8"
  }
} as const;

export type Praktijk = typeof praktijk;
