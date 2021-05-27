<script lang="ts">
	export let fonts: any;
	export let fontDesc: string;
</script>

<section class="row">
	<h1 class="sectionTitle">Fonts</h1>
	<div id="fontWrapper">
		{#each fonts as { name, importLink, family, use, variations }}
			<div>
				<h1 style="border-bottom:3px solid var(--black);">{use}</h1>
				<h1 class="fontName" style=" {importLink} font-family:{family} ">
					{name}
				</h1>
				<h1 style="border-bottom:3px solid var(--black); text-align: end;">variations</h1>
				<div id="varsCont">
					{#each variations as { vname, weight, styles }}
						<h1
							class="fontName"
							style=" {importLink} font-family:{family}; font-weight:{weight}; margin-bottom: 0;"
						>
							{vname} <span class="pipe"> | </span>
						</h1>
						{#each styles as s}
							<h1
								class="fontName"
								style=" {importLink} font-family:{family}; font-weight:{weight}; font-style:{s}; margin-bottom: 0;"
							>
								{vname + ' ' + s} <span class="pipe"> | </span>
							</h1>
						{/each}
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<p class="desc">{fontDesc}</p>
</section>

<style>
	#varsCont {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	.pipe {
		font-style: normal;
	}

	.fontName:last-child .pipe {
		display: none;
	}

	h1 {
		text-align: start;
		margin: 1rem 0;
	}

	.fontName {
		font-size: 3rem;
	}

	.sectionTitle {
		text-align: left;
		margin-top: 2rem;
	}

	#fontWrapper {
		width: 80%;
		margin: auto;
		margin-bottom: 1rem;
	}
</style>
