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
  "plaats": "Damwoude",
  "telefoon": "0511 422 944",
  "telefoonHref": "tel:+31511422944",
  "whatsapp": "https://wa.me/31511422944",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijf Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Van chronische rugpijn tot acute hernia",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Schouderklachten en bewegingsbeperking",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Nekklachten",
      "sub": "Nekpijn, whiplash en bewegingsbeperking",
      "slug": "nekklachten",
      "icoon": "Activity"
    },
    {
      "label": "Sportblessure",
      "sub": "Snel terug naar je sport",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Chronische hoofdpijn en spanningshoofdpijn",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    },
    {
      "label": "Knieklachten",
      "sub": "Van artrose tot meniscusletsel",
      "slug": "knieklachten",
      "icoon": "Activity"
    }
  ],
  "reviews": [
    {
      "naam": "Hendrik",
      "klacht": "Rugklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Na maanden last van mijn onderrug kon ik eindelijk weer bewegen zonder pijn. De oefeningen hebben me echt geholpen.",
      "toestemming": true
    },
    {
      "naam": "Sanne",
      "klacht": "Schouder",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Mijn bevroren schouder leek nooit meer beter te worden. Nu kan ik weer gewoon bewegen en sporten.",
      "toestemming": true
    },
    {
      "naam": "Peter",
      "klacht": "Nekklachten",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "De nekklachten na mijn auto-ongeluk zijn volledig verdwenen. Ik kan weer zonder pijn werken.",
      "toestemming": true
    },
    {
      "naam": "Marieke",
      "klacht": "Sportblessure",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Sneller dan verwacht weer terug op het hockeyveld. Professionele begeleiding en goede nazorg.",
      "toestemming": true
    },
    {
      "naam": "Jan",
      "klacht": "Hoofdpijn",
      "plaats": "Veenwouden",
      "sterren": 4,
      "quote": "Mijn dagelijkse hoofdpijn is enorm verminderd. Eindelijk weer vrij van pijnstillers.",
      "toestemming": true
    },
    {
      "naam": "Eline",
      "klacht": "Knieklachten",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Ik was bang dat ik niet meer zou kunnen hardlopen, maar na behandeling lukt het weer prima.",
      "toestemming": true
    },
    {
      "naam": "Thijs",
      "klacht": "Rugklachten",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "De hernia-klachten zijn onder controle. Ik kan weer gewoon werken en sporten.",
      "toestemming": true
    },
    {
      "naam": "Lisa",
      "klacht": "Nekklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Vriendelijke therapeuten die echt naar je luisteren. Mijn nekpijn is na jaren eindelijk weg.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je kunt niet meer sporten zoals je wilt en voelt je lichaam elke dag.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Eenvoudige dagelijkse dingen zoals bukken of tillen worden steeds moeilijker.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd maar de klachten blijven terugkomen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je wilt gewoon weer normaal kunnen bewegen zonder pijn of beperkingen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker bundelen we alle specialisaties onder één dak. Onze ervaren therapeuten helpen je met gerichte behandelingen en persoonlijke begeleiding om snel en blijvend van je klachten af te komen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "We starten met een grondige analyse van je bewegingspatronen en klachten. Door gerichte oefeningen en hands-on behandeling herstellen we de natuurlijke bewegingsfunctie van je lichaam.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Met gespecialiseerde technieken behandelen we gewrichtsblokkades en bewegingsbeperkingen. Dit zorgt voor direct merkbare verbetering van je mobiliteit en vermindert pijnklachten effectief.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry Needling",
      "tekst": "Door triggerpunten gericht te behandelen met dunne naalden lossen we diepe spierspanning op. Deze techniek geeft vaak snel resultaat bij hardnekkige klachten die anders moeilijk te behandelen zijn.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Mark de Vries",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Sportblessures en revalidatie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10273&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Linda Jansen",
      "functie": "Manueel therapeut",
      "specialisatie": "Nek- en hoofdpijnklachten",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10276&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Tom Visser",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Knie- en enkelklachten",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10278&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Marleen Hofstra",
      "functie": "Fysiotherapeut",
      "specialisatie": "Bekkentherapie en revalidatie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10267&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Douwe Bakker",
      "functie": "Manueel therapeut",
      "specialisatie": "Rug- en schouderklachten",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10271&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Meijer",
      "functie": "Fysiotherapeut",
      "specialisatie": "Dry needling specialist",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10348&max=730",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://www.fysiobakker.nl/uploads/images/Full-HD/fysiobakker-groepsfoto-home-002.jpg"
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, je kunt zonder verwijzing bij ons terecht. Fysiotherapie is sinds 2006 vrij toegankelijk in Nederland. Je kunt direct een afspraak maken."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit verschilt per persoon en klacht. Na de intake bespreken we een behandelplan met je. Gemiddeld zien we verbetering binnen 4 tot 8 behandelingen, maar sommige klachten vragen meer of minder tijd."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Bij Fysio Bakker kun je meestal binnen 24 uur terecht. We doen er alles aan om je snel te helpen, ook bij acute klachten."
    },
    {
      "vraag": "Krijg ik steeds dezelfde therapeut?",
      "antwoord": "Ja, voor continuïteit word je behandeld door dezelfde therapeut. Zo kennen we je klachten goed en kunnen we je behandeling optimaal afstemmen."
    },
    {
      "vraag": "Wat kost een behandeling zonder verzekering?",
      "antwoord": "Een behandeling kost €37,50 zonder verzekering. We hebben contracten met alle zorgverzekeraars, dus vaak vergoedt je verzekering (een deel van) de kosten vanuit je aanvullende verzekering."
    }
  ],
  "stappenKop": "Onze behandelingen",
  "stappenSub": "We bieden een breed scala aan gespecialiseerde behandelingen om jou snel en effectief te helpen.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ff6600",
    "donker": "#cc5200",
    "licht": "#fff3eb"
  }
} as const;

export type Praktijk = typeof praktijk;
