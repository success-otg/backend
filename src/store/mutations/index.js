import Storage from '../../utils/storage'
let localStorage = new Storage()
export default {
  saveAdminInfo(state, adminInfo){
    state.adminInfo = adminInfo
  },
  changeCollapseStatus(state){
    state.collapsed = !state.collapsed
  },
  isLoged(state){
    state.isLogin = !state.isLogin
  },
  freshCaptcha(state, imageUrl){
    state.imageUrl = imageUrl
  },
  doTiy(state){
    localStorage.setAge(600).set('a','abc')
    state.tiy = localStorage.get('a')
  }
}