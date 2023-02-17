import axios from '@/plugins/axios'
export default {
    async login (params) {
        const response = await axios.post('/auth/local', params) 
        return response
    }
}