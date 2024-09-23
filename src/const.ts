// Favicon and Apple Touch Icons
export const FAVICON_ICO = "/images/favicon.svg";
export const FAVICON_32x32 = "/images/favicon.svg";
export const FAVICON_16x16 = "/images/favicon.svg";
export const APPLE_TOUCH_ICON = "/images/favicon.svg";
export const MANIFEST = "";

// SEO and Accessibility
export const ROBOTS_CONTENT = "index, follow";
export const THEME_COLOR = "#ffffff";


export const NAV_MENU = [
  { label: "Accueil", url: "/" },
  { label: "À propos", url: "/apropos" },
  { label: "Services", url: "/#services" },
  { label: "Blog", url: "/blog" },
  {
    label: "Autres",
    dropdown: [
      { label: "404", url: "404" },
      { label: "Login", url: "/connexion" },
    ],
  },
];

export const CTA_BUTTON = { label: "Contactez moi", url: "/contact" };

// Dev & Mentions Légales
export const SITE_DEV = 'Zatchouli';
export const SITE_DEV_URL = 'https://zatchouli.fr';
export const SITE_DEV_EMAIL = 'contact@zatchouli.fr';
export const SITE_HOST_NAME = 'Ionos';
export const SITE_HOST_ADDRESS = "1 rue de l'hébergeur, Paris";
export const SITE_HOST_URL = 'https://ionos.fr';
export const SITE_HOST_CONTACT = '+33612345678';
export const SITE_MEDIATEUR_NAME = 'Ionos';
export const SITE_MEDIATEUR_ADRESS = '';
export const SITE_MEDIATEUR_URL = '';
export const SITE_MEDIATEUR_CONTACT = '+33612345678';

// QUI ÊTES-VOUS ?
export const DEFAULT_TITLE = "Casa Nela";
export const DEFAULT_DESCRIPTION = "Restauration rapide fait maison!";
export const DEFAULT_KEYWORDS = "astro, cms, site web, gratuit, performant";
export const DEFAULT_AUTHOR = "Auteur de la Publication";
export const DEFAULT_ADDRESS = '1 rue de la lune, 74000 Annecy';
export const DEFAULT_EMAIL = 'contact@zatchouli.fr';
export const DEFAULT_PHONE = '+33612345678';
export const GOOGLE_MAPS = 'https://goo.gl/maps/annecy';
export const IMAGE_MAPS = '/images/map.png';


// PARAMÈTRES
export const DEFAULT_LANG = "fr";
export const SITE_URL = '/';
export const DEFAULT_OG_IMAGE = "/logo.png";
export const DEFAULT_CANONICAL_URL = "";
export const DEFAULT_PREFETCH_URLS = [""];
export const DEFAULT_CSS_FILES = [""];
export const DEFAULT_JS_FILES = [""];
export const LOGO_URL = "/logo.png";
export const LOGO_ALT = "logo";
export const LOGO_WIDTH = 210;
export const LOGO_HEIGHT = 29;

// STATISTIQUES
export const stats = [
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '+15',
    desc: "années d'expérience",
  },
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '+300',
    desc: "sites créés",
  },
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '+500',
    desc: "clients satisfaits",
  },
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '98%',
    desc: "taux de satisfaction",
  },

];

// NAVIGATION
export const NAV_LINKS = [
  {
    name: 'Accueil',
    url: '/',
  },
  {
    name: 'À propos',
    url: '/apropos',
  },
  {
    name: 'Services',
    url: '/services',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

// NAVIGATION SECONDAIRE
export const NAV_LINKS_SECONDARY = [
  {
    name: 'Mentions Légales',
    url: '/mentions-legales',
  },
  {
    name: 'Politique de confidentialité',
    url: '/mentions-legales/#politique-confidentialite',
  },
  {
    name: 'Conditions Générales de Vente',
    url: '/mentions-legales/#cgv',
  },
  {
    name: 'Plan du site',
    url: '/plan-du-site',
  },
];

// PIED DE PAGE
export const FOOTER_TEXT = 'Fait avec ❤️ par';

// RÉSEAUX SOCIAUX
export const SOCIAL_MEDIA = [
  {
    name: 'instagram',
    iconClass: 'mdi:instagram',
    url: 'https://instagram.com/zatchouli',
  },
  {
    name: 'facebook',
    iconClass: 'mdi:facebook',
    url: 'https://facebook.com/zatchouli',
  },
];