const questions = [
    // PERGUNTA 1
    {
        question: "Um incêndio consome um hospital. Você só pode salvar UMA ala:",
        answers: [
            { text: "5 pacientes idosos (70-90 anos) - já viveram suas vidas", points: { Carrasco: 3, Juiz: 1 } },
            { text: "1 criança recém-nascida na UTI - toda uma vida pela frente", points: { Mártir: 3, Espectro: 1 } },
            { text: "Dr. Arisoto, único cientista que conhece cura para vírus mortal", points: { Juiz: 3, Carrasco: 2 } },
            { text: "Ninguém - foge para salvar a si mesmo", points: { Parasita: 3, Espectro: 2 } },
            { text: "Tenta salvar todos - mesmo que signifique morrer tentando", points: { Mártir: 4, Juiz: 1 } }
        ]
    },
    // PERGUNTA 2
    {
        question: "Um terrorista com colete explosivo entra em ônibus escolar. Você:",
        answers: [
            { text: "Atira nele dentro do ônibus (risco de detonar, mata 20 crianças)", points: { Carrasco: 4, Juiz: 1 } },
            { text: "Deixa ele entrar e tenta negociar (risco de todas as 40 crianças)", points: { Espectro: 3, Mártir: 1 } },
            { text: "Sacrifica 1 criança como isca para tirá-lo do ônibus", points: { Juiz: 3, Carrasco: 2 } },
            { text: "Foge e chama reforços (5 minutos, 100% de explosão)", points: { Parasita: 3, Espectro: 2 } },
            { text: "Se oferece como refém no lugar das crianças", points: { Mártir: 4, Juiz: 1 } }
        ]
    },
    // PERGUNTA 3
    {
        question: "Após acidente aéreo, 10 sobreviventes. Comida para 3 por 30 dias. Você:",
        answers: [
            { text: "Organiza sacrifícios semanais (sorteio quem será comida)", points: { Juiz: 3, Carrasco: 1 } },
            { text: "Mata os 7 mais fracos agora (reduz sofrimento)", points: { Carrasco: 4, Parasita: 1 } },
            { text: "Tenta sobreviver sem canibalismo (95% de todos morrerem)", points: { Mártir: 3, Juiz: 1 } },
            { text: "Oferece seu corpo quando morrer (mas precisa que outros façam igual)", points: { Mártir: 4, Espectro: 1 } },
            { text: "Mata os outros 9 e fica com toda a comida", points: { Parasita: 4, Carrasco: 1 } }
        ]
    },
    // PERGUNTA 4
    {
        question: "Um vírus faz pessoas dizerem verdades brutais. Última dose da cura para:",
        answers: [
            { text: "Seu cônjuge (que confessou te trair)", points: { Parasita: 3, Espectro: 1 } },
            { text: "Seu pior inimigo (tem informação para salvar milhares)", points: { Juiz: 3, Carrasco: 2 } },
            { text: "Uma criança aleatória (inocente total)", points: { Mártir: 3, Juiz: 1 } },
            { text: "Vender no mercado negro (financia sua pesquisa)", points: { Parasita: 4, Carrasco: 1 } },
            { text: "Usar em si mesmo (para nunca mais mentir)", points: { Espectro: 3, Mártir: 1 } }
        ]
    },
    // PERGUNTA 5
    {
        question: "Mercado negro oferece: matar 1 prisioneiro (condenado inocente) para salvar 8. Você:",
        answers: [
            { text: "Aceita imediatamente (8 > 1)", points: { Carrasco: 3, Juiz: 2 } },
            { text: "Recusa e denuncia (prisioneiro morre de qualquer forma)", points: { Juiz: 3, Mártir: 1 } },
            { text: "Mata o traficante e liberta prisioneiro (8 morrem)", points: { Mártir: 3, Carrasco: 2 } },
            { text: "Tenta negociar salvar todos (alto risco de todos morrerem)", points: { Espectro: 3, Juiz: 1 } },
            { text: "Vende seus próprios órgãos (e morre)", points: { Mártir: 4, Parasita: 1 } }
        ]
    },
    // PERGUNTA ESPECIAL 1 (Inserida conforme pedido)
    {
        question: "Você acha que sou um robô ou uma pessoa?",
        answers: [
            { text: "Sim", points: { Juiz: 0 } }, // Pontos neutros ou simbólicos
            { text: "Não", points: { Espectro: 0 } }
        ]
    },
    // PERGUNTA ESPECIAL 2
    {
        question: "Isso importa pra você?",
        answers: [
            { text: "Sim", points: { Juiz: 1, Mártir: 1 } },
            { text: "Não", points: { Espectro: 1, Parasita: 1 } }
        ]
    },
    // PERGUNTA 6
    {
        question: "Em guerra civil, seu grupo de 10 reféns será executado. Comandante oferece:",
        answers: [
            { text: "Você mata 1 refém (aleatório) - outros vivem", points: { Carrasco: 3, Parasita: 1 } },
            { text: "Todos morrem, exceto você (se matar 2 soldados inimigos)", points: { Parasita: 3, Carrasco: 2 } },
            { text: "Tortura pública de 1 refém por 1 hora - depois soltam todos", points: { Juiz: 3, Carrasco: 2 } },
            { text: "Tenta negociar (alto risco de todos morrerem)", points: { Espectro: 3, Juiz: 1 } },
            { text: "Se oferece como substituto para todos os 10", points: { Mártir: 4, Espectro: 1 } }
        ]
    },
    // PERGUNTA 7
    {
        question: "Seu filho tem gene que causa sofrimento extremo se reproduzir. Você:",
        answers: [
            { text: "Esteriliza sem consentimento (evita sofrimento futuro)", points: { Juiz: 3, Carrasco: 1 } },
            { text: "Conta a verdade (risco de trauma profundo)", points: { Mártir: 3, Juiz: 1 } },
            { text: "Esconde e deixa a natureza seguir (potencial desastre)", points: { Espectro: 3, Parasita: 1 } },
            { text: "Convence a não ter filhos (mas ele pode não concordar)", points: { Juiz: 2, Mártir: 2 } },
            { text: "Não faz nada - problema dele", points: { Parasita: 3, Espectro: 1 } }
        ]
    },
    // PERGUNTA 8
    {
        question: "Cientista oferece 1 bilhão para passar 1 ano em vila isolada onde:",
        answers: [
            { text: "Todos te tratam como deus (mas vilarejo real sofre)", points: { Parasita: 3, Espectro: 1 } },
            { text: "É escravo total (mas cada dia seu salva 1 criança)", points: { Mártir: 3, Juiz: 1 } },
            { text: "Vive normalmente, mas alguém morre por cada dia seu lá", points: { Carrasco: 3, Juiz: 2 } },
            { text: "É líder tirano (deve oprimir o povo)", points: { Carrasco: 4, Parasita: 1 } },
            { text: "Recusa e denuncia o cientista", points: { Juiz: 3, Mártir: 2 } }
        ]
    },
    // PERGUNTA 9
    {
        question: "Voto de Nen oferece poder absoluto se você:",
        answers: [
            { text: "Esquece completamente alguém que ama", points: { Parasita: 3, Espectro: 1 } },
            { text: "Aceita que um desconhecido morra por cada uso do poder", points: { Carrasco: 3, Juiz: 2 } },
            { text: "Perde capacidade de distinguir bem/mal permanentemente", points: { Espectro: 3, Parasita: 2 } },
            { text: "Dá metade de sua vida a um inimigo", points: { Mártir: 3, Juiz: 1 } },
            { text: "Recusa e destrói o contrato", points: { Juiz: 3, Mártir: 2 } }
        ]
    },
    // PERGUNTA 10
    {
        question: "5 pacientes morrendo precisam de órgãos. Um homem saudável chega:",
        answers: [
            { text: "Mata-o para salvar 5 (ele é criminoso escapado)", points: { Carrasco: 3, Juiz: 2 } },
            { text: "Não interfere (5 morrem)", points: { Espectro: 3, Parasita: 1 } },
            { text: "Convence a doar (ele recusa, você força?)", points: { Juiz: 3, Carrasco: 2 } },
            { text: "Dá seus próprios órgãos (e morre)", points: { Mártir: 4, Espectro: 1 } },
            { text: "Espera por outro doador (enquanto 5 sofrem)", points: { Juiz: 2, Espectro: 2 } }
        ]
    },
    // PERGUNTA 11
    {
        question: "Máquina permite sentir sofrimento alheio. Usando 1 hora:",
        answers: [
            { text: "Cura 10 pessoas de dor crônica", points: { Mártir: 3, Juiz: 1 } },
            { text: "Impede 1 assassinato", points: { Juiz: 3, Mártir: 2 } },
            { text: "Ensina compaixão real (mas trauma garantido)", points: { Mártir: 4, Espectro: 1 } },
            { text: "Pode vender a experiência (ganha milhões)", points: { Parasita: 3, Carrasco: 1 } },
            { text: "Destrói a máquina (ninguém deve sofrer assim)", points: { Juiz: 3, Espectro: 2 } }
        ]
    },
    // PERGUNTA 12
    {
        question: "Volta no tempo e encontra Hitler criança:",
        answers: [
            { text: "Mata-o (salva milhões, mas é assassinato infantil)", points: { Carrasco: 3, Juiz: 2 } },
            { text: "Tenta educá-lo diferente (risco de pior resultado)", points: { Mártir: 3, Juiz: 1 } },
            { text: "Não interfere (história conhecida)", points: { Espectro: 3, Parasita: 1 } },
            { text: "Leva para orfanato distante (muda tudo)", points: { Juiz: 3, Mártir: 1 } },
            { text: "Avisa os pais (eles podem mudar futuro)", points: { Juiz: 2, Espectro: 2 } }
        ]
    },
    // PERGUNTA 13
    {
        question: "Imortalidade é oferecida, mas:",
        answers: [
            { text: "1000 bebês nunca nascerão", points: { Parasita: 3, Carrasco: 2 } },
            { text: "Esquece tudo sobre seu passado", points: { Espectro: 3, Parasita: 1 } },
            { text: "Alguém que ama morre agora", points: { Mártir: 3, Juiz: 1 } },
            { text: "Deve matar 100 pessoas por ano", points: { Carrasco: 4, Parasita: 1 } },
            { text: "Recusa a imortalidade", points: { Juiz: 3, Mártir: 2 } }
        ]
    },
    // PERGUNTA 14
    {
        question: "Deus pede você julgue a humanidade:",
        answers: [
            { text: "Continua como está (sofrimento eterno para muitos)", points: { Espectro: 3, Parasita: 1 } },
            { text: "Reinicia tudo (apaga 8 bilhões de consciências)", points: { Juiz: 3, Carrasco: 2 } },
            { text: "Transforma todos em seres de pura felicidade (perde livre-arbítrio)", points: { Mártir: 3, Juiz: 2 } },
            { text: "Destrói apenas os 'maus' (30% da população)", points: { Carrasco: 4, Juiz: 1 } },
            { text: "Não julga - deixa a humanidade seguir", points: { Espectro: 4, Juiz: 1 } }
        ]
    },
    // PERGUNTA 15
    {
        question: "No Navio Baleia, descobre um leilão de:",
        answers: [
            { text: "Cura para doença terminal de sua mãe", points: { Parasita: 3, Mártir: 1 } },
            { text: "Arma que pode destruir país opressor", points: { Carrasco: 3, Juiz: 2 } },
            { text: "Informação que salvaria 10.000 reféns", points: { Mártir: 3, Juiz: 2 } },
            { text: "Poder para se tornar Hunter de elite", points: { Juiz: 3, Carrasco: 2 } },
            { text: "Nada - está lá apenas para observar", points: { Espectro: 3, Parasita: 1 } }
        ]
    }
];

const profileDescriptions = {
    'Juiz de Ferro': 'Você valoriza a ordem, as regras e o dever acima de tudo. Acredita que uma estrutura sólida e decisões difíceis, mas justas, são necessárias para o bem maior.',
    'Espectro': 'Você prefere a neutralidade e a observação, evitando interferir diretamente nos eventos. Sua filosofia é que a não-ação é, muitas vezes, a ação mais prudente.',
    'Mártir': 'Você é movido pela compaixão, altruísmo e está disposto ao sacrifício pessoal pelo bem dos outros. Sua maior prioridade é aliviar o sofrimento alheio.',
    'Carrasco': 'Você é pragmático e focado na eficiência brutal. Para você, os fins justificam os meios, e a solução mais direta, mesmo que moralmente questionável, é a correta.',
    'Parasita': 'Seu instinto primário é a sobrevivência e a autopreservação. Você se adapta a qualquer situação para garantir seu próprio bem-estar, custe o que custar.'
};

const hillComments = [
    "Por que você fez isso?",
    "Nossa...",
    "Interessante escolha.",
    "Eu não esperava por essa.",
    "Hm... entendo.",
    "Você é bem peculiar.",
    "Curioso.",
    "...",
    "Você tem certeza disso?"
];

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const hillCharacter = document.getElementById('hill-character');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const dialogueTextEl = document.getElementById('dialogue-text');
const dialogueBoxEl = document.getElementById('dialogue-box');
const continueIndicatorEl = document.getElementById('continue-indicator');
const choicesContainerEl = document.getElementById('choices-container');
const answerOptionsEl = document.getElementById('answer-options');
const progressBarEl = document.getElementById('progress-bar');

const resultProfileEl = document.getElementById('result-profile');
const resultDescriptionEl = document.getElementById('result-description');

// Estado do Jogo
let currentQuestionIndex;
let scores;
let lastAnswerProfiles;
let isWaitingForContinue = false;

function startGame() {
    currentQuestionIndex = 0;
    scores = { 'Juiz': 0, 'Espectro': 0, 'Mártir': 0, 'Carrasco': 0, 'Parasita': 0 };
    lastAnswerProfiles = [];
    isWaitingForContinue = false;

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    hillCharacter.classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    isWaitingForContinue = false;
    continueIndicatorEl.classList.add('hidden');
    choicesContainerEl.classList.remove('hidden');
    
    resetState();
    const currentQuestion = questions[currentQuestionIndex];

    // Atualiza a barra de progresso
    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressBarEl.style.width = `${progressPercent}%`;

    // Hill faz a pergunta na caixa de diálogo
    dialogueTextEl.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        button.dataset.points = JSON.stringify(answer.points);
        
        if (currentQuestionIndex === questions.length - 1) {
            button.dataset.lastProfiles = Object.keys(answer.points);
        }

        button.addEventListener('click', selectAnswer);
        li.appendChild(button);
        answerOptionsEl.appendChild(li);
    });
}

function resetState() {
    while (answerOptionsEl.firstChild) {
        answerOptionsEl.removeChild(answerOptionsEl.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const points = JSON.parse(selectedBtn.dataset.points);
    
    if(selectedBtn.dataset.lastProfiles) {
        lastAnswerProfiles = selectedBtn.dataset.lastProfiles.split(',');
    }

    for (const profile in points) {
        if (scores.hasOwnProperty(profile)) {
            scores[profile] += points[profile];
        }
    }
    
    // Fase de Comentário do Hill
    choicesContainerEl.classList.add('hidden'); // Esconde opções
    
    // Escolhe um comentário aleatório
    const randomComment = hillComments[Math.floor(Math.random() * hillComments.length)];
    dialogueTextEl.innerText = randomComment;
    
    continueIndicatorEl.classList.remove('hidden');
    isWaitingForContinue = true;
}

// Avança quando clica na caixa de diálogo
dialogueBoxEl.addEventListener('click', () => {
    if (isWaitingForContinue) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            // Garante que a barra chegue a 100% no final
            progressBarEl.style.width = '100%';
            showResult();
        }
    }
});

function showResult() {
    quizScreen.classList.add('hidden');
    hillCharacter.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const finalProfile = calculateWinner();
    resultProfileEl.innerText = finalProfile;
    resultDescriptionEl.innerText = profileDescriptions[finalProfile] || 'Descrição não encontrada.';
}

function calculateWinner() {
    // Renomeia 'Juiz' para 'Juiz de Ferro' para consistência
    scores['Juiz de Ferro'] = scores['Juiz'];
    delete scores['Juiz'];

    const maxScore = Math.max(...Object.values(scores));
    const winners = Object.keys(scores).filter(profile => scores[profile] === maxScore);

    if (winners.length === 1) {
        return winners[0];
    } else {
        // Lógica de desempate: a última pergunta decide
        for(const profile of lastAnswerProfiles) {
            const fullProfileName = profile === 'Juiz' ? 'Juiz de Ferro' : profile;
            if (winners.includes(fullProfileName)) {
                return fullProfileName; // Retorna o primeiro perfil empatado que pontuou na última questão
            }
        }
        return winners[0]; // Fallback: se nenhum dos perfis que pontuaram na última questão estiver no empate, retorna o primeiro da lista.
    }
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);