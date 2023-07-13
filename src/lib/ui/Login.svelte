<script lang="ts">
  import { supabase } from '$lib/supabase';
  import Button from '$lib/ui/Button.svelte';
  import { faDiscord } from '@fortawesome/free-brands-svg-icons';
  import { createPopover } from '@melt-ui/svelte';
  import Fa from 'svelte-fa';

  const user = supabase.auth.getUser();

  const { trigger, content, open } = createPopover();

  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: window.location.origin + '/authorize',
      },
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
  }
</script>

{#await user then value}
  {#if value.data && value.data.user}
    <span class="text-purple-100 font-bold flex items-center gap-2">
      Hello,
      <img
        src={value.data.user?.user_metadata.avatar_url}
        class="inline-block w-8 h-8 rounded-full border-2 border-purple-100"
        alt="Avatar"
        use:trigger
        {...$trigger}
      />
      {value.data.user?.user_metadata.full_name}!
    </span>
  {:else}
    <Button on:click={signInWithDiscord} class="flex items-center gap-4">
      <Fa icon={faDiscord} />
      Login with Discord
    </Button>
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

{#if $open}
  <div {...$content} use:content class="bg-gray-200 p-4 rounded-lg">
    <Button on:click={signOut}>Log Out</Button>
  </div>
{/if}
