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
  "naam": "Fysio Bakker",
  "plaats": "Leeuwarden",
  "telefoon": "058 203 83 10",
  "telefoonHref": "tel:+31582038310",
  "whatsapp": "https://wa.me/31582038310",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Deskundig Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 267,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Lage rug, nekpijn, hernia",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouderklachten",
      "sub": "Frozen shoulder, impingement",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Knieklachten",
      "sub": "Meniscus, kruisband, artrose",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessures",
      "sub": "Acute en overbelastingsblessures",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn, migraine",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Bekkenklachten",
      "sub": "Zwangerschap, instabiliteit",
      "slug": "bekkenklachten",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Linda",
      "klacht": "Rugklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na jaren rondlopen met lage rugpijn ben ik eindelijk geholpen. De therapeut nam de tijd om mijn klachten serieus te nemen en stelde een persoonlijk behandelplan op.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Sportblessures",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Ik kon na een knieblessure niet meer hardlopen. Door de gerichte oefeningen en begeleiding loop ik nu weer mijn trainingsronden zonder pijn.",
      "toestemming": true
    },
    {
      "naam": "Annemieke",
      "klacht": "Schouderklachten",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Mijn frozen shoulder beperkte me enorm in mijn werk. De behandeling met manuele therapie heeft me echt geholpen om weer volledig te kunnen functioneren.",
      "toestemming": true
    },
    {
      "naam": "Harm",
      "klacht": "Hoofdpijn",
      "plaats": "Heerenveen",
      "sterren": 4,
      "quote": "Ik had regelmatig spanningshoofdpijn door mijn kantoorwerk. Nu ik weet welke oefeningen ik moet doen, heb ik veel minder last.",
      "toestemming": true
    },
    {
      "naam": "Sanne",
      "klacht": "Bekkenklachten",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Tijdens mijn zwangerschap had ik veel bekkenpijn. De therapeut hielp me met gerichte oefeningen en ik kon de zwangerschap daardoor veel beter volhouden. Ook na de bevalling kreeg ik nog nazorg.",
      "toestemming": true
    },
    {
      "naam": "Pieter",
      "klacht": "Knieklachten",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Door artrose in mijn knie durfde ik bijna niet meer te bewegen. De fysio heeft me geleerd hoe ik juist wél kan blijven bewegen zonder extra schade.",
      "toestemming": true
    },
    {
      "naam": "Jantine",
      "klacht": "Rugklachten",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Na een whiplash bleef ik nekklachten houden. De manuele therapie en uitleg over houding hebben enorm geholpen om weer normaal te kunnen functioneren.",
      "toestemming": true
    },
    {
      "naam": "Roel",
      "klacht": "Sportblessures",
      "plaats": "Leeuwarden",
      "sterren": 4,
      "quote": "Ik had een hamstringblessure die maar niet wilde genezen. De combinatie van behandeling en krachttraining bracht me weer terug op het veld.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt al weken last van pijn en de frustratie groeit omdat je niet meer kunt doen wat je gewend bent.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd, maar de klachten blijven terugkomen of worden zelfs erger.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wilt graag weer volop meedoen in je dagelijkse activiteiten, maar de pijn houdt je tegen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je twijfelt of fysiotherapie wel écht verschil kan maken, of dat je moet leren leven met de klachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we die frustratie. Onze gespecialiseerde therapeuten nemen de tijd om jouw situatie te analyseren en stellen een behandelplan op dat écht bij jou past. Binnen 24 uur kunnen we je helpen en samen werken we aan jouw herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Uitgebreid intake- en onderzoeksgesprek",
      "tekst": "We luisteren naar jouw verhaal, stellen een diagnose en bespreken welke behandeling het beste bij jou past. Je krijgt direct duidelijkheid over de oorzaak van je klachten.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan op maat",
      "tekst": "Op basis van het onderzoek stellen we samen met jou een behandelplan op met haalbare doelen. We combineren hands-on therapie met oefeningen die je thuis kunt doen.",
      "duur": "Gemiddeld 6-8 sessies",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Behandeling en begeleiding naar herstel",
      "tekst": "We begeleiden je stap voor stap naar je doel: pijnvrij bewegen en terugkeren naar jouw dagelijkse activiteiten. Ook na afloop van de behandeling blijven we beschikbaar voor advies.",
      "duur": "Afhankelijk van klacht",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Echografie en EPTE",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "ParkinsonNet specialist",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Dry Needling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sjanne Postma",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Manuele therapie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Fysiotherapeut en Oedeemtherapeut",
      "specialisatie": "Oedeemtherapie en thuiszorg",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Fysiotherapeut en Manueeltherapeut i.o.",
      "specialisatie": "Sportrevalidatie en longaandoeningen",
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
      "vraag": "Heb ik een verwijzing nodig van mijn huisarts?",
      "antwoord": "Nee, sinds 2006 is fysiotherapie vrij toegankelijk. Je kunt direct bij ons terecht zonder verwijzing. Voor sommige verzekeringen kan een verwijzing wel gunstig zijn voor de vergoeding, dit kun je checken bij jouw zorgverzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en per persoon. Tijdens de intake bespreken we een verwachte behandelduur. Gemiddeld zijn 6 tot 8 behandelingen voldoende, maar bij acute klachten zie je vaak al na 2 à 3 sessies verbetering."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij Fysio Bakker streven we ernaar om je binnen 24 uur te kunnen helpen. Je kunt eenvoudig een afspraak maken via telefoon, WhatsApp, e-mail of ons online formulier."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, continuïteit vinden wij belangrijk. Je wordt behandeld door één vaste therapeut die jouw behandeltraject begeleidt. Mocht deze therapeut er een keer niet zijn, dan wordt je altijd goed overgedragen aan een collega."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen aanvullende verzekering heb?",
      "antwoord": "De kosten voor fysiotherapie bedragen ongeveer €37,- per behandeling. Zonder aanvullende verzekering betaal je dit zelf. Met een aanvullende verzekering wordt fysiotherapie (gedeeltelijk) vergoed, afhankelijk van je polis. Neem bij twijfel contact op met je zorgverzekeraar."
    }
  ]
} as const;

export type Praktijk = typeof praktijk;
