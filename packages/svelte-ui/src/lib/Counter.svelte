<svelte:options tag="svelte-counter" accessors={true} />

<!-- https://www.thisdot.co/blog/web-components-with-svelte -->
<script lang="ts">
  import { get_current_component } from 'svelte/internal'

  let btn // using binding
  let count: number = 0
  const self = get_current_component()

  const increment = e => {
    count += 1
    // e.target.dispatchEvent(new CustomEvent('change', { detail: { count }, composed: true }))
    btn.dispatchEvent(new CustomEvent('change', { detail: { count }, composed: true, bubbles: true }))
    // self.shadowRoot.dispatchEvent(new CustomEvent('Change', { detail: { count }, composed: true, bubbles: true }))
    // self.shadowRoot.dispatchEvent(new Event('Change'))
    // self.shadowRoot.dispatchEvent(new Event('Change', { composed: true }))
    // self.shadowRoot.dispatchEvent(new Event('Change', { bubbles: true }))
    // self.shadowRoot.dispatchEvent(new Event('Change', { composed: true, bubbles: true }))
    // self.shadowRoot.dispatchEvent(new Event('Change'))
  }
</script>

<button part="button" bind:this={btn} on:click={increment}>
  Count: {count}
</button>
