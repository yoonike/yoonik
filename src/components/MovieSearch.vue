<template>
  <div class="movieSearch">
    <van-tabs v-for="(searchItem,searchIndex) of searchList" :key="searchIndex">
      <van-tab disabled :title="searchItem.title"></van-tab>
      <van-tab title="全部"></van-tab>
      <van-tab
        v-for="(item,index) of searchBarList(searchItem.name)"
        :key="index"
        :title="item.name"
      ></van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "movieSearch",
  props: {
    cateList: {
      // 影视类型
      type: Array,
      default() {
        return [
          { name: "动作片", id: "cate1" },
          { name: "喜剧片", id: "cate2" },
          { name: "爱情片", id: "cate3" },
          { name: "科幻片", id: "cate4" },
          { name: "恐怖片", id: "cate5" },
          { name: "剧情片", id: "cate6" },
          { name: "战争片", id: "cate7" },
          { name: "微电影", id: "cate8" },
          { name: "纪录片", id: "cate9" }
        ];
      }
    },
    areaList: {
      // 影视地区
      type: Array,
      default() {
        return [
          { name: "大陆", id: "area1" },
          { name: "香港", id: "area2" },
          { name: "台湾", id: "area3" },
          { name: "美国", id: "area4" },
          { name: "法国", id: "area5" },
          { name: "英国", id: "area6" },
          { name: "日本", id: "area7" },
          { name: "韩国", id: "area8" },
          { name: "德国", id: "area9" },
          { name: "泰国", id: "area10" },
          { name: "印度", id: "area11" },
          { name: "意大利", id: "area12" },
          { name: "西班牙", id: "area13" }
        ];
      }
    },
    dateList: {
      type: Array,
      default() {
        let now = new Date().getFullYear(),
          yearArray = [];
        for (let i = 0; i < 10; i++) {
          yearArray.push({
            name: String(now - i),
            id: String(now - i)
          });
        }
        return JSON.parse(JSON.stringify(yearArray));
      }
    }
  },
  computed: {},
  data() {
    return {
      active: 0,
      isFixed: false, //是否固定底部
      isShow: false, //是否显示指示器
      searchList: [
        {
          name: "cate",
          title: "按类型",
          active: 0
        },
        {
          name: "area",
          title: "按地区",
          active: 0
        },
        {
          name: "date",
          title: "按年份",
          active: 0
        }
      ]
    };
  },
  methods: {
    searchBarList(name) {
      return this[name + "List"];
    }
  }
};
</script>
<style lang="less" scoped>
.movieSearch {
  /deep/ .van-tabbar {
    justify-content: flex-start;
  }
}
</style>
