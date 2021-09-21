import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/public.css";
import less from "less";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
import Vuex from "vuex";
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Vuex);
Vue.use(less);
Vue.use(ElementUI);
Vue.use(
    new VueSocketIO({
        debug: true,
        connection: SocketIO.connect("http://127.0.0.1:3000", {
            transports: ["websocket", "xhr-polling", "jsonp-polling"]
        })
    })
);
Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        userInfo: {
            Catkins: false,
            active: false,
            id: '',
            name: "",
            socketId: "",
            src: "",
            text: "",
        },
        login: false,
        regisiter: false
    },
    getters: {
        getinfo: state => {
            return state.userInfo
        }
    },
    mutations: {
        increment(state, info) {
            state.userInfo = info;
        },

        loginStatus(state, info) {
            state.login = info;
        },
        regisiterStatus(state, info) {
            state.regisiter = info;
        }
    }
});
new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount("#app");