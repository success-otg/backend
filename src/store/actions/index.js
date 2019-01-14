import {getCode, getAdminInfo} from "../../api"

export default {
  async getAdminData({commit}){
    try {
      const res = await getAdminInfo()
      if (res.status === 1){
        commit('saveAdminData', res.adminInfo)
      }else {
        throw new Error(res)
      }
    }catch (e) {
      console.log('您尚未登录或者session失效')
    }
  },
  async forFreshCaptcha({commit}){
    const res = await getCode()
    if (res.status === 1){
      commit('freshCaptcha', res.code)
    }
  }
}