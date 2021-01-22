import axios from 'axios';


export const formService={
    getUsers,
}

function getUsers (){
 return axios.get('https://jsonplaceholder.typicode.com/users').then(response=> response).catch(error=> error)

}


// function getUsers (){
//     return Promise.resolve({
//        data: [
//             {name:'xyz',email:'amritapanda@digitaldots.ai'},
//             {name:'abc',email:'amritapanda@digitaldots.ai'},
//         ]
//     })
   
//    }