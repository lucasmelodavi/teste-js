/* Estrutura de loop
  -for in
  - usado para iterar objetos
*/

const user = {
    name: 'gustavo',
    age: 33,
    street: "Rua dos cachorros"
}


for ( let key in user){
    console.log(user[key])
}

