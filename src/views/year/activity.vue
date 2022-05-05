<template>
  <div class="app-container">
    <el-card class="efs-container">
      <el-form-schema
        v-model="model"
        :schema="schema"
        :inline="true"
        :is-search-form="true"
        :use-enter-search="false"
        label-width="60px"
        component-width="220px"
        @submit="submit"
        @reset="reset"
      />
    </el-card>
    <el-card style="margin-top: 20px">
      <div class="btn-container">
        <el-button
          type="primary"
          size="small"
          @click="dialogFormVisible = true"
        >添加加分项</el-button>
        <el-button type="primary" size="small">删除</el-button>
      </div>
      <div class="table-container">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" />
          <el-table-column type="index" width="80" label="索引" />
          <el-table-column prop="name" label="名称" width="200px" />
          <el-table-column prop="type" label="分类" />
          <el-table-column prop="prize" label="奖项" width="400px">
            <template slot-scope="scope">
              <el-tag
                v-for="(item, i) in scope.row.prize"
                :key="i"
                :type="colors[i % 5]"
                style="margin: 5px"
              >{{ item }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="organizer" label="活动方" />
          <el-table-column label="操作" width="200px">
            <el-button type="primary" size="small">删除</el-button>
            <el-button type="success" size="small">编辑</el-button>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          style="margin-top: 10px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>

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
          <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item label="活动方">
          <el-input v-model="form.organizer" />
        </el-form-item>
        <el-form-item label="奖项">
          <el-input v-model="form.prize" />
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
          name: '全国服务外包大赛',
          type: '竞赛类',
          prize: ['一等奖', '二等奖', '三等奖'],
          organizer: '团委'
        },
        {
          name: '全国服务外包大赛',
          type: '竞赛类',
          prize: ['一等奖', '二等奖', '三等奖'],
          organizer: '团委'
        },
        {
          name: '全国服务外包大赛',
          type: '竞赛类',
          prize: ['一等奖', '二等奖', '三等奖'],
          organizer: '团委'
        },
        {
          name: '全国服务外包大赛',
          type: '竞赛类',
          prize: ['一等奖', '二等奖', '三等奖'],
          organizer: '团委'
        },
        {
          name: '全国服务外包大赛',
          type: '竞赛类',
          prize: ['一等奖', '二等奖', '三等奖'],
          organizer: '团委'
        },
        {
          name: '全国服务外包大赛',
          type: '竞赛类',
          prize: ['一等奖', '二等奖', '三等奖'],
          organizer: '团委'
        }
      ],
      currentPage: 1,
      screenWidth: null,
      dialogFormVisible: false,
      colors: ['primary', 'success', 'danger', 'info', 'warning'],
      form: {
        name: '',
        type: '',
        prove: '',
        organizer: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      model: {},
      schema: {
        name: {
          tag: 'el-input',
          label: '名称'
        },
        type: {
          tag: 'el-select',
          label: '分类'
        },
        organizer: {
          tag: 'el-select',
          label: '活动方'
        }
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
    submit() {},
    reset() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
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
