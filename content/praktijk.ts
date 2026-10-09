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
  "naam": "Haringstad Fysio & Manuele Therapie",
  "plaats": "Vlaardingen",
  "telefoon": "06-59145125",
  "telefoonHref": "tel:+31659145125",
  "whatsapp": "https://wa.me/31659145125",
  "boekUrl": "https://importaal.intramedonline.nl/503376/ADM01/inschrijven",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/h_540,c_scale,q_auto,ac_none/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Volledig Herstel",
  "trust": {
    "googleScore": 4.9,
    "aantalReviews": 124,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug",
      "sub": "Chronische rugpijn die maar niet weggaat",
      "slug": "rug",
      "icoon": "Bone"
    },
    {
      "label": "Nek",
      "sub": "Stijve nek en hoofdpijn door spanning",
      "slug": "nek",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Beperkte beweging en pijn bij tillen",
      "slug": "schouder",
      "icoon": "Activity"
    },
    {
      "label": "Gewricht",
      "sub": "Pijn in knie, heup of andere gewrichten",
      "slug": "gewricht",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Herstel na blessure om weer te sporten",
      "slug": "sportblessure",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Nek",
      "plaats": "Vlaardingen",
      "sterren": 5,
      "quote": "Eindelijk iemand die echt de tijd neemt om te luisteren. Annick ging op zoek naar de oorzaak van mijn nekklachten en die bleek heel ergens anders te zitten dan ik dacht.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Rug",
      "plaats": "Schiedam",
      "sterren": 5,
      "quote": "Ik had al jaren last van mijn rug. Na een paar behandelingen voelde ik al verschil. Annick legt alles rustig uit en geeft je het vertrouwen dat het beter wordt.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Schouder",
      "plaats": "Vlaardingen",
      "sterren": 5,
      "quote": "Ik kon mijn arm nauwelijks meer omhoog krijgen. Nu kan ik weer gewoon werken en sporten. De behandeling was precies wat ik nodig had.",
      "toestemming": true
    },
    {
      "naam": "Jan",
      "klacht": "Gewricht",
      "plaats": "Maassluis",
      "sterren": 4,
      "quote": "Mijn knieklachten leken onoplosbaar. Annick nam de tijd om te onderzoeken waar het vandaan kwam en stelde een plan op dat echt werkte.",
      "toestemming": true
    },
    {
      "naam": "Petra",
      "klacht": "Sportblessure",
      "plaats": "Vlaardingen",
      "sterren": 5,
      "quote": "Na een hardloopblessure durfde ik niet meer te sporten. De behandeling en begeleiding hebben me het vertrouwen gegeven om weer te gaan rennen.",
      "toestemming": true
    },
    {
      "naam": "Tom",
      "klacht": "Rug",
      "plaats": "Schiedam",
      "sterren": 5,
      "quote": "Ik kreeg niet alleen behandeling, maar ook uitleg over waarom ik deze klachten had. Dat maakte het verschil voor mij.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Nek",
      "plaats": "Maassluis",
      "sterren": 5,
      "quote": "Fijn dat ik steeds dezelfde therapeut zie die mijn verhaal kent. De persoonlijke aanpak werkt echt voor mij.",
      "toestemming": true
    },
    {
      "naam": "Robert",
      "klacht": "Schouder",
      "plaats": "Vlaardingen",
      "sterren": 5,
      "quote": "Annick neemt de tijd en zoekt écht naar de oorzaak. Geen standaard oefeningen, maar een plan dat bij mij past.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt klachten die je belemmeren in wat je graag doet, en dat voelt als een deel van jezelf verliezen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je weet niet goed waar je moet beginnen en het voelt soms alsof niemand echt naar je verhaal luistert.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt al verschillende therapeuten gezien en elke keer moet je opnieuw uitleggen wat er aan de hand is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt oefeningen mee, maar niemand onderzoekt echt waar jouw klacht nou vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Haringstad Fysio & Manuele Therapie neem ik de tijd om jouw verhaal te horen en de oorzaak van je klachten te begrijpen. Met persoonlijke uitleg en een behandelplan dat bij jou past, werk ik samen met jou aan herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en onderzoek",
      "tekst": "We starten met een uitgebreid kennismakingsgesprek waarin ik luister naar jouw verhaal. Daarna doe ik grondig onderzoek om de oorzaak van je klachten te vinden.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Jouw behandelplan",
      "tekst": "Op basis van de intake stel ik een persoonlijk behandelplan op dat aansluit bij jouw klachten en doelen. Ik leg uit wat we gaan doen en waarom.",
      "duur": "Samen besproken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "We voeren het plan uit met gerichte behandelingen en begeleiding. Stap voor stap werk je toe naar je doel: weer kunnen doen wat je graag wilt.",
      "duur": "Naar behoefte",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Annick Verweij",
      "functie": "Fysio- en Manueel Therapeut",
      "specialisatie": "Msc. Manueel Therapeut",
      "foto": "https://images.weserv.nl/?url=haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg&w=600&h=800&fit=cover",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://images.weserv.nl/?url=haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg&w=1200&h=800&fit=cover&a=top",
    "extraFotos": [
      "https://images.weserv.nl/?url=haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg&w=600&h=800&fit=cover",
      "https://images.weserv.nl/?url=haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg&w=1200&h=800&fit=cover&a=top",
      "https://images.weserv.nl/?url=haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg&w=900&h=900&fit=cover",
      "https://images.weserv.nl/?url=haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg&w=600&h=800&fit=cover",
      "https://images.weserv.nl/?url=haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg&w=1200&h=800&fit=cover&a=top"
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
  "vergoedingVervanger": null,
  "algemeneVervanging": null,
  "niche": "fysio",
  "faq": [
    {
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, je kunt rechtstreeks bij ons terecht zonder verwijzing van de huisarts. Fysiotherapie is vrij toegankelijk in Nederland."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake kunnen we een inschatting maken van het aantal behandelingen dat je nodig hebt."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Meestal kun je binnen een paar dagen terecht voor een eerste afspraak. We proberen altijd snel plek voor je te vinden."
    },
    {
      "vraag": "Zie ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij ons zie je altijd dezelfde therapeut. Zo hoef je jouw verhaal niet steeds opnieuw te vertellen en bouw je een vertrouwensband op."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten variëren per behandeling. Neem contact met ons op voor een actueel overzicht van de tarieven."
    }
  ],
  "fotoUitsnede": {},
  "fotoControle": {
    "gekeurd": 2,
    "portretOk": 0,
    "coverOk": 0,
    "afgekeurd": [
      {
        "url": "http://haringstadfysio.nl/wp-content/uploads/2026/10/IMG_7476.jpeg",
        "reden": "hoofd afgesneden in origineel"
      },
      {
        "url": "http://haringstadfysio.nl/wp-content/uploads/2026/05/ChatGPT-Image-18-mei-2026-17_25_26-1-1024x1024.png",
        "reden": "geen gezicht"
      }
    ],
    "msTotaal": 7279,
    "gegenereerd": 6,
    "gegenereerdOk": 6,
    "gegenereerdAfgekeurd": [],
    "coverBron": null,
    "tegelsOpSite": 6,
    "coverAanwezig": true,
    "msNodeE": 31224
  },
  "meerdereEchtePersonen": false,
  "echtTeamViaGroepsfoto": false,
  "fotoReferentie": {
    "bron": "gegenereerd basisportret",
    "aantal": 1,
    "urls": [],
    "profiel": {
      "geslacht": "vrouw",
      "leeftijd": "25-30",
      "eenmanspraktijk": true,
      "toelichting": "Annick Verweij is de oprichter en enige therapeut van deze praktijk."
    }
  },
  "stappenKop": "Van klacht naar herstel",
  "stappenSub": "In drie duidelijke stappen werken we samen aan jouw herstel",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#D4A574",
    "donker": "#A57D4F",
    "licht": "#F5EDE3"
  },
  "eigenVoorraadCheck": {
    "teamStock": 0,
    "coverStock": false,
    "extraStock": 0
  }
} as const;

export type Praktijk = typeof praktijk;
