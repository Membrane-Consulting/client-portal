<script>
  import { session } from '$app/stores'
  import SignOutButton from '$lib/components/auth/SignOutButton.svelte'
</script>

<header>
  <div>
    <h1>Black Cat Studio</h1>
    <h2>Client Portal</h2>
  </div>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      {#if $session}
        <li><a href="/dashboard">Dashboard</a></li>
      {/if}
      {#if !$session}
        <li><a href="/sign-in">Sign in</a></li>
        <li><a href="/sign-up">Sign up</a></li>
      {/if}
      {#if $session}
        <li><SignOutButton/></li>
      {/if}
    </ul>
  </nav>
</header>

<style>
  header {
    padding: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: .4rem .6rem;
  }

  :global(a) {
    text-decoration: none;
    color: var(--black);
  }
</style>