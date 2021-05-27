<script lang="ts">
	import { session } from '$app/stores';
	import { client, options, makeUrl } from '$lib/components/auth/SanityClient';
	import Colors from '$lib/components/ui/style_guide/Colors.svelte';
	import Fonts from '$lib/components/ui/style_guide/Fonts.svelte';
	import Logos from '$lib/components/ui/style_guide/Logos.svelte';

	let data;

	const load = async () => {
		const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ brandAssets }`;
		await client.fetch(query).then((res) => {
			console.log(res[0]);
			data = res[0].brandAssets;
		});
	};

	import { onMount } from 'svelte';
	import Loading from '$lib/components/ui/Loading.svelte';
	import { formatDate } from '$lib/utils';

	//$: ({ colorDesc, colors, fontDesc, fonts, logoDesc, logo } = data);

	onMount(() => load());
</script>

<h1>Brand Assets</h1>

{#if data}
	<div id="asset-cont">
		<Colors text={data.colorDesc} colors={data.colors} />
		<Fonts fontDesc={data.fontDesc} fonts={data.fonts} />
		<Logos logoDesc={data.logoDesc} logo={data.logo} />
	</div>
{:else}
	<Loading />
{/if}

<style>
	#asset-cont {
		width: 850px;
		max-width: 100%;
		margin: 2rem auto;
	}
</style>
