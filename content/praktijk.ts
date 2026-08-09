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
  "telefoon": "075 616 7070",
  "telefoonHref": "tel:+31756167070",
  "whatsapp": "https://wa.me/31756167070",
  "boekUrl": "https://leef.nu/afspraak_maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Ontdek Kracht",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 287,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Fysiotherapie",
      "sub": "Behandeling van bewegingsklachten en revalidatie",
      "slug": "fysiotherapie",
      "icoon": "PersonStanding"
    },
    {
      "label": "Manuele Therapie",
      "sub": "Gewrichts- en wervelkolomklachten",
      "slug": "manuele-therapie",
      "icoon": "Bone"
    },
    {
      "label": "Oncologie",
      "sub": "Begeleiding tijdens en na kankerbehandeling",
      "slug": "oncologie",
      "icoon": "HeartPulse"
    },
    {
      "label": "Sport",
      "sub": "Begeleide training en revalidatie voor sporters",
      "slug": "sport",
      "icoon": "Dumbbell"
    },
    {
      "label": "Shockwave",
      "sub": "Behandeling van hardnekkige pijnklachten",
      "slug": "shockwave",
      "icoon": "Activity"
    },
    {
      "label": "Dry Needling",
      "sub": "Triggerpointbehandeling voor spierklachten",
      "slug": "dry-needling",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Ton",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Dankzij LEEF! kan ik weer actief zijn. Zonder hun begeleiding had ik dit niet kunnen bereiken. Met LEEF! kom je verder.",
      "toestemming": true
    },
    {
      "naam": "Marita",
      "klacht": "Sport",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Ik mankeerde echt van alles, maar bij LEEF! heb ik steeds meer bereikt. Nu heb ik zelfs de Kilimanjaro beklommen!",
      "toestemming": true
    },
    {
      "naam": "Anouska",
      "klacht": "Manuele Therapie",
      "plaats": "Zaanstreek",
      "sterren": 5,
      "quote": "Ik kwam zonder verwachtingen. Nu heb ik vaker geen pijn dan wel. Er gaan soms weken voorbij waarbij de pijn nihil is.",
      "toestemming": true
    },
    {
      "naam": "Joke",
      "klacht": "Sport",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Een betere conditie gaf me meer zelfvertrouwen. Ik kreeg echt een kick van het hardlopen en doe nu elk jaar mee aan evenementen.",
      "toestemming": true
    },
    {
      "naam": "Kai",
      "klacht": "Fysiotherapie",
      "plaats": "Zaandam",
      "sterren": 5,
      "quote": "Fantastisch hoe mijn cholesterol nu onder controle is. Ik voel me veel lekkerder in mijn lichaam en krijg veel complimentjes.",
      "toestemming": true
    },
    {
      "naam": "Elly",
      "klacht": "Oncologie",
      "plaats": "Zaanstreek",
      "sterren": 5,
      "quote": "Ik voel me goed en kijk naar wat ik heb in plaats van wat ontbreekt. De coaches bij LEEF! helpen mij daarbij.",
      "toestemming": true
    },
    {
      "naam": "Danny",
      "klacht": "Sport",
      "plaats": "Noord-Holland",
      "sterren": 5,
      "quote": "Ze begeleiden me op weg naar de onbeperkte elfstedentocht met mijn handbike. Persoonlijke aandacht en echte betrokkenheid.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Shockwave",
      "plaats": "Zaandam",
      "sterren": 4,
      "quote": "Na jaren last van mijn achillespees eindelijk resultaat. De behandeling werkte goed en ik kon weer sporten.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al weken in de kast, omdat bewegen gewoon geen optie meer lijkt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het steeds uit, want waar moet je beginnen en bij wie ben je in goede handen?",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wilt niet elke keer opnieuw je verhaal vertellen aan een ander gezicht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt echt uit waar jouw klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij LEEF! nemen we de tijd om jouw verhaal te horen en echt te begrijpen wat er speelt. We zoeken samen naar de oorzaak en maken een behandelplan dat bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We luisteren naar jouw verhaal, onderzoeken grondig en stellen een duidelijke diagnose. Samen bepalen we wat nodig is om jouw klacht op te lossen.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we een op maat gemaakt behandelplan op. Dit kan bestaan uit fysiotherapie, training, diëtetiek of een combinatie hiervan.",
      "duur": "Binnen 48 uur",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "Je wordt begeleid door dezelfde professional die jouw klacht kent. We volgen je voortgang nauwkeurig en passen het plan aan waar nodig, totdat je weer doet wat je wilt.",
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
      "functie": "Fysiotherapeut",
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
      "functie": "Manueel therapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "Oncologisch fysiotherapeut",
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
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Directe toegang tot fysiotherapie betekent dat je zelf een afspraak kunt maken wanneer je klachten hebt."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake bespreken we een behandelplan waarin we een inschatting geven van het aantal benodigde sessies. Gemiddeld zijn dit 6 tot 12 behandelingen."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om binnen 48 uur een afspraak voor je in te plannen. Voor spoedgevallen doen we er alles aan om je nog dezelfde dag te helpen."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, je wordt behandeld door dezelfde fysiotherapeut gedurende je hele traject. Zo hoef je je verhaal niet steeds opnieuw te vertellen en bouwt je therapeut een compleet beeld op van jouw situatie."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €45 zonder verzekering. Voor een compleet behandelplan of meerdere sessies bieden we aantrekkelijke pakketten aan. Neem contact op voor een vrijblijvend gesprek over de mogelijkheden."
    }
  ],
  "stappenKop": "Jouw weg naar herstel in 3 stappen",
  "stappenSub": "Van intake tot volledig herstel, we begeleiden je persoonlijk door het hele traject.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#a4c639",
    "donker": "#7a9629",
    "licht": "#f0f7dd"
  }
} as const;

export type Praktijk = typeof praktijk;
