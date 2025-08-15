const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No futuro, você terá a chance de viver em outro planeta. O que você escolhe?",
        alternativas: [
            {
                texto: "Ir para Marte e começar uma nova vida.",
                afirmacao: "Você se tornou um pioneiro em Marte, ajudando a construir as primeiras cidades espaciais."
            },
            {
                texto: "Ficar na Terra e melhorar o planeta.",
                afirmacao: "Você liderou projetos sustentáveis que salvaram milhões de vidas."
            }
        ]
    },
    {
        enunciado: "Uma inteligência artificial oferece controlar sua carreira. O que você faz?",
        alternativas: [
            {
                texto: "Aceita a ajuda da IA.",
                afirmacao: "Sua vida profissional disparou, tornando você um dos líderes mundiais no seu setor."
            },
            {
                texto: "Recusa e segue seu próprio caminho.",
                afirmacao: "Você construiu sua carreira com esforço próprio, inspirando gerações."
            }
        ]
    },
    {
        enunciado: "Você pode receber um chip que aumenta sua memória. Sua escolha?",
        alternativas: [
            {
                texto: "Aceitar o chip.",
                afirmacao: "Você aprendeu 10 idiomas e se tornou um mestre do conhecimento."
            },
            {
                texto: "Recusar o chip.",
                afirmacao: "Você manteve sua mente natural e valorizou cada aprendizado conquistado."
            }
        ]
    },
    {
        enunciado: "O transporte quântico é liberado. Você viaja para onde?",
        alternativas: [
            {
                texto: "Conhecer todos os países do mundo.",
                afirmacao: "Você conheceu culturas incríveis e fez amizades em todos os continentes."
            },
            {
                texto: "Viajar para o passado.",
                afirmacao: "Você visitou grandes momentos da história e viu fatos que mudaram sua visão do mundo."
            }
        ]
    },
    {
        enunciado: "Uma empresa oferece transformar você em ciborgue. Aceita?",
        alternativas: [
            {
                texto: "Sim, quero aumentar minhas habilidades.",
                afirmacao: "Você se tornou um ser híbrido, com força e inteligência além do humano."
            },
            {
                texto: "Não, prefiro permanecer humano.",
                afirmacao: "Você viveu intensamente, valorizando cada experiência natural."
            }
        ]
    },
    {
        enunciado: "A cura para todas as doenças é criada, mas exige isolamento total por 1 ano. Sua decisão?",
        alternativas: [
            {
                texto: "Aceitar o isolamento.",
                afirmacao: "Você voltou curado e ajudou a espalhar a nova tecnologia médica."
            },
            {
                texto: "Recusar e continuar sua vida.",
                afirmacao: "Você manteve sua liberdade e aprendeu a valorizar a saúde todos os dias."
            }
        ]
    },
    {
        enunciado: "Você pode escolher uma habilidade instantânea. Qual?",
        alternativas: [
            {
                texto: "Dominar qualquer instrumento musical.",
                afirmacao: "Você emocionou multidões com músicas que marcaram gerações."
            },
            {
                texto: "Ser um gênio em programação.",
                afirmacao: "Você criou sistemas que mudaram o futuro da humanidade."
            }
        ]
    },
    {
        enunciado: "O mundo enfrenta uma crise de energia. Qual sua ação?",
        alternativas: [
            {
                texto: "Criar uma nova fonte de energia limpa.",
                afirmacao: "Sua invenção salvou bilhões e trouxe equilíbrio ao planeta."
            },
            {
                texto: "Organizar a população para reduzir consumo.",
                afirmacao: "Você uniu pessoas e mudou hábitos para garantir um futuro sustentável."
            }
        ]
    },
    {
        enunciado: "Você encontra um livro que prevê seu futuro. O que faz?",
        alternativas: [
            {
                texto: "Ler todo o livro.",
                afirmacao: "Você viveu preparado para cada desafio e aproveitou cada oportunidade."
            },
            {
                texto: "Queimar o livro.",
                afirmacao: "Você escolheu criar seu próprio destino sem influências externas."
            }
        ]
    },
    {
        enunciado: "No final da sua vida, o que deseja deixar como legado?",
        alternativas: [
            {
                texto: "Tecnologia e conhecimento.",
                afirmacao: "Você deixou invenções que impulsionaram a humanidade por séculos."
            },
            {
                texto: "Amor e união.",
                afirmacao: "Sua bondade e compaixão inspiraram gerações a serem melhores."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal + "\n\nHistória criada por Carlos Henrique e Victor Hugo.";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
