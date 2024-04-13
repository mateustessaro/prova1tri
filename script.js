// Armazenamento temporário dos quizzes por categoria
const quizzes = {
  matematica: [
    { question: "Qual é a fórmula do cálculo da área de um retângulo?", options: ["A) Largura x Altura", "B) Comprimento x Largura", "C) Largura + Altura", "D) Comprimento + Altura"], answer: "A" },
    { question: "Quanto é 2 + 2?", options: ["A) 3", "B) 4", "C) 5", "D) 6"], answer: "B" }
    // Adicione mais perguntas aqui
  ],
  biologia: [
    { question: "Qual é o processo de transformação de energia solar em energia química?", options: ["A) Fotossíntese", "B) Respiração Celular", "C) Mitose", "D) Meiose"], answer: "A" },
    { question: "Qual é o nome do órgão responsável pela produção de insulina no corpo humano?", options: ["A) Pâncreas", "B) Fígado", "C) Rim", "D) Estômago"], answer: "A" }
    // Adicione mais perguntas aqui
  ],
  historia: [
    { question: "Em que ano ocorreu a Independência do Brasil?", options: ["A) 1808", "B) 1822", "C) 1889", "D) 1900"], answer: "B" },
    { question: "Quem foi o primeiro presidente do Brasil?", options: ["A) Deodoro da Fonseca", "B) Getúlio Vargas", "C) José Sarney", "D) Jânio Quadros"], answer: "A" }
    // Adicione mais perguntas aqui
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

  // Adiciona o botão "Resoluções Gerais"
  const showSolutionsButton = document.createElement("button");
  showSolutionsButton.textContent = "Resoluções Gerais";
  showSolutionsButton.onclick = showGeneralSolutions;
  quizContainer.appendChild(showSolutionsButton);

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

// Função para mostrar as resoluções gerais
function showGeneralSolutions() {
  // Implemente a lógica para exibir as resoluções gerais aqui
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

// Código para criar e adicionar o botão para mostrar as resoluções gerais
function addShowSolutionsButton() {
  const showSolutionsButton = document.createElement("button");
  showSolutionsButton.textContent = "Resoluções Gerais";
  showSolutionsButton.onclick = showGeneralSolutions;
  return showSolutionsButton;
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

// Código para criar e adicionar o botão para mostrar as resoluções gerais
const buttonContainer = document.getElementById("button-container");
const showSolutionsButton = document.createElement("button");
showSolutionsButton.textContent = "Mostrar Resoluções Gerais";
showSolutionsButton.onclick = showGeneralSolutions;
buttonContainer.appendChild(showSolutionsButton);
