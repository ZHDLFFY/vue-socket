<template>
  <div>
    <i class="el-icon-s-home close" @click="navBack"></i>
    <div class="flex row list">
      <bamboo
        v-for="(item, index) in userlist"
        :key="index"
        index
        :src="item.src"
        :text="item.text"
        :Catkins="item.Catkins"
        :active="item.active"
        @click.native="Tochat"
        class="bamboo"
      ></bamboo>
    </div>
  </div>
</template>
<script>
import Bamboo from "../components/Bamboo.vue";
export default {
  name: "",
  components: {
    Bamboo
  },
  data() {
    return {
      userlist: [
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        },
        {
          Catkins: false,
          active: false,
          src: require("../assets/R.jpg"),
          text:
            "列宽随着浏览器窗口大小进行改变，用户体验不好；图片排序按照垂直顺序排列，打乱图片显示顺序；"
        }
      ]
    };
  },

  methods: {
    Tochat() {
      this.$router.push("/chat");
    },
    navBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
.list {
  overflow-x: auto;
  height: 100%;
  margin: 70px 0;
}

.list::-webkit-scrollbar {
  display: none;
}
</style>
