import * as echarts from '../../components/ec-canvas/echarts';
var date_1 = require("../../utils/dateformat/date"); //支持绝对路径
let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '本次赛事记录',
      subtext: date_1.formatTime(new Date()),
    },
    color: ['#e90b3a','#c23531'],
    barWidth : 10,
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['时间']
    },
    grid: {
      left: '3%',
      right: 20,
      bottom: 15,
      containLabel: true
    },
    xAxis: [
      {
        show: false
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['玩家A','桢卓','િી','玩家A',' 孤独终老','玩家A','Denise',],
        axisLine: {
          lineStyle: {
            // color: 'red'
          }
        },
        axisLabel: {
          color: '#d48265'
        }
      }
    ],
    series: [
      {
        name: '时间',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [300, 270, 340, 344, 300, 320, 310],
        itemStyle: {
          // emphasis: {
          //   color: 'orange'
          // }
        }
      },
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      console.log(chart)
    }, 2000);
  }
});
