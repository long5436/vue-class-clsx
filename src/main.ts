import { createApp } from 'vue'

import App from './App.vue'
import { vclsx } from '../dist'

const app = createApp(App)

app.use(vclsx)

app.mount('#app')
