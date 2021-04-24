<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let files;
  const submit = () => dispatch("file", files?.[0]);
</script>

<form>
  <input type="file" accept="application/pdf" bind:files>
  <div id="submit-wrapper" class:visible={!!files}>
    <input
      id="submit"
      type="submit"
      value="Parse"
      disabled={!files}
      on:click|preventDefault={submit}>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  #submit-wrapper {
    height: 0em;
    transition: height 200ms;
    overflow: hidden;
  }

  #submit-wrapper.visible {
    height: 3em;
  }

  #submit {
    font-size: 1.25em;
    width: 100%;
  }
</style>