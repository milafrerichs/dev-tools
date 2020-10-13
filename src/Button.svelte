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
<button on:click={handleClick}>{values}</button>
