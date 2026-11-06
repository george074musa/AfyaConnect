
// ====================================
// AFYACONNECT - COMMUNITY HEALTH WEBSITE
// ====================================

// PAGE NAVIGATION
const pages = document.querySelectorAll(".page");
const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll("nav a[data-page]");

function showPage(pageName) {
  const selected = document.getElementById(pageName);

  if (!selected) return;

  pages.forEach(page => page.classList.remove("active"));
  selected.classList.add("active");

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.dataset.page === pageName
    );
  });

  navigation.classList.remove("show");

  window.location.hash = pageName;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Navigation buttons
document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage(link.dataset.page);
  });
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.go);
  });
});

// Mobile navigation
document.getElementById("menuToggle").addEventListener("click", () => {
  navigation.classList.toggle("show");
});

// HEALTH ARTICLES
const articles = [
  {
    id: 1,
    title: "Understanding Malaria",
    category: "Disease Awareness",
    icon: "🦟",
    description: "Learn about malaria and ways to reduce mosquito exposure.",
    sections: [
      {
        heading: "What is malaria?",
        text: "Malaria is an infectious disease caused by parasites transmitted through the bites of infected female Anopheles mosquitoes."
      },
      {
        heading: "Common signs",
        text: "Common symptoms include fever, headache and chills. These symptoms can also occur in other illnesses, so a health professional should assess suspected malaria."
      },
      {
        heading: "Prevention",
        text: "Use recommended insecticide-treated mosquito nets, reduce mosquito breeding sites around homes, and seek medical assessment when symptoms occur."
      }
    ]
  },
  {
    id: 2,
    title: "Understanding Diabetes",
    category: "Health Awareness",
    icon: "🩺",
    description: "Discover basic information about diabetes and prevention.",
    sections: [
      {
        heading: "What is diabetes?",
        text: "Diabetes is a long-term condition involving problems with how the body regulates blood glucose."
      },
      {
        heading: "Awareness",
        text: "Some people experience increased thirst, frequent urination or tiredness, although some people have no obvious symptoms."
      },
      {
        heading: "Healthy habits",
        text: "Balanced meals, regular physical activity and appropriate health check-ups can support overall health. A healthcare professional can assess individual risk."
      }
    ]
  },
  {
    id: 3,
    title: "Mental Wellbeing",
    category: "Mental Health",
    icon: "💚",
    description: "Understand emotional wellbeing and the importance of support.",
    sections: [
      {
        heading: "What is mental wellbeing?",
        text: "Mental wellbeing includes emotional, psychological and social wellbeing. It influences how people think, feel and relate to others."
      },
      {
        heading: "Everyday support",
        text: "Social connection, adequate rest, enjoyable activities and talking with trusted people can support wellbeing."
      },
      {
        heading: "Getting support",
        text: "If emotional difficulties affect everyday life, speaking with a qualified mental health professional or trusted healthcare worker can help."
      }
    ]
  },
  {
    id: 4,
    title: "Immunization Awareness",
    category: "Prevention",
    icon: "💉",
    description: "Learn why recommended vaccinations are important.",
    sections: [
      {
        heading: "What is immunization?",
        text: "Immunization helps protect people against certain infectious diseases."
      },
      {
        heading: "Why is it important?",
        text: "Vaccination reduces the risk of many vaccine-preventable illnesses and can help protect communities."
      },
      {
        heading: "Where to learn more",
        text: "Ask a qualified healthcare worker about the recommended vaccination schedule for your age and circumstances."
      }
    ]
  },
  {
    id: 5,
    title: "Water and Sanitation",
    category: "Public Health",
    icon: "🚰",
    description: "Understand safe water and proper sanitation.",
    sections: [
      {
        heading: "Why safe water matters",
        text: "Safe water is important for drinking, food preparation, personal hygiene and preventing waterborne illnesses."
      },
      {
        heading: "Good practices",
        text: "Use safe drinking water, keep storage containers clean and covered, and follow local public health advice about water treatment."
      },
      {
        heading: "Community action",
        text: "Protect water sources, maintain sanitation facilities and report water supply concerns to the appropriate authorities."
      }
    ]
  },
  {
    id: 6,
    title: "Healthy Eating",
    category: "Nutrition",
    icon: "🥗",
    description: "Explore the importance of balanced and varied meals.",
    sections: [
      {
        heading: "Balanced nutrition",
        text: "A varied diet containing vegetables, fruits, grains, protein sources and other suitable foods helps provide essential nutrients."
      },
      {
        heading: "Food safety",
        text: "Wash produce appropriately, prepare food in clean surroundings and store food safely."
      },
      {
        heading: "Healthy choices",
        text: "Choose a variety of locally available nutritious foods according to your needs and circumstances."
      }
    ]
  }
];

// Display articles
const articleContainer = document.getElementById("healthArticles");

function displayArticles(list) {
  articleContainer.innerHTML = "";

  list.forEach(article => {
    const card = document.createElement("article");
    card.className = "article-card";

    const icon = document.createElement("div");
    icon.textContent = article.icon;
    icon.style.fontSize = "35px";

    const title = document.createElement("h3");
    title.textContent = article.title;

    const category = document.createElement("small");
    category.textContent = article.category;

    const description = document.createElement("p");
    description.textContent = article.description;

    const button = document.createElement("button");
    button.className = "btn primary read-btn";
    button.textContent = "Read More";

    button.addEventListener("click", () => {
      readArticle(article.id);
    });

    card.append(icon, title, category, description, button);
    articleContainer.appendChild(card);
  });

  document.getElementById("noArticles").hidden =
    list.length !== 0;
}

function readArticle(articleId) {
  const article = articles.find(item => item.id === articleId);

  if (!article) return;

  const content = document.getElementById("articleContent");
  content.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = article.icon + " " + article.title;
  content.appendChild(title);

  const description = document.createElement("p");
  description.textContent = article.description;
  content.appendChild(description);

  article.sections.forEach(section => {
    const heading = document.createElement("h3");
    heading.textContent = section.heading;

    const paragraph = document.createElement("p");
    paragraph.textContent = section.text;

    content.append(heading, paragraph);
  });

  const disclaimer = document.createElement("p");
  disclaimer.textContent =
    "Educational information only. This article does not replace professional medical advice.";

  content.appendChild(disclaimer);

  articleContainer.hidden = true;
  document.querySelector(".search-input").hidden = true;
  document.getElementById("noArticles").hidden = true;
  document.getElementById("articleDetails").hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Close article
document.getElementById("closeArticle").addEventListener("click", () => {
  document.getElementById("articleDetails").hidden = true;
  articleContainer.hidden = false;
  document.querySelector(".search-input").hidden = false;
});

// Search health articles
document.getElementById("healthSearch").addEventListener("input", event => {
  const search = event.target.value.toLowerCase();

  const results = articles.filter(article =>
    article.title.toLowerCase().includes(search) ||
    article.category.toLowerCase().includes(search) ||
    article.description.toLowerCase().includes(search)
  );

  displayArticles(results);
});

// DAILY HEALTH TIPS
const tips = [
  "Wash your hands with soap and clean water at important times.",
  "Drink safe water throughout the day.",
  "Include different vegetables and fruits in your meals.",
  "Keep your surroundings clean.",
  "Ask a qualified health worker about recommended vaccinations.",
  "Use mosquito nets recommended for your area.",
  "Follow safe food preparation and storage practices.",
  "Make time for rest and positive social connections.",
  "Seek qualified healthcare advice when you have health concerns."
];

let previousTip = -1;

document.getElementById("newTip").addEventListener("click", () => {
  let index;

  do {
    index = Math.floor(Math.random() * tips.length);
  } while (index === previousTip);

  previousTip = index;

  document.getElementById("dailyTip").textContent = tips[index];
});

// HEALTH QUIZ
const questions = [
  {
    question: "Which practice helps prevent the spread of many germs?",
    options: [
      "Regular handwashing",
      "Sharing towels",
      "Ignoring cleanliness"
    ],
    answer: 0,
    explanation: "Washing hands with soap and clean water helps remove germs."
  },
  {
    question: "Which food group provides many vitamins and minerals?",
    options: [
      "Sweets only",
      "Vegetables and fruits",
      "Soft drinks"
    ],
    answer: 1,
    explanation: "Vegetables and fruits provide many important nutrients."
  },
  {
    question: "Who should assess a suspected medical condition?",
    options: [
      "A random online comment",
      "An unqualified stranger",
      "A qualified healthcare professional"
    ],
    answer: 2,
    explanation: "Qualified healthcare professionals can assess health concerns."
  },
  {
    question: "What helps protect drinking water?",
    options: [
      "Leaving containers uncovered",
      "Using clean, covered containers",
      "Storing water beside rubbish"
    ],
    answer: 1,
    explanation: "Clean, covered containers help protect stored water from contamination."
  },
  {
    question: "Why is immunization important?",
    options: [
      "It helps prevent certain infectious diseases",
      "It replaces every medical check-up",
      "It means nobody can ever get sick"
    ],
    answer: 0,
    explanation: "Vaccines protect against specific diseases, but no vaccine prevents every illness."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  document.getElementById("questionNumber").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("questionText").textContent =
    question.question;

  document.getElementById("quizFeedback").textContent = "";

  const optionsContainer = document.getElementById("answerOptions");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(index, button);
    });

    optionsContainer.appendChild(button);
  });

  const next = document.getElementById("nextQuestion");
  next.disabled = true;

  next.textContent =
    currentQuestion === questions.length - 1
      ? "See Results"
      : "Next Question";
}

function checkAnswer(selected, selectedButton) {
  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];
  const options = document.querySelectorAll(".answer-option");

  options.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }
  });

  if (selected === question.answer) {
    score++;
    document.getElementById("quizFeedback").textContent =
      "Correct! " + question.explanation;
  } else {
    selectedButton.classList.add("incorrect");

    document.getElementById("quizFeedback").textContent =
      "Not quite. " + question.explanation;
  }

  document.getElementById("nextQuestion").disabled = false;
}

document.getElementById("nextQuestion").addEventListener("click", () => {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quizContent").hidden = true;
    document.getElementById("quizResult").hidden = false;

    document.getElementById("finalScore").textContent =
      `You scored ${score} out of ${questions.length}. Keep learning about your health!`;
  }
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("quizContent").hidden = false;
  document.getElementById("quizResult").hidden = true;

  loadQuestion();
}

document.getElementById("restartQuiz").addEventListener("click", restartQuiz);

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) return;

  // Demo only: save messages in this browser.
  const messages = (() => {
    try {
      return JSON.parse(localStorage.getItem("afyaMessages")) || [];
    } catch {
      return [];
    }
  })();

  messages.push({
    name,
    email,
    message,
    date: new Date().toISOString()
  });

  localStorage.setItem("afyaMessages", JSON.stringify(messages));

  document.getElementById("contactResponse").textContent =
    "Thank you! Your message has been saved on this device.";

  event.target.reset();
});

// FOOTER YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// INITIALIZE WEBSITE
displayArticles(articles);
loadQuestion();

const allowedPages = [
  "home",
  "about",
  "education",
  "nutrition",
  "hygiene",
  "services",
  "quiz",
  "contact"
];

const startingPage = window.location.hash.replace("#", "");

showPage(
  allowedPages.includes(startingPage)
    ? startingPage
    : "home"
);
