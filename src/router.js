import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import HomeData from "./views/HomeData.vue";
import Movie from "./views/Movie.vue";
import TV from "./views/TV.vue";
import Show from "./views/Show.vue";
import Comic from "./views/Comic.vue";
import MovieDetail from "./views/MovieDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/homedata",
      name: "homeData",
      component: HomeData
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/movie",
      name: "movie",
      component: Movie
    },
    {
      path: "/tv",
      name: "tv",
      component: TV
    },
    {
      path: "/show",
      name: "show",
      component: Show
    },
    {
      path: "/comic",
      name: "comic",
      component: Comic
    },
    {
      path: "/movieDetail",
      name: "movieDetail",
      component: MovieDetail
    }
  ]
});
