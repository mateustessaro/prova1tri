const quizzes = {
  geografia: [
    { question: "Qual é a capital do Brasil?", options: ["A) Brasília", "B) Rio de Janeiro", "C) São Paulo", "D) Belo Horizonte"], answer: "A" },
    { question: "Qual é o maior país do mundo?", options: ["A) China", "B) Estados Unidos", "C) Canadá", "D) Rússia"], answer: "D" },
    { question: "Qual é o país mais populoso do mundo?", options: ["A) China", "B) Índia", "C) Estados Unidos", "D) Brasil"], answer: "A" },
    { question: "Qual é o rio mais extenso do mundo?", options: ["A) Nilo", "B) Amazonas", "C) Yangtzé", "D) Mississipi"], answer: "B" },
    { question: "Qual é o maior deserto do mundo?", options: ["A) Deserto do Saara", "B) Deserto do Atacama", "C) Deserto da Arábia", "D) Deserto da Patagônia"], answer: "A" },
    { question: "Qual é o país com maior número de ilhas no mundo?", options: ["A) Indonésia", "B) Filipinas", "C) Japão", "D) Grécia"], answer: "A" },
    { question: "Qual é a montanha mais alta do mundo?", options: ["A) Everest", "B) K2", "C) Kangchenjunga", "D) Lhotse"], answer: "A" },
    { question: "Qual é o maior oceano do mundo?", options: ["A) Pacífico", "B) Atlântico", "C) Índico", "D) Antártico"], answer: "A" }
  ],
  historia: [
    { question: "Quem descobriu o Brasil?", options: ["A) Cristóvão Colombo", "B) Pedro Álvares Cabral", "C) Fernão de Magalhães", "D) Vasco da Gama"], answer: "B" },
    { question: "Em que ano ocorreu a Revolução Francesa?", options: ["A) 1789", "B) 1832", "C) 1815", "D) 1756"], answer: "A" },
    { question: "Qual imperador romano incendiou Roma?", options: ["A) Júlio César", "B) Nero", "C) Augusto", "D) Trajano"], answer: "B" },
    { question: "Quem foi o primeiro presidente do Brasil?", options: ["A) Deodoro da Fonseca", "B) Getúlio Vargas", "C) José Sarney", "D) Jânio Quadros"], answer: "A" },
    { question: "Qual foi o primeiro país a adotar o cristianismo como religião oficial?", options: ["A) Roma", "B) Grécia", "C) Egito", "D) Armênia"], answer: "D" },
    { question: "Qual foi o último imperador do Brasil?", options: ["A) Dom Pedro II", "B) Dom Pedro I", "C) Dom João VI", "D) Dom Miguel I"], answer: "A" },
    { question: "Em que ano começou a Primeira Guerra Mundial?", options: ["A) 1914", "B) 1918", "C) 1939", "D) 1945"], answer: "A" },
    { question: "Quem foi o líder da Revolução Cubana?", options: ["A) Fidel Castro", "B) Che Guevara", "C) Fulgêncio Batista", "D) Raúl Castro"], answer: "A" }
  ],
  ciencias: [
    { question: "Qual é o elemento mais abundante na crosta terrestre?", options: ["A) Oxigênio", "B) Carbono", "C) Silício", "D) Ferro"], answer: "A" },
    { question: "Qual é a unidade básica da vida?", options: ["A) Célula", "B) Átomo", "C) Molécula", "D) DNA"], answer: "A" },
    { question: "Qual é o nome da teoria que explica a origem das espécies?", options: ["A) Teoria da Evolução", "B) Teoria do Big Bang", "C) Teoria do Criacionismo", "D) Teoria da Relatividade"], answer: "A" },
    { question: "Qual é o planeta mais próximo do Sol?", options: ["A) Mercúrio", "B) Vênus", "C) Terra", "D) Marte"], answer: "A" },
    { question: "Qual é a parte do corpo humano responsável pelo bombeamento do sangue?", options: ["A) Coração", "B) Fígado", "C) Pâncreas", "D) Rim"], answer: "A" },
    { question: "Qual é o maior osso do corpo humano?", options: ["A) Fêmur", "B) Tíbia", "C) Fíbula", "D) Úmero"], answer: "A" },
    { question: "Qual é o ácido presente no limão?", options: ["A) Ácido Clorídrico", "B) Ácido Sulfúrico", "C) Ácido Cítrico", "D) Ácido Acético"], answer: "C" },
    { question: "Qual é a velocidade da luz no vácuo?", options: ["A) Aproximadamente 300.000 km/s", "B) Aproximadamente 150.000 km/s", "C) Aproximadamente 600.000 km/s", "D) Aproximadamente 1.000.000 km/s"], answer: "A" }
  ]
};

let currentCategory = '';
let currentQuestion = 0;
let correctAnswers = 0;

function loadCategory(category) {
  currentCategory = category;
  currentQuestion = 0;
  correctAnswers = 0;
  displayQuestion();
}

function displayQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";
  const quiz = quizzes[currentCategory][currentQuestion];
  const quizCard = document.createElement("div");
  quizCard.classList.add("quiz-card");
  const options = quiz.options.map(option => `
    <label>
      <input type="radio" name="answer" value="${option.split(')')[0]}">
      ${option}
    </label>
 

  `).join('');
  quizCard.innerHTML = `
    <h3>${quiz.question}</h3>
    <div class="options">${options}</div>
    <button onclick="checkAnswer('${quiz.answer}')">Verificar</button>
    <button onclick="nextQuestion()" id="next-btn" style="display: none;">Próxima Pergunta</button>
    <p id="feedback"></p>
    <button onclick="goToMainPage()" id="main-page-btn" class="hidden">Voltar para a Página Principal</button>
  `;
  quizContainer.appendChild(quizCard);
}

function checkAnswer(correctAnswer) {
  const userAnswer = document.querySelector("input[name='answer']:checked");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const mainPageBtn = document.getElementById("main-page-btn");

  if (userAnswer && userAnswer.value === correctAnswer) {
    feedback.textContent = "Você acertou!";
    feedback.style.color = "green";
    correctAnswers++;
  } else {
    feedback.textContent = "Está incorreto.";
    feedback.style.color = "red";
  }
  nextBtn.style.display = "block";
  mainPageBtn.style.display = "block";
}

function nextQuestion() {
  const nextBtn = document.getElementById("next-btn");
  const feedback = document.getElementById("feedback");
  const mainPageBtn = document.getElementById("main-page-btn");
  
  nextBtn.style.display = "none";
  feedback.textContent = "";
  mainPageBtn.style.display = "none";
  currentQuestion++;
  if (currentQuestion < quizzes[currentCategory].length) {
    displayQuestion();
  } else {
    feedback.textContent = `Quiz finalizado! Você acertou ${correctAnswers} de ${quizzes[currentCategory].length} questões.`;
    feedback.style.color = "blue";
    mainPageBtn.style.display = "block";
  }
}

function goToMainPage() {
  window.location.reload(); // Recarrega a página principal
}
