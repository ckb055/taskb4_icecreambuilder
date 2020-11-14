import axios from "../../axios-orders";

export default {
  state: {
    icecreamForm : {
        id: '',
        chocolateScoop : 0,
        strawberryScoop : 0,
        chocolateSauce : 0,
        price : 0,
        name : '',
    },
    orders: [],
    isOrderPageLoading: false,
    isForceRerender: false,
    isOrderSuccess: false,
  },

  mutations: {
    setCurrentEditID(state, value) {
        state.icecreamForm.id = value;
    },
    
    setIcecreamFormName(state, value) {
        state.icecreamForm.name = value;
    },
    setIcecreamFormChocolateScoop(state, value) {
        state.icecreamForm.chocolateScoop = value;
        state.icecreamForm.price += value * 1.1;
    },
    setIcecreamFormStrawberryScoop(state, value) {
        state.icecreamForm.strawberryScoop = value;
        state.icecreamForm.price += value * 0.9;
    },
    setIcecreamFormChocolateSauce(state, value) {
        state.icecreamForm.chocolateSauce = value;
        state.icecreamForm.price += value * 0.6;
    },
    setForceRerenderFalse(state) {
        state.isForceRerender = false;
    },
    closeSuccess(state) {
        state.isOrderSuccess = false;
    },
    setOrderSuccess(state) {
        state.isOrderSuccess = true;
    },
    // force Rerender 
    forceRerender(state) {
        state.isForceRerender = true;
    },
    // resetOrder from frontend
    resetOrder(state) {
        state.icecreamForm.chocolateSauce = 0;
        state.icecreamForm.strawberryScoop = 0;
        state.icecreamForm.chocolateScoop = 0;
        state.icecreamForm.price = 0;
    },

    setOrderList(state, payload) {
        state.orders = Object.values(payload);
        var i;
        // console.log("MUTATION LENGTH:" , Object.values(payload).length);
        // console.log("OBJECTKEYS:", Object.keys(payload)[0]);
        for(i = 0; i <  Object.values(payload).length; i++) {
            // console.log(state.orders);
            state.orders[i].id = Object.keys(payload)[i];
        }
    },
    setOrderPageLoading(state, payload) {
        state.isOrderPageLoading = payload;
    },
    resetOrderForm(state) {
        state.icecreamForm.chocolateScoop = 0;
        state.icecreamForm.strawberryScoop = 0;
        state.icecreamForm.chocolateSauce = 0;
        state.icecreamForm.price = 0;
        state.icecreamForm.name = '';
    },
    setOrderID(state, payload) {
        state.icecreamForm.id = payload;
    },
    addChocoScoop(state) {
        state.icecreamForm.chocolateScoop += 1;
        state.icecreamForm.price += 1.1;
    },
    removeChocoScoop(state) {
        if (state.icecreamForm.chocolateScoop > 0) {
            state.icecreamForm.chocolateScoop -= 1;
            state.icecreamForm.price -= 1.1;
        }
    },
    addStrawberryScoop(state) {
        state.icecreamForm.strawberryScoop += 1;
        state.icecreamForm.price += 0.9;
    },
    removeStrawberryScoop(state) {
        if (state.icecreamForm.strawberryScoop > 0) {
            state.icecreamForm.strawberryScoop -= 1;
            state.icecreamForm.price -= 0.9;
        }
    },
    addChocoSauce(state) {
        state.icecreamForm.chocolateSauce += 1;
        state.icecreamForm.price += 0.6;
    },
    removeChocoSauce(state) {
        if (state.icecreamForm.chocolateSauce > 0) {
            state.icecreamForm.chocolateSauce -= 1;
            state.icecreamForm.price -= 0.6;
        }
    },
  },
    
  actions: {
    async sendOrder({state, commit}) {
        await axios.post('/orders.json', state.icecreamForm)
            .then(() => {
                console.log("succesfully posted!");
            })
            .catch(() => {
                console.log("error!");
            })
            .finally(() => {
                // reload component
                commit('setOrderSuccess');
                commit('resetOrderForm');
            })
    },

    async getOrders({commit}) {
        // console.log("GET ORDERS CALLED");
        commit('setOrderPageLoading', true);
        await axios.get('/orders.json')
            .then(response => {
                commit('setOrderList', response.data);
                // console.log("orders:", Object.keys(response.data));
            })
            .catch(() => {
                console.log("error!");
            })
            .finally(() => {
                // allow component to be loaded
                commit('setOrderPageLoading', false);
            })      
    },

    async getLatestOrderID({commit}) {
        // commit('setOrderPageLoading', true);
        await axios.get('/orders.json')
            .then(response => {
                commit('setOrderID', Object.values(response.data).length);
                console.log("get all orders success!");
                // console.log("length:", Object.values(response.data).length);
            })
            .catch(() => {
                console.log("error!");
            })
            .finally(() => {
                // allow component to be loaded
                // commit('setOrderPageLoading', false);
            })      
    },

    async removeOrder({commit}, {orderID}) {
        // commit('setOrderPageLoading', true);
        // console.log("delete order called FROM AXIOS");
        await axios.delete(`/orders/${orderID}.json`)
            .then(() => {
                console.log("delete success!");
            })
            .catch(() => {
                console.log("error!");
            })
            .finally(() => {
                // allow component to be loaded
                // commit('setOrderPageLoading', false);
                commit('forceRerender');
            })      
    },

    async submitEdit({state, commit}, {orderID}) {
        // console.log(state.icecreamForm);
        await axios.put(`/orders/${orderID}.json`, state.icecreamForm)
            .then(() => {
                console.log("edit success!");
            })
            .catch(() => {
                console.log("error at edit!");
            })
            .finally(() => {
                // allow component to be loaded
                // commit('setOrderPageLoading', false);
                commit('resetOrderForm');
                commit('forceRerender');
            }) 
    }

  },
}