<template>
  <div>
    <div>
      <div>
        <h1>429</h1>
      </div>
      <h2>{{ $t('error404.message') }}</h2>
      <p>{{ $t('error404.description') }}</p>
      <router-link :to="{ name: 'Home' }">{{ $t('general.backToHome') }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error429',
};
</script>
