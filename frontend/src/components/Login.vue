<template>
  <div>
    <el-tag type="success" @click="login">这是登录页，点击进入主页</el-tag>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      message: '成功登录！'
    }
  },
  methods: {
    login () {
      this.$message.success(this.message)
      this.$router.push('/home')
    }
  }

}
</script>

<style scoped>

</style>
