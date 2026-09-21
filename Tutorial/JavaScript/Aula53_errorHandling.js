/*
Error-> é um problema criado para representar um problema que ocorreu geralmente
quando recebemos um dado do usuário ou estabelecemos uma conexao.

Usamos:

try{
onde colocamos o codigo que pode gerar erro
}catch(tipo de erro){
instruçao para caso um erro ocorra
}finally{
sempre será executado
}


 */

//
// try{
//     console.log(x);
//
// }catch (error){
//     console.error(error);//ideal para exibir erros
// }finally {
//     console.log('Sempre executada');
// }
// console.log('Chegamos ao fim');


try {
    const dividendo = Number(window.prompt('Insira o dividendo'));//fizemos um cast do input para ser convertido é um  valor numerico
    const divisor = Number(window.prompt('Insira o divisor'));
    if(divisor == 0){
        throw  new Error("Nao podes dividir por 0");
    }
    if(isNaN(dividendo) || isNaN(divisor)){//isNaN() verifica se um valor é númerico
        throw  new Error("Valores devem ser números");

    }
    const  resultado = dividendo/divisor;
    console.log(resultado);
}catch (error){
    console.error(error);
}

console.log("Chegamos no fim");