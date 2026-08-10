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
  "naam": "Xpert Clinics",
  "plaats": "Amstelveen",
  "telefoon": "020 799 1200",
  "telefoonHref": "tel:+31207991200",
  "whatsapp": "https://wa.me/31207991200",
  "boekUrl": "https://booking.xpertclinics.nl/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Snel Herstel",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 320,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Heup",
      "sub": "Heupartrose en heupklachten",
      "slug": "heup",
      "icoon": "Bone"
    },
    {
      "label": "Knie",
      "sub": "Knieartrose en knieklachten",
      "slug": "knie",
      "icoon": "Activity"
    },
    {
      "label": "Hand & Pols",
      "sub": "Carpaal tunnel en triggervinger",
      "slug": "hand-pols",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Schouderklachten en protheses",
      "slug": "schouder",
      "icoon": "Dumbbell"
    },
    {
      "label": "Voet & Enkel",
      "sub": "Hallux valgus en enkelklachten",
      "slug": "voet-enkel",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra V.",
      "klacht": "Heup",
      "plaats": "Amstelveen",
      "sterren": 5,
      "quote": "Ik kon eindelijk weer wandelen zonder pijn. De uitleg was helder en ik voelde me goed begeleid.",
      "toestemming": true
    },
    {
      "naam": "Martin K.",
      "klacht": "Knie",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na de behandeling kon ik weer fietsen. Ik was positief verrast hoe snel het allemaal ging.",
      "toestemming": true
    },
    {
      "naam": "Anouk B.",
      "klacht": "Hand & Pols",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "De tintelingen zijn weg en ik kan weer gewoon werken. Heel fijn dat het zo snel kon.",
      "toestemming": true
    },
    {
      "naam": "Peter H.",
      "klacht": "Schouder",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Ik kan weer bovenhands gooien en ben actief in de tuin. Echt een verschil met hoe het was.",
      "toestemming": true
    },
    {
      "naam": "Judith M.",
      "klacht": "Voet & Enkel",
      "plaats": "Eindhoven",
      "sterren": 4,
      "quote": "Ik loop weer normaal en draag eindelijk weer leuke schoenen. Blij met het resultaat.",
      "toestemming": true
    },
    {
      "naam": "Rob S.",
      "klacht": "Knie",
      "plaats": "Rozendaal",
      "sterren": 5,
      "quote": "De operatie verliep soepel en ik stond er zelf versteld van hoe snel ik kon lopen. Alles klopte.",
      "toestemming": true
    },
    {
      "naam": "Marieke T.",
      "klacht": "Heup",
      "plaats": "Enschede",
      "sterren": 5,
      "quote": "Ik wilde snel geholpen worden en dat lukte. Binnen drie weken kon ik terecht en nu kan ik alles weer.",
      "toestemming": true
    },
    {
      "naam": "Erik L.",
      "klacht": "Hand & Pols",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Triggervinger was snel verholpen. De kliniek was vriendelijk en alles voelde vertrouwd.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan in de kast omdat bewegen niet meer lukt zoals vroeger en dat deel van je leven stilstaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het uit omdat je niet weet waar je terechtkunst en je er eigenlijk alleen voor staat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je ziet telkens een ander gezicht en moet steeds opnieuw uitleggen wat er aan de hand is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar de klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Xpert Clinics krijg je duidelijke uitleg van gespecialiseerde therapeuten die echt de tijd nemen om naar je te luisteren. We zoeken samen naar de oorzaak en zorgen dat je snel weer kunt doen wat je wilt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "Je komt binnen bij een vast team en krijgt direct uitgebreide uitleg over wat er aan de hand is. We nemen de tijd om je verhaal te horen en te onderzoeken.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op dat past bij jouw situatie en doelen. Je weet precies wat je kunt verwachten.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "We voeren de behandeling uit met aandacht voor kwaliteit en snelheid. Je wordt begeleid tot je weer kunt doen wat je wilt en je leven weer oppakt.",
      "duur": "Afhankelijk van behandeling",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Ja, voor behandeling bij Xpert Clinics heb je een verwijzing van je huisarts nodig. Met deze verwijzing wordt de behandeling vergoed door je zorgverzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Tijdens de intake bespreken we een behandelplan waarin we aangeven hoeveel afspraken je kunt verwachten en wat het doel is."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Bij Xpert Clinics werken we met korte wachttijden. Gemiddeld kun je binnen 1 tot 5 dagen terecht voor een eerste afspraak, afhankelijk van de urgentie en beschikbaarheid."
    },
    {
      "vraag": "Zie ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij Xpert Clinics word je behandeld door een vast team van gespecialiseerde zorgverleners. Zo hoef je je verhaal niet steeds opnieuw te vertellen en krijg je continuïteit in je behandeling."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Als je niet verzekerd bent of als de behandeling niet vergoed wordt, kun je contact met ons opnemen voor een vrijblijvende prijsopgave. De kosten verschillen per type behandeling."
    }
  ],
  "stappenKop": "Van eerste afspraak tot snel herstel",
  "stappenSub": "We begeleiden je stap voor stap naar het resultaat dat je wilt bereiken.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#0066CC",
    "donker": "#004C99",
    "licht": "#E6F2FF"
  }
} as const;

export type Praktijk = typeof praktijk;
