<template>
  <div class="app-container">
    <el-card class="efs-container">
      <el-form-schema
        v-model="model"
        :schema="schema"
        :inline="true"
        :is-search-form="true"
        :use-enter-search="false"
        label-width="80px"
        component-width="180px"
        @submit="submit"
        @reset="reset"
      />
    </el-card>
    <el-card style="margin-top: 20px">
      <div class="table-container">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            type="index"
            width="80"
            label="索引"
            min-width="150px"
          />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="year" label="学院" min-width="180px" />
          <el-table-column prop="major" label="专业" min-width="100px" />
          <el-table-column prop="class" label="班级" min-width="100px" />
          <el-table-column prop="wisdom" label="智育分" min-width="100px" />
          <el-table-column prop="morals" label="德育分" min-width="100px" />
          <el-table-column prop="sports" label="体育分" min-width="100px" />
          <el-table-column prop="labour" label="劳育分" min-width="100px" />
          <el-table-column prop="all" label="总分" min-width="100px" />
          <el-table-column prop="state" label="状态">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.state == 1 ? 'success' : 'danger'"
              >{{
                scope.row.state == 1
                  ? '已审核'
                  : scope.row.state == 2
                    ? '未审核'
                    : '未通过'
              }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="180px">
            <el-button type="primary" size="small">详情</el-button>
            <el-button
              type="danger"
              size="small"
              @click="dialogFormVisible = true"
            >审核</el-button>
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
      title="审批"
      :visible.sync="dialogFormVisible"
      :width="dialogWidth"
    >
      <div>
        <el-steps :active="active" finish-status="success">
          <el-step title="智育分" />
          <el-step title="德育分" />
          <el-step title="体育分" />
          <el-step title="劳育分" />
        </el-steps>
      </div>
      <div class="container">
        <div v-if="active == 0">
          <div style="margin-bottom: 10px">附件：点击下载</div>
          <el-table
            :data="wisdomTableData"
            border
            show-summary
            style="width: 100%"
            @selection-change="handleSelectionChange1"
          >
            <el-table-column type="selection" width="80" />
            <el-table-column type="index" width="80" />
            <el-table-column prop="name" label="学科" />
            <el-table-column prop="grade" label="分数" />
            <el-table-column prop="credit" label="学分" />
            <el-table-column prop="weighting" label="加权学分" />
          </el-table>
        </div>
        <div v-else-if="active == 1">
          <el-table
            :data="moralsData"
            border
            show-summary
            style="width: 100%"
            @selection-change="handleSelectionChange2"
          >
            <el-table-column type="selection" width="80" />
            <el-table-column type="index" width="80" label="索引" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="type" label="分类" />
            <el-table-column prop="grade" label="分数" />
            <el-table-column prop="prove" label="证明" />
          </el-table>
        </div>
        <div v-else-if="active == 2">
          <el-table
            :data="moralsData"
            border
            show-summary
            style="width: 100%"
            @selection-change="handleSelectionChange3"
          >
            <el-table-column type="selection" width="80" />
            <el-table-column type="index" width="80" label="索引" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="type" label="分类" />
            <el-table-column prop="grade" label="分数" />
            <el-table-column prop="prove" label="证明" />
          </el-table>
        </div>
        <div v-else-if="active == 3">
          <el-table
            :data="moralsData"
            border
            show-summary
            style="width: 100%"
            @selection-change="handleSelectionChange4"
          >
            <el-table-column type="selection" width="80" />
            <el-table-column type="index" width="80" label="索引" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="type" label="分类" />
            <el-table-column prop="grade" label="分数" />
            <el-table-column prop="prove" label="证明" />
          </el-table>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="next">下一步</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >通过</el-button>
        <el-button
          type="success"
          @click="dialogFormVisible = false"
        >未通过</el-button>
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
          name: '方红能',
          year: '计算机与通信工程学院',
          major: '网络专业',
          class: '网络1802',
          morals: 80,
          wisdom: 80,
          sports: 70,
          labour: 76,
          all: 85,
          state: '2'
        },
        {
          name: '方红能',
          year: '计算机与通信工程学院',
          major: '网络专业',
          class: '网络1802',
          morals: 80,
          wisdom: 80,
          sports: 70,
          labour: 76,
          all: 85,
          state: '3'
        },
        {
          name: '方红能',
          year: '计算机与通信工程学院',
          major: '网络专业',
          class: '网络1802',
          morals: 80,
          wisdom: 80,
          sports: 70,
          labour: 76,
          all: 85,
          state: '1'
        },
        {
          name: '方红能',
          year: '计算机与通信工程学院',
          major: '网络专业',
          class: '网络1802',
          morals: 80,
          wisdom: 80,
          sports: 70,
          labour: 76,
          all: 85,
          state: '1'
        },
        {
          name: '方红能',
          year: '计算机与通信工程学院',
          major: '网络专业',
          class: '网络1802',
          morals: 80,
          wisdom: 80,
          sports: 70,
          labour: 76,
          all: 85,
          state: '1'
        }
      ],
      wisdomTableData: [
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
      moralsData: [
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
      active: 0,
      multipleSelection1: [],
      multipleSelection2: [],
      multipleSelection3: [],
      multipleSelection4: [],
      currentPage: 1,
      screenWidth: null,
      dialogFormVisible: false,
      colors: ['primary', 'success', 'danger', 'info', 'warning'],
      form: {
        name: '',
        year: '',
        major: '',
        class: '',
        prize: '',
        type: '',
        organizer: '',
        activityName: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      model: {},
      schema: {
        name: {
          tag: 'el-input',
          label: '姓名'
        },
        year: {
          tag: 'el-select',
          label: '年级'
        },
        major: {
          tag: 'el-input',
          label: '专业'
        },
        class: {
          tag: 'el-select',
          label: '班级'
        }
      }
    }
  },
  computed: {
    dialogWidth() {
      return this.screenWidth > 760 ? '70%' : '100%'
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
    next() {
      if (this.active == 0) {
        if (this.multipleSelection1.length !== this.wisdomTableData.length) {
          this.$message.error('请认真审批，并将每项的左侧按钮点击')
          return
        }
      } else if (this.active == 1) {
        console.log(this.multipleSelection2, this.moralsData)
        if (this.multipleSelection2.length !== this.moralsData.length) {
          this.$message.error('请认真审批，并将每项的左侧按钮点击')
          return
        }
      } else if (this.active == 2) {
        if (this.multipleSelection3.length !== this.moralsData.length) {
          this.$message.error('请认真审批，并将每项的左侧按钮点击')
          return
        }
      } else if (this.active == 3) {
        if (this.multipleSelection4.length !== this.moralsData.length) {
          this.$message.error('请认真审批，并将每项的左侧按钮点击')
          return
        }
      }
      if (this.active++ > 3) this.active = 0
    },
    submit() {},
    reset() {},
    handleSelectionChange1(val) {
      this.multipleSelection1 = val
    },
    handleSelectionChange2(val) {
      this.multipleSelection2 = val
    },
    handleSelectionChange3(val) {
      this.multipleSelection3 = val
    },
    handleSelectionChange4(val) {
      this.multipleSelection4 = val
    },
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

.container {
  padding: 20px;
}
</style>
