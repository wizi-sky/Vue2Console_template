<template>
  <div v-show="!loading" class="pagination-container">
    <el-pagination
      :current-page.sync="curPage"
      :page-sizes="pageSizes"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handlePageSizeChange"
      @current-change="handlePageChange"
    />
  </div>
</template>
<script>
export default {
  name: 'TablePagination',
  props: {
    currentPage: Number,
    limit: Number,
    pageSizes: {
      default: function() {
        return [10, 20, 30, 50, 100, 500, 800]
      }
    },
    total: Number,
    loading: Boolean
  },
  computed: {
    curPage: {
      get() {
        return this.currentPage
      },
      set(val) {
        this.$emit('update:currentPage', val)
      }
    }
  },
  methods: {
    handlePageChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    handlePageSizeChange(val) {
      this.$emit('handleSizeChange', val)
    }
  }
}
</script>
<style lang="scss">
.pagination-container{
  margin-top: 15px;
}
</style>
