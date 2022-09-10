<script setup lang="ts">
import { ref } from 'vue';

const bg = ref(false);
const italic = ref(true);
const green = ref(true);
</script>

<template>
  <!-- use with v-binding -->
  <h1>Use with v-binding</h1>

  <h2 v-class-module="{ t1: green, t2: bg, t3: italic }">
    Hello world! (button change)
  </h2>
  <h2 v-class-module="'t1'">Hello world!</h2>
  <h2 v-class-module="['t1', 't2']">Hello world!</h2>
  <h2 v-class-module="['t1', 't2', { t3: true }]">Hello world!</h2>
  <h2 v-class-module="['t1', 't2', ['fs', { t3: true }]]">Hello world!</h2>

  <hr />

  <!-- use with function -->
  <h1>Use with :class function</h1>
  <h2 :class="vclsx({ t1: green, t2: bg, t3: italic })">
    Hello world! (button change)
  </h2>
  <h2 :class="vclsx('t1', 't2')">Hello world!</h2>
  <h2 :class="vclsx(['t1', 't2'])">Hello world!</h2>
  <h2 :class="vclsx(['t1', 't2', { t3: true }])">Hello world!</h2>
  <h2 :class="vclsx(['t1', 't2', ['fs', { t3: true }]])">Hello world!</h2>
  <hr />
  <button v-class-module="{ active: bg }" @click="bg = !bg">background</button>
  <button v-class-module="{ active: italic }" @click="italic = !italic">
    Italic
  </button>
  <button v-class-module="{ active: green }" @click="green = !green">
    Green
  </button>
</template>

<style module>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

button {
  color: #333;
  margin-right: 4px;
}

.active {
  background: #333;
  color: #fff;
}

.fs {
  font-size: 3rem;
}

.t1 {
  color: green;
}

.t2 {
  background: yellow;
}

.t3 {
  font-style: italic;
}
</style>
