// components/DoNotSellOrSharePage.tsx
'use client';

import * as React from 'react';
import { useCookieConsent } from '@/context/cookie-consent';
import { clearAllCookies } from '@/utils/cookie-consent';
import EnhancedAlertDialog from '@/components/ui/enhanced-alert-dialog';
import { CheckCircle, XCircle, Globe, Trash2 } from 'lucide-react';
import { useGpcDetection } from '@/hooks/useGpcDetection'; // Import the new hook
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function DoNotSellOrSharePageContent(): React.ReactElement {
  const { preferences: consent, updatePreferences } = useCookieConsent();
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const { gpcEnabled, gpcChecked } = useGpcDetection(); // Use the GPC detection hook

  const onToggleAnalytics = React.useCallback(() => {
    updatePreferences({ analytics: !(consent?.analytics ?? true) });
  }, [consent, updatePreferences]);

  const onDeleteAll = React.useCallback(() => {
    clearAllCookies();
    // In a real-world scenario, you might also trigger server-side data deletion/opt-out
    // depending on what personal information was collected and stored.
    window.location.reload();
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 min-h-app relative overflow-hidden pb-safe">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <h1 className="font-display text-6xl md:text-8xl font-normal tracking-tighter mb-10 text-neutral-900 dark:text-white leading-[0.9]">
          Your Privacy <br /><span className="text-chinese-red">Choices</span>
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-3xl mb-12">
          Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), you have the right to opt out of the "sale" or "sharing" of your personal information. This page allows you to manage those preferences.
        </p>

        <div className="space-y-8 max-w-3xl">
          {/* Global Privacy Control */}
          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-start gap-4">
            <Globe className="h-6 w-6 text-blue-400 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-foreground mb-2">Global Privacy Control (GPC)</h2>
              <p className="text-sm text-muted-foreground mb-4">
                We respect your Global Privacy Control (GPC) browser signal as a valid request to opt-out of the sale or sharing of your personal information.
              </p>
              {gpcChecked ? (
                gpcEnabled ? (
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" /> GPC Signal Detected and Honored.
                  </div>
                ) : (
                  <div className="flex items-center text-sm text-yellow-600">
                    <XCircle className="h-4 w-4 mr-2" /> GPC Signal Not Detected. Please enable it in your browser settings.
                  </div>
                )
              ) : (
                <div className="flex items-center text-sm text-muted-foreground">
                  Detecting GPC signal...
                </div>
              )}
            </div>
          </div>

          {/* Anonymous Analytics */}
          <div className="flex items-center justify-between p-6 bg-muted/80 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-400 text-2xl">insights</span>
              <div>
                <p className="font-medium text-lg text-foreground">Anonymous Analytics</p>
                <p className="text-sm text-muted-foreground">
                  Allow us to collect anonymous usage data to improve site performance and user experience. This data is not used for cross-context behavioral advertising.
                </p>
              </div>
            </div>
            <button
              onClick={onToggleAnalytics}
              role="switch"
              aria-checked={consent?.analytics ? 'true' : 'false'}
              className={cn(
                'relative inline-flex h-8 w-16 items-center rounded-full transition-colors border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
                consent?.analytics
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-600'
              )}
            >
              <span
                className={cn(
                  'inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow',
                  consent?.analytics ? 'translate-x-8' : 'translate-x-1'
                )}
              />
            </button>
          </div>

          {/* Data Deletion */}
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg">
            <h2 className="font-semibold text-lg text-foreground mb-2">Delete All Data & Reset Consent</h2>
            <p className="text-sm text-muted-foreground mb-4">
              This action will clear all cookies, local storage data, and reset your privacy preferences on this site. You will be logged out and the cookie banner will reappear on your next visit.
            </p>
            <button
              onClick={() => setConfirmDelete(true)}
              className="px-6 py-3 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete My Data
            </button>
            <EnhancedAlertDialog
              open={confirmDelete}
              onOpenChange={setConfirmDelete}
              title="Confirm Data Deletion?"
              description="This will delete all cookies and local data related to this site and reset your privacy choices. Are you sure you want to proceed?"
              confirmText="Yes, Delete Everything"
              cancelText="Cancel"
              onConfirm={onDeleteAll}
              variant="destructive"
            />
          </div>

          {/* More Information */}
          <div className="pt-4 text-sm text-muted-foreground">
            For more details on how we handle your personal information, please review our:{' '}
            <Link href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
