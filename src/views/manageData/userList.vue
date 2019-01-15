<template>
  <div class="m-user">
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        property="date"
        label="日期"
        width="120">
      </el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        property="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getUserList, getUserCount} from "../../api"

  export default {
    name: "userList",
    data() {
      return {
        tableData: [],
        count: 0,
        limit: 10,
        offset: 0
      }
    },
    created() {
      this.initData()
    },
    methods: {
      async initData() {
        try {
          const res = await getUserCount()
          if (res.status ===1){
            this.count = res.count
          }else {
            throw new Error('获取用户数量失败')
          }
          this.getUsers()
        }catch (e) {
          this.$message({
            type: 'error',
            message: '获取用户数量失败'
          })
        }
      },
      async getUsers(){
        const res = await getUserList({limit: this.limit, offset: this.offset})
        if (res.status === 1){
          this.tableData = []
          res.users.forEach(item=>{
           let tableData = {}
           tableData.user_name = item.username
            tableData.create_time = item.register_time
            tableData.city = item.city
            this.tableData.push(tableData)
          })
          console.log(this.tableData)
        } else {
          this.$message({
            type: 'error',
            message: '获取用户列表数据失败'
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>