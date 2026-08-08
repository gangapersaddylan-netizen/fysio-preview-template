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
  "heroTitel": "Zorgeloos Bewegen",
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
      "sub": "Lage rugpijn, ischias, hernia",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Nekklachten",
      "sub": "Nekpijn, whiplash, uitstraling",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, rotator cuff",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Knieklachten",
      "sub": "Meniscus, kruisband, artrose",
      "slug": "knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Sneller terug naar topsport",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn, migraine",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Jan Dijkstra",
      "klacht": "Rugklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Na maanden last van mijn onderrug kon ik eindelijk weer normaal bewegen. De fysiotherapeut heeft me uitstekend geholpen met gerichte oefeningen.",
      "toestemming": true
    },
    {
      "naam": "Marieke de Vries",
      "klacht": "Nekklachten",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Ik had constant last van nekpijn door mijn kantoorwerk. Dankzij de behandeling en adviezen ben ik nu klachtenvrij.",
      "toestemming": true
    },
    {
      "naam": "Pieter Bosma",
      "klacht": "Schouder",
      "plaats": "Leeuwarden",
      "sterren": 5,
      "quote": "Mijn frozen shoulder leek hopeloos, maar met manuele therapie en oefeningen kan ik mijn arm weer volledig bewegen. Enorm blij!",
      "toestemming": true
    },
    {
      "naam": "Sanne Visser",
      "klacht": "Knieklachten",
      "plaats": "Heerenveen",
      "sterren": 4,
      "quote": "Na een knieblessure tijdens het hardlopen weer goed geholpen. De therapeut nam de tijd om alles goed uit te leggen.",
      "toestemming": true
    },
    {
      "naam": "Thomas van der Meer",
      "klacht": "Sportblessure",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Als voetballer had ik een hamstringblessure. Door de sportfysiotherapie kon ik snel en veilig terugkeren op het veld.",
      "toestemming": true
    },
    {
      "naam": "Linda Postma",
      "klacht": "Hoofdpijn",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Jarenlang last van spanningshoofdpijn. Door de behandeling van mijn nek en schouders zijn mijn klachten enorm verminderd.",
      "toestemming": true
    },
    {
      "naam": "Harm Jansen",
      "klacht": "Rugklachten",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Professionele begeleiding bij mijn hernia. De fysiotherapeut heeft me het vertrouwen gegeven om weer actief te worden.",
      "toestemming": true
    },
    {
      "naam": "Emma Bakker",
      "klacht": "Knieklachten",
      "plaats": "Drachten",
      "sterren": 4,
      "quote": "Goed geholpen na mijn knieoperatie. De revalidatietraining was precies wat ik nodig had om weer te kunnen sporten.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je bent het zat om elke dag met pijn wakker te worden en niet te kunnen doen wat je wilt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al zoveel geprobeerd, maar niets lijkt echt te helpen en de klachten komen steeds terug.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je maakt je zorgen dat je klachten chronisch worden en je straks helemaal niet meer kunt bewegen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je wilt gewoon weer normaal kunnen functioneren, zonder constant te denken aan die pijn.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we dat precies. Met onze brede expertise, moderne behandelmethoden en persoonlijke aanpak helpen we je snel en effectief weer zorgeloos te bewegen. Binnen 24 uur kun je bij ons terecht.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Door middel van handmatige technieken en gerichte oefentherapie behandelen we de oorzaak van je klachten. We leren je hoe je zelf actief kunt blijven en herhaling kunt voorkomen.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele Therapie",
      "tekst": "Met specifieke mobilisatietechnieken herstellen we de beweeglijkheid van gewrichten en verminderen we pijn. Deze behandeling is ideaal voor nek-, rug- en gewrichtsklachten.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Echografie",
      "tekst": "We maken beelden van spieren, pezen en gewrichten om een exacte diagnose te stellen. Zo weten we precies wat er aan de hand is en kunnen we de behandeling optimaal afstemmen.",
      "duur": "15-20 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826524/echo_k7otr1.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826524/echo_k7otr1.mp4"
    }
  ],
  "team": [
    {
      "naam": "Lisa de Jong",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Sportblessures en revalidatie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10273&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Koen Mulder",
      "functie": "Manueel therapeut",
      "specialisatie": "Nek- en rugklachten",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10276&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Hendriks",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Knie en schouder",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10278&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Tim Brouwer",
      "functie": "Fysiotherapeut",
      "specialisatie": "Echografie en dry needling",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10267&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Anne van Dijk",
      "functie": "Oedeemtherapeut",
      "specialisatie": "Lymfedrainage en zwelling",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10271&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Mark Scholten",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Hoofdpijn en kaakklachten",
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
      "antwoord": "Nee, sinds 2006 kun je zonder verwijzing van de huisarts direct naar de fysiotherapeut. Je kunt zelf een afspraak maken bij Fysio Bakker."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Na het eerste intakegesprek en onderzoek kunnen we een behandelplan opstellen met een inschatting van het aantal benodigde sessies. Gemiddeld zijn 6-10 behandelingen gebruikelijk."
    },
    {
      "vraag": "Hoe lang is de wachttijd?",
      "antwoord": "Bij Fysio Bakker kun je binnen 24 uur terecht. We streven ernaar om altijd snel een afspraak voor je in te plannen, zodat je niet lang hoeft te wachten met je klachten."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde fysiotherapeut?",
      "antwoord": "Ja, bij Fysio Bakker word je behandeld door een vaste fysiotherapeut. Dit zorgt voor continuïteit in je behandeling en een vertrouwde relatie, wat het herstel bevordert."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere fysiotherapiebehandeling kost €42 per sessie. Specialistische behandelingen zoals manuele therapie of echografie kunnen iets meer kosten. Neem contact met ons op voor het volledige tarievenoverzicht."
    }
  ],
  "stappenKop": "Onze behandelmogelijkheden",
  "stappenSub": "Bij Fysio Bakker bieden we een breed scala aan specialisaties om jouw klachten effectief te behandelen.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ff6600",
    "donker": "#cc5200",
    "licht": "#fff3eb"
  }
} as const;

export type Praktijk = typeof praktijk;
