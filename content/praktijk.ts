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
  "naam": "Medifit",
  "plaats": "Moraira",
  "telefoon": "0966 49 20 00",
  "telefoonHref": "tel:+31966492000",
  "whatsapp": "https://wa.me/31966492000",
  "boekUrl": "https://www.medifitreha.com/nl/aanmelding-2/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Herstel Werkt",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Burn-out",
      "sub": "Gestructureerd traject terug naar energie en balans",
      "slug": "burn-out",
      "icoon": "Brain"
    },
    {
      "label": "Long COVID",
      "sub": "Revalidatie na langdurige COVID-klachten",
      "slug": "long-covid",
      "icoon": "HeartPulse"
    },
    {
      "label": "MS Revalidatie",
      "sub": "Functioneel herstel bij multiple sclerose",
      "slug": "ms-revalidatie",
      "icoon": "Activity"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie na operatie",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "Chronische pijn",
      "sub": "Pijnrevalidatie met medische begeleiding",
      "slug": "chronische-pijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "COPD & Long",
      "sub": "Longrevalidatie en ademhalingsproblemen",
      "slug": "copd-long",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Michael V.",
      "klacht": "MS Revalidatie",
      "plaats": "Moraira",
      "sterren": 5,
      "quote": "Ik kwam aan in een rolstoel en vertrok met alleen een wandelstok. Dit had ik nooit verwacht. Het team heeft mij echt geholpen om weer vooruit te komen.",
      "toestemming": true
    },
    {
      "naam": "Armand H.",
      "klacht": "Burn-out",
      "plaats": "Herzberg",
      "sterren": 5,
      "quote": "Door het maatwerk en de persoonlijke aanpak heb ik eindelijk weer energie. De revalidatie voelde echt effectief aan.",
      "toestemming": true
    },
    {
      "naam": "Bert H.",
      "klacht": "Chronische pijn",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Het enthousiasme en de passie van het team spatten eraf. De persoonlijke aandacht maakte het verschil. Ik voel me een stuk beter.",
      "toestemming": true
    },
    {
      "naam": "Sandra M.",
      "klacht": "Long COVID",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden vermoeidheid eindelijk weer vooruitgang. Het programma was intensief maar het heeft me echt geholpen om mijn leven terug te krijgen.",
      "toestemming": true
    },
    {
      "naam": "Jan K.",
      "klacht": "Heup & Knie",
      "plaats": "Denia",
      "sterren": 4,
      "quote": "De revalidatie na mijn knieoperatie verliep voorspoedig. Ik kon sneller dan verwacht weer bewegen.",
      "toestemming": true
    },
    {
      "naam": "Maria L.",
      "klacht": "COPD & Long",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Mijn ademhaling is verbeterd en ik voel me fitter. Het team nam echt de tijd om naar mij te luisteren.",
      "toestemming": true
    },
    {
      "naam": "Peter D.",
      "klacht": "Burn-out",
      "plaats": "Den Haag",
      "sterren": 5,
      "quote": "Ik was volledig uitgeput maar het programma gaf me structuur en rust. Nu kan ik weer met plezier werken.",
      "toestemming": true
    },
    {
      "naam": "Eline J.",
      "klacht": "MS Revalidatie",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "De begeleiding was professioneel en warm. Ik heb meer vooruitgang geboekt dan ik durfde hopen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je wilt graag weer bewegen zoals vroeger, maar je lichaam werkt niet meer mee en dat voelt alsof een stukje van jezelf stilstaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al zo lang gewacht en steeds uitgesteld, terwijl de onzekerheid over waar je terecht kunt steeds groter wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Bij elke nieuwe therapeut moet je je verhaal opnieuw vertellen, zonder dat iemand écht de tijd neemt om jou echt te leren kennen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt echt uit waar jouw klacht vandaan komt en wat jij nodig hebt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit werken we anders. We nemen de tijd om jouw verhaal te horen, de oorzaak te vinden en samen met jou een persoonlijk plan te maken dat écht werkt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We luisteren naar jouw verhaal, doen grondig onderzoek en achterhalen waar de klacht vandaan komt. Zo weten we precies wat jij nodig hebt.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een revalidatieplan op dat past bij jouw situatie, doelen en mogelijkheden.",
      "duur": "1-2 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je werkt onder begeleiding van hetzelfde team aan je herstel. We volgen je vooruitgang en passen het plan aan waar nodig, tot je weer verder kunt.",
      "duur": "2-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Dr. Ana Martinez",
      "functie": "Revalidatiearts",
      "specialisatie": "Neurologische revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "José van der Berg",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Post-operatieve revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Maria Janssen",
      "functie": "Manueel therapeut",
      "specialisatie": "Chronische pijnklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Marjolein Smit",
      "functie": "Ergotherapeut",
      "specialisatie": "Burn-out en herstart",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Tom de Vries",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Medische fitness training",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Laura Hendriksen",
      "functie": "Fysiotherapeut",
      "specialisatie": "Long- en hartrevalidatie",
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
      "vraag": "Heb ik een verwijzing nodig voor revalidatie?",
      "antwoord": "Voor veel van onze programma's is een verwijzing van je huisarts of specialist nodig. Voor therapie en medische fitness kun je ook zonder verwijzing bij ons terecht. Neem contact op voor meer informatie."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake bespreken we samen een behandelplan met een verwachte duur. Sommige programma's duren enkele weken, andere trajecten kunnen meerdere maanden in beslag nemen."
    },
    {
      "vraag": "Hoe lang is de wachttijd voor een afspraak?",
      "antwoord": "Gemiddeld kun je binnen 3 tot 5 dagen terecht voor een eerste afspraak. Voor spoedgevallen proberen we altijd sneller een plek te vinden."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij Medifit werken we met vaste behandelteams. Je wordt behandeld door hetzelfde team dat jouw verhaal kent en je vooruitgang volgt. Zo krijg je de continuïteit en persoonlijke aandacht die je nodig hebt."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per behandeling en programma. Een standaard fysiotherapiesessie bedraagt €65. Voor intensieve revalidatieprogramma's stellen we een offerte op maat op. Neem contact met ons op voor een persoonlijk advies."
    }
  ],
  "stappenKop": "Van eerste afspraak tot volledig herstel",
  "stappenSub": "Een helder traject waarin we samen werken aan jouw herstel, stap voor stap.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#2563eb",
    "donker": "#1e40af",
    "licht": "#eff6ff"
  }
} as const;

export type Praktijk = typeof praktijk;
