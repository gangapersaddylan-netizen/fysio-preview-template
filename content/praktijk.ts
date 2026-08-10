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
  "naam": "Xpert Clinics",
  "plaats": "Amstelveen",
  "telefoon": "020 201 0800",
  "telefoonHref": "tel:+31202010800",
  "whatsapp": "https://wa.me/31202010800",
  "boekUrl": "https://booking.xpertclinics.nl/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Snel Herstel",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 320,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Knie",
      "sub": "Artrose, meniscus, kraakbeen en kniepijn",
      "slug": "knie",
      "icoon": "Bone"
    },
    {
      "label": "Heup",
      "sub": "Heupartrose, beperkte mobiliteit en pijn",
      "slug": "heup",
      "icoon": "Activity"
    },
    {
      "label": "Hand & Pols",
      "sub": "Carpaal tunnel, triggervinger en tintelingen",
      "slug": "hand-pols",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Rotator cuff, impingement en bewegingsbeperking",
      "slug": "schouder",
      "icoon": "Dumbbell"
    },
    {
      "label": "Enkel & Voet",
      "sub": "Hallux valgus, pijnlijke voeten en enkelblessures",
      "slug": "enkel-voet",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Patricia M.",
      "klacht": "Knie",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na jaren last van mijn knie kon ik eindelijk weer gewoon wandelen. De uitleg was helder en ik voelde me meteen op mijn gemak.",
      "toestemming": true
    },
    {
      "naam": "Jan-Willem V.",
      "klacht": "Heup",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Binnen drie weken geholpen, wat een verschil met het ziekenhuis. Nu ben ik weer actief in de tuin en pak zelfs mijn hobby weer op.",
      "toestemming": true
    },
    {
      "naam": "Marianne K.",
      "klacht": "Hand & Pols",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Ik had carpaal tunnel syndroom en durfde de operatie niet. Het team heeft alles rustig uitgelegd en het herstel verliep voorspoedig.",
      "toestemming": true
    },
    {
      "naam": "Rob S.",
      "klacht": "Schouder",
      "plaats": "Eindhoven",
      "sterren": 4,
      "quote": "Mijn schouder deed al maanden pijn. Na de behandeling kan ik weer bovenhands werken en sporten.",
      "toestemming": true
    },
    {
      "naam": "Lisa T.",
      "klacht": "Knie",
      "plaats": "Amstelveen",
      "sterren": 5,
      "quote": "Korte wachttijd, professioneel team en een behandeling die echt werkt. Ik ben blij dat ik hier terecht kon.",
      "toestemming": true
    },
    {
      "naam": "Gerard H.",
      "klacht": "Enkel & Voet",
      "plaats": "Rozendaal",
      "sterren": 5,
      "quote": "Hallux valgus operatie achter de rug. De zorg was uitstekend en ik loop nu weer zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Sophie B.",
      "klacht": "Hand & Pols",
      "plaats": "Enschede",
      "sterren": 5,
      "quote": "Triggervinger behandeld, snel en vakkundig. Het personeel was vriendelijk en alles werd duidelijk uitgelegd.",
      "toestemming": true
    },
    {
      "naam": "Henk W.",
      "klacht": "Heup",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Nieuwe heup en nu weer wandelingen van twee uur maken. Ik had dit tien jaar eerder moeten doen!",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al maanden in de kast, omdat bewegen pijn doet en je niet meer kunt doen wat je graag deed.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je blijft je klachten uitstellen, want je weet niet of je wel snel terecht kunt of wat de volgende stap is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Elke keer een ander gezicht in de spreekkamer, en je verhaal steeds opnieuw moeten vertellen zonder dat je echt verder komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je krijgt standaardoefeningen mee, maar niemand neemt de tijd om uit te zoeken waar de pijn nou echt vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Xpert Clinics krijg je een vaste specialist die de tijd neemt om jouw klacht grondig uit te zoeken. Met heldere uitleg en een persoonlijk behandelplan weet je precies waar je aan toe bent.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "Je vaste specialist neemt uitgebreid de tijd voor een eerste gesprek en lichamelijk onderzoek. Samen komen we tot een heldere diagnose.",
      "duur": "45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920974/intake_zlwfha.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we een behandelplan op maat op. Je krijgt duidelijke uitleg over de aanpak en wat je kunt verwachten.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920976/behandel_plan_x0kzje.mp4"
    },
    {
      "titel": "Uitvoering en resultaat",
      "tekst": "We starten met de behandeling en begeleiden je tot volledig herstel. Je specialist blijft je vaste aanspreekpunt tijdens het hele traject.",
      "duur": "Gemiddeld 6-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785920977/begeleiding_d5ziie.mp4"
    }
  ],
  "team": [
    {
      "naam": "Muhammed Ali Kedilioglu",
      "functie": "Hand- en polschirurg",
      "specialisatie": "hand- en polschirurgie",
      "foto": "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D1280%26quality%3D100%26format%3Dwebp%26mode%3Dcrop&w=3840&q=100",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.xpertclinics.nl/_next/image?url=%2Fmedia%2Fsrgncs2q%2Fcsm_muhammed_ali_kedilioglu_-_lr_-_xc_-8224-favo_51a913a746.jpg%3Fwidth%3D1280%26quality%3D100%26format%3Dwebp%26mode%3Dcrop&w=3840&q=100"
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
      "vraag": "Heb ik een verwijsbrief nodig?",
      "antwoord": "Voor orthopedische behandelingen heb je geen verwijzing nodig. Je kunt direct een afspraak maken. Voor sommige andere behandelingen kan een verwijzing wel vereist zijn, dit kun je bij het maken van een afspraak navragen."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake bespreekt je specialist een behandelplan en geeft een inschatting van het aantal benodigde afspraken."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "De meeste patiënten kunnen binnen 1 tot 3 dagen terecht voor een eerste afspraak. Bij spoed proberen we je nog sneller te helpen."
    },
    {
      "vraag": "Zie ik steeds dezelfde specialist?",
      "antwoord": "Ja, bij Xpert Clinics krijg je een vaste specialist toegewezen die je gedurende het hele behandeltraject begeleidt. Zo hoef je je verhaal niet steeds opnieuw te vertellen."
    },
    {
      "vraag": "Wat zijn de kosten zonder vergoeding?",
      "antwoord": "De meeste behandelingen worden volledig vergoed vanuit de basisverzekering. Mocht je eigen risico nog niet bereikt zijn, dan gelden de standaard tarieven. Voor specifieke prijsinformatie kun je contact opnemen met onze klantenservice."
    }
  ],
  "stappenKop": "Van klacht tot herstel in drie stappen",
  "stappenSub": "Een duidelijk traject, van eerste afspraak tot volledig herstel.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#0066cc",
    "donker": "#004d99",
    "licht": "#e6f2ff"
  }
} as const;

export type Praktijk = typeof praktijk;
