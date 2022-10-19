<script setup lang="ts">
import { ref, onMounted } from 'vue';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/match-braces/prism-match-braces.min';
import 'prismjs/plugins/match-braces/prism-match-braces.css';

const code1 = ref(`<h3 :class="vx('green', ['italic', { big: true }])">Hello</h3>
    <h3 :class="vx(['green', ['italic', { big: true }]])">Hello</h3>
    <h3 :class="vx('red')">Hello</h3>
    <h3 :class="vx('blue')">Hello</h3>`);

const code2 = ref(` <h3 v-vx="['green', ['italic', { big: true }]]">Hello</h3>
    <h3 v-vx="'red'">Hello</h3>
    <h3 v-vx="'blue'">Hello</h3>`);

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div class="line-numbers rainbow-braces no-brace-hover">
    <div>
      <h2>Use with function</h2>
      <pre class="">
        <code class="language-js">
          {{ code1 }}
        </code>
        </pre>
      <h3 :class="vx('green', ['italic', { big: true }])">Hello</h3>
      <h3 :class="vx(['green', ['italic', { big: true }]])">Hello</h3>
      <h3 :class="vx('red')">Hello</h3>
      <h3 :class="vx('blue')">Hello</h3>
    </div>
    <hr />
    <div>
      <h2>Use with binding</h2>
      <pre class="language-js">
        <code> {{ code2 }}</code>
      </pre>
      <h3 v-vx="['green', ['italic', { big: true }]]">Hello</h3>
      <h3 v-vx="'red'">Hello</h3>
      <h3 v-vx="'blue'">Hello</h3>
    </div>
  </div>
</template>
<style module>
h3 {
  margin: 0;
}

pre,
code,
pre span,
code span {
  font-family: monospace;
  font-size: 1rem;
}

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

.italic {
  font-style: italic;
}
</style>
