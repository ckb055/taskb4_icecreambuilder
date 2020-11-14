<template>
  <div >
      <div>
      <b-button class="control-button" variant="primary" @click="addChocoScoop()">
          Add Chocolate Scoop
      </b-button>  
      <b-button class="control-button" variant="warning" @click="removeChocoScoop()">
          Remove Chocolate Scoop
      </b-button> 
      </div> 
      <div>
      <b-button class="control-button" variant="primary" @click="addStrawberryScoop()">
          Add Strawberry Scoop
      </b-button>  
      <b-button class="control-button" variant="warning" @click="removeStrawberryScoop()">
          Remove Strawberry Scoop
      </b-button>  
      </div> 
      <div>
      <b-button class="control-button" variant="primary" @click="addChocoSauce()">
          Add Choco Sauce
      </b-button>  
      <b-button class="control-button" variant="warning" @click="removeChocoSauce()">
          Remove Choco Sauce
      </b-button>  
      </div> 

      <b-button class="control-button" variant="primary" @click="makeOrder()">
          Post Order
        </b-button>

        <b-button class="control-button" variant="danger" @click="resetOrder()">
          Reset Order
        </b-button>
      <b-button class="control-button" variant="warning" @click="viewOrders()">
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
      addChocoScoop() {
          this.$store.commit('addChocoScoop');
      },
      removeChocoScoop() {
          this.$store.commit('removeChocoScoop');
      },
      addStrawberryScoop() {
          this.$store.commit('addStrawberryScoop');
      },
      removeStrawberryScoop() {
          this.$store.commit('removeStrawberryScoop');
      },
      addChocoSauce() {
          this.$store.commit('addChocoSauce');
      },
      removeChocoSauce() {
          this.$store.commit('removeChocoSauce');
      },
      resetOrder() {
          this.$store.commit('resetOrder');
      },
  }
}
</script>

<style scoped>
.flex-container {
    display: flex;
}

.control-button {
    margin: 8px;
}
</style>
