const caicaPrincipal = document.querySelector(".caixa-principal");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document document.querySelector (".caixa-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado:
	"A inteligência artificial sempre decide sozinha ou depende 
de como foi programada por humanos?"

alternativas: "Sempre decide sozinha", "Depende de como foi programada",
},
{


    enunciado:
"Quem cria e treina a inteligência artificial?"

alternativas: "Ela mesma", "Programadores e cientistas de dados",

],
},



{
[
    enunciado:
     A IA pode aprender com os erros e melhorar?

alternativas: "sim" , "nao"],
}

{


[enunciado:
"Quando você conversa com uma IA, quem define
 o rumo da conversa?"

alternativas:"Só a máquina" , "Você, com suas perguntas e escolhas"
],
}
{

    
[enunciado:
"A inteligência artificial pode ter sentimentos iguais aos
 humanos?"
alternativas:"Sim" , "não"
],
},

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
    const alternativas = document. createElement("button")
    botaoAlternativas.textContent = alternativas.texto;
    botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes:
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();



