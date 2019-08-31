<template>
  <div class="form__group form__group--checkbox" :class="classes">
    <label class="form__label">{{label}}</label>
    <input :name="name" 
      :id="name" type="checkbox" 
      v-model="selected"
      :ref="name" />
    <div class="form__checkbox" 
      @click="select"
      :class="[
        error && 'form__checkbox--error'
      ]">
      <transition name="form__checkbox__fade">
        <svg
          v-if="selected"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="448.8"
          height="448.8"
          viewBox="0 0 448.8 448.8"
        >
          <path fill="green" d="M142.8 323.85L35.7 216.75 0 252.45l142.8 142.8 306-306-35.7-35.7z" />
        </svg>
      </transition>
    </div>
  </div>
</template>

<script>
import "./form-checkbox.scss";
export default {
  data: function() {
    return {
      selected: false,
    };
  },
  props: ["classes", "label", "name", "initialValue", "onChange", "error"],
  created: function () {
    this.selected = this.initialValue;
  },
  updated: function () {
    // console.log('changed value', this.selected);
    this.onChange(this.selected);
  },
  methods: {
    select: function () {
      this.selected = !this.selected;
    }
  }
};
</script>