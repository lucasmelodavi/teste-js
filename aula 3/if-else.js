/* O que é if?

O if significa:

"Se..."

Ele serve para verificar se uma condição é verdadeira.

O que é else?

O else significa:

"Senão..."

Ele é usado junto com o if.

Dados de Comparação
 Operador  Significado    

 >      Maior que      
 <      Menor que      
 >=     Maior ou igual
 <=      Menor ou igual 
 ===     Igual 
 ==     Igual (não recomendado)         
 !==    Diferente      

 
*/

            
const cidades = {
  Tarumirim: {
    populacao: 14585
  },
  GovernadorValadares: {
    populacao: 328901
  },
  BeloHorizonte: {
    populacao: 2315560
  }
};

if (cidades.GovernadorValadares.populacao > 1773718) {
  console.log("A cidade é grande");
} else {
  console.log("A cidade não é grande");
}
