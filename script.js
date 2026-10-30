//Array principal
const perguntas = [
    {
    pergunta:"Qual linguagem é usada para estruturar paginas web?,"
    alternativas:["CSS", "HTML",python","java script"]
        correta:1
    }
];
const premio = [1000,10000, 20000, 30000, 40000];
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu =false;
const perguntaE = document.getElementsById("pergunta");
const alternativasE = document.getElementsById("alternativas");
const mensagemE = document.getElementsById("mensagem");
const numeroPerguntaE = document.getElementsById("numero-pergunta");
const preimioE = document.getElementsById("premio");
const proximaBtnE = document.getElementsById("proxima");

function carregarPergunta(){
    respondeu = false;
    proximaBrnE.disabland  = true;
    mensagemE.textContentet ="";
    alternativasE,innerHTML="";d4
const item = perguntas[PerguntaAtual];
perguntaE.textContentet = item.pergunta;
numeroPerguntaE.textContentet=
`pergunta:${perguntaAtual +1} de ${perguntas.length}´;
premioE,textContent =
`Premio:R${premioAtual}´;
item,alternnativas.foreEach((texto, indice)) => {
    const botao = document.createElement("button");
    botao.classList.add("alternativa");
    botao.textContent =
`${String.fromCharCode(65 + indice)} ${texto}´
botao.addEventListener("click", () =>verificaResposta(indice, botao) alternativasE.appendChild(botao));
alternativasE.appendChild(botao);
    });
}

function verificaResposta(indiceEscolhido, botaoEscolhido) {
    if (respondeu) return;
    respondeu = true;

    const item = perguntas[perguntaAtual];
    const botoes = document.querySelectorAll(".alternativa");
    botoes.forEach(botao => botao.disabled = true);

    if (indiceEscolhido === item.correta) {
        botaoEscolhido.classList.add("correta");
        premioAtual = premio[perguntaAtual];
        mensagemE.textContent = "Resposta correta! Você avançou!";
    } else {
        botaoEscolhido.classList.add("errada");
        botoes[item.correta].classList.add("correta");
        mensagemE.textContent = "Resposta incorreta! Fim de jogo.";
    }

    premioE.textContent = `Prêmio: R$ ${premioAtual.toLocaleString("pt-BR")}`;
    proximaBtnE.disabled = false;
}

proximaBtnE.addEventListener("click", () => {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mensagemE.textContent = "Parabéns! Você respondeu a todas as perguntas!";
        proximaBtnE.disabled = true;
    }
});
    function finalizarJogo (){
    perguntaE.textContent = "fim de jogo!";
    alternativasE.innerHTML ="";
    nuumeroPerguntasE.textContent = "quiz concluido";
    mensagemE.textContent =
    `você terminou com R$ ${premioAtual}!`;
    proximaBtnE.textContent = "jogar novamente";
    proximaBtnE.disbland = false
    proximaBtnE.onclick = () => {
        perguntaAtual = 0;
        premioAtual = 0;
        proximaBtnE.textContent = "proxima pergunta";
        proximaBtnE.onclick = null;
        carregarPergunta();
        
        };
    }
carregarPergunta();
