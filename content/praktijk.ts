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
  "telefoon": "0966 123 456",
  "telefoonHref": "tel:+31966123456",
  "whatsapp": "https://wa.me/31966123456",
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
      "sub": "Revalidatie bij blijvende klachten na corona",
      "slug": "long-covid",
      "icoon": "HeartPulse"
    },
    {
      "label": "Neurologisch",
      "sub": "Herstel na MS, CVA of hersenschudding",
      "slug": "neurologisch",
      "icoon": "Brain"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie na operatie",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "Chronische pijn",
      "sub": "Pijnrevalidatie voor langdurige klachten",
      "slug": "chronische-pijn",
      "icoon": "Activity"
    },
    {
      "label": "COPD & Long",
      "sub": "Longrevalidatie voor betere conditie",
      "slug": "copd-long",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Peter",
      "klacht": "Burn-out",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Na maanden uitputting ben ik hier weer grip op mijn leven gaan krijgen. Het gestructureerde programma gaf me de rust en tools die ik nodig had.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Long COVID",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Ik dacht dat ik nooit meer zou opknappen. Hier hebben ze me stap voor stap geholpen om mijn energie terug te krijgen. Ik voel me eindelijk weer mezelf.",
      "toestemming": true
    },
    {
      "naam": "Jan",
      "klacht": "Heup & Knie",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Na mijn heupoperatie ben ik hier snel en professioneel gerevalideerd. De begeleiding was persoonlijk en het resultaat overtrof mijn verwachtingen.",
      "toestemming": true
    },
    {
      "naam": "Maria",
      "klacht": "Neurologisch",
      "plaats": "Den Haag",
      "sterren": 4,
      "quote": "Het team heeft enorm veel kennis en geduld. Ze hebben me geholpen om na mijn CVA weer zelfstandig te kunnen functioneren.",
      "toestemming": true
    },
    {
      "naam": "Kees",
      "klacht": "Chronische pijn",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "Jarenlang had ik pijn waar niemand raad mee wist. Hier kreeg ik eindelijk een aanpak die werkt en voelde ik me serieus genomen.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "COPD & Long",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Dankzij de longrevalidatie kan ik weer normaal ademhalen en meer ondernemen. Het heeft mijn leven echt veranderd.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Neurologisch",
      "plaats": "Breda",
      "sterren": 5,
      "quote": "Ik kwam in een rolstoel aan en vertrok met een wandelstok. Dat zegt genoeg over de kwaliteit van zorg hier.",
      "toestemming": true
    },
    {
      "naam": "Els",
      "klacht": "Burn-out",
      "plaats": "Nijmegen",
      "sterren": 5,
      "quote": "De rust en structuur hebben me geholpen om weer helder te denken. Ik heb hier geleerd om beter voor mezelf te zorgen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je bent moe, zelfs na een nachtje slapen, en voelt dat je grip op je leven kwijt bent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Elke dag voel je de pijn of beperkingen en vraag je je af of dit ooit nog beter wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wilt gewoon weer kunnen bewegen, werken en genieten zonder constant rekening te houden met je klachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Artsen hebben je verteld wat er aan de hand is, maar je mist een duidelijk plan om écht vooruit te komen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit krijg je een gestructureerd traject met medische expertise en persoonlijke begeleiding. We brengen je stap voor stap terug naar energie, helderheid en controle over je eigen leven.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek en medisch onderzoek. Zo krijgen we een compleet beeld van je situatie en stellen we de juiste diagnose.",
      "duur": "Dag 1",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we samen met jou een op maat gemaakt revalidatieplan op. Dit plan is afgestemd op jouw doelen en mogelijkheden.",
      "duur": "Week 1",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je doorloopt het volledige traject met intensieve begeleiding van ons multidisciplinaire team. We evalueren regelmatig de voortgang en passen het plan aan waar nodig tot je je doel bereikt.",
      "duur": "2-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Dr. Maria van den Berg",
      "functie": "Revalidatiearts",
      "specialisatie": "Neurologische revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Thomas Hendriks",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Post-operatieve zorg",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Lisa de Vries",
      "functie": "Psycholoog GZ",
      "specialisatie": "Burn-out en stressklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Mark Jansen",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Herstel en conditietraining",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Anna Bakker",
      "functie": "Ergotherapeut",
      "specialisatie": "Zelfredzaamheid en participatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Robert Smit",
      "functie": "Manueel therapeut",
      "specialisatie": "Chronische pijnklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_6_hwafmn.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.medifitreha.com/wp-content/uploads/2025/07/489949733_1338829624380886_6116214894853118220_n.jpg"
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
      "antwoord": "Voor de meeste revalidatieprogramma's is een verwijzing van je huisarts of specialist gewenst, maar niet altijd verplicht. Je kunt ook zelf contact met ons opnemen voor een vrijblijvend intakegesprek. We bekijken samen wat de beste route is."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake stellen we een behandelplan op met een duidelijke planning. Sommige trajecten duren 2 weken, andere kunnen 8 tot 12 weken in beslag nemen. We evalueren regelmatig de voortgang."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Gemiddeld kun je binnen 3 werkdagen terecht voor een eerste afspraak. Voor intensieve verblijfsprogramma's plannen we in overleg een startdatum die bij jou past, meestal binnen 2 tot 3 weken."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, je krijgt een vast behandelteam toegewezen dat jouw hele traject begeleidt. Dit zorgt voor continuïteit en persoonlijke aandacht. Wel werk je met een multidisciplinair team van verschillende specialisten."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per programma. Een poliklinische behandeling start vanaf €75 per sessie. Intensieve verblijfsprogramma's variëren van €2.500 tot €8.000 afhankelijk van de duur en intensiteit. We maken graag een offerte op maat voor jouw situatie."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Een duidelijk traject van intake tot resultaat, volledig afgestemd op jouw situatie.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#17a2b8",
    "donker": "#117a8b",
    "licht": "#d1ecf1"
  }
} as const;

export type Praktijk = typeof praktijk;
