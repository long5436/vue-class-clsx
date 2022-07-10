# vue-class-clsx

> A plugin that supports writing class modules in vuejs quickly and easily similar to classname and clsx for reactjs
> Note that the plugin does not support vue2

## Install

```sh
npm install vue-class-clsx --save
yarn add vue-class-clsx -D
```

## Usage

1. Import with global

   ```sh
   import { createApp } from 'vue'
   import App from './App.vue'
   import { vclsx } from 'vue-class-clsx'

   const app = createApp(App)

   app.use(vclsx)

   app.mount('#app')
   ```

2. Import with component
   ```sh
   import { vclsxComponent as vclsx } from 'vue-class-clsx'
   ```

## Example
>Note: plugin only works with components that use `css module`
```html
<style module>
</style>
```

```html
<script setup lang="ts">
  import { ref } from 'vue';

  const check = ref(false);

  function handleClick() {
    check.value = !check.value;
  }
</script>
```

```html
<template>
  <!-- <RouterView /> -->
  <h1 :class="vclsx({ t3: check })">Hello world!</h1>
  <h1 :class="vclsx(['t1', 't2'])">Hello world 2!</h1>
  <h1 :class="vclsx('t1', { t2: check })">Hello world 3!</h1>
  <button @click="handleClick">Click</button>
</template>
```

```javascript
// string
vclsx('class1', 'class2', 'class3')
//=> class1 class2 class3

// array
vclsx(['class1', 'class2', 'class3'])
//=> class1 class2 class3

// object
vclsx({ class1: true, class2: false })
//=> class1 

// string, object, array
vclsx('class1', { class2: true, class3: false }, ['class4', { class5: true }])
//=> class1 class2 class4 class5
```

### Input
> The vclsx function can take multiple arguments of type arrays, strings, and objects

### License MIT