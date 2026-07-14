 /* 
 
    ForEach (item, index array)
      itens - Dados /informaçãoes contidos na posição atual 
      index - Numero da Posiçao Sempre começando em 0
      array - Retorna o Arry completo
 */

 const users = [
    { name: 'Davi' , age: 18, contact: '(33) 98816-8314' },
    { name: 'luana' , age: 22, contact: '(19) 91562-1723' },
    { name: 'Lucas' , age: 7, contact: '(33) 90833-8432'},
    { name: 'Melo' , age: 19, contact: '(11) 93816-7324'},
 ]

users.forEach(function(item, index, array){
      if(item.age < 18 ){
         console.log(`o cliente ${item.name}, posição ${index} é menor de idade `)
      }
})