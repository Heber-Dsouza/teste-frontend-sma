export const funcRemove = (arrDeleted, arrCurr) => {

  let output = arrCurr

  for (let i = 0; i < arrDeleted.length; i++) {

    const result = output.filter((user) => {
      return user.id !== arrDeleted[i]
    })

    output = [...result]
  }

  return output
}