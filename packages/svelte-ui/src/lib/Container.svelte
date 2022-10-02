<!-- <svelte:options tag="svelte-container" accessors={true} /> -->
<script lang="ts">
  export let outerclass = ''
  export let innerclass = ''
  const outerCls = 'svelte-w-full svelte-h-full svelte-flex svelte-flex-col svelte-overflow-hidden ' + outerclass
  const innerCls = 'svelte-flex svelte-flex-col svelte-flex-grow svelte-h-0 svelte-overflow-auto ' + innerclass
</script>

<div class={outerCls}>
  <div class={innerCls}>
    <slot />
  </div>
</div>

<style global>
  .svelte-flex {
    display: flex;
  }

  .svelte-flex-col {
    flex-direction: column;
  }

  .svelte-flex-grow {
    flex-grow: 1;
  }

  .svelte-overflow-hidden {
    overflow: hidden;
  }

  .svelte-overflow-auto {
    overflow: auto;
  }

  .svelte-h-0 {
    height: 0;
  }

  .svelte-w-full {
    width: 100%;
  }

  .svelte-h-full {
    height: 100%;
  }
</style>
