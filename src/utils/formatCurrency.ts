/**
 * Formats a number as GBP currency string
 * e.g. 1234.56 → "£ 1,234.56"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(amount)
    .replace("£", "£ ");
}
