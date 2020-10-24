import axios from 'axios'

const clienteAxios = axios.create({
    baseURL : "https://powerful-badlands-39362.herokuapp.com"
})

export default clienteAxios