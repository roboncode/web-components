<svelte:options tag="svelte-counter" accessors={true} />

<!-- https://www.thisdot.co/blog/web-components-with-svelte -->
<script lang="ts">
  export let css = ''
  let btn; // using binding

  let count: number = 0
  const increment = e => {
    count += 1
    // e.target.dispatchEvent(new CustomEvent('change', { detail: { count }, composed: true }))
    btn.dispatchEvent(new CustomEvent('change', { detail: { count }, composed: true }))
  }
</script>

<button part="button" bind:this={btn} on:click={increment}>
  Count: {count}
</button>
