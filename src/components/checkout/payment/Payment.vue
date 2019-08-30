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
import "./payment.scss";
export default {
  components: {
    FormInput,
    FormDate,
    FormCheckbox,
    Button
  },
  data: function() {
    return {
      name: "",
      cc: "",
      cvv: "",
      agree: false,
    };
  },
  methods: {
    setName: function(value) {
      this.name = value;
    },
    setCC: function(value) {
      this.cc = value;
    },
    setCVV: function (value) {
      this.cvv = value;
    },
    setAgree: function (value) {
      this.agree = value;
    }
  },
  updated: function() {
    console.log('changed');
    console.log('name', this.name);
    console.log('cc', this.cc);
    console.log('cvv', this.cvv);
    console.log('agree', this.agree);
  }
};
</script>

<style scoped>

.form__group--checkbox {
  flex-direction: row;
}

</style>