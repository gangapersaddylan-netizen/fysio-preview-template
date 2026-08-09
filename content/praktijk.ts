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
  "naam": "LEEF!",
  "plaats": "Zaandam",
  "telefoon": "075 612 34 56",
  "telefoonHref": "tel:+31756123456",
  "whatsapp": "https://wa.me/31756123456",
  "boekUrl": "https://leef.nu/afspraak_maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Ontdek Kracht",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 215,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug & Nek",
      "sub": "Rugpijn, nekklachten en schouderspanning",
      "slug": "rug-nek",
      "icoon": "Bone"
    },
    {
      "label": "Sport",
      "sub": "Sportblessures en herstel na inspanning",
      "slug": "sport",
      "icoon": "Activity"
    },
    {
      "label": "Oncologie",
      "sub": "Begeleiding tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Oedeem",
      "sub": "Vochtophoping en lymfeklachten",
      "slug": "oedeem",
      "icoon": "PersonStanding"
    },
    {
      "label": "Arbeidsrevalidatie",
      "sub": "Terugkeer naar werk na blessure of ziekte",
      "slug": "arbeidsrevalidatie",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik kon door mijn rugpijn nauwelijks nog werken. Na de behandelingen bij LEEF! kan ik weer volop meedoen en voel ik me zoveel fitter.",
      "toestemming": true
    },
    {
      "naam": "Thomas",
      "klacht": "Sport",
      "plaats": "Wormerveer",
      "sterren": 5,
      "quote": "Door een hardloopblessure kon ik maanden niet meer sporten. Het team heeft me stap voor stap weer opgebouwd. Ik loop nu zelfs sneller dan voorheen!",
      "toestemming": true
    },
    {
      "naam": "Ingrid",
      "klacht": "Oncologie",
      "plaats": "Krommenie",
      "sterren": 5,
      "quote": "De oncologische begeleiding was onmisbaar voor mij. Ze hebben me geholpen om tijdens mijn behandeling sterk te blijven en daarna weer op te krabbelen.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Jarenlang nekpijn gehad. Nu eindelijk grip op mijn klacht dankzij de persoonlijke aanpak hier.",
      "toestemming": true
    },
    {
      "naam": "Lisanne",
      "klacht": "Oedeem",
      "plaats": "Assendelft",
      "sterren": 4,
      "quote": "De oedeemtherapie heeft echt verschil gemaakt. Ik heb minder last van zwelling en voel me een stuk comfortabeler in mijn lichaam.",
      "toestemming": true
    },
    {
      "naam": "Martijn",
      "klacht": "Arbeidsrevalidatie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Door langdurige klachten was ik bang mijn werk niet meer aan te kunnen. Met de begeleiding ben ik weer volop aan het werk en voel ik me zelfverzekerder.",
      "toestemming": true
    },
    {
      "naam": "Anouk",
      "klacht": "Sport",
      "plaats": "Koog aan de Zaan",
      "sterren": 5,
      "quote": "Mijn knie deed het niet meer na een voetbalblessure. Het hele team heeft me geholpen om weer het veld op te kunnen, ik ben enorm dankbaar.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Rug & Nek",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik twijfelde of ik ooit nog pijnvrij zou zijn. Dat lukt nu steeds vaker en ik heb weer vertrouwen in mijn lijf gekregen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast omdat je lichaam niet meer meewerkt zoals je gewend was.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je blijft maar uitstellen, wachtend op het juiste moment, terwijl de onzekerheid over waar je terecht kunt steeds groter wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Telkens zie je een ander gezicht en moet je je verhaal opnieuw vertellen, zonder dat iemand de tijd neemt om echt te begrijpen wat er speelt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand écht uitzoekt waar de pijn vandaan komt of wat jouw lijf nodig heeft.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! nemen we de tijd om jouw verhaal te horen en samen de oorzaak te ontdekken. Zo kom je bij dezelfde professional terecht die jou persoonlijk begeleidt naar blijvend resultaat.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We luisteren naar jouw verhaal en onderzoeken grondig waar jouw klacht vandaan komt. Zo krijgen we een helder beeld van wat er speelt.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we samen met jou een plan op dat aansluit bij jouw doelen en situatie. Elke stap is afgestemd op wat jij nodig hebt.",
      "duur": "Vanaf behandeling 2",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je werkt onder begeleiding aan herstel en vooruitgang. We evalueren regelmatig en passen aan waar nodig, zodat je stap voor stap je doel bereikt.",
      "duur": "4-12 weken gemiddeld",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Oncologisch fysiotherapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Diëtist",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Manueel therapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Oefentherapeut Mensendieck",
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
      "antwoord": "Nee, je kunt zonder verwijzing direct bij ons terecht. Wel is het handig om je verzekeringspolis te checken voor eventuele vergoeding."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en klacht. Na de intake bespreken we een behandelplan en geven we een indicatie van het aantal sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kunnen we je binnen 48 uur helpen. We streven ernaar om zo snel mogelijk een afspraak in te plannen."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij LEEF! wordt je behandeld door een vaste professional die jouw verhaal kent en je persoonlijk begeleidt."
    },
    {
      "vraag": "Wat kosten de behandelingen zonder verzekering?",
      "antwoord": "De tarieven variëren per behandeling. Neem contact met ons op voor een overzicht of check onze website voor actuele prijzen."
    }
  ],
  "stappenKop": "Jouw traject bij LEEF!",
  "stappenSub": "Van eerste afspraak tot blijvend resultaat, stap voor stap begeleid door jouw vaste professional.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a3c817",
    "donker": "#7a9612",
    "licht": "#f2f7dc"
  }
} as const;

export type Praktijk = typeof praktijk;
