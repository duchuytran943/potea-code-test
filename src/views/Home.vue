<template>
  <HomePageLayout>
    <p>
      {{ images }}
    </p>
  </HomePageLayout>
</template>

<script>
import httpAxios from '@/httpAxios';

export default {
  name: 'Home',

  components: {},

  data() {
    return {
      limit: 3,
      offset: 1,
      isLoading: false,
      images: [],
    };
  },

  created() {
    this.getListImage();
  },

  methods: {
    getListImage() {
      const params = {
        api_key: process.env.VUE_APP_PUBLIC_KEY_GIPHY,
        limit: this.limit,
        // offset: this.offset,
      };
      this.isLoading = true;
      httpAxios({
        url: `${this.$backendUrl}/v1/gifs/trending`,
        method: 'GET',
        params,
      })
        .then(response => {
          console.log('data', response.data.data);
          this.images = response.data.data;
        })
        .catch(e => {
          console.log(e);
          this.$router.push('Error404');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
