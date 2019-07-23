<template>
  <div class="movieList">
    <!-- 电影列表 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul class="movieList">
        <li v-for="(movie,index) in movieList" :key="movie.id" @click="jumpDetail(movie)">
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
    </van-pull-refresh>
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
    return {
      isLoading: false,
      movieCopyList: []
    };
  },
  computed: {
    movieList() {
      return this.movieCopyList.length ? this.movieCopyList : this.list;
    }
  },
  methods: {
    onRefresh() {
      let arr = [],
        oldList = this.list.length ? this.list : this.movieCopyList;
      while (oldList.length) {
        arr.push(...oldList.splice(Math.random() * oldList.length, 1));
      }
      this.movieCopyList = JSON.parse(JSON.stringify(arr));
      this.$toast({
        duration: 300,
        message: "刷新成功"
      });
      this.isLoading = false;
    }
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
    .van-col {
      height: 20px;
      line-height: 20px;
    }
    .new {
      background: seagreen;
      color: #fff;
      white-space: nowrap;
      transform: scale(0.8);
      padding: 0 2px;
      width: auto;
    }
    .title {
      color: rgb(136, 165, 245);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
    }
    .rate {
      position: absolute;
      top: 5px;
      right: 5px;
      font-weight: bold;
      color: #fa8072;
    }
  }
}
</style>
