<template>
  <div >
      <b-button variant="primary" @click="makeOrder()">
          Post Order
          </b-button>
  </div>
</template>

<script>
export default {
  name: 'ControlButtons',
  methods: {
      makeOrder() {
        this.$store.dispatch('sendOrder'); 
      },
  }
}
</script>

<style scoped>

</style>
