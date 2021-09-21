<template>
  <div class="card" :style="'border-radius:' + radius + radiusUnit + ''">
    <div class="head">
      <div class="font-size14">
        <slot name="head"></slot>
      </div>
      <div class="font-size12">
        <slot name="date"></slot>
      </div>
    </div>

    <div class="footer font-size14">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentContact",
  data() {
    return {};
  },
  props: {
    radius: {
      type: String || Number,
      default: 10
    },
    radiusUnit: {
      type: String,
      default: "px"
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

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 9px;
  padding: 9px;
  width: 100%;
}

.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 97%;
}
</style>
