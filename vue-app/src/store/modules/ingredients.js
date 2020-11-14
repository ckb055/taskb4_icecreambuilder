import axios from "../../axios-orders";

export default {
  state: {
    icecreamForm : {
        chocolateScoop : 0,
        strawberryScoop : 0,
        chocolateSauce : 0,
        price : 0,
        name : 'Tester',
        email : 'Test@gmail.com',
    }
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
  },
}