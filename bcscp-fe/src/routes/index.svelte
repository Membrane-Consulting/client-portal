<script lang="ts">
import { onMount } from "svelte";
import { session } from "$app/stores"

import Logo from '$lib/components/svg/logo.svelte'
import SignOutButton from '$lib/components/auth/SignOutButton.svelte'

  const l = [
    'complete invoices',
    'download assets',
    'review contracts',
  ]

  let i = 0
  let duration = 3500

  const increment = () => setInterval(() => i < l.length - 1 ? i++ : i = 0, duration)

  onMount(() => increment());
</script>

<div id="wrap">
  <Logo />
  <h1>a simple way to</h1>
  <h1>{l[i]}</h1>
  <div id="button-wrap">
    {#if $session}
      <a href="/dashboard">Dashboard</a>
      <SignOutButton styles={'padding: .8rem 2rem; margin: 2rem 2rem; background-color: var(--dark-green);color: var(--light-blue);'}/>
    {:else}
      <a href="/sign-in">Sign in</a>
      <a href="/sign-up">Sign up</a>
    {/if}
  </div>
</div>

<style>
  #wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  #wrap * {
    width: max-content;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1;
    margin: .5rem;
  }

  #button-wrap {
    padding: 2rem;
  }

  a {
    padding: .8rem 2rem;
    margin: 2rem 2rem;
    background-color: var(--dark-green);
    color: var(--light-blue);
  }
</style>