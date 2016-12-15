<template>
  <div class="testProject">
    <div class="function">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入方案ID名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="20">
          <el-button type="primary" @click.native="onNewClick">新建方案测试</el-button>
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
          label="测试用户，流量"
          width=140>
        </el-table-column>
        <el-table-column
          prop="projectID"
          label="方案ID，名称，流量"
          width=180>
        </el-table-column>
        <el-table-column
          prop="create"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="lastUpdate"
          label="最后更新"
          width=150>
        </el-table-column>
        <el-table-column
          prop="status"
          label="全部状态">
        </el-table-column>

        <el-table-column
          :context="_self"
          inline-template
          label="操作"
          width=120>
          <span>
            <el-button @click="onEditClick($index)" type="text" size="small">编辑</el-button>
            <el-button @click="onDelClick($index)" type="text" size="small">删除</el-button>
          </span>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="dialogTitle" v-model="isDialogShow" size="small">
      <el-form :model="form">
       <el-form-item label="活动名称" :label-width="formLabelWidth">
         <el-input v-model="form.name" auto-complete="off"></el-input>
       </el-form-item>
       <el-form-item label="活动区域" :label-width="formLabelWidth">
         <el-select v-model="form.region" placeholder="请选择活动区域">
           <el-option label="区域一" value="shanghai"></el-option>
           <el-option label="区域二" value="beijing"></el-option>
         </el-select>
       </el-form-item>
     </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="isDialogShow = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import tableData from '../../mock/testProject.js';
  export default {
    data(){
      return {
        input: '',
        dialogTitle: '',
        isDialogShow: false,
        tableData: tableData,
        form: {
         name: '',
         region: '',
         date1: '',
         date2: '',
         delivery: false,
         type: [],
         resource: '',
         desc: ''
       },
       formLabelWidth: '120px'

      }

    },
    methods: {
      // 表格内编辑按钮点击实现
      onEditClick: function(index){
        this.dialogTitle = "编辑方案";
        this.isDialogShow = true;
      },

      // 表格内删除按钮点击实现
      onDelClick: function(index){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 此处应为异步请求服务器进行数据库的操作
          this.tableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      onNewClick: function(){
        this.dialogTitle = "新建方案";
        this.isDialogShow = true;
      }
    }
  }
</script>

<style media="screen">
  .function{
    margin-bottom:10px;
  }
  .function button{
    float:right;
  }
</style>
