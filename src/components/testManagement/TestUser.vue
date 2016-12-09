<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入用户ID名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="20">
          <el-button type="primary">新建用户测试</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="测试ID">
        </el-table-column>
        <el-table-column
          prop="testName"
          label="测试名称">
        </el-table-column>
        <el-table-column
          prop="types"
          label="全部类型">
        </el-table-column>
        <el-table-column
          prop="testUser"
          label="测试用户，流量">
        </el-table-column>
        <el-table-column
          prop="projectID"
          label="用户ID，名称，流量">
        </el-table-column>
        <el-table-column
          prop="create"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="lastUpdate"
          label="最后更新">
        </el-table-column>
        <el-table-column
          prop="status"
          label="全部状态">
        </el-table-column>

        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import tableData from '../../mock/testProject.js';
  export default {
    data(){
      return {
        input: '',
        tableData
      }

    },
    methods: {
      handleClick: function(){
        alert('click');
      }
    }
  }
</script>

<style media="screen">

</style>
