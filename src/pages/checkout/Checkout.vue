<template>
  <div class="checkout">
    <div class="checkout__content">
      <div class="checkout__card">
        <Order :items="products"/>
        <Payment :items="products"/>
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
      text: "something",
      products: [
        {
          id: 1,
          name: "Adidas Energy Cloud V",
          image: require(`@/assets/images/adidas.png`),
          categories: [
            "Women Essentials",
            "Tech Ink",
            "Size 37"
          ],
          price: 59.95
        },
        {
          id: 2,
          name: "Adidas Vs Advantage",
          image: require(`@/assets/images/adidas2.png`),
          categories: [
            "Women Essentials",
            "Ftwr White",
            "Size 37"
          ],
          price: 49.95
        },
        {
          id: 3,
          name: "Adidas Arkyn",
          image: require(`@/assets/images/adidas3.png`),
          categories: [
            "Women Originals",
            "Semi Solar Yellow",
            "Size 37"
          ],
          price: 129.95
        },
        {
          id: 4,
          name: "Adidas Energy Cloud V",
          image: require(`@/assets/images/adidas.png`),
          categories: [
            "Women Essentials",
            "Tech Ink",
            "Size 37"
          ],
          price: 59.95
        },
        {
          id: 5,
          name: "Adidas Vs Advantage",
          image: require(`@/assets/images/adidas2.png`),
          categories: [
            "Women Essentials",
            "Ftwr White",
            "Size 37"
          ],
          price: 49.95
        },
        {
          id: 6,
          name: "Adidas Arkyn",
          image: require(`@/assets/images/adidas3.png`),
          categories: [
            "Women Originals",
            "Semi Solar Yellow",
            "Size 37"
          ],
          price: 129.95
        },
      ]
    };
  }
};
</script>

<style>
</style>