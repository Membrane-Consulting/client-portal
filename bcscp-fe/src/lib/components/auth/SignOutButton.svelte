<script lang="ts">
  import supabase from '$lib/db'
  import { goto } from '$app/navigation'

  export let styles

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {alert(error.message)}
    goto('/')
  };

</script>

<a style={styles} href="/" on:click={signOut}>Sign Out</a>

<style>
  a {
    background: var(--white);
    padding: .3rem .5rem;
    border-radius: 0.35rem;
  }
</style>