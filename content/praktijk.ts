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
    "aantalReviews": 127,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Frozen shoulder en andere schouderklachten",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Herstel en preventie van sportblessures",
      "slug": "sportblessures",
      "icoon": "Activity"
    },
    {
      "label": "Postoperatief",
      "sub": "Revalidatie na chirurgische ingrepen",
      "slug": "postoperatief",
      "icoon": "HeartPulse"
    },
    {
      "label": "Spierklachten",
      "sub": "Triggerpointtherapie en spierknopen",
      "slug": "spierklachten",
      "icoon": "Dumbbell"
    },
    {
      "label": "Mobiliteit",
      "sub": "Verbetering bewegingsbereik en vitaliteit",
      "slug": "mobiliteit",
      "icoon": "PersonStanding"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden schouderpijn eindelijk weer normaal kunnen bewegen. De persoonlijke aanpak maakte echt het verschil.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Sportblessure",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Dankzij de behandeling kon ik snel weer sporten. Het team nam echt de tijd om mijn blessure grondig te onderzoeken.",
      "toestemming": true
    },
    {
      "naam": "Fatima",
      "klacht": "Mobiliteit",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Ik kan weer traplopen zonder pijn. De oefeningen waren precies afgestemd op mijn situatie.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Postoperatief",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Het revalidatieprogramma na mijn operatie was geweldig. Ik voelde me goed begeleid tijdens het hele herstelproces.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Spierklachten",
      "plaats": "Amsterdam",
      "sterren": 4,
      "quote": "De triggerpointtherapie hielp enorm tegen mijn nekklachten. Ik merk nu pas hoe gespannen ik altijd was.",
      "toestemming": true
    },
    {
      "naam": "Ahmed",
      "klacht": "Schouder",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Vriendelijk team dat echt naar je luistert. Mijn frozen shoulder is eindelijk aan het verbeteren.",
      "toestemming": true
    },
    {
      "naam": "Ingrid",
      "klacht": "Mobiliteit",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "De behandeling aan huis was super handig voor mij. Professioneel en persoonlijk, precies wat ik nodig had.",
      "toestemming": true
    },
    {
      "naam": "Dennis",
      "klacht": "Sportblessure",
      "plaats": "Lelystad",
      "sterren": 5,
      "quote": "Van blessure naar topprestatie. Het preventieplan helpt me om blessurevrij te blijven trainen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je favoriete sport ligt al maanden stil, je lichaam houdt je tegen terwijl je niets liever wilt dan gewoon weer actief zijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je weet dat je iets moet doen, maar uitstellen lijkt makkelijker dan de onzekerheid over waar je terecht kunt en of het wel helpt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een nieuw gezicht, steeds opnieuw uitleggen wat er speelt, zonder dat iemand je verhaal echt kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand neemt de tijd om uit te zoeken waarom je klachten steeds terugkomen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij TMC Fysiotherapie draait alles om jou. We nemen de tijd om te begrijpen wat er speelt, zoeken samen naar de oorzaak en begeleiden je persoonlijk naar herstel en vitaliteit.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We luisteren naar jouw verhaal en onderzoeken grondig wat de oorzaak van je klachten is. Samen krijgen we helder wat er nodig is.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van onze bevindingen stellen we een behandelplan op maat samen, afgestemd op jouw doelen en levensstijl.",
      "duur": "Binnen 1 week",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We begeleiden je stap voor stap naar herstel met hands-on therapie, oefeningen en persoonlijke aandacht tot je weer kunt doen wat je wilt.",
      "duur": "6-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Ali Abbasi",
      "functie": "Fysiotherapeut",
      "specialisatie": "Mobiliteit en pijnklachten",
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, u kunt zonder verwijzing bij ons terecht. Fysiotherapie is in Nederland vrij toegankelijk, u kunt direct een afspraak maken."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en klacht. Na de intake bespreken we een behandelplan met een inschatting van het aantal benodigde sessies, meestal tussen de 6 en 12 behandelingen."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Wij streven ernaar u binnen 2 werkdagen te kunnen ontvangen. Voor spoedgevallen doen we ons uiterste best om nog sneller een plek te vinden."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij TMC krijgt u een vaste therapeut die uw verhaal kent en u persoonlijk begeleidt tijdens het hele traject. Continuïteit staat bij ons centraal."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Heeft u geen fysiotherapie in uw pakket? Wij bieden een aantrekkelijke tariefregeling voor particuliere behandelingen. Neem contact op voor de mogelijkheden."
    }
  ],
  "stappenKop": "Uw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot blijvend resultaat, wij begeleiden u persoonlijk.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#d4a84a",
    "donker": "#9d7831",
    "licht": "#fdf6e8"
  }
} as const;

export type Praktijk = typeof praktijk;
