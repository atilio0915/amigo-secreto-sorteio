let nomes = [];

function adicionarAmigo(){
    let input =  document.getElementById("amigo");
    let value = input.value;

    if(value){
        nomes.push(value);
        percorrer();
        input.value = "";  
    }else{
        alert("insira alguma coisa");
    }
    console.log(nomes);
}

function percorrer(){
    let listaHtml = "";
    for(let i = 0; i < nomes.length; i++){
        listaHtml += `<li>${nomes[i]}</li>`;
    }
    let lista = document.getElementById("listaAmigos");  
    lista.innerHTML = listaHtml;
}

function sortearAmigo(){
    if(nomes.length !== 0){
        let nmraleatorio = Math.floor(Math.random() * nomes.length);  
        let sorteado = nomes[nmraleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${sorteado}</li>`;  
    }else{
        alert("não há amigos suficientes para sortear");
    }
}
