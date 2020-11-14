<template>
  <div class="background">
      <br>
    <h1>Welcome to the Icecream Builder!</h1>  
    <br>
    <div class="landscape">
    
    <IcecreamBuilder/>
        <div>
            <h3> Add your own ingredients to your icecream. </h3>
            <h3> Enter Post order when you are done. </h3>
            <h5> You can view all the orders made by everyone by pressing on </h5>
            <h5>    View Orders at the top-right corner of the page. </h5>
            <h5> Total Price : {{ price.toFixed(2) }} </h5>
            <ControlButtons/>
        </div>
    </div>
  </div>


</template>

<script>
import ControlButtons from '../components/ControlButtons'
import IcecreamBuilder from '../components/IcecreamBuilder'

export default {
  name: 'App',
  components: {
    ControlButtons,
    IcecreamBuilder
  },
  computed: {
      price() {
          return this.$store.state.ingredients.icecreamForm.price;
      }
  },
  created() {
      this.$store.dispatch('getLatestOrderID');
  },
}
</script>

<style>
.landscape {
    display: flex;
}

.background {
    background-color: rgb(252, 237, 221);
}
</style>
