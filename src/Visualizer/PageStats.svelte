<script>
  export let stats;
</script>

<li>
  <h3>Page {stats.pageNum}</h3>
  <p>Words: <b>{stats.words}</b></p>
  <p>Characters: (with spaces): <b>{stats.chars.withSpaces}</b></p>
  <p>Characters: (without spaces): <b>{stats.chars.withoutSpaces}</b></p>
</li>