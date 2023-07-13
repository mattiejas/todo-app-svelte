<script>
  import { supabase } from '$lib/supabase';

  const user = supabase.auth.getUser().then((user) => {
    // redirect to home if user is already logged in
    if (user) {
      window.location.href = '/';
    }

    return user;
  });
</script>

{#await user}
  <p>Redirecting...</p>
{/await}
