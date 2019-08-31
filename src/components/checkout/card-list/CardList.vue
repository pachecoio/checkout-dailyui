<template>
  <div class="card">
    <button @click="active--">previous</button>
    <button @click="active++">next</button>
    <ul class="card__list">
      <li
        class="card__item"
        :id="`card_${i}`"
        v-for="(card, i) in cards"
        :class="[
          i < active ? 'card__item--previous' : i > active ? 'card__item--next' : 'card__item--active'
        ]"
        :key="i"
      >
        <div class="card__header">
          <svg
            v-if="card.name === 'visa'"
            class="card__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47.834 47.834"
          >
            <path
              d="M19.153 16.799l-2.431 14.266h3.888l2.433-14.266zM13.462 16.815l-3.808 9.729-.406-1.469c-.751-1.77-2.883-4.312-5.386-5.914l3.482 11.897 4.114-.007 6.123-14.239-4.119.003z"
            />
            <path
              d="M7.772 17.836c-.226-.869-.881-1.128-1.694-1.159H.05l-.05.284c4.691 1.138 7.795 3.88 9.083 7.177l-1.311-6.302zM30.923 19.534a7.178 7.178 0 0 1 2.91.546l.351.165.526-3.092c-.77-.289-1.977-.599-3.483-.599-3.842 0-6.55 1.935-6.571 4.708-.025 2.049 1.929 3.193 3.405 3.876 1.515.7 2.023 1.145 2.016 1.77-.012.955-1.208 1.393-2.325 1.393-1.557 0-2.384-.215-3.661-.747l-.501-.228-.547 3.193c.91.399 2.589.742 4.332.76 4.087 0 6.743-1.912 6.771-4.875.017-1.621-1.02-2.858-3.267-3.873-1.36-.662-2.192-1.102-2.184-1.77 0-.593.706-1.227 2.228-1.227zM44.688 16.815h-3.004c-.933 0-1.627.254-2.037 1.184l-5.773 13.074h4.083s.666-1.758.817-2.143l4.979.006c.116.498.474 2.137.474 2.137h3.607l-3.146-14.258zm-4.795 9.195c.32-.819 1.549-3.987 1.549-3.987-.021.039.317-.825.518-1.362l.262 1.23.901 4.119h-3.23z"
            />
          </svg>
        </div>
        <div class="card__number">
          <span v-for="item in 4" :key="item" :class="[
            item === 4 && lastDigits ? 'has-number' : ''
          ]">
            {{item !== 4 ? '****' : lastDigits ? lastDigits : '****'}}
          </span>
        </div>
        <div class="card__details">
          <div class="card__holder">
            <span class="card__label">
              Card holder
            </span>
            <p class="card__name">
              {{name ? name : 'Card Holder Name'}}
            </p>
          </div>
          <div class="card__expire-date">
            <span class="card__label">
              Expire date
            </span>
            <p class="card__name">
              {{expireDate ? expireDate : '02/18'}}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "./cards.scss";

export default {
  data: function() {
    return {
      active: 1,
      cards: [
        {
          id: 1,
          name: "mastercard"
        },
        {
          id: 2,
          name: "visa"
        },
        {
          id: 3,
          name: "discover"
        }
      ]
    };
  },
  props: [
    'lastDigits',
    'name'
  ]
};
</script>

<style>
</style>