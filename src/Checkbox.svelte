<script>
  import { onMount } from 'svelte';

  export let callback;
  export let values = ''
  let value = false;

  function handleChange() {
    callback(value);
  }

</script>
<input type="checkbox" bind:checked={value} on:change="{handleChange}"/>
