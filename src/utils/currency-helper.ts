import { CurrencyCodes } from "../config/currency";
import { formatNumberToText } from "./number-helper";

interface Currency {
  code: string;
  amount: number;
}

const commaCurrencies = ['al', 'ad', 'ar', 'at', 'az', 'be', 'bo', 'by', 'da', 'fr', 'fx', 'de'];

export function ConvertCurrency(value: Currency) {
    return `${!!CurrencyCodes[value.code] ? CurrencyCodes[value.code] : value.code}${formatNumberToText(value.amount, 2)}`;
}

export function UseCommaInCurrency() {
  return commaCurrencies.find(x => x === document.documentElement.lang.toLowerCase());
}
