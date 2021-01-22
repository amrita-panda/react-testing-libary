export const formService={
    getUsers,
}

function getUsers (){
 return Promise.resolve({
    data: [
         {name:'xyz',email:'amritapanda@digitaldots.ai'},
         {name:'abc',email:'amritapanda@digitaldots.ai'},
     ]
 })

}