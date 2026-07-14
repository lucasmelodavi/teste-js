/*

  DOMINANDO ARRAYS no JavgaScript

     Map(Mepear item por item do Arrsy)
        -Criar um novo array com a mesma quantidade de itens da array original.
        - o novo array voce pode alterar o que quiser em relação ao array original.
        -Voce tem acesso a 3 dados:
            -Item por Item do array
            -Posição atual do Array
            -Array completo
*/

const numeros = [1,2,3,4,5]

const dobro = numeros.map((numero, index, arrayCompleto)=> {
  return numero * 4
})

console.log(dobro)