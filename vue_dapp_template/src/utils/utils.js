import { Toast } from "vant"
import Big from 'big.js'
const h5Copy = {
  methods: {
    h5Copy(content) {
      if (!document.queryCommandSupported('copy')) {
        // 不支持
        return false
      }

      let textarea = document.createElement("textarea")
      textarea.value = content
      textarea.readOnly = "readOnly"
      document.body.appendChild(textarea)
      textarea.select() // 选择对象
      textarea.setSelectionRange(0, content.length) //核心
      document.execCommand("copy") // 执行浏览器复制命令
      textarea.remove()
      Toast('复制成功');
    }
  }
}

Big.DP = 18
Big.NE = -19

window.Big = Big

const Decimal = {
  add(a, b) {
    try {
      return Big(a).add(Big(b))
    } catch {
      console.log('')
    }
  },
  sub(a, b) {
    try {
      return Big(a).sub(Big(b))
    } catch {
      console.log('')
    }
  },
  mul(a, b) {
    try {
      return Big(a).mul(Big(b))
    } catch {
      console.log('')
    }
  },
  div(a, b) {
    try {
      return Big(a).div(Big(b))
    } catch {
      console.log('')
    }
  },
}
const timeUtils = {
  data(){
    return {
      day: '0',
      hour:'00',
      minutes: '00',
      seconds: '00'
    }
  },
  methods: {
    // 时间戳转时间
    timestampToTime(timestamp) {
      var date = new Date(Number(timestamp) * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = (date.getDate() < 10 ? "0"+date.getDate() : date.getDate()) + " ";
      var h = (date.getHours() < 10 ? "0"+date.getHours() : date.getHours()) + ":";
      var m = (date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes())  + ":";
      var s = (date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds());
      return Y + M + D + h + m + s;
    },
    // 倒计时
    countDown(maxtime, fnCallback) {
      let distance = maxtime;
      if (maxtime >= 0) {
        // 距离结束剩下多少天
        let day = Math.floor(maxtime / 86400);
        // 得到剩下的分钟数
        maxtime -= day * 86400;
        let hour = Math.floor(maxtime / 3600);
        // 得到剩下的分钟数
        maxtime -= hour * 3600;
        let minutes = Math.floor(maxtime / 60);
        let seconds = Math.floor(maxtime % 60);
        --distance;
        this.day = day.toString();
        if (hour < 10) {
          hour = "0" + hour;
        }
        this.hour = hour.toString();
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        this.minutes = minutes.toString();
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        this.seconds = seconds.toString();
        this.timer = setTimeout(() => {
          this.countDown(distance, fnCallback);
        }, 1000);
        return {
          status: 'ing',
          day,
          hour,
          minutes,
          seconds
        }
      } else {
        clearInterval(this.timer);
        fnCallback && fnCallback();
      }
    },
  }
}
export {
	h5Copy,
  Decimal,
  timeUtils
}