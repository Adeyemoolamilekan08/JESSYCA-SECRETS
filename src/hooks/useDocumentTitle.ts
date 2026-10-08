import { useEffect } from 'react';

const BASE = 'Jessyca Secrets | Beauty, Cosmetics & Personal Care';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Jessyca Secrets` : BASE;
  }, [title]);
}
