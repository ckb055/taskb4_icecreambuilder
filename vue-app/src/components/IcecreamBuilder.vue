<template>
    <div class="Icecream">
        <h2 v-if="isEmpty">Your icecream is empty. Add some ingredients!</h2>
      <div class="ChocolateScoop" v-for="index in chocolateScoopCount" :key="index"/>  
    <div class="StrawberryScoop" v-for="index in strawberryScoopCount" :key="index"/>

  <div class="ChocolateSauce" v-for="index in chocolateSauceCount" :key="index"/>


  <div class="Cone"/>

  </div>


</template>

<script>


export default {
  name: 'App',
  components: {

  },
  computed: {
      chocolateSauceCount() {
          return this.$store.state.ingredients.icecreamForm.chocolateSauce;
      },
      strawberryScoopCount() {
          return this.$store.state.ingredients.icecreamForm.strawberryScoop;
      },
      chocolateScoopCount() {
          return this.$store.state.ingredients.icecreamForm.chocolateScoop;
      },
      isEmpty() {
          return this.$store.state.ingredients.icecreamForm.chocolateSauce
          + this.$store.state.ingredients.icecreamForm.strawberryScoop
          + this.$store.state.ingredients.icecreamForm.chocolateScoop
          === 0;
      }
  },
  mounted() {

  },
}
</script>

<style>
.Icecream {
  width: 70%;
  max-width: 750px;
  margin-right: 100px;
  margin-left: 100px;
  height: 750px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  float: center;
}

.Cone {
  grid-column: 1 / -1;
  grid-row: span 2 / -1;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  height: 60%;
  width: 40%;
  background: linear-gradient(#f08e4a, #eeac80);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #ebc1a6;
  margin: 2% auto;
  background: repeating-linear-gradient(
    45deg,
    burlywood,
    burlywood 2rem,
    wheat 2rem,
    wheat 2.3rem
  );
}

.ChocolateSauce {
  width: 50%;
  height: 4.5%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 1% auto;
  border-radius: 15px;
}

.StrawberryScoop {
  margin: auto;
  margin-bottom: -7px;
  height: 20%;
  width: 40%;
  border-radius: 150px 150px 0 0;
  background: linear-gradient(pink, rgb(250, 143, 159));
}

.ChocolateScoop {
  margin: auto;
  margin-bottom: -7px;
  height: 20%;
  width: 40%;
  border-radius: 150px 150px 0 0;
  background: linear-gradient(rgb(167, 89, 0), rgba(114, 51, 0, 0.884));
}

.backup {
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
}

</style>
