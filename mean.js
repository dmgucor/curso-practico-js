function calculateArithmeticMean(list) {
  /* let sumList = 0;
   for (let i = 0; i < list.length; i++) {
    sumList += list[i];
  } */
  const sumList = list.reduce(function (accumulateValue = 0, newElement) {
    return accumulateValue + newElement;
  });
  const meanList = sumList / list.length;

  return meanList;
}
