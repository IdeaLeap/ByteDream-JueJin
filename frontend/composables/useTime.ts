export function getChineseDate() {
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

export function useDayParts() {
  const state = ref('')
  const hours = useDateFormat(getChineseDate(), 'HH')
  const hour = parseInt(hours.value)
  if (hour >= 0 && hour <= 11)
    state.value = '早上好!'
  else if (hour > 11 && hour <= 14)
    state.value = '中午好!'
  else if (hour > 14 && hour <= 18)
    state.value = '下午好!'
  else if (hour > 18 && hour <= 24)
    state.value = '晚上好!'
  return state
}
