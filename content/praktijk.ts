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
    "aantalReviews": 287,
    "wachttijdDagen": 1,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Rugklachten",
      "sub": "Chronische rugpijn, hernia, lage rugpijn",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Nekklachten",
      "sub": "Nekpijn, whiplash, hoofdpijn door nekspanning",
      "slug": "nekklachten",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Frozen shoulder, rotator cuff, impingement",
      "slug": "schouderklachten",
      "icoon": "Activity"
    },
    {
      "label": "Knieklachten",
      "sub": "Meniscus, voorste kruisband, patella problemen",
      "slug": "knieklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Enkelverzwikking, scheenbeen klachten, overbelasting",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Spanningshoofdpijn, migraine, nekgerelateerd",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Jan de Vries",
      "klacht": "Rugklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Na maanden rugpijn ben ik eindelijk weer verlost. De combinatie van manuele therapie en oefeningen werkte perfect voor mij.",
      "toestemming": true
    },
    {
      "naam": "Petra Jansen",
      "klacht": "Schouder",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "Ik had een frozen shoulder en kon mijn arm nauwelijks bewegen. Dankzij de behandeling kan ik nu weer normaal functioneren.",
      "toestemming": true
    },
    {
      "naam": "Marco Visser",
      "klacht": "Knieklachten",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Professionele aanpak en deskundig advies. Mijn knie is stukken beter en ik kan weer sporten.",
      "toestemming": true
    },
    {
      "naam": "Linda Bakker",
      "klacht": "Nekklachten",
      "plaats": "Leeuwarden",
      "sterren": 4,
      "quote": "De therapeut nam de tijd om mijn klachten goed te begrijpen. Mijn nekpijn is aanzienlijk verminderd.",
      "toestemming": true
    },
    {
      "naam": "Sjoerd Postma",
      "klacht": "Sportblessure",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Snelle intake en goede begeleiding na mijn enkelblessure. Ik kon eerder dan verwacht weer voetballen.",
      "toestemming": true
    },
    {
      "naam": "Annemarie Schaap",
      "klacht": "Hoofdpijn",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Jarenlang last van hoofdpijn gehad. Door de behandeling heb ik eindelijk rust gevonden.",
      "toestemming": true
    },
    {
      "naam": "Ruud Hofstra",
      "klacht": "Rugklachten",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Zeer tevreden over de behandeling en de uitleg. Ik weet nu ook hoe ik mijn rug beter kan belasten in het dagelijks leven.",
      "toestemming": true
    },
    {
      "naam": "Marjolein de Jong",
      "klacht": "Knieklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "De dry needling heeft voor mij echt het verschil gemaakt. Aanrader!",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt al weken pijn en elke beweging doet zeer, terwijl je gewoon je werk wilt doen en actief wilt blijven.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je hebt al meerdere behandelaars geprobeerd, maar niemand lijkt echt te begrijpen wat er aan de hand is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je wilt niet afhankelijk zijn van pijnstillers, maar zoekt een oplossing die echt werkt en blijvend resultaat geeft.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je twijfelt of fysiotherapie wel helpt en of je überhaupt nog beter wordt na al die tijd met klachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we je frustratie. Met onze specialistische kennis en bewezen aanpak zorgen we ervoor dat je niet alleen van je pijn afkomt, maar ook begrijpt hoe je klachtenvrij blijft.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Gerichte behandeling van spieren, gewrichten en bewegingspatronen. We analyseren je klacht en stellen een persoonlijk behandelplan op voor optimaal herstel.",
      "duur": "30-45 min",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele therapie",
      "tekst": "Gespecialiseerde gewrichtsbehandeling voor complexe klachten aan nek, rug en gewrichten. Met hands-on technieken herstellen we mobiliteit en verminderen we pijn.",
      "duur": "30 min",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry needling",
      "tekst": "Effectieve behandeling van triggerpunten in spieren met behulp van dunne naalden. Vermindert spierpijn en -spanning snel en langdurig.",
      "duur": "20-30 min",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Matthijs Bakker",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Echografie, EPTE, Shockwave",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10273&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Wiard Gijtenbeek",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Parkinson, EPTE, Echografie",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10276&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Femma Rozendal",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Manuele therapie, Dry Needling",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10278&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Sjanne Postma",
      "functie": "Fysio- & Manueeltherapeut",
      "specialisatie": "Dry Needling, Shockwave",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10267&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Nienke Nieboer",
      "functie": "Fysiotherapeut",
      "specialisatie": "Oedeemtherapie, Revalidatie training",
      "foto": "https://www.fysiobakker.nl/Image.ashx?libitemid=10271&max=730",
      "uitgelicht": true
    },
    {
      "naam": "Mark Vos",
      "functie": "Fysiotherapeut",
      "specialisatie": "Sport revalidatie, Longaandoeningen",
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
      "vraag": "Heb ik een verwijzing nodig van de huisarts?",
      "antwoord": "Nee, u kunt zonder verwijzing direct een afspraak maken bij Fysio Bakker. Fysiotherapie wordt vergoed vanuit de aanvullende verzekering, en voor sommige aandoeningen ook vanuit de basisverzekering na doorverwijzing."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik gemiddeld nodig?",
      "antwoord": "Dat verschilt per klacht en persoon. Bij de intake bespreken we een behandelplan met een inschatting van het aantal benodigde sessies. Gemiddeld zien we verbetering binnen 6-8 behandelingen."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij Fysio Bakker kunt u binnen 24 uur terecht. We hebben meerdere locaties in Friesland, waardoor we u snel kunnen helpen op een locatie bij u in de buurt."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, voor continuïteit in uw behandeling wordt u zo veel mogelijk door dezelfde therapeut behandeld. Dit zorgt voor een betere voortgang en persoonlijke begeleiding."
    },
    {
      "vraag": "Wat zijn de kosten als ik geen verzekering heb?",
      "antwoord": "Een reguliere behandeling kost €37,50 per sessie. Gespecialiseerde behandelingen zoals manuele therapie of dry needling hebben afwijkende tarieven. Neem contact met ons op voor een volledig overzicht."
    }
  ],
  "stappenKop": "Onze behandelmogelijkheden",
  "stappenSub": "Wij bieden een breed scala aan specialistische behandelingen voor al uw klachten.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#ff5722",
    "donker": "#d84315",
    "licht": "#ffebe6"
  }
} as const;

export type Praktijk = typeof praktijk;
