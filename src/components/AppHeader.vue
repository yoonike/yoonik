<template>
  <div class="appHeader">
    <van-row type="flex" justify="space-between">
      <van-col span="4">
        <van-image :src="logo" />
      </van-col>
      <van-col span="16">
        <van-search placeholder="请输入搜索关键词" v-model="movieName" />
      </van-col>
      <van-col span="4">
        <van-icon name="clock-o" />
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "appHeader",
  data() {
    return {
      logo: "./img/avatar.png",
      movieName: "" //电影名称
    };
  }
};
</script>

<style lang="less" scoped>
.appHeader {
  height: 40px;
  line-height: 40px;
  background: salmon;
  /deep/ .van-row {
    height: 100%;
    .van-search {
      padding: 0;
      height: 100%;
    }
    .van-col {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > div {
        width: 100%;
      }
      .van-image {
        height: 100%;
        img {
          display: inline-block;
          width: auto;
          border-radius: 50%;
        }
      }
      .van-icon {
        font-size: 26px;
      }
    }
  }
}
</style>
