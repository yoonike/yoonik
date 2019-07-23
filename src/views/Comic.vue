<template>
  <div class="comic">
    <!-- 影视筛选 -->
    <MovieSearch />
    <MovieList :list="movieList" />
  </div>
</template>
<script>
import MovieSearch from "@/components/MovieSearch";
import MovieList from "@/components/MovieList";
export default {
  name: "comic",
  components: { MovieSearch, MovieList },
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
