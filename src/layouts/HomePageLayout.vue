<template>
  <div>
    <Navbar />
    <div class="home__container">
      <div class="home__inner">
        <slot></slot>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Navbar, Footer } from '@/components/common';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
