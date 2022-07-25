//Code for median
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

//Code for mean
function calculateArithmeticMean(list) {
  /* let sumList = 0;
     for (let i = 0; i < list.length; i++) {
      sumList += list[i];
    } */
  const sumList = list.reduce(function (accumulateValue = 0, newElement) {
    return parseInt(accumulateValue) + parseInt(newElement);
  });
  const meanList = sumList / list.length;

  return meanList;
}

//Code for mode
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

//To be placed on main file
function splitInputSet(list) {
  let array = list.split(",");
  array = array.map((element) => element.trim());
  return array;
}

function containsLetters(input) {
  return /[a-z]/i.test(input);
}

function onClickCalculateStats() {
  const array = document.getElementById("setOfNums");
  const valueArray = array.value;

  if (containsLetters(valueArray)) {
    const invalidSet = document.getElementById("errorInput");
    invalidSet.innerText = "Only numeric values allowed";
  } else {
    let inputArray = splitInputSet(valueArray);

    const invalidSet = document.getElementById("errorInput");
    invalidSet.innerText = "";

    const medianResult = document.getElementById("medianResult");
    medianResult.innerText = calculateMedian(inputArray);

    const meanResult = document.getElementById("meanResult");
    meanResult.innerText = calculateArithmeticMean(inputArray);

    const modeResult = document.getElementById("modeResult");
    modeResult.innerText = calculateMode(inputArray);
  }
}
