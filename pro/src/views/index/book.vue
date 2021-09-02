<template>
    <div class="book">
         <div class="head">
            <van-tabs v-model="active">
                <van-tab :title="item.name" v-for="(item,index) in info" :key="index">
                    <div v-show="index==0">111</div>
                    <div v-show="index==1">222</div>
                    <div v-show="index==2">333</div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info:[],
            active:0
        };
    },
    mounted() {
        this.getinfo()
    },
    methods: {
        async getinfo(){
            var {data:res} = await this.$axios.get("/book/classify")
            this.info=res.data
            console.log(res)
        }
    },
};
</script>

<style lang="scss" scoped>
.book{
    width:100%;
    .head{
        width: 100%;
    }
}
</style>
