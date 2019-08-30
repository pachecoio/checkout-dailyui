<template>
  <div class="checkout">
    <div class="checkout__content">
      <div class="checkout__card">
        <Order/>
        <Payment/>
      </div>
    </div>
  </div>
</template>

<script>
// COMPONENTS
import Order from './../../components/checkout/order/Order';
import Payment from './../../components/checkout/payment/Payment';
// STYLES
import "./checkout.scss";
export default {
  name: "Checkout",
  components: {
    Order,
    Payment,
  },
  data: function() {
    return {
      text: "something"
    };
  }
};
</script>

<style>
</style>