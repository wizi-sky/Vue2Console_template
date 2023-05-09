<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="6"
      ><el-card>
        <Detail title="总销售额" count="￥ 126560">
          <template slot="charts">
            <span>周同比&nbsp;&nbsp;56.67%<svg
              t="1661073031787"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3727"
              width="16"
              height="16"
            >
              <path
                d="M512 1024a42.666667 42.666667 0 0 1-42.666667-42.666667V256a42.666667 42.666667 0 0 1 85.333334 0v725.333333a42.666667 42.666667 0 0 1-42.666667 42.666667z"
                fill="#0B70DD"
                p-id="3728"
              />
              <path
                d="M512 213.333333a42.666667 42.666667 0 0 0-42.666667 42.666667v181.333333h85.333334V256a42.666667 42.666667 0 0 0-42.666667-42.666667z"
                fill="#0B66B7"
                p-id="3729"
              />
              <path
                d="M848.213333 416H175.786667a21.333333 21.333333 0 0 1-15.786667-35.413333L495.786667 7.253333a21.333333 21.333333 0 0 1 31.573333 0l336.213333 373.333334a21.333333 21.333333 0 0 1-15.36 35.413333z"
                fill="#3395FF"
                p-id="3730"
              /></svg></span>
              &nbsp;&nbsp;&nbsp;
            <span>日同比&nbsp;&nbsp;19.96%<svg
              t="1661073172802"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5457"
              width="16"
              height="16"
            >
              <path
                d="M512 0a42.666667 42.666667 0 0 1 42.666667 42.666667v725.333333a42.666667 42.666667 0 1 1-85.333334 0V42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                fill="#0B70DD"
                p-id="5458"
              />
              <path
                d="M175.786667 608h672.426666a21.333333 21.333333 0 0 1 15.786667 35.413333l-336.213333 373.333334a21.333333 21.333333 0 0 1-31.573334 0L160 643.413333a21.333333 21.333333 0 0 1 15.786667-35.413333z"
                fill="#3395FF"
                p-id="5459"
              /></svg></span>
          </template>
          <template slot="footer">
            <span>日销售额 ￥ 12423</span>
          </template>
        </Detail>
      </el-card>
      </el-col>
      <el-col
        :span="6"
      ><el-card>
        <Detail title="访问量" count="88460">
          <template slot="charts">
            <lineCharts />
          </template>
          <template slot="footer">
            <span>日访问量 1423</span>
          </template>
        </Detail>
      </el-card></el-col>
      <el-col
        :span="6"
      ><el-card>
        <Detail title="支付笔数" count="88460">
          <template slot="charts">
            <BarChart />
          </template>
          <template slot="footer">
            <span>转化率65%</span>
          </template>
        </Detail>
      </el-card></el-col>
      <el-col
        :span="6"
      ><el-card>
        <Detail title="运营活动效果" count="78%">
          <template slot="charts">
            <progressCharts />
          </template>
          <template slot="footer">
            <span>周同比&nbsp;&nbsp;56.67%<svg
              t="1661073031787"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3727"
              width="16"
              height="16"
            >
              <path
                d="M512 1024a42.666667 42.666667 0 0 1-42.666667-42.666667V256a42.666667 42.666667 0 0 1 85.333334 0v725.333333a42.666667 42.666667 0 0 1-42.666667 42.666667z"
                fill="#0B70DD"
                p-id="3728"
              />
              <path
                d="M512 213.333333a42.666667 42.666667 0 0 0-42.666667 42.666667v181.333333h85.333334V256a42.666667 42.666667 0 0 0-42.666667-42.666667z"
                fill="#0B66B7"
                p-id="3729"
              />
              <path
                d="M848.213333 416H175.786667a21.333333 21.333333 0 0 1-15.786667-35.413333L495.786667 7.253333a21.333333 21.333333 0 0 1 31.573333 0l336.213333 373.333334a21.333333 21.333333 0 0 1-15.36 35.413333z"
                fill="#3395FF"
                p-id="3730"
              /></svg></span>
              &nbsp;&nbsp;&nbsp;
            <span>日同比&nbsp;&nbsp;19.96%<svg
              t="1661073172802"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5457"
              width="16"
              height="16"
            >
              <path
                d="M512 0a42.666667 42.666667 0 0 1 42.666667 42.666667v725.333333a42.666667 42.666667 0 1 1-85.333334 0V42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                fill="#0B70DD"
                p-id="5458"
              />
              <path
                d="M175.786667 608h672.426666a21.333333 21.333333 0 0 1 15.786667 35.413333l-336.213333 373.333334a21.333333 21.333333 0 0 1-31.573334 0L160 643.413333a21.333333 21.333333 0 0 1 15.786667-35.413333z"
                fill="#3395FF"
                p-id="5459"
              /></svg></span>
          </template>
        </Detail> </el-card></el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './Detail'
import lineCharts from './lineChart'
import BarChart from './barChart/index.vue'
import progressCharts from './progessCharts'
export default {
  name: '',
  components: {
    Detail,
    lineCharts,
    BarChart,
    progressCharts
  }
}
</script>

<style lang="scss" scoped></style>
