<template>
    <div class="home">
        <!-- 1.头部内容 -->
        <div class="head">
            <div class="left">
                <van-icon name="balance-list" style="font-size:54px;" color="#ee0a24"/>
            </div>
            <div class="center" style="width:60%"><van-search
                shape="round"
                placeholder="请输入搜索关键词"
            /></div>
            <div class="right"><van-icon name="invition" style="font-size:54px;"/></div>
        </div>

        <!-- .轮播图部分 -->
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>

        <!-- 3.教师信息 -->
        <div class="t_news">
            <div class="tit">
                <p class="deep">资深教师</p>
                <p class="more">更多<van-icon name="arrow" /></p>
            </div>
            <div class="new" v-for="(item,index) in t_list" :key="index"> 
                <van-card
                    :price="item.introduction"
                    :title="item.teacher_name"
                    :thumb="item.teacher_avatar"
                    />
            </div>
        </div>

         <!-- 3.教师信息 -->
        <div class="n_news">
            <div class="tit">
                <p class="deep">推荐课程</p>
                <p class="more">更多<van-icon name="arrow" /></p>
            </div>
            <div class="new" v-for="(item,index) in b_list" :key="index"> 
                <van-card
                    :price="item.introduction"
                    :title="item.title"
                    :thumb="item.cover_img"
                    />
            </div>
        </div>

          <!-- 5.名师-->
        <div class="m_news">
            <div class="tit">
                <p class="deep">名师</p>
                <p class="more">更多<van-icon name="arrow" /></p>
            </div>
            <div class="new" v-for="(item,index) in c_list" :key="index"> 
                <van-card
                    :price="item.introduction"
                    :title="item.teacher_name"
                    :thumb="item.teacher_avatar"
                    />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        t_list:[],
        b_list:[],
        c_list:[]
    };
  },
  mounted() {
    this.getbanner();
    this.getteacher()
  },
  methods: {
    // 获取首页轮播图
    async getbanner() {
      var { data: res } = await this.$axios.get("/banner");
    },

    //获取讲师数据
    async getteacher(){
        var {data:res} = await this.$axios.get('/recommend/appIndex')
        this.t_list=res.data[0].list
        this.b_list=res.data[1].list
        this.c_list=res.data[2].list
    }
  }
};
</script>


<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background: #eee;
  padding-bottom: 55px;
  box-sizing: border-box;
  .head {
    width: 100%;
    height: 13.3vh;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .banner{
      width: 100%;
      height: 250px;
       .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 250px;
        text-align: center;
        background-color: #39a9ed;
    }
  }
  .t_news{
      width: 100%;
      margin-top: 20px;
      .tit{
          display: flex;
          justify-content: space-between;
          padding: 15px;
          align-items: center;
          .deep{
              font-size: 24px;
              border-left: 2px solid red;
              padding-left: 10px;
              box-sizing: border-box;
          }
          .more{
              font-size: 20px;
              display: flex;
              align-items: center;
          }
      }
      .new{
          width: 80%;
          margin: auto;
          margin-top: 30px;
          background: #fff;
      }
  }

  .m_news{
      width: 100%;
      margin-top: 20px;
      .tit{
          display: flex;
          justify-content: space-between;
          padding: 15px;
          align-items: center;
          .deep{
              font-size: 24px;
              border-left: 2px solid red;
              padding-left: 10px;
              box-sizing: border-box;
          }
          .more{
              font-size: 20px;
              display: flex;
              align-items: center;
          }
      }
      .new{
          width: 80%;
          margin: auto;
          margin-top: 30px;
          background: #fff;
      }
  }

   .n_news{
      width: 100%;
      margin-top: 20px;
      .tit{
          display: flex;
          justify-content: space-between;
          padding: 15px;
          align-items: center;
          .deep{
              font-size: 24px;
              border-left: 2px solid red;
              padding-left: 10px;
              box-sizing: border-box;
          }
          .more{
              font-size: 20px;
              display: flex;
              align-items: center;
          }
      }
      .new{
          width: 80%;
          margin: auto;
          margin-top: 30px;
          background: #fff;
      }
  }
}
</style>
