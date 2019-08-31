<template>
  <div class="form__group">
    <label class="form__label">{{label}}</label>
    <div class="form__group--date">
      <div class="form__input" @click="monthDropdown = !monthDropdown">
        {{month}}
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="284.929"
          height="284.929"
          viewBox="0 0 284.929 284.929"
        >
          <path
            d="M282.082 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z"
          />
        </svg>
        <transition name="form__date__list">
          <ul class="form__date__list" v-if="monthDropdown">
            <li class="form__date__item" 
              v-for="item in 12" 
              :key="item"
              @click="setMonth(item)">{{item}}</li>
          </ul>
        </transition>
      </div>
      <div class="form__input" @click="yearDropdown = !yearDropdown">
        {{formatYear(year)}}
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="284.929"
          height="284.929"
          viewBox="0 0 284.929 284.929"
        >
          <path
            d="M282.082 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z"
          />
        </svg>
        <transition name="form__date__list">
          <ul class="form__date__list" v-if="yearDropdown">
            <li class="form__date__item" 
              v-for="item in 10" 
              :key="item"
              @click="setYear((getCurrentYear() + item) - 1)">{{formatYear(getCurrentYear() + item - 1)}}</li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import "./form-date.scss";
export default {
  data: function() {
    return {
      month: 2,
      year: 2019,
      monthDropdown: false,
      yearDropdown: false,
    };
  },
  props: ["label", "onChange"],
  methods: {
    getCurrentYear: function () {
      let today = new Date();
      return parseInt(today.toLocaleDateString('pt-BR', {
        year: 'numeric'
      }));
    },
    getCurrentMonth: function () {
      let today = new Date();
      return parseInt(today.toLocaleDateString('pt-BR', {
        month: '2-digit'
      }));
    },
    setMonth: function (month) {
      this.month = month;
      this.onChange(new Date(this.year, this.month));
    },
    setYear: function (year) {
      this.year = year;
      this.onChange(new Date(this.year, this.month));
    },
    formatYear: function (year) {
      return parseInt(new Date(year, 1)
        .toLocaleDateString('pt-BR', { 
          year: '2-digit' 
        }));
    }
  },
};
</script>

<style>
</style>