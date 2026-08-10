'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200',
      outline: 'border border-neutral-200 bg-transparent hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900',
      ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-900',
      destructive: 'bg-red-500 text-white hover:bg-red-600',
    };

    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-12 px-8',
      icon: 'h-9 w-9',
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
