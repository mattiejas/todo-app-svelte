<script lang="ts">
  import { supabase } from '$lib/supabase';
  import Button from '$lib/ui/Button.svelte';
  import { faDiscord } from '@fortawesome/free-brands-svg-icons';
  import { createPopover } from '@melt-ui/svelte';
  import Fa from 'svelte-fa';
  import Link from './Link.svelte';
  import { user } from '$lib/stores/user';

  const { trigger, content, open } = createPopover();

  async function signOut() {
    await fetch('/api/sign-out', { method: 'POST' });
    supabase.auth.signOut();
    user.set(undefined);
    open.set(false);
  }
</script>

{#if $user}
  <span class="text-purple-100 font-bold flex items-center gap-2">
    Hello,
    <img
      src={$user.user_metadata.avatar_url}
      class="inline-block w-8 h-8 rounded-full border-2 border-purple-100"
      alt="Avatar"
      use:trigger
      {...$trigger}
    />
    {$user.user_metadata.full_name}!
  </span>
{:else}
  <Link href="/login" class="flex items-center gap-4">
    <Fa icon={faDiscord} />
    Login with Discord
  </Link>
{/if}

{#if $open}
  <div {...$content} use:content class="bg-gray-200 p-4 rounded-lg">
    <Button on:click={signOut}>Log Out</Button>
  </div>
{/if}
