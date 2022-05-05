<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="id" label="学号" sortable />
      <el-table-column prop="name" label="审批员姓名" sortable />
      <el-table-column prop="year" label="审批员院校" />
      <el-table-column prop="class" label="审批员班级" />
      <el-table-column prop="approve" label="分配审批数量" />
      <el-table-column prop="approved" label="已审批数量" />
      <el-table-column prop="unaprove" label="未审批数量" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '201858080213',
          name: '方红能',
          year: '计算机与通信工程学院',
          class: '网络1802',
          approve: '10',
          approved: '5',
          unaprove: '5'
        },
        {
          id: '201858080213',
          name: '方红能',
          year: '计算机与通信工程学院',
          class: '网络1802',
          approve: '10',
          approved: '5',
          unaprove: '5'
        },,
        {
          id: '201858080213',
          name: '方红能',
          year: '计算机与通信工程学院',
          class: '网络1802',
          approve: '10',
          approved: '5',
          unaprove: '5'
        },
        {
          id: '201858080213',
          name: '方红能',
          year: '计算机与通信工程学院',
          class: '网络1802',
          approve: '10',
          approved: '5',
          unaprove: '5'
        }
      ]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address
    }
  }
}
</script>

<style></style>
