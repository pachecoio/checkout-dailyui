<template>
  <div class="checkout__card__content payment">
    <h3 class="heading-3 payment__heading">Payment</h3>
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
      <FormDate
        label="Expire date" />
      <div class="form__group form__buttons">
        <Button
          :value="'Purchase'"
          type="submit"
          :classes="[
            'btn__primary'
          ]" />
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from "./../../form/form-input/FormInput";
import Button from './../../buttons/Button';
import FormDate from "./../../form/form-date/FormDate";
import "./payment.scss";
export default {
  components: {
    FormInput,
    FormDate,
    Button
  },
  data: function () {
    return {
      name: "fda",
      cc: "",
    }
  },
  methods: {
    setName: function (value) {
      this.name = value;
    },
    setCC: function (value) {
      this.cc = value;
    }
  },
  updated: function () {
    
  }
};
</script>

<style>
</style>