import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Chat from "../views/Chat.vue";
import Userlist from "../views/userlist.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "main",
        component: Home
    },
    {
        path: "/chat",
        name: "Chat",
        component: Chat
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ "../views/Chat.vue")
    },
    {
        path: "/userlist",
        name: "userlist",
        component: Userlist
    },
];

const router = new VueRouter({
    mode: "hash",
    routes
});

export default router;