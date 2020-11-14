import axios from "../../axios-orders";

export default {
  state: {
    icecreamForm : {
        id: 0,
        chocolateScoop : 2,
        strawberryScoop : 2,
        chocolateSauce : 3,
        price : 0,
        name : 'BackTester1900',
        email : 'BackTest@gmail.com',
    },
    orders: [],
    isOrderPageLoading: false,
  },

  mutations: {
    // resetOrder from frontend
    resetOrder(state) {
        state.icecreamForm.chocolateSauce = 0;
        state.icecreamForm.strawberryScoop = 0;
        state.icecreamForm.chocolateScoop = 0;
    },

    setOrderList(state, payload) {
        state.orders = payload;
    },
    setOrderPageLoading(state, payload) {
        state.isOrderPageLoading = payload;
    },
    resetOrderForm(state) {
        state.icecreamForm.id += 1;
    },
    setOrderID(state, payload) {
        state.icecreamForm.id = payload;
    },
    addChocoScoop(state) {
        state.icecreamForm.chocolateScoop += 1;
    },
    removeChocoScoop(state) {
        if (state.icecreamForm.chocolateScoop > 0) {
            state.icecreamForm.chocolateScoop -= 1;
        }
    },
    addStrawberryScoop(state) {
        state.icecreamForm.strawberryScoop += 1;
    },
    removeStrawberryScoop(state) {
        if (state.icecreamForm.strawberryScoop > 0) {
            state.icecreamForm.strawberryScoop -= 1;
        }
    },
    addChocoSauce(state) {
        state.icecreamForm.chocolateSauce += 1;
    },
    removeChocoSauce(state) {
        if (state.icecreamForm.chocolateSauce > 0) {
            state.icecreamForm.chocolateSauce -= 1;
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
                commit('resetOrderForm');
            })
    },

    async getOrders({commit}) {
        commit('setOrderPageLoading', true);
        await axios.get('/orders.json')
            .then(response => {
                commit('setOrderList', response.data);
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
                console.log("length:", Object.values(response.data).length);
            })
            .catch(() => {
                console.log("error!");
            })
            .finally(() => {
                // allow component to be loaded
                // commit('setOrderPageLoading', false);
            })      
    },

  },
}