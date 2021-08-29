<template>
    <div class="login">
        <div class="log_ban">
            <img src="/img/ban.png" alt="">
        </div>

        <div class="lognew">
            <div class="box">
                <div class="use">
                    <input type="text" v-model="mobile" placeholder="请输入手机号">
                    <p @click="getcode">获取验证码</p>
                </div>
                <div class="pho">
                    <input type="text" v-model="code" placeholder="请输入短信验证码">
                </div>

                <div class="pho_new">
                    <p>未注册的手机号将自动注册</p>
                    <p>使用密码登录</p>
                </div>
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        mobile:"",
        code:"",
    };
  },
  mounted() {},
  methods: {
      async getcode(){
          var reg = /^1[3456789]\d{9}$/
          if(!reg.test(this.mobile)){
              alert("手机格式不正确")
              return false
          }
          var res = await this.$axios.post("/smsCode",{mobile:this.mobile,sms_type:"login"})
      },
      async login(){
          var {data:res} = await this.$axios.post("/login",{mobile:this.mobile,sms_code:this.code,type:2,client:1})
          if(res.code==200){
              this.$router.push("/")
          }else{
              return
          }
      }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  background-color: #eee;
  .log_ban {
    width: 100%;
    height: 300px;
    background: #ddd;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lognew {
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    .box{
        width: 80%;
        margin: 100px auto;
        .use{
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                color: red;
            }
            input{
                width: 80%;
                height: 100%;
                border: none;
                font-size: 20px;
            }
        }
        .pho{
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;

            input{
                width: 80%;
                height: 100%;
                border: none;
                font-size: 20px;
            }
        }
        .pho_new{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            color: gray;
        }
        button{
            width: 100%;
            height: 65px;
            font-size: 20px;
            margin-top: 40px;
            background: #ff0000;
            color: white;
            border: none;
            outline: none;
            border-radius: 10px;
        }
    }
    }
}
</style>
