'use client';

import { sites, type SiteId, type SiteConfig } from './sites';
import { content, type SiteContent } from './content';

export function useSiteId(): SiteId {
  const envId = (process.env.NEXT_PUBLIC_SITE_ID || 'dsgvoclaw') as SiteId;
  return sites[envId] ? envId : 'dsgvoclaw';
}

export function useSiteConfig(): SiteConfig & { content: SiteContent } {
  const id = useSiteId();
  return { ...sites[id], content: content[id] };
}
