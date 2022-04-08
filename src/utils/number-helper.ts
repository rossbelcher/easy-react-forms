import { UseCommaInCurrency } from "./currency-helper";

export function formatNumberToText(number: number, decimalPlaces: number): String {
  if (decimalPlaces && number) {
    return number.toFixed(decimalPlaces);
  } else if (number === undefined || number === null || Number.isNaN(number)) {
    return '';
  }

  return String(number);
}

export function formatNumber(number: number, decimalPlaces: number): number {
  if (decimalPlaces && number) {
    return parseFloat(number.toFixed(decimalPlaces));
  } else if (number === undefined || number === null || Number.isNaN(number)) {
    return null;
  }

  return number;
}

export function cleanNumber(e: any, wholeNumbersOnly) {
  const allowedKeys = [
    8, 46, 37, 39, 9, 110, 109, 189, '.', '-', (UseCommaInCurrency() ? ',' : null)
  ]
  const keyVal = e.keyCode || e.charCode;

  if (!isFinite(e.key) && !allowedKeys.find(x => x == keyVal) && !allowedKeys.find(x => x == e.key)) return e.preventDefault();
  if (e.key === '+') return e.preventDefault();
  if (allowedKeys.find(x => x === e.key) && wholeNumbersOnly) return e.preventDefault();
}

export function isValidValue(value) {
  return !!value || value === 0;
}