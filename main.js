

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao ser convidado para uma festa, qual é a reação comum?",
        alternativas: [
            {
                texto: "Demonstra entusiasmo para conhecer gente nova",
                afirmacao: [
                    "Você é o tipo de pessoa que se sente energizada em ambientes sociais. Para você, a interação com os outros é a principal fonte de energia, e você adora a oportunidade de conversar e criar novas conexões. ",
                      "Você tem uma personalidade extrovertida e se sente à vontade em situações sociais. Quando há uma festa ou evento, você se empolga com a ideia de conhecer novas pessoas e expandir seu círculo de amizades.",
                "Você acredita que conhecer pessoas novas é uma chance de aprender coisas novas e explorar diferentes perspectivas. Cada conversa é uma oportunidade de crescimento e você adora essa dinâmica."
                ]
            },
            {
                texto: " Prefere eventos mais calmos e selecionados. ",
                afirmacao: [
                    " Você prefere encontros íntimos e conversas profundas, recarregando suas energias no tempo a sós ou com poucas pessoas de confiança.",
                  "Você valoriza a qualidade sobre a quantidade. Para você, momentos tranquilos com pessoas próximas são muito mais significativos do que grandes eventos com muitos desconhecidos.",
        "Ambientes com menos agitação e mais foco em interações autênticas são o que te atraem. Você sente que esses momentos te permitem ser mais você mesmo, sem as pressões sociais típicas de eventos grandes."
                ]
            }
        ]
    },
    {
        enunciado: "Como você se sente depois de um dia de trabalho em grupo?",
        alternativas: [
            {
                texto: " Revigorado, pronto para sair de novo! ",
                afirmacao: [
                    "Você se recarrega com a interação social e se sente mais produtiva e inspirada em ambientes de grupo, onde a troca de ideias estimula sua criatividade e colaboração. ",
                   "Estar rodeado de pessoas te dá energia e motivação para enfrentar novos desafios. Quanto mais você socializa, mais sente que o mundo está cheio de possibilidades e conexões a serem exploradas.",
        "Você vê cada encontro como uma oportunidade de diversão e aprendizado. O convívio constante com os outros alimenta seu entusiasmo e te deixa pronto para o próximo evento sem precisar de muito descanso."
                ]
            },

            {
                texto: " Precisa de um tempo a sós para relaxar  ",
                afirmacao: [
                    " Você precisa de tempo sozinho para se reconectar, pois o excesso de estímulo social pode te cansar. Por isso, valoriza momentos de paz para renovar suas energias e organizar suas ideias. ",
                   "Estar só é uma forma de descanso e autocuidado para você. Esses momentos silenciosos te ajudam a recuperar o equilíbrio emocional e a clareza mental após períodos de muita interação.",
        "Você se sente mais centrado quando tem espaço para refletir e estar em contato consigo mesmo. O tempo a sós não é solidão, mas uma necessidade natural para manter seu bem-estar e energia."
                ]
            }
        ]
    },
    {
        enunciado: " Qual o seu estilo em uma conversa em grupo?",
        alternativas: [
            {
                texto: "Gosta de contar histórias e participar ativamente ",
                afirmacao: [
                    "Você tem uma habilidade natural de se comunicar, fazendo qualquer conversa fluir e se tornando a alma do ambiente.",
                          "Sua energia contagiante atrai as pessoas ao seu redor, e você adora compartilhar experiências, fazer os outros rirem e manter o clima leve e animado.",
        "Você se sente à vontade quando pode expressar suas ideias e opiniões, e gosta de ver as pessoas envolvidas nas suas histórias. Para você, socializar é uma forma de criar laços e espalhar boas vibrações."
                ]
            },
            {
                texto: " Prefere ouvir mais do que falar e contribuir apenas quando necessário ",
                afirmacao: [
                    "Você é um ouvinte atento e tranquilo, sempre absorvendo as informações com calma. Suas contribuições são sempre precisas e vêm com propósito, adicionando valor à conversa.",
                   "Você acredita que ouvir é tão importante quanto falar. Ao observar e refletir antes de se expressar, demonstra sabedoria e empatia, o que faz com que suas palavras tenham peso e impacto.",
        "Sua postura reservada transmite serenidade e confiança. Você prefere falar quando realmente tem algo significativo a acrescentar, e por isso, as pessoas tendem a valorizar suas opiniões e conselhos."
                ]
            }
        ]
    },
    {
        enunciado: "No fim de semana ideal, o que não pode faltar?",
        alternativas: [
            {
                texto: "Eventos com amigos e família",
                afirmacao: [
                    "Para você, o fim de semana perfeito é cheio de movimento e socialização. Sua agenda fica repleta de eventos, sempre em busca de novas interações e experiências.",
                     "Estar cercado de pessoas queridas é o que realmente te faz feliz. Você valoriza momentos de descontração e risadas, aproveitando cada oportunidade para fortalecer laços com amigos e familiares.",
        "Você se sente revigorado em encontros cheios de afeto e boas conversas. Para você, esses momentos representam conexão, alegria e a chance de criar memórias especiais com quem mais importa."
                ]
            },
            {
                texto: " Tempo para ler, ver um filme ou simplesmente relaxar em casa. ",
                afirmacao: [
                    "Para você, o fim de semana é um verdadeiro refúgio, onde a paz e o tempo sozinho são essenciais para recarregar as energias e encontrar equilíbrio. ",
                    "Momentos tranquilos, com um bom livro ou filme, são sua forma de desconectar do ritmo acelerado do dia a dia. Você valoriza esse tempo para si como uma maneira de cuidar da mente e das emoções.",
        "Ficar em casa, em um ambiente acolhedor, é o que te traz conforto e serenidade. Esses pequenos prazeres te ajudam a começar a semana renovado e com mais clareza mental."
                ]
            }
        ]
    },
    {
        enunciado: "Quando conhece alguém novo, como é o processo?",
        alternativas: [
            {
                texto: "Conversa com entusiasmo e compartilha detalhes da vida",
                afirmacao: [
                    "Você se abre com facilidade e, com sua habilidade de se expressar, cria novas conexões de forma natural e fluida.",
                     "Sua maneira calorosa e espontânea de conversar faz com que as pessoas se sintam à vontade ao seu redor. Você gosta de trocar experiências e acredita que compartilhar histórias aproxima as pessoas.",
        "Você enxerga a comunicação como uma forma de criar vínculos genuínos. Ao dividir partes da sua vida, transmite confiança e autenticidade, inspirando os outros a fazer o mesmo."
                ]
            },
            {
                texto: " Observa a pessoa e só se abre quando sente confiança ",
                afirmacao: [
                    "Você tende a ser mais cauteloso preferindo que as conexões se desenvolvam de maneira gradual, e só se abre plenamente com pessoas em quem realmente confia. ",
                           "Você valoriza relações genuínas e acredita que confiança é algo que se constrói com o tempo. Antes de compartilhar sobre si, gosta de observar e entender quem está ao seu redor.",
        "Sua reserva demonstra maturidade e sensibilidade. Para você, abrir-se emocionalmente é um gesto importante, e por isso escolhe com cuidado as pessoas com quem compartilha seus sentimentos e pensamentos."
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado()
        return;

    }


    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = "  ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();

}

function mostraResultado() {
    caixaPerguntas.textContent = "Se fosse possível...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "  ";
}






mostraPergunta();
