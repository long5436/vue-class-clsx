import { createApp } from 'vue';
import { basicSetup } from 'codemirror';
import VueCodemirror from 'vue-codemirror';

// @ts-ignore
import App from './App.vue';
import './index.css';
// import { createVClsx } from '../build';
import { createVClsx } from './plugins/vclsx';

const app = createApp(App);

app.use(createVClsx, {
  functionName: 'vx',
  // cssModuleName: 'css',
  directiveName: 'v-vx',
});

app.use(VueCodemirror, {
  // optional default global options
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: 'Code goes here...',
  extensions: [basicSetup],
  // ...
});

app.mount('#app');
