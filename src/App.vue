<template>
  <div id="app">
    <Checkout></Checkout>
  </div>
</template>

<script>
import Checkout from './pages/checkout/Checkout';

// STYLES
import './assets/sass/main.scss';

export default {
  name: 'app',
  components: {
    Checkout
  },
}
</script>
