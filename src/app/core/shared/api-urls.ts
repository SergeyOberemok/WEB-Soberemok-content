const host = 'api';

export interface ApiUrls {
  auth: { login: string; register: string };
  products: { index: string };
  cart: { index: string; store: string; destroy: string };
}

export const API_URLS: ApiUrls = {
  auth: {
    login: `${host}/login`,
    register: `${host}/register`,
  },
  products: {
    index: `${host}/products`,
  },
  cart: {
    index: `${host}/cart`,
    store: `${host}/cart`,
    destroy: `${host}/cart/\${id}`,
  },
};
