'use client';

import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const options = [
  { value: 'light', label: 'Light theme', icon: Sun },
  { value: 'system', label: 'Use device theme', icon: Monitor },
  { value: 'dark', label: 'Dark theme', icon: Moon },
] as const;

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div aria-label="Color theme" className="flex items-center gap-1">
      {options.map((option) => {
        const Icon = option.icon;
        const active = mounted && theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-label={option.label}
            aria-pressed={active}
            className={`grid h-9 w-9 place-items-center rounded-full transition ${active ? 'bg-ink text-paper' : 'text-muted hover:bg-paper hover:text-ink'}`}
          >
            <Icon size={15} />
          </button>
        );
      })}
    </div>
  );
}
