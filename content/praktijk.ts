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
  "heroTitel": "Weer Bewegen",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 187,
    "wachttijdDagen": 2,
    "bigRegistratie": "BIG geregistreerd",
    "bigSub": "Kwaliteitsregister Fysiotherapie"
  },
  "klachten": [
    {
      "label": "Sportblessure",
      "sub": "Preventie en herstel van sportgerelateerde klachten",
      "slug": "sportblessure",
      "icoon": "Dumbbell"
    },
    {
      "label": "Spierklachten",
      "sub": "Triggerpointtherapie en hands-on behandeling",
      "slug": "spierklachten",
      "icoon": "Activity"
    },
    {
      "label": "Postoperatief",
      "sub": "Revalidatie na chirurgische ingrepen",
      "slug": "postoperatief",
      "icoon": "HeartPulse"
    },
    {
      "label": "Rug & Nek",
      "sub": "Behandeling van rug- en nekklachten",
      "slug": "rug-nek",
      "icoon": "Bone"
    },
    {
      "label": "Schouder",
      "sub": "Herstel van schouderpijn en bewegingsbeperking",
      "slug": "schouder",
      "icoon": "PersonStanding"
    }
  ],
  "reviews": [
    {
      "naam": "Mark van Dijk",
      "klacht": "Sportblessure",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "Na mijn knieblessure kon ik dankzij de gerichte training weer volledig sporten. De begeleiding was persoonlijk en effectief.",
      "toestemming": true
    },
    {
      "naam": "Linda Jansen",
      "klacht": "Rug & Nek",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Mijn nekklachten zijn eindelijk verholpen. De therapeut nam echt de tijd om de oorzaak te vinden en daarop te behandelen.",
      "toestemming": true
    },
    {
      "naam": "Peter Bakker",
      "klacht": "Postoperatief",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Het revalidatieprogramma na mijn operatie was precies wat ik nodig had. Ik ben sneller hersteld dan verwacht.",
      "toestemming": true
    },
    {
      "naam": "Sandra de Vries",
      "klacht": "Schouder",
      "plaats": "Den Haag",
      "sterren": 4,
      "quote": "De behandeling aan huis was super handig en mijn schouder voelt nu veel beter.",
      "toestemming": true
    },
    {
      "naam": "Tom Willems",
      "klacht": "Spierklachten",
      "plaats": "Eindhoven",
      "sterren": 5,
      "quote": "De triggerpointtherapie heeft mijn hardnekkige spierpijn weggenomen. Ik kan eindelijk weer normaal bewegen.",
      "toestemming": true
    },
    {
      "naam": "Maria Hendriks",
      "klacht": "Rug & Nek",
      "plaats": "Tilburg",
      "sterren": 5,
      "quote": "Online fysiotherapie leek me eerst vreemd, maar het werkte perfect. Mijn rugpijn is sterk verminderd.",
      "toestemming": true
    },
    {
      "naam": "Erik Smit",
      "klacht": "Sportblessure",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "De sportblessurepreventie training heeft mij geholpen om blessuregevoelig te blijven sporten. Aanrader!",
      "toestemming": true
    },
    {
      "naam": "Inge Mulder",
      "klacht": "Schouder",
      "plaats": "Arnhem",
      "sterren": 5,
      "quote": "Na maanden schouderpijn eindelijk oplossing gevonden. De hands-on therapie maakte echt het verschil.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "U bent gestopt met sporten of bewegen zoals u gewend was, omdat uw klacht u tegenhoudt en dat actieve deel van uw leven stilstaat.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/1_2_yzrvxh.jpg"
      },
      {
        "tekst": "U stelt behandeling uit omdat u niet weet waar u terecht kunt of welke aanpak bij uw klacht past, en dat geeft onzekerheid.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/2_2_hy32i6.jpg"
      },
      {
        "tekst": "U heeft bij andere praktijken telkens een andere therapeut gezien en moest uw verhaal steeds opnieuw vertellen zonder echte voortgang.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/3_2_uw0d3t.jpg"
      },
      {
        "tekst": "U kreeg standaardoefeningen mee zonder dat iemand echt uitzoekt waar uw klacht vandaan komt of wat de beste oplossing is.",
        "afbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/4_2_rngnnd.jpg"
      }
    ],
    "afsluiting": "Bij TMC Fysiotherapie krijgt u één vaste therapeut die de tijd neemt om de oorzaak van uw klacht te achterhalen. Met duidelijke uitleg en een persoonlijk behandelplan werken we samen aan uw herstel.",
    "oplossingAfbeelding": "https://res.cloudinary.com/kzpln4r2/image/upload/5_lwtck4.jpg"
  },
  "stappen": [
    {
      "titel": "Fysiotherapie op maat",
      "tekst": "Met hands-on therapie en gerichte manuele technieken verbeteren we uw bewegingsbereik en verminderen we pijn. De behandeling is afgestemd op uw specifieke klacht.",
      "duur": "30-45 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826559/fysiotherapie_qof4vl.mp4"
    },
    {
      "titel": "Revalidatie en training",
      "tekst": "Door middel van medische fitness en op maat gemaakte oefenprogramma's bouwen we uw kracht en conditie stap voor stap op. Dit zorgt voor duurzaam herstel.",
      "duur": "45-60 minuten",
      "foto": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826546/revalidatie_oos4pt.mp4",
      "video": "https://res.cloudinary.com/kzpln4r2/video/upload/v1785826546/revalidatie_oos4pt.mp4"
    },
    {
      "titel": "Dry needling behandeling",
      "tekst": "Met dry needling behandelen we hardnekkige triggerpunten en spierknopen effectief. Deze techniek vermindert pijn en bevordert sneller herstel.",
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
      "vraag": "Heb ik een verwijzing nodig voor fysiotherapie?",
      "antwoord": "Nee, sinds 2006 kunt u zonder verwijzing direct bij de fysiotherapeut terecht. Uw zorgverzekeraar vergoedt wel vaak meer behandelingen als u een verwijzing van de huisarts heeft."
    },
    {
      "vraag": "Hoeveel behandelingen heb ik nodig?",
      "antwoord": "Dat verschilt per persoon en klacht. Tijdens het eerste consult maken we een inschatting en stellen we samen een behandelplan op. Sommige klachten zijn binnen 3-5 sessies verholpen, andere vragen een langere periode."
    },
    {
      "vraag": "Hoe snel kan ik terecht?",
      "antwoord": "We streven ernaar om u binnen 2 werkdagen te kunnen ontvangen. Voor spoedgevallen doen we ons best om nog sneller een afspraak in te plannen."
    },
    {
      "vraag": "Krijg ik een vaste therapeut?",
      "antwoord": "Ja, bij TMC Fysiotherapie krijgt u één vaste therapeut die uw behandeltraject begeleidt. Zo bouwen we een vertrouwensband op en kent uw therapeut uw klacht door en door."
    },
    {
      "vraag": "Wat zijn de kosten zonder verzekering?",
      "antwoord": "Een behandeling kost €45 tot €55 zonder verzekering,afhankelijk van het type behandeling. Online consult is vaak iets voordeliger. Neem contact op voor exacte prijzen."
    }
  ],
  "stappenKop": "Onze behandelingen",
  "stappenSub": "Met diverse specialisaties bieden wij de zorg die perfect aansluit bij uw klacht en hersteldoel.",
  "stappenModus": "aanbod",
  "kleuren": {
    "primair": "#00a651",
    "donker": "#008040",
    "licht": "#e6f7ef"
  }
} as const;

export type Praktijk = typeof praktijk;
