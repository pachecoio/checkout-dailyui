<template>
  <button
    :type="type || 'button'" 
    class="btn"
    :class="classes"
    :@click="action" >
    {{value}}
  </button>
</template>

<script>
import './button.scss';

export default {
  props: [
    'value',
    'classes',
    'type',
    'action'
  ]
}
</script>

<style>

</style>