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
  "heroTitel": "Pijnvrij Bewegen",
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
      "sub": "Spanning, whiplash, stijfheid",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouderklachten",
      "sub": "Frozen shoulder, rotator cuff",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Knieklachten",
      "sub": "Meniscus, artrose, pijn",
      "slug": "knieklachten",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanning, migraine, cervicogeen",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Sportblessures",
      "sub": "Revalidatie en preventie",
      "slug": "sportblessures",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Sandra",
      "klacht": "Rugklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na maanden last van mijn onderrug kon ik eindelijk weer normale dingen doen. De behandeling was gericht en effectief, en ik voelde me serieus genomen.",
      "toestemming": true
    },
    {
      "naam": "Pieter",
      "klacht": "Nekklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Mijn nekklachten door bureauwerk werden snel aangepakt. De therapeut legde alles duidelijk uit en gaf me goede oefeningen mee.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Schouderklachten",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Ik kon mijn arm nauwelijks meer optillen door schouderpijn. Met dry needling en oefeningen ging het gelukkig snel vooruit.",
      "toestemming": true
    },
    {
      "naam": "Henk",
      "klacht": "Knieklachten",
      "plaats": "Heerenveen",
      "sterren": 4,
      "quote": "Door artrose in mijn knie liep ik steeds meer krom. De behandeling heeft mijn mobiliteit sterk verbeterd. Ik ben tevreden.",
      "toestemming": true
    },
    {
      "naam": "Annelies",
      "klacht": "Hoofdpijn",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Jarenlang last van spanning in mijn nek die hoofdpijn veroorzaakte. Na een aantal behandelingen merkte ik echt verschil.",
      "toestemming": true
    },
    {
      "naam": "Jeroen",
      "klacht": "Sportblessures",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Ik scheurde mijn kuitspier tijdens het hardlopen. De sportfysiotherapeut bouwde mijn conditie goed op en nu loop ik weer.",
      "toestemming": true
    },
    {
      "naam": "Inge",
      "klacht": "Rugklachten",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Mijn lage rugpijn na een val werd snel aangepakt. Fijn dat ik binnen 24 uur terecht kon, dat maakte echt verschil.",
      "toestemming": true
    },
    {
      "naam": "Bart",
      "klacht": "Schouderklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Frozen shoulder, ik had nergens meer zin in door de pijn. De combinatie van manuele therapie en oefeningen werkte perfect.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt al weken last van je nek of rug, en paracetamol helpt niet meer.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Elke beweging doet pijn, en je durft bijna niet meer te bukken of je hoofd te draaien.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt geprobeerd het zelf op te lossen, maar de klachten blijven aanhouden of worden zelfs erger.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je wilt gewoon weer normaal kunnen functioneren zonder constante pijn of stijfheid.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Wij snappen hoe frustrerend en beperkend klachten kunnen zijn. Ons team van gespecialiseerde fysiotherapeuten helpt je met gerichte behandelingen en persoonlijke begeleiding om snel weer pijnvrij en actief te worden.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Intake en diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek en onderzoek om de oorzaak van jouw klachten vast te stellen. Zo weten we precies wat er speelt.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op. We bespreken de aanpak, het aantal sessies en wat je zelf kunt doen om te herstellen.",
      "duur": "Direct na intake",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Behandeling en begeleiding",
      "tekst": "We voeren de behandeling uit met technieken zoals manuele therapie, dry needling of shockwave. Ondertussen krijg je oefeningen en adviezen om thuis mee aan de slag te gaan.",
      "duur": "Gemiddeld 6-8 weken",
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
      "specialisatie": "ParkinsonNet gecertificeerd",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Manuele therapie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sjanne Postma",
      "functie": "Fysio- en Manueeltherapeut",
      "specialisatie": "Dry needling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Fysiotherapeut en Oedeemtherapeut",
      "specialisatie": "Oedeemtherapie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sport en revalidatie",
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
      "vraag": "Heb ik een verwijzing nodig van de huisarts?",
      "antwoord": "Nee, je kunt direct bij ons terecht zonder verwijzing. Fysiotherapie is sinds 2006 vrij toegankelijk in Nederland. Voor manuele therapie heb je wel een verwijzing nodig van de huisarts voor vergoeding door je zorgverzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Gemiddeld zijn 6 tot 8 behandelingen voldoende, maar bij acute klachten kan het sneller gaan. We bespreken dit tijdens de intake en evalueren regelmatig of we op schema liggen."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij Fysio Bakker streven we ernaar dat je binnen 24 uur een afspraak kunt krijgen. Bel ons of stuur een WhatsApp-bericht, dan plannen we je zo snel mogelijk in."
    },
    {
      "vraag": "Krijg ik altijd dezelfde therapeut?",
      "antwoord": "Ja, in principe word je behandeld door dezelfde fysiotherapeut gedurende het hele traject. Zo bouwen we een goede behandelrelatie op en kan je therapeut je vooruitgang goed volgen."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen aanvullende verzekering heb?",
      "antwoord": "Zonder aanvullende verzekering betaal je zelf voor de behandelingen. Een reguliere behandeling kost €39,50 per sessie. Voor manuele therapie of andere specialisaties kunnen de tarieven verschillen. Neem contact op voor een volledig overzicht."
    }
  ]
} as const;

export type Praktijk = typeof praktijk;
