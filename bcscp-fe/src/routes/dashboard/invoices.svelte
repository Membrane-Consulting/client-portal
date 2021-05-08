<script lang="ts">
  import { session } from '$app/stores'
  import { client, options, makeUrl } from '$lib/components/auth/SanityClient'

  let data

  const load = async () => {
    const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ invoices }`
    await client.fetch(query)
      .then(res => {
        data = res[0]
      })
  }

  load();
</script>

{#if data}
  <ul>
    {#each data.invoices as { asset: {_ref}, number}}
      <li><a href={makeUrl(_ref)} target="_blank">{ number }</a></li>    
    {/each}
  </ul>
{:else}
  <p>Loading...</p>
{/if}