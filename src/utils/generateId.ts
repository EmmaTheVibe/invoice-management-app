/**
 * Generates a unique invoice ID in the format XX0000
 * e.g. "RT3080", "XM9141"
 */
export function generateInvoiceId(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letter1 = letters[Math.floor(Math.random() * letters.length)];
  const letter2 = letters[Math.floor(Math.random() * letters.length)];
  const number = Math.floor(Math.random() * 9000) + 1000;
  return `${letter1}${letter2}${number}`;
}

/**
 * Generates a unique ID for invoice line items
 */
export function generateItemId(): string {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
