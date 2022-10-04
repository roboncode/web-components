<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import '@roboncode/lit-ui'
import '@roboncode/solid-ui'
// import '@roboncode/solid-ui/dist/style.css'
// import '@roboncode/svelte-ui'
// import '@roboncode/svelte-ui/dist/style.css'
import { ref } from 'vue'
import Summary from './components/Summary.vue'
import SvelteView from './components/SvelteView.vue'

const name = ref('Vue')
const count = ref(0)

const toggleName = () => {
  name.value = name.value === 'Vue' ? 'world' : 'Vue'
}

const handleCountChange = (evt: CustomEvent) => {
  console.log('change event from count:', evt.detail.count)
  count.value = evt.detail.count
}
</script>

<template>
  <div class="text-center font-bold text-xl">Integrating web components for</div>
  <div class="flex justify-center gap-16 p-8">
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo h-24" alt="Vite logo" />
    </a> -->
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo h-24 vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <h1 class="text-center">Vue</h1>
  <Summary class="w-full" />
  <SvelteView />
</template>

<style scoped>
.logo {
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* .card {
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.5s ease-in-out;
}

.card:hover {
  border-color: #9d00ff;
} */
</style>
