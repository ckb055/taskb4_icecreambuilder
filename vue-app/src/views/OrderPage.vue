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
                    <p> {{ order }} </p>
                  </el-col>
 
              </el-card>

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
        removeMemberPopup: false,
        demoteAdminPopup: false,
        count: 0,
        updateList: 0,
      }
    },
    watch: {

    },
    computed: {
        isLoading() {
            return this.$store.state.ingredients.isOrderPageLoading;
        },
        orders() {
            return this.$store.state.ingredients.orders;
        },
    },
    methods: {
      loadOrders() {
        this.show = true;
      },
      loadMoreOrders () {
        this.count += 5
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
    background-color: white;
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
    height: 90px;
    margin-bottom: 16px;
    background-color: rgb(255, 220, 181);
    text-align:left;
    color: black;
    padding: 4px 16px;
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