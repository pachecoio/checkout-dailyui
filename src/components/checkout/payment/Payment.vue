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
    <form class="form payment__form" @submit="handleSubmit">
      <FormInput
        label="Card Holder"
        name="name"
        :initialValue="name"
        type="text"
        placeholder="Card holder name"
        :onChange="setName"
        :error="errors.filter(i => i.field === 'name').length > 0"
        :removeError="removeError"
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
        :error="errors.filter(i => i.field === 'cc').length > 0"
        :removeError="removeError"
      />
      <div class="form__groups">
        <FormDate 
          label="Expire date"
          :onChange="setExpireDate"
          :error="errors.filter(i => i.field === 'expireDate').length > 0" />
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
          :error="errors.filter(i => i.field === 'cvv').length > 0"
          :removeError="removeError"
        />
      </div>
      <FormCheckbox
        label="Save card information"
        :initialValue="saveCard"
        :onChange="setSaveCard"
        :error="errors.filter(i => i.field === 'saveCard').length > 0"/>
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
      expireDate: new Date(2019, 2),
      saveCard: false,
      selectedCard: 1,
      errors: []
    };
  },
  props: [
    'items'
  ],
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
    setSaveCard: function (value) {
      this.saveCard = value;
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
    },
    setExpireDate: function (date) {
      this.expireDate = date;
    },
    removeError: function (name) {
      this.errors = this.errors.filter(i => i.field !== name);
    },
    handleSubmit: function (e) {
      e.preventDefault();
      this.errors = [];
      let data = {
        name: this.name,
        cc: this.cc,
        cvv: this.cvv,
        expireDate: this.expireDate,
        saveCard: this.saveCard,
        products: this.items
      }
      if(!this.validateForm(data)) {
        // FORM INVALID
        console.log('errors', this.errors);
        return;
      }
      // FORM VALID, PROCEED WITH REQUEST
      console.log('submit form', data)
      return;
    },
    validateForm: function (data) {
      if(!data.name || data.name === "") this.errors.push({
        field: 'name',
        message: "Field name cannot be empty"
      })
      if(!data.cc || data.cc === "") {
        this.errors.push({
          field: 'cc',
          message: "Field card number cannot be empty"
        })
      } else if(data.cc.length < 19) {
        this.errors.push({
          field: 'cc',
          message: "Field card number invalid"
        })
      }
      if(!data.cvv || data.cvv === "" || data.cvv.length < 3) this.errors.push({
        field: 'cvv',
        message: "Field CVV invalid"
      })
      if(!data.expireDate) this.errors.push({
        field: 'expireDate',
        message: "Field expire date invalid"
      })
      return this.errors.length === 0;
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