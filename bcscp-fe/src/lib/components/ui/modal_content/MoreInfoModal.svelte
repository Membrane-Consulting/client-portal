<script lang="ts">
    import { getContext } from 'svelte';
    import Content from './MoreInfoModalContent.svelte'

    const { open } = getContext('simple-modal');

    const show = () => {
      open(Content);
    };
</script>

<button on:click={show}>?</button>

<style>
  /* reset body style added by modal */
  :global(body) {
    max-width: 100vw;
    position: relative !important;
    top: 0 !important;
  }

  button {
    text-align: center;
    background: transparent;
    border: 2px solid var(--black);
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin: .5rem;
  }

  button:hover {
    transition: ease;
    cursor: pointer;
    background: var(--black);
    border-color: white;
    color: white;
  }
</style>