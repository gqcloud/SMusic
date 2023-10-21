import qqRequest from '..'

export const test = (limit: number) => {
  return qqRequest.request({
    method: 'get',
    url: `/hot/topic?limit=${limit}&offset=30`
  })
}
