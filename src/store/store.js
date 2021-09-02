import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store  = new Vuex.Store({
    state: {
        propertiesName: 'This is coming from the state'
    },
    getters: {},
    mutations: {},
    actions: {}
});