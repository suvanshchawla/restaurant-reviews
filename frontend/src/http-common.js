import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/api/v1/restaurants",
    withCredentials: false,
    header:{
        "Content-type": "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
    }
});