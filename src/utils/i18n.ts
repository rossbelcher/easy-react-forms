import Translations from "./locale/translations";

export default function i18n(inputText: string) {
  const locale = document.documentElement.lang;
  
  if (Translations[inputText] && Translations[inputText][locale.toLowerCase()]) {
    return Translations[inputText][locale.toLowerCase()];
  }

  return inputText;
}
