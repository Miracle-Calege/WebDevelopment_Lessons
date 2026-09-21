/*
DOM-> DOCUMENT OBJECT MODEL
Object()->representa a pagina que vemos no browser
 */


//console.log(document);//vai exibir o nosso documento html

//Atraves da propriedade do documento podemos fazer alteraçoes

//document.title="My website";


//console.dir(document);//exibe todas as propriedade do documento html

const username="Miracle Calege"

const welcomeMsg=document.getElementById("welcome-msg");

welcomeMsg.textContent+=username===""?'Guest':username;