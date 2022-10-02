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
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <h1>Vite + Vue</h1>
  <div class="grid gap-3">
    <div>
      <h2>Lit Web Components</h2>
      <div class="container grid grid-cols-2 p-4 gap-3 font-bold rounded-lg drop-shadow">
        <lit-hello :name="name" @click="name = 'world'" class="card cursor-pointer" />
        <lit-counter />
        <lit-container class="w-100 max-h-50">
          <div>
            <div>Start </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>I am in a container </div>
            <div>End </div>
          </div>
        </lit-container>
        <lit-shadow />
      </div>
    </div>

    <div>
      <h2>Solid Web Components</h2>
      <div class="container grid grid-cols-2 p-4 gap-3 font-bold rounded-lg drop-shadow">
        <solid-hello :name="name" @click="name = 'world'" class="card cursor-pointer" />
        <solid-counter />
        <solid-container class="flex justify-center items-center"> I am in a container </solid-container>
        <solid-shadow />
      </div>
    </div>

    <div>
      <h2>Svelte Web Components</h2>
      <div class="container grid grid-cols-2 p-4 gap-3 font-bold rounded-lg drop-shadow">
        <svelte-hello :name="name" @click="name = 'world'" class="card cursor-pointer" />
        <svelte-counter />
        <svelte-container class="bg-red-500 block"> I am in a container </svelte-container>
        <svelte-shadow />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-border {
  border: 1px solid #ccc;
}

.border-opacity-50 {
  border-color: rgba(0, 0, 0, 0.5);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.border-rounded {
  border-radius: 0.5em;
}

.p-4 {
  padding: 1rem;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.gap-3 {
  gap: 1.2rem;
}

.bg-red-500 {
  background-color: red;
}

.bg-orange-500 {
  background-color: orange;
}

.bg-green-500 {
  background-color: green;
}

.font-bold {
  font-weight: bold;
}

.drop-shadow {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.container {
  background-color: #1c1c1c;
}

.h-100 {
  height: 25rem;
}

.w-100 {
  width: 25rem;
}

.max-h-100 {
  max-height: 25rem;
}

.max-h-50 {
  max-height: 12.5rem; /* 200px */
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
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
}

.cursor-pointer {
  cursor: pointer;
}
</style>
