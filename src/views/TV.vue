<template>
  <div class="tv">
    电视剧筛选组件
    <MovieList :list="movieList" />
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
export default {
  name: "tv",
  components: { MovieList },
  data() {
    return {};
  },
  computed: {
    movieList() {
      return this.$store.state.movieList.tv;
    }
  }
};
</script>
