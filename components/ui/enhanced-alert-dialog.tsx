'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import Button from './Button';

interface EnhancedAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  variant?: 'default' | 'destructive';
}

export default function EnhancedAlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  variant = 'default',
}: EnhancedAlertDialogProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[2147483649] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-slate-900 border border-border">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {cancelText}
          </Button>
          <Button
            variant={variant === 'destructive' ? 'destructive' : 'default'}
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
