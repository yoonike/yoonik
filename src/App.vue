<template>
  <div id="app">
    <van-row type="flex" justify="space-around">
      <van-col
        v-for="(item,index) in tags"
        :key="index"
        :span="Math.ceil(24/tags.length)"
        :class="{active:index==active}"
      >
        <router-link :to="item.name" @click="clickTag(index)">{{item.title}}</router-link>
      </van-col>
    </van-row>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      active: 0,
      tags: [
        { title: "首页", name: "/" },
        { title: "电影", name: "movie" },
        { title: "电视剧", name: "movie1" },
        { title: "综艺", name: "movie4" },
        { title: "动漫", name: "movie2" }
      ]
    };
  },
  methods: {
    clickTag(index) {
      this.active = index;
      console.log("index", index);
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .van-row {
    background-color: #252525;
    line-height: 40px;
    height: 40px;
    a {
      color: #fff;
      display: block;
    }
    .active {
      a {
        color: salmon;
      }
    }
  }
}
</style>
