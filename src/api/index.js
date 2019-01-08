import FetchUtil from '../utils/fetch'
const fetch = new FetchUtil()
export const getCaptchas = ()=>fetch.init().setUrl('/v1/captchas').setHeader({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}).dofetch()