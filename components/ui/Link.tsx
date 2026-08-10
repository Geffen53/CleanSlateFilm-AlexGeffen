'use client';

import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';

export interface LinkProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
  to?: string; // Standardize on 'to' if preferred, or use 'href'
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, to, ...props }, ref) => {
    const finalHref = href || to || '#';
    return (
      <NextLink
        ref={ref}
        href={finalHref}
        className={cn('text-blue-600 hover:underline dark:text-blue-400', className)}
        {...props}
      />
    );
  }
);
Link.displayName = 'Link';

export default Link;
