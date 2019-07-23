<template>
  <div class="movieDetail">
    <!-- 居中 -->
    <van-row type="flex" justify="center">
      <van-col span="10">
        <van-image :src="src" />
      </van-col>
      <van-col class="info" span="14">
        <van-row type="flex">{{title}}</van-row>
        <van-row type="flex">状态：BD英语中字/BD英语韩字</van-row>
        <van-row type="flex">导演：F·加里·格雷</van-row>
        <van-row
          type="flex"
        >主演：克里斯·海姆斯沃斯 / 泰莎·汤普森 / 丽贝卡·弗格森 / 库梅尔·南贾尼 / 拉菲·斯波 / 艾玛·汤普森 / 连姆·尼森 / 戴维娜·西塔拉姆 / 纳西尔·贾玛 / 维克托里娅·菲斯 / 佩内洛普·卡普迪雅 / 斯蒂芬·怀特 / 安纳托·陶布曼 / 露丝·霍洛克斯 / 贝恩·科拉科 / 马西·哈里尔 / 哈廷·帕特尔 / 通恰伊·古奈什 / 艾德里安·阿尔瓦拉多 / 史蒂芬·萨姆森 / 曼迪娅·弗罗里 / 黄渤 / 伊隆·马斯克</van-row>
        <van-row type="flex">
          <van-col span="8">
            <van-tag type="success">科幻</van-tag>
          </van-col>
          <van-col span="8">
            <van-tag type="success">美国</van-tag>
          </van-col>
          <van-col span="8">
            <van-tag type="success">2019</van-tag>
          </van-col>
        </van-row>
        <van-row type="flex">
          <van-button type="primary">立即播放</van-button>
        </van-row>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-between">
      <van-col>播放地址</van-col>
      <van-col>
        <van-field
          readonly
          clickable
          label="切换来源"
          :value="value"
          placeholder="选择线路"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </van-col>
    </van-row>
    <van-row type="flex">
      <van-button type="primary">立即播放</van-button>
    </van-row>
    <van-row type="flex" justify="space-between">
      <van-col>剧情介绍</van-col>
      <van-col>更新时间：2019-07-23</van-col>
    </van-row>
    <p
      class="des"
    >全球最具影响力的经典科幻IP《黑衣人》全面升级！科幻电影之父史蒂文·斯皮尔伯格联手《速度与激情8》导演F·加里·格雷，金牌班底鼎力巨献！英国黑衣人总部王牌探员H（锤哥）与新晋探员M（泰莎·汤普森）在阻止外星团伙入侵的过程中意外铲除了隐藏在黑衣人组织中的内奸，成功拯救世界 影片中，各种脑洞大开的外星人和颠覆想象的高科技装备轮番登场，热血沸腾惊心动魄的动作追车场面层出不穷，完美构建出全新的黑衣人宇宙观。本片将于2019年6月14日内地同步北美上映。</p>
  </div>
</template>
<script>
export default {
  name: "movieDetail",
  data() {
    return {
      title: "黑衣人：全球追缉",
      src: "./img/movies/p2537774816.jpg",
      value: "",
      showPicker: false,
      columns: ["极速一线", "极速二线", "极速三线", "极速四线", "极速五线"]
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="less" scoped>
.movieDetail {
  padding: 10px;
  .van-row {
    margin: 10px 0;
    align-items: center;
  }
  /deep/ .van-col {
    position: relative;
    .van-image {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .des {
    line-height: 30px;
  }
}
</style>

