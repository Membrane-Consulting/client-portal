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
  <input type="email" name="Email" bind:value={userEmail} placeholder="person@example.com">

  <label for="Pass">Password</label>
  <input type="password" name="Pass" bind:value={userPassword} placeholder="*********">

  <input type="submit" value="Sign In"/>
</form>

<style>
  :global(form) {
    margin: auto;
    width: 100%;
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

  :global(label){
    width: 80%;
    margin: auto;
  }

  :global(input){
    width: 80%;
    height: 35px;
    margin: auto;
    border-radius: 0.35rem;
    border: none;
    padding: .3rem .5rem;
    box-shadow: #1f1f1f30 3px 3px 4px;
  }

  :global(input[type=submit]){
    background-color: var(--black);
    border: none;
    color: var(--white);
    margin-top: 1rem;
  }
</style>