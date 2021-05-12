<script lang="ts">
  export let content
  import { getContext } from 'svelte';
  import Content from './SiteGridModalContent.svelte'

  const { open } = getContext('simple-modal');

  const show = () => {
    open(Content, {content: content});
  };
</script>

<button on:click={show}>Details...</button>

<style>
  button {
    text-align: center;
    background: transparent;
    border: 2px solid var(--black);
    border-radius: 5px;
    width: 80%;
    height: 30px;
    margin: .5rem auto;
  }

  button:hover {
    transition: ease;
    cursor: pointer;
    background: var(--black);
    border-color: white;
    color: white;
  }
</style>