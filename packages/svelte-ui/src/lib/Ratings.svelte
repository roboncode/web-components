<svelte:options tag="svelte-ratings" accessors={true} />

<script lang="ts">
  import StarEmpty from './StarEmpty.svelte'
  import StarHalf from './StarHalf.svelte'
  import StarSolid from './StarFull.svelte'

  export let title = 'Svelte Scorecard'
  export let score = '0'
  export let max = 5
  export let value: { title: string; stars: number }[] = []

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
</script>

<div class="p-8 rounded-lg bg-black/50 mb-8">
  <div class="flex items-center font-bold text-xl">
    <div>{title}</div>
    <div class="flex-grow" />
    <div>Score: {score}</div>
  </div>
  <ul>
    <!-- loop through ratings -->
    {#each value as { title, stars }}
      <li>
        <div class="flex items-center gap-2">
          <strong>{title}</strong>
          <div class="flex-grow" />
          <div class="flex gap-1 text-yellow-300">
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
  .text-xl {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }

  .font-bold {
    font-weight: 700;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    padding: 0.5rem 0.8rem;
    border-radius: 0.5rem;
  }

  li:hover {
    background-color: #ffffff0d;
  }

  .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .flex-grow {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }

  .items-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .text-yellow-300 {
    --tw-text-opacity: 1;
    color: rgba(252, 211, 77, var(--tw-text-opacity));
  }

  .gap-1 {
    grid-gap: 0.25rem; /* 4px */
    gap: 0.25rem; /* 4px */
  }

  .gap-2 {
    grid-gap: 0.5rem; /* 8px */
    gap: 0.5rem; /* 8px */
  }

  .p-8 {
    padding: 2rem; /* 32px */
  }

  .rounded-lg {
    border-radius: 0.5rem; /* 8px */
  }

  .bg-black\/50 {
    --tw-bg-opacity: 0.5;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  }

  .mb-8 {
    margin-bottom: 2rem; /* 32px */
  }
</style>
