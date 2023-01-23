interface IApiResponse<T> {
  code: number
  msg: string
  data: T
}
export function apiResponse<T>(
  data: T,
  code = 200,
  msg = 'ok',
): IApiResponse<T> {
  return {
    code,
    msg,
    data,
  }
}
