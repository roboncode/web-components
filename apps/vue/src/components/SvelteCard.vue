<script setup lang="ts">
import '@roboncode/svelte-ui'
// import '@roboncode/svelte-ui/dist/style.css'
import { ref } from 'vue'

const name = ref('Vue')
const count = ref(0)
const showMenu = ref(false)

const ratings = [
  { title: 'Getting Started', stars: 2.5 },
  { title: 'Documentation', stars: 3.5 },
  { title: 'Capabilities', stars: 4.5 },
  { title: 'Ease of Use', stars: 5 },
  { title: 'Styling', stars: 4.5 },
  { title: 'Framework Integration', stars: 5 },
  { title: 'File Size', stars: 5 },
]

const toggleName = () => {
  name.value = name.value === 'Vue' ? 'world' : 'Vue'
}

const handleCountChange = (evt: CustomEvent) => {
  console.log('change event from count:', evt.detail.count)
  count.value = evt.detail.count
}



const sizes = [10, 20, 30, 40]
const getRandomSize = () => {
  const randomIndex = Math.floor(Math.random() * sizes.length)
  return 'w-' + sizes[randomIndex]
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
        Svelte component vs. Svelte web component. The only difference I found was around dispatching events.</p>

      <p>The file size is
        amazingly small. Generally the size is half of other frameworks.</p>

      <p>There weren't any additional libraries needed for Svelte to work. However if you want to have the flexibility
        of
        disabling the shadow dom, then you will need to use a solution like <a
          href="https://github.com/crisward/svelte-tag"><code>svelte-tag</code></a>. I personally don't think it is
        needed. </p>
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

    <svelte-scorecard starColor="#f6e05e" score="4.75" :value="ratings" />

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
    <div class="font-normal p-4">
      <strong>Demonstrates</strong>
      <ul class="pl-4">
        <li class="list-disc">Manages its own state</li>
        <li class="list-disc">Styling from external css (outside of web component) using
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part"><code>::part()</code></a>
        </li>
        <li class="list-disc">Exposing events from web component</li>
      </ul>
    </div>

    <div class="flex gap-4 items-center">
      <svelte-counter @change="handleCountChange($event)" />
      <div class="px-3 h-8 flex items-center justify-center rounded bg-dark-200/40 border-2 border-dark-100">
        <strong>{{count}}</strong>
      </div>
    </div>
    <!-- <svelte-shadow /> -->
    <!-- </div> -->

    <div class="bg-purple-500 mt-8 p-4 py-2 rounded-md text-xl font-bold">Assembling Containers</div>
    <div class="font-normal p-4">
      <strong>Demonstrates</strong>
      <ul class="pl-4">
        <li class="list-disc">Complex layouts</li>
        <li class="list-disc">Extending the style from outside container using special classes</li>
      </ul>
    </div>

    <div class="w-full h-100 border border-dark-900 drop-shadow-md rounded overflow-hidden">
      <svelte-container class="w-full h-full">
        <div class="px-2 py-4 bg-dark-900 flex items-center drop-shadow-lg">
          <button class="i-tabler-menu-2" @click="showMenu = !showMenu"></button>
          <div class="font-bold">My application</div>
        </div>
        <div class="flex w-full h-full">
          <svelte-container v-if="showMenu" class="h-full bg-dark-800 drop-shadow">
            <div class="flex gap-2 items-center font-bold p-4 bg-dark-400 sticky top-0">
              <span class="i-tabler-user-circle"></span>
              <span>Jane Doe</span>
            </div>
            <div class="grid gap-4 p-4 w-50">
              <div>Home</div>
              <div>Reports</div>
              <div>Profile</div>
              <div>Settings</div>
              <div v-for="i in 10" :key="i" class="h-4 w-20 rounded-full bg-dark-200"></div>
            </div>
          </svelte-container>
          <svelte-container class="h-full flex-grow bg-dark-500">
            <div v-once class="inline-flex flex-wrap gap-4 p-4">
              <div v-for="i in 150" :key="i" class="h-4 rounded-full bg-dark-200" :class="getRandomSize()"></div>
            </div>
          </svelte-container>
        </div>
        <!-- w-10 w-20 w-30 w-40 -->
        <div class="flex items-center justify-center gap-2 p-4 bg-dark-900 text-light-blue-400 text-xs">
          <div>About</div> |
          <div>Blog</div> |
          <div>Careers</div>
        </div>
      </svelte-container>
    </div>
  </div>
</template>

<style>
svelte-counter::part(button) {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: bold;
  font-family: inherit;
  background-color: #0095ff;
  cursor: pointer;
  transition: border-color 0.25s;
}

svelte-counter::part(button):hover {
  background-color: #ff00e6;
}
</style>