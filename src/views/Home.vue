<template>
  <div class="home">
    <van-notice-bar :text="noticeTxt" left-icon="volume-o"  mode="closeable" />
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in movieTags" :key="index" :title="item.title">
        <!-- 电影列表 -->
        <MoveiList :list="movieList[item.name]" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import MoveiList from "@/components/MovieList";
import { mapState, mapGetters, mapMutations } from "vuex";
import { stringify } from "querystring";
export default {
  name: "home",
  components: { MoveiList },
  data() {
    return {
      noticeTxt:
        "以免走丢 (^_^)∠※  望各位网友帮忙宣传下本站,可以去经常上的论坛,微博,QQ群等发下本站网址",
      active: 0,
      movieTags: [
        { name: "movie", title: "电影" },
        { name: "tv", title: "电视剧" },
        { name: "show", title: "综艺" },
        { name: "comic", title: "动漫" }
      ],
      movieList: {
        movie: [
          {
            rate: "7.6",
            cover_x: 1500,
            title: "恶人传",
            url: "./img/movies/p2542439493.jpg",
            playable: false,
            cover: "./img/movies/p2555084871.jpg",
            id: "30211551",
            cover_y: 2145,
            is_new: false
          },
          {
            rate: "7.6",
            cover_x: 5000,
            title: "阿丽塔：战斗天使",
            url: "https://movie.douban.com/subject/1652592/",
            playable: true,
            cover: "./img/movies/p2544987866.jpg",
            id: "1652592",
            cover_y: 7413,
            is_new: false
          },
          {
            rate: "7.1",
            cover_x: 1500,
            title: "都是真的",
            url: "https://movie.douban.com/subject/30366382/",
            playable: false,
            cover: "./img/movies/p2542439493.jpg",
            id: "30366382",
            cover_y: 2220,
            is_new: true
          },
          {
            rate: "8.9",
            cover_x: 2000,
            title: "绿皮书",
            url: "https://movie.douban.com/subject/27060077/",
            playable: true,
            cover: "./img/movies/p2549177902.jpg",
            id: "27060077",
            cover_y: 3167,
            is_new: false
          },
          {
            rate: "8.4",
            cover_x: 1944,
            title: "孟买酒店",
            url: "https://movie.douban.com/subject/26794701/",
            playable: false,
            cover: "./img/movies/p2545020183.jpg",
            id: "26794701",
            cover_y: 2880,
            is_new: false
          },
          {
            rate: "8.1",
            cover_x: 3600,
            title: "疾速备战",
            url: "https://movie.douban.com/subject/26909790/",
            playable: false,
            cover: "./img/movies/p2551393832.jpg",
            id: "26909790",
            cover_y: 5550,
            is_new: false
          },
          {
            rate: "6.4",
            cover_x: 4000,
            title: "雷霆沙赞！",
            url: "https://movie.douban.com/subject/2244426/",
            playable: true,
            cover: "./img/movies/p2551249211.jpg",
            id: "2244426",
            cover_y: 5937,
            is_new: false
          },
          {
            rate: "8.0",
            cover_x: 2000,
            title: "小委托人",
            url: "https://movie.douban.com/subject/33404726/",
            playable: false,
            cover: "./img/movies/p2557335459.jpg",
            id: "33404726",
            cover_y: 2865,
            is_new: false
          },
          {
            rate: "8.0",
            cover_x: 5906,
            title: "夏目友人帐",
            url: "https://movie.douban.com/subject/27166442/",
            playable: true,
            cover: "./img/movies/p2546745948.jpg",
            id: "27166442",
            cover_y: 8268,
            is_new: false
          }
        ],
        tv: [
          {
            rate: "8.9",
            cover_x: 1500,
            title: "怪奇物语 第三季",
            url: "https://movie.douban.com/subject/27119156/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558683543.jpg",
            id: "27119156",
            cover_y: 2222,
            is_new: false
          },
          {
            rate: "6.1",
            cover_x: 1889,
            title: "权力的游戏 第八季",
            url: "https://movie.douban.com/subject/26584183/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552503815.jpg",
            id: "26584183",
            cover_y: 2731,
            is_new: false
          },
          {
            rate: "9.1",
            cover_x: 1500,
            title: "性爱自修室 第一季",
            url: "https://movie.douban.com/subject/27594217/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544377943.jpg",
            id: "27594217",
            cover_y: 2222,
            is_new: false
          },
          {
            rate: "9.6",
            cover_x: 1080,
            title: "姿态 第二季",
            url: "https://movie.douban.com/subject/30271840/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555634785.jpg",
            id: "30271840",
            cover_y: 1350,
            is_new: false
          },
          {
            rate: "9.8",
            cover_x: 440,
            title: "瑞克和莫蒂 第三季",
            url: "https://movie.douban.com/subject/26592971/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2453814101.jpg",
            id: "26592971",
            cover_y: 640,
            is_new: false
          },
          {
            rate: "8.8",
            cover_x: 2025,
            title: "神盾局特工 第六季",
            url: "https://movie.douban.com/subject/30222722/",
            playable: false,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555422129.jpg",
            id: "30222722",
            cover_y: 3000,
            is_new: false
          },
          {
            rate: "9.3",
            cover_x: 1800,
            title: "大群 第三季",
            url: "https://movie.douban.com/subject/30238131/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558262776.jpg",
            id: "30238131",
            cover_y: 2700,
            is_new: false
          },
          {
            rate: "9.1",
            cover_x: 600,
            title: "大小谎言 第二季",
            url: "https://movie.douban.com/subject/27195401/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558544696.jpg",
            id: "27195401",
            cover_y: 889,
            is_new: false
          },
          {
            rate: "6.9",
            cover_x: 1024,
            title: "嫁接者",
            url: "https://movie.douban.com/subject/27101873/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561240270.jpg",
            id: "27101873",
            cover_y: 1536,
            is_new: true
          },
          {
            rate: "8.1",
            cover_x: 1013,
            title: "亢奋 第一季",
            url: "https://movie.douban.com/subject/30181462/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2556252082.jpg",
            id: "30181462",
            cover_y: 1500,
            is_new: false
          },
          {
            rate: "9.1",
            cover_x: 1500,
            title: "爱，死亡和机器人 第一季",
            url: "https://movie.douban.com/subject/30424374/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548248276.jpg",
            id: "30424374",
            cover_y: 2222,
            is_new: false
          },
          {
            rate: "8.9",
            cover_x: 1013,
            title: "使女的故事 第三季",
            url: "https://movie.douban.com/subject/30212003/",
            playable: false,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2559470557.jpg",
            id: "30212003",
            cover_y: 1500,
            is_new: false
          }
        ],
        show: [
          {
            rate: "8.6",
            cover_x: 1080,
            title: "乐队的夏天",
            url: "https://movie.douban.com/subject/30357990/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2556110785.jpg",
            id: "30357990",
            cover_y: 1920,
            is_new: false
          },
          {
            rate: "9.1",
            cover_x: 1080,
            title: "这！就是街舞 第二季",
            url: "https://movie.douban.com/subject/30486671/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552553650.jpg",
            id: "30486671",
            cover_y: 1566,
            is_new: false
          },
          {
            rate: "8.3",
            cover_x: 666,
            title: "极速前进 第三十一季",
            url: "https://movie.douban.com/subject/30245368/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553912413.jpg",
            id: "30245368",
            cover_y: 1000,
            is_new: true
          },
          {
            rate: "6.5",
            cover_x: 828,
            title: "地产孖宝 第一季",
            url: "https://movie.douban.com/subject/33374859/",
            playable: false,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551567769.jpg",
            id: "33374859",
            cover_y: 1166,
            is_new: true
          },
          {
            rate: "6.6",
            cover_x: 1772,
            title: "花样新世界",
            url: "https://movie.douban.com/subject/34450827/",
            playable: true,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561248118.jpg",
            id: "34450827",
            cover_y: 2658,
            is_new: true
          },
          {
            rate: "7.5",
            cover_x: 2250,
            title: "向往的生活 第三季",
            url: "https://movie.douban.com/subject/30441625/",
            playable: true,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553367338.jpg",
            id: "30441625",
            cover_y: 4000,
            is_new: false
          },
          {
            rate: "8.7",
            cover_x: 7332,
            title: "我们是真正的朋友",
            url: "https://movie.douban.com/subject/30468808/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555955734.jpg",
            id: "30468808",
            cover_y: 13034,
            is_new: false
          },
          {
            rate: "4.2",
            cover_x: 1059,
            title: "极限挑战 第五季",
            url: "https://movie.douban.com/subject/30488068/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2556238161.jpg",
            id: "30488068",
            cover_y: 1800,
            is_new: false
          },
          {
            rate: "5.7",
            cover_x: 1080,
            title: "中国新说唱 第二季",
            url: "https://movie.douban.com/subject/30357985/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2556109024.jpg",
            id: "30357985",
            cover_y: 1920,
            is_new: false
          },
          {
            rate: "8.9",
            cover_x: 1760,
            title: "奇遇人生",
            url: "https://movie.douban.com/subject/30304024/",
            playable: true,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533929218.jpg",
            id: "30304024",
            cover_y: 2972,
            is_new: false
          },
          {
            rate: "9.3",
            cover_x: 1080,
            title: "忘不了餐厅",
            url: "https://movie.douban.com/subject/30474718/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553826944.jpg",
            id: "30474718",
            cover_y: 1759,
            is_new: false
          },
          {
            rate: "9.3",
            cover_x: 1080,
            title: "声入人心 第一季",
            url: "https://movie.douban.com/subject/30353394/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537774816.jpg",
            id: "30353394",
            cover_y: 1834,
            is_new: false
          }
        ],
        comic: [
          {
            rate: "9.8",
            cover_x: 1442,
            title: "进击的巨人 第三季 Part.2",
            url: "https://movie.douban.com/subject/30353357/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2550184312.jpg",
            id: "30353357",
            cover_y: 2048,
            is_new: false
          },
          {
            rate: "9.0",
            cover_x: 554,
            title: "卡罗尔与星期二",
            url: "https://movie.douban.com/subject/30163813/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545649085.jpg",
            id: "30163813",
            cover_y: 780,
            is_new: false
          },
          {
            rate: "8.3",
            cover_x: 1553,
            title: "某科学的一方通行",
            url: "https://movie.douban.com/subject/30337233/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2557775680.jpg",
            id: "30337233",
            cover_y: 2200,
            is_new: true
          },
          {
            rate: "7.1",
            cover_x: 905,
            title: "致曾为神之众兽",
            url: "https://movie.douban.com/subject/30457987/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558568793.jpg",
            id: "30457987",
            cover_y: 1280,
            is_new: true
          },
          {
            rate: "8.6",
            cover_x: 1500,
            title: "全缉毒狂潮",
            url: "https://movie.douban.com/subject/30419713/",
            playable: false,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2559977207.jpg",
            id: "30419713",
            cover_y: 2122,
            is_new: true
          },
          {
            rate: "8.3",
            cover_x: 565,
            title: "新石纪",
            url: "https://movie.douban.com/subject/30377498/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548041043.jpg",
            id: "30377498",
            cover_y: 800,
            is_new: false
          },
          {
            rate: "8.4",
            cover_x: 724,
            title: "女高中生的浪费青春",
            url: "https://movie.douban.com/subject/30446496/",
            playable: true,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551500657.jpg",
            id: "30446496",
            cover_y: 1024,
            is_new: false
          },
          {
            rate: "8.8",
            cover_x: 1407,
            title: "骚动时节的少女们啊",
            url: "https://movie.douban.com/subject/30377707/",
            playable: false,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558335133.jpg",
            id: "30377707",
            cover_y: 2000,
            is_new: true
          },
          {
            rate: "7.6",
            cover_x: 713,
            title: "炎炎消防队",
            url: "https://movie.douban.com/subject/30377497/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554344995.jpg",
            id: "30377497",
            cover_y: 1000,
            is_new: false
          },
          {
            rate: "7.7",
            cover_x: 707,
            title: "一拳超人 第二季",
            url: "https://movie.douban.com/subject/26882339/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549894230.jpg",
            id: "26882339",
            cover_y: 1000,
            is_new: false
          },
          {
            rate: "9.1",
            cover_x: 750,
            title: "冰海战记",
            url: "https://movie.douban.com/subject/30174419/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531708210.jpg",
            id: "30174419",
            cover_y: 1058,
            is_new: true
          },
          {
            rate: "8.6",
            cover_x: 1500,
            title: "鬼灭之刃",
            url: "https://movie.douban.com/subject/30210221/",
            playable: true,
            cover:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551222097.jpg",
            id: "30210221",
            cover_y: 2121,
            is_new: false
          },
          {
            rate: "9.4",
            cover_x: 564,
            title: "擅长捉弄的高木同学 第二季",
            url: "https://movie.douban.com/subject/30428368/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555053834.jpg",
            id: "30428368",
            cover_y: 800,
            is_new: true
          },
          {
            rate: "9.5",
            cover_x: 650,
            title: "海贼王",
            url: "https://movie.douban.com/subject/1453238/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2197828404.jpg",
            id: "1453238",
            cover_y: 887,
            is_new: false
          },
          {
            rate: "7.9",
            cover_x: 700,
            title: "流汗吧！健身少女",
            url: "https://movie.douban.com/subject/30433614/",
            playable: true,
            cover:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2557226554.jpg",
            id: "30433614",
            cover_y: 990,
            is_new: false
          }
        ]
      }
    };
  },
  computed: {
    localName() {
      return "good";
    },
    ...mapState(["count", "name"]),
    ...mapGetters(["nowTime"])
  },
  methods: {
    add() {
      this.$store.commit("increment", { count: 10 });
    },
    jumpDetail(item) {
      console.log(item);
      this.$toast({
        type: "loading",
        message: "即将跳转"
      });
      this.$router.push("movieDetail");
      this.$toast.clear();
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  /deep/ .van-tab--active {
    color: salmon;
  }
}
</style>


