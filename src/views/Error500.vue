<template>
  <div>
    <div>
      <div>
        <h1>500</h1>
      </div>
      <h2>{{ $t('error500.message') }}</h2>
      <p>{{ $t('error500.description') }}</p>
      <router-link :to="{ name: 'Home' }">{{ $t('general.backToHome') }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error500',
};
</script>
