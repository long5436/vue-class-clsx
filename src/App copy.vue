<script setup>
import { defineComponent } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { ref, shallowRef } from 'vue';

const code = shallowRef(`<codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @change="handleChange"
  />
</template>`);
const extensions = [javascript(), oneDark];

const handleChange = (change) => {
  console.log(change);
};

const f =
  '<div><h1 class="test-class" style="font-size: 3rem; background: yellow;">hello</h1></div>';
</script>

<template>
  <div>
    <template v-html="f"></template>
  </div>

  <codemirror
    class="codemirror"
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @change="handleChange"
  />
</template>
<style>
.test {
  height: 300px;
}

.codemirror {
  font-size: 1.2rem;
}
</style>
