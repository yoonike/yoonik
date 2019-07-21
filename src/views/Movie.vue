<template>
  <div class="movie">
    电影
    <!-- 电影列表 -->
    <MovieList />
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
export default {
  name: "movie",
  components: { MovieList },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
</style>
