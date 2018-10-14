import Vue from 'vue'
import Vuex from 'vuex'
import conversations from './modules/conversations'

Vuex.use(Vuex)

export default new Vuex.store({
    modules: {
        conversations
    }
})
