<script>
  import { onMount } from 'svelte';
  import Select from './Select.svelte';

  export let position = 'bottom';
  export let tools = [];
  export let env = '';

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
  let types = { 'select': Select }

  function handleToggle() {
    hidden = !hidden;
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
    display: block;

  }
  .bottom {
    bottom: 0;
    left: 0;
  }
</style>
{#if activated}
  <div id="dev-tools" class="{position}">
    <div class="toggle">🛠</div>
    <div class="tools">
      {#each tools as tool}
        <h2>{tool.title}</h2>
        <svelte:component values={tool.values} callback={tool.callback} this={types[tool.type]}/>
      {/each}
    </div>
  </div>
{/if}
