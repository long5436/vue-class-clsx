import { createApp } from 'vue';
// @ts-ignore
import App from './App.vue';
import './index.css';
import { createVclsx } from './plugins/vclsx';

const app = createApp(App);
const vclsx = createVclsx({ functionName: 'vx', directiveName: 'v-vx' });

app.use(vclsx);
app.mount('#app');
