<template>
  <div id="app">
    <AppHeader />
    <van-row type="flex" justify="space-around">
      <van-col
        v-for="(item,index) in tags"
        :key="index"
        :span="Math.ceil(24/tags.length)"
        :class="{active:$route.fullPath.match(item.name)}"
      >
        <span @click="clickTag(index,item)">{{item.title}}</span>
      </van-col>
    </van-row>
    <!-- <van-tabbar
      route
      v-model="active"
      active-color="#fa8072"
      inactive-color="#07c160"
      @change="clickTag"
    >
      <van-tabbar-item
        v-for="(item,index) in tags"
        :key="index"
        replace
        :to="item.name"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>-->
    <router-view />
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import { mapAction } from "vuex";
export default {
  name: "app",
  components: { AppHeader },
  data() {
    return {
      tags: [
        { title: "首页", name: "home" },
        { title: "电影", name: "movie" },
        { title: "电视剧", name: "tv" },
        { title: "综艺", name: "show" },
        { title: "动漫", name: "comic" }
      ]
    };
  },
  created() {
    this.getMovieList();
  },
  methods: {
    getMovieList() {
      // 获取电影资源
      this.$http.get("./movie.json").then(res => {
        // 同步vuex
        this.$toast({
          duration: 300,
          type: "success",
          message: "加载成功"
        });
        this.$store.dispatch("setMovieList", res.data);
      });
    },
    clickTag(index, item) {
      this.$router.push(item.name);
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
    a,
    span {
      color: #fff;
      display: block;
    }
    .active {
      a,
      span {
        color: #fa8072;
      }
    }
  }
}
</style>
