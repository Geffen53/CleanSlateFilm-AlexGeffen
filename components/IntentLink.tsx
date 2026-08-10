'use client';

import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type IntentLinkProps = Omit<LinkProps, 'href'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: string;
    children: ReactNode;
  };

export default function IntentLink({ href, children, ...props }: IntentLinkProps) {
  const router = useRouter();
  const preload = () => router.prefetch(href);

  return (
    <Link
      {...props}
      href={href}
      prefetch={false}
      onFocus={preload}
      onMouseEnter={preload}
      onTouchStart={preload}
    >
      {children}
    </Link>
  );
}
