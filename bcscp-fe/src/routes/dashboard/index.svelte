<script lang="ts">
  import { session } from '$app/stores'
  import { client } from '$lib/components/auth/SanityClient'

  let data

  const load = async () => {
    const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ businessName, email, ownerName, phone }`
    await client.fetch(query)
      .then(res => {
        data = res[0]
      })
  }

  load();
</script>

{#if data}
  <h1>howdy, {data.ownerName}!</h1>
  <h2>{data.businessName}</h2>
{:else}
  <p>Loading...</p>
{/if}