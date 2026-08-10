import { useEffect, useRef, useCallback } from 'react';

export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isActive || !containerRef.current) return;

    if (e.key === 'Escape') {
      return; // Handled by component if needed
    }

    if (e.key === 'Tab') {
      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
      
      // Save the currently focused element to restore it later
      const previouslyFocused = document.activeElement as HTMLElement;

      // Focus the first focusable element
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        if (previouslyFocused) {
          previouslyFocused.focus();
        }
      };
    }
  }, [isActive, handleKeyDown]);

  return containerRef;
}
