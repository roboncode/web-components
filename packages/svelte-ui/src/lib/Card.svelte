<svelte:options tag="svelte-card" accessors={true} />

<script lang="ts">
  export let name = 'world'
</script>

<div class="header">
  Hello, {name} from Svelte.js!
</div>
<div class="content">
  <slot />
</div>
<div class="footer">
  <slot name="footer" />
</div>

<style>
  :host {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    outline: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: 1rem;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  :host(:hover) {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .header {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .content {
    padding: 1rem;
    padding-top: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.2rem;
  }

  .footer {
    padding: 1rem;
  }
</style>
