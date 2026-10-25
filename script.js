
const STORAGE_KEY = "quizVerseData";
const QUIZ_DURATION = 150;

const categoryInfo = {
  web: {
    title: "Web Development",
    icon: "</>",
    description: "HTML, CSS & the modern web",
    color: "#56e0e7",
    glow: "#20d5e1",
    iconBg: "rgba(86,224,231,.12)",
    questions: [
      { q: "Which HTML element is used to create a hyperlink?", topic: "HTML BASICS", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1, explain: "The <a> element creates a hyperlink. Its href attribute contains the destination." },
      { q: "Which CSS property changes the text colour?", topic: "CSS", options: ["font-style", "text-decoration", "color", "background"], answer: 2, explain: "The color property sets the foreground colour of text." },
      { q: "Which tag is used to connect an external JavaScript file?", topic: "JAVASCRIPT", options: ["<js src=\"app.js\">", "<script src=\"app.js\">", "<javascript>", "<code src=\"app.js\">"], answer: 1, explain: "The script element with a src attribute loads an external JavaScript file." },
      { q: "What does responsive web design help a page do?", topic: "RESPONSIVE DESIGN", options: ["Run without HTML", "Adapt to different screen sizes", "Always use one fixed width", "Remove all images"], answer: 1, explain: "Responsive layouts adapt to different screen sizes and devices." },
      { q: "Which CSS layout system is designed for one-dimensional rows or columns?", topic: "CSS LAYOUT", options: ["Flexbox", "SQL", "DOM", "JSON"], answer: 0, explain: "Flexbox arranges items along a row or a column." },
      { q: "Which attribute provides alternative text for an image?", topic: "ACCESSIBILITY", options: ["title only", "src", "alt", "href"], answer: 2, explain: "The alt attribute provides a text alternative for an image." },
      { q: "What does DOM stand for?", topic: "JAVASCRIPT", options: ["Document Object Model", "Data Output Method", "Digital Ordinance Mode", "Document Orientation Map"], answer: 0, explain: "DOM stands for Document Object Model, the structured representation of a web document." },
      { q: "Which HTML element represents the main content of a page?", topic: "SEMANTIC HTML", options: ["<aside>", "<main>", "<footer>", "<meta>"], answer: 1, explain: "The main element identifies the dominant content of the document." },
      { q: "Which CSS unit is relative to the root element's font size?", topic: "CSS UNITS", options: ["px", "vh", "rem", "cm"], answer: 2, explain: "rem is relative to the root element's font size." },
      { q: "Which method selects an element by its ID in JavaScript?", topic: "DOM METHODS", options: ["getElementById()", "queryAllId()", "selectClass()", "findTagId()"], answer: 0, explain: "document.getElementById() returns the element with the specified ID." }
    ]
  },

  current: {
    title: "Current Affairs",
    icon: "◉",
    description: "Civics, world & India basics",
    color: "#ffd166",
    glow: "#f2a93b",
    iconBg: "rgba(255,209,102,.12)",
    questions: [
      { q: "Which organisation publishes the Human Development Report?", topic: "INTERNATIONAL ORGANISATIONS", options: ["World Bank only", "UNDP", "WHO", "UNESCO"], answer: 1, explain: "The United Nations Development Programme (UNDP) publishes the Human Development Report." },
      { q: "What is the currency of Japan?", topic: "WORLD KNOWLEDGE", options: ["Won", "Yuan", "Yen", "Ringgit"], answer: 2, explain: "Japan's currency is the Japanese yen." },
      { q: "Which body conducts elections to the Parliament of India?", topic: "INDIAN POLITY", options: ["Supreme Court", "Election Commission of India", "NITI Aayog", "Finance Commission"], answer: 1, explain: "The Election Commission of India administers elections to Parliament and other specified elections." },
      { q: "The headquarters of the United Nations is in which city?", topic: "WORLD ORGANISATIONS", options: ["Geneva", "Paris", "New York City", "Vienna"], answer: 2, explain: "The UN headquarters is located in New York City." },
      { q: "Which Indian institution is responsible for monetary policy and issuing banknotes, subject to legal provisions?", topic: "INDIAN ECONOMY", options: ["Reserve Bank of India", "SEBI", "NABARD only", "NITI Aayog"], answer: 0, explain: "The Reserve Bank of India is India's central bank and has key monetary-policy and currency-issuance functions." },
      { q: "What does GDP stand for?", topic: "ECONOMICS", options: ["General Development Plan", "Gross Domestic Product", "Global Demand Price", "Government Debt Policy"], answer: 1, explain: "GDP means Gross Domestic Product, the value of final goods and services produced within a country over a period." },
      { q: "Which day is observed as World Environment Day?", topic: "ENVIRONMENT", options: ["5 June", "22 April", "16 September", "11 July"], answer: 0, explain: "World Environment Day is observed annually on 5 June." },
      { q: "Which Indian mission successfully soft-landed near the Moon's south polar region in 2023?", topic: "SPACE", options: ["Mangalyaan", "Chandrayaan-1", "Chandrayaan-3", "Aditya-L1"], answer: 2, explain: "Chandrayaan-3 achieved a successful lunar soft landing in August 2023." },
      { q: "Which is the lower house of India's Parliament?", topic: "INDIAN POLITY", options: ["Rajya Sabha", "Lok Sabha", "Legislative Council", "Gram Sabha"], answer: 1, explain: "The Lok Sabha is the House of the People and the lower house of Parliament." },
      { q: "Which global agreement focuses on limiting global warming and climate change?", topic: "CLIMATE", options: ["Paris Agreement", "Geneva Convention only", "Montreal Protocol only", "Antarctic Treaty only"], answer: 0, explain: "The Paris Agreement is a global climate treaty adopted in 2015." }
    ]
  },

  programming: {
    title: "Programming",
    icon: "{ }",
    description: "Logic, variables & algorithms",
    color: "#a78bfa",
    glow: "#8b5cf6",
    iconBg: "rgba(167,139,250,.13)",
    questions: [
      { q: "Which data type is commonly used for whole numbers in Java?", topic: "JAVA BASICS", options: ["int", "boolean", "char", "String"], answer: 0, explain: "In Java, int stores whole-number values within its range." },
      { q: "What is the purpose of a loop in programming?", topic: "CONTROL FLOW", options: ["Store a picture", "Repeat a block of instructions", "Style a web page", "Create a database automatically"], answer: 1, explain: "Loops repeat a block of code while a condition or iteration rule applies." },
      { q: "Which symbol commonly tests equality between two values in JavaScript?", topic: "OPERATORS", options: ["=", "== or ===", "=>", "!="], answer: 1, explain: "== tests equality with type conversion; === tests strict equality without type conversion." },
      { q: "What is an algorithm?", topic: "ALGORITHMS", options: ["A step-by-step method to solve a problem", "A type of monitor", "A programming language only", "A storage cable"], answer: 0, explain: "An algorithm is a finite sequence of steps for solving a problem or performing a task." },
      { q: "Which structure stores data as key-value pairs in JavaScript?", topic: "DATA STRUCTURES", options: ["Array only", "Object", "String", "Boolean"], answer: 1, explain: "A JavaScript object stores properties as key-value pairs." },
      { q: "What does a function help you do?", topic: "FUNCTIONS", options: ["Reuse a named block of code", "Increase screen brightness", "Replace the operating system", "Guarantee no errors"], answer: 0, explain: "Functions package reusable instructions and can accept inputs and return outputs." },
      { q: "What is the first index of a JavaScript array?", topic: "ARRAYS", options: ["1", "-1", "0", "Depends on array length"], answer: 2, explain: "JavaScript arrays are zero-indexed, so the first item is at index 0." },
      { q: "Which Java keyword creates a subclass relationship?", topic: "OBJECT-ORIENTED PROGRAMMING", options: ["implements", "extends", "inherits", "superclass"], answer: 1, explain: "In Java, extends declares that a class inherits from another class." },
      { q: "What is debugging?", topic: "SOFTWARE DEVELOPMENT", options: ["Finding and fixing defects in code", "Deleting all variables", "Designing a logo", "Converting code into a database"], answer: 0, explain: "Debugging is the process of identifying, investigating and correcting software defects." },
      { q: "Which flowchart shape usually represents a decision?", topic: "ALGORITHMS", options: ["Oval", "Rectangle", "Diamond", "Parallelogram only"], answer: 2, explain: "A diamond is commonly used for a decision or branching condition in a flowchart." }
    ]
  },

  data: {
    title: "Data Science",
    icon: "▥",
    description: "Data, statistics & analytics",
    color: "#50d6a2",
    glow: "#10b981",
    iconBg: "rgba(80,214,162,.12)",
    questions: [
      { q: "What is the mean of 2, 4 and 6?", topic: "DESCRIPTIVE STATISTICS", options: ["3", "4", "5", "6"], answer: 1, explain: "Mean = (2 + 4 + 6) ÷ 3 = 4." },
      { q: "Which chart is commonly useful for comparing categories?", topic: "DATA VISUALISATION", options: ["Bar chart", "Network cable diagram", "Flowchart only", "Code editor"], answer: 0, explain: "Bar charts compare values across distinct categories." },
      { q: "What does CSV commonly stand for?", topic: "DATA FORMATS", options: ["Computer System Value", "Comma-Separated Values", "Central Statistical Variable", "Column Style View"], answer: 1, explain: "CSV means Comma-Separated Values, a plain-text tabular data format." },
      { q: "Which measure is the middle value after sorting observations?", topic: "DESCRIPTIVE STATISTICS", options: ["Mean", "Range", "Median", "Variance"], answer: 2, explain: "The median is the middle observation in ordered data, or the average of the two middle values for an even count." },
      { q: "In a dataset, what is a row commonly called in a table of observations?", topic: "DATA STRUCTURES", options: ["Record or observation", "Font", "Function", "Colour palette"], answer: 0, explain: "A row commonly represents one record or observation, with columns describing its variables." },
      { q: "What is the main purpose of data cleaning?", topic: "DATA PREPARATION", options: ["Introduce more errors", "Improve data quality and consistency", "Always remove every row", "Change all numbers to text"], answer: 1, explain: "Data cleaning addresses missing, invalid, inconsistent or duplicate data to improve quality." },
      { q: "Which Python library is widely used for tabular data analysis?", topic: "PYTHON TOOLS", options: ["Pandas", "Turtle only", "Pygame only", "Tkinter only"], answer: 0, explain: "Pandas provides data structures and tools for working with tabular data." },
      { q: "What does correlation describe?", topic: "STATISTICS", options: ["A relationship between variables", "Proof that one variable causes another", "The largest value only", "The number of columns"], answer: 0, explain: "Correlation measures association between variables; by itself, it does not prove causation." },
      { q: "In machine learning, what is a training dataset used for?", topic: "MACHINE LEARNING", options: ["Fitting a model's parameters", "Displaying only the final certificate", "Replacing all test data", "Choosing a font"], answer: 0, explain: "Training data is used by a learning algorithm to fit model parameters." },
      { q: "Which SQL command retrieves data from a database table?", topic: "DATABASES", options: ["SELECT", "PAINT", "DRAW", "STYLE"], answer: 0, explain: "SELECT queries data from one or more database tables or other queryable sources." }
    ]
  },

  english: {
    title: "English",
    icon: "Aa",
    description: "Grammar, vocabulary & usage",
    color: "#ff91b5",
    glow: "#f472b6",
    iconBg: "rgba(255,145,181,.12)",
    questions: [
      { q: "Choose the grammatically correct sentence.", topic: "GRAMMAR", options: ["She go to college daily.", "She goes to college daily.", "She going to college daily.", "She gone to college daily."], answer: 1, explain: "With the third-person singular subject 'she' in the simple present, the verb is 'goes'." },
      { q: "Choose the synonym of 'rapid'.", topic: "VOCABULARY", options: ["Slow", "Quick", "Weak", "Quiet"], answer: 1, explain: "Rapid means happening or moving quickly." },
      { q: "Choose the correct plural form of 'child'.", topic: "NOUNS", options: ["Childs", "Childes", "Children", "Childrens"], answer: 2, explain: "The standard plural of child is children." },
      { q: "Fill in the blank: They have lived here ___ 2020.", topic: "PREPOSITIONS", options: ["for", "since", "during", "by"], answer: 1, explain: "Since is used with a starting point in time, such as 2020." },
      { q: "Choose the antonym of 'generous'.", topic: "VOCABULARY", options: ["Kind", "Giving", "Selfish", "Helpful"], answer: 2, explain: "Selfish is an antonym of generous because it describes prioritising oneself rather than giving freely." },
      { q: "Which word is an adjective in the sentence 'The bright star shone'?", topic: "PARTS OF SPEECH", options: ["The", "bright", "star", "shone"], answer: 1, explain: "Bright describes the noun star, so it functions as an adjective." },
      { q: "Choose the correct article: She ate ___ apple.", topic: "ARTICLES", options: ["a", "an", "the only", "no article is possible"], answer: 1, explain: "An is used before a vowel sound; apple begins with a vowel sound." },
      { q: "What is the past tense of 'write'?", topic: "VERBS", options: ["Writed", "Written", "Wrote", "Writing"], answer: 2, explain: "The simple past tense of write is wrote; written is the past participle." },
      { q: "Choose the correctly punctuated sentence.", topic: "PUNCTUATION", options: ["Where are you going.", "Where are you going?", "Where are you going,", "Where are you going!?"], answer: 1, explain: "A direct question normally ends with a question mark." },
      { q: "Choose the correct word: The students submitted ___ assignments.", topic: "PRONOUNS", options: ["their", "there", "they're", "them"], answer: 0, explain: "Their is the possessive determiner showing that the assignments belong to the students." }
    ]
  }
};

const categoryOrder = ["web", "current", "programming", "data", "english"];

const categoryGrid = document.getElementById("category-grid");
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

let currentCategory = null;
let quizQuestions = [];
let answers = [];
let currentIndex = 0;
let timeLeft = QUIZ_DURATION;
let timerInterval = null;
let quizActive = false;
let quizFinished = false;
let latestResult = null;

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    return saved && typeof saved === "object"
      ? {
          completed: Number(saved.completed) || 0,
          xp: Number(saved.xp) || 0,
          categories: saved.categories || {}
        }
      : { completed: 0, xp: 0, categories: {} };
  } catch {
    return { completed: 0, xp: 0, categories: {} };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Progress could not be saved in this browser.", error);
  }
}

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function showScreen(screen) {
  [homeScreen, quizScreen, resultScreen].forEach(item => {
    item.classList.add("hidden");
  });

  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  const progress = readProgress();

  document.getElementById("stat-completed").textContent = progress.completed;
  document.getElementById("stat-xp").innerHTML = `${progress.xp} <i>XP</i>`;

  const bestScores = categoryOrder
    .map(key => progress.categories[key]?.bestPercent)
    .filter(value => Number.isFinite(value));

  document.getElementById("stat-best").textContent =
    bestScores.length ? `${Math.max(...bestScores)}%` : "—";

  document.getElementById("category-count").textContent =
    `${categoryOrder.length.toString().padStart(2, "0")} TOPICS`;

  categoryGrid.innerHTML = categoryOrder.map(key => {
    const category = categoryInfo[key];
    const saved = progress.categories[key];

    return `
      <button class="category-card" type="button"
        data-category="${key}"
        style="--card-glow:${category.glow};--icon-bg:${category.iconBg};--icon-color:${category.color}">
        <div class="category-top">
          <span class="category-icon">${category.icon}</span>
          <span class="card-arrow">↗</span>
        </div>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <div class="category-bottom">
          <span>10 QUESTIONS · 2 MIN 30 SEC</span>
          <span class="mini-best">${saved ? `BEST ${saved.bestPercent}%` : "NOT STARTED"}</span>
        </div>
      </button>`;
  }).join("");

  categoryGrid.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => startQuiz(button.dataset.category));
  });

  renderDashboard(progress);
}

function renderDashboard(progress = readProgress()) {
  const dashboard = document.getElementById("dashboard");

  dashboard.innerHTML = categoryOrder.map(key => {
    const category = categoryInfo[key];
    const saved = progress.categories[key];
    const best = saved ? saved.bestPercent : 0;

    return `
      <div class="dashboard-item">
        <span>${category.title}</span>
        <strong>${saved ? `${best}%` : "—"}</strong>
        <div class="tiny-progress">
          <div style="width:${best}%"></div>
        </div>
        <span style="margin-top:8px">
          ${saved ? `${saved.attempts || 0} attempt(s)` : "Complete a quiz to begin"}
        </span>
      </div>`;
  }).join("");
}

function startQuiz(categoryKey) {
  if (!categoryInfo[categoryKey]) return;

  currentCategory = categoryKey;
  quizQuestions = shuffleArray(categoryInfo[categoryKey].questions);
  answers = Array(quizQuestions.length).fill(null);
  currentIndex = 0;
  timeLeft = QUIZ_DURATION;
  quizActive = true;
  quizFinished = false;
  latestResult = null;

  document.getElementById("quiz-category-pill").textContent =
    categoryInfo[categoryKey].title.toUpperCase();

  document.getElementById("map-count").textContent =
    `${quizQuestions.length} total`;

  showScreen(quizScreen);
  renderQuestion();
  updateTimerDisplay();

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (!quizActive) return;

    timeLeft -= 1;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      finishQuiz(true);
    }
  }, 1000);
}

function renderQuestion() {
  const question = quizQuestions[currentIndex];
  const total = quizQuestions.length;
  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  document.getElementById("question-counter").textContent =
    `QUESTION ${currentIndex + 1} OF ${total}`;

  document.getElementById("progress-percent").textContent =
    `${progressPercent}% POSITION`;

  document.getElementById("progress-fill").style.width =
    `${progressPercent}%`;

  document.getElementById("question-number").textContent =
    String(currentIndex + 1).padStart(2, "0");

  document.getElementById("question-topic").textContent = question.topic;
  document.getElementById("question-text").textContent = question.q;

  document.getElementById("answered-label").textContent =
    `${answers.filter(answer => answer !== null).length} answered`;

  const optionsList = document.getElementById("options-list");

  optionsList.innerHTML = question.options.map((option, index) => `
    <button type="button"
      class="option-button ${answers[currentIndex] === index ? "selected" : ""}"
      data-option="${index}"
      aria-pressed="${answers[currentIndex] === index}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${escapeHTML(option)}</span>
    </button>
  `).join("");

  optionsList.querySelectorAll("[data-option]").forEach(button => {
    button.addEventListener("click", () => {
      if (!quizActive) return;

      answers[currentIndex] = Number(button.dataset.option);
      renderQuestion();
    });
  });

  document.getElementById("prev-btn").disabled = currentIndex === 0;
  document.getElementById("prev-btn").style.opacity =
    currentIndex === 0 ? ".45" : "1";

  document.getElementById("next-btn").classList.toggle(
    "hidden", currentIndex === total - 1
  );

  document.getElementById("submit-btn").classList.toggle(
    "hidden", currentIndex !== total - 1
  );

  renderQuestionMap();
}

function renderQuestionMap() {
  const map = document.getElementById("question-map");

  map.innerHTML = quizQuestions.map((_, index) => `
    <button type="button"
      class="map-button ${answers[index] !== null ? "answered" : ""} ${index === currentIndex ? "current" : ""}"
      data-jump="${index}"
      aria-label="Go to question ${index + 1}">
      ${index + 1}
    </button>
  `).join("");

  map.querySelectorAll("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      if (!quizActive) return;

      currentIndex = Number(button.dataset.jump);
      renderQuestion();
    });
  });
}

function updateTimerDisplay() {
  const minutes = Math.floor(Math.max(0, timeLeft) / 60);
  const seconds = Math.max(0, timeLeft) % 60;

  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  document.getElementById("timer-fill").style.width =
    `${Math.max(0, timeLeft / QUIZ_DURATION * 100)}%`;

  const timerCard = document.querySelector(".timer-card");
  timerCard.classList.toggle("warning", timeLeft <= 20);

  document.getElementById("timer-note").textContent =
    timeLeft <= 20 ? "Almost out of time!" : "Take your time, stay focused.";
}

function finishQuiz(autoSubmitted = false) {
  if (!quizActive || quizFinished) return;

  quizActive = false;
  quizFinished = true;
  clearInterval(timerInterval);

  const questions = quizQuestions;
  const total = questions.length;
  const attempted = answers.filter(answer => answer !== null).length;

  const correct = answers.reduce((count, answer, index) => {
    return count + (answer === questions[index].answer ? 1 : 0);
  }, 0);

  const incorrect = attempted - correct;
  const unanswered = total - attempted;
  const percentage = Math.round((correct / total) * 100);
  const xpEarned = correct * 10 + 5;

  const progress = readProgress();
  const previous = progress.categories[currentCategory] ||
    { bestPercent: 0, attempts: 0 };

  const bestPercent = Math.max(previous.bestPercent || 0, percentage);

  progress.completed += 1;
  progress.xp += xpEarned;

  progress.categories[currentCategory] = {
    bestPercent,
    attempts: (previous.attempts || 0) + 1,
    lastPercent: percentage,
    lastCorrect: correct
  };

  saveProgress(progress);

  latestResult = {
    total,
    attempted,
    correct,
    incorrect,
    unanswered,
    percentage,
    xpEarned,
    bestPercent,
    autoSubmitted
  };

  renderResult(latestResult);
  showScreen(resultScreen);
}

function renderResult(result) {
  const category = categoryInfo[currentCategory];

  document.getElementById("result-title").textContent =
    result.percentage >= 80 ? "Brilliant effort!" :
    result.percentage >= 50 ? "Good progress!" : "Keep building!";

  document.getElementById("result-subtitle").textContent =
    result.autoSubmitted
      ? "Time ran out, so your quiz was submitted automatically."
      : "Every attempt is a chance to learn something new.";

  document.getElementById("result-percentage").textContent =
    `${result.percentage}%`;

  document.getElementById("score-ring").style.setProperty(
    "--score-angle", `${result.percentage * 3.6}deg`
  );

  document.getElementById("result-score").textContent =
    `${result.correct} / ${result.total} correct`;

  document.getElementById("result-category").textContent = category.title;
  document.getElementById("xp-earned").textContent = `+${result.xpEarned} XP`;
  document.getElementById("summary-total").textContent = result.total;
  document.getElementById("summary-attempted").textContent = result.attempted;
  document.getElementById("summary-correct").textContent = result.correct;
  document.getElementById("summary-incorrect").textContent = result.incorrect;
  document.getElementById("summary-unanswered").textContent = result.unanswered;
  document.getElementById("summary-best").textContent = `${result.bestPercent}%`;
  document.getElementById("review-count").textContent =
    `${result.total} questions`;

  document.getElementById("review-list").innerHTML =
    quizQuestions.map((question, index) => {
      const chosen = answers[index];
      const isCorrect = chosen === question.answer;
      const blank = chosen === null;

      const badgeClass = blank ? "blank" : isCorrect ? "good" : "bad";
      const badge = blank ? "—" : isCorrect ? "✓" : "×";

      return `
        <article class="review-item">
          <div class="review-item-top">
            <span class="review-badge ${badgeClass}">${badge}</span>
            <div>
              <div class="review-question">
                ${index + 1}. ${escapeHTML(question.q)}
              </div>
              <div class="review-topic">${question.topic}</div>
            </div>
          </div>

          <div class="review-answer">
            <div>Your answer:
              <strong>${blank ? "Not answered" : escapeHTML(question.options[chosen])}</strong>
            </div>
            <div>Correct answer:
              <strong class="correct-text">${escapeHTML(question.options[question.answer])}</strong>
            </div>
            <div>${escapeHTML(question.explain)}</div>
          </div>
        </article>`;
    }).join("");
}

function returnHome() {
  quizActive = false;
  clearInterval(timerInterval);
  renderHome();
  showScreen(homeScreen);
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0 && quizActive) {
    currentIndex--;
    renderQuestion();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentIndex < quizQuestions.length - 1 && quizActive) {
    currentIndex++;
    renderQuestion();
  }
});

document.getElementById("submit-btn").addEventListener("click", () => {
  if (confirm("Submit your quiz now? You cannot change answers after submitting.")) {
    finishQuiz(false);
  }
});

document.getElementById("back-btn").addEventListener("click", () => {
  if (confirm("Leave this quiz? Your current attempt will not be saved.")) {
    returnHome();
  }
});

document.getElementById("result-home-btn").addEventListener("click", returnHome);
document.getElementById("another-btn").addEventListener("click", returnHome);

document.getElementById("retry-btn").addEventListener("click", () => {
  startQuiz(currentCategory);
});

document.getElementById("brand-home").addEventListener("click", event => {
  event.preventDefault();

  if (quizActive) {
    if (confirm("Leave this quiz? Your current attempt will not be saved.")) {
      returnHome();
    }
  } else {
    returnHome();
  }
});

renderHome();
