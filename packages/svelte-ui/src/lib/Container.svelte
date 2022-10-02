<!-- <svelte:options tag="svelte-container" accessors={true} /> -->
<script lang="ts">
  export const className = ''
  const cls = 'flex flex-col overflow-hidden ' + className
</script>

<div class={cls}>
  <div class="flex flex-col flex-grow h-0 overflow-auto">
    <slot />
  </div>
</div>

<style>
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .overflow-auto {
    overflow: auto;
  }

  .h-0 {
    height: 0;
  }
</style>
