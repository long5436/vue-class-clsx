import type { createVClsx } from './build';

/// <reference types="vite/client" />

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    vclsx: createVClsx;
  }
}
