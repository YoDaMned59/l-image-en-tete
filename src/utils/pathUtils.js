// Base path pour GitHub Pages
const BASE_PATH = '/l-image-en-tete';

/**
 * Normalise un chemin en retirant la base URL si présente
 * @param {string} pathname - Le pathname complet
 * @returns {string} - Le chemin normalisé
 */
export const normalizePath = (pathname) => {
  // Si BASE_PATH est défini et que le pathname commence par BASE_PATH
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    const normalized = pathname.slice(BASE_PATH.length) || '/';
    return normalized;
  }
  return pathname;
};

/**
 * Ajoute la base URL à un chemin (si nécessaire)
 * @param {string} path - Le chemin relatif (ex: '/about')
 * @returns {string} - Le chemin complet
 */
export const addBasePath = (path) => {
  if (!BASE_PATH) {
    return path;
  }
  if (path === '/') {
    return BASE_PATH + '/';
  }
  return BASE_PATH + path;
};

/**
 * Navigue vers une page en utilisant l'API History
 * @param {string} path - Le chemin relatif (ex: '/about')
 */
export const navigate = (path) => {
  const fullPath = addBasePath(path);
  window.history.pushState({}, '', fullPath);
  // Scroll vers le haut de la page
  window.scrollTo(0, 0);
  // Déclencher un événement personnalisé pour notifier le changement
  window.dispatchEvent(new PopStateEvent('popstate'));
};

