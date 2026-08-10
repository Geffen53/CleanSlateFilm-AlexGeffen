// hooks/useGpcDetection.ts
'use client';

import { useEffect, useState } from 'react';

export function useGpcDetection() {
  const [{ gpcEnabled, gpcChecked }, setGpcState] = useState({ gpcEnabled: false, gpcChecked: false });

  useEffect(() => {
    const enabled = 'globalPrivacyControl' in navigator && Boolean((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl);
    setGpcState({ gpcEnabled: enabled, gpcChecked: true });
  }, []);

  return { gpcEnabled, gpcChecked };
}
