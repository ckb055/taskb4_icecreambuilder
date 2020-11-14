import axios from "../../axios-orders";

export default {
  state: {
    icecreamForm : {
        chocolateScoop : 0,
        strawberryScoop : 0,
        chocolateSauce : 0,
        price : 0,
        name : 'AnotherTester',
        email : 'AnotherFella@gmail.com',
    },
    orders: [],
  },

  mutations: {

  },
    
  actions: {
    async sendOrder({state}) {
        await axios.post('/orders.json', state.icecreamForm)
            .then(() => {
                console.log("succesfully posted!");
            })
            .catch(() => {
                console.log("error!");
            })
            .finally(() => {
                // reload component
            })
    },

    async getOrders({commit}) {
        await axios.get('/orders.json')
            .then(response => {
                commit('setOrderList', response.data);
            })
            .catch(() => {
                console.log("error!");
            })
            .finally(() => {
                // allow component to be loaded
            })
            
            
    }
  },
}