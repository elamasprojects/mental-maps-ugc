import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Safely trigger Meta Pixel events without throwing if fbq is missing
export function trackFacebookEvent(eventName: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", eventName, params || {});
    }
  } catch (_) {
    // Intentionally swallow errors to avoid breaking UX if fbq is unavailable
  }
}