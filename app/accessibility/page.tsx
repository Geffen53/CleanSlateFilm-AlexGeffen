import type { Metadata } from 'next';
import AccessibilityStatement from '@/components/AccessibilityStatement';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Clean Slate accessibility statement, WCAG target, known limitations, and contact information.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return <AccessibilityStatement />;
}
