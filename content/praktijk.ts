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
  "naam": "#spon",
  "plaats": "Amsterdam",
  "telefoon": "020 123 4567",
  "telefoonHref": "tel:+31201234567",
  "whatsapp": "https://wa.me/31201234567",
  "boekUrl": "#contact",
  "heroVideo": "https://hashtagspon.com/wp-content/uploads/2023/07/Spon-Header-Nieuw2.mp4",
  "heroTitel": "Meetbare Impact",
  "trust": {
    "googleScore": 4.8,
    "aantalReviews": 180,
    "wachttijdDagen": 3,
    "bigRegistratie": "Vertrouwd door 100+ merken",
    "bigSub": "Van startup tot internationaal merk"
  },
  "klachten": [
    {
      "label": "Brand Awareness",
      "sub": "Bouw een sterk merk met authentieke verhalen en creators",
      "slug": "brand-awareness",
      "icoon": "HeartPulse"
    },
    {
      "label": "Content",
      "sub": "Professionele content die jouw verhaal vertelt en converteert",
      "slug": "content-productie",
      "icoon": "Activity"
    },
    {
      "label": "Campagnes",
      "sub": "Data-gedreven campagnes die jouw doelgroep echt bereiken",
      "slug": "campagnes",
      "icoon": "Brain"
    },
    {
      "label": "Strategie",
      "sub": "Een plan dat past bij jouw merk en meetbare resultaten oplevert",
      "slug": "strategie",
      "icoon": "Dumbbell"
    },
    {
      "label": "Social Media",
      "sub": "Beheer en advertenties die je online aanwezigheid versterken",
      "slug": "social-media",
      "icoon": "PersonStanding"
    }
  ],
  "reviews": [
    {
      "naam": "Lisa",
      "klacht": "Brand Awareness",
      "plaats": "Utrecht",
      "sterren": 5,
      "quote": "Onze naamsbekendheid is enorm gegroeid. #spon snapt precies welke creators bij ons merk passen en het resultaat is boven verwachting.",
      "toestemming": true
    },
    {
      "naam": "Mark",
      "klacht": "Campagnes",
      "plaats": "Rotterdam",
      "sterren": 5,
      "quote": "Eindelijk een bureau dat echt met data werkt. Elke euro die we investeren kunnen we terug zien in concrete resultaten.",
      "toestemming": true
    },
    {
      "naam": "Sophie",
      "klacht": "Content",
      "plaats": "Amsterdam",
      "sterren": 5,
      "quote": "De content die ze voor ons maken is precies wat we nodig hebben. Authentiek, professioneel en het converteert gewoon goed.",
      "toestemming": true
    },
    {
      "naam": "David",
      "klacht": "Strategie",
      "plaats": "Eindhoven",
      "sterren": 4,
      "quote": "Ze denken echt met je mee. Niet zomaar een campagne opzetten, maar écht begrijpen waar je als merk naartoe wil.",
      "toestemming": true
    },
    {
      "naam": "Emma",
      "klacht": "Social Media",
      "plaats": "Den Haag",
      "sterren": 5,
      "quote": "Onze social media kanalen zijn compleet getransformeerd. Meer engagement, meer volgers en vooral: meer klanten.",
      "toestemming": true
    },
    {
      "naam": "Tim",
      "klacht": "Campagnes",
      "plaats": "Tilburg",
      "sterren": 5,
      "quote": "Het mooie is dat ze niet alleen uitvoeren, maar ook adviseren. Je krijgt echt een partner, geen bureau.",
      "toestemming": true
    },
    {
      "naam": "Nina",
      "klacht": "Brand Awareness",
      "plaats": "Groningen",
      "sterren": 5,
      "quote": "We bereiken nu precies de doelgroep die we willen. De samenwerking is professioneel en het team is enorm betrokken.",
      "toestemming": true
    }
  ],
  "empathie": {
    "regels": [
      {
        "tekst": "Je investeert in online marketing, maar ziet niet de resultaten die je verwacht of hoopt te bereiken.",
        "afbeelding": "https://images.pexels.com/photos/7991910/pexels-photo-7991910.jpeg?cs=srgb&dl=pexels-annushka-ahuja-7991910.jpg&fm=jpg"
      },
      {
        "tekst": "Je twijfelt of influencer marketing echt werkt voor jouw merk en of je budget wel goed besteed is.",
        "afbeelding": "https://images.pexels.com/photos/15377745/pexels-photo-15377745.jpeg?cs=srgb&dl=pexels-centre-for-ageing-better-55954677-15377745.jpg&fm=jpg"
      },
      {
        "tekst": "Je werkt met verschillende partijen en het voelt alsof niemand echt begrijpt waar jouw merk voor staat.",
        "afbeelding": "https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?cs=srgb&dl=pexels-shvets-production-7176288.jpg&fm=jpg"
      },
      {
        "tekst": "Je krijgt mooie campagnes, maar mis de data en inzichten om te weten of het écht impact heeft.",
        "afbeelding": "https://images.pexels.com/photos/7994388/pexels-photo-7994388.jpeg?cs=srgb&dl=pexels-dziana-hasanbekava-7994388.jpg&fm=jpg"
      }
    ],
    "afsluiting": "Bij #spon krijg je een partner die jouw merk begrijpt en campagnes opzet die meetbaar impact hebben. We leggen alles uit met data en zorgen dat je precies weet waar je budget naartoe gaat en wat het oplevert.",
    "oplossingAfbeelding": "https://images.pexels.com/photos/8972259/pexels-photo-8972259.jpeg?cs=srgb&dl=pexels-shvets-production-8972259.jpg&fm=jpg"
  },
  "stappen": [
    {
      "titel": "Strategiesessie en analyse",
      "tekst": "We starten met een grondige analyse van jouw merk, doelen en doelgroep. Samen bepalen we de beste aanpak en welke creators en kanalen het meeste impact hebben.",
      "duur": "1-2 weken",
      "foto": "https://videos.pexels.com/video-files/4828608/4828608-uhd_2732_1440_25fps.mp4",
      "video": "https://videos.pexels.com/video-files/4828608/4828608-uhd_2732_1440_25fps.mp4"
    },
    {
      "titel": "Campagne-opzet en uitvoering",
      "tekst": "We zetten een op maat gemaakt campagneplan op, selecteren de juiste creators en begeleiden de hele productie. Alles volgens jouw merkrichtlijnen en met continue afstemming.",
      "duur": "2-4 weken",
      "foto": "https://videos.pexels.com/video-files/7963468/7963468-uhd_2560_1440_25fps.mp4",
      "video": "https://videos.pexels.com/video-files/7963468/7963468-uhd_2560_1440_25fps.mp4"
    },
    {
      "titel": "Resultaten en rapportage",
      "tekst": "Na afloop krijg je een uitgebreide rapportage met alle resultaten en inzichten. We tonen wat werkt, wat beter kan en hoe we samen de volgende campagne nog effectiever maken.",
      "duur": "1 week",
      "foto": "https://videos.pexels.com/video-files/3191859/3191859-uhd_2560_1440_25fps.mp4",
      "video": "https://videos.pexels.com/video-files/3191859/3191859-uhd_2560_1440_25fps.mp4"
    }
  ],
  "team": [
    {
      "naam": "Gijs Bogers",
      "functie": "Project Manager",
      "specialisatie": "",
      "foto": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/Gijs-handtekening-2.0-roeyokpm94niwv04c7j36wgyjlmgfmypbxvkjpc71c.webp",
      "uitgelicht": true
    },
    {
      "naam": "Koen Dulfer",
      "functie": "Co-founder & Owner",
      "specialisatie": "",
      "foto": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/Kopie-van-Email-profile-image-template-Koen-roeylgutnueej9ilhd6hg6p3uqxrznmn8k8sfry1ls.webp",
      "uitgelicht": true
    },
    {
      "naam": "Eelco Kingma",
      "functie": "Co-founder & Owner",
      "specialisatie": "",
      "foto": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/Fotomeneer-20241125-Eelco-MET-RAND-qxkzqe0cwcex58ytgtwlhjqzu2fox2xyb7z07p9aqo.png",
      "uitgelicht": true
    },
    {
      "naam": "Kim Hermes",
      "functie": "Senior Project Manager",
      "specialisatie": "",
      "foto": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/33-roeypkfhgu0f61k8jmywtngh48qek4wi4uo0s7v8gw.webp",
      "uitgelicht": true
    }
  ],
  "teamShowcase": {
    "groepsfoto": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/Gijs-handtekening-2.0-roeyokpm94niwv04c7j36wgyjlmgfmypbxvkjpc71c.webp",
    "coverBron": "teamlid (vangnet: groepsfoto afgekeurd, generatie mislukt (2e poging))",
    "coverFit": "contain"
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
  "vergoedingVervanger": {
    "eyebrow": "Onze werkwijze",
    "titel": "Waarom kiezen merken voor #spon?",
    "punten": [
      {
        "titel": "Brand-first benadering",
        "tekst": "We beginnen bij jouw merk en doelen, en kiezen daarna pas de creators en strategie. Zo weet je zeker dat elke campagne écht aansluit bij wat jij wilt bereiken."
      },
      {
        "titel": "Data-gedreven resultaten",
        "tekst": "We werken met concrete cijfers en inzichten, geen vage beloftes. Je krijgt volledige transparantie over je budget en ziet precies wat elke euro oplevert aan bereik, engagement en conversies."
      },
      {
        "titel": "Persoonlijk en betrokken",
        "tekst": "Je werkt met een vast team dat jouw merk door en door kent. We denken proactief mee, schakelen snel en zorgen dat je altijd op de hoogte bent van wat er speelt."
      }
    ],
    "ctaTekst": "Plan een vrijblijvend gesprek"
  },
  "algemeneVervanging": {
    "heroKop": "Zichtbaar groeien met creators die bij je passen",
    "heroTekst": "Data-gedreven campagnes die écht werken, met creators die jouw verhaal vertellen. Binnen drie weken live, met volledige transparantie en meetbare resultaten.",
    "trustTitel": "Ruim 10 jaar ervaring",
    "trustSub": "Sinds de eerste generatie influencers",
    "navLabel": "Resultaten"
  },
  "niche": "overig",
  "faq": [
    {
      "vraag": "Hoe snel kan een campagne live gaan?",
      "antwoord": "Gemiddeld kunnen we binnen 3 tot 5 weken een campagne live hebben, afhankelijk van de complexiteit en het aantal creators. Voor spoedprojecten kunnen we vaak sneller schakelen."
    },
    {
      "vraag": "Wat kost een influencer marketing campagne?",
      "antwoord": "De kosten variëren per campagne en zijn afhankelijk van het aantal creators, de kanalen en de omvang. We denken graag met je mee om binnen jouw budget de beste resultaten te behalen. Neem contact met ons op voor een vrijblijvende offerte."
    },
    {
      "vraag": "Hoe meet je of een campagne succesvol is?",
      "antwoord": "We werken met duidelijke KPI's die we vooraf met je bepalen: bereik, engagement, clicks, conversies en meer. Na elke campagne krijg je een uitgebreide rapportage met alle data en inzichten om de impact te meten."
    },
    {
      "vraag": "Werken jullie ook met kleinere merken of startups?",
      "antwoord": "Absoluut. We hebben ervaring met zowel grote internationale merken als kleinere merken en startups. We passen onze aanpak aan op jouw budget en doelen."
    },
    {
      "vraag": "Hoe weten jullie welke creators bij mijn merk passen?",
      "antwoord": "We analyseren jouw merk, doelgroep en doelen grondig en gebruiken data-gedreven tools om de beste match te vinden. We kijken naar authenticiteit, betrokkenheid van hun volgers en of hun waarden aansluiten bij die van jouw merk."
    }
  ],
  "fotoUitsnede": {},
  "fotoControle": {
    "gekeurd": 6,
    "portretOk": 0,
    "coverOk": 0,
    "afgekeurd": [
      {
        "url": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/Gijs-handtekening-2.0-roeyokpm94niwv04c7j36wgyjlmgfmypbxvkjpc71c.webp",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/Kopie-van-Email-profile-image-template-Koen-roeylgutnueej9ilhd6hg6p3uqxrznmn8k8sfry1ls.webp",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/Fotomeneer-20241125-Eelco-MET-RAND-qxkzqe0cwcex58ytgtwlhjqzu2fox2xyb7z07p9aqo.png",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://hashtagspon.com/wp-content/uploads/elementor/thumbs/33-roeypkfhgu0f61k8jmywtngh48qek4wi4uo0s7v8gw.webp",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://hashtagspon.com/wp-content/uploads/2023/11/Koen-Eelco-Kim-05-768x432.jpg",
        "reden": "detectie mislukt"
      },
      {
        "url": "https://hashtagspon.com/wp-content/uploads/2023/07/20191008_144210-1024x576-1-768x432.jpeg",
        "reden": "detectie mislukt"
      }
    ],
    "msTotaal": 25121,
    "gegenereerd": 1,
    "gegenereerdOk": 0,
    "gegenereerdAfgekeurd": [
      {
        "soort": "groepsfoto-cover",
        "reden": "generatie mislukt (2e poging)",
        "pogingen": 2
      }
    ],
    "coverBron": "teamlid (vangnet: groepsfoto afgekeurd, generatie mislukt (2e poging))",
    "tegelsOpSite": 4,
    "coverAanwezig": true,
    "msNodeE": 292
  },
  "meerdereEchtePersonen": true,
  "echtTeamViaGroepsfoto": false,
  "fotoReferentie": {
    "bron": null,
    "aantal": 0,
    "urls": [],
    "profiel": {
      "geslacht": "onbekend",
      "leeftijd": null,
      "eenmanspraktijk": null,
      "toelichting": ""
    }
  },
  "stappenKop": "Van strategie tot resultaat",
  "stappenSub": "In drie heldere stappen realiseren we samen een campagne met meetbare impact.",
  "stappenModus": "traject",
  "kleuren": {
    "primair": "#ff8c00",
    "donker": "#cc7000",
    "licht": "#fff4e6"
  },
  "echtTeamTegels": {
    "leden": [],
    "referenties": 0,
    "nodig": 2,
    "taken": 0
  },
  "eigenVoorraadCheck": {
    "teamStock": 0,
    "coverStock": false,
    "extraStock": 0
  }
} as const;

export type Praktijk = typeof praktijk;
