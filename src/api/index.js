import FetchUtil from '../utils/fetch'
const fetch = new FetchUtil()
//获取数字验证码
export const getCaptchas = ()=>fetch.init().setUrl('/v1/captchas').setHeader({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}).dofetch()

//登录接口
export const login = (data) => fetch.init().setMethod('POST').setUrl('/admin/login').setHeader({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}).setBody(data).dofetch()

//获取数字验证码
export const getCode = ()=>fetch.init().setUrl('/v1/captchas').dofetch()

//获取管理员信息
export const getAdminInfo = ()=>fetch.init().setUrl('/admin/info').dofetch()

//登出
export const signout = ()=>fetch.init().setUrl('/admin/signout').dofetch()

//获取用户列表
export const getUserList = (data)=>fetch.init().setUrl('/v1/users/list').setMethod('POST').setBody(data).dofetch()

//获取用户数量
export const getUserCount = ()=>fetch.init().setUrl('/v1/users/count').dofetch()