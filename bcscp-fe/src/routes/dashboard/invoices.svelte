<script lang="ts">
  import { session } from '$app/stores'
  import { client, options, makeUrl } from '$lib/components/auth/SanityClient'
  import Loading from '$lib/components/ui/Loading.svelte'

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

<h1>Invoices</h1>
<p>click the link to open the PDF in a new tab where you can download it.</p>
{#if data}
  <table>
    <tr>
      <th>Number</th>
      <th>Amount Due</th>
      <th>Paid?</th>
      <th>Open</th>
    </tr>
    {#each data.invoices as { asset: {_ref}, number, amountDue, outstanding}}
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