<script lang="ts">
  import { onMount } from 'svelte';

  let tabItems = [
		{ label: "Dashboard", value: 1, route: "/dashboard" },
		{ label: "Invoices", value: 2, route: "/dashboard/invoices" },
		{ label: "Assets", value: 3, route: "/dashboard/assets" },
    { label: "Contracts", value: 4, route: "/dashboard/contracts"}
	];

  let activeTabValue = 1;
  const handleClick = tabValue => () => (activeTabValue = tabValue);

  onMount(() => {
    if (Array.isArray(tabItems) && tabItems.length && tabItems[0].value) {
      activeTabValue = tabItems[0].value;
    }
  });
</script>

<div id="dashboard-wrap">
  <nav>
    <ul>
      {#if Array.isArray(tabItems)}
        {#each tabItems as item}
          <li class={activeTabValue === item.value ? 'active' : ''}>
              <a 
              href="{item.route}" 
              on:click={handleClick(item.value)}
              >
                {item.label}
              </a>
          </li>
        {/each}
      {/if}
    </ul>
  </nav>
  <div id="content-wrap" class={activeTabValue !== 1 ? 'rnd' : ''}>
    <slot></slot>
  </div>
</div>

<style>
  ul {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }
  
    a {
      border: 1px solid transparent;
      border-top-left-radius: 0.35rem;
      border-top-right-radius: 0.35rem;
      display: block;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  
    a:hover {
      border-color: #8d8e8f #8d8e8f #dee2e6;
    }
  
    li.active > a {
      color: #495057;
  /*     background-color: #E0DCD8; */
      border-color: #000 #000 var(--bg);
      
    }
    li.active{
      position: relative;
    }
    li.active:before {
      content: '';
      position: absolute;
      right: 1px;
      bottom: -1px;
      width: calc(100% - 2px);
      border-bottom: 1px solid var(--bg);
      height:10px;
    }
    #content-wrap{
      border:1px solid #000;
      border-radius: 0 0.35rem 0.35rem 0.35rem;
      min-height:500px;
      padding:2rem;
    }
    .rnd{
      border-radius:.35rem !important;
    }
    #dashboard-wrap {
      margin: auto;
    }
    @media (min-width: 640px) {
      #dashboard-wrap {
        max-width: 90vw;
      }
    }
  </style>
  