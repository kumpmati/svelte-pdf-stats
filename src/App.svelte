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
  <h1>SVELTE PDF STATS</h1>

  {#if pdfjs}
    <Parser pdfjs={pdfjs} />
  {:else}
    <p>loading...</p>
  {/if}
</main>


<style>
  :global(body) {
    background-color: rgb(245,245,245);
    height: max-content;
  }

  main {
    position: relative;

    margin: 5em auto;
    padding: 2em 3em;

    width: max-content;

    border-radius: .25em;

    background-color: white;
    box-shadow: 0 1em 5em rgba(0,0,0,0.1);
  }

  h1 {
    font-size: 2.75em;
    font-weight: 300;
    margin-bottom: 1.25em;
    color: #ff3e00;
  }
</style>