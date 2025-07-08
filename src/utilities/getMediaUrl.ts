export function getMediaUrl(path: string, cacheTag?: string): string {
  if (!path) return '';
  return cacheTag ? `${path}?v=${cacheTag}` : path;
}
