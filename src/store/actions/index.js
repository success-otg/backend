import {getCode} from "../../api"

export default {
  async getAdminDate({commit}){
    try {
      // const res =
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