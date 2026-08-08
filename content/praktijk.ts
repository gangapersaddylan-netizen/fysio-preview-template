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
  "telefoon": "0966 491 234",
  "telefoonHref": "tel:+31966491234",
  "whatsapp": "https://wa.me/31966491234",
  "boekUrl": "https://www.medifitreha.com/nl/aanmelding-2/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Herstel Terugwinnen",
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
      "sub": "Herstel van langdurige corona-gerelateerde klachten",
      "slug": "long-covid",
      "icoon": "HeartPulse"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie na orthopedische ingrepen",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "MS Revalidatie",
      "sub": "Neurologische revalidatie voor Multiple Sclerose",
      "slug": "ms-revalidatie",
      "icoon": "Activity"
    },
    {
      "label": "Chronische pijn",
      "sub": "Functioneel herstel bij aanhoudende pijnklachten",
      "slug": "chronische-pijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "COPD & Longen",
      "sub": "Longrevalidatie voor verbeterde ademhaling",
      "slug": "copd-longrevalidatie",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Armand",
      "klacht": "Burn-out",
      "plaats": "Herzberg",
      "sterren": 5,
      "quote": "Door het trainen naar mijn behoefte en maatwerk heb ik de revalidatie als zeer effectief ervaren. Ik voel me eindelijk weer mezelf.",
      "toestemming": true
    },
    {
      "naam": "Bert",
      "klacht": "MS Revalidatie",
      "plaats": "Huizingh",
      "sterren": 5,
      "quote": "Het enthousiasme en de passie spatten eraf. De persoonlijke aandacht en oog voor mijn omstandigheden van dag tot dag maakten het verschil. Ik voel me een paar vrienden rijker.",
      "toestemming": true
    },
    {
      "naam": "Michael",
      "klacht": "Heup & Knie",
      "plaats": "Moraira",
      "sterren": 5,
      "quote": "Ik kwam in een rolstoel aan en vertrok met alleen een wandelstok. Veel beter dan we ooit hadden gehoopt!",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Long COVID",
      "plaats": "Denia",
      "sterren": 5,
      "quote": "Na maanden vermoeidheid ben ik hier echt vooruitgegaan. Het traject was intensief maar zeer effectief.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Chronische pijn",
      "plaats": "Valencia",
      "sterren": 5,
      "quote": "Ik had overal hulp gezocht zonder resultaat. Hier keken ze verder dan symptomen en pakten de oorzaak aan. Ik kan weer functioneren.",
      "toestemming": true
    },
    {
      "naam": "Maria",
      "klacht": "COPD & Longen",
      "plaats": "Benidorm",
      "sterren": 4,
      "quote": "De longrevalidatie heeft mijn ademhaling enorm verbeterd. Ik durf weer activiteiten aan die ik lang vermeed.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Burn-out",
      "plaats": "Teulada",
      "sterren": 5,
      "quote": "Het gestructureerde programma en de rust van de omgeving hielpen me echt herstellen. Ik ben met een compleet ander gevoel naar huis gegaan.",
      "toestemming": true
    },
    {
      "naam": "Eline",
      "klacht": "MS Revalidatie",
      "plaats": "Gran Alacant",
      "sterren": 5,
      "quote": "De expertise op neurologisch gebied is hier echt aanwezig. Ik heb meer controle over mijn lichaam teruggekregen dan ik voor mogelijk hield.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je leven staat stil omdat dagelijkse activiteiten te veel energie kosten en je niet meer kunt bewegen zoals vroeger.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt hulp nodig maar weet niet waar je terecht kunt, en uitstellen maakt de onzekerheid alleen maar groter.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt bij verschillende therapeuten aangeklopt maar moest steeds opnieuw uitleggen wat er aan de hand is, zonder continuïteit.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt algemene oefeningen mee zonder dat iemand écht uitzoekt waar jouw klacht vandaan komt en wat jouw lichaam nodig heeft.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit werken we met een vast multidisciplinair team dat de tijd neemt om jouw situatie grondig te begrijpen. We zoeken samen naar de oorzaak en bouwen een persoonlijk hersteltraject op dat écht bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We nemen uitgebreid de tijd om jouw klachten, medische voorgeschiedenis en doelen te bespreken. Ons multidisciplinaire team stelt een grondige diagnose en brengt de oorzaak van jouw klachten in kaart.",
      "duur": "1-2 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een op maat gemaakt revalidatietraject op. Je weet precies wat je kunt verwachten en welke stappen we gaan zetten richting herstel.",
      "duur": "Week 1",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je werkt intensief met hetzelfde vaste team van specialisten die jouw voortgang nauwlettend volgen. Stap voor stap werk je toe naar functioneel herstel en terugkeer naar het leven dat je wilt leiden.",
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
      "naam": "Maria Jansen",
      "functie": "Bewegingstherapeut",
      "specialisatie": "Chronische pijn",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Marjolein de Vries",
      "functie": "Ergotherapeut",
      "specialisatie": "Burn-out en stress",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Tom Hendriksen",
      "functie": "Manueel therapeut",
      "specialisatie": "Orthopedie en sportletsels",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Bakker",
      "functie": "Longrevalidatie specialist",
      "specialisatie": "COPD en Long COVID",
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
      "vraag": "Heb ik een verwijzing nodig voor revalidatie?",
      "antwoord": "Voor veel van onze revalidatieprogramma's is een verwijzing van je huisarts of specialist wenselijk maar niet altijd verplicht. Je kunt ook zelfstandig contact met ons opnemen voor een intakegesprek, waarna we samen bepalen welk traject het beste bij jou past."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "De duur van het traject is afhankelijk van jouw specifieke klachten en doelen. Intensieve herstelprogramma's variëren vaak van 2 tot 12 weken. Tijdens de intake bespreken we een realistisch tijdspad en evalueren we regelmatig de voortgang."
    },
    {
      "vraag": "Hoe lang is de wachttijd voor een eerste afspraak?",
      "antwoord": "Gemiddeld kun je binnen 3 tot 5 dagen terecht voor een intakegesprek. Voor urgente gevallen doen we ons best om sneller ruimte te vinden in de planning."
    },
    {
      "vraag": "Werk ik steeds met dezelfde therapeut?",
      "antwoord": "Ja, bij Medifit werken we met vaste behandelteams. Je hebt een hoofdbehandelaar die jouw traject begeleidt en samenwerkt met andere specialisten binnen ons multidisciplinaire team. Zo hoef je jouw verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten verschillen per programma en locatie. Een intakegesprek kost gemiddeld €85-120, een behandelsessie tussen de €65-95. Voor intensieve revalidatieprogramma's bieden we pakketten aan. Neem contact op voor een persoonlijke offerte op maat."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot functioneel herstel: een duidelijk, persoonlijk traject met vaste begeleiding.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#00a9ce",
    "donker": "#007a96",
    "licht": "#e6f7fb"
  }
} as const;

export type Praktijk = typeof praktijk;
