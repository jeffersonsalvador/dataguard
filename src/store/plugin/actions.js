import axios from 'axios'

export const getPlugins = ({ commit }) => {
    axios.get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
        .then(response => {
            const {tabdata, plugins} = response.data.data
            commit('updatePlugins', plugins)
            commit('updateData', tabdata)
        })
}
