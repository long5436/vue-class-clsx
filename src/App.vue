<script setup lang="ts">
import { ref } from 'vue';

const isBig = ref(false);
</script>

<template>
  <button @click="isBig = !isBig">
    {{ isBig ? 'Font normal' : 'Font big' }}
  </button>
  <div>
    <h2>function</h2>
    <h3 :class="vx('green', { big: isBig })">Hello</h3>
    <h3 :class="vx('red')">Hello</h3>
    <h3 :class="vx('blue')">Hello</h3>
  </div>
  <hr />
  <div>
    <h2>binding</h2>
    <h3 v-vx="['green', { big: isBig }]">Hello</h3>
    <h3 v-vx="'red'">Hello</h3>
    <h3 v-vx="'blue'">Hello</h3>
  </div>
</template>
<style module>
.green {
  color: green;
}

.red {
  color: red;
}

.blue {
  color: cornflowerblue;
}

.big {
  font-size: 3rem;
}
</style>
