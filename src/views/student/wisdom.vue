<template>
  <div class="app-container">
    <div class="btn-container">
      <el-button
        type="primary"
        size="small"
        @click="dialogFormVisible = true"
      >添加学科</el-button>
      <el-button type="primary" size="small">批量导入</el-button>
      <el-button type="primary" size="small">上传附件</el-button>
    </div>
    <div class="table-container">
      <el-table :data="tableData" border show-summary style="width: 100%">
        <el-table-column type="index" width="80" />
        <el-table-column prop="name" label="学科" />
        <el-table-column prop="grade" label="分数" />
        <el-table-column prop="credit" label="学分" />
        <el-table-column prop="weighting" label="加权学分" />
      </el-table>
    </div>

    <el-dialog
      title="添加学科"
      :visible.sync="dialogFormVisible"
      :width="dialogWidth"
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="学科名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="学科分数">
          <el-input v-model.number="form.grade" type="number" />
        </el-form-item>
        <el-form-item label="学科学分">
          <el-input v-model.number="form.credit" type="number" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >确 定</el-button>
        <el-button
          type="success"
          @click="dialogFormVisible = false"
        >提交并继续</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '语文',
          grade: '80',
          credit: '3',
          weighting: '10'
        },
        {
          name: '语文',
          grade: '80',
          credit: '3',
          weighting: '10'
        },
        {
          name: '语文',
          grade: '80',
          credit: '3',
          weighting: '10'
        },
        {
          name: '语文',
          grade: '80',
          credit: '3',
          weighting: '10'
        },
        {
          name: '语文',
          grade: '80',
          credit: '3',
          weighting: '10'
        }
      ],
      screenWidth: null,
      dialogFormVisible: false,
      form: {
        name: '',
        grade: 0,
        credit: 0
      }
    }
  },
  computed: {
    dialogWidth() {
      return this.screenWidth > 760 ? '50%' : '100%'
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}

.table-container {
  margin-top: 10px;
}
</style>
