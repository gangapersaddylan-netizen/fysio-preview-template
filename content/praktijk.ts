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
  "naam": "Fysiotherapie Kilic",
  "plaats": "Rotterdam",
  "telefoon": "06 27 92 06 12",
  "telefoonHref": "tel:+31627920612",
  "whatsapp": "https://wa.me/31627920612",
  "boekUrl": "https://fysiokilic.nl/afspraak",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Snel Herstel",
  "trust": {
    "googleScore": 5,
    "aantalReviews": 127,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Nek & Schouder",
      "sub": "Stijfheid, spanning en pijn in nek- en schouderregio",
      "slug": "nek-schouder",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rugklachten",
      "sub": "Chronische en acute pijn in onderrug en bovenrug",
      "slug": "rugklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessures",
      "sub": "Herstel na sportgerelateerde verwondingen en overbelasting",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn en migraine door spierspanning",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Kaakklachten",
      "sub": "TMD en kaakgewrichtsproblemen met specialistische fysiotherapie",
      "slug": "kaakklachten",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra Vermeulen",
      "klacht": "Nek & Schouder",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Ik had al maanden last van mijn schouder en kon mijn arm nauwelijks optillen. Na drie behandelingen voelde ik al duidelijk verschil en nu ben ik weer helemaal klachtenvrij.",
      "toestemming": true
    },
    {
      "naam": "Dennis Bakker",
      "klacht": "Rugklachten",
      "plaats": "Schiedam",
      "sterren": 5,
      "quote": "Jarenlang gesleept met rugpijn en nooit echt geholpen. Hier luisterden ze echt en werd eindelijk de oorzaak aangepakt. Fantastisch resultaat.",
      "toestemming": true
    },
    {
      "naam": "Laura de Jong",
      "klacht": "Sportblessures",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Door een hardloopblessure kon ik al weken niet meer rennen. De behandeling was gericht en effectief, nu loop ik weer mijn trainingsschema zonder problemen.",
      "toestemming": true
    },
    {
      "naam": "Marco Jansen",
      "klacht": "Hoofdpijn",
      "plaats": "Capelle aan den IJssel",
      "sterren": 5,
      "quote": "Ik had constant hoofdpijn door spierspanning. Na de behandelingen is dit bijna volledig verdwenen en begrijp ik nu ook hoe ik het zelf kan voorkomen.",
      "toestemming": true
    },
    {
      "naam": "Yasmin el Amrani",
      "klacht": "Kaakklachten",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Mijn kaak klikte en deed pijn bij eten. Dankzij de gerichte kaakfysiotherapie zijn mijn klachten in korte tijd enorm verminderd.",
      "toestemming": true
    },
    {
      "naam": "Peter van Dijk",
      "klacht": "Nek & Schouder",
      "plaats": "Vlaardingen",
      "sterren": 5,
      "quote": "Acute nekpijn waardoor ik mijn hoofd niet kon draaien. Nog dezelfde dag kon ik terecht en na één behandeling was ik alweer pijnvrij. Echt ongelooflijk.",
      "toestemming": true
    },
    {
      "naam": "Anouk Hendriks",
      "klacht": "Rugklachten",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Ik twijfelde of fysiotherapie wel zou helpen bij mijn langdurige rugklachten, maar ik ben positief verrast. Eindelijk weer zonder pijn door de dag.",
      "toestemming": true
    },
    {
      "naam": "Tim Smit",
      "klacht": "Sportblessures",
      "plaats": "Spijkenisse",
      "sterren": 4,
      "quote": "Knieblessure door voetbal, duidelijke uitleg en goed behandelplan. Ik ben weer terug op het veld en weet nu ook hoe ik blessures kan voorkomen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen liggen al weken in de kast, want sporten lukt gewoon niet meer zonder pijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het uitzoeken steeds uit omdat je niet weet waar je terecht kunt en of ze je wel serieus nemen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je bent het zat om telkens je verhaal opnieuw te moeten vertellen aan een andere therapeut.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand neemt echt de tijd om uit te zoeken waar je klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapie Kilic werken we anders: wij nemen de tijd om de werkelijke oorzaak te vinden en geven je heldere uitleg over wat er aan de hand is en hoe we je gaan helpen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en onderzoek",
      "tekst": "We luisteren naar jouw verhaal en doen grondig lichamelijk onderzoek om de exacte oorzaak van je klachten te vinden. Je krijgt direct duidelijkheid over wat er aan de hand is.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op dat past bij jouw situatie en doelen. We leggen stap voor stap uit hoe we je gaan helpen.",
      "duur": "Binnen 1 week",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en herstel",
      "tekst": "We starten met gerichte behandelingen zoals dry needling en manuele therapie. De meeste cliënten voelen al binnen 1-4 sessies duidelijk verschil en bereiken hun doel.",
      "duur": "1-4 behandelingen",
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
      "vraag": "Heb ik een verwijzing nodig van de huisarts?",
      "antwoord": "Nee, sinds 2006 kun je in Nederland zonder verwijzing direct naar de fysiotherapeut. Je kunt zelf contact met ons opnemen en een afspraak maken."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en klacht. Bij Fysiotherapie Kilic merken de meeste cliënten al binnen 1-4 behandelingen duidelijk verschil. Tijdens de intake maken we een inschatting van het aantal benodigde sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We proberen je zo snel mogelijk te helpen. Vaak kunnen we je binnen 1-2 dagen al een afspraak aanbieden, bij acute klachten soms zelfs nog dezelfde dag."
    },
    {
      "vraag": "Krijg ik dezelfde therapeut bij elke behandeling?",
      "antwoord": "Ja, bij ons krijg je een vaste therapeut die je behandeltraject van begin tot eind begeleidt. Zo hoef je je verhaal niet steeds opnieuw te vertellen en kan je therapeut je voortgang goed volgen."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen verzekering heb?",
      "antwoord": "Fysiotherapie wordt vergoed vanuit de basisverzekering vanaf je 18e (na eigen risico) of vanuit de aanvullende verzekering. Zonder verzekering kost een behandeling €45-55. We denken graag met je mee over de mogelijkheden."
    }
  ],
  "stappenKop": "Zo werkt jouw hersteltraject",
  "stappenSub": "Van eerste afspraak tot volledig herstel: wij begeleiden je stap voor stap.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#3b82f6",
    "donker": "#1e40af",
    "licht": "#dbeafe"
  }
} as const;

export type Praktijk = typeof praktijk;
