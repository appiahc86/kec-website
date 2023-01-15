import { createApp } from 'vue';
import router from "./router/index.js";
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ClazyLoad from 'vue-clazy-load';

import 'primevue/resources/themes/saga-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.use(ClazyLoad);
app.use(router);
app.mount('#app');
