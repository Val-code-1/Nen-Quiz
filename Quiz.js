const body = document.getElementById("body");
// header
const header = document.createElement("h1");
header.textContent = "Bisky's Nen Quiz";
body.appendChild(header);
header.id = "header";
// header

// quiz questions
const quiz = [
  {
    question: "Where does Nen come from?",
    answers: [
      "The Hunter Association",
      "The Zoldyck Family",
      "Gems",
      "Within Every Person",
    ],
    answer: "Within Every Person",
  },
  {
    question: "Which of these is NOT one of the basics of Nen?",
    answers: ["Ten", "Zetsu", "Sen", "Hatsu"],
    answer: "Sen",
  },
  {
    question:
      "If you were trying to stay hidden which basic Nen technique would you use?",
    answers: ["Ten", "Stealth", "Zetsu", "Hatsu"],
    answer: "Zetsu",
  },
  {
    question: "Using your Nen to surround another object is known as...?",
    answers: ["Shu", "Ryu", "Ko", "Ken"],
    answer: "Shu",
  },
  {
    question: "Which of these is not a Nen type?",
    answers: ["Sorcerer", "Enhancer", "Manipulator", "Specialist"],
    answer: "Sorcerer",
  },
  {
    question: "How do most Nen users find out their Nen type",
    answers: [
      "After a Fight to the Death",
      "Their Spirit Beast",
      "After a Loved One Dies",
      "Water Divination",
    ],
    answer: "Water Divination",
  },
  {
    question: "What is Genthru's Nen Affinity?",
    answers: ["Enhancement", "Transmutation", "Conjuration", "Emission"],
    answer: "Conjuration",
  },
  {
    question:
      "If you have an affinity with Emission what is your proficiency in Manipulation?",
    answers: ["50%", "80%", "60%", "40%"],
    answer: "80%",
  },
  {
    question: "Which Nen Affinity is the rarest?",
    answers: ["Emitter", "Specialist", "Enhancer", "Transmuter"],
    answer: "Specialist",
  },
];
// quiz questions

// intro with button
const iDiv = document.createElement("div");
iDiv.className = "iDiv";
body.appendChild(iDiv);
const intro = document.createElement("p");
intro.className = "intro";
iDiv.appendChild(intro);
intro.textContent = "Bisky will test your knowlege of Nen. Answer quickly!";
const begin = document.createElement("button");
begin.className = "begin";
iDiv.appendChild(begin);
begin.textContent = "Begin!";
const bisky = document.createElement("img");
bisky.className = "bisky";
iDiv.appendChild(bisky);
bisky.src = "./assets/Bisky.png";
const restart = document.createElement("button");
restart.className = "restart";
restart.textContent = "Try again?";
restart.addEventListener("click", () => {
  location.reload();
});

let timer = 100; // <<<< set length of timer
begin.addEventListener("click", () => {
  // timer
  const pDiv = document.createElement("div");
  pDiv.id = "timer";
  body.appendChild(pDiv);
  let interval = setInterval(function () {
    timer--;
    pDiv.textContent = "Time remaining: " + timer;
    if (timer < 0) {
      clearInterval(interval);
      const losePic = document.createElement("img"); //<<< failure screen.
      losePic.id = "losePic";
      losePic.src = "./assets/BiskyLose.gif";
      const loseMsg = document.createElement("div");
      loseMsg.className = "loseMsg";
      body.replaceChild(loseMsg, pDiv);
      const loseText = document.createElement("p");
      loseText.className = "loseText";
      loseText.textContent = "Not fast enough!"; //<<< Change msg add button for restart.
      loseMsg.appendChild(loseText);
      loseMsg.appendChild(restart);
      body.replaceChild(losePic, qDiv);
    }
  }, 1000);
  // timer
  // question format construction
  const qDiv = document.createElement("div");
  qDiv.className = "qDiv";
  const questionText = document.createElement("p");
  questionText.className = "questionText";
  const a1 = document.createElement("button");
  const a2 = document.createElement("button");
  const a3 = document.createElement("button");
  const a4 = document.createElement("button");
  a1.className = "answers";
  a2.className = "answers";
  a3.className = "answers";
  a4.className = "answers";
  a1.id = "a1";
  a2.id = "a2";
  a3.id = "a3";
  a4.id = "a4";
  // question format construction
  body.replaceChild(qDiv, iDiv);

  // first set of questions
  let n = 0;
  questionText.textContent = quiz[n].question;
  a1.textContent = quiz[n].answers[0];
  a2.textContent = quiz[n].answers[1];
  a3.textContent = quiz[n].answers[2];
  a4.textContent = quiz[n].answers[3];
  body.appendChild(qDiv);
  qDiv.appendChild(questionText);
  qDiv.appendChild(a1);
  qDiv.appendChild(a2);
  qDiv.appendChild(a3);
  qDiv.appendChild(a4);
  // first set of questons
  document.querySelectorAll(".answers").forEach((answer) => {
    answer.addEventListener("click", nextQuestion);
    function nextQuestion(c) {
      if (n < quiz.length - 1 && c.target.innerText == quiz[n].answer) {
        n++; // ++n
        questionText.textContent = quiz[n].question;
        a1.textContent = quiz[n].answers[0];
        a2.textContent = quiz[n].answers[1];
        a3.textContent = quiz[n].answers[2];
        a4.textContent = quiz[n].answers[3];
        a1.style.color = "#dcf0f1";
        a2.style.color = "#dcf0f1";
        a3.style.color = "#dcf0f1";
        a4.style.color = "#dcf0f1";
        console.log("you are a bold one."); //  maybe play a bisky gif
        // Else if for victory
      } else if (c.target.innerText == quiz[n].answer) {
        console.log("I am the senate"); // final answer trigger
        const wDiv = document.createElement("div");
        wDiv.className = "wDiv";
        const wText = document.createElement("p");
        wText.className = "wText";
        wText.textContent = "Well Done! You are like a perfectly cut gem!"; // <<< Win text
        wDiv.appendChild(wText);
        const wImage = document.createElement("img");
        wImage.className = "wImage";
        wDiv.appendChild(restart);
        wDiv.appendChild(wImage);
        body.removeChild(pDiv);
        wImage.src = "./assets/BiskyGem.gif"; // <<<< Win image
        body.replaceChild(wDiv, qDiv);
      } else {
        console.log("hello there");
        c.target.style.color = "red"; // turn button red
        timer = timer - 7;
      }
    }
  });
});
