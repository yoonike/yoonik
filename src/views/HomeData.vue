<template>
  <div class="homeData">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <p>{{count}}</p> -->
    <el-row>
      <el-button @click="exportTags">导出数据</el-button>
    </el-row>
    <!-- 标签数据表格 -->
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="markList.slice((nowPage-1)*pageSize,nowPage*pageSize)"
    >
      <el-table-column align="center" prop="date" label="日期" width="180">
        <template slot-scope="scope">{{scope.row.date|transformTime}}</template>
      </el-table-column>
      <el-table-column sortable align="center" prop="name" label="站名" width="180"></el-table-column>
      <el-table-column sortable prop="href" label="地址">
        <template slot-scope="scope">
          <a :href="scope.row.href" target="_blank">{{scope.row.href}}</a>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,'del')" type="text" size="small">删除</el-button>
          <el-button @click="handleClick(scope.row,'edit')" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-row>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="nowPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="markTotal"
      ></el-pagination>
    </el-row>
    <!-- 提示框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>确认删除该标签吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleDel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      markList: [],
      markTotal: 0,
      nowPage: 1,
      pageSize: 10,
      cateObj: {
        id: "",
        name: ""
      }
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  created() {
    this.getMarkList();
  },
  filters: {
    transformTime: function(value) {
      if (!value) {
        return "";
      }
      //获取当前日期second为毫秒
      let date = new Date(value),
        dateTxt = [];
      [...dateTxt] = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      ];
      // 处理不足10的数补零
      dateTxt = dateTxt.map(item => (item < 10 ? "0" + item : item));
      return `${dateTxt[0]}.${dateTxt[1]}.${dateTxt[2]} ${dateTxt[3]}:${
        dateTxt[4]
      }:${dateTxt[4]}`;
    }
  },
  methods: {
    getMarkList() {
      //获取品牌列表
      this.axios.get("./marks.json").then(response => {
        if (response.status == 200) {
          this.markList = response.data;
          this.markTotal = response.data.length;
        }
      });
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.nowPage = val;
    },
    handleClick(val, type) {
      // 处理操作
      switch (type) {
        case "del":
          this.cateObj.id = val.id;
          this.cateObj.name = val.name;
          this.dialogVisible = true;
          break;
        case "edit":
          break;
      }
    },
    exportTags() {
      // 导出数据
      console.log(JSON.stringify(this.markList));
    },
    handleDel() {
      // 删除数据
      if (Array.isArray(this.markList) && this.markList.length) {
        this.markList.splice(
          this.markList.findIndex((item, index, arr) => {
            return item.id == this.cateObj.id;
          }),
          1
        );
      }
      this.dialogVisible = false;
    }
  }
};
</script>
<style lang="less" scoped>
.homeData {
  width: 50%;
  margin: auto;
  .el-row {
    text-align: left;
  }
  a{
    text-decoration:none;
  }
  a:active {
    color: salmon;
  }
  a:hover {
    color: gold;
  }
  a:link {
    color: hotpink;
  }
  a:visited {
    color: sandybrown;
  }
}
</style>

