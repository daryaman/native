import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept' : 'app'
    },
    withCredentials: true,
    withXSRFToken: true
})

// Authorization: `Bearer ${token}`
export default axios
