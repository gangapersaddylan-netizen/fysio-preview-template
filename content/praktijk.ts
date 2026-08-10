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
  "naam": "Fysiotherapie & Training Amsterdam",
  "plaats": "Amsterdam",
  "telefoon": "020 234 5678",
  "telefoonHref": "tel:+31202345678",
  "whatsapp": "https://wa.me/31202345678",
  "boekUrl": "https://ftamsterdam.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Duurzaam Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 3,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Schouder",
      "sub": "Rotator cuff, beknelling, instabiliteit",
      "slug": "schouderklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Knie",
      "sub": "Kruisbandletsel, meniscus, artrose",
      "slug": "knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Nek & Rug",
      "sub": "Hernia, hoofdpijn, lage rugpijn",
      "slug": "nek-en-rugklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sport",
      "sub": "Sportblessures en revalidatie",
      "slug": "sportrevalidatie",
      "icoon": "Dumbbell"
    },
    {
      "label": "Enkel",
      "sub": "Verstuiking, instabiliteit, pijn",
      "slug": "enkelklachten",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Lars",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na maanden schouderpijn eindelijk iemand die echt naar me luisterde. Benjamin heeft me stap voor stap geholpen en ik kan weer zonder pijn sporten.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "Knie",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Mijn knie speelde op na hardlopen. De behandeling was gericht en persoonlijk. Ik kreeg gerichte oefeningen mee en voel me nu sterker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Tim",
      "klacht": "Nek & Rug",
      "plaats": "Amsterdam-Oost",
      "sterren": 5,
      "quote": "Ik had chronische nekpijn door kantoorwerk. Het team heeft me geholpen de oorzaak te vinden en mijn houding te verbeteren. Wat een verschil!",
      "toestemming": true
    },
    {
      "naam": "Emma",
      "klacht": "Sport",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Als topsporter heb ik een team nodig dat begrijpt hoe belangrijk elk detail is. Hier kreeg ik precies de zorg en aandacht die ik nodig had om terug te keren.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Enkel",
      "plaats": "Wittenburg",
      "sterren": 4,
      "quote": "Na een flinke verstuiking durfde ik niet meer te bewegen. De fysiotherapeut heeft me geholpen mijn vertrouwen terug te krijgen.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Knie",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Ik was bang dat ik niet meer zou kunnen hardlopen na mijn knieblessure. Dankzij de begeleiding hier loop ik nu weer pijnvrij mijn rondes.",
      "toestemming": true
    },
    {
      "naam": "Robert",
      "klacht": "Nek & Rug",
      "plaats": "Centrum-Oost",
      "sterren": 5,
      "quote": "Jarenlang last van mijn rug gehad. Hier werd eindelijk de tijd genomen om te kijken waar het vandaan kwam. Nu weet ik hoe ik het kan voorkomen.",
      "toestemming": true
    },
    {
      "naam": "Yasmin",
      "klacht": "Schouder",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Ik kon mijn arm amper optillen. Na een paar weken behandeling kan ik weer alles doen wat ik wil. Heel blij met de professionele aanpak.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Sporten zit er even niet in, je favoriete activiteit staat op pauze en dat voelt alsof een belangrijk deel van je leven stil is komen te staan.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt het te lang uitgesteld, niet geweten waar je terecht kon, en nu zit je met vragen en onzekerheid over hoe je weer vooruit komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Steeds een ander gezicht, steeds opnieuw je verhaal vertellen en het gevoel dat niemand écht de tijd neemt om jou te leren kennen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je kreeg oefeningen mee, maar niemand heeft echt uitgezocht waar je klacht vandaan komt en waarom standaardoefeningen bij jou niet werken.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysiotherapie & Training Amsterdam werken we anders. We nemen de tijd om jouw verhaal te horen, de oorzaak te achterhalen en samen met jou een plan te maken dat echt bij jou past.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "We starten met een gedegen intake en onderzoek om de oorzaak van je klachten te vinden. Met hands-on behandeling en gerichte oefentherapie helpen we je om weer pijnvrij te bewegen.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Voor hardnekkige nek-, rug- en gewrichtsklachten zetten we manuele technieken in. We mobiliseren gewrichten en weefsels om bewegingsvrijheid en functie te herstellen.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Sportfysiotherapie",
      "tekst": "Of je nu herstelt van een blessure of je prestaties wilt verbeteren: we begeleiden je met sportspecifieke revalidatie en training om sterker en veerkrachtiger terug te keren.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826580/sportfysio_jwbo8b.mp4"
    }
  ],
  "team": [
    {
      "naam": "Benjamin Bos",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "MSc. Manueel therapeut",
      "foto": "https://ftamsterdam.nl/wp-content/uploads/2022/09/Benjamin-Bos.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Jesper Arkenbout",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://ftamsterdam.nl/wp-content/uploads/2022/10/Jesper-Arkenbout.jpeg",
      "uitgelicht": true
    },
    {
      "naam": "Emma Schreuder",
      "functie": "Fysiotherapeut",
      "specialisatie": "MSc. Sportfysiotherapeut",
      "foto": "https://ftamsterdam.nl/wp-content/uploads/2022/09/Emma-Schreuder.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Lieneke Geerts",
      "functie": "Fysiotherapeut",
      "specialisatie": "MSc. Manueel therapeut",
      "foto": "https://ftamsterdam.nl/wp-content/uploads/2025/10/Foto_Lieneke_Website-jpeg.webp",
      "uitgelicht": true
    },
    {
      "naam": "Karlijn Kea",
      "functie": "Fysiotherapeut",
      "specialisatie": "",
      "foto": "https://ftamsterdam.nl/wp-content/uploads/2022/09/Karlijn.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Erik Obbens",
      "functie": "Fysiotherapeut",
      "specialisatie": "Bewegingswetenschapper",
      "foto": "https://ftamsterdam.nl/wp-content/uploads/2022/09/Erik-1.jpg",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://ftamsterdam.nl/wp-content/uploads/2022/08/Fysiotherapie-Training-Amsterdam.jpg"
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
      "antwoord": "Nee, bij ons kunt u ook zonder verwijzing terecht. U kunt direct een afspraak maken. Voor vergoeding via uw zorgverzekering is een verwijzing vaak niet nodig, maar check dit wel even bij uw verzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Na de intake en het onderzoek bespreken we een behandelplan met u en geven we een indicatie van het aantal benodigde sessies. Sommige klachten zijn binnen enkele weken opgelost, andere vragen om een langer traject."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om nieuwe patiënten binnen 3 tot 5 werkdagen te kunnen inplannen. Bij acute klachten of spoedgevallen proberen we altijd ruimte te maken."
    },
    {
      "vraag": "Zie ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, bij ons wordt u behandeld door één vaste therapeut die uw traject van begin tot eind begeleidt. Zo bent u verzekerd van continuïteit en persoonlijke aandacht, zonder uw verhaal steeds opnieuw te hoeven vertellen."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen vergoeding heb?",
      "antwoord": "Een intakeconsult kost €65 en een vervolgbehandeling €45. Manuele therapie kost €55 per sessie. We adviseren altijd om te controleren wat uw zorgverzekering vergoedt, want fysiotherapie valt vaak onder de aanvullende verzekering."
    }
  ],
  "stappenKop": "Ons behandelaanbod",
  "stappenSub": "Van fysiotherapie tot sportrevalidatie: wij bieden de zorg die past bij jouw klacht en doelen.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#dc2626",
    "donker": "#991b1b",
    "licht": "#fee2e2"
  }
} as const;

export type Praktijk = typeof praktijk;
