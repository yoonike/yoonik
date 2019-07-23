<template>
  <div class="home">
    <van-notice-bar :text="noticeTxt" left-icon="volume-o" mode="closeable" />
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in movieTags" :key="index" :title="item.title">
        <!-- 电影列表 -->
        <MoveiList :list="movieList[item.name]" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import MoveiList from "@/components/MovieList";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "home",
  components: { MoveiList },
  data() {
    return {
      noticeTxt:
        "以免走丢 (^_^)∠※  望各位网友帮忙宣传下本站,可以去经常上的论坛,微博,QQ群等发下本站网址",
      active: 0,
      movieTags: [
        { name: "movie", title: "电影" },
        { name: "tv", title: "电视剧" },
        { name: "show", title: "综艺" },
        { name: "comic", title: "动漫" }
      ]
    };
  },
  created() {},
  computed: {
    ...mapState(["movieList"])
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
.home {
  /deep/ .van-tab--active {
    color: salmon;
  }
}
</style>


