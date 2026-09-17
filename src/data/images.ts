/**
 * CENTRALIZED IMAGE CONFIGURATION - GC ELTEKNIK AB
 *
 * All images used across the site are defined here.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  ogImage?: ImageSlot;
  hero: {
    background: ImageSlot;
    videoUrl?: string;
  };
  services: {
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember?: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'Gc Elteknik AB - Certifierade elinstallationer och elektriker i Stockholm',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Gc Elteknik AB',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'Gc Elteknik AB Logotyp',
  },

  hero: {
    background: {
      url: '/hero-main.jpg',
      alt: 'Gc Elteknik AB moderna elinstallationer och belysningsdesign i Stockholm',
    },
    videoUrl: '/hero-video.mp4',
  },

  services: {
    'elinstallationer': {
      url: '/gallery/gallery-5.jpg',
      alt: 'Behöriga elinstallationer för privatpersoner och företag i Stockholm',
    },
    'belysning': {
      url: '/gallery/gallery-2.jpg',
      alt: 'Exklusiv belysningsdesign och LED-installationer för restaurang och butik',
    },
    'elcentraler': {
      url: '/gallery/gallery-5.jpg',
      alt: 'Modernisering och byte av elcentraler och automatsäkringar',
    },
    'laddboxar': {
      url: '/gallery/gallery-4.jpg',
      alt: 'Installation av laddboxar och elbilsladdare för villa och BRF',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Gc Elteknik AB pendelarmaturer och restaurangbelysning Drottninghof',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Gc Elteknik AB stämningsfull lounge- och arkitekturbelysning',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Gc Elteknik AB neonskylt och integrerade LED-profiler Drottninghof',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Gc Elteknik AB laddboxinstallation villa med dold kabeldragning',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Gc Elteknik AB modern elcentral med personskyddsbrytare och smart styrning',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Gc Elteknik AB infällda spotlights och skandinavisk köksbelysning',
    },
  ],

  cta: {
    banner: {
      url: '/cta-banner-bg.webp',
      alt: 'Gc Elteknik AB auktoriserade elinstallationer och offert',
    },
    midSection: {
      url: '/cta-mid-section.webp',
      alt: 'Gc Elteknik AB auktoriserad installation av laddbox och el i Stockholm',
    },
  },

  about: {
    hero: {
      url: '/about-hero.webp',
      alt: 'Gc Elteknik AB auktoriserade elektriker och belysning i Stockholm',
    },
  },

  whyChooseUs: {
    url: '/gallery/gallery-5.jpg',
    alt: 'Certifierad elteknik med högsta säkerhet - Gc Elteknik AB',
  },

  ideaToResult: {
    url: '/gallery/gallery-6.jpg',
    alt: 'Från planering till färdig elinstallation i Stockholm',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Restaurangbelysning och pendelarmaturer på Drottninghof',
      },
      title: 'Restaurangbelysning och interiör',
      category: 'Belysningsdesign',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Stämningsbelysning, sconces och integrerad LED i lounge',
      },
      title: 'Stämningsfull restaurang och lounge',
      category: 'Kommersiell El',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Neonportal och dolda LED-profiler i entré',
      },
      title: 'Neonportal och LED-profiler',
      category: 'Specialbelysning',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Installation av laddbox för elbil på villafasad',
      },
      title: 'Laddboxinstallation Villa',
      category: 'Grön Teknik',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Installation och modernisering av smart elcentral',
      },
      title: 'Modern normcentral och säkringsskåp',
      category: 'Elcentraler',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Infällda takspotlights och belysning i modernt kök',
      },
      title: 'Infällda spotlights i kök',
      category: 'Bostadsinstallation',
    },
  ],
};

export default images;
