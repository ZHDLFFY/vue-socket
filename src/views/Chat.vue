<template>
  <div class="contain">
    <i class="el-icon-s-home close" @click="navBack"></i>
    <div style="text-align:center">
      <h3>{{ Choiseuser.name }}</h3>
    </div>
    <div class="history">
      <div
        class="recent flex row "
        :class="[user.id == item.sendId ? 'self' : '']"
        v-for="(item, index) in record"
        :key="index"
      >
        <div class="head">
          <img :src="src" alt="" srcset="" />
        </div>
        <div class="flex column">
          <div class="flex align-items-center name">
            {{ item.sendId }}
          </div>
          <div class="body flex row align-items-center ">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>

    <div class="formbox">
      <el-form :inline="true" :model="formInline" class="form">
        <el-form-item>
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="formInline.content"
            class="textarea"
            @keydown.enter.native="onSubmit($event)"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="subbtn" @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      src: require("../assets/R.jpg"),
      record: [],
      formInline: {
        content: ""
      },
      Choiseuser: ""
    };
  },
  sockets: {
    ReceiveMsg(data) {
      this.record.splice(0, 0, data);
    },
    history(data) {
      this.record = data;
      console.log(data);
    }
  },
  computed: {
    user() {
      return this.$store.state.userInfo;
    }
  },

  mounted() {
    this.Choiseuser = this.$route.params.item;

    this.$socket.emit("joinRoom", {
      receive: this.Choiseuser,
      send: this.user
    });
  },
  methods: {
    onSubmit() {
      let e = window.event || arguments[0];
      if (e.key == "Enter" || e.code == "Enter" || e.keyCode == 13) {
        e.returnValue = false;
        this.user.content = this.formInline.content;
        let data = { send: this.user, receive: this.Choiseuser };
        this.$socket.emit("ChatMessage", data);
      }
    },
    navBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
.contain {
  width: 1112px;
  height: 786px;
  border-radius: 20px;
  background-image: linear-gradient(to bottom left, #a3e1ce, #2ff190);
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 35px;
}

.history {
  height: 650px;
  width: 99%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.history::-webkit-scrollbar {
  display: none;
}
.recent {
  margin: 20px 50px;
  align-items: flex-start;
  float: left;
  /* border: 2px solid darkblue; */
}
.head {
  height: 50px;
  width: 50px;
}
.head img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.body {
  word-break: keep-all;
  padding: 5px;
  background: rgb(249, 255, 255);
  min-height: 50px;
  text-align: left;
  padding: 5px 15px;
  border-radius: 0px 10px 10px 10px;
  line-height: 2;
}
.self {
  color: rgb(158, 48, 149);
}

.name {
  font-size: 18px;
  height: 50px;
  margin: 0px 10px;
}

.formbox {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  /* box-shadow: 0px -1px 0px rgb(4, 211, 125); */
}

.textarea {
  width: 950px !important;
  margin: 20px 25px;
}

.subbtn {
  margin: 20px 0 !important;
}
</style>
