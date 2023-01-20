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
      'Connection': 'keep-alive',
    },
    data,
  }

  const res = await axios(config)
  return res.data
}
