<template>
  <div>
    <img
      :src="src"
      :alt="alt"
      :style="
        'width:' +
          size +
          'px;height:' +
          size +
          'px;border-radius:' +
          radius +
          '%'
      "
    />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {};
  },
  props: {
    size: {
      type: String || Number,
      default: 36
    },
    radius: {
      type: String || Number,
      default: 50
    },
    src: {
      type: String || Number,
      default: ""
    },
    alt: {
      type: String || Number,
      default: "加载失败"
    }
  },
  updated() {
    console.log("updata");
  },
  mounted() {
    console.log("onload");
  }
};
</script>

<style></style>
