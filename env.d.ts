/// <reference types="vite/client" />

import { vueClassName } from 'vue-class-clsx';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    vclsx: typeof vueClassName;
  }
}
