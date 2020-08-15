import findSecondMax from "./array-function"


test('find second largest number->',()=>{
  expect(findSecondMax([])).toBe(null)
  expect(findSecondMax([1])).toBe(1)
  expect(findSecondMax([1,2,3])).toBe(2)
  expect(findSecondMax([1,1])).toBe(1)
  expect(findSecondMax([1,2,3,4,5,6])).toBe(5)
  expect(findSecondMax([1,5,3,2,5,10])).toBe(5)
  expect(findSecondMax([100,5,3,2,99])).toBe(99)
  expect(findSecondMax([35,5,3,2,5,100])).toBe(35)
  expect(findSecondMax([1,5,101,2,5,10])).toBe(10)
  expect(findSecondMax([10,10,9])).toBe(9)
})













