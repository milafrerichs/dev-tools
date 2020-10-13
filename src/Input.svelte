<script>
  import { onMount } from 'svelte';

  export let callback;
  export let values= '';
  let value;

  function handleKeydown(event) {
    // if enter key hit call callback
    if(event.keyCode === 13) {
      callback(value);
    }
  }

</script>
<input bind:value={value} on:keydown={handleKeydown}>
