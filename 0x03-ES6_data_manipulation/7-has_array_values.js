export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new Error('Invalid input type');
  }
  return array.every(value => set.has(value));
}

