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
  "naam": "Paolkaat Pijn Reset",
  "plaats": "Weert",
  "telefoon": "0495 123 456",
  "telefoonHref": "tel:+31495123456",
  "whatsapp": "https://wa.me/31495123456",
  "boekUrl": "#contact",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Pijnvrij Leven",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 127,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Nekpijn",
      "sub": "Chronische nek- en schouderklachten",
      "slug": "nekpijn",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rugpijn",
      "sub": "Langdurige rugklachten en stijfheid",
      "slug": "rugpijn",
      "icoon": "Bone"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Terugkerende hoofdpijn en spanningsklachten",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Schouderklacht",
      "sub": "Frozen shoulder en schouderpijn",
      "slug": "schouderklacht",
      "icoon": "Activity"
    },
    {
      "label": "Heuppijn",
      "sub": "Aanhoudende heupklachten",
      "slug": "heuppijn",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Edwin",
      "klacht": "Rugpijn",
      "plaats": "Weert",
      "sterren": 5,
      "quote": "Na 25 jaar rugklachten eindelijk verlost van de pijn. Ik loop weer hard en beweeg me vrij zoals het hoort.",
      "toestemming": true
    },
    {
      "naam": "José",
      "klacht": "Nekpijn",
      "plaats": "Limburg",
      "sterren": 5,
      "quote": "Annemieke is een veelzijdige therapeut met brede kennis. Ze neemt de tijd en geeft heldere uitleg.",
      "toestemming": true
    },
    {
      "naam": "Gonny",
      "klacht": "Heuppijn",
      "plaats": "Weert",
      "sterren": 5,
      "quote": "Na maanden heuppijn eindelijk de regie over mijn leven terug. Wat een bevrijding!",
      "toestemming": true
    },
    {
      "naam": "Etienne",
      "klacht": "Rugpijn",
      "plaats": "Limburg",
      "sterren": 5,
      "quote": "Het is zo fijn om eindelijk uit mijn pijn te kunnen stappen. Het traject brengt me nog steeds veel.",
      "toestemming": true
    },
    {
      "naam": "Jur",
      "klacht": "Rugpijn",
      "plaats": "Weert",
      "sterren": 5,
      "quote": "Dankzij Annemieke kan ik weer comfortabel achter mijn pc werken. Mijn rugklachten zijn verholpen.",
      "toestemming": true
    },
    {
      "naam": "Patricia",
      "klacht": "Hoofdpijn",
      "plaats": "Limburg",
      "sterren": 4,
      "quote": "Mijn slaapkwaliteit is enorm verbeterd en de dagelijkse hoofdpijn is bijna verdwenen. Ik voel me sterker.",
      "toestemming": true
    },
    {
      "naam": "Maria",
      "klacht": "Nekpijn",
      "plaats": "Weert",
      "sterren": 5,
      "quote": "Jaren last van nek en schouder. Nu voel ik me wonderwel veel beter door de handvaten die ik kreeg.",
      "toestemming": true
    },
    {
      "naam": "Anoniem",
      "klacht": "Schouderklacht",
      "plaats": "Limburg",
      "sterren": 5,
      "quote": "Ik leerde hoe ik beter voor mezelf kan zorgen. Het traject is een bevrijding en een echte reset.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast omdat de pijn je tegenhoudt om te bewegen zoals je gewend was.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het uitzoeken steeds maar uit en voelt je alleen in je zoektocht naar iemand die je echt begrijpt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je moet telkens je verhaal opnieuw vertellen aan een ander gezicht en niemand lijkt de tijd te nemen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand écht uitzoekt waar de pijn vandaan komt en waarom het blijft terugkeren.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Paolkaat Pijn Reset neem ik de tijd om de diepere oorzaak te achterhalen. Samen kijken we naar jou als geheel en krijg je duidelijke uitleg over wat er echt aan de hand is.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Kennismaking & diagnose",
      "tekst": "In een uitgebreid intakegesprek luister ik naar jouw verhaal en achterhalen we samen de werkelijke oorzaak van je klachten.",
      "duur": "60-90 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk Reset Traject",
      "tekst": "Op basis van jouw situatie stel ik een individueel traject samen met wekelijkse opdrachten en live sessies.",
      "duur": "6-8 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Blijvend resultaat",
      "tekst": "Je krijgt tools en inzichten om zelfstandig controle te houden over je klachten en pijnvrij te blijven bewegen.",
      "duur": "Levenslang",
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
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
    "extraFotos": [
      "https://paolkaatpijnreset.nl/wp-content/uploads/2023/12/B02A1890-1024x683.jpg"
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
      "vraag": "Heb ik een verwijzing nodig voor het traject?",
      "antwoord": "Nee, je kunt rechtstreeks contact met mij opnemen voor een vrijblijvend adviesgesprek zonder verwijzing van de huisarts."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Het traject duurt gemiddeld 6-8 weken met wekelijkse opdrachten en meerdere live sessies. We stemmen dit volledig af op jouw persoonlijke situatie."
    },
    {
      "vraag": "Wat is de wachttijd voor een eerste afspraak?",
      "antwoord": "De wachttijd voor een intake is meestal 2-4 dagen. Na het kennismakingsgesprek plannen we samen het vervolgtraject in."
    },
    {
      "vraag": "Zie ik tijdens het traject steeds dezelfde therapeut?",
      "antwoord": "Ja, je wordt van begin tot eind begeleid door Annemieke zelf. Continuïteit en persoonlijk contact staan centraal in het traject."
    },
    {
      "vraag": "Wat zijn de kosten als het niet vergoed wordt?",
      "antwoord": "Dit traject wordt niet standaard vergoed door zorgverzekeraars. De investering verschilt per type klacht. Na een gratis adviesgesprek ontvang je een passend voorstel."
    }
  ],
  "stappenKop": "Jouw weg naar een pijnvrij leven",
  "stappenSub": "In 6-8 weken samen ontdekken wat jou werkelijk helpt.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#6B9A67",
    "donker": "#4A6B47",
    "licht": "#E8F3E7"
  }
} as const;

export type Praktijk = typeof praktijk;
