<template>
  <div >
      <div>
      <b-button class="control-button" variant="primary" @click="addChocoScoop()">
          <b-icon icon="plus"></b-icon>
          Add Chocolate Scoop
      </b-button>  
      <b-button class="control-button" variant="warning" @click="removeChocoScoop()">
          <b-icon icon="dash"></b-icon>
          Less Chocolate Scoop
      </b-button> 
      </div> 
      <div>
      <b-button class="control-button" variant="primary" @click="addStrawberryScoop()">
          <b-icon icon="plus"></b-icon>
          Add Strawberry Scoop
          
      </b-button>  
      <b-button class="control-button" variant="warning" @click="removeStrawberryScoop()">
          <b-icon icon="dash"></b-icon>
          Less Strawberry Scoop
      </b-button>  
      </div> 
      <div>
      <b-button class="control-button" variant="primary" @click="addChocoSauce()">
          <b-icon icon="plus"></b-icon>
          Add Choco Sauce
      </b-button>  
      <b-button class="control-button" variant="warning" @click="removeChocoSauce()">
          <b-icon icon="dash"></b-icon>
          Less Choco Sauce
      </b-button>  
      </div> 

      <b-button class="control-button" variant="primary" @click="confirmOrder()">
          <b-icon icon="bag-plus-fill"> </b-icon>
          Post Order
        </b-button>
        <b-modal id="isPopup" title="Confirm" 
         :visible.sync="isPopup" width="30%" center
                hide-footer>
                    Enter your name to confirm your order
                   <b-form-input v-model="name" placeholder="Your name"></b-form-input>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" v-on:click="makeOrder()">Confirm</button>
                      <button type="button" class="btn btn-secondary" v-on:click="isPopup = false" data-dismiss="modal">Close</button>
                    </div>
        </b-modal>

        <b-modal id="orderSuccess" title="Success" 
         :visible.sync="orderSuccess" width="30%" center
                hide-footer>
                    Successfully made order!
                   
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" v-on:click="closeSuccess" data-dismiss="modal">Close</button>
                    </div>
        </b-modal>
        <b-button class="control-button" variant="danger" @click="resetOrder()">
            <b-icon icon="trash"> </b-icon>
          Reset Order
        </b-button>
  </div>
</template>

<script>
export default {
  name: 'ControlButtons',
  data() {
      return {
          isPopup : false,
      }
  },
  computed: {
      name: {
            get() {
                return this.$store.state.ingredients.icecreamForm.name;
            },
            set(value) {
                this.$store.commit('setIcecreamFormName', value);
            },
        },
      orderSuccess() {
          return this.$store.state.ingredients.isOrderSuccess;
      }
  },
  methods: {
      closeSuccess() {
          this.$store.commit('closeSuccess');
      },
      confirmOrder() {
          // popup modal
          this.isPopup = true;
          // console.log(this.isPopup);
      },
      makeOrder() {
        this.$store.dispatch('sendOrder'); 
        this.isPopup = false;
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
