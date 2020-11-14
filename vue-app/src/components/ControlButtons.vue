<template>
  <div >
      <b-button variant="primary" @click="makeOrder()">
          Post Order
        </b-button>

      <b-button variant="primary" @click="viewOrders()">
          View Orders
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
      viewOrders() {
          this.$router.push("/view-orders");
      },
  }
}
</script>

<style scoped>

</style>
