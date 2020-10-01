<script>
	import SvelteComponent from '../src/DevTools.svelte';

  let changeHost = (hostname) => {
    console.log(hostname)
  }
  let tools = [{type: 'select', title: 'Hostnames', callback: changeHost, values: [{title: 'Staging', value: 'staging.your.org'}]}]
</script>
<SvelteComponent env={process.env.NODE_ENV} tools={tools} position={'bottom'}/>
