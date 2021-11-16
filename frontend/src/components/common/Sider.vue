<template>
  <div>
    <!--        顶部标题及Logo区-->
    <div id="sider_title_logo_zone">
<!--      logo-->
      <img src="../../assets/imgs/new_logo.png" alt="" class="sider_logo" @click="gotoHompage">
<!--      系统名-->
      <span class="sider_title" v-if="!isCollapsed">众包数据标注平台</span>
<!--      收起、关闭菜单图标-->
      <div id="toggle_icon">
        <i :class="isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapse"></i>
      </div>
    </div>
    <div>
      <!--        下方菜单区-->
      <el-menu
        :collapse="isCollapsed"
        :default-active="activePath"
        :collapse-transition="false"
        background-color="#393e46"
        text-color="#fff"
        router
        active-text-color="#41b883"
        unique-opened>
        <!--          一级菜单-->
        <el-submenu v-for="item in menuList"
                    :index="item.path"
                    :disabled="JSON.parse(item.disable)"
                    :key="item.id">
          <!--            一级菜单的模板区-->
          <template v-slot:title>
            <!--              菜单图标-->
            <i :class="item.icon"></i>
            <!--              文本（菜单名）-->
            <span>{{item.name}}</span>
          </template>
          <!--            二级菜单-->
          <el-menu-item :index="subItem.path"
                        @click="saveNavState(subItem.path)"
                        :disabled="JSON.parse(subItem.disable)"
                        v-for="subItem in item.children"
                        :key="subItem.id">
            <template v-slot:title>
              <i :class="subItem.icon"></i>
              <span>{{ subItem.name }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sider',
  data () {
    return {
      // 菜单折叠状态
      isCollapsed: false,
      // 菜单数据
      menuList: [],
      // 被激活的菜单路由
      activePath: ''
    }
  },
  // 创建时，先向后台申请菜单信息
  created () {
    this.getMeunList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    // 回到主页
    gotoHompage () {
      this.$router.push('/homepage')
    },
    // 获取所有的菜单
    async getMeunList () {
      // TODO: 改为后台的API
      // const { data: res } = await this.$http.get('http://127.0.0.1:9528/menu')
      const { data: res } = await this.$http.get('/mock/menu_list_success.json')
      if (res.meta.code !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
    },
    // 保存菜单的激活状态，以便实现路由跳转后选中菜单的高亮
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
    // 菜单展开、折叠切换
    toggleCollapse () {
      this.isCollapsed = !this.isCollapsed
      if (this.isCollapsed) {
        document.getElementById('toggle_icon').style.paddingLeft = '0px'
        document.getElementById('sider_title_logo_zone').style.width = '64px'
      } else {
        document.getElementById('toggle_icon').style.paddingLeft = '15px'
        document.getElementById('sider_title_logo_zone').style.width = '220px'
      }
      this.$emit('MenuCollapse', this.isCollapsed)
    }
  }
}
</script>

<style scoped>
/*解决左侧菜单对不齐*/
.el-menu{
  border-right: none;
}
/*侧栏顶部系统名及logo区*/
#sider_title_logo_zone {
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 0px;
  background-color: #41b883;
  position: sticky;
  top: 0;
  /*置于顶层*/
  z-index: 999;
}
/*侧栏顶部logo*/
.sider_logo {
  height: 33px;
  width: 33px;
  border-radius: 50%;
  margin-left: 10px;
  box-shadow: 0 0 2px #ffecec;
}
/*侧栏顶部系统名*/
.sider_title {
  margin-left: 10px;
  color: #FFFFFF;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  font-family: Microsoft YaHei;
  text-shadow: 0 0 2px #000000;
}
/*收起菜单图标*/
#toggle_icon {
  /*display: inline-block;*/
  padding-left: 15px;
  font-size: 20px;
  cursor: pointer;
}
</style>
