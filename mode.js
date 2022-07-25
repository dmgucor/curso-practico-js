function calculateMode(list) {
  list = sortArray(list);

  let maxTimes = 0;
  let mode;
  for (let i = 0; i < list.length; i++) {
    let currentTimes = list.lastIndexOf(list[i]) - i + 1;

    if (currentTimes > maxTimes) {
      maxTimes = currentTimes;
      mode = list[i];
    }

    i = list.lastIndexOf(list[i]);
  }
  return mode;
}

function sortArray(list) {
  list.sort((a, b) => a - b);
  return list;
}
