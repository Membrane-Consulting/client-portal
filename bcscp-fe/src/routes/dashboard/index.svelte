<script lang="ts">
  import type { UserSanityData } from 'src/global';
  import { session } from '$app/stores'
  import { client } from '$lib/components/auth/SanityClient'
  import { onMount } from 'svelte'
  import { formatDate } from '$lib/utils'
  import { fade } from 'svelte/transition'
  import Loading from '$lib/components/ui/Loading.svelte'
  import Modal from 'svelte-simple-modal'
  import SiteGridModal from '$lib/components/ui/modal_content/SiteGridModal.svelte'

  let data:UserSanityData
  const uuid:string = $session.user?.id

  const handler = async (token:string) => {
    const x = await fetch(`/.netlify/functions/getSites?token=${token}`, { headers: { accept: "Accept: application/json" }})
    const json = await x.json()
    data.sites = await json.msg
  }

  const load = async () => {
    const query = `*[_type=="client" && supa_id=="${!uuid ? ' ' : uuid}"]{ businessName, email, ownerName, phone, netlify_token }`
    let res = await client.fetch(query)
    data = await res.shift()
    await handler(data.netlify_token)
  }

  onMount(async () => await load() );
</script>

{#if data && data.sites}
<div style=" width: 100%; display: flex; align-items: center; justify-content: space-between;">
  <h1>Howdy, {data.ownerName} <span>of {data.businessName}</span></h1>
</div>
  <div id="site-grid">
    {#each data.sites as s}
      <div class="s-card" transition:fade>
        {#if s.screenshot_url}
          <img src={s.screenshot_url} alt="A Screenshot of the Site" style="margin-bottom: -.5rem;">
        {:else}
          <div style="width: 300px; height: 187.5px; background-color: gray; display: flex; align-items: center; justify-content: center; border-radius: 15px 15px 0 0;">
            <p style="color: white;">No screenshot available</p>
          </div>
        {/if}
        <div class="text-wrap">
          <a href="https://{s.custom_domain || s.default_domain}">{s.name}</a>
          
          <div class="centerme">
            <p>Updated: {formatDate(s.updated_at)}</p>
            <p>SSL Status: <span style="font-size: .8rem;">{s.ssl ? '✅ ' : '❌' }</span></p>
          </div>
          <Modal>
            <SiteGridModal content={s}/>
          </Modal>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <Loading />
{/if}

<style>
  :global(.centerme) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 1.5rem;
  }

  #site-grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }

  .s-card {
    width: 300px;
    height: 325px;
    background-color: #999e908e;
    border-radius: 15px;
    box-shadow: 3px 3px 15px var(--shadow);
  }

  img {
    max-width: 300px;
    border-radius: 15px 15px 0 0;
    margin-bottom: 0;
  }

  .text-wrap {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  p { margin: 0; }
</style>