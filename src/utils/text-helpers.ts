export function isNullOrWhitespace(input) {
    if (typeof input === 'undefined' || input == null || input === undefined) return true;
    return input.toString().replace(/\s/g, '').length < 1;
}