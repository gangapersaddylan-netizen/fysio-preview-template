/* ============================================================
   KLANTCONTENT — één bestand, één klant.
   Voor een nieuwe klant: alleen dit bestand aanpassen.
   De componenten in components/secties blijven ongewijzigd.
   ============================================================ */

export type Sterren = 1 | 2 | 3 | 4 | 5;

/** Een review die een klacht/behandeling noemt is een gezondheidsgegeven (AVG).
 *  `toestemming` is verplicht `true`; reviews zonder toestemming worden
 *  vóór het renderen weggefilterd (zie components/secties/reviews.tsx). */
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
  /** Optioneel: pad naar een echte praktijkfoto (bijv. /klachten/rug.jpg).
   *  Leeg = merk-placeholder in de hover-preview. Geen stockfoto's. */
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

/* ------------------------------------------------------------ */

const klachten: Klacht[] = [
  {
    label: "Rugklachten",
    sub: "Onderrug, hernia, ischias",
    slug: "rugklachten",
    icoon: "PersonStanding",
    afbeelding: "/klachten/rugklachten.jpg",
  },
  {
    label: "Nek en schouder",
    sub: "Stijfheid, uitstraling naar de arm",
    slug: "nek-en-schouder",
    icoon: "Bone",
    afbeelding: "/klachten/nek-en-schouder.jpg",
  },
  {
    label: "Knieklachten",
    sub: "Meniscus, kruisband, artrose",
    slug: "knieklachten",
    icoon: "Activity",
    afbeelding: "/klachten/knieklachten.jpg",
  },
  {
    label: "Sportblessure",
    sub: "Hardlopen, voetbal, krachttraining",
    slug: "sportblessure",
    icoon: "Dumbbell",
    afbeelding: "/klachten/sportblessure.jpg",
  },
  {
    label: "Hoofdpijn",
    sub: "Spanning, migraine, kaakklachten",
    slug: "hoofdpijn",
    icoon: "Brain",
    afbeelding: "/klachten/hoofdpijn.jpg",
  },
  {
    label: "Revalidatie",
    sub: "Na operatie of ziekenhuisopname",
    slug: "revalidatie",
    icoon: "HeartPulse",
    afbeelding: "/klachten/revalidatie.jpg",
  },
];

const reviews: Review[] = [
  {
    naam: "Marloes de Vries",
    klacht: "Rugklachten",
    plaats: "Almere Buiten",
    sterren: 5,
    quote:
      "Na jaren rondlopen met onderrugpijn eindelijk iemand die uitlegde waar het vandaan kwam. Ik kreeg een plan met een einddatum en na zeven weken kon ik weer tuinieren zonder er de dag erna voor te boeten.",
    toestemming: true,
  },
  {
    naam: "Youssef El Amrani",
    klacht: "Sportblessure",
    plaats: "Almere Stad",
    sterren: 5,
    quote:
      "Hardloopblessure vlak voor een halve marathon. Dezelfde week nog terecht, elke afspraak dezelfde therapeut. Ik heb de wedstrijd gewoon gelopen.",
    toestemming: true,
  },
  {
    naam: "Anouk Bakker",
    klacht: "Nek en schouder",
    plaats: "Almere Poort",
    sterren: 5,
    quote:
      "Ik werk de hele dag achter een scherm en had constant uitstraling naar mijn arm. Ze keken ook naar mijn werkplek en houding, niet alleen naar de pijn zelf. Groot verschil.",
    toestemming: true,
  },
  {
    naam: "Peter Janssen",
    klacht: "Knieklachten",
    plaats: "Almere Haven",
    sterren: 5,
    quote:
      "Na een meniscusoperatie hier gerevalideerd. Rustig opgebouwd, nooit het gevoel dat ik werd opgejaagd of juist aan het lijntje werd gehouden. Duidelijke doelen elke week.",
    toestemming: true,
  },
  {
    naam: "Sanne Visser",
    klacht: "Hoofdpijn",
    plaats: "Almere Buiten",
    sterren: 5,
    quote:
      "Al maanden spanningshoofdpijn waar de huisarts geen kant mee op kon. Bleek grotendeels uit mijn nek te komen. Na een paar behandelingen merkbaar minder.",
    toestemming: true,
  },
  {
    naam: "Rick Mulder",
    klacht: "Revalidatie",
    plaats: "Almere Stad",
    sterren: 5,
    quote:
      "Na een ziekenhuisopname flink verzwakt. Ze hebben me stap voor stap weer op de been geholpen en precies verteld wat ik thuis moest doen. Ik voel me weer mezelf.",
    toestemming: true,
  },
  {
    naam: "Fatima Yildirim",
    klacht: "Rugklachten",
    plaats: "Almere Poort",
    sterren: 5,
    quote:
      "Zwanger en veel bekken- en rugklachten. Fijn dat ze precies wisten wat wel en niet kon. Ik werd serieus genomen en kreeg oefeningen die echt hielpen.",
    toestemming: true,
  },
  {
    naam: "Thomas Koster",
    klacht: "Sportblessure",
    plaats: "Almere Haven",
    sterren: 4,
    quote:
      "Voetbalknie die maar niet overging. Goede uitleg en een opbouwschema dat klopte. Ik sta weer op het veld, iets later dan gehoopt maar zonder terugval.",
    toestemming: true,
  },
];

const empathie = {
  regels: [
    {
      tekst:
        "Je het al een paar keer dacht op te lossen met rust, en het steeds terugkwam.",
      afbeelding: "/empathie/1.jpg",
    },
    {
      tekst: "Je al weken aan het wachten bent voordat je ergens terecht kunt.",
      afbeelding: "/empathie/2.jpg",
    },
    {
      tekst:
        "Je elke afspraak een andere therapeut kreeg en je verhaal opnieuw moest doen.",
      afbeelding: "/empathie/3.jpg",
    },
    {
      tekst:
        "Niemand je heeft uitgelegd waar het vandaan komt, alleen wat je moet laten.",
      afbeelding: "/empathie/4.jpg",
    },
  ],
  afsluiting:
    "Dat is precies waar wij het anders doen. Je houdt dezelfde therapeut van intake tot laatste afspraak, en je gaat na de eerste keer naar huis met een verklaring in plaats van een vraagteken.",
  oplossingAfbeelding: "/empathie/oplossing.jpg",
};

const stappen: Stap[] = [
  {
    titel: "We zoeken uit waar het vandaan komt",
    duur: "45 minuten",
    tekst:
      "Een uitgebreide intake waarin we niet alleen kijken waar het pijn doet, maar waarom. Je gaat naar huis met een verklaring.",
    foto: "/aanpak/intake.jpg",
    video: "/aanpak/intake.mp4",
  },
  {
    titel: "Je krijgt een plan met een einddatum",
    duur: "Vanaf afspraak twee",
    tekst:
      "Geen open einde en geen strippenkaart die vanzelf doorloopt. We spreken af hoeveel behandelingen we verwachten en waar we op mikken.",
    foto: "/aanpak/behandelplan.jpg",
    video: "/aanpak/behandelplan.mp4",
  },
  {
    titel: "Je doet weer wat je wilde doen",
    duur: "Gemiddeld 6 tot 8 weken",
    tekst:
      "We stoppen als je doel gehaald is en je weet wat je zelf kunt doen om het zo te houden.",
    foto: "/aanpak/oefenzaal.jpg",
    video: "/aanpak/begeleiding.mp4",
  },
];

const team: Teamlid[] = [
  {
    naam: "Lisa Hoekstra",
    functie: "Fysiotherapeut MSc",
    specialisatie: "Rug en nek",
    foto: "/team/lid-1.jpg",
    uitgelicht: true,
  },
  {
    naam: "Daan van Leeuwen",
    functie: "Sportfysiotherapeut",
    specialisatie: "Hardloop- en knieblessures",
    foto: "/team/lid-2.jpg",
    uitgelicht: true,
  },
  {
    naam: "Priya Ramdas",
    functie: "Manueel therapeut",
    specialisatie: "Nek, schouder en hoofdpijn",
    foto: "/team/lid-3.jpg",
    uitgelicht: true,
  },
  {
    naam: "Bram de Wit",
    functie: "Fysiotherapeut",
    specialisatie: "Revalidatie na operatie",
    foto: "/team/lid-4.jpg",
    uitgelicht: true,
  },
  {
    naam: "Esra Demir",
    functie: "Geriatriefysiotherapeut",
    specialisatie: "Herstel en mobiliteit",
    foto: "/team/lid-5.jpg",
    uitgelicht: true,
  },
  { naam: "Tom Bakker", functie: "Fysiotherapeut", specialisatie: "Algemeen", foto: "/team/lid-6.jpg", uitgelicht: true },
  { naam: "Nadia el Haddaoui", functie: "Kinderfysiotherapeut", specialisatie: "Kind en motoriek", foto: "/team/nadia-el-haddaoui.jpg" },
  { naam: "Sven Postma", functie: "Sportfysiotherapeut", specialisatie: "Kracht en preventie", foto: "/team/sven-postma.jpg" },
  { naam: "Iris van Dijk", functie: "Manueel therapeut", specialisatie: "Wervelkolom", foto: "/team/iris-van-dijk.jpg" },
  { naam: "Karim Bouazza", functie: "Fysiotherapeut", specialisatie: "Schouder", foto: "/team/karim-bouazza.jpg" },
  { naam: "Femke Smit", functie: "Bekkenfysiotherapeut", specialisatie: "Zwangerschap en herstel", foto: "/team/femke-smit.jpg" },
  { naam: "Jeroen Vos", functie: "Fysiotherapeut", specialisatie: "Knie en heup", foto: "/team/jeroen-vos.jpg" },
  { naam: "Maud Peeters", functie: "Oedeemtherapeut", specialisatie: "Lymfe en herstel", foto: "/team/maud-peeters.jpg" },
  { naam: "Wesley Groot", functie: "Sportfysiotherapeut", specialisatie: "Teamsport", foto: "/team/wesley-groot.jpg" },
  { naam: "Amira Haddad", functie: "Fysiotherapeut", specialisatie: "Nek en hoofdpijn", foto: "/team/amira-haddad.jpg" },
  { naam: "Gijs Molenaar", functie: "Manueel therapeut", specialisatie: "Rug", foto: "/team/gijs-molenaar.jpg" },
  { naam: "Sophie Willems", functie: "Fysiotherapeut", specialisatie: "Revalidatie", foto: "/team/sophie-willems.jpg" },
  { naam: "Ravi Sharma", functie: "Fysiotherapeut", specialisatie: "Algemeen", foto: "/team/ravi-sharma.jpg" },
  { naam: "Julia Kramer", functie: "Sportfysiotherapeut", specialisatie: "Loopanalyse", foto: "/team/julia-kramer.jpg" },
  { naam: "Mohammed Aziz", functie: "Praktijkmanager", specialisatie: "Zorg en planning", foto: "/team/mohammed-aziz.jpg" },
];

const verzekeraars: Verzekeraar[] = [
  { naam: "Zilveren Kruis", logo: "", gecontracteerd: true, toelichting: "Wij hebben een contract met Zilveren Kruis. Je fysiotherapie wordt vergoed uit je aanvullende pakket." },
  { naam: "CZ", logo: "", gecontracteerd: true, toelichting: "Wij zijn gecontracteerd door CZ. Vergoeding loopt via je aanvullende verzekering." },
  { naam: "VGZ", logo: "", gecontracteerd: true, toelichting: "Wij hebben een contract met VGZ. Wij zoeken gratis voor je uit hoeveel behandelingen jouw pakket dekt." },
  { naam: "Menzis", logo: "", gecontracteerd: true, toelichting: "Wij zijn gecontracteerd door Menzis. Vergoeding komt uit je aanvullende pakket." },
  { naam: "ONVZ", logo: "", gecontracteerd: true, toelichting: "Wij hebben een contract met ONVZ. Wij regelen de declaratie rechtstreeks." },
  { naam: "DSW", logo: "", gecontracteerd: true, toelichting: "Wij zijn gecontracteerd door DSW. Je fysiotherapie loopt via je aanvullende verzekering." },
  { naam: "Zorg en Zekerheid", logo: "", gecontracteerd: false, toelichting: "Met Zorg en Zekerheid hebben wij geen contract. Behandelingen zijn mogelijk, maar de vergoeding kan lager uitvallen. Wij zoeken het gratis voor je uit." },
];

const feiten: Feit[] = [
  {
    titel: "Geen verwijzing nodig",
    tekst:
      "Je mag rechtstreeks een afspraak maken. Een bezoek aan de huisarts is niet verplicht.",
  },
  {
    titel: "Meestal uit je aanvullende pakket",
    tekst:
      "Hoeveel behandelingen je krijgt hangt af van je pakket. Wij zoeken het gratis voor je uit.",
  },
  {
    titel: "Geen eigen risico bij aanvullend",
    tekst:
      "Vergoeding uit de aanvullende verzekering raakt je eigen risico niet.",
  },
];

const faq: FaqItem[] = [
  {
    vraag: "Heb ik een verwijzing van de huisarts nodig?",
    antwoord:
      "Nee. Fysiotherapie is direct toegankelijk, je mag zelf een afspraak maken. Alleen bij een chronische indicatie is een verwijzing nodig, en dan helpen we je daarbij.",
  },
  {
    vraag: "Hoeveel behandelingen heb ik nodig?",
    antwoord:
      "Dat hoor je na de intake, niet ervoor. Voor de meeste klachten zitten we tussen de zes en tien behandelingen. Je krijgt een inschatting op papier zodat je weet waar je aan toe bent.",
  },
  {
    vraag: "Kan ik dezelfde week nog terecht?",
    antwoord:
      "Meestal wel. Onze actuele wachttijd staat bovenaan deze pagina en wordt elke maandag bijgewerkt. Bij acute klachten proberen we je binnen 24 uur in te plannen.",
  },
  {
    vraag: "Krijg ik steeds dezelfde therapeut?",
    antwoord:
      "Ja. Je wordt gekoppeld aan één therapeut die je hele traject begeleidt. Alleen bij vakantie of ziekte neemt een collega waar, en die is dan volledig ingelezen.",
  },
  {
    vraag: "Wat kost het als ik niet verzekerd ben voor fysiotherapie?",
    antwoord:
      "Een intake kost 60 euro en een vervolgbehandeling 38 euro. Je krijgt vooraf een inschatting van de totale kosten, zodat je nooit voor verrassingen komt te staan.",
  },
];

/* ------------------------------------------------------------ */

export const praktijk = {
  naam: "FysioAlmere",
  plaats: "Almere",
  telefoon: "036 123 4567",
  telefoonHref: "tel:+31361234567",
  whatsapp: "https://wa.me/31361234567",
  boekUrl: "https://afspraak.example.nl",
  heroVideo: "/hero/hero.mp4",
  heroTitel: "Pijnvrij Bewegen",

  trust: {
    googleScore: 4.9,
    aantalReviews: 218,
    wachttijdDagen: 2,
    bigRegistratie: "BIG geregistreerd",
    bigSub: "Kwaliteitsregister Fysiotherapie",
  },

  klachten,
  reviews,
  empathie,
  stappen,
  team,

  teamShowcase: {
    groepsfoto: "/team/groep.jpg",
  },

  vergoeding: {
    peiljaar: 2026,
    laatstGecontroleerd: "januari 2026",
    feiten,
    verzekeraars,
    disclaimer:
      "Gegevens gecontroleerd in januari 2026 en gebaseerd op de polisvoorwaarden van 2026. Aan deze informatie kun je geen rechten ontlenen, je polisvoorwaarden zijn leidend.",
  },

  faq,
} as const;

export type Praktijk = typeof praktijk;
