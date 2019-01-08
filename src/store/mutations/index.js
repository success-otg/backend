export default {
  saveAdminInfo(state, adminInfo){
    state.adminInfo = adminInfo
  },
  changeCollapseStatus(state){
    state.collapsed = !state.collapsed
  },
}