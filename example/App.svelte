<script>
	import SvelteComponent from '../src/DevTools.svelte';

  let changeHost = (hostname) => {
    console.log(hostname)
  }
  let inputChange = (value) => {
    console.log(value)
  }
  let submit = (values) => {
    console.log(values)
  }
  let tools = [
    {type: 'select', title: 'Hostnames', callback: changeHost, values: [{title: 'Staging', value: 'staging.your.org'}]},
    { type: 'input', title: 'Inout Test', callback: inputChange, values: 'Test'},
    { type: 'button', title: 'Button Test', callback: inputChange, values: 'Test'},
    { type: 'checkbox', title: 'Button Test', callback: inputChange, values: 'Test'}
  ];
</script>
<SvelteComponent env={process.env.NODE_ENV} tools={tools} position={'bottom'} submit submitCallback={submit}/>
