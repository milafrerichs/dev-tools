<script>
  import { onMount } from 'svelte';

  export let callback;
  export const values = [
    { title: 'Youth Reporter', value: '' },
  ]
  let selected = ''

  function handleSubmit() {

  }

  function handleChange() {
    callback(selected);
  }

</script>
<select class="text-black" bind:value={selected} on:blur="{handleChange}">
  <option value=''>Please select</option>
  {#each values as value }
    <option value={value.value}>
      {value.title}
    </option>
  {/each}
</select>
