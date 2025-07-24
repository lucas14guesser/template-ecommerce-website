import axios from 'axios'
import React from 'react'

const http = axios.create({ baseURL: 'http://localhost:3000/ecommerce' });
export default http
