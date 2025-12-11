// Environment variables for Sanity configuration
const getEnvVar = (name: string, fallback?: string) => {
  if (typeof window !== 'undefined') {
    // Client-side: use injected variables
    return (window as any)[`__${name}__`] || fallback;
  }
  // Server-side: use process.env
  return process.env[name] || fallback;
};

export const apiVersion = getEnvVar('VITE_SANITY_API_VERSION', '2024-01-22');

export const dataset = getEnvVar(
  'VITE_SANITY_DATASET',
  'Missing environment variable: VITE_SANITY_DATASET'
);

export const projectId = getEnvVar(
  'VITE_SANITY_PROJECT_ID',
  'Missing environment variable: VITE_SANITY_PROJECT_ID'
);

export const useCdn = false;
