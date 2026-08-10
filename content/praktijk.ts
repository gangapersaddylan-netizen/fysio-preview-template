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
  "naam": "fysiosportief",
  "plaats": "Groningen",
  "telefoon": "050 549 4800",
  "telefoonHref": "tel:+31505494800",
  "whatsapp": "https://wa.me/31505494800",
  "boekUrl": "https://fysiosportiefgroningen.nl/contact/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Beweeg Zorgeloos",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 285,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Lage rugpijn, nekklachten of hernia: we zoeken de oorzaak en helpen je stap voor stap pijnvrij bewegen",
      "slug": "rugklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Knie-, enkel- of schouderblessure door sporten? We zorgen dat je veilig terugkeert naar je sport",
      "slug": "sportblessure",
      "icoon": "Activity"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, schouderpijn of klachten na operatie: herstel bewegingsvrijheid en kracht",
      "slug": "schouderklachten",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hardlopen",
      "sub": "Blijvende klachten bij hardlopen? We analyseren je looppatroon en voorkomen terugkeer van de blessure",
      "slug": "hardloopblessure",
      "icoon": "PersonStanding"
    },
    {
      "label": "Kinderfysio",
      "sub": "Ontwikkelingsvertraging, houding of coördinatie bij kinderen: speelse begeleiding op maat",
      "slug": "kinderfysiotherapie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Manueel",
      "sub": "Gewrichtsklachten, hoofdpijn of stijfheid: met gerichte hands-on technieken herstellen we mobiliteit",
      "slug": "manuele-therapie",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Lisanne",
      "klacht": "Rugklachten",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Ik liep maanden met rugpijn en durfde bijna niks meer. Na een paar weken behandeling kon ik weer gewoon bewegen en voelde ik me eindelijk begrepen.",
      "toestemming": true
    },
    {
      "naam": "Thijs",
      "klacht": "Sportblessure",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Mijn knie deed pijn na voetballen. De fysiotherapeut nam echt de tijd om uit te zoeken waar het vandaan kwam en nu train ik weer zonder zorgen.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Schouder",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Mijn schouder zat helemaal op slot. Dankzij de behandeling kan ik weer normaal bewegen en heb ik geen pijn meer bij dagelijkse dingen.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Hardlopen",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Ik bleef maar last houden bij hardlopen. Nu is eindelijk duidelijk wat er fout ging en kan ik mijn kilometers pijnvrij maken.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "Kinderfysio",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Onze dochter kwam niet lekker in haar beweging. De kinderfysiotherapeut speelde met haar en binnen een paar maanden zagen we grote vooruitgang.",
      "toestemming": true
    },
    {
      "naam": "Bas",
      "klacht": "Manueel",
      "plaats": "Haren",
      "sterren": 4,
      "quote": "Mijn nek zat helemaal vast en ik had steeds hoofdpijn. De manuele therapie hielp echt om alles weer los te krijgen.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Rugklachten",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "Ik was bang dat mijn rugklachten chronisch zouden worden. Nu weet ik precies wat ik moet doen om er geen last meer van te hebben.",
      "toestemming": true
    },
    {
      "naam": "Mark",
      "klacht": "Sportblessure",
      "plaats": "Haren",
      "sterren": 5,
      "quote": "Na mijn enkelblessure dacht ik dat ik nooit meer zou kunnen sporten zoals vroeger. Gelukkig werd ik goed geholpen en ben ik sterker teruggekomen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt je sportschoenen al weken niet meer aangeraakt, want sporten of hardlopen lukt gewoon niet meer zonder pijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je twijfelt of je wel bij de juiste plek terechtkomt en of je klacht echt serieus genomen wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wilt niet steeds opnieuw je verhaal moeten doen bij een ander gezicht dat weinig tijd voor je heeft.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand écht uitzoekt waar de pijn vandaan komt en wat jij specifiek nodig hebt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij fysiosportief krijg je één vaste fysiotherapeut die echt voor je klaarzit. We nemen alle tijd om de oorzaak te vinden en leggen helder uit wat er aan de hand is.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking en diagnose",
      "tekst": "We luisteren naar je verhaal, doen grondig onderzoek en leggen helder uit wat er aan de hand is en hoe we je gaan helpen.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van je klacht en doelen stellen we samen een plan op dat precies bij jou past, zodat je weet wat je kunt verwachten.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We werken gericht aan herstel met hands-on behandeling, oefeningen en begeleiding totdat je weer doet wat je wilt.",
      "duur": "Meerdere weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Anneroos",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/e9ba404f18fcef766ee1d453ffb8af27aa017f6b-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Anouk",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/25ae940d9561e1d5af6de7e51c5eb901445acc07-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Bart",
      "functie": "Fysiotherapeut, manueel therapeut",
      "specialisatie": "manueel therapeut",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/98ff4a410e1af58fce6b2a3fcf4cc94722bd88b8-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Daan",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/12/FysioSportief-28nov-0068-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Dannie",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/d16935ed79c7a0c22c55a12dd1be65f8584ab93f-768x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Esther",
      "functie": "Fysiotherapeut, geriatrisch fysiotherapeut i.o.",
      "specialisatie": "geriatrisch fysiotherapeut i.o.",
      "foto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/08/7a021a4c2abd13c362fd97007dad8e78bac5c5cb-768x1024.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysiosportiefgroningen.nl/wp-content/uploads/2025/11/DSF6793_Fysiosportief_Behandelingen_Fotografie_Jesse_Schaap_WEBSIZE-683x1024.jpg"
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
      "antwoord": "Nee, je kunt rechtstreeks bij ons terecht zonder verwijzing. Je verzekering vergoedt fysiotherapie vaak vanuit de basisverzekering of aanvullende verzekering."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht. Na de intake bespreken we een behandelplan waarin we aangeven hoeveel sessies je ongeveer nodig hebt om je doel te bereiken."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kun je binnen 2 werkdagen een afspraak krijgen. Bij acute klachten doen we ons best om je sneller te helpen."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde fysiotherapeut?",
      "antwoord": "Ja, bij fysiosportief krijg je één vaste therapeut die je begeleidt van begin tot eind. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat kost fysiotherapie als ik geen verzekering heb?",
      "antwoord": "Een intake kost ongeveer €45 en een vervolgbehandeling €35. We bespreken altijd vooraf de kosten en mogelijkheden met je."
    }
  ],
  "stappenKop": "Van eerste afspraak tot zorgeloos bewegen",
  "stappenSub": "Helder traject met één vaste therapeut die jou écht begrijpt en vooruit helpt",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#f97316",
    "donker": "#c2410c",
    "licht": "#ffedd5"
  }
} as const;

export type Praktijk = typeof praktijk;
