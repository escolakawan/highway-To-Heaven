function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const artigo = document.createElement('article');
    artigo.classList.add('cartao');

    const conteudo = `
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

    artigo.innerHTML = conteudo;
    container.appendChild(artigo);
}

// Criando cartões com as funções
criaCartao('Programação', 'O que é Python?', 'O Python é uma linguagem de programação');
criaCartao('Geografia', 'Qual a capital da França?', 'A capital da França é Paris');
criaCartao('Programação', 'O que é uma função?', 'Uma função é um bloco de código que executa alguma tarefa');
function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const artigo = document.createElement('article');
    artigo.classList.add('cartao');

    const conteudo = `
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

    artigo.innerHTML = conteudo;
    container.appendChild(artigo);
}
function criaCartao(categoria, pergunta, resposta) {
    // Essa função será implementada no app.js
}

// Cartões com as perguntas e respostas
criaCartao('Programação', 'O que é Python?', 'O Python é uma linguagem de programação');
criaCartao('Geografia', 'Qual a capital da França?', 'A capital da França é Paris');
criaCartao('Programação', 'O que é uma função?', 'Uma função é um bloco de código que executa alguma tarefa');
criaCartao('Língua Inglesa', 'Como se diz OI em inglês?', 'Oi em inglês é HI (RAI)');
