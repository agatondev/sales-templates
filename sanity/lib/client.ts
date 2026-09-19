import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  fallback = [] as unknown as QueryResponse,
}: {
  query: string
  params?: QueryParams
  fallback?: QueryResponse
}): Promise<QueryResponse> {
  try {
    if (!projectId || projectId === 'your-project-id') {
      return fallback
    }
    return await client.fetch<QueryResponse>(query, params)
  } catch (error) {
    console.warn('[Sanity Fetch Warning]:', error)
    return fallback
  }
}
