<template>
    <div class="info">
       <div class="head">
           <van-tabs v-model="active" @click="change">
             <van-tab title="全部">
                 <van-card
                 v-for="item in list" :key="item.id"
                 :thumb="item.thumb_img">
                 <template #title>
                        <p style="margin-top:8px;font-size:20px">{{item.title}}</p>
                    </template>
                    <template #desc>
                        <p style="color:gray;margin-top:8px">{{item.description}}</p>
                    </template>
                 </van-card>
             </van-tab>
             <van-tab :title="item.name" v-for="(item,index) in info" :key="index" :name="item.id">
                 <div>
                     <van-card
                     v-for="item in sonCate"
                     :key="item.id"
                     :thumb="item.thumb_img"
                     >
                        <template #title>
                        <p style="margin-top:8px;font-size:20px">{{item.title}}</p>
                    </template>
                    <template #desc>
                        <p style="color:gray;margin-top:8px">{{item.description}}</p>
                    </template>
                     </van-card>
                 </div>
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
            active:0,
            list:[],
            sonCate:[]
        };
    },
    async mounted() {
        this.getinfo()
        var {data:res} = await this.$axios.post("/information/index?classify_id"+'0')
        this.list=res.data.list
    },
    methods: {
        async getinfo(){
            var {data:res} = await this.$axios.get("/information/classify")
            this.info = res.data
        },
        async change(name){
            var {data:res} = await this.$axios.post("/information/index?classify_id="+name)
            this.sonCate=res.data.list
            console.log(res)
        }
    },
};
</script>

<style lang="scss" scoped>
.info{
    width:100%;
    .head{
        width: 100%;
    }
}
</style>

