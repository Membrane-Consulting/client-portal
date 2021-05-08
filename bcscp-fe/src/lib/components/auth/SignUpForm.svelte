<script lang="ts">
  import supabase from '$lib/db'

  let userEmail:string
  let userPassword:string

  async function signUp() {
    const { session: sesh,  error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword
    })
    if (error) {alert(error.message)}
  };

</script>

<form on:submit|preventDefault={signUp}>
  <label for="Email">Email</label>
  <input type="email" name="Email" bind:value={userEmail}>

  <label for="Pass">Password</label>
  <input type="password" name="Pass" bind:value={userPassword}>

  <input type="submit" value="Sign Up"/>
</form>

<!-- global styles in SignInForm.svelte -->