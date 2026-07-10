/* Functions / funções

    - Trecho de codigo que é executado
     Somente quando chamado ( Parente gente boa)
    - Trecho de código que pode reutilizado

   [x] O que é uma função? e como usar ?
   [x] Função VOID (vazia)
   [x] Função com parâmetros
   [x] Função com retorno
   [x] Arrow Function (função de seta)
*/
 
 /* Void */

 function cidades() {
    console.log("Belo Horizonte")
 }

 /* parâmetros */

 function cidadesComNomes(cidade) {
    console.log(cidade)
 }

 
 cidadesComNomes("Governador Valadares")

 /* retorno */

 function Dividas (receita, despesas) {
    if (receita > despesas) {
       return "está no lucro"
    }else {
       return "está no prejuízo"
    }
    
 }
 const jose = Dividas(10000, 2000)
 const fabio = Dividas(100, 900)     
 console.log(jose)
 console.log(fabio)

 /* Arrow Function */

   const nomeDaCidade = (cidade) => {
      console.log("tarumirim")
   }

   nomeDaCidade()