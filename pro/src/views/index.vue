<template>
    <div class="index">
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" route>
            <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="manager" to="/course">课程</van-tabbar-item>
            <van-tabbar-item icon="info" to="/info">资讯</van-tabbar-item>
            <van-tabbar-item icon="column" to="/book">图书</van-tabbar-item>
            <van-tabbar-item icon="manager" to="mine">我的</van-tabbar-item>
        </van-tabbar>
         <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0
        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>
