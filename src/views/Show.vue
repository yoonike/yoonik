<template>
  <div class="show">
    综艺筛选组件
    <MovieList :list="movieList" />
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
export default {
  name: "show",
  components: { MovieList },
  data() {
    return {};
  },
  computed: {
    movieList() {
      return this.$store.state.movieList.show;
    }
  }
};
</script>
