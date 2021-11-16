<template>
  <el-container style="height: 100%">
    <!--      侧边栏-->
    <el-aside :width="isCollapsed ? '64px' : '220px'" class="sider_zone">
      <my-sider @MenuCollapse="toggleCollapse"></my-sider>
    </el-aside>
    <el-container>
      <el-header :height="'30px'" class="header_box">
        <my-header ref="header"></my-header>
      </el-header>
      <!--    页面主区域-->
      <el-main class="right_zone">
        <my-main></my-main>
      </el-main>
      <!--    底部区域-->
      <el-footer>
        <my-footer :copyright="copyright" style="padding: .29rem 0" class="copyright"/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import mySider from './Sider'
import myHeader from './Header'
import myFooter from './Footer'
import myMain from './MainPage'

export default {
  name: 'GlobalLayout',
  components: {
    mySider,
    myHeader,
    myFooter,
    myMain
  },
  data () {
    return {
      // 菜单是否处于折叠状态
      isCollapsed: false
    }
  },
  methods: {
    // 点击按钮切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapsed = !this.isCollapsed // 切换折叠状态
    }
  },
  computed: {
    copyright () {
      return `${new Date().getFullYear()} <a href="https://github.com/wujianP/Crowd-sourcing-Data-Annotation" target="_blank" style="text-decoration: none; color: #42b983">众包数据标注平台</a>`
    }
  }
}
</script>

<style Lang="less" scoped>
.sider_zone{
  overflow-x:hidden; overflow-y:hidden;
}

.home-container {
  height: 100%;
}

.el-header {
  border-radius: 2px;
  background-color: #ffffff !important;
  /*display: flex;*/
  /*justify-content: flex-end;*/
  padding-left: 0px;
  /*align-items: center;*/
  font-size: 20px;
}

.sider_header {
  width: 105%;
  height: 8%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: #41b883;
  position: sticky;
  top: 0;
  /*置于顶层*/
  z-index: 999;
}

.sider_header_logo {
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 0 2px #ffecec;
}

.sider_header_title {
  margin-left: 10px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  font-family: Microsoft YaHei;
  text-shadow: 0 0 2px #000000;
}

.toggle_icon{
  /*display: inline-block;*/
  padding-left: 15px;
  font-size: 20px;
  cursor: pointer;
}

.el-aside {
  background-color: #393e46;
}

.el-main {
  background-color: #ffffff;
}

.copyright {
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
}
i {
  font-size: .8rem !important;
}

.el-footer{
  padding: 0;
  margin: 0;
  /*padding-right: 0;*/
}

/*头部区域盒子边框及阴影*/
.header_box{
  position: sticky;
  top: 0;
  z-index: 99;
}
</style>
