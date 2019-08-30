<template>
  <li :id="id" class="order__item" :class="[
    active && 'order__item--active'
  ]" @click="setActive(index)">
    <div class="order__item__image">
      <span class="order__item__image--bg"/>
      <img :src="order.image" alt="">
    </div>
    <div class="order__info">
      <h4 class="heading-4 order__name">
        {{order.name}}
      </h4>
      <ul class="order__categories">
        <li class="order__category" v-for="(category, i) in order.categories" v-bind:key="i">
          {{category}}<span v-if="order.categories.length > i + 1">/ </span>
        </li>
      </ul>
      <p class="order__price">{{order.price}}</p>
    </div>
  </li>
</template>

<script>
import './order-item.scss';
export default {
  props: [
    'order',
    'active',
    'setActive',
    'index'
  ],
  date: function () {
    return {
      id: "item"
    }
  },
  created: function () {
    this.id = `item_${this.index}`;
  }
}
</script>

<style>

</style>