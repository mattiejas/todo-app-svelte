<script>
	import { supabase } from '$lib/supabase';
	import Button from '$lib/ui/Button.svelte';

	async function signInWithDiscord() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo: window.location.origin + '/authorize'
			}
		});
	}
</script>

<Button on:click={signInWithDiscord}>Login with Discord</Button>
