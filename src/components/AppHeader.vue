<template>
  <div class="appHeader">
    <van-row type="flex" justify="space-between">
      <van-col span="4">
        <van-image :src="logo" />
      </van-col>
      <van-col span="12">
        <van-search placeholder="请输入搜索关键词" v-model="movieName" />
      </van-col>
      <van-col span="8">
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
      logo: "./img/icons/mstile-150x150.png",
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
  /deep/ .van-search {
    padding: 0;
  }
  /deep/ .van-row {
    height: 100%;
    .van-col {
      height: 100%;
      background: sandybrown;
      .van-image {
        height: 100%;
      }
    }
  }
}
</style>
