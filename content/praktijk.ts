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
      "label": "MS & HSCT",
      "sub": "Neurologische revalidatie na stamcelbehandeling",
      "slug": "ms-hsct",
      "icoon": "Activity"
    },
    {
      "label": "Long COVID",
      "sub": "Herstel van langdurige COVID-klachten",
      "slug": "long-covid",
      "icoon": "HeartPulse"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie na orthopedische ingreep",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "Chronische pijn",
      "sub": "Pijnrevalidatie met focus op functioneel herstel",
      "slug": "chronische-pijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "Lifestyle",
      "sub": "Performance- en levensstijlprogramma",
      "slug": "lifestyle",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Henk",
      "klacht": "MS & HSCT",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Na mijn stamcelbehandeling was ik bang dat ik nooit meer zelfstandig zou functioneren. Het revalidatieteam heeft me stap voor stap geholpen. Nu kan ik weer lopen en heb ik mijn leven terug.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Burn-out",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Ik was compleet uitgeput en zag geen uitweg meer. Het gestructureerde programma gaf me de rust en begeleiding die ik nodig had om weer grip te krijgen op mijn leven.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Heup & Knie",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Na mijn knieoperatie durfde ik nauwelijks te bewegen. Dankzij de persoonlijke begeleiding loop ik nu weer zonder krukken en kan ik zelfs fietsen.",
      "toestemming": true
    },
    {
      "naam": "Maria",
      "klacht": "Long COVID",
      "plaats": "Den Haag",
      "sterren": 4,
      "quote": "Maanden na corona bleef ik moe en benauwd. Het revalidatieprogramma heeft me geholpen om weer energie op te bouwen. Ik voel me eindelijk weer mezelf.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Chronische pijn",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "Jarenlang rugpijn had mijn leven overgenomen. Door de gerichte aanpak en de aandacht voor de oorzaak heb ik nu veel minder pijn en kan ik weer functioneren.",
      "toestemming": true
    },
    {
      "naam": "Els",
      "klacht": "Lifestyle",
      "plaats": "Haarlem",
      "sterren": 5,
      "quote": "Ik wilde fitter worden maar wist niet waar te beginnen. Het programma was precies op mijn niveau afgestemd en ik voel me nu sterker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Dirk",
      "klacht": "MS & HSCT",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "De combinatie van medische expertise en persoonlijke aandacht maakte het verschil. Ik heb veel meer controle over mijn lichaam teruggekregen.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Burn-out",
      "plaats": "Breda",
      "sterren": 5,
      "quote": "Eindelijk een plek waar ze écht begrijpen wat burn-out met je doet. Ze namen de tijd om naar me te luisteren en hielpen me weer op te bouwen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je trainingsschoenen staan al maanden in de kast, want bewegen zoals je gewend was lijkt onbereikbaar ver weg.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je weet dat uitstellen geen oplossing is, maar de onzekerheid over waar je terecht kunt houdt je tegen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een ander gezicht, je verhaal steeds opnieuw vertellen – niemand die je echt kent en begrijpt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt écht uit waar jouw klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit werken we anders: één vast team dat de tijd neemt om je situatie te begrijpen en een persoonlijk traject op te stellen. Met duidelijke uitleg en structuur, zodat je precies weet waar je aan toe bent.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en analyse",
      "tekst": "We nemen uitgebreid de tijd om je verhaal te horen, je situatie in kaart te brengen en de oorzaak van je klachten te onderzoeken. Medische expertise en persoonlijke aandacht komen samen in een grondige analyse.",
      "duur": "1-2 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk revalidatieplan",
      "tekst": "Op basis van de intake stellen we samen met jou een helder behandelplan op, afgestemd op jouw doelen en mogelijkheden. Je weet precies wat je kunt verwachten en welke stappen we gaan zetten.",
      "duur": "1-4 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Begeleiding naar resultaat",
      "tekst": "Je vaste team begeleidt je stap voor stap door het revalidatietraject. We monitoren je voortgang, passen waar nodig aan en bouwen samen toe naar blijvend herstel en zelfstandigheid.",
      "duur": "4-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Mark van der Berg",
      "functie": "Revalidatiearts",
      "specialisatie": "Neurologische revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Laura Jansen",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Post-operatieve revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Thomas de Vries",
      "functie": "Manueel therapeut",
      "specialisatie": "Chronische pijnbehandeling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Bakker",
      "functie": "Ergotherapeut",
      "specialisatie": "Burn-out en hersenprogramma's",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Robert Hendriks",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Lifestyle en performance",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Emma Visser",
      "functie": "Fysiotherapeut",
      "specialisatie": "Long- en hartrevalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_6_hwafmn.jpg",
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
      "antwoord": "Voor veel van onze revalidatieprogramma's is geen verwijzing nodig. Je kunt direct contact met ons opnemen voor een intake. Voor specifieke programma's zoals MS-revalidatie of geriatrische revalidatie werken we vaak samen met verwijzende artsen."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit is afhankelijk van je specifieke situatie en doelen. Na de intake stellen we samen een persoonlijk revalidatieplan op waarin we aangeven hoeveel behandelingen nodig zijn. Gemiddeld duurt een traject 4 tot 12 weken, afhankelijk van de complexiteit."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "We streven ernaar om binnen 3 werkdagen een intakegesprek in te plannen. Voor urgente situaties kunnen we vaak nog sneller schakelen. Na de intake kunnen we direct starten met het revalidatietraject."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, je wordt begeleid door een vast multidisciplinair team dat jouw situatie kent en volgt. Dit zorgt voor continuïteit en persoonlijke aandacht gedurende het hele traject. Je hoeft je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per programma. Een intake gesprek kost gemiddeld €95. Behandelsessies variëren van €65 tot €95 per sessie, afhankelijk van de intensiteit en duur. Voor intensieve revalidatieprogramma's met verblijf bieden we pakketten aan vanaf €2.500 per week. Neem contact op voor een persoonlijke prijsopgave."
    }
  ],
  "stappenKop": "Van eerste gesprek tot blijvend resultaat",
  "stappenSub": "Een helder traject waarin jouw herstel centraal staat, met persoonlijke begeleiding van intake tot nazorg.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#0891b2",
    "donker": "#0e7490",
    "licht": "#ecfeff"
  }
} as const;

export type Praktijk = typeof praktijk;
