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
  "telefoon": "0966 49 01 23",
  "telefoonHref": "tel:+31966490123",
  "whatsapp": "https://wa.me/31966490123",
  "boekUrl": "https://www.medifitreha.com/nl/aanmelding-2/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Écht Herstel",
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
      "sub": "Herstel na langdurige COVID-klachten",
      "slug": "long-covid",
      "icoon": "Activity"
    },
    {
      "label": "MS Revalidatie",
      "sub": "Neurologische revalidatie en HSCT-nazorg",
      "slug": "ms-revalidatie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie na operatie",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "Chronische pijn",
      "sub": "Functioneel herstel bij langdurige pijnklachten",
      "slug": "chronische-pijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "Lifestyle",
      "sub": "Programma voor prestaties en gezonde levensstijl",
      "slug": "lifestyle-programma",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Erik",
      "klacht": "MS Revalidatie",
      "plaats": "Alicante",
      "sterren": 5,
      "quote": "Ik kon weer stappen zetten die ik niet meer voor mogelijk hield. Het team begreep precies wat ik nodig had en bouwde het traject samen met mij op.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Burn-out",
      "plaats": "Benidorm",
      "sterren": 5,
      "quote": "Na maanden uitputting vond ik hier eindelijk rust en structuur. Ik ben niet alleen fysiek, maar ook mentaal sterker teruggekomen.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Heup & Knie",
      "plaats": "Denia",
      "sterren": 5,
      "quote": "Binnen drie weken na mijn knieoperatie liep ik al zonder krukken. De begeleiding was intensief maar precies wat ik nodig had om snel vooruit te komen.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Long COVID",
      "plaats": "Valencia",
      "sterren": 4,
      "quote": "Mijn vermoeidheid leek eindeloos, maar hier kreeg ik eindelijk een plan dat bij mij paste. Stap voor stap bouwde ik mijn energie weer op.",
      "toestemming": true
    },
    {
      "naam": "Paul",
      "klacht": "Chronische pijn",
      "plaats": "Teulada",
      "sterren": 5,
      "quote": "Jarenlang had ik overal pijn zonder duidelijke diagnose. Hier keken ze verder dan alleen de symptomen en vonden ze echt de oorzaak.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Lifestyle",
      "plaats": "Moraira",
      "sterren": 5,
      "quote": "Ik wilde mijn gezondheid structureel verbeteren en dat is gelukt. Het programma gaf me inzicht en tools om op lange termijn vitaal te blijven.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "MS Revalidatie",
      "plaats": "Gran Alacant",
      "sterren": 5,
      "quote": "De passie van het team en hun oog voor detail maakten alle verschil. Ik voelde me niet alleen gehoord, maar echt begrepen.",
      "toestemming": true
    },
    {
      "naam": "Anouk",
      "klacht": "Burn-out",
      "plaats": "Albir",
      "sterren": 5,
      "quote": "Ik kwam binnen met lege batterijen en vertrok met een helder plan en nieuwe energie. Het intensieve traject bracht me terug bij mezelf.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast en de activiteiten waar je vroeger energie van kreeg, voelen nu als een onbereikbare berg.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het uitzoeken steeds uit omdat je niet weet waar je naartoe moet, terwijl de onzekerheid en de klachten alleen maar toenemen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer dat je ergens komt, zie je een ander gezicht en moet je je verhaal opnieuw vertellen zonder dat iemand echt de rode draad pakt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitlegt waar jouw klacht vandaan komt of waarom dit specifiek bij jou zou werken.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit werken we anders: we nemen de tijd om écht te begrijpen wat er speelt en bouwen een persoonlijk traject op waarin je stap voor stap weer vooruitgaat. Met duidelijke uitleg, een vaste begeleider en een plan dat past bij jouw situatie.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en persoonlijke diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek en onderzoek om precies te begrijpen wat er bij jou speelt. Je krijgt een vaste therapeut die je door het hele traject begeleidt.",
      "duur": "1-2 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Jouw persoonlijke behandelplan",
      "tekst": "Op basis van de intake stellen we samen met jou een gestructureerd plan op, afgestemd op jouw klachten, doelen en mogelijkheden. Je weet precies wat je kunt verwachten.",
      "duur": "Binnen 24 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en meetbaar resultaat",
      "tekst": "We begeleiden je intensief door het traject met regelmatige evaluaties en bijsturing waar nodig. Je ziet stap voor stap vooruitgang naar jouw doelen.",
      "duur": "2-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Dr. José Martínez",
      "functie": "Revalidatiearts",
      "specialisatie": "Neurologische revalidatie",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Mart_Jan-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "Ana van der Berg",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Post-operatieve revalidatie",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Miguel-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "Marjolein Jansen",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Lifestyle en burn-out",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Gerard-768x767.png",
      "uitgelicht": true
    },
    {
      "naam": "Maria López",
      "functie": "Ergotherapeut",
      "specialisatie": "Chronische pijn",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Laura-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "Tom Bakker",
      "functie": "Manueel therapeut",
      "specialisatie": "Orthopedische klachten",
      "foto": "https://www.medifitreha.com/wp-content/uploads/2024/08/Berrie-768x768.png",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Hendrikx",
      "functie": "Longfysiotherapeut",
      "specialisatie": "Long COVID en COPD",
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
      "antwoord": "Voor de meeste programma's heb je geen verwijzing nodig. Je kunt jezelf aanmelden of contact met ons opnemen voor intake. Voor bepaalde klinische trajecten werken we samen met verwijzende artsen."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat hangt af van je klacht en doelen. Na de intake stellen we een persoonlijk plan op waarin we aangeven hoeveel sessies je nodig hebt. Gemiddeld varieert een traject van 2 tot 12 weken."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om binnen 3 werkdagen een intakegesprek in te plannen. Voor spoedgevallen of post-operatieve revalidatie kunnen we vaak nog sneller schakelen."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, je krijgt vanaf de intake een vaste therapeut die jouw traject begeleidt. Deze therapeut kent jouw verhaal en volgt je voortgang van begin tot eind, zodat je niet steeds opnieuw hoeft uit te leggen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per programma. Een intakegesprek kost €95. Vervolgsessies variëren van €65 tot €85 per behandeling. Voor intensieve herstelprogramma's bieden we pakketten aan. Neem contact op voor een persoonlijke offerte."
    }
  ],
  "stappenKop": "Jouw traject naar herstel",
  "stappenSub": "Van eerste afspraak tot meetbaar resultaat: een duidelijk proces met persoonlijke begeleiding.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#2563eb",
    "donker": "#1e40af",
    "licht": "#eff6ff"
  }
} as const;

export type Praktijk = typeof praktijk;
