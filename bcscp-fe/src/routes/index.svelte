<script lang="ts">
	import { onMount } from 'svelte';
	import SignInForm from '$lib/components/auth/SignInForm.svelte';
	import Humans from '$lib/components/svg/humans.svelte';

	const l = ['complete invoices', 'download assets', 'review contracts'];

	let i = 0;
	let duration = 3500;

	const increment = () => setInterval(() => (i < l.length - 1 ? i++ : (i = 0)), duration);

	onMount(() => increment());
</script>

<div id="wrap">
	<div class="home-blocks">
		<Humans />
		<p>a simple way to {l[i]}</p>
	</div>
	<div class="home-blocks">
		<SignInForm />
		<p id="sign-up-disclaimer">
			Don't have an account? Click <a href="/sign-up">here</a> to sign up.
		</p>
	</div>
</div>

<style>
	#wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		margin-top: -200px;
	}

	#wrap * {
		width: max-content;
	}

	:global(.home-blocks) {
		min-height: 400px;
		min-width: 400px;
		background: var(--white);
		border-radius: 0.35rem;
		box-shadow: #1f1f1f38 0px 0px 12px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	p {
		font-size: 1.5rem;
		line-height: 1;
		margin: 0.5rem;
	}

	#sign-up-disclaimer {
		font-size: 0.9rem;
		color: var(--gray);
	}

	#sign-up-disclaimer > a {
		font-style: italic;
	}
</style>
