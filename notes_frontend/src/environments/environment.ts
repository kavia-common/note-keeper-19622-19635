const apiFromGlobal =
  typeof globalThis !== 'undefined' && (globalThis as any)['NG_APP_API_BASE_URL']
    ? (globalThis as any)['NG_APP_API_BASE_URL']
    : undefined;

export const environment = {
  production: false,
  // PUBLIC_INTERFACE
  /** Base URL for the notes backend API (configure via runtime global NG_APP_API_BASE_URL). */
  apiBaseUrl: apiFromGlobal || '/api'
};
