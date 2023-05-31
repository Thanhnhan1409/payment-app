// 
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia';
import { useUserStore } from './store/index';

const app = createApp(App);

app.use(createPinia()); // Sử dụng Pinia để tạo ra instance Pinia

const userStore = useUserStore(); // Tạo instance của userStore

app.use(router);
app.use(userStore); // Sử dụng userStore trong ứng dụng Vue

app.mount("#app");