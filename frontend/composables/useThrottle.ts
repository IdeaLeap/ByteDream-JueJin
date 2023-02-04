export default (fn?: () => any, wait = 1000) => {
  let timer: NodeJS.Timeout | null = null
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn && fn()
      }, wait)
    }
  }
}
