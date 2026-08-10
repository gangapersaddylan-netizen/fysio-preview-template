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
  "naam": "Fysio Loon op Zand",
  "plaats": "Loon op Zand",
  "telefoon": "0416 361248",
  "telefoonHref": "tel:+31416361248",
  "whatsapp": "https://wa.me/31416361248",
  "boekUrl": "https://fysioloonopzand.nl/contact/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Sterker Leven",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Trauma",
      "sub": "Revalidatie na botbreuk of operatie",
      "slug": "trauma-revalidatie",
      "icoon": "Bone"
    },
    {
      "label": "Hand & pols",
      "sub": "Behandeling van hand- en polsklachten",
      "slug": "handtherapie",
      "icoon": "Activity"
    },
    {
      "label": "COPD & Astma",
      "sub": "Verbetering van ademhaling en conditie",
      "slug": "copd-astma",
      "icoon": "HeartPulse"
    },
    {
      "label": "Dry Needling",
      "sub": "Verlichten van spier- en triggerpoints",
      "slug": "dry-needling",
      "icoon": "PersonStanding"
    },
    {
      "label": "Taping",
      "sub": "Stabilisatie van spieren en gewrichten",
      "slug": "medical-taping",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Martin",
      "klacht": "Trauma",
      "plaats": "Loon op Zand",
      "sterren": 5,
      "quote": "Na mijn operatie wist ik niet hoe te beginnen. Het team heeft me stap voor stap begeleid en nu kan ik weer normaal functioneren.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Hand & pols",
      "plaats": "Kaatsheuvel",
      "sterren": 5,
      "quote": "Mijn polsklachten waren heel hardnekkig. Dankzij de handtherapie kan ik eindelijk weer zonder pijn werken.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "COPD & Astma",
      "plaats": "De Moer",
      "sterren": 5,
      "quote": "Ik dacht dat ik nooit meer zou kunnen wandelen zonder benauwdheid. Na de behandeling voel ik me zoveel fitter en kan ik weer genieten van buitenactiviteiten.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Dry Needling",
      "plaats": "Loon op Zand",
      "sterren": 4,
      "quote": "Ik was eerst wat sceptisch over dry needling, maar het heeft mijn schouderpijn echt verminderd. Blij dat ik het geprobeerd heb.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Trauma",
      "plaats": "Loon op Zand",
      "sterren": 5,
      "quote": "Het herstel na mijn knieblessure verliep sneller dan verwacht. De persoonlijke begeleiding maakte echt het verschil.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Hand & pols",
      "plaats": "Kaatsheuvel",
      "sterren": 5,
      "quote": "Mijn hand deed maandenlang pijn. Nu ben ik eindelijk verlost van de klachten en kan ik weer pianospelen.",
      "toestemming": true
    },
    {
      "naam": "Jan",
      "klacht": "COPD & Astma",
      "plaats": "Loon op Zand",
      "sterren": 5,
      "quote": "De fysiotherapeuten begrijpen echt wat COPD met je doet. Ze hebben me geholpen om weer actief te blijven.",
      "toestemming": true
    },
    {
      "naam": "Anouk",
      "klacht": "Taping",
      "plaats": "De Moer",
      "sterren": 5,
      "quote": "De tape geeft zoveel steun tijdens het sporten. Ik kan nu eindelijk weer zonder angst bewegen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je wilt zo graag weer bewegen zoals vroeger, maar je lijf laat het niet toe en steeds meer activiteiten blijven liggen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al maanden klachten, stelt steeds weer uit om hulp te zoeken en voelt je onzeker waar je terecht kunt voor goede zorg.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je ziet telkens een ander gezicht en moet steeds opnieuw uitleggen wat er aan de hand is, waardoor je het gevoel hebt dat niemand je echt kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt oefeningen mee zonder dat iemand echt uitzoekt waar de pijn vandaan komt en je blijft rondlopen met dezelfde vragen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Loon op Zand werken we anders: we nemen de tijd om jouw klacht écht te begrijpen en samen met jou te werken aan een oplossing die bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "In een uitgebreid intakegesprek luisteren we naar jouw verhaal en onderzoeken we grondig wat de oorzaak van je klacht is. We nemen alle tijd om jouw situatie te begrijpen.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op dat aansluit bij jouw doelen en dagelijks leven. We leggen helder uit wat we gaan doen en waarom.",
      "duur": "In overleg",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en herstel",
      "tekst": "We begeleiden je stap voor stap naar je doel met hands-on behandelingen, gerichte oefeningen en persoonlijke aandacht. Jouw vaste therapeut blijft je volgen tot je weer volledig hersteld bent.",
      "duur": "Variabel",
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
    "groepsfoto": "https://fysioloonopzand.nl/wp-content/uploads/2025/11/StudioPichot_FysioLOZ25-7459-2-scaled-e1762549923250-1024x1006.webp"
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
      "antwoord": "Sinds 2006 is directe toegang tot fysiotherapie mogelijk. U kunt rechtstreeks bij ons terecht zonder verwijzing van uw huisarts. Voor bepaalde specialistische behandelingen of vergoedingen kan een verwijzing wel nodig zijn."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Het aantal behandelingen verschilt per persoon en klacht. Na de intake kunnen we een inschatting maken. Gemiddeld zijn er 6 tot 12 sessies nodig, maar bij acute klachten kan herstel sneller gaan en bij chronische aandoeningen kan een langere behandeling nodig zijn."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om u binnen 2 tot 3 dagen te kunnen helpen. Bij urgente klachten doen we ons uiterste best om u nog sneller in te plannen. U kunt telefonisch of via onze website een afspraak maken."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, continuïteit is belangrijk voor ons. U krijgt een vaste fysiotherapeut toegewezen die uw behandeltraject begeleidt. Zo kent uw therapeut uw situatie goed en kunt u een vertrouwensband opbouwen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost €42,- per sessie van 30 minuten. Een uitgebreide intake duurt langer en kost €63,-. Veel zorgverzekeringen vergoeden fysiotherapie (deels) vanuit de basisverzekering of aanvullende verzekering. We adviseren om dit vooraf bij uw verzekeraar na te vragen."
    }
  ],
  "stappenKop": "Uw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot volledig herstel begeleiden we u persoonlijk.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#1e5a8e",
    "donker": "#0f3a5f",
    "licht": "#e8f2f7"
  }
} as const;

export type Praktijk = typeof praktijk;
