<template>
  <div class="form__group" :class="classes">
    <label :for="name" class="form__label">{{label}}</label>
    <input
      :name="name"
      :id="name"
      :type="type || 'text'"
      class="form__input"
      :placeholder="placeholder"
      v-model="value"
      :maxlength="maxLength || (format === 'credit-card' && 19)"
      v-mask="mask || defaultMask"
    />
  </div>
</template>

<script>
import "./form-input.scss";

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
const amexpRegEx = /^(?:3[47][0-9]{13})$/;
const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

const ccPattern = /^[0-9-]*$/;

export default {
  name: "FormInput",
  data: function() {
    return {
      isValid: false,
      visa: false,
      mastercard: false,
      americanExpress: false,
      discovery: false,
      value: "",
      defaultMask:
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    };
  },
  props: [
    "initialValue",
    "name",
    "type",
    "placeholder",
    "pattern",
    "format",
    "label",
    "mask",
    "onChange",
    "classes",
    "maxLength"
  ],
  methods: {
    validate: function(cc) {
      let valid = false;
      this.visa = false;
      this.mastercard = false;
      this.americanExpress = false;
      this.discovery = false;

      if (visaRegEx.test(cc)) {
        valid = true;
        this.visa = true;
      }
      if (mastercardRegEx.test(cc)) {
        valid = true;
        this.mastercard = true;
      }
      if (amexpRegEx.test(cc)) {
        valid = true;
        this.americanExpress = true;
      }
      if (discovRegEx.test(cc)) {
        valid = true;
        this.discovery = true;
      }

      this.isValid = valid;
    },
    setMask: function(cc) {
      return cc;
    }
  },
  created: function() {
    this.value = this.initialValue;
  },
  updated: function() {
    if (this.format === "credit-card") {
      if (!ccPattern.test(this.value))
        this.value = this.value.substring(0, this.value.length - 1);
      this.validate(this.value);
      if (this.isValid) {
        this.value = this.setMask(this.value);
      }
    }
    return this.onChange(this.value);
  }
};
</script>