// hooks/useGpcDetection.ts
'use client';

import { useEffect, useState } from 'react';

export function useGpcDetection() {
  const [gpcEnabled, setGpcEnabled] = useState(false);
  const [gpcChecked, setGpcChecked] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'globalPrivacyControl' in navigator) {
      // According to GPC specification, navigator.globalPrivacyControl should be a boolean
      // We check for its presence and then its value
      setGpcEnabled(!!(navigator as any).globalPrivacyControl);
    }
    setGpcChecked(true); // Mark as checked after attempting detection
  }, []);

  return { gpcEnabled, gpcChecked };
}
