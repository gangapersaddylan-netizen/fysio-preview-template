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
  "naam": "AYO CARE",
  "plaats": "Tholen",
  "telefoon": "06-29420097",
  "telefoonHref": "tel:+31629420097",
  "whatsapp": "https://wa.me/31629420097",
  "boekUrl": "#contact",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Pijnvrij Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 127,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Chronische pijn",
      "sub": "Langdurige pijn die niet vanzelf overgaat na blessure of operatie",
      "slug": "chronische-pijn",
      "icoon": "HeartPulse"
    },
    {
      "label": "Revalidatie",
      "sub": "Herstel na operatie of blessure met minder pijn en meer beweging",
      "slug": "revalidatie",
      "icoon": "Activity"
    },
    {
      "label": "Beweging",
      "sub": "Beperkte bewegingsvrijheid door oude blessure of operatie",
      "slug": "bewegingsbeperkingen",
      "icoon": "PersonStanding"
    },
    {
      "label": "Beroepsklacht",
      "sub": "Chronische klachten door eenzijdige belasting op het werk",
      "slug": "beroepsgerelateerd",
      "icoon": "Bone"
    },
    {
      "label": "Zenuwpijn",
      "sub": "Neuropatische klachten door een niet goed functionerend zenuwstelsel",
      "slug": "neuropatische-klachten",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Mark",
      "klacht": "Chronische pijn",
      "plaats": "Tholen",
      "sterren": 5,
      "quote": "Na jaren van pijn eindelijk weer normaal kunnen bewegen. Het AYO CARE programma pakt de oorzaak aan in plaats van de pijn te onderdrukken.",
      "toestemming": true
    },
    {
      "naam": "Sandra",
      "klacht": "Revalidatie",
      "plaats": "Bergen op Zoom",
      "sterren": 5,
      "quote": "Mijn herstel na de operatie verliep moeizaam. Dankzij de behandeling heb ik mijn bewegingsvrijheid teruggekregen en is de pijn verdwenen.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Beroepsklacht",
      "plaats": "Tholen",
      "sterren": 5,
      "quote": "Door mijn werk kreeg ik chronische klachten. De cyclus is doorbroken en ik kan weer gewoon functioneren.",
      "toestemming": true
    },
    {
      "naam": "Jantine",
      "klacht": "Zenuwpijn",
      "plaats": "Steenbergen",
      "sterren": 5,
      "quote": "Jarenlang zenuwpijn gehad na een operatie. Hier hebben ze mijn zenuwstelsel weer geactiveerd en de klachten zijn sterk afgenomen.",
      "toestemming": true
    },
    {
      "naam": "Rob",
      "klacht": "Beweging",
      "plaats": "Roosendaal",
      "sterren": 4,
      "quote": "Kon jarenlang niet meer vrij bewegen. Nu heb ik veel meer bewegingsruimte en aanzienlijk minder pijn. Wat een verschil!",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Chronische pijn",
      "plaats": "Tholen",
      "sterren": 5,
      "quote": "Ze zoeken echt naar de oorzaak in plaats van alleen maar pijnstillers voor te schrijven. Eindelijk resultaat.",
      "toestemming": true
    },
    {
      "naam": "Bert",
      "klacht": "Revalidatie",
      "plaats": "Bergen op Zoom",
      "sterren": 5,
      "quote": "Na mijn hernia operatie bleef ik klachten houden. Hier hebben ze me echt geholpen om weer normaal te kunnen functioneren.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Zenuwpijn",
      "plaats": "Steenbergen",
      "sterren": 5,
      "quote": "De persoonlijke aanpak en uitgebreide intake maakten het verschil. Ze nemen echt de tijd om je te begrijpen.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt de dingen die je graag deed moeten opgeven omdat de pijn te groot werd.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt lang gewacht op het juiste moment om hulp te zoeken, maar wist niet waar je terecht kon.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer weer je verhaal vertellen aan een nieuwe behandelaar die je niet kent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je kreeg standaardoefeningen mee zonder dat iemand echt uitzoekt waar de klacht vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij AYO CARE werken we anders. We zoeken naar de oorzaak van je klachten en leggen rustig uit wat er aan de hand is, zodat je begrijpt hoe we je kunnen helpen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Uitgebreide intake en diagnose",
      "tekst": "We nemen ruim de tijd om je verhaal te horen en onderzoeken grondig waar je klachten vandaan komen. Geen haast, maar écht begrip van je situatie.",
      "duur": "60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de intake stellen we een behandelplan op dat past bij jouw klachten en situatie. We richten ons op de oorzaak, niet alleen op de symptomen.",
      "duur": "Op maat",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Behandeling en resultaat",
      "tekst": "Met het AYO CARE programma werken we aan herstel van functie en vermindering van pijn. Je krijgt dezelfde behandelaar en merkt stap voor stap vooruitgang.",
      "duur": "Meerdere sessies",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://static.wixstatic.com/media/f16c88_92706cd7c02a437b85d328bb0a06bd90~mv2.jpg/v1/fill/w_960,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f16c88_92706cd7c02a437b85d328bb0a06bd90~mv2.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=1",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=2",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=3",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=4",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=5",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg/v1/fill/w_894,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AyoCare%20-%20Luciennefotografie_com-10.jpg",
    "coverBron": "echte groepsfoto van de site (team via groepsfoto, 7 gezichten)"
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
      "antwoord": "Voor fysiotherapie heb je geen verwijzing nodig. Je kunt direct een afspraak maken. De meeste zorgverzekeringen vergoeden fysiotherapie vanuit de basisverzekering of aanvullende verzekering."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake kunnen we een inschatting maken. Bij chronische klachten werken we met een behandelprogramma van meerdere sessies om duurzaam resultaat te bereiken."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kun je binnen een week terecht voor een intake. We streven ernaar om niet langer dan een week wachttijd te hebben, zodat je snel geholpen wordt."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, bij AYO CARE word je behandeld door een vaste therapeut die je kent en die jouw situatie begrijpt. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "De kosten voor een behandeling liggen tussen de €45 en €65 per sessie, afhankelijk van de duur en complexiteit. Tijdens de intake bespreken we de kosten en mogelijkheden voor vergoeding."
    }
  ],
  "fotoUitsnede": {
    "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg/v1/fill/w_894,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AyoCare%20-%20Luciennefotografie_com-10.jpg": {
      "cover": {
        "cx": 0,
        "cy": 0,
        "cw": 894,
        "ch": 536
      }
    },
    "https://static.wixstatic.com/media/f16c88_92706cd7c02a437b85d328bb0a06bd90~mv2.jpg/v1/fill/w_960,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f16c88_92706cd7c02a437b85d328bb0a06bd90~mv2.jpg": {
      "tegel": {
        "cx": 191,
        "cy": 4,
        "cw": 480,
        "ch": 640
      },
      "kaart": {
        "cx": 135,
        "cy": 0,
        "cw": 592,
        "ch": 740
      }
    },
    "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=1": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 1053,
        "ch": 1404
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 1123,
        "ch": 1404
      }
    },
    "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=2": {
      "tegel": {
        "cx": 1255,
        "cy": 187,
        "cw": 798,
        "ch": 1064
      },
      "kaart": {
        "cx": 1229,
        "cy": 187,
        "cw": 852,
        "ch": 1064
      }
    },
    "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=3": {
      "tegel": {
        "cx": 1562,
        "cy": 453,
        "cw": 868,
        "ch": 1158
      },
      "kaart": {
        "cx": 1533,
        "cy": 453,
        "cw": 926,
        "ch": 1158
      }
    },
    "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=4": {
      "tegel": {
        "cx": 1921,
        "cy": 106,
        "cw": 828,
        "ch": 1104
      },
      "kaart": {
        "cx": 1894,
        "cy": 106,
        "cw": 883,
        "ch": 1104
      }
    },
    "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg?gezicht=5": {
      "tegel": {
        "cx": 2307,
        "cy": 315,
        "cw": 938,
        "ch": 1251
      },
      "kaart": {
        "cx": 2275,
        "cy": 315,
        "cw": 1001,
        "ch": 1251
      }
    }
  },
  "fotoControle": {
    "gekeurd": 3,
    "portretOk": 1,
    "coverOk": 1,
    "afgekeurd": [
      {
        "url": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg/v1/fill/w_894,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AyoCare%20-%20Luciennefotografie_com-10.jpg",
        "reden": "meerdere gezichten, geen eenduidig portret"
      },
      {
        "url": "https://static.wixstatic.com/media/843bb7_6c46362daa8d421fa0c079da77dcb17f~mv2.jpg/v1/fill/w_1920,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/843bb7_6c46362daa8d421fa0c079da77dcb17f~mv2.jpg",
        "reden": "hoofd afgesneden in origineel"
      }
    ],
    "msTotaal": 13273,
    "gegenereerd": 0,
    "gegenereerdOk": 0,
    "gegenereerdAfgekeurd": [],
    "coverBron": "echte groepsfoto van de site (team via groepsfoto, 7 gezichten)",
    "tegelsOpSite": 6,
    "coverAanwezig": true,
    "msNodeE": 0
  },
  "meerdereEchtePersonen": false,
  "echtTeamViaGroepsfoto": true,
  "groepsfotoTegels": {
    "bron": "https://static.wixstatic.com/media/f16c88_3a0dc4938cdb47d6be9aa6b9258b9069~mv2.jpg",
    "imgW": 3593,
    "imgH": 2395,
    "gezichten": 7,
    "tegels": 5,
    "overgeslagen": [
      "past niet of buurman in beeld",
      "past niet of buurman in beeld"
    ]
  },
  "fotoReferentie": {
    "bron": "portretfoto van de site",
    "aantal": 1,
    "urls": [
      "https://static.wixstatic.com/media/f16c88_92706cd7c02a437b85d328bb0a06bd90~mv2.jpg/v1/fill/w_960,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f16c88_92706cd7c02a437b85d328bb0a06bd90~mv2.jpg"
    ],
    "profiel": {
      "geslacht": "onbekend",
      "leeftijd": null,
      "eenmanspraktijk": null,
      "toelichting": ""
    }
  },
  "stappenKop": "Jouw weg naar herstel",
  "stappenSub": "Van eerste afspraak tot duurzaam resultaat, in drie heldere stappen",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#00a0b0",
    "donker": "#007a87",
    "licht": "#e6f7f9"
  },
  "eigenVoorraadCheck": {
    "teamStock": 0,
    "coverStock": false,
    "extraStock": 0
  }
} as const;

export type Praktijk = typeof praktijk;
