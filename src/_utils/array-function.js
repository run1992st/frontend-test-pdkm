export default function(testArray) {
  //Handle Base Case--------------
  if (!testArray) {
    return null;
  } else if (testArray.length === 1) {
    return testArray[0];
  }
  // ------------------------------

  let firstMax = null;
  let secondMax = null;

  for (let num of testArray) {
    if (!firstMax) {
      firstMax = num;
    } else if (!secondMax && num < firstMax) {
      secondMax = num;
    } else if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax && num !== firstMax) {
      secondMax = num;
    }
  }

  return secondMax ? secondMax : firstMax;
}
