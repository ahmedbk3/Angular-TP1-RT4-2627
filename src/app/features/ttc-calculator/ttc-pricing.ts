export const DEFAULT_PRICE = 0;
export const DEFAULT_QUANTITY = 1;
export const DEFAULT_TVA = 18;
/**
 * Discount rate for a quantity (0.2 means 20 %).
 * Rules of the TP, read together with the screenshot (10 pieces = no discount):
 * - more than 15 pieces : 30 %
 * - 11 to 15 pieces : 20 %
 * - otherwise : 0 %
 */
export function getDiscountRate(quantity: number): number {
 if (quantity > 15) return 0.3;
 if (quantity > 10) return 0.2;
 return 0;
}
