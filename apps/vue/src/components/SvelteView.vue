<script setup lang="ts">
import '@roboncode/svelte-ui'
import styles from  '@roboncode/svelte-ui/dist/style.css'
import { computed, ref } from 'vue'
import Card from './Card.vue'

const name = ref('everyone')
const count = ref(0)
const showMenu = ref(true)

const ratings = [
  { title: 'Getting Started', stars: 2.5 },
  { title: 'Documentation', stars: 3.5 },
  { title: 'Development', stars: 5 },
  { title: 'Capabilities', stars: 4.5 },
  { title: 'Ease of Use', stars: 5 },
  { title: 'Styling', stars: 4.5 },
  { title: 'Framework Integration', stars: 5 },
  { title: 'File Size', stars: 5 },
]

const toggleName = () => {
  name.value = name.value === 'everyone' ? 'world' : 'everyone'
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

const svelteCSS = computed(() => {
  return styles.replace(/.*::backdrop.*?}(.*)/gi, "$1")
})
</script>

<template>
  <div class="space-y-6 grid gap-3 ">
    <!-- <div class="flex flex-col justify-between gap-4 h-full"> -->
    <div class="p-4 text-2xl font-bold">Svelte Web Components</div>

    <div class="px-4 space-y-3">
      <div class="font-bold text-xl">Summary</div>
      <p>
        Svelte was actually pretty simple to use. There is little difference between creating a Svelte component vs.
        Svelte web component. The only difference I found was around dispatching events.
      </p>

      <p>The file size is amazingly small. Generally the size is half of other frameworks.</p>

      <p class="border-l-3 border-light-blue-400 pl-4">
        There weren't any additional libraries needed for Svelte to work. However if you want to have the flexibility of
        disabling the shadow dom, then you will need to use a solution like
        <a href="https://github.com/crisward/svelte-tag"><code>svelte-tag</code></a
        >. I personally don't think it is needed.
      </p>
    </div>


    <svelte-scorecard starColor="#f6e05e" score="4.75" :value="ratings" :css="svelteCSS"  />

    <Card title="Stateless component">
      <template #details>
        <li class="list-disc">Data binding</li>
        <li class="list-disc">Default and named slots</li>
        <li class="list-disc">Internal component styling</li>
      </template>
      <svelte-card :name="name">
        <div class="font-normal">This is content that resides in the default slot.</div>
        <div slot="footer" class="flex justify-end">
          <button @click="toggleName()">Toggle name</button>
        </div>
      </svelte-card>
    </Card>

    <Card title="Stateful component">
      <template #details>
        <li class="list-disc">Manages its own state</li>
        <li class="list-disc">Exposing events from web component</li>
        <li class="list-disc">
          Styling using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part"><code>::part()</code></a> and
          CSS
        </li>
        <li class="list-disc">
          Styling using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part"><code>::part()</code></a> and
          TailwindCSS
        </li>
      </template>
      <div class="flex gap-4 items-center">
        <svelte-counter name="css-example" @change="handleCountChange($event)" />
        <svelte-counter name="tailwind-example" @change="handleCountChange($event)" />
        <strong>Last known value from event: {{ count }}</strong>
      </div>
    </Card>

    <Card title="Assembling Containers">
      <template #details>
        <li class="list-disc">Complex layouts</li>
        <li class="list-disc">Extending the style from outside container using special classes</li>
      </template>
      <div class="w-full h-100">
        <svelte-container>
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
              <div class="grid gap-4 p-4 w-50 text-sm">
                <div>Home</div>
                <div>Reports</div>
                <div>Profile</div>
                <div>Settings</div>
                <div v-for="i in 10" :key="i" class="h-4 w-20 rounded-full bg-dark-200"></div>
              </div>
            </svelte-container>
            <svelte-container class="flex-grow bg-dark-500">
              <div v-once class="inline-flex flex-wrap gap-4 p-4">
                <div v-for="i in 150" :key="i" class="h-4 rounded-full bg-dark-200" :class="getRandomSize()"></div>
              </div>
            </svelte-container>
          </div>
          <div class="flex items-center justify-center gap-2 p-4 bg-dark-900 text-light-blue-400 text-xs">
            <div>About</div>
            <span>|</span>
            <div>Blog</div>
            <span>|</span>
            <div>Careers</div>
          </div>
        </svelte-container>
      </div>
    </Card>

    <!-- w-10 w-20 w-30 w-40 -->
    <Card title="Multiple components">
      <template #details>
        <li class="list-disc">Binding to complex data</li>
        <li class="list-disc">Embedding web components within web components</li>
        <li class="list-disc">Dynamically styling component using CSS <code>var</code></li>
        <li class="list-disc">Applying styles by passing a CSS from a CSS file generated using TailwindCSS (UnoCSS)</li>
      </template>
      <svelte-scorecard starColor="#f6e05e" score="1 million" :value="[{title: 'Example'}]" :css="svelteCSS" />
    </Card>
  </div>
</template>

<style>
/* Styling web component with ::part and CSS */
svelte-counter[name='css-example']::part(button) {
  border: 3px solid transparent;
  border-radius: 0.5rem;
  padding-left: 1.25rem;
  /* 20px */
  padding-right: 1.25rem;
  /* 20px */
  padding-top: 0.75rem;
  /* 12px */
  padding-bottom: 0.75rem;
  /* 12px */
  font-size: 1rem;
  /* 16px */
  font-weight: 700;
  line-height: 1;
  background-color: rgb(28, 28, 30);
  cursor: pointer;
  transition: border-color 300ms;
}

svelte-counter[name='css-example']::part(button):hover {
  border-color: rgb(20, 184, 166);
}

/* Styling web component with ::part and TailwindCSS / UnoCSS */
/* https://tailwindcss.com/docs/functions-and-directives#apply */
svelte-counter[name='tailwind-example']::part(button) {
  @apply px-5 py-3 bg-dark-600 border-3 border-transparent font-bold text-1rem rounded-lg cursor-pointer duration-300 hover:border-teal-500;
}
</style>
