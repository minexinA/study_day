<template>
    <div class="set">
        <div class="box">
            <van-cell title="设置密码" is-link style="margin-top:0px" @click="$router.push('/pwd')"/>
            <van-cell title="注销账号" is-link style="margin-top:0px"/>
            <button>退出登录</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.set {
  width: 100%;
  height: 600px;
  background: #f7f8fa;
  .box {
    position: relative;
    width: 100%;
    height: 300px;
    background: #fff;
    .van-cell {
      margin-top: 15px;
      height: 65px;
    }
    button{
        position: absolute;
        bottom: 20px;
        width: 80%;
        height: 60px;
        border: none;
        outline: none;
        background: red;
        color: white;
        font-size: 20px;
        left: 40px;
    }
  }
}
</style>
