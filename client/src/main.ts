import { createApp } from 'vue'
import { createPinia } from 'pinia';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import router from './pages/router';
import '.assets/styles/main.scss';


createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
