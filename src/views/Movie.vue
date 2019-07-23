<template>
  <div class="movie">
    <!-- 影视筛选 -->
    <MovieSearch />
    <!-- 电影列表 -->
    <MovieList :list="movieList" />
  </div>
</template>
<script>
import MovieSearch from "@/components/MovieSearch";
import MovieList from "@/components/MovieList";
export default {
  name: "movie",
  components: { MovieSearch, MovieList },
  data() {
    return {};
  },
  computed: {
    movieList() {
      return this.$store.state.movieList.movie;
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
