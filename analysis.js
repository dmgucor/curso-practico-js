let salariesList;

let sortedSalariesList;

let debtCapacityList;

//helpers
function calculateArithmeticMean(list) {
  const sumList = list.reduce(function (accumulateValue = 0, newElement) {
    return accumulateValue + newElement;
  });
  const meanList = sumList / list.length;

  return Math.round(meanList * 0.35 * 100 + Number.EPSILON) / 100;
}

function sortSalaries(list) {
  salariesList = list.map((person) => {
    return person.salary;
  });

  sortedSalariesList = sortArrayDesc(salariesList);
}

function sortArrayDesc(array) {
  return array.sort((a, b) => {
    return b - a;
  });
}

function getDebtCapacity(salary, additionalIncome, expenses) {
  const totalIncome = salary + additionalIncome;
  const netIncome = totalIncome - expenses;

  return Math.round(netIncome * 0.35 * 100 + Number.EPSILON) / 100;
}

//General mode
function calculateMode(list) {
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
  return Math.round(mode * 0.35 * 100 + Number.EPSILON) / 100;
}

//General median
function calculateMedian(list) {
  const listMiddlePos = parseInt(list.length / 2);
  if (list.length % 2 === 0) {
    const person1 = list[listMiddlePos];
    const person2 = list[listMiddlePos - 1];

    const median = calculateArithmeticMean([person1, person2]);

    return Math.round(median * 0.35 * 100 + Number.EPSILON) / 100;
  } else {
    return Math.round(list[listMiddlePos] * 0.35 * 100 + Number.EPSILON) / 100;
  }
}

//Top 10% median
function calculateTo10PercentMedian() {
  const sliceStart = Math.floor(sortedSalariesList.length * 0.9);
  const top10PercentArray = sortedSalariesList.slice(sliceStart);

  const medianTop10Col = calculateMedian(top10PercentArray);
}

function getDebtCapacityList(list) {
  const debtCapacity = list.map((person) => {
    return getDebtCapacity(
      person.salary,
      person.additionalIncome,
      person.expenses
    );
  });

  debtCapacityList = debtCapacity;
}

function getSalaryStats(list, userSalaryValue) {
  const headerGroupStats = document.getElementById("salaryStatsHeader");
  headerGroupStats.innerText = "Salary statistics";

  const medianHeader = document.getElementById("medianHeader");
  medianHeader.innerText = "Median";
  const medianResult = document.getElementById("groupMedianResult");
  medianResult.innerText = `$${calculateMedian(list)}`;

  const meanHeader = document.getElementById("meanHeader");
  meanHeader.innerText = "Mean";
  const meanResult = document.getElementById("groupMeanResult");
  meanResult.innerText = `$${calculateArithmeticMean(list)}`;

  const modeHeader = document.getElementById("modeHeader");
  modeHeader.innerText = "Mode";
  const modeResult = document.getElementById("groupModeResult");
  modeResult.innerText = `$${calculateMode(list)}`;

  const userSalary = document.getElementById("userSalary");
  userSalary.innerText = `You: $${userSalaryValue}`;
}

function getdebtCapacityStats(list, userDebtCapacityValue) {
  const headerGroupStats = document.getElementById("dcStatsHeader");
  headerGroupStats.innerText = "Debt capacity statistics";

  const medianHeader = document.getElementById("dcMedianHeader");
  medianHeader.innerText = "Median";
  const medianResult = document.getElementById("dcMedianResult");
  medianResult.innerText = `$${calculateMedian(list)}`;

  const meanHeader = document.getElementById("dcMeanHeader");
  meanHeader.innerText = "Mean";
  const meanResult = document.getElementById("dcMeanResult");
  meanResult.innerText = `$${calculateArithmeticMean(list)}`;

  const modeHeader = document.getElementById("dcModeHeader");
  modeHeader.innerText = "Mode";
  const modeResult = document.getElementById("dcModeResult");
  modeResult.innerText = `$${calculateMode(list)}`;

  const userDebtCapacity = document.getElementById("userDebtCapacity");
  userDebtCapacity.innerText = `You: $${userDebtCapacityValue}`;
}

function getTop10(userInputData, fullArray) {
  const top10Array = fullArray.slice(0, 10);

  let userPlaceInList = top10Array.includes(userInputData)
    ? parseInt(top10Array.indexOf(userInputData))
    : parseInt(fullArray.indexOf(userInputData));

  let list = "<ol>";
  if (userPlaceInList < top10Array.length) {
    for (let i = 0; i < top10Array.length; i++) {
      if (userPlaceInList == i) {
        list += `<li>$${top10Array[i]} you're here</li>`;
      } else {
        list += `<li>$${top10Array[i]}</li>`;
      }
    }
    list += "</ol>";
  } else {
    top10Array.map((value) => {
      list += `<li>$${value}</li>`;
    });
    list += "</ol>";
    list += `${userPlaceInList + 1}. $${userInputData} you're here `;
  }

  return list;
}

function getTop10Salaries(userSalary, sortedArray) {
  const list = getTop10(userSalary, sortedArray);

  const headerTopSalaries = "Top 10 salaries";
  document.getElementById("top10SalariesHeader").innerText = headerTopSalaries;

  const listContainer = document.getElementById("top10SalariesList");
  listContainer.innerHTML = list;
}

function getTop10DebtCapacity(userDebtCapacity, array) {
  const list = getTop10(userDebtCapacity, array);

  const headerTopDebtCapacity = "Top 10 debt capacities";
  document.getElementById("top10DebtCapcityHeader").innerText =
    headerTopDebtCapacity;

  const listContainer = document.getElementById("top10DebtCapacityList");
  listContainer.innerHTML = list;
}

//Handle button calculate action
function handleCalculateButtonClick() {
  const userSalary = parseInt(document.getElementById("salaryInput").value);
  const useradditionalIncome = parseInt(
    document.getElementById("addIncomeInput").value
  );
  const userExpenses = parseInt(document.getElementById("expensesInput").value);

  const userData = {
    salary: userSalary,
    additionalIncome: useradditionalIncome,
    expenses: userExpenses,
  };

  colombia.push(userData);
  sortSalaries(colombia);

  //Top 10 salaries
  getTop10Salaries(userSalary, sortedSalariesList);

  //Top 10 debt capacity
  const userDebtCapacity = getDebtCapacity(
    userSalary,
    useradditionalIncome,
    userExpenses
  );
  getDebtCapacityList(colombia);
  const sortedDebtCapacityList = sortArrayDesc(debtCapacityList);
  getTop10DebtCapacity(userDebtCapacity, sortedDebtCapacityList);

  //General stats
  getSalaryStats(sortedSalariesList, userSalary);

  getdebtCapacityStats(sortedDebtCapacityList, userDebtCapacity);

  colombia.pop(); //get back to initial data
}

//Handle  button clear action
function clearResults() {
  document.getElementById("top10SalariesHeader").innerText = "";
  document.getElementById("top10SalariesList").innerText = "";
  document.getElementById("top10DebtCapcityHeader").innerText = "";
  document.getElementById("top10DebtCapacityList").innerText = "";
  document.getElementById("salaryStatsHeader").innerText = "";
  document.getElementById("medianHeader").innerText = "";
  document.getElementById("groupMedianResult").innerText = "";
  document.getElementById("meanHeader").innerText = "";
  document.getElementById("groupMeanResult").innerText = "";
  document.getElementById("modeHeader").innerText = "";
  document.getElementById("groupModeResult").innerText = "";
  document.getElementById("userSalary").innerText = "";
  document.getElementById("dcStatsHeader").innerText = "";
  document.getElementById("dcMedianHeader").innerText = "";
  document.getElementById("dcMedianResult").innerText = "";
  document.getElementById("dcMeanHeader").innerText = "";
  document.getElementById("dcMeanResult").innerText = "";
  document.getElementById("dcModeHeader").innerText = "";
  document.getElementById("dcModeResult").innerText = "";
  document.getElementById("userDebtCapacity").innerText = "";
}
