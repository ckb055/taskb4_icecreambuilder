<template>
    <OrderPage :key="componentKey"/>
</template>

<script>
import OrderPage from "../components/OrderPage";

export default {
  name: 'OrderView',
  data() {
    return {
      componentKey : 0
    }
  },
  components: {
    OrderPage
  },
  watch: {
    isForceRerenderCalled() {
      this.forceRerender();
    },
  },
  computed: {
    isForceRerenderCalled() {
      return this.$store.state.ingredients.isForceRerender;
    },
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
      this.$store.commit('setForceRerenderFalse');
    },
  },
}
</script>

<style scoped>

</style>