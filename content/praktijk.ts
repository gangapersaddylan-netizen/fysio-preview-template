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
  "naam": "SMC Amersfoort",
  "plaats": "Amersfoort",
  "telefoon": "033 461 8800",
  "telefoonHref": "tel:+31334618800",
  "whatsapp": "https://wa.me/31334618800",
  "boekUrl": "https://smcamersfoort.nl/afspraak/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Sport Beter",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 287,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Knie",
      "sub": "Van kruisband tot meniscus, weer terug de sport in.",
      "slug": "knie",
      "icoon": "Activity"
    },
    {
      "label": "Schouder",
      "sub": "Pijn bij bewegen of na operatie, we bouwen het op.",
      "slug": "schouder",
      "icoon": "Bone"
    },
    {
      "label": "Rug",
      "sub": "Klachten aan onderrug of nek die je belemmeren.",
      "slug": "rug",
      "icoon": "PersonStanding"
    },
    {
      "label": "Heup",
      "sub": "Pijn bij lopen of sporten, of herstel na heupoperatie.",
      "slug": "heup",
      "icoon": "Activity"
    },
    {
      "label": "Herstel",
      "sub": "Revalidatie na operatie of langdurige blessure.",
      "slug": "revalidatie",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Mark",
      "klacht": "Knie",
      "plaats": "Amersfoort",
      "sterren": 5,
      "quote": "Na mijn kruisbandoperatie weer volledig hersteld. De begeleiding was top en ik kon mijn eigen inbreng geven. Nu sport ik weer op hetzelfde niveau als voorheen.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Schouder",
      "plaats": "Nijkerk",
      "sterren": 5,
      "quote": "Mijn schouderklachten zijn volledig verdwenen. Het team neemt je klachten serieus en werkt met je mee aan een oplossing.",
      "toestemming": true
    },
    {
      "naam": "Thomas",
      "klacht": "Rug",
      "plaats": "Amersfoort",
      "sterren": 5,
      "quote": "Ik had last van mijn onderrug en kon bijna niet meer werken. Nu ben ik weer volledig mobiel en kan ik zelfs weer sporten. Dankzij de goede begeleiding en de personal fitness.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Heup",
      "plaats": "Soest",
      "sterren": 5,
      "quote": "Na mijn heupoperatie liep ik binnen zes weken alweer 18 holes op de golfbaan. De fysiotherapeuten zijn deskundig en motiverend.",
      "toestemming": true
    },
    {
      "naam": "Jasper",
      "klacht": "Herstel",
      "plaats": "Amersfoort",
      "sterren": 5,
      "quote": "De revalidatie na mijn blessure verliep perfect. Er is echt oog voor detail en ze denken mee over wat het beste voor jou is.",
      "toestemming": true
    },
    {
      "naam": "Rianne",
      "klacht": "Rug",
      "plaats": "Leusden",
      "sterren": 5,
      "quote": "Eerst fysio gehad voor mijn rug en daarna gestart met small group training. Beide zeer deskundig en fijn dat je kunt verzetten als je een keer niet kan.",
      "toestemming": true
    },
    {
      "naam": "Johan",
      "klacht": "Schouder",
      "plaats": "Amersfoort",
      "sterren": 5,
      "quote": "Mijn schouderklachten zijn behandeld en nu volg ik een personal fitness programma. Alles onder deskundige begeleiding, een echte aanrader.",
      "toestemming": true
    },
    {
      "naam": "Merel",
      "klacht": "Knie",
      "plaats": "Amersfoort",
      "sterren": 5,
      "quote": "Na mijn ski-ongeval kon ik direct terecht. Fijne begeleiding bij mijn gescheurde kruisband en nu ook lid van de sportschool. Het voelt persoonlijk en er is altijd een groet.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen liggen alweer maanden in de kast, omdat bewegen gewoon te veel pijn doet.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het steeds uit om hulp te zoeken, niet wetend waar je écht terecht kunt met jouw klacht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je ziet telkens een ander gezicht en moet je verhaal steeds opnieuw vertellen zonder dat iemand je écht kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand zoekt uit waar jouw klacht nou écht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij SMC Amersfoort werken we anders. We nemen de tijd om jouw klacht te begrijpen en stellen een persoonlijk behandelplan op. Samen werken we aan jouw herstel, zodat je weer kunt doen wat je leuk vindt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Sportfysiotherapie",
      "tekst": "Specifieke behandeling voor sporters die hun blessure willen verhelpen en weer snel de sport in willen. We richten ons op jouw sport en maken een plan op maat.",
      "duur": "30-60 min",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4"
    },
    {
      "titel": "Manuele therapie",
      "tekst": "Hands-on behandeling van gewrichten en spieren om bewegingsbeperkingen op te lossen. Ideaal voor nek-, rug- en gewrichtsklachten die je belemmeren in het dagelijks leven.",
      "duur": "30 min",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry needling",
      "tekst": "Effectieve techniek om hardnekkige spierpijn en triggerpunten aan te pakken. Zorgt voor verlichting en helpt je sneller te herstellen van klachten.",
      "duur": "20-30 min",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Germen Huijser",
      "functie": "Praktijkeigenaar",
      "specialisatie": "Sportfysiotherapeut, Manueel therapie",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Germen-Huijser-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Rosanne Goedhart-Meester",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapie, Bikefitting",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/10/Rosanne-Goedhart-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Ralph Wijnands",
      "functie": "Fysiotherapeut",
      "specialisatie": "Manueel therapie, Echografie",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/10/Ralph-Wijnands-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Joosje den Hertog",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapeut, Bikefitting",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Joosje-den-Hertog-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Shanna Strijker",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapie, Hardlooptechniektrainer",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Shanna-Strijker-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Lonne Jurriens",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapeut",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Lonne-Jurriens-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Amber Meijboom",
      "functie": "Fysiotherapeut",
      "specialisatie": "Dry Needling",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Amber-Meijboom-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Luuk Nipshagen",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapie, Echografie",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Luuk-Nipshagen-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Minke Mallant",
      "functie": "Fysiotherapeut",
      "specialisatie": "Rugby, schouder",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Minke-Mallant-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Thom Bottenheft",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapeut",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2026/03/Tom-Bottenheft-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Taric Markes",
      "functie": "Fysiotherapeut i.o.",
      "specialisatie": "Fitnessinstructeur, Sportverzorger",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Taric-Markes-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Celine Smink",
      "functie": "Diëtist",
      "specialisatie": "Sportdiëtist",
      "foto": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Celine-Smink-SMC-Amersfoort-1333x2000.jpg",
      "uitgelicht": false
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.smcamersfoort.nl/wp-content/uploads/2026/05/Team-SMC-Amersfoort-1-scaled-e1778483368565.jpg"
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
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Je kunt direct een afspraak maken via onze website of telefoon."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat hangt af van je klacht. Gemiddeld hebben patiënten 6 tot 10 behandelingen nodig, maar dit bespreken we in de eerste afspraak."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "We hebben geen wachtlijsten. Je kunt vaak binnen 1 tot 3 dagen terecht voor een intake."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, je wordt behandeld door dezelfde fysiotherapeut, zodat deze jouw herstel goed kan volgen en de behandeling kan afstemmen op jouw vooruitgang."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €45. Als je verzekerd bent, wordt dit vaak volledig vergoed vanuit je aanvullende verzekering."
    }
  ],
  "fotoUitsnede": {},
  "fotoControle": {
    "gekeurd": 16,
    "portretOk": 0,
    "coverOk": 0,
    "afgekeurd": [
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Germen-Huijser-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/10/Rosanne-Goedhart-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/10/Ralph-Wijnands-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Joosje-den-Hertog-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Shanna-Strijker-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Lonne-Jurriens-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Amber-Meijboom-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Luuk-Nipshagen-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Minke-Mallant-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2026/03/Tom-Bottenheft-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Taric-Markes-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/09/Celine-Smink-SMC-Amersfoort-1333x2000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2026/05/Team-SMC-Amersfoort-1-scaled-e1778483368565.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2025/02/smcamersfoort.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2026/05/Sportschool-Amersfoort-e1779169068341-1000x1000.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://www.smcamersfoort.nl/wp-content/uploads/2024/08/Manuele-therapie-scaled-e1679565402774-1000x1000.jpg",
        "reden": "detectie mislukt"
      }
    ],
    "msTotaal": 5992,
    "gegenereerd": 0,
    "gegenereerdOk": 0,
    "gegenereerdAfgekeurd": [],
    "tegelsOpSite": 6,
    "coverAanwezig": true,
    "msNodeE": 0
  },
  "meerdereEchtePersonen": true,
  "fotoReferentie": {
    "bron": null,
    "aantal": 0,
    "urls": [],
    "profiel": {
      "geslacht": "onbekend",
      "leeftijd": null,
      "eenmanspraktijk": null,
      "toelichting": ""
    }
  },
  "stappenKop": "Onze behandelingen",
  "stappenSub": "Specialistische zorg afgestemd op jouw sport en klacht.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ea580c",
    "donker": "#c2410c",
    "licht": "#fed7aa"
  },
  "eigenVoorraadCheck": {
    "teamStock": 0,
    "coverStock": false,
    "extraStock": 0
  }
} as const;

export type Praktijk = typeof praktijk;
