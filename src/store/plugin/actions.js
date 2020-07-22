import axios from 'axios'

export const getPlugins = ({ commit }) => {
    axios.get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
        .then(response => {
            const {plugins} = response.data.data
            commit('update', plugins)
        })
}
