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
  "naam": "Fysiotherapiepraktijk Corlaer",
  "plaats": "Nijkerk",
  "telefoon": "033 7210 444",
  "telefoonHref": "tel:+31337210444",
  "whatsapp": "https://wa.me/31337210444",
  "boekUrl": "#contact",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/h_540,c_scale,q_auto,ac_none/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Actief Blijven",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 156,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Bekkenbodem",
      "sub": "Hulp bij blaasproblemen en pijn in de onderbuik.",
      "slug": "bekkenbodem",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rug",
      "sub": "Van lage rugklachten tot bekkeninstabiliteit.",
      "slug": "rug",
      "icoon": "Bone"
    },
    {
      "label": "Etalagebenen",
      "sub": "Looptherapie bij doorbloedingsproblemen in de benen.",
      "slug": "etalagebenen",
      "icoon": "Activity"
    },
    {
      "label": "Sport",
      "sub": "Blessures voorkomen en prestaties verbeteren.",
      "slug": "sport",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Behandeling van spanning en pijn in hoofd en nek.",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Marieke V.",
      "klacht": "Bekkenbodem",
      "plaats": "Nijkerk",
      "sterren": 5,
      "quote": "Na mijn zwangerschap had ik last van ongewenst urineverlies. Dankzij de specialistische begeleiding kan ik weer zonder zorgen bewegen en sporten.",
      "toestemming": true
    },
    {
      "naam": "Jan B.",
      "klacht": "Etalagebenen",
      "plaats": "Amersfoort",
      "sterren": 5,
      "quote": "Ik kon nog maar een klein stukje lopen zonder pijn. Door de looptherapie loop ik nu drie keer zo ver. Wat een verschil!",
      "toestemming": true
    },
    {
      "naam": "Linda K.",
      "klacht": "Rug",
      "plaats": "Nijkerk",
      "sterren": 5,
      "quote": "Jarenlang last van mijn onderrug. Het team heeft echt de tijd genomen om de oorzaak te vinden en niet alleen de pijn te behandelen.",
      "toestemming": true
    },
    {
      "naam": "Peter S.",
      "klacht": "Sport",
      "plaats": "Putten",
      "sterren": 4,
      "quote": "Door de bikefit en gerichte training rijd ik nu pijnvrij en veel comfortabeler. Aanrader voor elke wielrenner.",
      "toestemming": true
    },
    {
      "naam": "Anne W.",
      "klacht": "Hoofdpijn",
      "plaats": "Nijkerk",
      "sterren": 5,
      "quote": "Ik had elke week hoofdpijn door spanning in mijn nek. Na de behandeling ben ik eindelijk van mijn klachten af.",
      "toestemming": true
    },
    {
      "naam": "Rob M.",
      "klacht": "Rug",
      "plaats": "Voorthuizen",
      "sterren": 5,
      "quote": "De dry needling heeft mijn verharde spieren goed losgemaakt. Ik kan weer normaal bewegen zonder die constante pijn.",
      "toestemming": true
    },
    {
      "naam": "Sandra H.",
      "klacht": "Sport",
      "plaats": "Nijkerk",
      "sterren": 5,
      "quote": "Dankzij het EGYM-programma ben ik veel sterker geworden en heb ik geen terugkerende blessures meer. Top begeleiding!",
      "toestemming": true
    },
    {
      "naam": "Henk J.",
      "klacht": "Etalagebenen",
      "plaats": "Barneveld",
      "sterren": 4,
      "quote": "Het lopen ging steeds moeizamer. Met het oefenprogramma ben ik weer veel actiever en voel ik me fitter.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, omdat bewegen gewoon niet meer gaat zoals je wilt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je blijft maar uitstellen en weet eigenlijk niet waar je met je klacht terecht kunt of hoelang je moet wachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer zie je weer een ander gezicht en moet je je hele verhaal opnieuw vertellen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand legt je echt uit waar je klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapiepraktijk Corlaer werken we anders. Je wordt vanaf het begin geholpen door een vast team dat echt de tijd neemt om je klacht te begrijpen en de oorzaak te vinden. Zo weet je precies waar je aan toe bent en wat je kunt verwachten.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We beginnen met een uitgebreid intakegesprek en grondig onderzoek. Zo ontdekken we wat er speelt en waar je klacht vandaan komt.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van het onderzoek stellen we een behandelplan op dat past bij jouw situatie en doelen. Je weet precies wat we gaan doen en waarom.",
      "duur": "Tijdens de eerste afspraak",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "We behandelen je met de nieuwste technieken en begeleiden je stap voor stap naar herstel. Je ziet week na week vooruitgang.",
      "duur": "Gemiddeld 6-8 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Marco Kamphorst",
      "functie": "Fysiotherapeut",
      "specialisatie": "Manueel Therapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/MK-website-scaled.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Tom Cozijnsen",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/TC-website-scaled.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Gert van Dasler",
      "functie": "Fysiotherapeut",
      "specialisatie": "Manueel Therapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/GD-website-scaled.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sanne van den Berg",
      "functie": "Fysiotherapeut",
      "specialisatie": "Bewegingswetenschapper",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/SB-website-scaled.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Ramon Kasteleijn",
      "functie": "Fysiotherapeut",
      "specialisatie": "Manueel Therapeut, Handtherapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/RK-website-scaled.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Margriet Eenjes",
      "functie": "Fysiotherapeut",
      "specialisatie": "Psychosomatische fysiotherapie",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/ME-website-scaled.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Pieter Robbemond",
      "functie": "Fysiotherapeut",
      "specialisatie": "Psychosomatisch Fysiotherapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/PR-website-scaled.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Anne-Wil Prins",
      "functie": "Kinderfysiotherapeut",
      "specialisatie": "SI-therapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/AP-website-scaled.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Cynthia Ruiter-Ringeling",
      "functie": "Fysiotherapeut",
      "specialisatie": "Psychosomatische Fysiotherapie",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2026/04/Cynthia-portret-foto-website-768x960.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Ruben Ubels",
      "functie": "Fysiotherapeut",
      "specialisatie": "Handtherapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/RU-website-scaled.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Koos de Ruiter",
      "functie": "Fysiotherapeut",
      "specialisatie": "Psychosomatisch Fysiotherapeut",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/KR-website-scaled.jpg",
      "uitgelicht": false
    },
    {
      "naam": "Jelldrick van de Bunt",
      "functie": "Fysiotherapeut",
      "specialisatie": "Shockwave therapie",
      "foto": "https://gc-corlaer.nl/wp-content/uploads/2023/10/JB-website-scaled.jpg",
      "uitgelicht": false
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://gc-corlaer.nl/wp-content/uploads/2025/11/fysiopraktijk_Corlaer_groep-39.jpg",
    "coverBron": "echte groepsfoto van de site"
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
      "antwoord": "Voor fysiotherapie heb je sinds 2006 geen verwijzing meer nodig. Je kunt dus direct bij ons terecht. Voor sommige specialistische behandelingen zoals Claudicatio Intermittens is wel een verwijzing vereist."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat is per persoon verschillend en hangt af van je klacht. Gemiddeld zijn 6 tot 8 behandelingen nodig, maar dat bespreken we tijdens de intake. We evalueren regelmatig de voortgang."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We proberen je zo snel mogelijk te helpen. Meestal kun je binnen 2 tot 3 werkdagen terecht voor een eerste afspraak. Voor spoedeisende gevallen doen we ons best om nog sneller een plek te vinden."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij ons word je behandeld door een vaste therapeut die je klacht van begin tot eind begeleidt. Zo hoef je je verhaal niet steeds opnieuw te vertellen en kent je therapeut precies je situatie."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten voor een behandeling bedragen tussen de €40 en €50 per sessie, afhankelijk van het type behandeling. Sommige specialistische behandelingen zoals bikefit of dry needling kunnen iets afwijken. Neem contact op voor exacte tarieven."
    }
  ],
  "fotoUitsnede": {
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/MK-website-scaled.jpg": {
      "tegel": {
        "cx": 129,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 1,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/TC-website-scaled.jpg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/GD-website-scaled.jpg": {
      "tegel": {
        "cx": 128,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/SB-website-scaled.jpg": {
      "tegel": {
        "cx": 12,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/RK-website-scaled.jpg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/ME-website-scaled.jpg": {
      "tegel": {
        "cx": 128,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/PR-website-scaled.jpg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/AP-website-scaled.jpg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/RU-website-scaled.jpg": {
      "tegel": {
        "cx": 128,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/KR-website-scaled.jpg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2023/10/JB-website-scaled.jpg": {
      "tegel": {
        "cx": 118,
        "cy": 0,
        "cw": 1920,
        "ch": 2560
      },
      "kaart": {
        "cx": 1,
        "cy": 0,
        "cw": 2048,
        "ch": 2560
      }
    },
    "https://gc-corlaer.nl/wp-content/uploads/2025/11/fysiopraktijk_Corlaer_groep-39.jpg": {
      "cover": {
        "cx": 0,
        "cy": 0,
        "cw": 5665,
        "ch": 3399
      }
    }
  },
  "fotoControle": {
    "gekeurd": 13,
    "portretOk": 11,
    "coverOk": 1,
    "afgekeurd": [
      {
        "url": "https://gc-corlaer.nl/wp-content/uploads/2026/04/Cynthia-portret-foto-website-768x960.jpg",
        "reden": "gezicht past niet in staand formaat"
      },
      {
        "url": "https://gc-corlaer.nl/wp-content/uploads/2025/11/fysiopraktijk_Corlaer_groep-39.jpg",
        "reden": "meerdere gezichten, geen eenduidig portret"
      }
    ],
    "msTotaal": 37712,
    "gegenereerd": 0,
    "gegenereerdOk": 0,
    "gegenereerdAfgekeurd": [],
    "coverBron": "echte groepsfoto van de site",
    "tegelsOpSite": 6,
    "coverAanwezig": true,
    "msNodeE": 1
  },
  "meerdereEchtePersonen": true,
  "echtTeamViaGroepsfoto": false,
  "fotoReferentie": {
    "bron": "teamlid",
    "aantal": 2,
    "urls": [
      "https://gc-corlaer.nl/wp-content/uploads/2023/10/MK-website-scaled.jpg",
      "https://gc-corlaer.nl/wp-content/uploads/2023/10/TC-website-scaled.jpg"
    ],
    "profiel": {
      "geslacht": "onbekend",
      "leeftijd": null,
      "eenmanspraktijk": null,
      "toelichting": ""
    }
  },
  "stappenKop": "Van eerste gesprek tot resultaat",
  "stappenSub": "In drie heldere stappen naar een oplossing voor jouw klacht.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#5fc3d8",
    "donker": "#3a9bb0",
    "licht": "#e8f7fa"
  },
  "echtTeamTegels": {
    "leden": [],
    "referenties": 0,
    "nodig": 0,
    "taken": 0
  },
  "eigenVoorraadCheck": {
    "teamStock": 0,
    "coverStock": false,
    "extraStock": 0
  }
} as const;

export type Praktijk = typeof praktijk;
