<script>
  import { onMount } from 'svelte';

  export let callback;
  export let values= [
    { title: 'Youth Reporter', value: '' },
  ]
  let selected = ''

  function handleSubmit() {

  }

  function handleChange() {
    callback(selected);
  }

</script>
<select bind:value={selected} on:change="{handleChange}">
  <option value=''>Please select</option>
  {#each values as value }
    <option value={value.value}>
      {value.title}
    </option>
  {/each}
</select>
