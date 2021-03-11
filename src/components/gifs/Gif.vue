<template>
  <div class="gif__container">
    <img v-lazy="gif.images.preview_gif.url" class="gif__image" @click="onShowModal()" />
    <p class="gif__title">{{ gif.title }}</p>
    <Modal v-if="showModal">
      <template v-slot:body>
        <div class="close-icon" @click="onCloseModal()">X</div>
        <img v-lazy="gif.images.original.url" class="gif__full" />
      </template>
    </Modal>
  </div>
</template>

<script>
import { Modal } from '@/components/common';

export default {
  components: {
    Modal,
  },

  props: {
    gif: Object,
  },

  data() {
    return {
      showModal: false,
    };
  },

  created() {},

  methods: {
    onCloseModal() {
      this.showModal = false;
    },

    onShowModal() {
      this.showModal = true;
    },
  },
};
</script>
