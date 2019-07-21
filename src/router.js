import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomeData from "./views/HomeData.vue";
import Movie from "./views/Movie.vue";
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
      path: "/movieDetail",
      name: "movieDetail",
      component: MovieDetail
    }
  ]
});
