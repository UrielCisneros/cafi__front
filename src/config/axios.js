import axios from 'axios'

const clienteAxios = axios.create({
    baseURL : "https://powerful-badlands-39362.herokuapp.com/api"
})

export default clienteAxios;