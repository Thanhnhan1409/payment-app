import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/home.vue';
import MyWallet from '../pages/myWallet.vue';
import Payments from '../pages/payments.vue'


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path:"/myWallet",
    component:MyWallet
  },
  {
    path:"/payments",
    component:Payments
  },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router;