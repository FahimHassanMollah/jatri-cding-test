import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// css
import './assets/main.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');





