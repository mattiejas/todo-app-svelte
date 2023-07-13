<script>
	import { supabase } from '$lib/supabase';

	const user = supabase.auth.getUser();
</script>

{#await user}
	<p>Waiting...</p>
{:then value}
	<p>The value is {JSON.stringify(value)}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
