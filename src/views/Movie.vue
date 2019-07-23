<template>
  <div class="movie">
    筛选条件组件
    <!-- 电影列表 -->
    <MovieList :list="movieList" />
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
export default {
  name: "movie",
  components: { MovieList },
  data() {
    return {};
  },
  computed: {
    movieList() {
      return this.$store.state.movieList.movie;
    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
</style>
