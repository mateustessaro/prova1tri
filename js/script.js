// Armazenamento temporário dos quizzes por categoria
const quizzes = {
  matematica: [
    { question: "Enem (2022) Ao escutar à notícia de que um filme recém-lançado arrecadou, no primeiro mês de lançamento, R$ 1,35 bilhão em bilheteria, um estudante escreveu corretamente o número que representa essa quantia, com todos os seus algarismos.O número escrito pelo estudante foi", options: ["A) 1 350 000 000,00", "B) 1 350 000,00", "C) 13 500 000,00", "D) 135 000 000,00"], answer: "A" },
    { question: "Uma montadora de automóveis divulgou que oferta a seus clientes mais de 1 000 configurações diferentes de carro, variando o modelo, a motorização, os opcionais e a cor do veículo. Atualmente, ela oferece 7 modelos de carros com 2 tipos de motores: 1.0 e 1.6. Já em relação aos opcionais, existem 3 escolhas possíveis: central multimídia, rodas de liga leve e bancos de couro, podendo o cliente optar por incluir um, dois, três ou nenhum dos opcionais disponíveis.Para ser fiel à divulgação feita, a quantidade mínima de cores que a montadora deverá disponibilizar a seus clientes é", options: ["A) 8", "B) 9", "C) 11", "D) 18"], answer: "B" },
    { question: "(Enem 2020). Nos livros Harry Potter, um anagrama do nome do personagem “TOM MARVOLO RIDDLE” gerou a frase “I AM LORD VOLDEMORT”.Suponha que Harry quisesse formar todos os anagramas da frase “I AM POTTER”, de tal forma que as vogais e consoantes aparecessem sempre intercaladas, e sem considerar o espaçamento entre as letras.Nessas condições, o número de anagramas formados é dado por", options: ["A) 9!", "B) 4! 5!", "C) 2 x 4! 5!", "D) 4! 5! /2"], answer: "D" },
    { question: "(Enem/2019) Em um determinado ano, os computadores da receita federal de um país identificaram como inconsistentes 20% das declarações de imposto de renda que lhe foram encaminhadas. Uma declaração é classificada como inconsistente quando apresenta algum tipo de erro ou conflito nas informações prestadas. Essas declarações consideradas inconsistentes foram analisadas pelos auditores, que constataram que 25% delas eram fraudulentas. Constatou-se ainda que, dentre as declarações que não apresentaram inconsistências, 6,25% eram fraudulentas. Qual é a probabilidade de, nesse ano, a declaração de um contribuinte ser considerada inconsistente, dado que ela era fraudulenta?", options: ["A) 0,0500", "B) 0,1000", "C) 0,1125", "D) 0,5000"], answer: "D" },
    { question: "(Enem/2018) Uma empresa de comunicação tem a tarefa de elaborar um material publicitário de um estaleiro para divulgar um novo navio, equipado com um guindaste de 15 m de altura e uma esteira de 90 m de comprimento. No desenho desse navio, a representação do guindaste deve ter sua altura entre 0,5 cm e 1 cm, enquanto a esteira deve apresentar comprimento superior a 4 cm. Todo o desenho deverá ser feito em uma escala 1 : X. Os valores possíveis para X são, apenas,", options: [" A) X > 1 500", "B) X < 3 000", "C) 1 500 < X < 2 250", "D) 1 500 < X < 3 000"], answer: "C" },
    { question: "(Enem/2018) Os tipos de prata normalmente vendidos são 975, 950 e 925. Essa classificação é feita de acordo com a sua pureza. Por exemplo, a prata 975 é a substância constituída de 975 partes de prata pura e 25 partes de cobre em 1 000 partes da substância. Já a prata 950 é constituída de 950 partes de prata pura e 50 de cobre em 1 000; e a prata 925 é constituída de 925 partes de prata pura e 75 partes de cobre em 1 000. Um ourives possui 10 gramas de prata 925 e deseja obter 40 gramas de prata 950 para produção de uma joia. Nessas condições, quantos gramas de prata e de cobre, respectivamente, devem ser fundidos com os 10 gramas de prata 925?", options: ["A) 29,25 e 0,75", "B) 28,75 e 1,25", "C) 28,50 e 1,50", "D) 27,75 e 2,25"], answer: "B" },
    { question: "(Enem/2017) Uma empresa especializada em conservação de piscinas utiliza um produto para tratamento da água cujas especificações técnicas sugerem que seja adicionado 1,5 mL desse produto para cada 1 000 L de água da piscina. Essa empresa foi contratada para cuidar de uma piscina de base retangular, de profundidade constante igual a 1,7 m, com largura e comprimento iguais a 3 m e 5 m, respectivamente. O nível da lâmina d’água dessa piscina é mantido a 50 cm da borda da piscina. A quantidade desse produto, em mililitro, que deve ser adicionada a essa piscina de modo a atender às suas especificações técnicas é", options: ["A) 11,25", "B) 27,00", "C) 28,80", "D) 32,25"], answer: "B" },
    { question: "Quantas soluções inteiras a inequação x² + x - 20 ≤ 0 admite?", options: ["A) 2", "B) 3", "C)  7", "D) 10"], answer: "D" },
    { question: "Em uma turma de Ciências da Computação formada de 40 rapazes e 40 moças, tem-se a seguinte estatística:20% dos rapazes são fumantes;30% das moças são fumantes.Logo, a porcentagem dos que não fumam na turma é de:", options: ["A) 25%", "B) 50%", "C) 60%", "D) 75%"], answer: "A" },
    { question: "João recebeu um aumento de 10% e com isso seu salário chegou a R$1.320,00. O salário de João antes do aumento era igual a?", options: ["A) 1.188,00", "B) 1.200,00", "C) 1.220,00", "D) 1,310,00"], answer: "B" },
  ],
  biologia: [
    { question: "No ciclo da água, o processo de evaporação da água de reservatórios, oceanos e do solo, sua condensação na atmosfera e a precipitação de volta ao solo constituem, respectivamente, os processos de:", options: ["A) Transpiração, evaporação e infiltração.", "B)  Precipitação, condensação e transpiração.", "C) Infiltração, precipitação e evaporação.", "D) Evaporação, transpiração e precipitação."], answer: "D" },
    { question: "O uso intenso de técnicas de produção agrícola, tais como monocultura, irrigação e uso intensivo de agrotóxicos, pode causar impactos ambientais diversos. No que diz respeito ao uso de agrotóxicos, um impacto ambiental associado é:", options: ["A) A redução da compactação do solo.", "B) O aumento da biodiversidade.", "C) A polinização das plantas cultivadas.", "D) A contaminação dos corpos d'água e dos solos."], answer: "D" },
    { question: "Uma forma de aproveitamento de resíduos orgânicos na agricultura é a compostagem, processo que:", options: ["A) Separa o lixo reciclável.", "B) Transforma os resíduos orgânicos em gás metano.", "C) Transforma resíduos orgânicos em adubo.", "D)  Permite a produção de alimento por meio de fungos."], answer: "C" },
    { question: "Em determinadas situações, a pressão exercida pelo homem sobre o ambiente pode levar ao desaparecimento de populações de seres vivos. Uma das espécies afetadas é a abelha, cujo desaparecimento pode ser consequência, entre outros fatores, da:", options: ["A) Ausência de nicho ecológico.", "B) Redução da diversidade genética.", "C) Disponibilidade de fontes de alimento.", "D) Aumento da população de predadores."], answer: "B" },
    { question: " O mosquito Aedes aegypti, vetor dos vírus da dengue, Zika e chikungunya, tem hábitos diurnos, alimenta-se de seiva de plantas e de sangue de vertebrados e deposita seus ovos em recipientes com água parada. Sua dispersão está relacionada principalmente à:", options: ["A) Ocorrência de chuvas intensas.", "B)  Capacidade de voar longas distâncias.", "C) Falta de predadores naturais.", "D) Migração sazonal de aves."], answer: "B" },
    { question: "O ferro é um elemento químico essencial para os seres vivos e é utilizado para várias funções metabólicas. A hemoglobina, proteína presente nos glóbulos vermelhos do sangue humano, tem a capacidade de se ligar reversivelmente a moléculas de oxigênio, formando a oxi-hemoglobina. Essa função é possível porque o ferro presente na hemoglobina:", options: ["A) Está presente no centro de um grupo heme.", "B) Permite a formação de pontes de hidrogênio com as moléculas de oxigênio.", "C) Está em estado de oxidação +3.", "D) Impede a formação de ligações covalentes com as moléculas de oxigênio."], answer: "A" },
    { question: "As transformações da paisagem pela atividade humana, como a derrubada de florestas para a construção de áreas urbanas, afetam a biodiversidade. A perda de habitats e a fragmentação de ecossistemas são fatores que podem levar à:", options: ["A) Redução do número de espécies exóticas.", "B) Aumento da polinização cruzada.", "C) Diversificação de nichos ecológicos.", "D) Diminuição da variabilidade genética."], answer: "D" },
    { question: " Nos últimos anos, têm sido cada vez mais frequentes as notícias sobre a descoberta de novas espécies de microrganismos que vivem em ambientes inóspitos, como as profundezas dos oceanos, e de novas técnicas de edição genética que podem ser utilizadas na correção de doenças genéticas humanas. Tais descobertas são exemplos da importância da:", options: ["A) Investigação científica e tecnológica.", "B) Divulgação de teorias científicas.", "C) Aplicação de métodos científicos.", "D) Popularização do conhecimento científico."], answer: "A" },
    { question: "A eutrofização é um fenômeno comum em corpos d'água superficiais que recebem grande quantidade de nutrientes, como o fósforo e o nitrogênio, provenientes principalmente do esgoto doméstico e dos fertilizantes agrícolas. Esse processo pode causar:", options: ["A) Aumento da concentração de oxigênio dissolvido na água.", "B) Diminuição do crescimento de algas.", "C) Diminuição da taxa de decomposição da matéria orgânica.", "D) Aumento da quantidade de organismos decompositores."], answer: "D" },
    { question: "Em muitas regiões do Brasil, a caatinga é um bioma de grande importância para a preservação da biodiversidade. Uma característica desse bioma é:", options: ["A) Presença de florestas densas e úmidas.", "B) Ocorrência de invernos rigorosos com neve.", "C) Vegetação adaptada a condições de estiagem e alta incidência solar.", "D) Baixa diversidade de espécies de animais e plantas."], answer: "C" },
  ],
  historia: [
    { question: "Durante o século XVII, a produção açucareira no Brasil Colonial esteve diretamente relacionada à exportação do açúcar para a Europa. Um dos principais elementos dessa relação foi:", options: ["A) O comércio de escravos africanos.", "B) A exploração do ouro.", "C) O monopólio da produção de café.", "D) A atividade extrativista do pau-brasil."], answer: "A" },
    { question: "O Renascimento Cultural, ocorrido na Europa entre os séculos XIV e XVI, foi marcado por uma série de transformações nas artes, ciências e na forma de pensar. Uma das principais características desse período foi:", options: ["A) A valorização da cultura indígena americana.", "B) O retorno aos ideais da Idade Média.", "C) A ênfase no teocentrismo.", "D) O humanismo e a valorização do ser humano."], answer: "D" },
    { question: " A Revolução Industrial, iniciada na Inglaterra no século XVIII, transformou profundamente as estruturas econômicas e sociais da época. Uma das principais consequências desse processo foi:", options: ["A) O aumento do poder da nobreza feudal.", "B) A redução da produção de mercadorias.", "C) A concentração de trabalhadores em áreas urbanas.", "D) O fortalecimento do sistema feudal."], answer: "C" },
    { question: "O Congresso de Viena, realizado em 1815, teve como principal objetivo:", options: ["A) Consolidar as independências das colônias latino-americanas.", "B) Restaurar o absolutismo monárquico na Europa após as guerras napoleônicas.", "C)  Dividir a África entre as potências europeias.", "D) Promover a independência das nações balcânicas."], answer: "B" },
    { question: "A Guerra Fria, que marcou as relações internacionais no século XX, foi caracterizada principalmente por:", options: ["A) Conflitos armados entre Estados Unidos e União Soviética.", "B)  A formação de alianças militares entre países capitalistas e comunistas.", "C) O domínio absoluto da União Soviética sobre os países do Leste Europeu.", "D) A disputa ideológica e geopolítica entre Estados Unidos e União Soviética."], answer: "D" },
    { question: "A Revolução Francesa, ocorrida no final do século XVIII, teve como um de seus principais slogans:", options: ["A) Paz e amor entre os povos", "B) Pão, terra e liberdade", "C)  Liberdade, igualdade e fraternidade", "D) Deus, pátria e família"], answer: "C" },
    { question: "O Tratado de Versalhes, assinado em 1919, após o término da Primeira Guerra Mundial, impôs uma série de punições à Alemanha, dentre as quais destacam-se:", options: ["A) A devolução do território da Alsácia-Lorena à França.", "B) A manutenção da unidade territorial da Alemanha.", "C)  A redução das Forças Armadas alemãs.", "D) O reconhecimento da Alemanha como potência vencedora do conflito."], answer: "C" },
    { question: "Durante a Primeira Guerra Mundial, ocorrida entre 1914 e 1918, um evento que desencadeou o conflito foi:", options: ["A) O ataque japonês a Pearl Harbor.", "B) O assassinato do arquiduque Francisco Ferdinando, herdeiro do trono austro-húngaro.", "C)  O Tratado de Versalhes.", "D) A Revolução Russa."], answer: "B" },
    { question: "A conquista da América pelos europeus nos séculos XV e XVI resultou na exploração dos recursos naturais e humanos do continente. Um dos principais fatores que possibilitaram essa conquista foi:", options: ["A) O enfraquecimento dos povos indígenas devido às guerras internas.", "B) O domínio militar dos europeus sobre as civilizações americanas.", "C) A superioridade tecnológica e bélica dos europeus.", "D) A capacidade de assimilação cultural dos indígenas."], answer: "C" },
    { question: "O Movimento de Independência do Brasil, ocorrido em 1822, teve como principal líder:", options: ["A) Dom Pedro II.", "B) José Bonifácio.", "C)  Tiradentes.", "D) Dom João VI."], answer: "B" },
  ],
  geografia: [
    {question:  "(Enem/2018) Os países industriais adotaram uma concepção diferente das relações familiares e do lugar da fecundidade na vida familiar e social. A preocupação de garantir uma transmissão integral das vantagens econômicas e sociais adquiridas tem como resultado uma ação voluntária de limitação do número de nascimentos. Em meados do século XX, o fenômeno social descrito contribuiu para o processo europeu de: ", options: ["A) estabilização da pirâmide etária.", "B) conclusão da transição demográfica.", "C)  contenção da entrada de imigrantes.", "D) elevação do crescimento vegetativo."], answer: "B" },
    { question: "(Enem/2017) O desgaste acelerado sempre existirá se o agricultor não tiver o devido cuidado de combater as causas, relacionadas a vários processos, tais como: empobrecimento químico e lixiviação provocados pelo esgotamento causado pelas colheitas e pela lavagem vertical de nutrientes da água que se infiltra no solo, bem como pela retirada de elementos nutritivos com as colheitas. Os nutrientes retirados, quando não repostos, são comumente substituídos por elementos tóxicos, como, por exemplo, o alumínio. A dinâmica ambiental exemplificada no texto gera a seguinte consequência para o solo agricultável", options: ["A) Elevação da acidez.", "B) Ampliação da salinidade.", "C)  Formação de voçorocas.", "D) Remoção da camada superior."], answer: "A" },
    { question: "(Enem/2017) Os maiores consumidores da infraestrutura logística para exportação no Brasil são os produtos a granel, dentre os quais se destacam o minério de ferro, petróleo e seus derivados e a soja, que, por possuírem baixo valor agregado, e por serem movimentados em grande volume, necessitam de uma estrutura de grande porte e baixos custos. No caso da soja, a infraestrutura deixa muito a desejar, resultando em enormes filas de navios, caminhões e trens, que, por ficarem grande parte do tempo ocioso nas filas, têm seu custo majorado, onerando fortemente o exportador, afetando sua margem de lucro e ameaçando nossa competitividade internacional.", options: ["A) isenção de impostos de transportes.", "B) diversificação dos parceiros comerciais. ", "C) contratação de trabalhadores portuários.", "D) construção de terminais atracadouros."], answer: "D" },
    { question: "(Enem/2017) O terremoto de 8,8 na escala Richter que atingiu a costa oeste do Chile, em fevereiro, provocou mudanças significativas no mapa da região. Segundo uma análise preliminar, toda a cidade de Concepción se deslocou pelo menos 3 metros para oeste. Buenos Aires moveu-se cerca de 2,5 centímetros para oeste, enquanto Santiago, mais próxima do local do evento, deslocou-se quase 30 centímetros para o oeste-sudoeste. As cidades de Valparaíso, no Chile, e Mendoza, na Argentina, também tiveram suas posições alteradas significativamente (13,4 centímetros e 8,8 centímetros, respectivamente). No texto, destaca-se um tipo de evento geológico frequente em determinadas partes da superfície terrestre. Esses eventos estão concentrados em", options: ["A) áreas vulcânicas, onde o material magmático se eleva, formando cordilheiras.", "B) faixas costeiras, onde o assoalho oceânico recebe sedimentos, provocando tsunamis.", "C)  estreitas faixas de intensidade sísmica, no contato das placas tectônicas, próximas a dobramentos modernos.", "D) escudos cristalinos, onde as rochas são submetidas aos processos de intemperismo, com alterações bruscas de temperatura."], answer: "C" },
    { question: "(Enem/2016) Segundo a Conferência de Quioto, os países centrais industrializados, responsáveis históricos pela poluição, deveriam alcançar a meta de redução de 5,2% do total de emissões segundo níveis de 1990. O nó da questão é o enorme custo desse processo, demandando mudanças radicais nas indústrias para que se adaptem rapidamente aos limites de emissão estabelecidos e adotem tecnologias energéticas limpas. A comercialização internacional de créditos de sequestro ou de redução de gases causadores do efeito estufa foi a solução encontrada para reduzir o custo global do processo. Países ou empresas que conseguirem reduzir as emissões abaixo de suas metas poderão vender este crédito para outro país ou empresa que não consiga. As posições contrárias à estratégia de compensação presente no texto relacionam-se à ideia de que ela promove", options: ["A) retração nos atuais níveis de consumo.", "B) surgimento de conflito de caráter diplomático.", "C)  diminuição dos lucros na produção de energia.", "D) desigualdade na distribuição do impacto ecológico."], answer: "D" },
    { question: "(Enem/2015) Um carro esportivo e financiado pelo Japão, projetado na Itália e montado em Indiana, México e França, usando os mais avançados componentes eletrônicos, que foram inventados em Nova Jérsei e fabricados na Coreia. A campanha publicitária é desenvolvida na Inglaterra, filmada no Canadá, a edição e as cópias, feitas em Nova York para serem veiculadas no mundo todo. Teias globais disfarçam-se com o uniforme nacional que lhes for mais conveniente.", options: ["A) linhas de montagem e formação de estoques.", "B) organização em rede e tecnologia de informação.", "C)  empresas burocráticas e mão de obra barata.", "D) controle estatal e infraestrutura consolidada."], answer: "B" },
    { question: "(Enem/2015) O processo de concentração urbana no Brasil em determinados locais teve momentos de maior intensidade e, ao que tudo indica, atualmente passa por uma desaceleração no ritmo de crescimento populacional nos grandes centros urbanos. Uma causa para o processo socioespacial mencionado no texto é o(a)", options: ["A) realocação da atividade industrial.", "B) carência de matérias-primas.", "C)  degradação da rede rodoviária.", "D) aumento do crescimento vegetativo."], answer: "A" },
    { question: "(Enem/2019) Saudado por centenas de militantes de movimentos sociais de quarenta países, o papa Francisco encerrou no dia 09/07/2015 o 2º Encontro Mundial dos Movimentos Populares, em Santa Cruz de La Sierra, na Bolívia. Segundo ele, a “globalização da esperança, que nasce dos povos e cresce entre os pobres, deve substituir esta globalização da exclusão e da indiferença”. No texto há uma crítica ao seguinte aspecto do mundo globalizado:", options: ["A) Liberdade política.", "B) Mobilidade humana.", "C)  Conectividade cultural.", "D) Disparidade econômica."], answer: "D" },
    { question: "(Enem/2019) O bônus demográfico é caracterizado pelo período em que, por causa da redução do número de filhos por mulher, a estrutura populacional fica favorável ao crescimento econômico. Isso acontece porque há proporcionalmente menos crianças na população, e o percentual de idosos ainda não é alto. A ação estatal que contribui para o aproveitamento do bônus demográfico é o estímulo à", options: ["A) atração de imigrantes.", "B) elevação da carga tributária.", "C)  qualificação da mão de obra.", "D) admissão de exilados políticos."], answer: "C" },
    { question: "(Enem/2019) Os moradores de Utqiagvik passaram dois meses quase totalmente na escuridão Os habitantes desta pequena cidade no Alasca — o estado dos Estados Unidos mais ao norte — já estão acostumados a longas noites sem ver a luz do dia. Em 18 de novembro de 2018, seus pouco mais de 4 mil habitantes viram o último pôr do sol do ano. A oportunidade seguinte para ver a luz do dia ocorreu no dia 23 de janeiro de 2019, às 13 h 04 min (horário local). O fenômeno descrito está relacionado ao fato de a cidade citada ter uma posição geográfica condicionada pela", options: ["A) latitude.", "B) continentalidade.", "C)  maritimidade.", "D) longitude."], answer: "A" },
  ]
};

// Armazenamento temporário dos usuários registrados
const registeredUsers = {};

// Armazenamento temporário dos rankings de acertos por usuário e categoria
const userRankings = {};

// Função para carregar as perguntas de uma categoria
function loadCategory(category) {
  const categoryButtons = document.getElementById("category-buttons");
  const quizContainer = document.getElementById("quiz-container");
 

  // Esconde os botões de categoria e mostra o contêiner do quiz
  categoryButtons.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  

  // Limpa o conteúdo anterior do contêiner do quiz
  quizContainer.innerHTML = "";

  // Adiciona o botão "Voltar"
  const backButton = document.createElement("button");
  backButton.textContent = "VOLTAR";
  backButton.onclick = goToMainScreen;
  quizContainer.appendChild(backButton);

  // Carrega as perguntas da categoria selecionada
  const questions = quizzes[category];
  questions.forEach((question, index) => {
    const quizCard = document.createElement("div");
    quizCard.classList.add("quiz-card");
    quizCard.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>
      <div class="options">
        ${question.options.map(option => `<label><input type="radio" name="answer${index}" value="${option.split(')')[0]}">${option}</label>`).join('')}
      </div>
      <button onclick="checkAnswer('${category}', ${index}, '${question.answer}')">Verificar</button>
      <p id="feedback${index}"></p>
    `;
    quizContainer.appendChild(quizCard);
  });
}

// Função para voltar para a tela principal
function goToMainScreen() {
  document.getElementById("category-buttons").classList.remove("hidden");
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("ranking").classList.remove("hidden");
}

// Função de login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verifica se o usuário e a senha estão corretos
  if (registeredUsers[username] === password) {
    // Login bem-sucedido, mostra os botões de categoria
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("category-buttons").classList.remove("hidden");
    document.getElementById("ranking").classList.remove("hidden");
    document.getElementById("logout-btn").classList.remove("hidden");
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

// Função de registro
function register() {
  const newUsername = document.getElementById("new-username").value;
  const newPassword = document.getElementById("new-password").value;

  // Verifica se os campos de usuário e senha foram preenchidos
  if (newUsername && newPassword) {
    // Registra o novo usuário
    registeredUsers[newUsername] = newPassword;
    alert("Novo usuário cadastrado com sucesso!");
    // Limpa os campos do formulário de registro
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
    // Esconde o formulário de registro e mostra o formulário de login
    hideRegisterForm();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função para exibir o formulário de registro
function showRegisterForm() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
}

// Função para esconder o formulário de registro
function hideRegisterForm() {
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

// Função para verificar a resposta selecionada
function checkAnswer(category, questionIndex, correctAnswer) {
  const userAnswer = document.querySelector(`input[name="answer${questionIndex}"]:checked`);
  const feedback = document.getElementById(`feedback${questionIndex}`);
  const nextBtn = document.getElementById(`next-btn${questionIndex}`);

  if (userAnswer && userAnswer.value === correctAnswer) {
    feedback.textContent = "Você acertou!";
    feedback.style.color = "green";
    // Adiciona 1 ao número de acertos do usuário
    updateRankings(category, 1);
  } else {
    feedback.textContent = "Está incorreto.";
    feedback.style.color = "red";
    // Remove 1 ao número de acertos do usuário
    updateRankings(category, -1);
  }
  nextBtn.classList.remove("hidden");
}

// Função para passar para a próxima pergunta
function nextQuestion(nextIndex, totalQuestions) {
  const currentQuizCard = document.querySelector(`.quiz-card:nth-child(${nextIndex})`);
  const nextQuizCard = document.querySelector(`.quiz-card:nth-child(${nextIndex + 1})`);

  currentQuizCard.classList.add("hidden");
  if (nextQuizCard) {
    nextQuizCard.classList.remove("hidden");
  } else {
    // Se não houver mais perguntas, exibe a mensagem de quiz concluído
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<p>Quiz finalizado! Você concluiu todas as ${totalQuestions} perguntas.</p>`;
  }
}

// Função de logout
function logout() {
  document.getElementById("category-buttons").classList.add("hidden");
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("ranking").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("logout-btn").classList.add("hidden");
}

// Função para exibir as perguntas de uma categoria
function displayCategoryQuestions(category) {
  const quizContainer = document.getElementById("quiz-container");
  const questions = quizzes[category];

  questions.forEach((question, index) => {
    const quizCard = document.createElement("div");
    quizCard.classList.add("quiz-card");
    quizCard.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>
      <div class="options">
        ${question.options.map(option => `<label><input type="radio" name="answer${index}" value="${option.split(')')[0]}">${option}</label>`).join('')}
      </div>
      <button onclick="checkAnswer('${category}', ${index}, '${question.answer}')">Verificar</button>
      <p id="feedback${index}"></p>
    `;
    quizContainer.appendChild(quizCard);
  });

  const backButton = document.createElement("button");
  backButton.textContent = "Voltar";
  backButton.onclick = goToMainScreen;
  quizContainer.appendChild(backButton);

  const solutionsButton = addShowSolutionsButton();
  quizContainer.appendChild(solutionsButton);
}

// Função para carregar perguntas de uma categoria
function loadCategory(category) {
  const categoryButtons = document.getElementById("category-buttons");
  const quizContainer = document.getElementById("quiz-container");

  categoryButtons.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  quizContainer.innerHTML = "";

  displayCategoryQuestions(category);
}

// Função para exibir as perguntas de uma categoria
function displayCategoryQuestions(category) {
  const quizContainer = document.getElementById("quiz-container");
  const questions = quizzes[category];

  questions.forEach((question, index) => {
    const quizCard = document.createElement("div");
    quizCard.classList.add("quiz-card");
    quizCard.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>
      <div class="options">
        ${question.options.map(option => `<label><input type="radio" name="answer${index}" value="${option.split(')')[0]}">${option}</label>`).join('')}
      </div>
      <button onclick="checkAnswer('${category}', ${index}, '${question.answer}')">Verificar</button>
      <p id="feedback${index}"></p>
    `;
    quizContainer.appendChild(quizCard);
  });

  const backButton = document.createElement("button");
  backButton.textContent = "Voltar";
  backButton.onclick = goToMainScreen;
  quizContainer.appendChild(backButton);

  const solutionsButton = addShowSolutionsButton();
  quizContainer.appendChild(solutionsButton);
}

// Função para atualizar o ranking de acertos do usuário em todas as categorias
function updateRankings(category, score) {
  const username = document.getElementById("username").value;
  
  // Verifica se o usuário já existe no ranking global
  if (userRankings.hasOwnProperty(username)) {
    // Atualiza o número de acertos do usuário na categoria específica
    userRankings[username][category] += score;
    // Calcula o total de acertos do usuário em todas as categorias
    userRankings[username].totalScore += score;
  } else {
    // Se o usuário não existir no ranking global, cria uma nova entrada para ele
    userRankings[username] = { totalScore: score, matematica: 0, biologia: 0, historia: 0 };
    userRankings[username][category] = score;
  }

  // Atualiza o ranking na página
  displayRanking();
}

// Função para exibir o ranking na página
function displayRanking() {
  const rankingList = document.getElementById("ranking-list");
  rankingList.innerHTML = "";

  // Ordena os usuários por pontuação total
  const sortedUsers = Object.entries(userRankings).sort((a, b) => b[1].totalScore - a[1].totalScore);

  // Exibe os usuários ordenados por pontuação total
  sortedUsers.forEach(([username, scores]) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${username}: ${scores.totalScore}`;
    rankingList.appendChild(listItem);
  });
}
