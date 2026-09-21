/*
Element selectors-> sao metodos usados para manipular elementos do HTML.\

SELECTORS:
1.document.getElementById()-> retorna um alemento por ID, se nao encontrar retorna null
2.document.getElementsClassName()-> retorna todos elementos de uma classe
3.document.getElementsByTagName()-> retorna todos elementos de uma tag
4.document.querySelector()-> retorna
5.document.querySelectorAll()

 */

/*exemplo1
const  myHeading=document.getElementById("myHeading");
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";

console.log(myHeading);
*/


/*exemplo2

const frutas=document.getElementsByClassName("frutas");

//se quisermos acessar uma das posicoes fazemos como se estivessemos a lidar com um array

frutas[1].style.backgroundColor="yellow";

console.log(frutas);

 */

/*exemplo3
const h4Elements=document.getElementsByTagName("h4");
//Podemos acessar cada elemento via indice, tambem podemos iterar sobre os elementos ou converte-los em arrays(Array.from(h4Elements))

h4Elements[0].style.backgroundColor="yellow";

console.log(h4Elements);

 */

