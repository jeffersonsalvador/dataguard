import Vue from 'vue'
import Vuex from 'vuex'

// import the modules
import plugin from './plugin'

Vue.use(Vuex)

export default function () {
    const Store = new Vuex.Store({
        modules: {
            plugin
        }

    })

    return Store
}
