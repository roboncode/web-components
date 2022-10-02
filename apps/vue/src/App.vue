<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import '@roboncode/lit-ui'
import '@roboncode/solid-ui'
import '@roboncode/solid-ui/dist/style.css'
import '@roboncode/svelte-ui'
import '@roboncode/svelte-ui/dist/style.css'
import { ref } from 'vue'

const name = ref('Vue')
</script>

<template>
  <div class="flex justify-center gap-16 p-8">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo h-24" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo h-24 vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <h1>Vite + Vue</h1>
  <div class="grid gap-8">
    <div class="space-y-6 pt-14">
      <div class="text-3xl font-medium">Svelte Web Components</div>
      <div class="container grid grid-cols-2 p-4 gap-3 font-bold rounded-lg drop-shadow">
        <div class="flex flex-col justify-between gap-4 h-full">
          <svelte-hello :name="name" @click="name = 'world'" class="card cursor-pointer" />
          <svelte-counter />
          <svelte-shadow />
        </div>
        <svelte-container class="w-full h-100" innerClass="gap-2">
          <div>header</div>
          <!-- <svelte-container class="w-full h-full" innerClass="gap-2"> -->
            <div v-for="i in 10" :key="i" class="p-2 bg-purple-500 rounded">Item {{i}} </div>
            <div class="sticky top-0 p-2 bg-yellow-500 rounded">Sticky </div>
            <div v-for="i in 10" :key="i" class="p-2 bg-purple-500 rounded">Item {{i}} </div>
          <!-- </svelte-container> -->
          <div>footer</div>
        </svelte-container>
      </div>


      <div class="text-3xl font-medium">Lit Web Components</div>
      <div class="container grid grid-cols-2 p-4 gap-3 font-bold rounded-lg drop-shadow">
        <div class="flex flex-col justify-between gap-4 h-full">
          <lit-hello :name="name" @click="name = 'world'" class="card cursor-pointer" />
          <lit-counter />
          <lit-shadow />
        </div>
        <lit-container class="w-100 max-h-40">
          <div name="my-list">
            <div class="sticky top-0 p-2 bg-dark-800 border border-purple-500 rounded">Start </div>
            <div v-for="i in 10" :key="i">Item {{i}} </div>
          </div>
        </lit-container>
      </div>
    </div>

    <div class="text-3xl font-medium">Solid Web Components</div>
    <!-- <div class="container grid grid-cols-2 p-4 gap-3 font-bold rounded-lg drop-shadow">
      <solid-hello :name="name" @click="name = 'world'" class="card cursor-pointer" />
      <solid-counter />
      <solid-container class="flex justify-center items-center"> I am in a container </solid-container>
      <solid-shadow />
    </div> -->
    <div class="container grid grid-cols-2 p-4 gap-3 font-bold rounded-lg drop-shadow">
      <div class="flex flex-col justify-between h-full">
        <solid-hello :name="name" @click="name = 'world'" class="card cursor-pointer" />
        <solid-counter />
        <solid-shadow />
      </div>
      <solid-container class="w-100 max-h-50">
        <div name="my-list">
          <div class="sticky top-0 p-2 bg-dark-800 border border-purple-500 rounded">Start </div>
          <div v-for="i in 10" :key="i">Item {{i}} </div>
        </div>
      </solid-container>
    </div>



  </div>
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

.card {
  background-color: #009dff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  transition: all 0.1s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.container {
  background-color: #1c1c1c;
  filter: drop-shadow(0 0 1.4em #646cffaa);
}
</style>
