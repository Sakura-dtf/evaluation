<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="id" label="活动序号" sortable />
      <el-table-column prop="name" label="活动名称" sortable />
      <el-table-column prop="type" label="活动类型" />
      <el-table-column prop="num" label="活动参加人数" />
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
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: '全国物联网大赛',
          type: '竞赛类',
          num: '114',
          prize: ['特等奖', '一等奖', '二等奖', '三等奖']
        },
        {
          id: 2,
          name: '全国物联网大赛',
          type: '竞赛类',
          num: '114',
          prize: ['特等奖', '一等奖', '二等奖', '三等奖']
        },
        {
          id: 3,
          name: '全国物联网大赛',
          type: '竞赛类',
          num: '114',
          prize: ['特等奖', '一等奖', '二等奖', '三等奖']
        },
        {
          id: 4,
          name: '全国物联网大赛',
          type: '竞赛类',
          num: '114',
          prize: ['特等奖', '一等奖', '二等奖', '三等奖']
        },
        {
          id: 5,
          name: '全国物联网大赛',
          type: '竞赛类',
          num: '114',
          prize: ['特等奖', '一等奖', '二等奖', '三等奖']
        }
      ],
      colors: ['primary', 'success', 'danger', 'info', 'warning']
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
