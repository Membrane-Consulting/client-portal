<script lang="ts">
  import supabase from '$lib/db'
  import { session } from '$app/stores'
  import { browser } from '$app/env'
  import Header from '$lib/components/ui/Header.svelte'
  import Footer from '$lib/components/ui/Footer.svelte'
  import Notifications from 'svelte-notifications';
  import NotificationChild from '$lib/components/auth/NotificationChild.svelte'

  if(browser){
    $session = supabase.auth.session()
    supabase.auth.onAuthStateChange((event, s) => {
      console.log(`AUTH_STATE_CHANGE: ${event}`)
      $session = s
    });
  }
  
</script>

<Notifications>
  <NotificationChild />
  <Header />
    <main>
      <slot></slot>
    </main>
  <Footer />
</Notifications>

<style>
  main {
    padding-left: calc(100vw - 100%);
  }

  :global(:root) {
    --bg: #D8E2E6;
    --black: #1F1F1F;
    --gray: #C5CFD6;
    --dark-gray: #5f5f61;
    --white: #FFFFFF;
    --blue: #2B44FF;
    --dark-blue: #1F28CF;
    --teal: #89C5CC;
    --dark-teal: #69A1AC;
    --shadow: #1f1f1f21;

    --radius: 0.35rem;
  }

  :global(body) {
    font-family: 'Mukta Mahee', sans-serif;
    background-color: var(--bg);
  }

  :global(h1), :global(h2), :global(h3) {
    margin: .5rem 0;
    line-height: 1;
  }

  :global(a) {
    color: var(--black);
  }

  :global(a):hover {
    color: var(--dark-green);
    text-decoration: underline;
  }
</style>