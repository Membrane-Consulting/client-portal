<script lang="ts">
  import supabase from '$lib/db'
  import { session } from '$app/stores'
  import { browser } from '$app/env'
  import Header from '$lib/components/ui/Header.svelte'
  import Footer from '$lib/components/ui/Footer.svelte'
  import Modal from 'svelte-simple-modal'
  import SessionErrorModal from '$lib/components/ui/modal_content/SessionErrorModal.svelte'

  if(browser){
    $session = supabase.auth.session()
    supabase.auth.onAuthStateChange((event, s) => {
      console.log(`AUTH_STATE_CHANGE: ${event}`)
      $session = s
    });
  }
  
</script>

<Header />
  <main>
    <slot></slot>
  </main>
<Footer />
<!--<Modal>
  <SessionErrorModal s={$session}/>
</Modal>-->

<style>
  main {
    padding-left: calc(100vw - 100%);
  }

  :global(:root) {
    --bg: #E0DCD8;
    --light-orange: #DDA788;
    --dark-orange: #BB5215;
    --light-blue: #E6F2FF;
    --dark-blue: #A5C4E7;
    --light-green: #999E90;
    --dark-green: #4E563E;
    --black: #1F1F1F;
    --shadow: #1f1f1f21;
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