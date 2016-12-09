<template>
  <div id="testManagement">
    <el-tabs :active-name="activeName">
      <el-tab-pane label="方案测试" name="first">
        <test-project></test-project>
      </el-tab-pane>
      <el-tab-pane label="用户测试" name="second">
        <test-user></test-user>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import Nothing from '../common/Nothing.vue';
  import TestProject from './TestProject.vue';
  import TestUser from './TestUser.vue'
  export default{
    data(){
      return {
          activeName: 'first'
      }
    },
    components:{
      Nothing,
      TestProject,
      TestUser
    }
  }
</script>

<style>
  .el-tabs{
    width: 100%;
  }
</style>
