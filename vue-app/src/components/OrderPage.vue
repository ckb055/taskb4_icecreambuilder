<template>
  <el-main>
    <div class="infinite-list-wrapper">
      <ul class="infinite-list" v-infinite-scroll="loadMoreAdmins" infinite-scroll-disabled="disabled" v-loading="isLoading">
        <li v-for="(order) in orders" :key="order.id">
           
              <el-card shadow="hover" type="text" class="presentationCard" v-show="show">
                  <!-- <el-col class="presentation-id" :span="1">
                    <p> #{{ admin.id}} </p>
                  </el-col> -->
                  <el-col class="limit-width" :span="19" :offset="1">
                    <p> Chocolate Sauce : {{ order.chocolateSauce }} </p>
                    <p> Chocolate Scoop : {{ order.chocolateScoop }} </p>
                    <p> Strawberry Scoop : {{ order.strawberryScoop }} </p>
                    <p> Price : {{ order.price.toFixed(2) }} </p>
                    <p> Ordered by : {{ order.name }} </p>
                  </el-col>
                  <b-button variant="warning" @click="editOrder(order.id)">
                        Edit Order
                      </b-button>
                  <b-button variant="danger" @click="deleteOrder(order.id)">
                        Delete Order
                      </b-button>
              </el-card>
              <b-modal id="isEditPopup" title="Edit Order" 
                :visible.sync="isEditPopup" width="30%" center
                        hide-footer>
                            <h4>Edit your order</h4>
                          <b-form-input v-model="name" placeholder="Your name"></b-form-input>
                          <br>
                          Enter amount of chocolate scoops
                          <b-form-input v-model="chocolateScoop" placeholder="Enter amount of chocolate scoops"></b-form-input>
                          <br>
                          Enter amount of strawberry scoops
                         
                          <b-form-input v-model="strawberryScoop" placeholder="Enter amount of strawberry scoops"></b-form-input>
                          <br>
                          Enter amount of chocolate sauce
                      
                          <b-form-input v-model="chocolateSauce" placeholder="Enter amount of chocolate sauce"></b-form-input>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary" v-on:click="submitEdit()">Confirm</button>
                              <button type="button" class="btn btn-secondary" v-on:click="isEditPopup = false" data-dismiss="modal">Close</button>
                            </div>
                </b-modal>

        </li>
      </ul>
    </div>
  </el-main>
</template>

<script>
  export default {
    name: 'Order Page',
    data() {
      return {
        show: false,
        isEditPopup: false,
        currentID: '',
        count: 0,
        updateList: 0,
      }
    },
    watch: {

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
        chocolateScoop: {
            get() {
                return this.$store.state.ingredients.icecreamForm.chocolateScoop;
            },
            set(value) {
                this.$store.commit('setIcecreamFormChocolateScoop', value);
            },
        },
        strawberryScoop: {
            get() {
                return this.$store.state.ingredients.icecreamForm.strawberryScoop;
            },
            set(value) {
                this.$store.commit('setIcecreamFormStrawberryScoop', value);
            },
        },
        chocolateSauce: {
            get() {
                return this.$store.state.ingredients.icecreamForm.chocolateSauce;
            },
            set(value) {
                this.$store.commit('setIcecreamFormChocolateSauce', value);
            },
        },
        isLoading() {
            return this.$store.state.ingredients.isOrderPageLoading;
        },
        orders() {
            return this.$store.state.ingredients.orders;
        },
    },
    methods: {
      submitEdit() {
        this.$store.dispatch('submitEdit', {orderID : this.currentID});
      },
      editOrder(orderID) {
        this.currentID = orderID;
        this.isEditPopup = true;
        this.$store.commit('setCurrentEditID', orderID);
      },
      loadOrders() {
        this.show = true;
      },
      loadMoreOrders () {
        this.count += 5
      }, 
      deleteOrder(orderID) {
          // console.log("delete called with id:", orderID);
          this.$store.dispatch('removeOrder', { orderID : orderID});
      }, 
    },
    mounted() {
      this.$store.dispatch('getOrders');
      this.loadOrders();
    }
  }
</script>

<style scoped>
  .limit-width {
    width: 100px;
  }
  .alignLeft {
    float: left;
    display: inline-block;
    margin: 0;
  }
  .alignRight {
    float: right;
    display: inline-block;
    margin: 0;
  }
     .alignRightBtn {
    float: right;
    display: inline-block;
    margin: 0;
    padding-right: 10px;
  }
  .background {
    background-color: transparent;
    border-style: hidden;
  }
  .presentationCard {
    width: 100%;
    height: 90px;
    margin-bottom: 16px;
    background-color: rgb(255, 220, 181);
    text-align:left;
    color: black;
    padding: 4px 16px;
  }

  .control-button {
    font-size: 14px;
    padding: 11px;
  }

  .resize-dialog {
    width: 100% !important;
    height: 100% !important;
  }

  .button-container {
  margin:0 !important;
  display: flex;
  align-items: left;
  justify-content: left
  }
  .el-card__body {
  }
  .menuCard {
    width: 100%;
    height: 100%;
  }
  .infinite-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .infinite-list > li {
    width: 100%;
    height: 300px;
    margin-bottom: 16px;
    background-color: rgb(255, 220, 181);
    text-align:left;
    color: black;
    padding: 4px 16px;
    border:none;
  }
  .presentationCard .button {
    color: black;
    text-align: left;
  } 
  .presentation-image {
    text-align: center;
    vertical-align: middle;
    margin-top: 1rem;
  }
  .presentation-id {

  }
</style>