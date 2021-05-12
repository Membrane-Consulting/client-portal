<script lang="ts">
  import SessionErrorContent from "./SessionErrorContent.svelte";
  import { onMount, getContext } from 'svelte';
    
  export let s:any

  const { open } = getContext('simple-modal');
  const show = () => {
    open(SessionErrorContent);
  };

  onMount(() => !s.user ? show() : "");
</script>