<script>
  import { onMount } from 'svelte';

  export let callback;
  export const values= '';
  let value;

  function handleKeydown(event) {
    // if enter key hit call callback
    if(event.keyCode === 13) {
      callback(value);
    }
  }

</script>
<input class="text-black" bind:value={value} on:keydown={handleKeydown}>
