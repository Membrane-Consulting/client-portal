<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Modal from 'svelte-simple-modal';
	import MoreInfoModal from '$lib/components/ui/modal_content/MoreInfoModal.svelte';

	let tabItems = [
		{ label: 'Sites', value: 1, route: '/dashboard' },
		{ label: 'Invoices', value: 2, route: '/dashboard/invoices' },
		{ label: 'Assets', value: 3, route: '/dashboard/assets' },
		{ label: 'Contracts', value: 4, route: '/dashboard/contracts' }
	];

	let activeTabValue;

	$: $page ? (activeTabValue = tabItems.find((e) => e.route === $page.path).value) : 1;
	const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<div id="dashboard-wrap">
	<nav>
		<ul>
			{#if Array.isArray(tabItems)}
				{#each tabItems as item}
					<li class={activeTabValue === item.value ? 'active' : ''}>
						<a href={item.route} on:click={handleClick(item.value)}>
							{item.label}
						</a>
					</li>
				{/each}
			{/if}
		</ul>
		<!--{#if document}
      <Modal>
        <MoreInfoModal />
      </Modal>
    {/if}-->
	</nav>
	<div id="content-wrap" class={activeTabValue !== 1 ? 'rnd' : ''}>
		<slot />
	</div>
</div>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
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
		color: var(--white);
	}

	a:hover {
		border-color: #8d8e8f #8d8e8f transparent;
	}

	li.active > a {
		color: #495057;
		/*border-color: #00000070 #00000070 var(--white);*/
		background-color: var(--white);
	}
	li.active {
		position: relative;
	}
	li.active:before {
		content: '';
		position: absolute;
		right: 1px;
		bottom: -1px;
		width: calc(100% - 2px);
		border-bottom: 0.5rem solid var(--white);
		z-index: 1;
		background-color: var(--white);
		height: 10px;
	}
	#content-wrap {
		box-shadow: #1f1f1f78 3px 3px 18px;
		z-index: -1;
		position: relative;
		background-color: var(--white);
		border-radius: 0 0.35rem 0.35rem 0.35rem;
		min-height: 500px;
		padding: 2rem;
	}
	.rnd {
		border-radius: 0.35rem !important;
	}
	#dashboard-wrap {
		margin: auto;
		transform: translateY(-275px);
		margin-bottom: -275px;
	}
	@media (min-width: 640px) {
		#dashboard-wrap {
			max-width: 90vw;
		}
	}
</style>
