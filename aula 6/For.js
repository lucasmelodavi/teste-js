/* 
Estrutura de repetição for -Loop
   -FOR
        1 INICIALIZAÇÃO - Criar uma variavel e colocar um valor inicial
        2 CONDIÇÃO - Enguanto for true, o laço continuara iterando.
          Ele ira verificar antes de cada alteração
        3  EXPRESSAO FINAL -  O que ira ocorrer a cada vez que o nosso laço der uma volta

        for([inicialização]; [condição]; [expressão final]){
            //bloco de código
        }
*/

const user = ["Lucas", "Davi", "Melo", "batolormeu", "auau"];

for (let x = 0; x < user.length; x++) {
    console.log(`O valor de x é ${user[x]}`);
}