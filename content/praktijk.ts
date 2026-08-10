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
  "naam": "TeamFysio",
  "plaats": "Enschede",
  "telefoon": "053 291 8408",
  "telefoonHref": "tel:+31532918408",
  "whatsapp": "https://wa.me/31532918408",
  "boekUrl": "https://teamfysio.nl/contact",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Pijnvrij Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 247,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug & Nek",
      "sub": "Lage rugklachten, hernia, stenose, nekklachten en whiplash",
      "slug": "rug-nek",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, schouderpijn, schouderverkalking",
      "slug": "schouder",
      "icoon": "Activity"
    },
    {
      "label": "Knie & Heup",
      "sub": "Meniscusletsel, kniebandletsel, jumpers knee, runners knee",
      "slug": "knie-heup",
      "icoon": "PersonStanding"
    },
    {
      "label": "Sportblessures",
      "sub": "Hamstringscheur, tenniselleboog, achillespeesklachten",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Voet & Enkel",
      "sub": "Enkelbandletsel, hielspoor, shin splints",
      "slug": "voet-enkel",
      "icoon": "Activity"
    },
    {
      "label": "Chronische pijn",
      "sub": "Langdurige klachten, COPD, parkinson",
      "slug": "chronische-pijn",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Mark van der Berg",
      "klacht": "Knie & Heup",
      "plaats": "Enschede",
      "sterren": 5,
      "quote": "Na een meniscusletsel kon ik eindelijk weer sporten. De persoonlijke begeleiding en deskundige aanpak hebben mij enorm geholpen.",
      "toestemming": true
    },
    {
      "naam": "Sandra Hendriks",
      "klacht": "Schouder",
      "plaats": "Hengelo",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek onoplosbaar, maar dankzij de behandeling kan ik nu weer normaal bewegen. Ik ben ontzettend blij met het resultaat.",
      "toestemming": true
    },
    {
      "naam": "Peter Jansen",
      "klacht": "Rug & Nek",
      "plaats": "Losser",
      "sterren": 5,
      "quote": "Jarenlang last van mijn onderrug gehad. De therapeut nam de tijd om alles goed uit te leggen en nu ben ik klachtenvrij.",
      "toestemming": true
    },
    {
      "naam": "Linda Scholten",
      "klacht": "Voet & Enkel",
      "plaats": "Enschede",
      "sterren": 5,
      "quote": "Mijn hielspoor belemmerde mij enorm in mijn dagelijkse leven. Na de behandelingen kan ik weer pijnvrij lopen.",
      "toestemming": true
    },
    {
      "naam": "Tom Wassink",
      "klacht": "Sportblessures",
      "plaats": "Hengelo",
      "sterren": 5,
      "quote": "Als fanatieke hardloper had ik last van een hamstringblessure. Dankzij de specialistische aanpak kon ik snel weer aan de start staan.",
      "toestemming": true
    },
    {
      "naam": "Marieke Vos",
      "klacht": "Rug & Nek",
      "plaats": "Enschede",
      "sterren": 4,
      "quote": "Mijn nekklachten na een auto-ongeluk werden serieus genomen. De behandeling was intensief maar effectief.",
      "toestemming": true
    },
    {
      "naam": "Jan Mulder",
      "klacht": "Chronische pijn",
      "plaats": "Losser",
      "sterren": 5,
      "quote": "Door COPD werd bewegen steeds moeilijker. De longrevalidatie heeft mijn conditie en levenskwaliteit enorm verbeterd.",
      "toestemming": true
    },
    {
      "naam": "Esther Brouwer",
      "klacht": "Schouder",
      "plaats": "Hengelo",
      "sterren": 5,
      "quote": "Mijn tenniselleboog bleef maar terugkomen totdat ik hier kwam. Eindelijk de juiste aanpak gevonden en nu klachtenvrij.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt je sportschoenen al weken niet meer aangeraakt omdat bewegen gewoon te pijnlijk is geworden.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het al te lang uit en weet eigenlijk niet waar je het beste terecht kunt met jouw klacht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wilt niet bij elke afspraak je verhaal opnieuw moeten vertellen aan een ander gezicht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar jouw klacht precies vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij TeamFysio werken we anders: met persoonlijke aandacht zoeken we samen naar de oorzaak van jouw klacht en begeleiden we je van begin tot eind naar duurzaam herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Onze fysiotherapeuten behandelen een breed scala aan klachten met bewezen effectieve technieken. Door gerichte oefentherapie en manuele behandelingen herstellen we uw bewegingsvrijheid en verminderen we pijn.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele therapie",
      "tekst": "Bij hardnekkige gewrichts- en spierklachten biedt manuele therapie uitkomst. Met gespecialiseerde handgrepen herstellen we de mobiliteit van gewrichten en wervels voor blijvend resultaat.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry needling",
      "tekst": "Voor dieperliggende triggerpunten en verhardingen in spieren gebruiken we dry needling. Deze effectieve techniek verlicht pijn snel en verbetert de doorbloeding voor sneller herstel.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Ferit Uncu",
      "functie": "Manueel therapeut",
      "specialisatie": "",
      "foto": "https://teamfysio.nl/assets/ferit-DNMn7igu.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sander Greve",
      "functie": "Manueel therapeut MSc",
      "specialisatie": "",
      "foto": "https://teamfysio.nl/assets/sander-Crw0foR2.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Dion Winkelhorst",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://teamfysio.nl/assets/dion-BoubDjHA.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Gideon van Iterson",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://teamfysio.nl/assets/gideon-DqCeJq3n.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nathan van der Vuurst",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://teamfysio.nl/assets/nathan-DxDB7fqA.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Kim Markerink",
      "functie": "Bewegingsagoog",
      "specialisatie": "Fysiotherapeut",
      "foto": "https://teamfysio.nl/assets/kim-DV9781Vu.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://teamfysio.nl/assets/team-collage-CkIn_Gd8.jpg"
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
      "antwoord": "Nee, sinds 2006 kunt u zonder verwijzing van de huisarts direct naar de fysiotherapeut. U kunt zelf een afspraak maken bij TeamFysio. Voor vergoeding via uw zorgverzekering is het wel verstandig om vooraf uw polisvoorwaarden te checken."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Het aantal behandelingen verschilt per persoon en klacht. Na het eerste consult maken we samen een behandelplan waarin we een inschatting geven. Gemiddeld zijn 6 tot 10 behandelingen nodig, maar dit kan korter of langer zijn afhankelijk van uw herstel."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij TeamFysio streven we naar een snelle start van uw behandeling. Vaak kunt u binnen 1 tot 3 werkdagen terecht voor een intake. Bij spoed doen we er alles aan om u nog sneller te helpen."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij TeamFysio vinden we continuïteit belangrijk. U wordt behandeld door dezelfde fysiotherapeut gedurende uw hele traject. Zo hoeft u uw verhaal niet steeds opnieuw te vertellen en kent uw therapeut uw situatie door en door."
    },
    {
      "vraag": "Wat zijn de kosten als ik niet verzekerd ben?",
      "antwoord": "De kosten voor een behandeling zijn €42,50 voor een reguliere behandeling van 30 minuten. Voor een intake of langere behandeling kan dit oplopen tot €85,-. We adviseren om altijd uw verzekeringsvoorwaarden te checken, want veel verzekeraars vergoeden (een deel van) de fysiotherapie vanuit de aanvullende verzekering."
    }
  ],
  "stappenKop": "Onze behandelingen",
  "stappenSub": "Bij TeamFysio bieden we een breed scala aan specialistische behandelingen voor optimaal herstel.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ff8c42",
    "donker": "#e67329",
    "licht": "#fff4ed"
  }
} as const;

export type Praktijk = typeof praktijk;
