export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  return new Map(
    Array.from(map.entries()).map(([name, quantity]) =>
      quantity === 1 ? [name, 100] : [name, quantity]
    )
  );
}

