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
  "telefoon": "058 - 203 83 10",
  "telefoonHref": "tel:+31582038310",
  "whatsapp": "https://wa.me/31582038310",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Specialist in Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 287,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Lage rug, hernia, spanning",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Nekklachten",
      "sub": "Nekpijn, spanning, hoofdpijn",
      "slug": "nekklachten",
      "icoon": "Brain"
    },
    {
      "label": "Schouderklachten",
      "sub": "Frozen shoulder, peesklachten",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Knieklachten",
      "sub": "Pijn, artrose, instabiliteit",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessures",
      "sub": "Overbelasting, herstel, preventie",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanning, cervicogeen, migraine",
      "slug": "hoofdpijn",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Sanne",
      "klacht": "Rugklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na maanden van lage rugpijn eindelijk verlossing. De behandelingen waren doelgericht en ik kreeg goede oefeningen mee voor thuis.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Knieklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Ik kon amper meer sporten door mijn knie. Na zes weken kan ik weer volop bewegen. Zeer deskundige begeleiding.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Nekklachten",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Mijn nekpijn zat me al jaren dwars. De manuele therapie heeft mij echt geholpen, eindelijk weer klachtenvrij.",
      "toestemming": true
    },
    {
      "naam": "Douwe",
      "klacht": "Schouderklachten",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Ik had een frozen shoulder en dacht dat ik er nooit meer vanaf zou komen. De progressie was zichtbaar elke sessie.",
      "toestemming": true
    },
    {
      "naam": "Linda",
      "klacht": "Hoofdpijn",
      "plaats": "Veenwouden",
      "sterren": 4,
      "quote": "Ik had bijna dagelijks hoofdpijn door nekspanning. Na behandeling en oefeningen is het drastisch verminderd.",
      "toestemming": true
    },
    {
      "naam": "Pieter",
      "klacht": "Sportblessures",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Als hardloper had ik last van mijn achillespees. Door gericht trainingsadvies ben ik weer blessurevrij aan het lopen.",
      "toestemming": true
    },
    {
      "naam": "Anouk",
      "klacht": "Rugklachten",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Ik kon niet meer lang zitten door mijn rug. Nu kan ik weer zonder pijn werken dankzij de behandelingen en oefeningen.",
      "toestemming": true
    },
    {
      "naam": "Freek",
      "klacht": "Knieklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na een knieblessure durfde ik niet meer te bewegen. De fysiotherapeut gaf me het vertrouwen terug om actief te zijn.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je bent al weken aan het uitstellen van die wandeling omdat je rug het gewoon niet meer toelaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Slapen lukt nauwelijks door de pijn in je schouder en overdag kun je je arm amper bewegen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Sporten zit er al maanden niet meer in, terwijl het juist zo belangrijk voor je is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd, maar de klachten blijven terugkomen en niemand lijkt echt naar je te luisteren.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker nemen we de tijd om je klacht écht te begrijpen. Onze specialisten stellen een persoonlijk behandelplan op, zodat je snel en duurzaam van je klachten afkomt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We luisteren naar je verhaal en onderzoeken grondig wat de oorzaak is van je klachten. Samen bepalen we het doel van de behandeling.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we een op maat gemaakt behandelplan op. We leggen uit wat je kunt verwachten en hoe lang het herstel duurt.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Behandeling en herstel",
      "tekst": "Je krijgt gerichte therapie, oefeningen en advies. We werken stapsgewijs naar jouw doel: pijnvrij bewegen en terugkeren naar je dagelijkse activiteiten.",
      "duur": "4-12 weken",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Echografie, EPTE, Shockwave",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Parkinson, Dry Needling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Manuele therapie, Shockwave",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Rene Bosch",
      "functie": "Fysiotherapeut",
      "specialisatie": "Schoudernetwerk, Echografie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sportrevalidatie, Longaandoeningen",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Fysiotherapeut en Oedeemtherapeut",
      "specialisatie": "Oedeemtherapie, Fysiotherapie aan huis",
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
      "antwoord": "Nee, je kunt zonder verwijzing direct een afspraak maken bij Fysio Bakker. Fysiotherapie is vrij toegankelijk in Nederland. Voor bepaalde aanvullende verzekeringen kan een verwijzing wel nodig zijn, check dit bij je verzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat is per persoon en klacht verschillend. Na de intake geven we een inschatting van het aantal behandelingen. Gemiddeld ligt dit tussen de 4 en 12 sessies, afhankelijk van de aard en ernst van je klacht."
    },
    {
      "vraag": "Hoe lang is de wachttijd voor een afspraak?",
      "antwoord": "Bij Fysio Bakker streven we ernaar om je binnen 24 uur te kunnen helpen. Door onze acht locaties in Friesland kunnen we snel schakelen en heb je vrijwel altijd binnen een dag een afspraak."
    },
    {
      "vraag": "Kan ik bij dezelfde therapeut blijven tijdens mijn behandeling?",
      "antwoord": "Ja, continuïteit vinden wij belangrijk. Je wordt behandeld door dezelfde fysiotherapeut gedurende je hele traject, tenzij je zelf aangeeft dit anders te willen of bij specifieke specialisaties doorverwezen wordt."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen fysiotherapie in mijn verzekering heb?",
      "antwoord": "Zonder verzekering hanteren wij een tarief van €39,- per behandeling van 30 minuten. Voor de intake kan een toeslag gelden. Neem contact op voor een volledig overzicht van onze tarieven."
    }
  ]
} as const;

export type Praktijk = typeof praktijk;
