import { createApp } from 'vue';

// @ts-ignore
import App from './App.vue';
// import { createVClsx } from '../build';
import { createVClsx } from './plugins/vclsx';

const app = createApp(App);

app.use(createVClsx, {
  // functionName: 'vx',
  // cssModuleName: 'css',
  // directiveName: 'v-vx',
});

app.mount('#app');
