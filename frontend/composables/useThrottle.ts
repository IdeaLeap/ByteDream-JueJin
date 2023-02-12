export default (fn?: () => any, wait = 750) => {
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
