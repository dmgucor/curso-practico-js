function sortArray(list) {
  list.sort((a, b) => a - b);
  return list;
}

function calculateMedian(list) {
  list = sortArray(list);
  const middleList = parseInt(list.length / 2);

  let median;

  if (list.length % 2 === 0) {
    const middleElementsSum = list[middleList] + list[middleList - 1];
    median = middleElementsSum / 2;
  } else {
    median = list[middleList];
  }

  return median;
}
