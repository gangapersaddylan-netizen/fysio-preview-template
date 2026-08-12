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
  "naam": "TMC Fysiotherapie",
  "plaats": "Nederland",
  "telefoon": "06-41197188",
  "telefoonHref": "tel:+31641197188",
  "whatsapp": "https://wa.me/31641197188",
  "boekUrl": "https://www.tmcfysiotherapie.nl/afspraak-maken/",
  "heroVideo": "https://res.cloudinary.com/kzpln4r2/video/upload/Fysio_Header_high_end_dstput.mp4",
  "heroTitel": "Beter Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 147,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Sportblessure",
      "sub": "Preventie en herstel van sportgerelateerde klachten",
      "slug": "sportblessure",
      "icoon": "Activity"
    },
    {
      "label": "Triggerpunten",
      "sub": "Behandeling van spierknopen en chronische spanning",
      "slug": "triggerpunten",
      "icoon": "HeartPulse"
    },
    {
      "label": "Postoperatief",
      "sub": "Revalidatie na chirurgische ingrepen",
      "slug": "postoperatief",
      "icoon": "PersonStanding"
    },
    {
      "label": "Rug & nek",
      "sub": "Hands-on therapie voor bewegingsbeperking en pijn",
      "slug": "rug-nek",
      "icoon": "Bone"
    },
    {
      "label": "Medisch Fit",
      "sub": "Herstel en verbetering bij medische aandoeningen",
      "slug": "medisch-fit",
      "icoon": "Dumbbell"
    }
  ],
  "reviews": [
    {
      "naam": "Linda van Dijk",
      "klacht": "Sportblessure",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na mijn knieblessure kon ik weer volledig sporten. De begeleiding was persoonlijk en doelgericht.",
      "toestemming": true
    },
    {
      "naam": "Mark Jansen",
      "klacht": "Rug & nek",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Mijn rugklachten zijn eindelijk verholpen. Ik kon direct terecht en de behandeling werkte echt.",
      "toestemming": true
    },
    {
      "naam": "Sophie Bakker",
      "klacht": "Triggerpunten",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "De triggerpointtherapie heeft mijn chronische schouderpijn opgelost waar ik al jaren last van had.",
      "toestemming": true
    },
    {
      "naam": "Jan Visser",
      "klacht": "Postoperatief",
      "plaats": "Den Haag",
      "sterren": 5,
      "quote": "Het revalidatieprogramma na mijn operatie was perfect afgestemd op mijn herstel. Professioneel en betrokken.",
      "toestemming": true
    },
    {
      "naam": "Emma de Vries",
      "klacht": "Medisch Fit",
      "plaats": "Eindhoven",
      "sterren": 4,
      "quote": "Het medische fitnessprogramma gaf me weer energie en zelfvertrouwen. Ik voel me sterker dan ooit.",
      "toestemming": true
    },
    {
      "naam": "Peter Smit",
      "klacht": "Sportblessure",
      "plaats": "Haarlem",
      "sterren": 5,
      "quote": "Snelle intake en effectieve behandeling. Ik was sneller terug op het veld dan verwacht.",
      "toestemming": true
    },
    {
      "naam": "Anna Hendriks",
      "klacht": "Rug & nek",
      "plaats": "Almere",
      "sterren": 5,
      "quote": "Eindelijk iemand die echt luistert en de oorzaak aanpakt. Mijn nekklachten zijn verdwenen.",
      "toestemming": true
    },
    {
      "naam": "Tom de Groot",
      "klacht": "Triggerpunten",
      "plaats": "Nijmegen",
      "sterren": 5,
      "quote": "De hands-on behandeling en dry needling hebben wonderen verricht voor mijn spierpijn.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je sportschoenen staan al weken in de kast, terwijl sporten altijd jouw uitlaatklep was.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "Je stelt het behandelen uit omdat je niet weet waar je terecht kunt en of het wel helpt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "Je verhaal steeds opnieuw vertellen aan verschillende therapeuten, zonder dat iemand je echt leert kennen.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "Oefeningen meekrijgen zonder dat iemand echt onderzoekt waar de pijn precies vandaan komt.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij TMC krijg je één vaste therapeut die de tijd neemt om jouw klacht grondig uit te zoeken. We pakken de oorzaak aan, niet alleen de symptomen.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie",
      "tekst": "Met hands-on therapie en gerichte manuele technieken herstellen we uw bewegingsvrijheid en verminderen we pijn effectief.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Revalidatie",
      "tekst": "Onze revalidatieprogramma's zijn op maat gemaakt om u stap voor stap sterker te maken en volledig te laten herstellen.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826546/revalidatie_oos4pt.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826546/revalidatie_oos4pt.mp4"
    },
    {
      "titel": "Dry needling",
      "tekst": "Deze gespecialiseerde techniek pakt hardnekkige triggerpunten en spierknopen aan voor directe verlichting.",
      "duur": "20-30 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826535/dry_needling_ljfv1e.mp4"
    }
  ],
  "team": [
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_1_zoa6im.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_2_xf3gmw.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_3_a4q1ya.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_4_zpcwtk.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
      "foto": "https://res.cloudinary.com/kzpln4r2/image/upload/fallback_team_5_rgfwgz.jpg",
      "uitgelicht": true
    },
    {
      "naam": "",
      "functie": "",
      "specialisatie": "",
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
      "vraag": "Heb ik een verwijzing nodig?",
      "antwoord": "Nee, u kunt zonder verwijzing bij ons terecht. U kunt direct een afspraak maken en wij zorgen voor de juiste begeleiding."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dit verschilt per klacht en persoon. Na de intake bespreken we een behandelplan waarin we een inschatting geven van het aantal benodigde sessies."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "Meestal kunt u binnen 2 werkdagen terecht. Voor spoedgevallen doen we er alles aan om u zo snel mogelijk te helpen."
    },
    {
      "vraag": "Krijg ik dezelfde therapeut?",
      "antwoord": "Ja, u krijgt één vaste therapeut die uw behandeltraject begeleidt. Zo bouwen we een vertrouwensband op en kennen we uw situatie goed."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een reguliere behandeling kost €45 per sessie. Voor online fysiotherapie en thuiszorg hanteren we andere tarieven die we graag persoonlijk met u bespreken."
    }
  ],
  "stappenKop": "Onze behandelingen",
  "stappenSub": "Van hands-on therapie tot gespecialiseerde technieken, passend bij uw herstel.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#2563eb",
    "donker": "#1e40af",
    "licht": "#eff6ff"
  }
} as const;

export type Praktijk = typeof praktijk;
