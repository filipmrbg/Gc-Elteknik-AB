export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'elinstallationer',
    title: 'Elinstallation och service',
    shortDescription: 'Behöriga elinstallationer, renoveringar, kabeldragning samt montering av eluttag, strömbrytare och belysningspunkter för privatpersoner och företag.',
    heroText: 'Trygga, fackmannamässiga och certifierade elinstallationer i Stockholm med omnejd.',
    detailedDescription: `Gc Elteknik AB utför alla former av behöriga elinstallationer för privatpersoner, fastighetsägare och företag i Stockholm med omnejd. Oavsett om det rör sig om en total köks- eller badrumsrenovering, nybyggnation, felsökning i befintliga kablage eller installation av nya vägguttag och strömbrytare garanterar vi högsta säkerhetsstandard.

Vi ser till att din elanläggning uppfyller alla gällande elsäkerhetskrav, fungerar optimalt i vardagen och är framtidssäkrad för ökande elbehov.`,
    heroImage: '/gallery/gallery-5.jpg',
    image: '/gallery/gallery-5.jpg',
    href: '/tjanster#elinstallationer',
    tag: 'Elinstallation',
    badge: 'Auktoriserad Elinstallatör',
    highlights: [
      'Nyinstallation och renovering av el i bostad och lokal',
      'Installation av moderna eluttag, dimmers och strömbrytare',
      'Systematisk felsökning och åtgärdande av elfel',
      'Full dokumentation och egenkontrollprogram',
    ],
    faq: [
      {
        question: 'Är era elektriker behöriga och certifierade?',
        answer: 'Ja, Gc Elteknik AB är registrerat hos Elsäkerhetsverket och alla våra installationer utförs av behöriga och erfarna elektriker enligt gällande föreskrifter.',
      },
      {
        question: 'Kan jag använda ROT-avdrag för elarbeten?',
        answer: 'Ja, som privatperson kan du nyttja ROT-avdraget och få 30 % avdrag på arbetskostnaden direkt på fakturan.',
      },
    ],
  },
  {
    slug: 'belysning',
    title: 'Belysningsdesign',
    shortDescription: 'Exklusiv belysning för restaurang, butik, kontor och villa med integrerade LED-profiler, infällda spotlights och stämningsfull ljusstyrning.',
    heroText: 'Skapa magisk atmosfär och funktionella miljöer med modern ljusdesign och energieffektiv LED.',
    detailedDescription: `Genomtänkt belysning lyfter arkitekturen, förhöjer inredningen och skapar trivsel. Gc Elteknik AB är specialister på kundanpassade belysningslösningar för både kommersiella verksamheter som restauranger, hotell och butiker samt moderna privatbostäder i Stockholm.

Vi hjälper er från idéstadie och val av armaturer till färdig installation av infällda spotlights, dolda LED-lister, skensystem och smart styrning via Plejd eller DALI.`,
    heroImage: '/gallery/gallery-2.jpg',
    image: '/gallery/gallery-2.jpg',
    href: '/tjanster#belysning',
    tag: 'Ljusdesign',
    badge: 'Kreativ Belysning',
    highlights: [
      'Restaurang- och butiksbelysning med skräddarsydd ljusmiljö',
      'Infällda LED-spotlights och linjära ljusprofiler',
      'Smarta dimmersystem och scenstyrning via Plejd',
      'Energieffektiv belysning som sänker driftkostnaderna',
    ],
    faq: [
      {
        question: 'Hjälper ni till med val av armaturer och ljusplanering?',
        answer: 'Absolut! Vi guidar er genom val av färgtemperatur (Kelvin), spridningsvinkel och armaturer så att helheten passar just er miljö.',
      },
      {
        question: 'Kan befintlig belysning uppgraderas till modern LED?',
        answer: 'Ja, vi utför ofta LED-konverteringar och byter ut äldre halogen- och glödljus mot energieffektiva LED-lösningar med bevarad varm ljuskaraktär.',
      },
    ],
  },
  {
    slug: 'elcentraler',
    title: 'Elcentraler och säkringsskåp',
    shortDescription: 'Modernisering och byte av äldre proppskåp till moderna normcentraler med snabba automatsäkringar, jordfelsbrytare och överspänningsskydd.',
    heroText: 'Maximal driftsäkerhet och skydd mot elbränder med en modern normcentral.',
    detailedDescription: `Elcentralen är fastighetens hjärta. Äldre säkringsskåp med porslinssäkringar saknar ofta jordfelsbrytare och är inte dimensionerade för dagens moderna apparater med hög strömförbrukning. Gc Elteknik AB byter ut din gamla elcentral mot en modern, säker normcentral med automatsäkringar och personskyddsbrytare.

En uppgraderad central minimerar risken för elbränder, skyddar känslig elektronik och gör det enkelt att återställa strömmen med ett knapptryck.`,
    heroImage: '/gallery/gallery-5.jpg',
    image: '/gallery/gallery-5.jpg',
    href: '/tjanster#elcentraler',
    tag: 'Normcentraler',
    badge: 'Högsta Personsäkerhet',
    highlights: [
      'Byte från gamla proppskåp till moderna normcentraler',
      'Installation av jordfelsbrytare och personskyddsbrytare',
      'Kapacitetsberäkning och uppdelning av säkringsgrupper',
      'Märkning av grupper och tydligt kretsschema',
    ],
    faq: [
      {
        question: 'Varför bör jag byta ut mitt gamla proppskåp?',
        answer: 'En modern normcentral reagerar blixtsnabbt vid fel och bryter strömmen innan skada uppstår. Den ger ett komplett personskydd och klarar moderna hushållsapparater.',
      },
      {
        question: 'Hur lång tid tar ett centralbyte?',
        answer: 'Ett standardbyte i en lägenhet eller villa tar vanligtvis mellan en halv och en hel arbetsdag, med minimalt strömavbrott för er.',
      },
    ],
  },
  {
    slug: 'laddboxar',
    title: 'Laddboxar',
    shortDescription: 'Certifierad installation av smarta elbilsladdare med lastbalansering för villor, bostadsrättsföreningar och företagsparkeringar.',
    heroText: 'Ladda bilen säkert, snabbt och kostnadseffektivt hemma eller på jobbet.',
    detailedDescription: `Att ladda bilen i ett vanligt vägguttag innebär brandrisk och långsam laddning. Gc Elteknik AB levererar och installerar marknadsledande laddboxar anpassade för det nordiska klimatet. Vi installerar dynamisk lastbalansering som automatiskt anpassar laddningen efter fastighetens övriga förbrukning så att huvudsäkringen aldrig löser ut.

Vi hjälper privatpersoner att nyttja skattereduktionen för Grön Teknik direkt på fakturan (50 % avdrag på arbete och material).`,
    heroImage: '/gallery/gallery-4.jpg',
    image: '/gallery/gallery-4.jpg',
    href: '/tjanster#laddboxar',
    tag: 'Elbilsladdning',
    badge: 'Grön Teknik',
    highlights: [
      'Komplett installation med godkänd matarkabel och personskydd',
      'Dynamisk lastbalansering för optimal kapacitetsfördelning',
      'Smart app-styrning och schemalagd nattladdning',
      'Direktavdrag med 50 % Grön Teknik för privatpersoner',
    ],
    faq: [
      {
        question: 'Vad innebär dynamisk lastbalansering?',
        answer: 'Lastbalanseringen mäter hemmets totala elanvändning i realtid och stryper laddhastigheten tillfälligt när spisen eller tvättmaskinen körs, så huvudsäkringen inte går.',
      },
      {
        question: 'Hur fungerar skatteavdraget för Grön Teknik?',
        answer: 'Du får 50 % skattereduktion på både material och arbetskostnad för laddboxen, vilket dras av direkt på din faktura.',
      },
    ],
  },
];

export default services;
