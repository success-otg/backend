import FetchUtil from '../utils/fetch'
const fetch = new FetchUtil()
export const getCaptchas = ()=>fetch.init().setUrl('/v1/captchas').setHeader({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}).dofetch()

export const login = (data) => fetch.init().setMethod('POST').setUrl('/admin/login').setHeader({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}).setBody(data).dofetch()

export const getCode = ()=>fetch.init().setUrl('/v1/captchas').dofetch()

export const getAdminInfo = ()=>fetch.init().setUrl('/admin/info').dofetch()

export const signout = ()=>fetch.init().setUrl('/admin/signout').dofetch()