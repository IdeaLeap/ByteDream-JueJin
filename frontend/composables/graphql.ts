import axios from 'axios'

const removeAttributeWrapper = (data: Object) => {
  if ('attributes' in data) {
    const _ = data.attributes as Object
    delete data.attributes
    return { ...data, ..._ }
  }
  if ('data' in data) {
    const _ = data.data as Object
    if (Array.isArray(_)) {
      return data // 不去掉data字段
    }
    else {
      delete data.data
      return { ...data, ..._ }
    }
  }
  return data
}

const removeStrapiWrapper = (data: any) => {
  if (Array.isArray(data)) {
    const _: any = data.map((item) => {
      // 如果含有attribute字段则去除
      return removeStrapiWrapper(removeAttributeWrapper(item))
    })
    return _
  }
  else if (typeof data === 'object') {
    const _ = removeAttributeWrapper(data)
    Object.entries(_).forEach(([k, v]) => {
      _[k as keyof Object] = removeStrapiWrapper(v)
    })
    return _
  }
  else {
    return data
  }
}

export async function useGraphql(query: any) {
  const runtimeConfig = useRuntimeConfig()
  const data = JSON.stringify({
    query,
  })
  const config = {
    method: 'post',
    url: runtimeConfig.public.graphql_url,
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Connection': 'keep-alive',
    },
    data,
  }

  const res = await axios(config)

  return removeStrapiWrapper(res.data)
}

