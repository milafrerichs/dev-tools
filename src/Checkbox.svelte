<script>
  import { onMount } from 'svelte';

  export let callback;
  export const values = ''
  let value = false;

  function handleChange() {
    callback(value);
  }

</script>
<input class="text-black" type="checkbox" bind:checked={value} on:change="{handleChange}"/>
