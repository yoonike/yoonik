<template>
  <div class="tv">
    <!-- 影视筛选 -->
    <MovieSearch />
    <MovieList :list="movieList" />
  </div>
</template>
<script>
import MovieSearch from "@/components/MovieSearch";
import MovieList from "@/components/MovieList";
export default {
  name: "tv",
  components: { MovieSearch, MovieList },
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
