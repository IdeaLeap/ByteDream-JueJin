import axios from 'axios'

const removeAttributeWrapper = (data: Object): any => {
  if ('attributes' in data) {
    const _ = data.attributes as Object
    delete data.attributes

    return removeAttributeWrapper({ ...data, ..._ })
  }
  if ('data' in data) {
    const _ = data.data as Object
    if (Array.isArray(_)) {
      return data // 不去掉data字段
    }
    else {
      delete data.data
      return removeAttributeWrapper({ ...data, ..._ })
    }
  }
  return data
}

const removeStrapiWrapper = (data: any) => {
  if (Array.isArray(data)) {
    const _: any = data.map((item) => {
      return removeStrapiWrapper(removeAttributeWrapper(item))
    })
    return _
  }
  else if (Object.prototype.toString.call(data) === '[object Object]') {
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
  try {
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
  catch (err: any) {
    console.error('API请求错误')
    console.error('状态码', err.response.status)
    console.error('请求数据', err.config.data)
    console.error('错误说明', err.response.data)
  }
}

