<script setup lang="ts">
import { ref, onMounted } from 'vue';
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/match-braces/prism-match-braces';
import 'prismjs/plugins/match-braces/prism-match-braces.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const code1 = ref(`<h3 :class="vx('green', ['italic', { big: true }])">Hello</h3>
      <h3 :class="vx(['green', ['italic', { big: true }]])">Hello</h3>
      <h3 :class="vx('red')">Hello</h3>
      <h3 :class="vx(['blue'])">Hello</h3>
      <h3 :class="vx({ green: true })">Hello</h3>`);

const code2 = ref(`<h3 v-vx="['green', ['italic', { big: true }]]">Hello</h3>
      <h3 v-vx="'red'">Hello</h3>
      <h3 v-vx="'blue'">Hello</h3>
      <h3 v-vx="['green']">Hello</h3>
      <h3 v-vx="{ red: true }">Hello</h3>`);

const code3 = ref(`app.use(createVClsx, {
  functionName: 'vx',
  directiveName: 'v-vx',
});
`);

const code4 = ref(`vx('green', ['italic', { big: true }])
vx(['green', ['italic', { big: true }]])
vx('red')
vx(['blue']) 
vx({ green: true })
`);

const code5 = ref(`
['green', ['italic', { big: true }]]
'red'
'blue'
['green']
{ red: true }
`);

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div class="line-numbers match-braces rainbow-braces">
    <div>
      <h2>Config</h2>
      <pre class="language-js">
        <code>
          {{code3}}
        </code>
      </pre>
    </div>
    <hr />
    <div>
      <h2>Use with function</h2>
      <pre class="language-html">
        <code>
          {{ code1 }}
        </code>
        </pre>
      <pre class="language-js">
        <code>
          {{code4}}
        </code>
      </pre>
      <h3 :class="vx('green', ['italic', { big: true }])">Hello</h3>
      <h3 :class="vx(['green', ['italic', { big: true }]])">Hello</h3>
      <h3 :class="vx('red')">Hello</h3>
      <h3 :class="vx(['blue'])">Hello</h3>
      <h3 :class="vx({ green: true })">Hello</h3>
    </div>
    <hr />
    <div>
      <h2>Use with binding</h2>
      <pre class="language-html">
        <code> {{ code2 }}</code>
      </pre>
      <pre class="language-js">
  <code>
    {{ code5 }}
  </code>
      </pre>
      <h3 v-vx="['green', ['italic', { big: true }]]">Hello</h3>
      <h3 v-vx="'red'">Hello</h3>
      <h3 v-vx="'blue'">Hello</h3>
      <h3 v-vx="['green']">Hello</h3>
      <h3 v-vx="{ red: true }">Hello</h3>
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
