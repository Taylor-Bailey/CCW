import axios from 'axios';

const JSONpath = "http://localhost:3004/states" ;

let GetAllStates = () => {
    return axios.get(JSONpath)
    .then((data) => {
        return data
    }).catch((error) => {
        console.log("something went wrong", error);
    })
}

let GetListOfStates = () => { 
    return GetAllStates()
    .then((data) =>{
        return data.data
    })
}


export { GetAllStates, GetListOfStates }