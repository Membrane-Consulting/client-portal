<script lang="ts">
  import { session } from '$app/stores'
  import { client, options, makeUrl } from '$lib/components/auth/SanityClient'
  import Loading from '$lib/components/ui/Loading.svelte'

  export let type

  let data

  const load = async (t) => {
    const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ ${type} }`
    let a = await client.fetch(query)
    data = a[0]
  }

  load(type);
</script>

{#if data}
  <table>
    <tr>
      <th>Number</th>
      <th>Amount Due</th>
      <th>Paid?</th>
      <th>Open</th>
    </tr>
    {#each data as { asset: {_ref}, number, amountDue, outstanding}}
      <tr>
        <td>{ number }</td>
        <td>${amountDue}</td>
        <td>{outstanding ? '❌' : '✅' }</td>
        <td><a href={makeUrl(_ref)} target="_blank">click here</a></td> 
      </tr>
    {/each}
  </table>
{:else}
  <Loading />
{/if}

<style>
  table {
    min-width: 50%;
    text-align: left;
  }

  table, th, td {
    border: 1px solid var(--black);
    border-collapse: collapse;
  }

  th, td {
    padding:.3rem;
    width: max-content;
  }

  th {
    background-color: var(--dark-green);
    color: white;
  }

  tr:nth-child(odd) {
    background-color: #999E9063;
  }
</style>