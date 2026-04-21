/**
 * Formats an ISO date string to display format
 * e.g. "2021-08-18" → "18 Aug 2021"
 */
export function formatDate(isoDate: string): string {
  if (!isoDate) return "—";
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

/**
 * Adds N days to an ISO date string and returns new ISO date
 */
export function addDays(isoDate: string, days: number): string {
  const date = new Date(isoDate);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

/**
 * Returns today's date as ISO string "YYYY-MM-DD"
 */
export function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}
