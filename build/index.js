import{useCssModule as e}from"vue";const s={cssModuleName:"",functionName:""},t={value:[]};function a(...e){return e.map((e=>{Array.isArray(e)?e.map((e=>{a(e)})):"object"==typeof e?Object.keys(e).map((s=>{e[s]&&t.value.push(s)})):"string"==typeof e?t.value.push(e):"number"==typeof e&&(0===e||isNaN(e)||t.value.push(e.toString()))})),t}const o=(...o)=>{const r=s.cssModuleName?e(s.cssModuleName):e();o.map((e=>e));const c=r;t.value=[],a(o);return t.value.map((e=>{if(void 0!==c[e])return c[e]})).filter((e=>e)).toString().replace(/\,/g," ").trim()};const r={value:[]};function c(...e){if(Array.isArray(e)){const[s,...t]=e;"function"==typeof s&&(r.value=[])}return e.map((e=>{Array.isArray(e)?e.map((e=>{c(e)})):"object"==typeof e?Object.keys(e).map((s=>{e[s]&&r.value.push(s)})):"string"==typeof e?r.value.push(e):"number"==typeof e&&(0===e||isNaN(e)||r.value.push(e.toString()))})),r.value}let i,n={},u="";const l=(e,s)=>{u=s},p=e=>!1;function m(e,s,t){let a=s;"string"==typeof a&&(a=[a]),i=c([p,a]);let o=((e,s)=>e.map((e=>s[e])).filter((e=>e)))(i,n);t?.class&&(t.class,o=[...o,t.class]),e.classList.remove(...e.classList),e.classList.add(...o)}const v={beforeMount(e,s,t,a){n=t?.dirs[0]?.instance?.$options?.__cssModules[u],m(e,s.value,t.props)},updated(e,s,t){n=t?.dirs[0]?.instance?.$options?.__cssModules[u],m(e,s.value,t.props)}},d={install(e,t){const a=t?.functionName?t.functionName:"vclsx",r=t?.directiveName?t.directiveName:"v-class-module".toString(),c=t?.cssModuleName?t.cssModuleName:"$style",i=r.replace("v-","");var n;l(0,c),e.config.globalProperties[a]=o,e.provide("config",void((n=t)&&n.hasOwnProperty("cssModuleName")&&(s.cssModuleName=n.cssModuleName))),e.directive(i,v)}},f=o;export{d as createVClsx,f as vclsxComponent};
