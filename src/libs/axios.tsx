import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://10.0.2.2:8000/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
    },
    withCredentials: true,
    withXSRFToken: true
})

// Authorization: `Bearer ${token}`
export default axios
