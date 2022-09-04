import { vueClassName } from './dist';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    vclsx: typeof vueClassName;
  }
}
