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
  "naam": "De Praktijk",
  "plaats": "De Bilt",
  "telefoon": "030 220 1432",
  "telefoonHref": "tel:+31302201432",
  "whatsapp": "https://wa.me/31302201432",
  "boekUrl": "https://fysio-depraktijk.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Zorgeloos Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Lage rugpijn, hernia en bewegingsbeperkingen",
      "slug": "rugklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Schouderpijn, frozen shoulder en blessures",
      "slug": "schouder",
      "icoon": "PersonStanding"
    },
    {
      "label": "Sportblessures",
      "sub": "Blessurepreventie en sportmedische begeleiding",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Bekkenklachten",
      "sub": "Bekkeninstabiliteit en zwangerschapsgerelateerde klachten",
      "slug": "bekkenklachten",
      "icoon": "Activity"
    },
    {
      "label": "Chronische pijn",
      "sub": "Langdurige klachten en pijnmanagement",
      "slug": "chronische-pijn",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Marieke",
      "klacht": "Rugklachten",
      "plaats": "De Bilt",
      "sterren": 5,
      "quote": "Na maanden last van mijn onderrug kan ik eindelijk weer normaal bewegen. De therapeut nam echt de tijd om naar mijn verhaal te luisteren en heeft precies uitgezocht waar het probleem zat.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Schouder",
      "plaats": "Bilthoven",
      "sterren": 5,
      "quote": "Mijn schouderpijn leek onoplosbaar, maar hier hebben ze me echt geholpen. Ik kan nu weer gewoon sporten zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Sportblessures",
      "plaats": "Maartensdijk",
      "sterren": 5,
      "quote": "Als fanatiek hardloopster had ik veel last van mijn knie. Dankzij de gerichte aanpak ben ik binnen zes weken weer volledig hersteld en loop ik zelfs beter dan voorheen.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Bekkenklachten",
      "plaats": "De Bilt",
      "sterren": 4,
      "quote": "De bekkenspecialist heeft mijn vrouw enorm geholpen tijdens haar zwangerschap. Eindelijk iemand die weet waar het over gaat.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Chronische pijn",
      "plaats": "Bilthoven",
      "sterren": 5,
      "quote": "Ik had al jaren last van nekpijn en had overal al geweest. Hier namen ze eindelijk de tijd om echt te kijken waar het vandaan kwam. Ik ben zo blij met het resultaat.",
      "toestemming": true
    },
    {
      "naam": "Mark",
      "klacht": "Rugklachten",
      "plaats": "Groenekan",
      "sterren": 5,
      "quote": "Professionele aanpak en altijd dezelfde therapeut die mijn verhaal kent. Dat maakt echt het verschil.",
      "toestemming": true
    },
    {
      "naam": "Annelies",
      "klacht": "Schouder",
      "plaats": "De Bilt",
      "sterren": 5,
      "quote": "Ik kon mijn arm amper nog optillen. Na de behandeling hier kan ik weer alles doen. Ze hebben niet alleen aan de symptomen gewerkt maar ook de oorzaak aangepakt.",
      "toestemming": true
    },
    {
      "naam": "Thomas",
      "klacht": "Sportblessures",
      "plaats": "Bilthoven",
      "sterren": 5,
      "quote": "Super fijne begeleiding na mijn enkelblessure. Ik sta nu sterker op het veld dan ooit.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan alweer maanden in de kast, want bewegen zoals je gewend was zit er gewoon niet meer in.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het al een tijdje uit, weet niet precies waar je terecht kunt en staat er eigenlijk een beetje alleen voor.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je ziet telkens een ander gezicht en moet je verhaal steeds opnieuw vertellen, waardoor niemand je echt lijkt te kennen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar jouw klacht nou precies vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij De Praktijk nemen we de tijd om jouw unieke lichaam te begrijpen. We bundelen onze krachten en specialisaties, zodat je verzekerd bent van persoonlijke aandacht en een behandeling die echt bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Uitgebreide intake en diagnose",
      "tekst": "We luisteren naar jouw verhaal en voeren een grondig onderzoek uit. Met echografie en manuele testen zoeken we de oorzaak van jouw klachten.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op dat aansluit bij jouw doelen en levensstijl. We leggen precies uit waar je klacht vandaan komt en hoe we eraan gaan werken.",
      "duur": "15 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Gerichte behandeling en resultaat",
      "tekst": "We begeleiden je stap voor stap naar herstel met hands-on therapie, gerichte oefeningen en begeleiding. Je hebt altijd dezelfde therapeut die jouw voortgang volgt tot je doel bereikt is.",
      "duur": "6-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Bram Louman",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/Portret-Bram-300x200.png",
      "uitgelicht": true
    },
    {
      "naam": "Sara van der Zwaag",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/portret-Sara-300x200.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Marijke van Zutphen",
      "functie": "Bekkenfysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/Portret-Marijke-300x200.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Ruud Middel",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/portret-Ruud-300x200.jpeg",
      "uitgelicht": true
    },
    {
      "naam": "Leonie de Bree",
      "functie": "Geriatrisch fysiotherapeut & Sportfysiotherapeut",
      "specialisatie": "Geriatrie en Sport",
      "foto": "https://fysio-depraktijk.nl/wp-content/uploads/2026/04/leonie-300x200-1.png",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/Groepsfoto-scaled.jpg",
    "extraFotos": [
      "https://fysio-depraktijk.nl/wp-content/uploads/2024/11/Sfeerimpressie-oefenruimte.jpg"
    ]
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
      "vraag": "Heb ik een verwijzing nodig van de huisarts?",
      "antwoord": "Nee, sinds 2006 kun je in Nederland zonder verwijzing rechtstreeks naar de fysiotherapeut. Je kunt direct een afspraak bij ons maken. Voor vergoeding door je zorgverzekeraar is geen verwijzing nodig, tenzij je aanvullende verzekering dit vereist."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit verschilt per persoon en klacht. Na de intake kunnen we een inschatting maken van het aantal benodigde behandelingen. Gemiddeld zijn bij acute klachten 4-8 sessies voldoende, bij chronische klachten kan het langer duren. We evalueren regelmatig je voortgang."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "In de meeste gevallen kun je binnen 2-3 werkdagen bij ons terecht. Bij spoedgevallen doen we er alles aan om je nog dezelfde of volgende dag in te plannen. Bel ons voor de meest actuele beschikbaarheid."
    },
    {
      "vraag": "Zie ik altijd dezelfde therapeut?",
      "antwoord": "Ja, bij De Praktijk hechten we veel waarde aan continuïteit. Je wordt behandeld door dezelfde therapeut die jouw verhaal kent en je voortgang nauwkeurig kan volgen. Alleen bij afwezigheid door vakantie of ziekte neemt een collega tijdelijk over."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost €42,- per sessie van 30 minuten. De eerste intake duurt langer (60 minuten) en kost €84,-. Aanvullende diensten zoals echografie of personal training kunnen andere tarieven hebben. Neem contact op voor meer informatie."
    }
  ],
  "stappenKop": "Van klacht naar herstel in drie stappen",
  "stappenSub": "We begeleiden je van eerste afspraak tot volledig herstel met een persoonlijke aanpak.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#d64545",
    "donker": "#a83535",
    "licht": "#fef2f2"
  }
} as const;

export type Praktijk = typeof praktijk;
