<template>
<div>
<el-menu class="navbar" mode="horizontal" router>
    <el-menu-item class="logo-detail-chairvise" index="/home">
    <img class="logo" alt="Icecream Builder logo" src="@/assets/logo.jpg" />
    </el-menu-item>
        <b-button class="back-to-home" variant="warning" @click="backToHome()">
          Back to Home
        </b-button> 
          <b-button class="view-orders" variant="warning" @click="viewOrders()">
          View Orders
        </b-button>  
</el-menu>
</div>


</template>

<script>


export default {
    methods : {
        viewOrders() {
          this.$router.push("/view-orders");
        },
        backToHome() {
          this.$router.push("/home");
        },
    }

}
</script>

<style>
.logo {
    height : 80px;
}
.navbar {
    height: 100px;
    background-color : rgb(119, 58, 0);
}
.view-orders {
    height: 80px;
}
.back-to-home {
    height: 80px;
    position: absolute;
    right : 150px;
}
</style>
