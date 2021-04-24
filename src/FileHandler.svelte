<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let files;
  const submit = () => dispatch("file", files?.[0]);
</script>

<form>
  <input type="file" accept="application/pdf" bind:files>
  <input
    type="submit"
    value="Parse"
    on:click|preventDefault={submit}>
</form>