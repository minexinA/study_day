<template>
    <div class="detail">
        <div class="teacher_new">
            <van-card :title="obj.real_name" :thumb="obj.avatar"/>
        </div>
        <div class="box">
            <van-tabs v-model="active">
                <van-tab title="讲师介绍">
                    <p style="font-size:22px;color:#eee;font-weight:900;line-height:45px;margin-left:15px">老师简介</p>
                    <p style="line-height:45px;margin-left:15px;font-size:26px">{{obj.introduction}}</p>
                </van-tab>
                <van-tab title="主要课程">
                    <div style="width:100%;heigth:600px">
                        <van-card
                            v-for="(item,index) in list"
                            :key="index"
                            :thumb="item.cover_img"
                            :title="item.title"
                            @click="go(item.id)"
                        >
                        <template #bottom>{{item.sales_num}}人已购买</template>
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
      obj: {},
      active: 0,
      list: [],
      t_id:0
    };
  },
  mounted() {
    this.getdetail();
    this.getclass();
  },
  methods: {
    async getdetail() {
      this.t_id = this.$route.query.id;
      var { data: res } = await this.$axios.get("/teacher/" + this.t_id);
      this.obj = res.data.teacher;
    },
    async getclass() {
      var { data: res } = await this.$axios.post("/teacher/mainCourse?teacher_id="+this.t_id);
      this.list = res.data.list;
      console.log(this.list);
    },
    go(id){
        this.$router.push("/classnew?id="+id)
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  width: 100%;
  overflow: hidden;
  .teacher_new {
    width: 80%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin: auto;
    .van-card {
      width: 80%;
      background: #fff;
    }
  }
}
</style>
