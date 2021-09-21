<template>
  <div>
    <div class="flex row">
      <div class="flex row">
        <bamboo
          v-for="(item, index) in userlist"
          :key="index"
          index
          :text="item.content"
          :name="item.name"
          :Catkins="item.Catkins"
          :active="item.active"
          @click.native="Tochat(item)"
          class="bamboo"
        >
          {{ item.type == 0 ? "group" : "persion" }}
        </bamboo>

        <!-- <div v-for="(item, index) in userlist" :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix flex row align-items-center">
              <img
                :src="user.src"
                class="icon48 icon-border50"
                alt=""
                srcset=""
              />
              <span class="font-weight9"
                >--{{ item.type == 0 ? "群名：" : "昵称："
                }}{{ item.name }}--</span
              >
            </div>
            <div class="text item font-weight6">
              {{ item.type == 0 ? "group" : "persion" }}
            </div>
            <div class="text item">账号：{{ item.id }}</div>
            <div class="text item" v-if="item.type == 0">
              群主id：{{ item.socketId }}
            </div>
          </el-card>
        </div> -->
      </div>
      <div style="width:300px">
        <el-card class="box-card" v-if="user.id != '' && user.type == 1">
          <div slot="header" class="clearfix flex row align-items-center">
            <img
              :src="user.src"
              class="icon48 icon-border50"
              alt=""
              srcset=""
            />
            <span class="font-weight9">----{{ user.name }}</span>
          </div>
          <div class="text item font-weight6">昵称：{{ user.name }}</div>
          <div class="text item">账号：{{ user.id }}</div>
          <div class="text item">唯一码：{{ user.socketId }}</div>
        </el-card>
        <div class="">
          <el-input
            placeholder="请输入账号"
            v-model="id"
            clearable
            @keyup.enter.native="subname"
          >
          </el-input>
          <el-input
            placeholder="请输入昵称"
            v-model="name"
            clearable
            @keyup.enter.native="subname"
          >
          </el-input>
          <el-input
            placeholder="请输入群名"
            v-model="group"
            clearable
            @keyup.enter.native="subname"
          >
          </el-input>
          <div class="flex row between">
            <el-button type="primary" size="small " @click="loginStatus()"
              >登陆</el-button
            >
            <el-button type="success" size="small " @click="regisiterStatus()"
              >注册</el-button
            >
          </div>
        </div>
      </div>
      <!-- <div class="flex row" style="width:20%">
        <div class="">
          <el-card class="box-card" v-if="user.id != ''">
            <div slot="header" class="clearfix flex row align-items-center">
              <img
                :src="user.src"
                class="icon48 icon-border50"
                alt=""
                srcset=""
              />
              <span class="font-weight9">----{{ user.name }}</span>
            </div>
            <div class="text item font-weight6">昵称：{{ user.name }}</div>
            <div class="text item">账号：{{ user.id }}</div>
            <div class="text item">唯一码：{{ user.socketId }}</div>
          </el-card>
        </div>
         <bamboo
          v-for="(item, index) in userlist"
          :key="index"
          index
          :src="item.src"
          :text="item.text"
          :Catkins="item.Catkins"
          :active="item.active"
          @click.native="Touserlist"
          :class="[index % 2 == 0 ? 'up' : 'down']"
          class="bamboolist"
        ></bamboo> 
      </div>-->
    </div>
    <div class=""></div>
  </div>
</template>
<script>
import Bamboo from "../components/Bamboo.vue";
export default {
  components: { Bamboo },
  name: "",

  data() {
    return {
      userlist: [],
      name: "",
      id: "",
      group: ""
    };
  },
  sockets: {
    connect() {
      console.log("链接成功");
    },

    disconnect() {
      console.log("断开链接");
    },

    reconnect() {
      console.log("重新链接");
    },

    getUserlist(data) {
      console.log(data);
      this.getuser();
    },
    self(data) {
      // this.$store.state.userInfo = data;
      console.log(data);
      this.$store.commit("increment", data);
    },
    ReceiveMsg(data) {
      //对比接收者

      this.userlist.filter(item => {
        if (data.type == 1 && data.sendId == item.id) {
          console.log(item.type, data.sendId, item.id);
          item.active = true;
          item.Catkins = true;
          item.content = data.content;
        } else if (data.type == 0 && data.receiveId == item.id) {
          console.log(item.type, data.receiveId, item.id);
          item.active = true;
          item.Catkins = true;
          item.content = data.content;
        }
      });
    }
  },
  watch: {
    user() {
      return this.$store.state.userInfo;
    }
  },

  computed: {
    user() {
      return this.$store.state.userInfo;
    },
    UserList() {
      return this.UserList.filter(item => {
        return this.user.id != item.id;
      });
    },
    status() {
      return this.$store.state.login;
    },
    regisiter() {
      return this.$store.state.regisiter;
    }
  },
  mounted() {
    this.getuser();
  },
  methods: {
    getuser() {
      this.$http
        .get("http://127.0.0.1:3001/user", {})
        .then(response => {
          console.log(response);
          response.data.filter(item => {
            item.Catkins = Boolean(item.Catkins);
            item.active = Boolean(item.active);
          });
          this.userlist = response.data;
        })
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          // 总是会执行
        });
    },
    Tochat(e) {
      this.$router.push({ name: "Chat", params: { item: e } });
    },
    Touserlist() {
      this.$router.push("/userlist");
    },
    subname() {
      let parme = {
        data: "",
        type: ""
      };
      if (this.name != "" && this.id != "") {
        console.log("登陆");
        parme.data = { id: this.id, name: this.name };
        parme.type = 1;
        this.$socket.emit("login", parme);
      } else if (this.name != "" && this.id == "") {
        parme.data = this.name;
        parme.type = 1;
        this.$socket.emit("regisiter", parme);
      } else if (this.group != "") {
        parme.data = this.group;
        parme.type = 0;
        this.$socket.emit("regisiter", parme);
      }

      // this.regisiter = true;
      this.$store.commit("regisiterStatus", true);
    },
    loginStatus() {
      this.$store.commit("loginStatus", true);
    },
    regisiterStatus() {
      this.$store.commit("loginStatus", false);
    }
  }
};
</script>
<style>
body {
  height: 100%;
  width: 100%;
}
body::-webkit-scrollbar {
  display: none;
}

.bamboo {
  margin: 10px 20px;
}

.bamboolist {
  margin: 0px;
}

.up {
  margin-top: 30px;
  margin-left: -30px;
}
.down {
  margin-top: 0px;
  margin-left: -30px;
}

.loginPanel {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgb(208, 255, 230), rgb(47, 241, 144));
  /* animation: Spin 1s linear 0s infinite; */
}

.loginPanelnone {
  width: 0px;
  height: 0px;
  overflow: hidden;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  padding: 100px;
}

@keyframes Spin {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  padding: 20px;
  margin: 20px;
  width: 100%;
}
</style>
