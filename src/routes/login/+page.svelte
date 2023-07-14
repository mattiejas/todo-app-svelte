<script lang="ts">
  const redirectTo = window.location.origin + '/authorize';
</script>

<main>
  <h1>Login</h1>
  <form class="socials" method="POST">
    <button formaction="?/login&redirect_to={redirectTo}" class="discord">
      <span>Discord</span>
    </button>
  </form>
</main>
