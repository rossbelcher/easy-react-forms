export function pad(n: string | number, width: number, z: string) {
  z = z || '0';
  n = String(n);
  
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function capitalizeFirst(s: string) {
  if (typeof s !== 'string') return null;

  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function findArrayIndex (array, predicateFunction) {
  const length = array == null ? 0 : array.length;

  if (!length) {
      return -1;
  }

  let index = -1;

  for (var i = 0; i < length; ++i) {
      if (predicateFunction(array[i])) {
          index = i;
          break;
      }
  }

  return index;
}
