export default (): boolean => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight
  if (scrollTop + clientHeight + 200 >= scrollHeight)// 还未到底部就先开始请求
    return true
  return false
}
