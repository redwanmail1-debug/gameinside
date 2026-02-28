import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

// Only create a real client when a project ID is configured
export const sanityClient = projectId && projectId !== 'your-project-id-here'
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

export const isSanityConfigured = sanityClient !== null;
