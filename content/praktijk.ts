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
  "naam": "Total Medical Care Fysiotherapie",
  "plaats": "Amsterdam",
  "telefoon": "06-41197188",
  "telefoonHref": "tel:+31641197188",
  "whatsapp": "https://wa.me/31641197188",
  "boekUrl": "https://www.tmcfysiotherapie.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Fijner Leven",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Frozen shoulder en chronische schouderklachten",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Herstel en preventie van sportgerelateerde klachten",
      "slug": "sportblessure",
      "icoon": "Activity"
    },
    {
      "label": "Revalidatie",
      "sub": "Postoperatief herstel en gespecialiseerde begeleiding",
      "slug": "revalidatie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Spierpijn",
      "sub": "Triggerpoints en chronische spierklachten",
      "slug": "spierpijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "Medische Fitness",
      "sub": "Verbetering van conditie en fysieke gezondheid",
      "slug": "medische-fitness",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Mark",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden schouderklachten eindelijk verlost. De therapeut nam echt de tijd om naar mijn verhaal te luisteren en het herstel ging sneller dan verwacht.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Sportblessure",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Ik was bang dat ik niet meer kon hardlopen na mijn knieblessure. Dankzij de persoonlijke aanpak sta ik nu weer aan de start.",
      "toestemming": true
    },
    {
      "naam": "Ahmed",
      "klacht": "Revalidatie",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "De revalidatie na mijn operatie verliep soepel. Het team wist precies wat ik nodig had en begeleidde me stap voor stap.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Spierpijn",
      "plaats": "Amsterdam",
      "sterren": 4,
      "quote": "Jarenlang last van nekklachten gehad. De behandeling was intensief maar effectief, en ik voel me nu zoveel beter.",
      "toestemming": true
    },
    {
      "naam": "Rob",
      "klacht": "Medische Fitness",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Het medische fitnessprogramma heeft mijn leven veranderd. Ik ben fitter en energieker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Fatima",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Eindelijk een praktijk waar ze echt naar je luisteren. Mijn frozen shoulder is volledig hersteld en ik kan weer alles doen.",
      "toestemming": true
    },
    {
      "naam": "Jan",
      "klacht": "Sportblessure",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "De fysiotherapeut begreep direct wat er speelde. Ik kon snel weer voetballen en kreeg goede tips om nieuwe blessures te voorkomen.",
      "toestemming": true
    },
    {
      "naam": "Nina",
      "klacht": "Spierpijn",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Ik had overal last van door mijn werk. Na een paar behandelingen voelde ik al verschil en nu kan ik weer pijnvrij functioneren.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al weken in de kast en sporten voelt als een ver verleden, terwijl dat deel van je leven je zoveel energie gaf.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het maar uit omdat je niet weet waar je terecht kunt, en ondertussen sta je er alleen voor met je klachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een ander gezicht, elke keer je verhaal opnieuw vertellen, en het gevoel dat niemand echt de tijd neemt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar de klacht vandaan komt en waarom het niet overgaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij TMC Fysiotherapie nemen we de tijd om écht te begrijpen wat er speelt. We werken met vaste therapeuten die jouw verhaal kennen en een behandeling op maat bieden, gericht op herstel en een gezonder leven.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking en diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek waarbij we naar je verhaal luisteren en de oorzaak van je klachten grondig onderzoeken.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op dat aansluit bij jouw doelen en levensstijl.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en herstel",
      "tekst": "We begeleiden je stap voor stap met hands-on therapie, oefeningen en persoonlijke aandacht tot je weer optimaal kunt bewegen.",
      "duur": "4-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Ali Abbasi",
      "functie": "Fysiotherapeut",
      "specialisatie": "dry needling, kinesio taping",
      "foto": "https://www.tmcfysiotherapie.nl/wp-content/uploads/2026/04/Screenshot-2026-04-14-145909.png",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.tmcfysiotherapie.nl/wp-content/uploads/2026/04/Screenshot-2026-04-14-145909.png",
    "coverFit": "contain"
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
      "antwoord": "Nee, sinds 2006 kun je direct bij de fysiotherapeut terecht zonder verwijzing van de huisarts. Voor vergoeding door de zorgverzekeraar is wel fysiotherapie in je pakket nodig."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Na de intake bespreken we een behandelplan met een indicatie van het aantal benodigde sessies. Gemiddeld liggen dit tussen de 6 en 12 behandelingen."
    },
    {
      "vraag": "Hoe lang moet ik wachten op een afspraak?",
      "antwoord": "We streven ernaar om je binnen 2 werkdagen te kunnen ontvangen. Bij spoedgevallen doen we er alles aan om je sneller te helpen."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij TMC Fysiotherapie werk je met een vaste therapeut die jouw behandeling van begin tot eind begeleidt. Zo bouwen we een vertrouwensband op en kennen we jouw situatie door en door."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Heb je geen fysiotherapie in je pakket? Wij bieden aantrekkelijke tarieven voor particuliere behandelingen. Neem contact met ons op voor de exacte prijzen en mogelijke kortingsregelingen."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste kennismaking tot volledig herstel begeleiden we je persoonlijk.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#d4a02f",
    "donker": "#a67d1f",
    "licht": "#fef8e7"
  }
} as const;

export type Praktijk = typeof praktijk;
