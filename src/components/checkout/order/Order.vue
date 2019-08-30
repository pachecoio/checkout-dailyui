<template>
  <div class="checkout__card__content order">
    <h3 class="heading-3 order__heading">
      Order
    </h3>
    <ul class="order__items" id="order-items">
      <OrderItem 
        v-for="(item, i) in items" 
        v-bind:key="i" 
        :order="item"
        :index="i"
        :active="i === active"
        :setActive="setActive"
        v-scroll-to="{el: `#item_${i == 0 ? 0 : i - 1}`}"/>
    </ul>
    <ul class="order__navigator">
      <li class="order__navigator__item"
        :class="[
          item - 1 === active ? 'order__navigator__item--active' : ''
        ]" 
        v-for="item in items.length" 
        v-bind:key="item"
        @click="setActive(item - 1)"
        v-scroll-to="{el: `#item_${item == 1 ? 0 : item - 2}`}"/>
    </ul>
    <div class="order__total">
      <span class="order__total__line"/>
      <p class="order__total__title">
        Order Total
      </p>
      <p class="order__total__text">
        {{getTotal().toFixed(2)}}
      </p>
    </div>
  </div>
</template>

<script>
import OrderItem from './../order-item/OrderItem';
import "./order.scss";

export default {
  components: {
    OrderItem,
  },
  data: function () {
    return {
      active: 1,
      items: [
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
          id: 5,
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
          id: 6,
          name: "Adidas Arkyn",
          image: require(`@/assets/images/adidas3.png`),
          categories: [
            "Women Originals",
            "Semi Solar Yellow",
            "Size 37"
          ],
          price: 129.95
        }
      ]
    }
  },
  props: [
    'orders'
  ],
  methods: {
    setActive: function (index) {
      this.active = index;
    },
    getTotal: function () {
      let rst = 0;
      this.items.map(i => {
        rst += i.price;
        return i;
      })
      return rst;
    }
  }
}
</script>