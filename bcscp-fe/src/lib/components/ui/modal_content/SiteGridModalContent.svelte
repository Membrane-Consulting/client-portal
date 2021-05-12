<script lang="ts">
  import type { Site } from "src/global";

  import { formatDate } from '$lib/utils'

  export let content:Site  
  let {
    admin_url,
    custom_domain,
    default_domain,
    name,
    created_at,
    ssl,
    updated_at
  } = content 
</script>

<div id="modal-content">
  <h1>{name}</h1>
  <div>
    <p>Last Updated: {formatDate(updated_at)}</p>
    <p>Created At: {formatDate(created_at)}</p>
  </div>
  
  <a href={admin_url}>Netlify Admin</a>
</div>


<style>
  a {
    text-align: center;
    background: transparent;
    border: 2px solid var(--black);
    border-radius: 5px;
    width: auto;
    height: 30px;
    margin: .5rem;
    padding: .3rem .5rem;
  }

  a:hover {
    transition: ease;
    cursor: pointer;
    background: var(--black);
    border-color: white;
    color: white;
  }
</style>