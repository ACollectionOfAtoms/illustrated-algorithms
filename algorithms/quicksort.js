function randomIndex(list) {
  return Math.round(Math.random() * (list.length - 1));
}

export default function quicksort(list) {
  if (list.length < 2) {
    return list;
  }
  const pivot = list.splice(randomIndex(list), 1);
  const less = list.filter(i => i <= pivot);
  const greater = list.filter(i => i > pivot);

  return [
    ...quicksort(less),
    ...pivot,
    ...quicksort(greater)
  ];
}
