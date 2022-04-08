export function subtract(amount1, amount2) {
    if (!amount1) amount1 = 0;
    if (!amount2) amount2 = 0;
    return parseFloat(amount1) - parseFloat(amount2);
}

export function sum(amount1, amount2) {
    if (!amount1) amount1 = 0;
    if (!amount2) amount2 = 0;
    return parseFloat(amount1) + parseFloat(amount2);
}

export function multiply(amount1, amount2) {
    if (!amount1) amount1 = 0;
    if (!amount2) amount2 = 0;
    return parseFloat(amount1) * parseFloat(amount2);
}

export function isStringWholeNumber(str: string) {
    if (typeof str != "string") return false;
    // @ts-ignore : use type coercion to parse the _entirety_ of the string (`parseInt` alone does not do this)
    return !isNaN(str) && !isNaN(parseInt(str))
}

export function isInRange(value, min, max) {
    return value >= min && value <= max;
}