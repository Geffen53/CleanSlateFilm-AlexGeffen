// app/do-not-sell/page.tsx
import * as React from 'react';
import { Metadata } from 'next';
import { Suspense } from 'react';
import DoNotSellOrSharePageContent from '@/components/DoNotSellOrSharePage';

export const metadata: Metadata = {
  title: 'Do Not Sell or Share My Personal Information | Enemy Alien',
  description: 'Manage your privacy choices regarding the sale or sharing of your personal information under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).',
};

export default function DoNotSellOrSharePage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-12 px-6 bg-white dark:bg-black min-h-app flex flex-col items-center justify-center text-center pb-safe">
        <div className="animate-pulse text-[10px] uppercase tracking-widest text-neutral-400">
          Loading privacy options...
        </div>
      </div>
    }>
      <DoNotSellOrSharePageContent />
    </Suspense>
  );
}
