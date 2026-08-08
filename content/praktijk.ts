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
  "telefoon": "0966 474 820",
  "telefoonHref": "tel:+31966474820",
  "whatsapp": "https://wa.me/31966474820",
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
      "label": "MS & Neurologie",
      "sub": "Functioneel herstel bij neurologische aandoeningen",
      "slug": "ms-neurologie",
      "icoon": "Activity"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie na orthopedische ingrepen",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "Chronische pijn",
      "sub": "Pijnrevalidatie met multidisciplinaire aanpak",
      "slug": "chronische-pijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "COPD & Longen",
      "sub": "Longrevalidatie voor betere ademhaling en conditie",
      "slug": "copd-longen",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Marc",
      "klacht": "Burn-out",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Ik kwam volledig uitgeput aan en vertrok met een duidelijk plan en nieuw perspectief. Het traject heeft mij geleerd hoe ik mijn grenzen kan bewaken.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Long COVID",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden vermoeidheid eindelijk iemand die naar me luisterde. De opbouw was precies goed en ik voel me weer mezelf.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Heup & Knie",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "De revalidatie na mijn heupoperatie was intensief maar zeer effectief. Ik loop nu beter dan voor de operatie.",
      "toestemming": true
    },
    {
      "naam": "Petra",
      "klacht": "MS & Neurologie",
      "plaats": "Eindhoven",
      "sterren": 4,
      "quote": "Het team begreep mijn MS-klachten en paste het programma telkens aan. Ik heb meer balans en vertrouwen gekregen in mijn lichaam.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Chronische pijn",
      "plaats": "Den Haag",
      "sterren": 5,
      "quote": "Jarenlang rugpijn en eindelijk een aanpak die werkt. Ze keken verder dan alleen de pijn en pakten de oorzaak aan.",
      "toestemming": true
    },
    {
      "naam": "Ria",
      "klacht": "COPD & Longen",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Dankzij de longrevalidatie kan ik weer trap lopen zonder buiten adem te raken. De begeleiding was persoonlijk en deskundig.",
      "toestemming": true
    },
    {
      "naam": "Frank",
      "klacht": "Burn-out",
      "plaats": "Haarlem",
      "sterren": 5,
      "quote": "Het multidisciplinaire team zorgde ervoor dat ik zowel fysiek als mentaal weer sterker werd. Een traject dat echt werkt.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Heup & Knie",
      "plaats": "Maastricht",
      "sterren": 5,
      "quote": "Na mijn knieoperatie twijfelde ik of ik ooit weer zou kunnen wandelen. Nu loop ik elke dag en voel me fit.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je favoriete activiteiten liggen stil omdat je lichaam niet meer meewerkt zoals je gewend was.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je weet dat je hulp nodig hebt, maar uitstellen voelt makkelijker dan de stap nemen naar een onbekende omgeving.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer een ander gezicht, steeds opnieuw je verhaal vertellen zonder dat iemand echt de rode draad ziet.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt oefeningen mee, maar niemand neemt de tijd om echt uit te zoeken waar jouw klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit werken we anders: met een vast team dat jouw verhaal kent en een gestructureerd traject waarin we samen de oorzaak aanpakken. Zodat herstel niet alleen écht werkt, maar ook blijft werken.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en uitgebreide diagnose",
      "tekst": "We starten met een grondige intake waarbij we niet alleen naar je klacht kijken, maar ook naar de achterliggende oorzaken. Samen stellen we vast wat jouw persoonlijke herstel vraagt.",
      "duur": "1-2 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose ontwikkelen we een op maat gemaakt revalidatieplan. Je weet precies welke stappen je gaat zetten en welk resultaat je mag verwachten.",
      "duur": "2-4 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en duurzaam resultaat",
      "tekst": "Onder begeleiding van je vaste team werk je stap voor stap aan herstel. We evalueren regelmatig en passen waar nodig aan, zodat je met vertrouwen terugkeert naar je dagelijks leven.",
      "duur": "4-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Dr. Maria Gonzalez",
      "functie": "Revalidatiearts",
      "specialisatie": "Neurologie en chronische pijn",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Thomas van Bergen",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Orthopedische revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Ana Martínez",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Post-COVID revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "José Ramirez",
      "functie": "Manueel therapeut",
      "specialisatie": "Rug- en nekklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Marjolein de Vries",
      "functie": "Ergotherapeut",
      "specialisatie": "Burn-out en arbeidsreïntegratie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Linda Jansen",
      "functie": "Longfysiotherapeut",
      "specialisatie": "COPD en longrevalidatie",
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
      "antwoord": "Voor de meeste revalidatieprogramma's is een verwijzing van je huisarts of specialist gewenst, maar niet altijd verplicht. Neem contact met ons op om te bespreken wat in jouw situatie nodig is."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake stellen we een persoonlijk behandelplan op waarin het verwachte aantal sessies en de duur van het traject staan. Gemiddeld duurt een traject 4 tot 12 weken."
    },
    {
      "vraag": "Hoe lang is de wachttijd voor een afspraak?",
      "antwoord": "We streven ernaar om nieuwe patiënten binnen 3 tot 5 dagen te kunnen ontvangen voor een intakegesprek. Voor spoedgevallen kijken we altijd naar mogelijkheden om sneller te starten."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij Medifit werk je met een vast team dat jouw verhaal en doelen kent. Je hebt één hoofdbehandelaar die je traject coördineert, ondersteund door specialisten waar nodig."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren afhankelijk van het type behandeling en de duur van het programma. We bieden transparante prijzen en bespreken dit altijd vooraf met je. Neem contact op voor een persoonlijke offerte."
    }
  ],
  "stappenKop": "Jouw traject naar herstel",
  "stappenSub": "Van eerste afspraak tot duurzaam resultaat: een duidelijk pad met persoonlijke begeleiding.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#00a9ce",
    "donker": "#007a96",
    "licht": "#e6f7fb"
  }
} as const;

export type Praktijk = typeof praktijk;
