<script>
  import FileHandler from "./FileHandler.svelte";
  import { fileToBase64 } from "./util";

  export let pdfjs;

  const loadPDF = async (file) => {
    const str = await fileToBase64(file);
    const pdf = await pdfjs.getDocument(str).promise;
    console.log(pdf);
  }
</script>

<FileHandler on:file={e => loadPDF(e.detail)} />