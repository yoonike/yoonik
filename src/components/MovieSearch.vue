<template>
  <div class="movieSearch">
    <van-tabs>
      <van-tab v-for="(item,index) in cate" :key="index" :title="'item.name ' + index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "movieSearch",
  props: {
    cate: {
      // 影视类型
      type: Array,
      default() {
        return [];
      }
    },
    area: {
      // 影视地区
      type: Array,
      default() {
        return [];
      }
    },
    date: {
      type: Array,
      default() {
        let now = new Date().getFullYear();
        return [now, now - 10];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
