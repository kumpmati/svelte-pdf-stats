<script>
  import FileHandler from "./FileHandler.svelte";
  import Visualizer from "./Visualizer/Visualizer.svelte";
  import { parse } from "./js/stats";
  import { fileToBase64 } from "./js/util";

  export let pdfjs;
  let stats;

  const loadPDF = async (file) => {
    const str = await fileToBase64(file);
    const pdf = await pdfjs.getDocument(str).promise;
    stats = await parse(pdf);
  }
</script>

<FileHandler on:file={e => loadPDF(e.detail)} />
<Visualizer stats={stats} />