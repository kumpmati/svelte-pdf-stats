<script>
  export let stats;
</script>

<div>
  {#if !stats}
    <p>No PDF loaded</p>
  {:else}
    <p>{JSON.stringify(stats)}</p>
  {/if}
</div>