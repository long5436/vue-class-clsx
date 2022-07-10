<script setup lang="ts">
import { ref } from 'vue';

const check = ref(false);
function handleClick() {
  check.value = !check.value;
}
</script>

<template>
  <!-- <RouterView /> -->
  <h1 :class="vclsx({ t3: check })">Hello world!</h1>
  <h1 :class="vclsx(['t1', 't2'])">Hello world 2!</h1>
  <h1 :class="vclsx('t1', { t2: check })">Hello world 3!</h1>
  <button @click="handleClick">Click</button>
</template>

<style module>
h1 {
  font-weight: normal;
}

.t1 {
  color: green;
}

.t2 {
  font-weight: bold;
}

.t3 {
  font-style: italic;
}

</style>
