import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with tailwind-merge to avoid conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Throttles a function to limit how often it can be called
 * @param fn The function to throttle
 * @param delay The minimum time between function calls in ms
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T, 
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;
    
    if (timeSinceLastCall >= delay) {
      lastCall = now;
      fn(...args);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        fn(...args);
        timeoutId = null;
      }, delay - timeSinceLastCall);
    }
  };
}

/**
 * Debounces a function to only call it after a certain period of inactivity
 * @param fn The function to debounce
 * @param delay The waiting period after the last call in ms
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T, 
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * Returns true if the current environment is a browser
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Returns true if the device is likely to be a mobile device
 */
export const isMobile = isBrowser && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * Returns true if the device is likely to have performance issues
 */
export const isLowPerfDevice = isBrowser && (
  isMobile || window.innerWidth < 768 || !window.matchMedia('(min-device-pixel-ratio: 1.5)').matches
);

/**
 * Safely accesses the window object, returning null if not in browser
 */
export function safeWindow(): Window | null {
  if (isBrowser) {
    return window;
  }
  return null;
} 