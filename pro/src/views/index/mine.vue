<template>
    <div class="mine">
        <div class="log_box">
            <div class="self">
                <div>
                    <p style="color:skyblue">0</p>
                    <p>我的学习</p>
                </div>
                <div>
                     <p style="color:red">0</p>
                    <p>本周课程</p>
                </div>
                <div>
                     <p style="color:red">{{$store.state.num}}</p>
                    <p>我的积分</p>
                </div>
            </div>

            <div class="log" v-show="$store.state.token==''">
                <div class="im">
                    <van-image
                        round
                        width="80%"
                        height="80%"
                        src=""
                        style="display:block;margin:auto"
                    />
                    <p style="text-align:center;color:white;line-height:30px;font-size:20px"><span>注册</span>/<span>登录</span></p>
                </div>
            </div>
            <div class="minenews"  v-show="$store.state.token!=''">
                <div class="im">
                    <van-image
                        round
                        width="80%"
                        height="80%"
                        src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    />
                    
                </div>
                <b v-html="$store.state.mobile"></b>
                <p><van-tag  type="primary" size="large" @click="gitnum"><van-icon name="checked" />已签到</van-tag></p>
            </div>

        </div>

    <!-- 基础信息 -->
    <div class="my">

        <van-cell title="我的作业" is-link @click="$router.push('/mywork')"/>
        <van-cell title="我的社区" is-link style="margin-top:0px"/>
        <van-cell title="课程订单" is-link />
        <van-cell title="图书订单" is-link style="margin-top:0px"/>
        <van-cell title="优惠券" is-link />
        <van-cell title="学习卡" is-link style="margin-top:0px"/>
        <van-cell title="分销中心" is-link style="margin-top:0px"/>
        <van-cell title="消息中心" is-link />
        <van-cell title="地址案例" is-link style="margin-top:0px"/>
        <van-cell title="关于我们" is-link style="margin-top:0px"/>
        <van-cell title="意见反馈" is-link style="margin-top:0px"/>
        <van-cell title="设置" is-link style="margin-top:0px" @click="setnew"></van-cell>

    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    setnew() {
      this.$router.push("/setup");
    },
    gitnum(){
        this.$router.push('/gift')
    }
  }
};
</script>

<style scoped lang="scss">
.mine {
  width: 100%;
  height: 100%;
  background: #eee;
  padding-bottom: 60px;
  box-sizing: border-box;
  .log_box {
    width: 100%;
    height: 550px;
    background: url(/img/login.png) no-repeat;
    background-size: 100%;
    position: relative;
    background-color: #fff;
    .self {
      width: 100%;
      height: 200px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        flex: 1;
        border-right: 1px solid #ddd;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          margin-top: 10px;
          font-size: 24px;
        }
      }
    }
    .log {
      width: 100%;
      height: 100px;
      position: absolute;
      top: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .im {
        width: 100px;
        height: 100%;
      }
    }
    .minenews {
      width: 100%;
      height: 100px;
      position: absolute;
      top: 70px;
      display: flex;
      justify-content: start;
      position: relative;
      b{
          margin-left: 20px;
          margin-top: 15px;
          font-size: 22px;
          color: white;
      }
      .im {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p{
          position: absolute;
          right: 0;
          top: 10px;
          .tab{
              font-size: 20px;
          }
      }
    }
  }
  .my {
    width: 100%;
    margin-top: 50px;
    .van-cell {
      margin-top: 15px;
      height: 65px;
    }
  }
}
</style>

