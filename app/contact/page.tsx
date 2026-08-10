'use client';

import * as React from 'react';
import { Suspense } from 'react';
import ContactPage from '@/components/ContactPage';

function ContactContent() {
  return <ContactPage />;
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-12 px-6 bg-white dark:bg-black min-h-app flex flex-col items-center justify-center text-center pb-safe">
        <div className="animate-pulse text-[10px] uppercase tracking-widest text-neutral-400">
          Loading contact form...
        </div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
