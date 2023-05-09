<template>
  <div class="app-container">
    <!-- search -->
    <div class="app-seach-content">
      <el-form inline>
        <!-- 表单元素 -->
        <el-form-item>
          <el-input
            v-model="listQuery.username"
            size="medium"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="listQuery.username"
            size="medium"
            placeholder="用户名"
          />
        </el-form-item>
        <!-- 查询与情况的按钮 -->
        <el-button
          type="primary"
          size="medium"
          icon="el-icon-search"
        >查询</el-button>
        <el-button
          type="warning"
          size="medium"
          icon="el-icon-refresh"
        >清空</el-button>
      </el-form>
    </div>
    <!-- manage -->
    <div class="app-table-header">
      <el-button
        type="success"
        size="medium"
        icon="el-icon-plus"
      >添加</el-button>
    </div>
    <!-- table -->
    <div class="app-table-content">
      <el-table stripe border :data="tableData" max-height="600">
        <el-table-column prop="date" label="日期" min-width="150" />
        <el-table-column prop="name" label="姓名" min-width="120" />
        <el-table-column prop="province" label="省份" min-width="120" />
        <el-table-column prop="city" label="市区" min-width="120" />
        <el-table-column prop="address" label="地址" min-width="300" />
        <el-table-column prop="zip" label="邮编" min-width="120" />
        <el-table-column label="操作" min-width="120">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <TablePagination
        :current-page="listQuery.page"
        :limit="listQuery.limit"
        :total="total"
        :loading="listLoading"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      listLoading: false,
      listQuery: {
        username: '',
        limit: 20,
        offset: 0
      },
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
