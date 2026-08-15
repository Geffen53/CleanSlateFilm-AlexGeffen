'use client';

import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = mounted && (theme === 'light' || theme === 'dark' || theme === 'system') ? theme : 'system';
  const cycle = {
    system: { next: 'light', label: 'Use light theme', icon: Monitor },
    light: { next: 'dark', label: 'Use dark theme', icon: Sun },
    dark: { next: 'system', label: 'Use device theme', icon: Moon },
  } as const;
  const { next, label, icon: Icon } = cycle[currentTheme];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
      disabled={!mounted}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-paper hover:text-ink disabled:cursor-default disabled:opacity-0"
    >
      <Icon size={15} aria-hidden="true" />
    </button>
  );
}
