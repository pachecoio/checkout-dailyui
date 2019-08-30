<template>
  <p>carousel</p>
</template>

<script>
import "./cards.scss";
export default {
  data: function () {
    return {
      active: 1,
      cards: [
        {
          id: 1,
          name: 'visa'
        },
        {
          id: 2,
          name: 'mastercard'
        },
        {
          id: 3,
          name: 'discover'
        }
      ]
    }
  }
};
</script>

<style>
</style>