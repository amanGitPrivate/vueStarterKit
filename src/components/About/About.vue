<template>
  <div class="skills">
      About vue
    <input @input="changed" name="flavor"/>
  </div>
</template>

<script>
export default {
  methods: {
    changed: function(event) {
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>