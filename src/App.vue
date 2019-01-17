<template>
  <div id="app">
    <div class="envelope" id="js-envelope">
      <img class="back" src="./assets/envelope-back.png">
      <img class="front" src="./assets/envelope-front.png">
    </div>
    <img class="paper-group" id="js-paper-group" src="./assets/paper-group.png">
    <div v-if="this.part === 0" class="cover">
      <div class="logo">
        <img src="./assets/logo.png">
        <span>Product Daily 出品</span>
      </div>
      <img class="title" src="./assets/title.png">
      <button @click="start()" class="btn-start">马上拆卷</button>
    </div>
    <transition name="fade">
      <div v-if="this.part === 1" class="question">
        <div class="number">第 1 题</div>
        <div class="question-title">18 年 1 月，直播答题产品走红，以下哪款是「西瓜视频」推出的？</div>
        <a @click="wrong(2, $event)" class="ansrew a">冲顶大会</a>
        <a @click="right(2, $event)" class="ansrew b">百万英雄</a>
        <a @click="wrong(2, $event)" class="ansrew c">芝士超人</a>
        <a @click="wrong(2, $event)" class="ansrew d">黄金十秒</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 2" class="question">
        <div class="number">第 2 题</div>
        <div class="question-title">18 年初，网易公开课和三联生活周刊的课程海报，在刷屏传播后遭封禁，原因是？</div>
        <a @click="wrong(3, $event)" class="ansrew a">违反 iOS 虚拟商品支付规则</a>
        <a @click="right(3, $event)" class="ansrew b">涉嫌多级分销</a>
        <a @click="wrong(3, $event)" class="ansrew c">瞬时交易金额过大</a>
        <a @click="wrong(3, $event)" class="ansrew d">非腾讯系产品</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 3" class="question">
        <div class="number">第 3 题</div>
        <div class="question-title">以下哪款不是今年新推出的短视频产品？</div>
        <a @click="right(4, $event)" class="ansrew a">腾讯微视</a>
        <a @click="wrong(4, $event)" class="ansrew b">Facebook Lasso</a>
        <a @click="wrong(4, $event)" class="ansrew c">爱奇艺锦视</a>
        <a @click="wrong(4, $event)" class="ansrew d">网易 LOOK 直播</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 4" class="question">
        <div class="number">第 4 题</div>
        <div class="question-title">微信小程序平台以下的哪个功能，不是在 18 年推出的？</div>
        <a @click="wrong(5, $event)" class="ansrew a">服务直达</a>
        <a @click="wrong(5, $event)" class="ansrew b">小游戏激励视频广告</a>
        <a @click="right(5, $event)" class="ansrew c">小程序质量分</a>
        <a @click="wrong(5, $event)" class="ansrew d">云开发服务</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 5" class="question">
        <div class="number">第 5 题</div>
        <div class="question-title">为什么有「小程序 2.0」这个说法？ </div>
        <a @click="wrong(6, $event)" class="ansrew a">微信宣布小程序日活破 2 亿</a>
        <a @click="wrong(6, $event)" class="ansrew b">小程序具备了商业化能力</a>
        <a @click="wrong(6, $event)" class="ansrew c">小游戏类目全面开放</a>
        <a @click="right(6, $event)" class="ansrew d">百度阿里头条等公司发力小程序</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 6" class="question">
        <div class="number">第 6 题</div>
        <div class="question-title">6 月苹果在 WWDC 全球开发者大会上发布了 iOS 12，以下哪个不是新功能？</div>
        <a @click="wrong(7, $event)" class="ansrew a">Siri 捷径</a>
        <a @click="wrong(7, $event)" class="ansrew b">屏幕时间统计</a>
        <a @click="wrong(7, $event)" class="ansrew c">Animoji</a>
        <a @click="right(7, $event)" class="ansrew d">单手键盘</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 7" class="question">
        <div class="number">第 7 题</div>
        <div class="question-title">截至目前，中国区 Apple Store，以下哪个功能是已有的？</div>
        <a @click="right(8, $event)" class="ansrew a">Today 个性化推荐</a>
        <a @click="wrong(8, $event)" class="ansrew b">Search Ads</a>
        <a @click="wrong(8, $event)" class="ansrew c">免安装先体验</a>
        <a @click="wrong(8, $event)" class="ansrew d">同时下载两个微信</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 8" class="question">
        <div class="number">第 8 题</div>
        <div class="question-title">以下哪个变化，不是欧盟 GDPR（通用数据保护条例）生效导致的？</div>
        <a @click="wrong(9, $event)" class="ansrew a">打开网站看到 Cookies 授权弹框</a>
        <a @click="wrong(9, $event)" class="ansrew b">允许用户下载历史数据</a>
        <a @click="wrong(9, $event)" class="ansrew c">允许用户删除历史数据</a>
        <a @click="right(9, $event)" class="ansrew d">允许用户注销帐号</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 9" class="question">
        <div class="number">第 9 题</div>
        <div class="question-title">港交所修改「同股不同权」规则后，首家赴港上市的中国大陆公司是哪个？</div>
        <a @click="wrong(10, $event)" class="ansrew a">美团点评</a>
        <a @click="right(10, $event)" class="ansrew b">小米</a>
        <a @click="wrong(10, $event)" class="ansrew c">拼多多</a>
        <a @click="wrong(10, $event)" class="ansrew d">Bilibili</a>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.part === 10" class="question">
        <div class="number">第 10 题</div>
        <div class="question-title">硅谷著名孵化器 Y Combinator 进入中国，谁成为了 YC 中国 1 号员工？</div>
        <a @click="wrong(11, $event)" class="ansrew a">李开复</a>
        <a @click="right(11, $event)" class="ansrew b">陆奇</a>
        <a @click="wrong(11, $event)" class="ansrew c">黄峥</a>
        <a @click="wrong(11, $event)" class="ansrew d">徐峥</a>
      </div>
    </transition>
    <div v-if="this.part === 11" class="final" id="canvas">
      <template v-if="image">
        <img :src="image" class="draw">
        <div class="tip">长按保存成绩单图片，分享给好友</div>
        <button @click="showShareModal" class="btn line">喊好友来测</button>
        <button @click="showFollowModal" class="btn solid">查看正确答案</button>
      </template>
      <div v-else class="paper">
        <img class="score-title" src="./assets/score-title.png">
        <div class="score">
          <img v-if="this.score === 0" src="./assets/score-0.png">
          <img v-else-if="this.score === 10" src="./assets/score-10.png">
          <img v-else-if="this.score === 20" src="./assets/score-20.png">
          <img v-else-if="this.score === 30" src="./assets/score-30.png">
          <img v-else-if="this.score === 40" src="./assets/score-40.png">
          <img v-else-if="this.score === 50" src="./assets/score-50.png">
          <img v-else-if="this.score === 60" src="./assets/score-60.png">
          <img v-else-if="this.score === 70" src="./assets/score-70.png">
          <img v-else-if="this.score === 80" src="./assets/score-80.png">
          <img v-else-if="this.score === 90" src="./assets/score-90.png">
          <img v-else-if="this.score === 100" src="./assets/score-100.png">
        </div>
        <div class="description">
          这位同学，你在本次测试中，取得了 {{this.score}} 分，
          <template v-if="this.score === 0">你是怎么做到完美避开所有答案的…</template>
          <template v-else-if="this.score === 10">差点就可以完美避开所有答案了…</template>
          <template v-else-if="this.score === 20">差点就可以完美避开所有答案了…</template>
          <template v-else-if="this.score === 30">不干这一行别来凑热闹哇</template>
          <template v-else-if="this.score === 40">不干这一行别来凑热闹哇</template>
          <template v-else-if="this.score === 50">你对互联网资讯的敏锐度一般般呐</template>
          <template v-else-if="this.score === 60">勉强及格，再接再厉</template>
          <template v-else-if="this.score === 70">你对互联网的产品资讯还不错嘛</template>
          <template v-else-if="this.score === 80">你对互联网的产品资讯很熟悉噢</template>
          <template v-else-if="this.score === 90">你对互联网的产品资讯了如指掌啊</template>
          <template v-else-if="this.score === 100">你对互联网产品资讯的了解程度无人能敌！</template>
        </div>
        <div class="qrcode">
          <img src="./assets/page-url.png">
          <div class="text">
            长按二维码参与<br>
            2018 互联网产品资讯考试
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.part === 11 && !image" class="loader">成绩单生成中…</div>
    <div v-if="shareModal" class="modal">
      <div class="mask" @click="hideShareModal"></div>
      <img class="arrow" src="./assets/arrow.png">
    </div>
    <div v-if="followModal" class="modal">
      <div class="mask" @click="hideFollowModal"></div>
      <div class="wrap">
        <a @click="hideFollowModal">×</a>
        <p>长按识别二维码关注公众号，<span>获取正确答案</span></p>
        <img src="./assets/qrcode.png">
        <div class="mp">
          <img src="./assets/big-logo.png">
          <div class="text">
            <div class="name">Product Daily</div>
            <div class="info">每日产品设计资讯</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: 'app',
  data() {
    return {
      part: 0,
      score: 0,
      shareModal: false,
      followModal: false,
      image: "",
    }
  },
  methods: {
    start () {
      this.part = 1
      document.getElementById("js-envelope").classList.add("zoom");
      document.getElementById("js-paper-group").classList.add("hide");
    },
    wrong (e, event) {
      event.target.classList.add("wrong")
      setTimeout(() => {
        this.goTo(e)
      }, 1000)
      if (e === 11) {
        this.hideEnvelope()
        this.drawImage()
      }
    },
    right (e, event) {
      event.target.classList.add("right")
      this.score += 10
      setTimeout(() => {
        this.goTo(e)
      }, 1000)
      if (e === 11) {
        this.hideEnvelope()
        this.drawImage()
      }
    },
    goTo (e) {
      this.part = e
    },
    drawImage() {
      this.$nextTick(() => {
        setTimeout(() => {
          html2canvas(document.getElementById("canvas"), {
            allowTaint: false,
            useCORS: true,
            backgroundColor: "#F7F6F0"
          })
            .then(canvas => {
              this.image = canvas.toDataURL("image/png");
            })
            .catch(() => {
            });
        }, 3000);
      });
    },
    hideEnvelope () {
      setTimeout(() => {
        document.getElementById("js-envelope").classList.add("hide");
      }, 1000)
    },
    showShareModal () {
      this.shareModal = true
    },
    showFollowModal () {
      this.followModal = true
    },
    hideShareModal () {
      this.shareModal = false
    },
    hideFollowModal () {
      this.followModal = false
    },
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0.4;
  transform: translate(0, 70%);
  transition: 1s ease;
}

.opacity-enter-active, .opacity-leave-active {
  opacity: 1;
  transition: 1s ease;
}
.opacity-enter, .opacity-leave-to {
  opacity: 0;
  transition: 1s ease;
}

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F7F6F0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  max-width: 420px;
  margin: 0 auto;
  overflow: hidden;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMACQ9PdZwAAAAeSURBVAjXYyAAGHFJMKMS8g8YGBzkH6JJkAYQtgEArdQCVOeivTcAAAAASUVORK5CYII=);

  .envelope {
    img {
      position: absolute;
      bottom: 0;
      width: 100%;
      transition: 1s;
    }

    .back {
      z-index: 1;
    }

    .front {
      z-index: 10;
    }

    &.zoom img {
      transform: scale(1.2);
      bottom: -150px;
    }

    &.hide img {
      bottom: -600px;
    }
  }

  .paper-group {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    bottom: 60px;
    z-index: 2;
    transition: 1s;

    &.hide {
      bottom: -300px;
      opacity: 0;
    }
  }

  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;

    .logo {
      position: absolute;
      top: 10px;
      left: 20px;
      
      img {
        margin-right: 10px;
        width: 30px;
        vertical-align: middle;
      }

      span {
        font-size: 12px;
        line-height: 40px;
      }
    }

    .title {
      position: relative;
      margin-top: 12vh;
      width: 278px;
      z-index: 20;
    }

    .btn-start {
      position: absolute;
      bottom: 10vh;
      left: 50%;
      margin-left: -105px;
      padding: 12px 60px;
      font-size: 22px;
      color: #eee;
      background-color: #333;
      border-radius: 6px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      cursor: pointer;
      border: none;
      z-index: 20;
    }
  }

  .question {
    position: absolute;
    padding: 30px;
    top: 40px;
    bottom: 0;
    left: 20px;
    right: 20px;
    z-index: 3;
    background-color: white;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);

    .number {
      font-weight: bold;

      &:before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        background-color: black;
        margin-right: 10px;
      }
    }

    .question-title {
      margin: 20px 0;
      font-size: 21px;
      font-weight: bold;
    }

    .ansrew {
      display: block;
      margin-top: 15px;
      padding: 12px 15px;
      border: 1px solid #DFDFDF;
      font-size: 16px;
      border-radius: 6px;
      background-color: #F7F6F0;
      cursor: pointer;

      &:before {
        padding-right: 10px;
        font-style: italic;
        font-weight: bold;
        color: #999;
      }

      &.a:before { content: 'A'; }
      &.b:before { content: 'B'; }
      &.c:before { content: 'C'; }
      &.d:before { content: 'D'; }

      &.right {
        background-color: #6DDA6B;
        color: white;
        animation: right .5s;

        &:before {
          content: '✔︎';
          color: white;
        }
      }

      @keyframes right {
         0% {
           transform: scale(1);
         }
         50% {
           transform: scale(1.1);
         }
         100% {
           transform: scale(1);
         }
      }

      &.wrong {
        background-color: #FF8E88;
        color: white;
        animation: wrong .5s;

        &:before {
          content: '✘';
          color: white;
        }
      }

      @keyframes wrong {
         0% {
           transform: translateX(0);
         }
         20% {
           transform: translateX(-20px);
         }
         40% {
           transform: translateX(20px);
         }
         60% {
           transform: translateX(-20px);
         }
         80% {
           transform: translateX(20px);
         }
         100% {
           transform: translateX(0);
         }
      }
    }
  }

  .final {
    padding: 20px;

    .tip {
      font-size: 13px;
      text-align: center;
      margin-top: 10px;
    }

    .paper {
      position: relative;
      background-color: white;
      padding: 30px;
      border: 1px solid #eee;

      .score-title {
        width: 110px;
        height: 38px;
      }

      .score {
        position: absolute;
        right: 40px;
        top: 30px;
        width: 89px;
        height: 63px;

        img {
          width: 100%;
        }
      }

      .description {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #eee;
        font-size: 15px;
      }

      .qrcode {
        margin-top: 25px;

        img {
          display: inline-block;
          width: 48px;
          margin-right: 10px;
          opacity: 0.6;
          vertical-align: middle;
        }

        .text {
          display: inline-block;
          font-size: 12px;
          color: #999;
          vertical-align: middle;
        }
      }
    }

    .draw {
      width: calc(100% + 40px);
      margin: -20px;
    }

    .btn {
      display: block;
      padding: 12px 0;
      width: 100%;
      font-size: 18px;
      border-radius: 6px;
      cursor: pointer;

      &.line {
        margin-top: 25px;
        color: #333;
        background-color: white;
        border: 1px solid #333;
      }

      &.solid {
        margin-top: 15px;
        color: white;
        background-color: #333;
        border: 1px solid #333;
      }
    }
  }

  .loader {
    font-size: 13px;
    text-align: center;
    padding-left: 30px;

    &:before {
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      margin-left: -30px;
      border: 2px solid #E6473E;
      border-radius: 10px;
      border-left-color: transparent;
      animation: 1s rolling infinite;
    }

    @keyframes rolling {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
    }

    .wrap {
      position: absolute;
      width: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #F7F6F0;
      border-radius: 10px;
      text-align: center;
      overflow: hidden;

      a {
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 0 10px;
        font-size: 30px;
        color: #aaa;
        cursor: pointer;
      }

      p {
        margin-top: 30px;
        padding: 0 40px;
        font-weight: 16px;

        span {
          font-weight: bold;
        }
      }

      img {
        width: 160px;
      }

      .mp {
        margin-top: -20px;
        padding: 35px 0 20px;
        background-color: white;

        img {
          display: inline-block;
          width: 64px;
          margin-right: 10px;
          vertical-align: middle;
        }

        .text {
          display: inline-block;
          text-align: left;
          vertical-align: middle;

          .name {
            font-size: 18px;
            font-weight: bold;
          }

          .info {
            font-size: 13px;
          }
        }
      }
    }

    .arrow {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 39px;
      height: 65px;
      animation: floating 2s infinite;
    }

    @keyframes floating {
      0% {
        top: 20px;
        right: 20px;
      }

      60% {
        top: 40px;
        right: 40px;
      }

      100% {
        top: 20px;
        right: 20px;
      }
    }
  }
}
</style>
