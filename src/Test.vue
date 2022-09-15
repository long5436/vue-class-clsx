<script setup></script>

<template>
  <!-- <h2 :class="vclsx('primary')" v-class-module="'title'">Hello</h2> -->
  <h2 class="test-class" :class="vclsx('primary')" v-class-module="'title'">
    Test class
  </h2>
</template>
<style module>
.title {
  color: green;
}

.primary {
  color: tomato;
}
</style>
