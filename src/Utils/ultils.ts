const HandleDate = (date: string) => {
  let toBreak = date.split("/").reverse().join("/")
      toBreak = new Date(toBreak).toISOString()
  console.log(new Date(), "data")
  return toBreak
} 

export { HandleDate }