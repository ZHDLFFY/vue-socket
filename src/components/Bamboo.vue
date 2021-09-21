<template>
  <div style="width:70px">
    <div class="avatar flex row center align-items-center">
      <img :src="src" alt="" />
    </div>
    <div class="bambody " :class="{ active: Boolean(active) }">
      <div class="bancontent  flex row ">
        <div>
          <div class="lattice font" v-for="(item, index) in name" :key="index">
            {{ item }}
          </div>
        </div>
        <div>
          <div
            class="lattice font font-size14 lineHeight"
            v-for="(item, index) in text"
            :key="index"
          >
            <span v-if="index <= 20"> {{ item }}</span>
            <span v-if="index > 21">.</span>
          </div>
        </div>
      </div>
      <div class="footer" :class="[Boolean(Catkins) ? '' : 'none']">
        <div class="catkins"></div>
        <div class="catkone"></div>
        <div class="catktwo">
          <div class="catkthree"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bamboo",
  data() {
    return {};
  },
  props: {
    src: {
      type: String,
      default: require("../assets/R.jpg")
    },
    name: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    },
    Catkins: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style>
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(47, 241, 144, 0.5);
}

.avatar > img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid #fff;
}

.bambody {
  border-radius: 20px;
  background-color: rgb(47, 241, 144);
  text-align: center;
  padding: 16px 10px;
  width: 50px;
  margin-top: 20px;
  box-shadow: 2px 2px 2px #828282;
  height: 500px;
  background-image: linear-gradient(rgb(208, 255, 230), rgb(47, 241, 144));
}
.bancontent {
  overflow: hidden;
  width: inherit;
  height: inherit;
  white-space: nowrap;
  text-overflow: ellipsis;
  justify-content: space-around;
}

.font {
  font-family: "楷体";
}

.lineHeight {
  line-height: 25px;
}

.active {
  animation: run 3s ease-in-out 0s infinite;
  transform-origin: 50% 0%;
}

@keyframes run {
  0% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(-5deg);
  }
}

.footer {
  animation: frun 3s ease-in-out 0s infinite;
  transform-origin: 50% 0%;
  overflow: hidden;
}

@keyframes frun {
  0% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(-10deg);
  }
}

.catkins {
  width: 30px;
  height: 30px;
  margin: 25px 10px 0px 10px;
  border-radius: 50%;
  background-color: rgb(47, 241, 144);
}

.catkone {
  width: 20px;
  height: 20px;
  margin: 5px 15px;
  border-radius: 50%;
  background-color: rgb(47, 241, 144);
}

.catktwo {
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 50%;
  border: 5px solid rgb(47, 241, 144);
  display: flex;
  align-items: center;
  justify-content: center;
}

.catkthree {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 4px dashed rgb(47, 241, 144);
  animation: Spin 1s linear 0s infinite;
}

@keyframes Spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.none {
  height: 0px;
}
</style>
