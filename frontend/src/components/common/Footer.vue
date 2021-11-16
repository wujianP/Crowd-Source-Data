<template>
  <div class="footer">
    <div class="copyright">
      Copyright
<!--      <a-icon type="copyright"/>-->
      <i class="el-icon-connection"></i>
      <span v-html="copyright"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['copyright']
}
</script>

<style Lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 24px 0;
  text-align: center;
  background-color: #f0f2f5;

  .copyright {
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
  }
  .copyright > i {
    font-size: .8rem !important;
  }

}
</style>
