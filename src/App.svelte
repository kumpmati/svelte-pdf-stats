<script>
  import Parser from './Parser.svelte';

  let pdfjs;

  // called when PDF.js has finished loading
  const init = () => {
    pdfjs = window.pdfjsLib;
  }
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.min.js"
    integrity="sha512-SG4yH2eYtAR5eK4/VL0bhqOsIb6AZSWAJjHOCmfhcaqTkDviJFoar/VYdG96iY7ouGhKQpAg3CMJ22BrZvhOUA=="
    crossorigin="anonymous"
    on:load={init}
  ></script>
</svelte:head>

<main>
  <h1>Fancy PDF word count</h1>

  {#if pdfjs}
    <Parser pdfjs={pdfjs} />
  {:else}
    <p>loading...</p>
  {/if}
</main>


<style>
  :global(body) {
    background-color: rgb(245,245,245);
  }

  main {
    position: relative;
    top: 5em;

    margin: 0 auto;
    width: max-content;

    padding: 2em 3em;

    border-radius: .25em;

    background-color: white;
    box-shadow: 0 1em 5em rgba(0,0,0,0.1);
  }

  h1 {
    color: rgb(50, 119, 151);
    margin-bottom: 1.5em;
  }
</style>