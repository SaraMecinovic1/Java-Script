const arr = [
  {
    id: "89776",
    question: "Koji je najveci organ u ljudskom telu?",
    answers: ["bubreg", "koza", "mozak", " pluca"],
    points: 5,
    correct: "koza",
  },
  {
    id: "23541",
    question: "Koji je glavni grad Srbije?",
    answers: ["Novi Sad", "Beograd", "Subotica", "Novi Pazar"],
    points: 5,
    correct: "Beograd",
  },
  {
    id: "987001",
    question: "Koliko dugo traje fudbalska utakmica?",
    answers: [90, 70, 45, 60],
    points: 5,
    correct: 90,
  },
  {
    id: "89776",
    question: "Koliko ima minut sekundi?",
    answers: [90, 70, 45, 60],
    points: 5,
    correct: 60,
  },
];

let currentQuestionIndex = 0; //index pitanja krece od 0
let correctAns = 0; //poeni
let currQuestion = arr[currentQuestionIndex]; //prvo pitanje od 0 indexa

const startQuiz = () => {
  //ispisali smo pitanje

  let queDiv = document.getElementById("pitanje");
  queDiv.textContent = currQuestion.question;
  //ispisali smo odgovore za to pitaje
  let parent = document.getElementById("odgovori");
  currQuestion.answers.forEach((odgovor, index) => {
    console.log(odgovor, "-odgovori");
    let buttonEl = document.createElement("button");
    buttonEl.textContent = odgovor;
    buttonEl.classList.add("B");
    parent.appendChild(buttonEl);
  });

  if (currentQuestionIndex >= arr.length) {
    return (window.location.href = "result.html");
  }
};
startQuiz();

const submitAnswer = (id, ans) => {
  if (currQuestion.id === id) {
    console.log(currQuestion.id);
    if (currQuestion.correct === ans) {
      correctAns += 1;
      alert("radi");
    }
    currentQuestionIndex++;
    startQuiz();
  }
};
