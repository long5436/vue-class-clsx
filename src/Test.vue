<template>
  <h2 :class="vclsx('primary')" v-class-module="'title'">Hello</h2>
</template>
<style module>
.title {
  color: green;
}

.primary {
  color: tomato;
}
</style>
