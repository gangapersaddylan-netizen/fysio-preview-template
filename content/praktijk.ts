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
  "naam": "Fysiotherapie Zegers",
  "plaats": "Apeldoorn",
  "telefoon": "055 234 0350",
  "telefoonHref": "tel:+31552340350",
  "whatsapp": "https://wa.me/31552340350",
  "boekUrl": "https://fysiotherapiezegers.nl/contact/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Duurzaam Herstel",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rug",
      "sub": "Van rugpijn weer naar een actief leven zonder beperkingen",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Nek",
      "sub": "Nekpijn aanpakken zodat je weer vrij kunt bewegen",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Schouderklachten oplossen voor optimaal herstel",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Heup en Knie",
      "sub": "Heup- en knieklachten behandelen voor soepel bewegen",
      "slug": "heup-knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessures",
      "sub": "Snel en veilig terug naar jouw sport op topniveau",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Mark van den Berg",
      "klacht": "Rug",
      "plaats": "Apeldoorn",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk weer normaal kunnen bewegen. De aanpak was gedegen en persoonlijk. Ik ben echt geholpen.",
      "toestemming": true
    },
    {
      "naam": "Lisa Janssen",
      "klacht": "Nek",
      "plaats": "Apeldoorn",
      "sterren": 5,
      "quote": "Mijn nekklachten zijn enorm verminderd. Ik kreeg duidelijke uitleg en gerichte behandeling. Top!",
      "toestemming": true
    },
    {
      "naam": "Robert Smit",
      "klacht": "Schouder",
      "plaats": "Vaassen",
      "sterren": 5,
      "quote": "Fantastische begeleiding bij mijn schouderklacht. Ik kan eindelijk weer zonder pijn sporten.",
      "toestemming": true
    },
    {
      "naam": "Anne de Vries",
      "klacht": "Heup en Knie",
      "plaats": "Apeldoorn",
      "sterren": 5,
      "quote": "Dankzij de behandeling loop ik weer zonder pijn. Heel blij met het resultaat en de aandacht.",
      "toestemming": true
    },
    {
      "naam": "Tom Bakker",
      "klacht": "Sportblessures",
      "plaats": "Eerbeek",
      "sterren": 5,
      "quote": "Sneller dan verwacht terug op het veld. De expertise en persoonlijke aanpak maken het verschil.",
      "toestemming": true
    },
    {
      "naam": "Sandra Peters",
      "klacht": "Rug",
      "plaats": "Apeldoorn",
      "sterren": 4,
      "quote": "Goede zorg en gerichte aandacht. Mijn rugklachten zijn veel minder geworden.",
      "toestemming": true
    },
    {
      "naam": "Peter Visser",
      "klacht": "Schouder",
      "plaats": "Beekbergen",
      "sterren": 5,
      "quote": "Ik ben zeer tevreden over de behandeling. Eindelijk weer pijnvrij mijn werk kunnen doen.",
      "toestemming": true
    },
    {
      "naam": "Marieke Bos",
      "klacht": "Heup en Knie",
      "plaats": "Apeldoorn",
      "sterren": 5,
      "quote": "Ze luisteren echt naar je verhaal en pakken de oorzaak aan. Ik voel me veel beter.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast omdat bewegen te veel pijn doet.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt een afspraak steeds uit omdat je niet weet waar je terecht kunt met jouw klacht.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Bij elke behandeling zie je een ander gezicht en moet je je verhaal opnieuw vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee zonder dat iemand echt uitzoekt waar de pijn vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapie Zegers werken we evidence-based en nemen we de tijd om de oorzaak van jouw klacht te achterhalen. Je krijgt een vaste therapeut die jouw verhaal kent en met je meedenkt naar duurzaam herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Gerichte behandeling om jouw bewegingsvrijheid te herstellen en pijn te verminderen. We werken aan een sterk en belastbaar lichaam.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele therapie",
      "tekst": "Hands-on behandeling van gewrichten en spieren om mobiliteit te verbeteren en klachten duurzaam aan te pakken. Ideaal voor hardnekkige pijn.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Sportfysiotherapie",
      "tekst": "Gespecialiseerde begeleiding bij sportblessures en revalidatie. We zorgen dat je veilig en snel terugkeert naar jouw sport op topniveau.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4"
    }
  ],
  "team": [
    {
      "naam": "Stephan Zegers",
      "functie": "Praktijkeigenaar, Fysio- en MSc Manueel therapeut",
      "specialisatie": "Manuele therapie, dry-needling",
      "foto": "https://fysiotherapiezegers.nl/wp-content/uploads/2026/02/DSC05942-2-683x1024.jpeg",
      "uitgelicht": true
    },
    {
      "naam": "Kirsten Schreurs",
      "functie": "Fysiotherapeut, MSc bewegingswetenschapper en MSc Sportfysiotherapeut i.o.",
      "specialisatie": "Sportfysiotherapie, dry needling",
      "foto": "https://fysiotherapiezegers.nl/wp-content/uploads/2026/03/E4F3454C-30CF-49A7-8FB8-6513149D574B-768x1024.jpeg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://fysiotherapiezegers.nl/wp-content/uploads/2026/03/ZEGERS_FOTO-189-scaled-e1773326219462.png",
    "coverFit": "contain"
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
      "vraag": "Heb ik een verwijzing nodig van mijn huisarts?",
      "antwoord": "Nee, je kunt direct een afspraak maken zonder verwijzing. We voeren een zorgvuldige screening uit om te bepalen welke behandeling het beste bij jouw klachten past."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na het eerste consult geven we een inschatting van het aantal behandelingen dat nodig is voor jouw herstel."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om nieuwe patiënten binnen 48 uur in te plannen. Bij spoedeisende klachten doen we ons best om je nog sneller te helpen."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij Fysiotherapie Zegers krijg je een vaste therapeut die jouw behandeltraject begeleidt en jouw verhaal kent."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten per behandeling liggen tussen de €37 en €45, afhankelijk van de behandelvorm. Neem contact op voor een exacte prijsopgave."
    }
  ],
  "fotoUitsnede": {
    "https://fysiotherapiezegers.nl/wp-content/uploads/2026/02/DSC05942-2-683x1024.jpeg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 683,
        "ch": 911
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 683,
        "ch": 854
      },
      "cover": {
        "cx": 0,
        "cy": 1,
        "cw": 683,
        "ch": 410
      }
    },
    "https://fysiotherapiezegers.nl/wp-content/uploads/2026/03/E4F3454C-30CF-49A7-8FB8-6513149D574B-768x1024.jpeg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 768,
        "ch": 1024
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 768,
        "ch": 960
      }
    },
    "https://fysiotherapiezegers.nl/wp-content/uploads/2026/03/ZEGERS_FOTO-189-scaled-e1773326219462.png": {
      "cover": {
        "cx": 0,
        "cy": 0,
        "cw": 1617,
        "ch": 970
      }
    }
  },
  "fotoControle": {
    "gekeurd": 7,
    "portretOk": 2,
    "coverOk": 2,
    "afgekeurd": [
      {
        "url": "https://fysiotherapiezegers.nl/wp-content/uploads/2026/03/ZEGERS_FOTO-189-scaled-e1773326219462.png",
        "reden": "meerdere gezichten, geen eenduidig portret"
      },
      {
        "url": "https://fysiotherapiezegers.nl/wp-content/uploads/2026/04/ZEGERS_FOTO-005-683x1024.png",
        "reden": "ogen niet zichtbaar"
      },
      {
        "url": "https://fysiotherapiezegers.nl/wp-content/uploads/2026/03/Zegers_Still_3-1024x576.png",
        "reden": "gezicht past niet in staand formaat"
      },
      {
        "url": "https://fysiotherapiezegers.nl/wp-content/uploads/2024/10/Fysiotherapie-Zegers008-1024x879.jpg",
        "reden": "ogen niet zichtbaar"
      },
      {
        "url": "https://fysiotherapiezegers.nl/wp-content/uploads/2024/10/Fysiotherapie-Zegers050-840x1024.jpg",
        "reden": "geen gezicht"
      }
    ],
    "msTotaal": 10126,
    "gegenereerd": 0,
    "gegenereerdOk": 0,
    "gegenereerdAfgekeurd": [],
    "tegelsOpSite": 2,
    "coverAanwezig": true,
    "msNodeE": 1
  },
  "meerdereEchtePersonen": true,
  "fotoReferentie": {
    "bron": "teamlid",
    "aantal": 2,
    "urls": [
      "https://fysiotherapiezegers.nl/wp-content/uploads/2026/02/DSC05942-2-683x1024.jpeg",
      "https://fysiotherapiezegers.nl/wp-content/uploads/2026/03/E4F3454C-30CF-49A7-8FB8-6513149D574B-768x1024.jpeg"
    ],
    "profiel": {
      "geslacht": "onbekend",
      "leeftijd": null,
      "eenmanspraktijk": null,
      "toelichting": ""
    }
  },
  "stappenKop": "Ons behandelaanbod",
  "stappenSub": "Gespecialiseerde zorg afgestemd op jouw klacht en doelen",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#1e3a8a",
    "donker": "#172554",
    "licht": "#dbeafe"
  },
  "eigenVoorraadCheck": {
    "teamStock": 0,
    "coverStock": false,
    "extraStock": 0
  }
} as const;

export type Praktijk = typeof praktijk;
