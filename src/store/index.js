import  Vue from 'vue'
import Vuex from 'vuex'
import index from './indexStore'
import condition from "@/store/conditionStore";
Vue.use(Vuex);


export default new Vuex.Store({modules:{index, condition}});