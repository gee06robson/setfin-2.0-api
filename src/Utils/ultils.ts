const HandleDate = (date: string) => {
  let toBreak = date.split("/").reverse().join("/")
      toBreak = new Date(toBreak).toISOString()
  return toBreak
} 

export { HandleDate }