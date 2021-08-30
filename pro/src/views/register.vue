<template>
    <div class="register">
        <div class="log_ban">
            <img src="/img/ban.png" alt="">
        </div>

        <div class="lognew">
            <div class="box">
                <div class="use">
                    <input type="text" v-model="mobile" placeholder="请输入手机号">
                </div>
                <div class="pho">
                    <input type="text" v-model="password" placeholder="请输入密码">
                </div>

                <div class="pho_new">
                    <p>找回密码</p>
                    <p @click="$router.push('/login')">注册/验证码</p>
                </div>
                <button @click="logpwd">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        mobile:"",
        password:"",
    };
  },
  mounted() {},
  methods: {
      async logpwd(){
          var {data:res} = await this.$axios.post("/login",{mobile:this.mobile,password:this.password,type:1,client:'1'})
          if(res.code==200){
              this.$router.push("/home")
              return
          }
          console.log(res)
      }
  }
};
</script>

<style scoped lang="scss">
.register {
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
