<svelte:options tag="svelte-scorecard" accessors={true} />

<script lang="ts">
  import { get_current_component } from 'svelte/internal'
  import StarEmpty from './StarEmpty.svelte'
  import StarHalf from './StarHalf.svelte'
  import StarSolid from './StarFull.svelte'

  const self = get_current_component()
  export let css = ''
  export let title = 'Scorecard'
  export let score = '0'
  export let max = 5
  export let value: { title: string; stars: number }[] = []
  export let starColor = '#333333'

  $: numberToArray = stars => {
    // convert 3.5 to array [1, 1, 1, 0.5, 0]
    const vals = []
    for (let i = 0; i < Math.min(max, 5); i++) {
      if (stars >= 1) {
        vals.push(1)
        stars--
      } else if (stars > 0) {
        vals.push(stars)
        stars = 0
      } else {
        vals.push(0)
      }
    }
    return vals
  }

  $: if (css) {
    let style = document.createElement('style')
    style.textContent = css
    self.shadowRoot.appendChild(style)
  }
</script>

<!-- This example is using UnoCSS to style. Tailwind could be used as well -->
<div class="p-4 pb-4 rounded-lg bg-dark-900/50">
  <div class="pt-4 pl-4 pr-4 flex items-center font-bold text-xl">
    <div>{title}</div>
    <div class="flex-grow" />
    <div>{score}</div>
  </div>
  <ul class="p-0">
    <!-- loop through ratings -->
    {#each value as { title, stars }}
      <li class="list-none py-2 px-3 rounded-lg hover:bg-white/10">
        <div class="flex items-center gap-2">
          <strong>{title}</strong>
          <div class="flex-grow" />
          <div class="flex gap-1 star" style="--star-color: {starColor}">
            {#each numberToArray(stars) as star}
              {#if star === 1}
                <StarSolid />
              {:else if star === 0.5}
                <StarHalf />
              {:else}
                <StarEmpty />
              {/if}
            {/each}
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .list-none {
    list-style-type: none;
  }

  .star {
    color: var(--star-color);
  }
</style>
