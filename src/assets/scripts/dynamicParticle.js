/**
 * @description: dynamicParticle.js 动态粒子效果
 */

const particleMixin = {
  data() {
    return {
      timeOutId: null,
      dots: [],
      ctx: null,
      canvas: null,
    };
  },
  mounted() {
    let _this = this;
    _this.canvas = _this.$refs.cas;
    _this.ctx = _this.canvas.getContext("2d");
    resize();
    window.onresize = resize;

    function resize() {
      _this.canvas.width = _this.$refs.login.clientWidth;
      _this.canvas.height = _this.$refs.login.clientHeight;
    }
    // 鼠标活动时，获取鼠标坐标
    _this.warea = { x: null, y: null, max: 20000 };
    window.onmousemove = function (e) {
      e = e || window.event;
      _this.warea.x = e.clientX;
      _this.warea.y = e.clientY;
    };
    window.onmouseout = function (e) {
      _this.warea.x = null;
      _this.warea.y = null;
    };
    // 添加粒子
    // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距
    for (var i = 0; i < 70; i++) {
      var x = Math.random() * _this.canvas.width;
      var y = Math.random() * _this.canvas.height;
      var xa = Math.random() * 3 - 1;
      var ya = Math.random() * 3 - 1;
      this.dots.push({
        x: x,
        y: y,
        xa: xa,
        ya: ya,
        max: 16000,
      });
    }
    // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
    _this.timeOutId = setTimeout(function () {
      _this.animate();
    }, 100);
  },
  beforeDestroy() {
    window.onresize = null;
  },
  methods: {
    animate() {
      let _this = this;
      _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
      // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
      var ndots = [_this.warea].concat(_this.dots);
      _this.dots.forEach(function (dot) {
        // 粒子位移
        dot.x += dot.xa;
        dot.y += dot.ya;
        // 遇到边界将加速度反向
        dot.xa *= dot.x > _this.canvas.width || dot.x < 0 ? -1 : 1;
        dot.ya *= dot.y > _this.canvas.height || dot.y < 0 ? -1 : 1;
        // 绘制点
        _this.ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 3, 3);
        _this.ctx.fillStyle = "#fff";
        // 循环比对粒子间的距离
        for (var i = 0; i < ndots.length; i++) {
          var d2 = ndots[i];
          if (dot === d2 || d2.x === null || d2.y === null) continue;
          var xc = dot.x - d2.x;
          var yc = dot.y - d2.y;
          // 两个粒子之间的距离
          var dis = xc * xc + yc * yc;
          // 距离比
          var ratio;
          // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
          if (dis < d2.max) {
            // 如果是鼠标，则让粒子向鼠标的位置移动
            if (d2 === _this.warea && dis > d2.max / 2) {
              dot.x -= xc * 0.01;
              dot.y -= yc * 0.01;
            }
            // 计算距离比
            ratio = (d2.max - dis) / d2.max;
            // 画线
            _this.ctx.beginPath();
            _this.ctx.lineWidth = ratio / 2;
            _this.ctx.strokeStyle = "rgba(255,255,255," + (ratio + 0.2) + ")";
            _this.ctx.moveTo(dot.x, dot.y);
            _this.ctx.lineTo(d2.x, d2.y);
            _this.ctx.stroke();
          }
        }
        // 将已经计算过的粒子从数组中删除
        ndots.splice(ndots.indexOf(dot), 1);
      });
      // _this.RAF.call(_this.animate);
      window.setTimeout(_this.animate, 1000 / 60);
    },
  },
};

export default particleMixin;
