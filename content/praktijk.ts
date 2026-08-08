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
  "telefoon": "0966 49 50 00",
  "telefoonHref": "tel:+31966495000",
  "whatsapp": "https://wa.me/31966495000",
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
      "sub": "Revalidatie na langdurige COVID-klachten",
      "slug": "long-covid",
      "icoon": "HeartPulse"
    },
    {
      "label": "Neurologisch",
      "sub": "MS, hersenschudding en chronische pijn",
      "slug": "neurologisch",
      "icoon": "Brain"
    },
    {
      "label": "Heup & Knie",
      "sub": "Post-operatieve revalidatie met medische begeleiding",
      "slug": "heup-knie",
      "icoon": "Bone"
    },
    {
      "label": "COPD / Long",
      "sub": "Longrevalidatie voor betere ademhalingsfunctie",
      "slug": "copd-long",
      "icoon": "Activity"
    },
    {
      "label": "Geriatrisch",
      "sub": "Mobiliteit en zelfstandigheid voor ouderen",
      "slug": "geriatrisch",
      "icoon": "PersonStanding"
    }
  ],
  "reviews": [
    {
      "naam": "Robert",
      "klacht": "Burn-out",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Na maanden uitputting eindelijk weer energie. Het programma gaf me structuur en overzicht. Ik voel me weer mens.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Long COVID",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Mijn conditie is enorm verbeterd. Ik kan weer wandelen zonder direct buiten adem te zijn. Het team begreep precies waar ik doorheen ging.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Heup & Knie",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "Binnen drie weken kon ik weer normaal lopen. De begeleiding was intensief en professioneel.",
      "toestemming": true
    },
    {
      "naam": "Maria",
      "klacht": "Neurologisch",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Mijn MS-klachten zijn veel beter beheersbaar nu. Ik heb weer grip op mijn leven gekregen.",
      "toestemming": true
    },
    {
      "naam": "Piet",
      "klacht": "COPD / Long",
      "plaats": "Groningen",
      "sterren": 4,
      "quote": "De longoefeningen hebben echt geholpen. Ik adem rustiger en kan weer meer activiteiten aan.",
      "toestemming": true
    },
    {
      "naam": "Elisabeth",
      "klacht": "Geriatrisch",
      "plaats": "Den Haag",
      "sterren": 5,
      "quote": "Op mijn 78e durfde ik weer zelfstandig boodschappen te doen. Dankzij de begeleiding voel ik me veel zekerder.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Burn-out",
      "plaats": "Leiden",
      "sterren": 5,
      "quote": "Het hersteltraject gaf me inzicht in mijn grenzen. Ik werk nu zonder constant uitgeput te zijn.",
      "toestemming": true
    },
    {
      "naam": "Annemarie",
      "klacht": "Neurologisch",
      "plaats": "Almere",
      "sterren": 5,
      "quote": "Na mijn hersenschudding bleef ik met klachten zitten. Hier kreeg ik eindelijk de juiste aandacht en herstel.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt je favoriete sporten en activiteiten moeten laten liggen omdat je lichaam niet meer meewerkt zoals je gewend was.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je twijfelt of je wel op de juiste plek terechtkomt en hoe lang je nog moet wachten voordat er echt iets verandert.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Telkens een ander gezicht, en elke keer weer opnieuw uitleggen wat er aan de hand is en waar je klachten vandaan komen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt écht uit waar de oorzaak van je klacht ligt en wat je echt nodig hebt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Medifit krijg je een vast team dat de tijd neemt om de oorzaak te achterhalen en je stap voor stap naar herstel begeleidt. Met duidelijkheid, persoonlijke aandacht en medische expertise.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We nemen uitgebreid de tijd om jouw klachten, medische voorgeschiedenis en persoonlijke situatie in kaart te brengen. Samen bepalen we wat nodig is voor jouw herstel.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we een op maat gemaakt revalidatietraject samen. Je weet precies wat je kunt verwachten en hoe we naar jouw doel toewerken.",
      "duur": "1-2 weken voorbereiding",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je wordt begeleid door een vast team van specialisten die je voortgang monitoren en het programma waar nodig bijstellen. Stap voor stap werk je toe naar duurzaam herstel.",
      "duur": "2-8 weken traject",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Dr. Jan van der Berg",
      "functie": "Revalidatiearts",
      "specialisatie": "Neurologische revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Marjolein Jansen",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Post-operatieve revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "José Martinez",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Hersteltrajecten burn-out",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Ana Perez",
      "functie": "Manueel therapeut",
      "specialisatie": "Chronische pijnbehandeling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Pieter de Vries",
      "functie": "Ergotherapeut",
      "specialisatie": "Arbeidsreïntegratie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Maria Gonzalez",
      "functie": "Fysiotherapeut",
      "specialisatie": "Geriatrische revalidatie",
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
      "antwoord": "Voor de meeste van onze revalidatieprogramma's is geen verwijzing nodig. Je kunt je direct aanmelden via onze website of contact met ons opnemen. Voor specifieke medische trajecten kan een verwijsbrief van je huisarts of specialist wel nodig zijn."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit is afhankelijk van je klacht en hersteldoelen. Gemiddeld bestaat een intensief revalidatietraject uit 2 tot 8 weken met dagelijkse begeleiding. Tijdens de intake bespreken we een realistisch behandelplan op maat."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om binnen 3 tot 5 werkdagen een intakegesprek in te plannen. Voor spoedgevallen of complexe situaties kijken we naar kortere wachttijden. Neem contact met ons op voor de actuele beschikbaarheid."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, je wordt gedurende het hele traject begeleid door een vast team van specialisten. Zo hoef je je verhaal niet steeds opnieuw te vertellen en bouwen we samen aan jouw herstel. Continuïteit staat bij ons centraal."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Onze intensieve revalidatieprogramma's variëren van €2.500 tot €8.000 afhankelijk van de duur en intensiteit. We bieden ook poliklinische behandelingen aan vanaf €75 per sessie. Neem contact op voor een gedetailleerde prijsopgave voor jouw situatie."
    }
  ],
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste gesprek tot duurzaam resultaat: zo verloopt jouw revalidatietraject bij Medifit.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#00a0a0",
    "donker": "#007a7a",
    "licht": "#e6f7f7"
  }
} as const;

export type Praktijk = typeof praktijk;
