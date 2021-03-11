<template>
  <div class="gifs__container">
    <h1 class="gifs__title">{{ $t('general.giphyTrending') }}</h1>
    <LoadingSpinner v-if="isLoading" />
    <Gif v-for="gif in gifs" :key="gif.id" :gif="gif" />
    <div v-if="isShowLoadMore" class="load-more">
      <button class="btn" @click="onLoadMore()">{{ $t('general.loadMore') }}</button>
    </div>
  </div>
</template>

<script>
import httpAxios from '@/httpAxios';
import { LoadingSpinner } from '@/components/common';
import Gif from './Gif.vue';

export default {
  components: {
    Gif,
    LoadingSpinner,
  },

  data() {
    return {
      limit: 12,
      offset: 0,
      isLoading: false,
      gifs: [],
      isShowLoadMore: false,
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
        offset: this.offset,
      };
      this.isLoading = true;
      httpAxios({
        url: `${this.$backendUrl}/v1/gifs/trending`,
        method: 'GET',
        params,
      })
        .then(response => {
          this.gifs = this.gifs.concat(response.data.data);
          const { pagination } = response.data;
          this.isShowLoadMore = Math.ceil(pagination.total_count / this.limit) > this.offset;
          console.log('1111111', this.isShowLoadMore);
        })
        .catch(e => {
          console.log(e);
          // this.$router.push('Error404');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    onLoadMore() {
      console.log('this.offset ', this.offset);
      if (!this.isShowLoadMore) return;
      this.offset += 1;
      this.getListImage();
      console.log('loadmore');
    },
  },
};
</script>
