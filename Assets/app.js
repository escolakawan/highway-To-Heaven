function criaCartao(categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta);
}

// Chamando a função com os parâmetros das perguntas
criaCartao('Programação', 'O que é Python?', 'O Python é uma linguagem de programação');
criaCartao('Geografia', 'Qual a capital da França?', 'A capital da França é Paris');
criaCartao('Programação', 'O que é uma função?', 'Uma função é um bloco de código que executa alguma tarefa');
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container'); // Acessa o elemento que contém os cartões
    let cartao = document.createElement('article'); // Cria um novo elemento do tipo article
    cartao.className = 'cartao'; // Atribui a classe 'cartao' ao novo article

    // Estrutura HTML do cartão, utilizando os parâmetros
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}

// Chamadas para criar os cartões
criaCartao('Programação', 'O que é Python?', 'O Python é uma linguagem de programação');
criaCartao('Geografia', 'Qual a capital da França?', 'A capital da França é Paris');
criaCartao('Programação', 'O que é uma função?', 'Uma função é um bloco de código que executa alguma tarefa');
criaCartao('Língua Inglesa', 'Como se diz OI em inglês?', 'Oi em inglês é HI (RAI)');
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Inicializa a variável para controlar a visibilidade da resposta
    let respostaEstaVisivel = false;

    // Função para virar o cartão
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona evento de clique para virar o cartão
    cartao.addEventListener('click', viraCartao);

    // Define o conteúdo do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}

// Exemplo de uso da função
criaCartao(
    'Língua Inglesa',
    'Como se diz OI em inglês?',
    'Oi em inglês é HI (RAI)'
);
