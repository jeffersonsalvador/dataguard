import axios from 'axios'

getPlugins()
{
    axios
        .get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
        .then((response) => {
            const {plugins} = response.data.data
            return plugins
        })
}

export default {
    plugins: getPlugins()
}
