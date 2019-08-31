<template>
  <div class="checkout__card__content payment">
    <h3 class="heading-3 payment__heading">Payment</h3>
    <div class="payment__cards">
      <CardList 
        :name="name"
        :lastDigits="cc.length > 18 && cc.substring(cc.length, cc.length - 4)"
        :active="selectedCard"
        :onChange="setCard"/>
    </div>
    <form class="form payment__form">
      <FormInput
        label="Card Holder"
        name="name"
        :initialValue="name"
        type="text"
        placeholder="Your name"
        :onChange="setName"
      />
      <FormInput
        label="Card Number"
        type="text"
        name="cc"
        :initialValue="cc"
        placeholder="5555 5555 5555 5555"
        format="credit-card"
        mask="####-####-####-####"
        :onChange="setCC"
      />
      <div class="form__groups">
        <FormDate label="Expire date" />
        <FormInput
          label="CVV"
          type="text"
          name="cvv"
          :classes="[
            'form__input--small'
          ]"
          maxLength="3"
          :initialValue="cvv"
          placeholder="123"
          :onChange="setCVV"
        />
      </div>
      <FormCheckbox
        label="Save card information"
        :initialValue="agree"/>
      <div class="form__group form__buttons">
        <Button
          :value="'Purchase'"
          type="submit"
          :classes="[
            'btn__primary'
          ]"
        />
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from "./../../form/form-input/FormInput";
import Button from "./../../buttons/Button";
import FormDate from "./../../form/form-date/FormDate";
import FormCheckbox from './../../form/form-checkbox/FormCheckbox';
import CardList from './../card-list/CardList';
import "./payment.scss";
export default {
  components: {
    FormInput,
    FormDate,
    FormCheckbox,
    Button,
    CardList,
  },
  data: function() {
    return {
      name: "",
      cc: "",
      cvv: "",
      agree: false,
      selectedCard: 1
    };
  },
  methods: {
    setName: function(value) {
      this.name = value;
    },
    setCC: function(value) {
      this.cc = value;
      // console.log('cc', value);
    },
    setCVV: function (value) {
      this.cvv = value;
    },
    setAgree: function (value) {
      this.agree = value;
    },
    setCard: function (index) {
      this.selectedCard = index;
    },
    setBrand: function () {
      // console.log('set brand', this.cc.substring(0, 1));
      if(this.cc && this.cc.length > 0) {
        switch (this.cc.substring(0, 1)) {
          case "3":
            this.selectedCard = 2;
            break;
          case "4":
          default:
            this.selectedCard = 1;
            break;
          case "5":
            this.selectedCard = 0;
            break;
          case "6":
            this.selectedCard = 3;
            break;
        }
      }
    }
  },
  updated: function() {
    this.setBrand();
  }
};
</script>

<style scoped>

.form__group--checkbox {
  flex-direction: row;
}

</style>