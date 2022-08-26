export const funcAdd = (arrCreated, arrCurr) => {
  // return arrCurr.push(arrCreated)

  let output = arrCurr

  const result = output.push(arrCreated)
  arrCreated = {}

  return result
}