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
  "telefoon": "0966 49 21 00",
  "telefoonHref": "tel:+31966492100",
  "whatsapp": "https://wa.me/31966492100",
  "boekUrl": "https://www.medifitreha.com/nl/aanmelding-2/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Functioneel Herstel",
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
      "label": "MS & HSCT",
      "sub": "Neurologische revalidatie na stamcelbehandeling",
      "slug": "ms-hsct",
      "icoon": "Activity"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie na operatie",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "Long COVID",
      "sub": "Herstel van langdurige COVID-klachten",
      "slug": "long-covid",
      "icoon": "HeartPulse"
    },
    {
      "label": "Chronische pijn",
      "sub": "Pijnrevalidatie met multidisciplinaire aanpak",
      "slug": "chronische-pijn",
      "icoon": "Activity"
    },
    {
      "label": "Hersenschudding",
      "sub": "PCS revalidatie voor langdurige klachten",
      "slug": "hersenschudding",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Marco",
      "klacht": "Burn-out",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Na maanden uitputting eindelijk weer energie. Het programma heeft me stap voor stap geholpen om grip te krijgen op mijn herstel.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "MS & HSCT",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "De neurologische revalidatie na mijn stamcelbehandeling heeft me veel verder gebracht dan ik had durven hopen. Ik voel me weer zelfstandig.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Heup & Knie",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Drie weken na mijn knieoperatie kon ik al weer normaal lopen. De begeleiding was persoonlijk en effectief.",
      "toestemming": true
    },
    {
      "naam": "Saskia",
      "klacht": "Long COVID",
      "plaats": "Den Haag",
      "sterren": 4,
      "quote": "Eindelijk een plek waar ze Long COVID serieus nemen. Mijn vermoeidheid en concentratieproblemen zijn enorm verminderd.",
      "toestemming": true
    },
    {
      "naam": "Jan",
      "klacht": "Chronische pijn",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "Na jaren rondlopen met rugpijn ben ik nu eindelijk verlost. Ze hebben echt naar de oorzaak gekeken in plaats van alleen symptomen te behandelen.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Hersenschudding",
      "plaats": "Breda",
      "sterren": 5,
      "quote": "De PCS revalidatie heeft me mijn leven teruggegeven. Ik kan weer werken en heb geen last meer van duizeligheid.",
      "toestemming": true
    },
    {
      "naam": "Tom",
      "klacht": "Burn-out",
      "plaats": "Haarlem",
      "sterren": 5,
      "quote": "Het gestructureerde programma en de persoonlijke aandacht hebben het verschil gemaakt. Ik voel me sterker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Els",
      "klacht": "Heup & Knie",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Na mijn heupoperatie ben ik hier volledig hersteld. Het team was fantastisch en het resultaat overtreft mijn verwachtingen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je wilt weer bewegen zoals vroeger, maar je lichaam laat je in de steek en je ziet geen uitweg meer.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al maanden gewacht op een plek waar je terecht kunt, maar de onzekerheid blijft knagen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer een ander gezicht, en telkens opnieuw je verhaal moeten vertellen zonder dat iemand echt luistert.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt uit waar jouw klacht werkelijk vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit werken we anders. We nemen de tijd om jouw situatie te begrijpen enleggen helder uit wat er aan de hand is en hoe we je gaan helpen. Met een vast team dat je persoonlijk begeleidt naar duurzaam herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek en onderzoek om de oorzaak van jouw klachten te achterhalen. Je krijgt direct duidelijkheid over wat er speelt.",
      "duur": "60-90 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de bevindingen stellen we samen met jou een revalidatieplan op dat aansluit bij jouw situatie en doelen. Maatwerk, geen standaardaanpak.",
      "duur": "1-2 dagen",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je wordt begeleid door een vast multidisciplinair team dat met je meedenkt en bijstuurt waar nodig. Stap voor stap werk je toe naar functioneel herstel en een terugkeer naar het leven dat je wilt leiden.",
      "duur": "2-8 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Dr. Maria Gonzalez",
      "functie": "Revalidatiearts",
      "specialisatie": "Neurologische revalidatie",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Mart_Jan-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "José Ramirez",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Post-operatieve revalidatie",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Miguel-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "Ana Vermeulen",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "MS en HSCT",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Gerard-768x767.png",
      "uitgelicht": true
    },
    {
      "naam": "Marjolein de Vries",
      "functie": "Ergotherapeut",
      "specialisatie": "Chronische pijn en burn-out",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Laura-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "Michael Jansen",
      "functie": "Manueel therapeut",
      "specialisatie": "Musculoskeletale klachten",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Berrie-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "Saskia van den Berg",
      "functie": "Klinisch psycholoog",
      "specialisatie": "Revalidatiepsychologie",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Jenna-768x768.png",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.medifitreha.com/wp-content/uploads/2025/03/TEAM-Xmas-2024-e1762767724816-1024x848.png"
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
      "antwoord": "Voor de meeste van onze programma's is geen verwijzing nodig. Je kunt jezelf of een naaste direct aanmelden via onze website of telefonisch contact opnemen. Voor sommige klinische programma's kan een verwijzing van je huisarts of specialist handig zijn voor de verzekering."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit verschilt per persoon en type klacht. Na de intake bespreken we een behandelplan op maat. Sommige programma's duren 2 weken, andere tot 8 weken. We evalueren regelmatig en stemmen het traject af op jouw voortgang."
    },
    {
      "vraag": "Hoe lang is de wachttijd voor een afspraak?",
      "antwoord": "Gemiddeld kun je binnen 3 werkdagen terecht voor een eerste afspraak. Voor intensieve revalidatieprogramma's kunnen we vaak binnen 1-2 weken starten, afhankelijk van beschikbaarheid en planning."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, bij Medifit werk je met een vast multidisciplinair team dat jouw traject begeleidt. Je hebt een hoofdbehandelaar die je hele revalidatie coördineert, zodat je niet telkens opnieuw je verhaal hoeft te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per programma. Voor poliklinische fysiotherapie rekenen we €65-85 per sessie. Intensieve revalidatieprogramma's met verblijf starten vanaf €2.500 per week. Neem contact op voor een persoonlijke offerte op maat."
    }
  ],
  "stappenKop": "Van eerste afspraak tot volledig herstel",
  "stappenSub": "Een helder traject waarin we samen werken aan jouw terugkeer naar een actief leven.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#00a8b5",
    "donker": "#007a83",
    "licht": "#e0f7f9"
  }
} as const;

export type Praktijk = typeof praktijk;
