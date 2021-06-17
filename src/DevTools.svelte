<script>
  import { onMount } from 'svelte';
  import Select from './Select.svelte';
  import Input from './Input.svelte';
  import Button from './Button.svelte';
  import Checkbox from './Checkbox.svelte';

  export const position = 'bottom';
  export let tools = [];
  export let env = '';
  export let submit = false;
  export let submitCallback;

  export let activated = false;
  function loadDevTools() {
    // this allows you to explicitly disable it in development for example
    const explicitlyDisabled =
      window.location.search.includes('dev-tools=false') ||
      window.localStorage.getItem('dev-tools') === 'false'

    const explicitlyEnabled =
      window.location.search.includes('dev-tools=true') ||
      window.localStorage.getItem('dev-tools') === 'true'

    if (
      !explicitlyDisabled &&
      (env === 'development' || explicitlyEnabled)
    ) {
      activated = true;
    }
  }

  let hidden = true;
  let types = { 'select': Select, 'input': Input, 'button': Button, 'checkbox': Checkbox }

  function handleToggle() {
    hidden = !hidden;
  }

  function handleSubmit(event) {
    submitCallback(event)
  }

  onMount(() => {
    loadDevTools();
  })
</script>
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
{#if activated}
  <div id="dev-tools" class="cursor-pointer absolute bottom-0 left-0 bg-black text-white h-10 w-10 p-2 opacity-40 transition-all duration-300 group hover:w-full hover:opacity-90 hover:h-60 hover:p-8">
    <div class="cursor-pointer group-hover:hidden">🛠</div>
    <form on:submit|preventDefault={handleSubmit} class="w-screen">
      <div class="grid grid-flow-row grid-cols-4 gap-4 hidden group-hover:grid">
        {#each tools as tool}
          <div class="">
            <h2>{tool.title}</h2>
            <svelte:component values={tool.values} callback={tool.callback} this={types[tool.type]}/>
          </div>
        {/each}
        {#if submit}
          <div class="">
            <input class="text-black p-2" type="submit" value="Submit" />
          </div>
        {/if}
      </div>
    </form>
  </div>
{/if}
