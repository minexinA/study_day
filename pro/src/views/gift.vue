<template>
    <div class="gift">
        <div class="gitban">
            <div class="box">
                 <div class="im">
                    <van-image
                        round
                        width="120px"
                        height="120px"
                        src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    />
                    <div>
                        <b v-html="$store.state.mobile" style="color:white;font-size:20px;margin-left:20px;"></b>
                        <p style="color:white;margin-left:40px;font-size:18px;margin-top:10px;">积分：{{$store.state.num}}</p>
                    </div>
                     
                </div>
                <p><van-tag plain  type="primary" size="large" round style="background:none;color:white">签到规则</van-tag></p>
            </div>
        </div>
        <div class="gnaroter">
            <van-calendar :poppable="false" :show-confirm="false">

            </van-calendar>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show:true
        };
    },
    mounted() {
        this.getnum()
    },
    methods: {
        async getnum(){
            var date = new Date()
            var y = date.getFullYear()
            var m = date.getMonth()+1
            var day = date.getDate()
            var today = y+'-'+m+'-'+day
            console.log(y+'-'+m+'-'+day)
            var{ data:res }= await this.$axios.get('/user/integral/signRecord?date='+today+'&')
            console.log(res)
            this.$store.commit("getnum",res.data.length)
        }

    },
};
</script>

<style scoped lang="scss">
.gift{
    width: 100%;
    position: relative;
    background: #eee;
    height: 600px;
    .gitban{
    width: 100%;
    height: 300px;
    background: red;
    .box{
        width: 100%;
        height: 130px;
        border: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px;
        box-sizing: border-box;
        .im{
            width: 400px;
            height: 100%;
            display: flex;
            justify-content:start;
            align-items: center;
        }
    }
    }
    .gnaroter{
        position: absolute;
        top: 150px;
        left: 10%;
        width: 80%;
        background: #fff;
        height: 400px;
        box-shadow: 8px 8px 80px #ddd;
        border-radius: 10px;
    }

}

</style>
