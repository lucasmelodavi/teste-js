/* DOM Document object model
 - Árvore de elementos do browser


*/

const valorReal = document.querySelector("input");


function converter() {
    
    document.querySelector("h1").style.color = "red";
    const valorConvertido = valorReal.value / 5.85;
    alert(`O valor em euro é ${valorConvertido.toFixed(2)} Euros : `);
}