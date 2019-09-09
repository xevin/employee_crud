import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    employeeTypes: {
      1: 'ЛПР',
      2: 'Технический представитель',
      3: 'Представитель по расчётам',
    },
    employees: {},
  },
  mutations: {
    saveEmployee(state, payload) {
      const { id, data } = payload;
      state.employees[id] = data;
    },
    addEmployee(state, data) {
      let incrementedId = 1;
      const employeeIds = Object.keys(state.employees);

      if (employeeIds.length) {
        const maxId = Math.max(...employeeIds);
        incrementedId = maxId + 1;
      }
      state.employees[incrementedId] = data;
    },
    deleteEmployee(state, id) {
      Vue.delete(state.employees, id);
    },
  },
  actions: {
  },
  plugins: [
    vuexLocal.plugin,
  ],
});
