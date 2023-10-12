
// criando um array para pegar os valores do input 
const cadastros = []; 


function cadastrar(){

          //adicionando os valores enviados do input 
          const nome = document.getElementById('nome').value; 
          const cpf = document.getElementById('cpf').value;
          const dtaniversario = document.getElementById('dt_aniversario').value;
          const nmvacina = document.getElementById('nm_vacina').value;
          const hrvacina = document.getElementById('hr_vacina').value;
          
          //colocando a data atual em que o usuario esta acessando o site 
          let dataOriginal = new Date(); 
          
           const padraoData = new Intl.DateTimeFormat('pt-BR', {
              dateStyle: 'short',
           }); 

        //pegando especificamente o dia em que o usuário esta acessando
        let diaAtual = dataOriginal.getDate();

        //somando o dia atual com o 30 , que indicara o próximo dia da vacinação
        diaAtual += 30;

        let dataNova = new Date(dataOriginal);
        dataNova.setDate(diaAtual); 


        //adicionando os valores ao array 
        cadastros.push({nome ,cpf , dtaniversario, nmvacina,hrvacina,dataOriginal , dataNova})

        document.getElementById("blococadastro").reset();

        alert("Cadastro realizado!");

        // chamando a função que adicionara os valores na tela 
        listarVacinas();

   
}


//função para não deixar a tela da refresh 
document.getElementById("enviar").addEventListener("submit", function(e) {
  e.preventDefault();
  cadastrar();
});

//chamando a função que sera criada abaixo 
listarVacinas(); 



function listarVacinas() {
  const listaVacina = document.getElementById("Mostraresultado");
  listaVacina.innerHTML = "";

  cadastros.forEach(cadastro => {

    //criando o elemento li para cada informação colocada logo abaixo 
      const listItem = document.createElement("li");

    //Aplicando as informações dentro do li craido 
      listItem.textContent = `Nome: ${cadastro.nome}   ,CPF: ${cadastro.cpf},  Data de Nascimento: ${cadastro.dtaniversario},  Nome da Vacina: ${cadastro.nmvacina},Hora da vacina: ${cadastro.hrvacina},Data da vacina: ${cadastro.dataOriginal } , Nova Data :  ${cadastro.dataNova}`;
      listaVacina.appendChild(listItem);
  });
}
 



