import axios from 'axios'
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
      'Host': '127.0.0.1:1337',
      'Connection': 'keep-alive',
    },
    data,
  }

  const res = await axios(config)
  return res.data
}
