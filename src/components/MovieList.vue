<template>
  <div class="movieList">
    <!-- 电影列表 -->
    <ul class="movieList">
      <li v-for="(movie,index) in list" :key="movie.id" @click="jumpDetail(movie)">
        <van-image height="200px" :src="movie.cover" />
        <van-row>
          <!-- 是否最新 -->
          <van-col span="2" class="new" v-if="movie.is_new">新</van-col>
          <!-- 电影标题 -->
          <van-col span="18" class="title">{{(index+1)+'.'+movie.title}}</van-col>
          <!-- 电影评分 -->
          <van-col span="4" class="rate">{{movie.rate}}</van-col>
        </van-row>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "movieList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.movieList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  & > li {
    width: 30%;
    margin: 10px 0;
    position: relative;
    .new {
      background: seagreen;
      color: #fff;
      white-space: nowrap;
      transform: scale(0.8);
      width: auto;
    }
    .title {
      color: rgb(136, 165, 245);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .rate {
      position: absolute;
      top: 5px;
      right: 5px;
      font-weight: bold;
      color: salmon;
    }
  }
}
</style>
