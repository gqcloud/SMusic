import qqRequest from '..'

export const test = () => {
  return qqRequest.request({
    method: 'get',
    url: `hotlist?type=bili`
  })
}
