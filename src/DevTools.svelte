<script>
  import { onMount } from 'svelte';
  import Select from './Select.svelte';
  import Input from './Input.svelte';
  import Button from './Button.svelte';
  import Checkbox from './Checkbox.svelte';

  export let position = 'bottom';
  export let tools = [];
  export let env = '';
  export let submit = false;
  export let submitCallback;

  let activated = false;
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
<style>
  .toggle  {
    cursor: pointer;
  }
  .tools {

  }
  .hidden {
    display: none;
  }
  #dev-tools {
    position: absolute;
    background: black;
    opacity: 0.4;
    color: white;
    width: 100%;
    padding: 20px;
    height: 40px;
    width: 40px;
    transition: all 0.3s;
  }
  #dev-tools:hover {
    height: 300px;
    width: 100%;
    opacity: 0.9;
  }
  #dev-tools .tools {
    display: none;
  }
  #dev-tools:hover .tools {
    display: flex;
  }
  .bottom {
    bottom: 0;
    left: 0;
  }
</style>
{#if activated}
  <div id="dev-tools" class="{position}">
    <div class="toggle">🛠</div>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="tools">
        {#each tools as tool}
          <h2>{tool.title}</h2>
          <svelte:component values={tool.values} callback={tool.callback} this={types[tool.type]}/>
        {/each}
        {#if submit}
          <input type="submit" value="Submit" />
        {/if}
      </div>
    </form>
  </div>
{/if}
