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
  "heroTitel": "Betrouwbaar Herstel",
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
      "sub": "Lage rug, nek en tussenwervel",
      "slug": "rugklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouderklachten",
      "sub": "Frozen shoulder en blessures",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Knieklachten",
      "sub": "Meniscus en kraakbeen",
      "slug": "knieklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Sportblessures",
      "sub": "Preventie en revalidatie",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanning en nekgerelateerd",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Bekkenklachten",
      "sub": "Voor en na zwangerschap",
      "slug": "bekkenklachten",
      "icoon": "HeartPulse"
    }
  ],
  "reviews": [
    {
      "naam": "Linda V.",
      "klacht": "Rugklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Na maanden rugpijn eindelijk weer normaal kunnen functioneren. De behandeling was gericht en professioneel, met duidelijke uitleg bij elke stap.",
      "toestemming": true
    },
    {
      "naam": "Jeroen B.",
      "klacht": "Knieklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Mijn knieblessure na hardlopen werd snel en doelgericht aangepakt. Ik kon binnen drie weken weer sporten.",
      "toestemming": true
    },
    {
      "naam": "Marieke S.",
      "klacht": "Schouderklachten",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Jarenlange schouderpijn verdween na een gerichte behandeling. De therapeut nam echt de tijd om naar mijn verhaal te luisteren.",
      "toestemming": true
    },
    {
      "naam": "Pieter de J.",
      "klacht": "Hoofdpijn",
      "plaats": "Burgum",
      "sterren": 4,
      "quote": "Ik had dagelijks hoofdpijn door nekspanning. Na zes weken behandeling ben ik zo goed als klachtenvrij.",
      "toestemming": true
    },
    {
      "naam": "Annemieke R.",
      "klacht": "Bekkenklachten",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Tijdens mijn zwangerschap had ik last van bekkeninstabiliteit. De oefeningen hebben me enorm geholpen.",
      "toestemming": true
    },
    {
      "naam": "Tom van der H.",
      "klacht": "Sportblessures",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Als voetballer liep ik een vervelende liesklessure op. Dankzij het persoonlijke behandelplan kon ik snel weer aantreden.",
      "toestemming": true
    },
    {
      "naam": "Saskia M.",
      "klacht": "Rugklachten",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Ik ben onder behandeling voor mijn onderrug en merk echt verschil. De therapeut is betrokken en denkt actief mee.",
      "toestemming": true
    },
    {
      "naam": "Henk P.",
      "klacht": "Knieklachten",
      "plaats": "Leeuwarden",
      "sterren": 4,
      "quote": "Na een knieoperatie begeleidde Fysio Bakker mijn herstel. De begeleiding was intensief en op maat.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je wilt gewoon weer normaal kunnen bewegen, maar die vervelende pijn blijft maar terugkomen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al zoveel geprobeerd, maar de oorzaak van je klachten wordt niet echt aangepakt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Wachten op een afspraak kost kostbare tijd, terwijl je pijn dagelijks je leven beïnvloedt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je vraagt je af of je ooit nog pijnvrij kunt sporten of werken zoals voorheen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker werken we met specialisten die tot de kern van jouw klacht doordringen. Binnen 24 uur krijg je een afspraak op een van onze acht locaties, en we gaan direct aan de slag met een behandelplan dat echt werkt.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Grondige intake en diagnose",
      "tekst": "We starten met een uitgebreid intakegesprek en onderzoek om de oorzaak van jouw klachten precies in kaart te brengen. Moderne technieken zoals echografie kunnen hierbij ingezet worden.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Persoonlijk behandelplan",
      "tekst": "Op basis van de diagnose stellen we samen met jou een behandelplan op, afgestemd op jouw situatie en doelen. Je weet precies wat je kunt verwachten.",
      "duur": "Tijdens eerste sessie",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Gerichte behandeling en herstel",
      "tekst": "Met hands-on therapie, gerichte oefeningen en moderne technieken zoals dry needling of shockwave werken we aan duurzaam herstel. Onze therapeuten begeleiden je tot je weer pijnvrij kunt bewegen.",
      "duur": "4-12 weken gemiddeld",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysio- en Manueel therapeut",
      "specialisatie": "Echografie en EPTE",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysio- en Manueel therapeut",
      "specialisatie": "Parkinson en manuele therapie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- en Manueel therapeut",
      "specialisatie": "Manuele therapie en dry needling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Rene Bosch",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Schoudernetwerk en echografie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Oedeemtherapeut",
      "specialisatie": "Lymfoedeem en revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Longaandoeningen en sport",
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
      "antwoord": "Nee, bij Fysio Bakker kun je direct terecht zonder verwijzing. Je kunt zelf een afspraak maken via onze website, telefoon of WhatsApp. Wel is het verstandig om bij twijfel eerst contact op te nemen met je huisarts."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik gemiddeld nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Tijdens de intake bespreken we een realistisch behandelplan. Gemiddeld hebben de meeste cliënten tussen de 6 en 12 sessies nodig, maar bij acute klachten kan het sneller gaan."
    },
    {
      "vraag": "Hoe snel kan ik terecht voor een afspraak?",
      "antwoord": "Bij Fysio Bakker streven we ernaar om binnen 24 uur een afspraak in te plannen. We hebben acht locaties in Friesland, waardoor we flexibel zijn in planning en bereikbaarheid."
    },
    {
      "vraag": "Krijg ik altijd dezelfde therapeut?",
      "antwoord": "Ja, continuïteit is belangrijk voor een goed behandelresultaat. Je wordt gekoppeld aan een vaste therapeut die jouw behandeling van begin tot eind begeleidt. Alleen bij vakantie of ziekte wordt er een vervanger ingezet."
    },
    {
      "vraag": "Wat zijn de kosten als ik niet verzekerd ben?",
      "antwoord": "Zonder vergoeding vanuit je basisverzekering of aanvullende verzekering betaal je per behandeling. Een reguliere behandeling kost €42,50. Voor specifieke behandelingen zoals dry needling of echografie kunnen andere tarieven gelden. Neem contact op voor een volledig overzicht."
    }
  ]
} as const;

export type Praktijk = typeof praktijk;
