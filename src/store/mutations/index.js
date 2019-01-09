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
  }
}