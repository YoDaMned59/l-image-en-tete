const BASE_PATH = '/l-image-en-tete';

export const normalizePath = (pathname) => {
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    const normalized = pathname.slice(BASE_PATH.length) || '/';
    return normalized;
  }
  return pathname;
};

export const addBasePath = (path) => {
  if (!BASE_PATH) {
    return path;
  }
  if (path === '/') {
    return BASE_PATH + '/';
  }
  return BASE_PATH + path;
};

export const navigate = (path) => {
  const fullPath = addBasePath(path);
  window.history.pushState({}, '', fullPath);
  window.scrollTo(0, 0);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const handleLinkClick = (e, path) => {
  e.preventDefault();
  navigate(path);
};
