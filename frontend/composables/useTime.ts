function getChineseDate() {
  return new Date(
    new Date().getTime()
      + new Date().getTimezoneOffset() * 60 * 1000
      + 8 * 60 * 60 * 1000,
  )
}

// 返回num天前的日期
export function useTime(num: number) {
  const date = new Date(getChineseDate().getTime() - num * 24 * 60 * 60 * 1000)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}
