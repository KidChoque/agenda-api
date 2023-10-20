const urlViaCep= "https://viacep.com.br/ws"

function cadastrar(e){
    e.preventDefault();
    alert("Cadastrar...")
}

async function buscarEndereco(cep){
   const resource = `/${cep}/json/`
   try {
    //transformo o json retornado em um objeto ou array
    const promise = await fetch(urlViaCep + resource);
    const enderecco = await promise.json();
    console.log(enderecco);

    document.getElementById("endereco").value = enderecco.logradouro;
    document.getElementById("cidade").value = enderecco.localidade;
    document.getElementById("estado").value = enderecco.uf;
    

    //resetar o span do cep inválido
    document.getElementById("not-found").innerText = "";
   } catch (error) {
    console.log(error);
    document.getElementById("not-found").innerText = "cep invalido";
   }
}

