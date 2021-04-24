<script>
  import PageStats from "./PageStats.svelte";
  import { sum }from '../js/util';

  export let stats;

  $: totalWords = sum(stats, page => page.words);
  $: totalChars = sum(stats, page => page.chars.withSpaces);
  $: totalCharsNoSpaces = sum(stats, page => page.chars.withoutSpaces);
</script>

<div>
  {#if !stats}
    <p>No PDF loaded</p>
  {:else}
    <div>
      <h1>Total:</h1>
      <p>Words: {totalWords}</p>
      <p>Characters (with spaces): {totalChars}</p>
      <p>Characters (without spaces): {totalCharsNoSpaces}</p>

      <h2>Stats per page:</h2>
      <ul>
        {#each stats as pageStats}
          <PageStats stats={pageStats} />
        {/each}
      </ul>
    </div>
  {/if}
</div>