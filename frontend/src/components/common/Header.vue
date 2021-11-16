<template>
  <div class="header">
<!--    用户中心下拉菜单-->
   <el-dropdown>
      <span class="el-dropdown-link" style="height: 100%; font-size: 15px">
        {{ userInfo.realName }},您好!<el-icon><user-filled /></el-icon>
      </span>
     <template v-slot:dropdown>
       <el-dropdown-menu>
         <!--        用户姓名-->
         <el-dropdown-item icon="el-icon-s-custom">
           <span @click="userInfoVisible=true">个人信息</span>
         </el-dropdown-item>
         <!--        消息通知-->
         <el-dropdown-item icon="el-icon-phone">
           <span @click="gotoMessagePage">消息通知</span>
           <a-badge :count="unreadMessageNum" style="font-size: 10px"/>
         </el-dropdown-item>
         <!--        退出登录-->
         <el-dropdown-item icon="el-icon-caret-left">
           <span @click="logout">退出登录</span>
         </el-dropdown-item>
       </el-dropdown-menu>
     </template>
    </el-dropdown>
<!--    个人信息对话框-->
    <el-dialog
      title="用户信息"
      v-model:visible.sync="userInfoVisible"
      width="40%"
      center>
      <el-card style="font-size: 15px">
<!--        用户姓名-->
        <el-row>
<!--          用户姓名-->
          <el-col :span="6">用户姓名：</el-col>
          <el-col :span="16">
            <a-tag color="blue" style="font-size: 15px">
              {{userInfo.realName}}
            </a-tag>
          </el-col>
        </el-row>
        <div class="divider"></div>
<!--          账号-->
        <el-row>
          <el-col :span="6">账号名称：</el-col>
          <el-col :span="16">
            <a-tag color="blue" style="font-size: 15px">
              {{userInfo.username}}
            </a-tag>
          </el-col>
        </el-row>
        <div class="divider"></div>
<!--          角色-->
        <el-row>
          <el-col :span="6">用户角色：</el-col>
          <el-col :span="16">
            <el-row v-for="item in userInfo.roles"
                    :key="item">
              <a-tag color="cyan" style="font-size: 15px">
                {{item}}
              </a-tag>
            </el-row>
          </el-col>
        </el-row>
        <div class="divider"></div>
<!--          邮箱-->
        <el-row>
          <el-col :span="6">用户邮箱：</el-col>
          <el-col :span="16">
              <a-tag color="orange" style="font-size: 15px">
                {{userInfo.mail}}
              </a-tag>
          </el-col>
        </el-row>
        <div class="divider"></div>
<!--          电话-->
        <el-row>
          <el-col :span="6">联系电话：</el-col>
          <el-col :span="16">
              <a-tag color="red" style="font-size: 15px">
                {{userInfo.tel}}
              </a-tag>
          </el-col>
        </el-row>
        <div class="divider"></div>
      </el-card>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="userInfoVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['isCollapsed'],
  mounted () {
    // this.getUnreadMessageNum()
    // this.userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
  },
  data () {
    return {
      // 用户信息对话框可见性
      userInfoVisible: false,
      // 未读消息个数
      unreadMessageNum: Number,
      // 用户信息
      userInfo: {
        tel: '15378142100',
        mail: 'xx@yy.com',
        realName: '用户1',
        userName: '用户名',
        roles: '角色'
      }
    }
  },
  methods: {
    // 退出登录
    logout () {
      // 清空sessionStorage
      window.sessionStorage.clear()
      // 强制导航到登录页面
      this.$router.push('/login')
    },
    // 获得当前未读消息数
    async getUnreadMessageNum () {
      const { data: res } = await this.$http.get('http://127.0.0.1:9528/message')
      if (res.meta.code === 200) {
        this.unreadMessageNum = res.data
      } else {
        this.$message.error(res.meta.message)
      }
    },
    // 前往查看通知消息页面
    gotoMessagePage () {
      this.$router.push('/message')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
.divider{
  height: 8px;
}
</style>
