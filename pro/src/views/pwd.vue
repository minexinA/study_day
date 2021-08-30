<template>
    <div class="pwd">
        <div class="box">
                    <div class="lognew">
            <div class="box">
                <div class="use">
                    <input type="text" v-model="phone"  placeholder="请输入手机号">
                    <p @click="getCode">获取验证码</p>
                </div>
                <div class="pho">
                    <input type="text" v-model="sms"  placeholder="请输入验证码">
                </div>
                <div class="sure">
                    <input type="text" v-model="pwd"  placeholder="请输入密码">
                </div>
                <button @click="setpwd">确定</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        phone:"",
        sms:"",
        pwd:""
    };
  },
  mounted() {},
  methods: {
      async getCode(){
          var {data:res} = await this.$axios.post("/smsCode",{mobile:this.phone,sms_type:'login'})

      },
      async setpwd(){
          var {data:res} = await this.$axios.post("/password",{mobile:this.phone,password:this.pwd,sms_code:this.sms})
          if(res.code==200){
              this.$store.state.token=''
              this.$store.state.mobile=''
              this.$router.push('/register')
              return
          }
      }
  }
};
</script>

<style scoped lang="scss">
.pwd {
  width: 100%;
  height: 650px;
  background: #f7f8fa;
  .box {
    position: relative;
    width: 100%;
    height: 300px;
    background: #fff;
    .lognew {
      width: 100%;
      overflow: hidden;
      .box {
        width: 80%;
        margin: auto;
        .use {
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            color: red;
          }
          input {
            width: 80%;
            height: 100%;
            border: none;
            font-size: 20px;
          }
        }
        .pho {
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          align-items: center;

          input {
            width: 80%;
            height: 100%;
            border: none;
            font-size: 20px;
          }
        }
        .sure{
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          align-items: center;

          input {
            width: 80%;
            height: 100%;
            border: none;
            font-size: 20px;
          }
        }
        button {
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
}
</style>
