<script>
  import supabase from '$lib/db'
  import { getNotificationsContext } from 'svelte-notifications';

  const { addNotification } = getNotificationsContext();

  $: supabase.auth.onAuthStateChange(event => {
      addNotification({
        text: `${event.replace('_', ' ').toLowerCase()}`,
        position: 'bottom-center',
        removeAfter: 4000,
      })
    });
</script>