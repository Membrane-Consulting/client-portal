<script lang="ts">
  export let brush: any;
</script>

<section class="row">
  <h1 class="sectionTitle">brushes</h1>
  {#each brush.brushes as {name, image, link}}
    {#if link}
      <h4><a href="{link}">{name}</a></h4>
    {:else}
      <h4>{name}</h4>
    {/if}
    <img src="./images/brushes/{image}" alt="{name}">
  {/each}
</section>

<style>
  img {
    width: 600px;
    max-width: 90vw;
  }
  h1 {
    text-align: end;
    margin: 1rem 0;
  }

</style>