<script lang="ts">
  import { session } from '$app/stores'
  import { client, options, makeUrl } from '$lib/components/auth/SanityClient'
  import { formatDate } from '$lib/utils'
  import Loading from '$lib/components/ui/Loading.svelte'

  let data

  const load = async () => {
    const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ contracts }`
    await client.fetch(query)
      .then(res => {
        data = res[0]
        console.log(data)
      })
  }

  load();
</script>

<h1>Contracts</h1>
<p>click the link to open the PDF in a new tab where you can download it.</p>
{#if data}
  <table>
    <tr>
      <th>Name</th>
      <th>Date Signed</th>
      <th>Open</th>
    </tr>
    {#each data.contracts as { asset: {_ref}, name, dateSigned }}
      <tr>
        <td>{ name }</td>
        <td>{formatDate(dateSigned)}</td>
        <td><a href={makeUrl(_ref)} target="_blank">click here</a></td> 
      </tr>
    {/each}
  </table>
{:else}
  <Loading />
{/if}