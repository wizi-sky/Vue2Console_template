<template>
  <div>
    <div class="card-header">
      <span>{{ title }}</span>
      <i class="el-icon-info" />
    </div>
    <div class="card-content">{{ count }}</div>
    <div class="card-charts"><slot name="charts" /></div>
    <div class="card-footer"><slot name="footer" /></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['title', 'count']
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  color: #d9d9d9;
}
.card-content{
    font-size: 30px;
    padding: 10px 0;
}
.card-charts{
    height: 50px;
}
.card-footer{
    border-top: 1px solid #d9d9d9;
    padding-top: 10px;
}
</style>
