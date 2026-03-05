/**
 * Formats a phone number string by adding dashes.
 * Example: 81234567890 -> 0812-3456-7890
 */
export function formatPhone(phone: string): string {
  // Ensure we have a string
  const cleaned = ("" + phone).replace(/\D/g, "");
  
  // If it starts with 62, remove it for the local display format
  const local = cleaned.startsWith("62") ? cleaned.slice(2) : cleaned;
  
  // If it doesn't start with 0, add it for local display
  const withZero = local.startsWith("0") ? local : "0" + local;
  
  // Match groups for 08XX-XXXX-XXXX
  const match = withZero.match(/^(\d{4})(\d{4})(\d{1,})$/);
  
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  
  return withZero;
}
