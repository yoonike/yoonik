<template>
  <div class="comic">
    动漫筛选组件
    <MovieList :list="movieList" />
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
export default {
  name: "comic",
  components: { MovieList },
  data() {
    return {};
  },
  computed: {
    movieList() {
      return this.$store.state.movieList.comic;
    }
  }
};
</script>
