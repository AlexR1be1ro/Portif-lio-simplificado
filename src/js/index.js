/* Objetivo 1 - quando o usuário clicar no botão de "mostrar mais" deve abrir os projetos que estão escondidos  no html

    Passo 1  - pegar  o botão "mostrar mais" no JS pra poder verificar quando o usuárioo clicar  em cima dele

    Passo 2 - identificar o clique no botão

    Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais
    
    Passo 1 - pegar o botão e esconder ele
*/

//Objetivo 1 - quando o usuário clicar no botão de "mostrar mais" deve abrir os projetos que estão escondidos  no html

//Passo 1  - pegar o botão "mostrar mais" no JS pra poder verificar quando o usuárioo clicar  em cima dele

//Com o querySelector eu consigo acessar uma classe dentro do html como a classe btn por exemplo, que é a classe do botão. "Const botaoMostrarPrjetos" é uma variavel. 

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
//querySelectorAll vai pegas todos oos elementos que não tem a classe 'ativo'.
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//console.log permite que vc veja a classe selecionada no Devtools do site. *console.log(botaoMostrarProjetos);*

// Passo 2 - identificar o clique no botão. addEventListener executa alguma coisa depois de ouvir o click
botaoMostrarProjetos.addEventListener('click',() => {
    //testando o botão enviando a palavra teste ao clicar, pro console no site. 
    //*console.log('test')*

    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos. *forEach=para cada*. classList.add adiciona uma class em cada elemento de uma div definida. Transformei em função para ficar mais legivel.
    mostrarMaisProjetos();

    //Objetivo 2 - esconder o botão de mostrar mais
    //Passo 1 - pegar o botão e esconder ele
    esconderBotao();
});
function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

//como criar uma função: selecionar as linhas e clicar com o botao direito, clicar em refatorar,, clicar em extrair para funcao em global escope