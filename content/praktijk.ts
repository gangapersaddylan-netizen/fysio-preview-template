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
  "telefoon": "0512 358230",
  "telefoonHref": "tel:+31512358230",
  "whatsapp": "https://wa.me/31512358230",
  "boekUrl": "https://www.fysiobakker.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Blijven Bewegen",
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
      "sub": "Nek-, midden- en lage rugpijn",
      "slug": "rugklachten",
      "icoon": "PersonStanding"
    },
    {
      "label": "Schouder",
      "sub": "Schouderklachten en blessures",
      "slug": "schouderklachten",
      "icoon": "Bone"
    },
    {
      "label": "Sportblessure",
      "sub": "Blessures en sportgerelateerde klachten",
      "slug": "sportblessures",
      "icoon": "Dumbbell"
    },
    {
      "label": "Knieklachten",
      "sub": "Knie- en beenklachten",
      "slug": "knieklachten",
      "icoon": "Activity"
    },
    {
      "label": "Hoofdpijn",
      "sub": "Chronische hoofdpijn en nekgerelateerde hoofdpijn",
      "slug": "hoofdpijn",
      "icoon": "Brain"
    }
  ],
  "reviews": [
    {
      "naam": "Petra van Dijk",
      "klacht": "Rugklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Ik had al maanden last van mijn onderrug en kon amper meer bukken. Na de behandelingen bij Fysio Bakker kan ik eindelijk weer normaal functioneren.",
      "toestemming": true
    },
    {
      "naam": "Jan Hoekstra",
      "klacht": "Schouder",
      "plaats": "Surhuisterveen",
      "sterren": 5,
      "quote": "Mijn schouderklachten hielden me wakker 's nachts. Dankzij de gerichte behandeling kan ik nu pijnvrij bewegen en slapen.",
      "toestemming": true
    },
    {
      "naam": "Linda Mulder",
      "klacht": "Knieklachten",
      "plaats": "Burgum",
      "sterren": 5,
      "quote": "De therapeut nam de tijd om mijn knieproblemen goed te bekijken. Het persoonlijke oefenprogramma heeft echt geholpen, ik kan weer sporten.",
      "toestemming": true
    },
    {
      "naam": "Mark de Vries",
      "klacht": "Sportblessure",
      "plaats": "Veenwouden",
      "sterren": 5,
      "quote": "Als hardloper had ik een vervelende blessure. De aanpak was professioneel en binnen een paar weken stond ik weer op de baan.",
      "toestemming": true
    },
    {
      "naam": "Anneke Jansen",
      "klacht": "Hoofdpijn",
      "plaats": "Leeuwarden",
      "sterren": 4,
      "quote": "Jarenlang last van hoofdpijn gehad. De behandeling richtte zich op mijn nek en dat bleek precies de juiste aanpak.",
      "toestemming": true
    },
    {
      "naam": "Sjoerd Bakker",
      "klacht": "Rugklachten",
      "plaats": "Heerenveen",
      "sterren": 5,
      "quote": "Professioneel en betrokken team. Ze hebben me goed geholpen met mijn chronische rugklachten.",
      "toestemming": true
    },
    {
      "naam": "Marieke Posthuma",
      "klacht": "Schouder",
      "plaats": "Damwoude",
      "sterren": 5,
      "quote": "Ik kon mijn arm niet meer omhoog krijgen. Na de behandelingen heb ik mijn volledige bewegingsvrijheid terug. Heel blij mee!",
      "toestemming": true
    },
    {
      "naam": "Thomas Visser",
      "klacht": "Knieklachten",
      "plaats": "Drachten",
      "sterren": 5,
      "quote": "Snelle afspraak, goede begeleiding en duidelijke uitleg. Mijn knie is volledig hersteld.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je hebt al weken last en durft geen activiteiten meer te plannen omdat je niet weet hoe je lichaam reageert.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Elke beweging doet pijn en je merkt dat je steeds meer dingen uit de weg gaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je hebt al van alles geprobeerd, maar niets lijkt echt te helpen en de frustratie groeit.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Je wilt gewoon weer normaal kunnen bewegen zonder steeds rekening te hoeven houden met je klachten.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij Fysio Bakker begrijpen we wat je doormaakt. Onze specialisten werken met moderne technieken en een persoonlijke aanpak om je zo snel mogelijk weer in beweging te krijgen. Samen werken we aan jouw herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie voor jouw herstel",
      "tekst": "Onze fysiotherapeuten analyseren je klacht grondig en stellen een behandelplan op dat aansluit bij jouw situatie. Met hands-on technieken en gerichte oefeningen werken we aan pijnverlichting en herstel van functie.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Manuele therapie voor diepere problemen",
      "tekst": "Bij complexe gewrichts- en spierklachten zetten we manuele therapie in. Door mobilisaties en manipulaties van gewrichten en wervels verbeteren we de beweeglijkheid en verminderen we pijn effectief.",
      "duur": "30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826548/manuele_therapie_jiqtet.mp4"
    },
    {
      "titel": "Dry needling tegen hardnekkige spanning",
      "tekst": "Voor hardnekkige spierpijn en triggerpunten gebruiken we dry needling. Deze effectieve techniek verlicht pijn, vermindert spierspanning en versnelt het herstelproces aanzienlijk.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "Lisa van den Berg",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Sportblessures en revalidatie",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Thijs Jansen",
      "functie": "Manueel therapeut",
      "specialisatie": "Rug- en nekklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Sophie Dijkstra",
      "functie": "Sportfysiotherapeut",
      "specialisatie": "Knie- en schouderklachten",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Jeroen de Wit",
      "functie": "Fysiotherapeut",
      "specialisatie": "Dry needling specialist",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Emma Visser",
      "functie": "Oedeemtherapeut",
      "specialisatie": "Lymfedrainage en oedeem",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "Bram Mulder",
      "functie": "Fysiotherapeut MSc",
      "specialisatie": "Chronische pijnbehandeling",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_6_hwafmn.jpg",
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
      "vraag": "Heb ik een verwijzing nodig van mijn huisarts?",
      "antwoord": "Nee, sinds 2006 kun je zonder verwijzing direct bij de fysiotherapeut terecht. Je kunt zelf een afspraak maken. Voor sommige aanvullende verzekeringen kan een verwijzing wel nodig zijn voor vergoeding, check dit bij je verzekeraar."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en per klacht. Na de intake maken we een behandelplan met een inschatting van het aantal benodigde sessies. Gemiddeld zijn 6 tot 12 behandelingen voldoende, maar dit bespreken we altijd persoonlijk met je."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Bij Fysio Bakker streven we ernaar je binnen 24 uur te kunnen helpen. We hebben dagelijks spoedplekken beschikbaar, zodat je bij acute klachten snel geholpen wordt."
    },
    {
      "vraag": "Krijg ik elke keer dezelfde therapeut?",
      "antwoord": "Ja, continuïteit in de behandeling vinden wij belangrijk. Je wordt behandeld door één vaste therapeut die jouw klacht en voortgang goed kent. Alleen bij afwezigheid wordt je behandeling overgenomen door een collega."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een standaard behandeling kost €37,50. De intakebehandeling kost €45,00. Specialistische behandelingen zoals manuele therapie of dry needling kunnen iets afwijken. We adviseren altijd eerst je verzekering te checken, want fysiotherapie wordt vaak (deels) vergoed."
    }
  ],
  "stappenKop": "Onze behandelingen voor jouw herstel",
  "stappenSub": "Gespecialiseerde zorg afgestemd op jouw klacht en doelen",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#FF6B35",
    "donker": "#CC4419",
    "licht": "#FFF0EB"
  }
} as const;

export type Praktijk = typeof praktijk;
