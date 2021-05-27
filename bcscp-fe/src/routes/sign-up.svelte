<script lang="ts">
  import SignUpForm from '$lib/components/auth/SignUpForm.svelte'
</script>

<div class="home-blocks">
  <div>
  <p>Sign Up for a free account to manage all of your business with Black Cat Studio</p>
  <SignUpForm />
  </div> 
</div>

<style>
  .home-blocks {
    max-width: 500px;
    margin: auto;
    margin-top: -200px;
    justify-content: center;
  }
  p {
    max-width: 70%;
    font-size: 1.2rem;
    text-align: center;
    margin: 0 auto 2rem auto;
  }
</style>