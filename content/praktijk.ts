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
  "plaats": "Drachten",
  "telefoon": "0512 - 358 230",
  "telefoonHref": "tel:+31512358230",
  "whatsapp": "https://wa.me/31512358230",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Pijnvrij Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 247,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Rugpijn en hernia",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Nekklachten",
      "sub": "Nek- en schouderpijn",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouderklachten",
      "sub": "Frozen shoulder en bursitis",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Knieklachten",
      "sub": "Meniscus en kniepijn",
      "slug": "knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessures",
      "sub": "Sportgerelateerd letsel",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn en migraine",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Linda",
      "klacht": "Rugklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Na jaren last van mijn onderrug ben ik eindelijk verlost van de pijn. De behandeling was gericht en de uitleg helder.",
      "toestemming": true
    },
    {
      "naam": "Marco",
      "klacht": "Schouderklachten",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Mijn frozen shoulder belemmerde me in alles. Dankzij de manuele therapie kan ik mijn arm weer normaal bewegen.",
      "toestemming": true
    },
    {
      "naam": "Anneke",
      "klacht": "Nekklachten",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Ik had dagelijks nekpijn door mijn kantoorwerk. Nu weet ik hoe ik dit kan voorkomen en de pijn is weg.",
      "toestemming": true
    },
    {
      "naam": "Jelle",
      "klacht": "Knieklachten",
      "plaats": "Damwoude",
      "sterren": 4,
      "quote": "Mijn knie deed pijn bij elke trap. De oefeningen hebben echt geholpen en ik sport weer volop.",
      "toestemming": true
    },
    {
      "naam": "Sanne",
      "klacht": "Hoofdpijn",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Chronische hoofdpijn maakte mijn leven zwaar. Door de behandeling heb ik veel minder last en begrijp ik de triggers beter.",
      "toestemming": true
    },
    {
      "naam": "Pieter",
      "klacht": "Sportblessures",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Na een hardloopblessure dacht ik dat ik moest stoppen. De gerichte aanpak heeft me weer op de been geholpen.",
      "toestemming": true
    },
    {
      "naam": "Marjolein",
      "klacht": "Rugklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Ik kon niet meer bukken zonder pijn. De combinatie van behandeling en oefeningen werkt perfect voor mij.",
      "toestemming": true
    },
    {
      "naam": "Harm",
      "klacht": "Schouderklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Door de echografie zagen ze precies wat er aan de hand was. Mijn schouder is nu volledig hersteld.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je wilt gewoon normaal kunnen bewegen, zonder constant die stekende pijn te voelen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt genoeg van die stijve nek of die schouder die maar niet beter wordt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wilt je dagelijkse activiteiten weer oppakken zonder beperkt te worden door pijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je zoekt een oplossing die écht werkt, niet alleen korte verlichting.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker werken gespecialiseerde fysiotherapeuten en manueel therapeuten die jouw klachten begrijpen. We zetten moderne technieken in en zorgen voor een persoonlijke behandeling die je snel weer in beweging brengt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een grondig onderzoek om de oorzaak van je klachten te vinden. Indien nodig gebruiken we echografie voor een exacte diagnose.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Behandelplan op maat",
      "tekst": "Op basis van de diagnose stellen we samen een behandelplan op met duidelijke doelen. Je krijgt inzicht in het verwachte hersteltraject.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Gerichte behandeling",
      "tekst": "We combineren hands-on therapie met oefeningen en eventueel technieken zoals dry needling of shockwave. Je wordt actief begeleid naar volledig herstel.",
      "duur": "Meerdere sessies",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysiotherapeut & Manueel therapeut",
      "specialisatie": "Echografie en EPTE",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysiotherapeut & Manueel therapeut",
      "specialisatie": "Parkinson en neurologische klachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysiotherapeut & Manueel therapeut",
      "specialisatie": "Manuele therapie nek-schouder",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sjanne Postma",
      "functie": "Fysiotherapeut & Manueel therapeut",
      "specialisatie": "Dry needling schouderklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Fysiotherapeut & Manueel therapeut i.o.",
      "specialisatie": "Sportrevalidatie en longaandoeningen",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Fysiotherapeut & Oedeemtherapeut",
      "specialisatie": "Oedeemtherapie en thuiszorg",
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
      "antwoord": "Nee, je kunt zonder verwijzing rechtstreeks bij ons terecht. Fysiotherapie is vrij toegankelijk in Nederland."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit is afhankelijk van je klacht en herstel. Gemiddeld zijn 4 tot 8 behandelingen voldoende, maar dit bespreken we tijdens de intake persoonlijk met je."
    },
    {
      "vraag": "Hoe lang moet ik wachten op een afspraak?",
      "antwoord": "We streven ernaar om binnen 24 uur een afspraak in te plannen. Bij spoed kunnen we vaak nog sneller voor je zorgen."
    },
    {
      "vraag": "Krijg ik bij elke afspraak dezelfde therapeut?",
      "antwoord": "Ja, voor continuïteit word je behandeld door dezelfde fysiotherapeut gedurende je hele traject, tenzij je zelf een andere voorkeur hebt."
    },
    {
      "vraag": "Wat zijn de kosten zonder zorgverzekering?",
      "antwoord": "Een behandeling kost €39 per sessie. We hebben contracten met alle zorgverzekeraars, dus meestal wordt fysiotherapie vanuit je basisverzekering of aanvullende verzekering vergoed."
    }
  ]
} as const;

export type Praktijk = typeof praktijk;
