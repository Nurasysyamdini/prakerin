import axios from '@/middleware'
import apiKey from '../modules/config'

const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

export function getUser ()
{
    
    return axios.get(`truck_user/detail/?id=1`, { headers: { 
        'x-api-key': apiKey,
        'x-token': localStorage.getItem('truckingToken')  
        //'x-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMzE5OCJ9LCJpYXQiOjE2NzQ1NDEwNTksImV4cCI6MTY3NDYyNzQ1OX0.4nCxHpjVzkYNj050jJKvipAwlkITdJqq4s_UUU4gFvs'  
    } })
}
