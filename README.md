# vue-class-clsx

> A plugin that supports writing class modules in vuejs quickly and easily similar to classname and clsx for reactjs

> Note that the plugin does not support vue2

### [Demo](https://nguyenvanlongweb.github.io/vue-class-clsx/)

## Install

```sh
npm install vue-class-clsx -D
yarn add vue-class-clsx -D
```

## Setup

1. Import with global

   ```ts
   import { createApp } from 'vue';
   import App from './App.vue';
   import { createVClsx } from 'vue-class-clsx'; // import vclsx

   const app = createApp(App);
   app.use(createVClsx, {}); // use vclsx
   app.mount('#app');
   ```

2. Import with component

   ```sh
   import { vclsxComponent as vclsx } from 'vue-class-clsx'
   ```

3. Use with typescript

   Add to env.d.ts

   ```ts
   import type { createVClsx } from 'vue-class-clsx';

   declare module '@vue/runtime-core' {
     interface ComponentCustomProperties {
       vclsx: createVClsx;
     }
   }
   ```

## Usage

### Use with function vclsx

```html
<template>
  <h2 :class="vclsx('title')">Hello</h2>
</template>
<style module>
  .title {
    color: green;
  }
</style>
```

### Use with v-binding

```html
<template>
  <h2 v-class-module="'title'">Hello</h2>
  <h2 v-class-module="['title', 'primay']">Hello</h2>
</template>
<style module>
  .title {
    color: green;
  }

  .primay {
    color: tomato;
  }
</style>
```

## Options (new)

### 1. Custom css module name

> if you set custom module name for class name, then use below option. Note the option only works when used with global

```html
<style module="custom-name"></style>
```

```js
app.use(vclsx, { cssModuleName: 'custom-name' });
```

### 2. Custom function name

```js
app.use(vclsx, { functionName: 'vx' });
```

```html
<template>
  <h2 :class="vx('title')">Hello</h2>
</template>
```

> **Warning**
> Attention: If you customize the function name, you need to update the type declaration to avoid construction errors

```ts
// Add to env.d.ts
import type { createVClsx } from 'vue-class-clsx';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    vx: createVClsx; // vclsx => vx
  }
}
```

### 3. Custom v-binding name

```js
app.use(vclsx, { directiveName: 'v-vx' });
```

```html
<template>
  <h2 v-vx="'title'">Hello</h2>
  <h2 v-vx="['title', 'primay']">Hello</h2>
</template>
```

| options       | Description                                                                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| functionName  | Name of the function called in :class                                                                                                                                                                          |
| cssModuleName | Name css module, default is $style, if using css module default of vuejs then call like this `module="css"` => `:class="cs.<classname>"` . However, when attaching conditional operators, it is quite verbose. |
| directiveName | The name of the props binding when using the css class module call via v-binding                                                                                                                               |

## Example

> Note: plugin only works with components that use `css module`

```html
<style module></style>
```

```html
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
```

```javascript
// string
vclsx('class1', 'class2', 'class3');
//=> class1 class2 class3

// array
vclsx(['class1', 'class2', 'class3']);
//=> class1 class2 class3

// object
vclsx({ class1: true, class2: false });
//=> class1

// string, object, array
vclsx('class1', { class2: true, class3: false }, ['class4', { class5: true }]);
//=> class1 class2 class4 class5
```

## Input

> The vclsx function can take multiple arguments of type arrays, strings, and objects

## Priority

> When using v-binding and function at the same time to call the css class module, the class generated from: class (function) is always called last

### Example

```html
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
```

```html
<!-- result -->
<h2 class="_title_bbnon_3 _primary_bbnon_11">Hello</h2>
```

### License MIT
