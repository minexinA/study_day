<template>
    <div class="classnew">
        <div class="classimg">
            <img :src="classobj.cover_img" />
        </div>
        <div class="cont">
            <p class="tit">{{classobj.title}}</p>
            <p class="lot">剩余名额：{{classobj.stock}}</p>
            <p class="lot">报名截止时间：{{classobj.start_play_year}}.07.15 00:00</p>
            <p class="lot">开课时间：2021/07/05 00:00 - 2021/07/06 00:00</p>
            <p class="lot">开课地点：{{classobj.province_name}}{{classobj.district_name}}{{classobj.address}}</p>
        </div>

        <div class="team">
            <p style="font-size:18px;padding-left:8px;box-sizing:border-box;line-height:40px">教学团队：
                <ul>
                    <li v-for="(item,index) in team" :key="index">
                            <img :src="item.teacher_avatar" />
                        <p>{{item.teacher_name}}</p>
                    </li>
                </ul>
            </p>
        </div>

        <van-tabs v-model="active" scrollspy sticky style="border-bottom:1px solid #ddd;">
            <van-tab title="课程介绍" style="height:200px;background:#fff;margin-top:2px">
                <p>课程大纲</p>
            </van-tab>
            <van-tab title="课程大纲" style="height:200px;background:#fff;margin-top:10px">
                <p>课程介绍</p>
                <p>{{tit.title}}</p>
            </van-tab>
            <van-tab title="课程评价" style="background:#fff;margin-top:10px;padding:15px;box-sizing:border-box;
                display:flex;justify-content:center;align-items:center;">
                <img src="/img/book.png" style="width:200px;height:200px"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  data() {
    return {
      classid: 0,
      classobj: {},
      team: [],
      active:0,
      tit:"",
    };
  },
  mounted() {
    this.classid = this.$route.query.id;
    this.getcalssnew();
    this.getcont()

    let date = new Date(1625414400 * 1000);

    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let day = date.getDate();
  },
  methods: {
    async getcalssnew() {
      var { data: res } = await this.$axios.get(
        "/courseInfo/basis_id=" + this.classid
      );
      this.classobj = res.data.info;
      this.team = res.data.teachers;
    },
    async getcont(){
        var {data:res} = await this.$axios.post("/courseChapter?id="+this.classid)
        this.tit=res.data[0]
        console.log(res)
    }
  }
};
</script>

<style scoped lang="scss">
.classnew {
  width: 100%;
  background: #f0f2f5;
  padding-bottom: 20px;
  box-sizing: border-box;
  .classimg {
    width: 100%;
    height: 300px;
    background: #f0f2f5;
    img {
      width: 60%;
      height: 100%;
    }
  }
  .cont {
    width: 100%;
    height: 200px;
    background: #fff;
    .tit {
      font-size: 20px;
      padding-left: 10px;
      box-sizing: border-box;
      line-height: 30px;
    }
    .lot {
      font-size: 18px;
      color: gray;
      padding-left: 10px;
      box-sizing: border-box;
      line-height: 30px;
    }
  }
  .team {
    width: 100%;
    height: 200px;
    background: #fff;
    margin-top: 20px;
    ul {
      width: 100%;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      align-items: center;
      li {
        width: 20%;
        img {
          width: 60px;
          height: 60px;
          display: block;
          margin: auto;
          border-radius: 50%;
        }
        p {
          text-align: center;
        }
      }
    }
  }
  .van-tabs__nav{
      border-bottom: 1px solid #ddd;
  }
}
</style>
