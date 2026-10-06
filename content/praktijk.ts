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
  "naam": "Van Vught Fysiotherapie",
  "plaats": "Den Bosch",
  "telefoon": "06 46 88 80 34",
  "telefoonHref": "tel:+31646888034",
  "whatsapp": "https://wa.me/31646888034",
  "boekUrl": "https://vanvughtfysiotherapie.uwpraktijkonline.nl/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/h_540,c_scale,q_auto,ac_none/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijvend Bewegen",
  "trust": {
    "googleScore": 4.9,
    "aantalReviews": 114,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Nek",
      "sub": "Pijn, spanning of stijfheid die het bewegen beperkt",
      "slug": "nekklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Last bij bewegingen of pijn die uitstraalt",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Rug",
      "sub": "Klachten in onderrug, bovenrug of nek",
      "slug": "rugklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sport",
      "sub": "Blessures of klachten door overbelasting",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hamstring",
      "sub": "Langdurige klachten die sporten onmogelijk maken",
      "slug": "hamstring",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Lisa van Bergen",
      "klacht": "Rug",
      "plaats": "Den Bosch",
      "sterren": 5,
      "quote": "Ik ging bijna niet meer uit angst voor die pijnscheuten. Nu voel ik me weer een stuk zekerder en durf ik gewoon te bewegen.",
      "toestemming": true
    },
    {
      "naam": "Tom Hendriks",
      "klacht": "Sport",
      "plaats": "Vught",
      "sterren": 5,
      "quote": "Na maanden dezelfde blessure eindelijk de juiste hulp gevonden. Kan nu weer trainen zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Marloes Jansen",
      "klacht": "Nek",
      "plaats": "Rosmalen",
      "sterren": 5,
      "quote": "Ze luistert echt naar je verhaal en neemt de tijd. Ik voel me serieus genomen.",
      "toestemming": true
    },
    {
      "naam": "Kevin de Vries",
      "klacht": "Hamstring",
      "plaats": "Den Bosch",
      "sterren": 5,
      "quote": "Bijna een jaar lang dezelfde klacht. Na een paar behandelingen eindelijk weer kunnen hardlopen. Enorme opluchting.",
      "toestemming": true
    },
    {
      "naam": "Sophie Vermeulen",
      "klacht": "Schouder",
      "plaats": "Vught",
      "sterren": 5,
      "quote": "Ik kon mijn arm nauwelijks meer optillen. Nu kan ik weer mijn werk doen zonder pijn. Dankbaar.",
      "toestemming": true
    },
    {
      "naam": "Jeroen Bakker",
      "klacht": "Rug",
      "plaats": "Den Bosch",
      "sterren": 4,
      "quote": "Goede uitleg en duidelijk behandelplan. Ik weet nu waar mijn klachten vandaan komen en wat ik eraan kan doen.",
      "toestemming": true
    },
    {
      "naam": "Emma Willems",
      "klacht": "Nek",
      "plaats": "Rosmalen",
      "sterren": 5,
      "quote": "Prettige praktijk met korte wachttijd. Ik kon al binnen twee dagen terecht.",
      "toestemming": true
    },
    {
      "naam": "Lars Smeets",
      "klacht": "Sport",
      "plaats": "Vught",
      "sterren": 5,
      "quote": "Ze kijken echt naar de oorzaak en niet alleen naar het symptoom. Dat maakt het verschil.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je favoriete sport of hobby ligt stil omdat je lichaam niet meer meewerkt zoals vroeger.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je twijfelt waar je terecht kunt en stelt het uit, terwijl de klachten alleen maar erger worden.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een ander gezicht en je verhaal opnieuw uitleggen, zonder dat iemand je echt lijkt te begrijpen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Oefeningen meekrijgen zonder dat iemand echt uitlegt waar de pijn vandaan komt en waarom je dit zou moeten doen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Van Vught Fysiotherapie nemen we de tijd om jouw verhaal te horen en samen de échte oorzaak te vinden. We leggen rustig uit wat er aan de hand is en werken aan een plan dat bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie op maat",
      "tekst": "We starten met een grondige evaluatie en behandelen vervolgens met hands-on technieken, gericht op jouw specifieke klachten en behoeften.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Dry needling voor diepe spanning",
      "tekst": "Bij hardnekkige spierspanning passen we dry needling toe om diepliggende triggerpunten aan te pakken en herstel te versnellen.",
      "duur": "15-20 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    },
    {
      "titel": "Functionele revalidatie",
      "tekst": "In onze sportzaal werk je onder begeleiding aan gerichte oefeningen die je sterker maken en voorbereiden op dagelijkse activiteiten of sport.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826546/revalidatie_oos4pt.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826546/revalidatie_oos4pt.mp4"
    }
  ],
  "team": [
    {
      "naam": "Amy van Hees",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapie, Dry Needling",
      "foto": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2024/09/Amy-van-Hees-1-776x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Jamie Doomernik",
      "functie": "Fysiotherapeut",
      "specialisatie": "Orthopedische revalidatie",
      "foto": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2024/11/Jamie-Doomernik-e1731262919720-716x1024.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Martijn van Vught",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportfysiotherapie, HVLA",
      "foto": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/11/Martijn-van-Vught-midshot.jpeg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://raw.githubusercontent.com/gangapersaddylan-netizen/fysio-preview-template/assets/composiet/rij-34-1791301331704.jpg",
    "coverBron": "composiet uit W1",
    "extraFotos": [
      "https://vanvughtfysiotherapie.nl/wp-content/uploads/2025/09/Amy-helemaal-768x1152.jpg",
      "https://vanvughtfysiotherapie.nl/wp-content/uploads/2025/09/Jamie-helemaal-768x1152.jpg",
      "https://vanvughtfysiotherapie.nl/wp-content/uploads/2025/09/Martijn-helemaal-1-768x1152.jpg"
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
      "antwoord": "Nee, je kunt rechtstreeks bij ons terecht zonder verwijzing van de huisarts. Wel kun je je behandeling declareren bij je zorgverzekeraar als je een basisverzekering hebt."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat is per persoon verschillend en hangt af van je klacht. Na de intake bespreken we samen een behandelplan en geven we een indicatie van het aantal sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om nieuwe patiënten binnen 48 uur te kunnen ontvangen. Je kunt online een afspraak maken of ons bellen voor spoedgevallen."
    },
    {
      "vraag": "Krijg ik altijd dezelfde therapeut?",
      "antwoord": "Ja, we werken met vaste therapeuten zodat je continuïteit hebt en je niet steeds opnieuw je verhaal hoeft te vertellen. Dit zorgt voor een persoonlijke behandeling."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een standaard behandeling kost €45. Als je eigen risico op is of geen fysiotherapie in je pakket hebt, betaal je dit bedrag per sessie. We verstrekken altijd een factuur."
    }
  ],
  "fotoUitsnede": {
    "https://vanvughtfysiotherapie.nl/wp-content/uploads/2024/11/Jamie-Doomernik-e1731262919720-716x1024.jpg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 716,
        "ch": 955
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 716,
        "ch": 895
      }
    },
    "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/11/Martijn-van-Vught-midshot.jpeg": {
      "tegel": {
        "cx": 0,
        "cy": 0,
        "cw": 800,
        "ch": 1067
      },
      "kaart": {
        "cx": 0,
        "cy": 0,
        "cw": 800,
        "ch": 1000
      }
    },
    "https://vanvughtfysiotherapie.nl/wp-content/uploads/2025/09/Amy-helemaal-768x1152.jpg": {
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
    "https://vanvughtfysiotherapie.nl/wp-content/uploads/2025/09/Jamie-helemaal-768x1152.jpg": {
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
    "https://vanvughtfysiotherapie.nl/wp-content/uploads/2025/09/Martijn-helemaal-1-768x1152.jpg": {
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
    }
  },
  "fotoControle": {
    "gekeurd": 13,
    "portretOk": 5,
    "coverOk": 0,
    "afgekeurd": [
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2024/09/Amy-van-Hees-1-776x1024.jpg",
        "reden": "gezicht past niet in staand formaat"
      },
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2025/04/Martijn-van-Vught-2.png",
        "reden": "gezicht past niet in staand formaat"
      },
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/09/MG_5213.jpeg",
        "reden": "geen gezicht met ogen zichtbaar"
      },
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/11/MG_5116.jpg",
        "reden": "ogen niet zichtbaar"
      },
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/11/MG_5152.jpg",
        "reden": "hoofd afgesneden in origineel"
      },
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/11/MG_5234.jpg",
        "reden": "meerdere gezichten, geen eenduidig portret"
      },
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/11/MG_5092.jpg",
        "reden": "hoofd afgesneden in origineel"
      },
      {
        "url": "https://vanvughtfysiotherapie.nl/wp-content/uploads/2023/11/MG_5103.jpg",
        "reden": "ogen niet zichtbaar"
      }
    ],
    "msTotaal": 16524,
    "gegenereerd": 0,
    "gegenereerdOk": 0,
    "gegenereerdAfgekeurd": [],
    "coverBron": "composiet uit W1",
    "tegelsOpSite": 6,
    "coverAanwezig": true,
    "msNodeE": 0
  },
  "meerdereEchtePersonen": true,
  "echtTeamViaGroepsfoto": false,
  "fotoReferentie": {
    "bron": "teamlid",
    "aantal": 2,
    "urls": [
      "https://vanvughtfysiotherapie.nl/wp-content/uploads/2024/09/Amy-van-Hees-1-776x1024.jpg",
      "https://vanvughtfysiotherapie.nl/wp-content/uploads/2024/11/Jamie-Doomernik-e1731262919720-716x1024.jpg"
    ],
    "profiel": {
      "geslacht": "onbekend",
      "leeftijd": null,
      "eenmanspraktijk": null,
      "toelichting": ""
    }
  },
  "stappenKop": "Onze behandelingen",
  "stappenSub": "We combineren hands-on technieken met functionele training voor duurzaam herstel.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#0066cc",
    "donker": "#004d99",
    "licht": "#e6f2ff"
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
