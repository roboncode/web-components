import Container from './lib/Container.svelte'
import Counter from './lib/Counter.svelte'
import Hello from './lib/Hello.svelte'
import Shadow from './lib/Shadow.svelte'
import WebComponent from 'svelte-tag'

new WebComponent({ component: Container, tagname: 'svelte-container', attributes: ['innerClass', 'innerClass'] })
new WebComponent({ component: Counter, tagname: 'svelte-counter' })
new WebComponent({ component: Hello, tagname: 'svelte-hello', attributes: ['name'] })
new WebComponent({ component: Shadow, tagname: 'svelte-shadow', attributes: ['className'], shadow: true })
