<script>
	import { page, session } from '$app/stores';
	import SignOutButton from '$lib/components/auth/SignOutButton.svelte';

	$: ({ path } = $page);
</script>

<header>
	<div>
		<h1>Black Cat Studio</h1>
		<h2>Client Portal</h2>
	</div>
	<nav>
		<ul>
			{#if $session && path === '/'}
				<li><a href="/dashboard">Dashboard</a></li>
			{/if}
			{#if $session}
				<li><SignOutButton /></li>
			{/if}
		</ul>
	</nav>
</header>

<style>
	header {
		background: var(--black);
		color: var(--white);
		z-index: -2;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem;
		padding-bottom: 300px;
		margin: -8px -8px 0 -8px;
	}

	nav {
		z-index: 0;
	}

	ul {
		display: flex;
		list-style: none;
		padding: 0;
	}

	li {
		margin: 0.4rem 0.6rem;
	}

	:global(a) {
		text-decoration: none;
		color: var(--black);
	}

	a {
		color: var(--white);
	}

	@media screen and (max-width: 410px) {
		header {
			flex-direction: column;
		}
		header > div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>

