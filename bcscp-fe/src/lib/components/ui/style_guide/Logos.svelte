<script lang="ts">
	import { urlFor } from '$lib/components/auth/SanityClient';
	export let logo: any;
	export let logoDesc: string;
</script>

<section class="row">
	<h1 class="sectionTitle">Logos</h1>
	<h3>Primary Logo</h3>
	{#if logo}
		<div id="primary">
			<img src={urlFor(logo.mainLogo.image)} alt={logo.mainLogo.name} />
			<h4>{logo.mainLogo.name}</h4>
			<a href={urlFor(logo.mainLogo.image)} class="dl" download>Download</a>
		</div>
		<h3>Logo Variations</h3>
		<div id="logo-grid">
			{#each logo.variations as { id, name, image }}
				<div class="grid-item">
					<img src={urlFor(image)} alt={name} />
					<h4>{name}</h4>
					<a href={urlFor(image)} class="dl" download>Download</a>
				</div>
			{/each}
		</div>
	{/if}
	<p class="desc">{logoDesc}</p>
</section>

<style>
	.sectionTitle {
		text-align: start;
	}

	img {
		max-width: 250px;
	}

	#primary {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 2rem auto;
	}

	#logo-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 2rem;
		grid-auto-rows: auto auto 500px;
		margin: 0 auto;
	}
	.grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: max-content;
	}

	.dl {
		background: gray;
		border-radius: 5px;
		width: 100px;
		height: 30px;
		color: white;
		text-decoration: none;
		text-align: center;
	}

	.dl:hover {
		text-decoration: underline;
	}
</style>
