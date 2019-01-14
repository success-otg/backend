import Storage from '../../utils/storage'
// const localStorage = new Storage()
export default {
  saveAdminData(state, adminInfo){
    state.adminInfo = adminInfo
  },
  changeCollapseStatus(state){
    state.collapsed = !state.collapsed
  },
  freshCaptcha(state, imageUrl){
    state.imageUrl = imageUrl
  }
}