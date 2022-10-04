<script setup lang="ts">
import '@roboncode/svelte-ui'
// import '@roboncode/svelte-ui/dist/style.css'

import { ref } from 'vue'

const name = ref('Vue')
const count = ref(0)

const ratings = [
  { title: 'Getting Started', stars: 2.5 },
  { title: 'Documentation', stars: 3.5 },
  { title: 'Capabilities', stars: 3.5 },
  { title: 'Ease of Use', stars: 3.5 },
  { title: 'Styling', stars: 3.5 },
  { title: 'Framework Integration', stars: 3.5 },
  { title: 'File Size', stars: 3.5 },
]

const toggleName = () => {
  name.value = name.value === 'Vue' ? 'world' : 'Vue'
}

const handleCountChange = (evt: CustomEvent) => {
  console.log('change event from count:', evt.detail.count)
  count.value = evt.detail.count
}

// const sheet = new CSSStyleSheet()
// sheet.replaceSync('a { color: red; }');
</script>
  
<template>
  <div class="bg-dark-800 shadow-2xl grid p-4 gap-3 rounded-lg drop-shadow">
    <!-- <div class="flex flex-col justify-between gap-4 h-full"> -->
    <div class="p-4 text-2xl font-bold">Svelte Web Components</div>

    <div class="px-4">
      <div class="font-bold text-xl">Summary</div>
      <p>Svelte was actually pretty simple to use. There is little difference between creating a
        Svelte component vs. Svelte web component. Difference is mainly around dispatching events. The file size is
        amazingly small. Generally the size is half of other frameworks.</p>
    </div>

    <div class="bg-purple-500 p-4 py-2 rounded-md text-xl font-bold mt-9">Multiple components</div>
    <div class="font-normal p-4">
      <strong>Demonstrates</strong>
      <ul class="pl-4">
        <li class="list-disc">Binding to complex data</li>
        <li class="list-disc">Embedding web components within web components</li>
        <li class="list-disc">Dynamically styling component</li>
      </ul>
    </div>

    <svelte-scorecard starColor="#f6e05e" score="4.25" :value="ratings" />

    <div class="bg-purple-500 mt-8 p-4 py-2 rounded-md text-xl font-bold">Stateless component</div>
    <div class="font-normal p-4">
      <strong>Demonstrates</strong>
      <ul class="pl-4">
        <li class="list-disc">Data binding</li>
        <li class="list-disc">Default and named slots</li>
        <li class="list-disc">Internal component styling</li>
      </ul>
    </div>
    <svelte-card :name="name">
      <div class="font-normal">This is content that resides in the default slot.</div>
      <div slot="footer" class="flex justify-end">
        <button @click="toggleName()">Toggle name</button>
      </div>
    </svelte-card>

    <div class="bg-purple-500 mt-8 p-4 py-2 rounded-md text-xl font-bold">Stateful component</div>
    <div class="font-normal">Manages its own state and dispatches a change event when the count as changed.</div>

    <div class="flex gap-4 items-center">
      <svelte-counter className="btn" @change="handleCountChange($event)" />
      <div class="w-8 h-8 flex items-center justify-center rounded bg-light-blue-500">
        <strong>{{count}}</strong>
      </div>
    </div>
    <!-- <svelte-shadow /> -->
    <!-- </div> -->
    <!-- <svelte-container class="w-full h-100" innerClass="gap-2">
          <div>header</div>
          <div v-for="i in 10" :key="i" class="p-2 bg-purple-500 rounded">Item {{i}} </div>
          <div class="sticky top-0 p-2 bg-yellow-500 rounded">Sticky </div>
          <div v-for="i in 10" :key="i" class="p-2 bg-purple-500 rounded">Item {{i}} </div>
          <div>footer</div>
        </svelte-container> -->
  </div>
</template>
  
<style scoped>
/* .container {
    background-color: #1c1c1c;
    filter: drop-shadow(0 0 1.4em #af64ffaa);
  } */
</style>