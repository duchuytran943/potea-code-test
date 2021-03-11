<template>
  <HomePageLayout>
    <Gifs />
  </HomePageLayout>
</template>

<script>
import { Gifs } from '@/components/gifs';

export default {
  name: 'Home',

  components: {
    Gifs,
  },
};
</script>
