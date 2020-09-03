const FormatObject = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
});
  
  
/**
 * Format number to currency format
 * @param value number that should be formatted
 * @return {string} formatted price
 * @example  1000 > 1 000 ₽
 */
export function formatPrice(value: number): string {
    return FormatObject.format(value);
}
  