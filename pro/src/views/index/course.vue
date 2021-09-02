<template>
    <div class="course">
        <iscroll-view class="croll-view" @pullUp="pullUp">
         <div class="tea" v-for="(item,index) in list" :key="index" @click="go(item.id)">
                <van-card :thumb="item.avatar" :title="item.real_name">
                    <template #bottom>
                        <p>{{item.introduction}}</p>
                    </template>
                </van-card>

         </div>
        </iscroll-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      page: 1,
      limit: 10
    };
  },
  mounted() {
    this.getcourse();
  },
  methods: {
    async getcourse() {
      var { data: res } = await this.$axios.get("/teacher/search/attrs");
      this.list = res.data.list;
      console.log(this.list);
    },
    pullUp() {
    },
    go(id){
      this.$router.push("/detail?id="+id)
    }
  }
};
</script>

<style scoped lang="scss">
.course {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f7f8fa;

  .croll-view {
    touch-action: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
      padding-bottom: 60px;
  box-sizing: border-box;
    .tea{
        background: #fff;
        width: 80%;
        margin: 10px auto;
    }
  }
}
</style>
