<script>
  import { onMount } from 'svelte';

  export let callback;
  export let values = 'Title'

  function handleSubmit() {

  }

  function handleClick() {
    callback();
  }

</script>
<button class="text-black p-2 bg-white" on:click={handleClick}>{values}</button>
