<template>
  <div class="app-container">
    <div class="btn-container">
      <el-button
        type="primary"
        size="small"
        @click="dialogFormVisible = true"
      >添加加分项</el-button>
      <el-button type="primary" size="small">删除</el-button>
    </div>
    <div class="table-container">
      <el-table :data="tableData" border show-summary style="width: 100%">
        <el-table-column type="selection" width="80" />
        <el-table-column type="index" width="80" label="索引" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="type" label="分类" />
        <el-table-column prop="grade" label="分数" />
        <el-table-column prop="prove" label="证明" />
      </el-table>
    </div>

    <el-dialog
      title="添加加分项"
      :visible.sync="dialogFormVisible"
      :width="dialogWidth"
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="分类">
          <el-input v-model="form.type" type="number" />
        </el-form-item>
        <el-form-item label="分数">
          <el-input v-model.number="form.grade" type="number" />
        </el-form-item>
        <el-form-item label="证明">
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="el-icon-plus" />
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              >
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in" />
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download" />
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete" />
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
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
          name: '全国服务外包大赛三等奖',
          grade: 0,
          type: '竞赛类',
          prove: '图片'
        },
        {
          name: '全国服务外包大赛三等奖',
          grade: 0,
          type: '竞赛类',
          prove: '图片'
        },
        {
          name: '全国服务外包大赛三等奖',
          grade: 0,
          type: '竞赛类',
          prove: '图片'
        },
        {
          name: '全国服务外包大赛三等奖',
          grade: 0,
          type: '竞赛类',
          prove: '图片'
        },
        {
          name: '全国服务外包大赛三等奖',
          grade: 0,
          type: '竞赛类',
          prove: '图片'
        }
      ],
      screenWidth: null,
      dialogFormVisible: false,
      form: {
        name: '全国服务外包大赛三等奖',
        grade: 0,
        type: '竞赛类',
        prove: '图片'
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
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
    },
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
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
