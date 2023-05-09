/**
 * @description: global.js 全局公共
 */

const globalMixin = {
  data() {
    return {};
  },
  computed: {

  },
  methods: {
    /************************* 列表查询相关 ****************************/

    /**
     * @desc 列表查询
     */
    $getList() {
      this.getList();
    },

    /**
     * @desc 查询
     */
    handleSearch() {
      this.listQuery.offset = 0;
      this.listQuery.page = 1;
      this.$getList();
    },

    /**
     * @desc 重置
     */
    handleReset() {
      this.listQuery.offset = 0;
      this.listQuery.page = 1;
      this.$getList();
    },

    /**
     * @desc 列表字段排序
     */
    sortChange: function (column, prop, order) {
      this.listQuery.orderBy = column.prop;
      if (column.order === null && this.listQuery.orderBy) {
        delete this.listQuery.orderBy;
        delete this.listQuery.orderType;
      } else {
        this.listQuery.orderType = column.order == "ascending" ? "asc" : "desc";
      }
      this.$getList();
    },

    /**
     * @desc 分页查询
     */
    handleSizeChange(val) {
      // 列表每页显示条数
      this.listQuery.limit = val;
      this.$getList();
    },
    handleCurrentChange(val) {
      // 列表页数
      this.listQuery.offset = (val - 1) * this.listQuery.limit;
      this.$getList();
    },

    /**
     * @desc 导出列表数据
     */
    exportList(url, params, method = "$post", filename = "列表1.xls") {
      if (params) {
        if (params.total > 5000) {
          this.$message({
            message: "导出数量超出限制，请筛选后再导出",
            type: "error",
          });
          return;
        } else {
          delete params.total;
          delete params.limit;
          delete params.offset;
        }
      }
      params.responseType = "blob";
      this[method](url, params)
        .then((resp) => {
          var blob = new Blob([resp], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
          });
          var download = document.createElement("a");
          var href = window.URL.createObjectURL(blob);
          download.href = href;
          download.download = filename;
          document.body.appendChild(download);
          download.click();
          document.body.removeChild(download);
          window.URL.revokeObjectURL(blob);
        })
        .catch((err) => {
          this.$message({
            message: err.data.error.description,
            type: "success",
          });
        });
    },
    /************************* 图片下载错误处理 ****************************/
    imgLoadError(event) {
      let target = event.target;
      let textNode = document.createElement("font");
      textNode.innerText = "图片下载失败";
      target.style.display = "none";
      target.parentNode.appendChild(textNode);
    },
    imgLoadSuccess(event) {
      let target = event.target;
      let textNode = target.parentNode.querySelectorAll("font")[0];
      if (textNode) {
        target.parentNode.removeChild(textNode);
      }
      target.style.display = "inherit";
    },

    /************************* 通用时间处理工具函数 *************************/

    /**
     * @desc 当前自然周起始
     */
    getCurrentWeek(value, format) {
      let data = value ? new Date(value) : new Date(); //当前日期
      let year = Number(data.getFullYear()); //当前年
      let month = Number(data.getMonth()) + 1;
      let nowMonth = Number(data.getMonth()); //当前月
      let day = Number(data.getDate()); //当天
      //计算某日是本月第几周
      let mydate = new Date(year, month - 1, day);
      let weekday = mydate.getDay(); //获取该日是星期几，0代表星期日//今天本周的第几天
      let weekno = Math.ceil((day + 6 - weekday) / 7); // 本月第几周
      //获取当前周的开始结束时间
      let startTime; //本周的开始时间
      let endTime; //本周的结束时间
      function formatDate(date) {
        let myyear = Number(date.getFullYear());
        let mymonth = Number(date.getMonth() + 1);
        let myweekday = Number(date.getDate());
        if (mymonth < 10) {
          mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
          myweekday = "0" + myweekday;
        }
        return myyear + "-" + mymonth + "-" + myweekday;
      }
      //获得本周的开始日期
      function getWeekStartDate() {
        let weekStartDate = new Date(year, nowMonth, day + 1 - weekday);
        return formatDate(weekStartDate);
      }
      //获得本周的结束日期
      function getWeekEndDate() {
        let weekEndDate = new Date(year, nowMonth, day + 7 - weekday);
        return formatDate(weekEndDate);
      }
      if (format == "dateTime") {
        startTime = getWeekStartDate() + " 00:00:00";
        endTime = getWeekEndDate() + " 23:59:59";
      } else {
        startTime = getWeekStartDate();
        endTime = getWeekEndDate();
      }
      return {
        startTime,
        endTime,
      };
    },

    /**
     * @desc 最近一周
     */
    getLastWeek() {
      let startTime = new Date();
      let endTime = parseTime(startTime, "{y}-{m}-{d}") + " 23:59:59";
      startTime.setHours(0, 0, 0);
      startTime = startTime.getTime() - 7 * 24 * 3600 * 1000;
      startTime = parseTime(startTime, "{y}-{m}-{d}") + " 00:00:00";
      return {
        startTime,
        endTime,
      };
    },
  },
};

export default globalMixin;
