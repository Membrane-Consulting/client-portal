<script lang="ts">
  import supabase from '$lib/db'
  import { goto } from '$app/navigation'

  let userEmail:string
  let userPassword:string

  async function signIn() {
    const { session: sesh,  error } = await supabase.auth.signIn({
      email: userEmail,
      password: userPassword
    })
    if (error) {alert(error.message)}
    goto('dashboard')
  };

</script>

<form on:submit|preventDefault={signIn}>
  <label for="Email">Email</label>
  <input type="email" name="Email" bind:value={userEmail}>

  <label for="Pass">Password</label>
  <input type="password" name="Pass" bind:value={userPassword}>

  <input type="submit" value="Sign In"/>
</form>

<style>
  :global(form) {
    margin: auto;
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: .6rem;
  }
  :global(label) {
    line-height: 1;
  }

  :global(form > input[type=submit]):hover {
    cursor: pointer;
  }
</style>