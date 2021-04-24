<script>
  import PageStats from "./PageStats.svelte";
  import { sum } from '../js/util';

  export let stats;
  let showPageStats = false;

  const togglePageStats = () => {
    showPageStats = !showPageStats;
  }

  $: totalWords = sum(stats, page => page.words);
  $: totalChars = sum(stats, page => page.chars.withSpaces);
  $: totalCharsNoSpaces = sum(stats, page => page.chars.withoutSpaces);
</script>

{#if !stats}
  <p id="placeholder">No PDF loaded</p>
{:else}
  <div>
    <h1>Total:</h1>
    <p>Words: {totalWords}</p>
    <p>Characters (with spaces): {totalChars}</p>
    <p>Characters (without spaces): {totalCharsNoSpaces}</p>

    <button
      on:click={togglePageStats}>
      {showPageStats ? "Hide" : "Show"} stats per page
    </button>

    <div id="page-stats" class:visible={showPageStats}>
      <h2>Stats per page:</h2>
      <ul>
        {#each stats as pageStats}
          <PageStats stats={pageStats} />
        {/each}
      </ul>
    </div>
  </div>
{/if}

<style>
  #placeholder {
    text-align: center;
    color: gray;
  }

  #page-stats {
    overflow: hidden;
    height: 0;
  }

  #page-stats.visible {
    height: auto;
  }

  #page-stats > ul {
    margin: 0;
    padding: 0;
    padding-left: .5em;
    list-style-type: none;
  }
</style>