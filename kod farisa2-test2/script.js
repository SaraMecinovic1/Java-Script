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
    answers: [70, 90, 45, 60],
    points: 5,
    correct: 90,
  },
  {
    id: "89776",
    question: "Koliko ima minut sekundi?",
    answers: [90, 45, 70, 60],
    points: 5,
    correct: 60,
  },
  {
    id: "8888",
    question: " Koliko okeana ima na svetu?",
    answers: [5, 8, 4, 6],
    points: 5,
    correct: 5,
  },
];
let currPoints = 0;
let maxPoints = arr.reduce((prev, curr) => {
  return prev + curr.points;
}, 0);
console.log(maxPoints);

const startQuiz = () => {
  console.log("pokrenito je");
  let queDiv = document.getElementById("pitanje");
  let ansDiv = document.getElementById("odgovori");

  const question = arr[0];
  queDiv.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick=()=>{
        submitAnswer(question.id,button.textContent)
    }
    queDiv.appendChild(button);
  });
};

const submitAnswer = (id, ans) => {
  const question = arr[0];
  if (question.id === id) {
    if (question.correct === ans) {
      currPoints += question.points;
      console.log(currPoints)

    }
  }
};
startQuiz();
