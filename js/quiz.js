document.getElementById('CandidateName').textContent = '';
document.getElementById('centreName').textContent = ''
let names = localStorage.getItem('CandidateName');
let center = localStorage.getItem('centreName');

document.getElementById('CandidateName').textContent = names;
document.getElementById('centreName').textContent = center
document.getElementById('CandidateName').textContent = names;
document.getElementById('centreName').textContent = center


const targetDate = new Date().getTime() + 2 * 61 * 1000;
const intervalid = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeDiffrence = targetDate - currentDate;
    const minutes = Math.floor((timeDiffrence % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiffrence % (1000 * 60)) /1000);

    document.getElementById("countdown").innerHTML = `Countdown: ${minutes}m ${seconds}s`;
    if (timeDiffrence <= 0) {
        clearInterval(intervalid);
        document.getElementById("countdown").innerHTML = "Time expired!";
        submitQuiz();
    }
}, 1000);

const questions = [
    {
        prompt: 'What is the capital of France?',
        options: [
            'Abuja',
            'Abu Dhabi',
            'Paris',
            'Japan'
        ],
        answer: 'Paris',
        userAnswer: null
    },
    {
        prompt: 'What is the largest planet in our solar system?',
        options: [
            'Jupiter',
            'Saturn',
            'Mars',
            'Neptune'
        ],
        answer: 'Jupiter',
        userAnswer: null
    },
    {
        prompt: 'What is the smallest country in the world?', 
        options: [
            'Vatican City',
            'Abu Dhabi',
            'Paris',
            'India'
        ],
        answer: 'Vatican City',
        userAnswer: null
    },
    {
        prompt: 'Who is the author of "To Kill a Mockingbird"?',         options: [
            'Haley',
            'Harper Lee',
            'Eminem',
            'Harry Potter'
        ],
        answer: 'Harper Lee',
        userAnswer: null
    },
    {
        prompt: 'What is the largest mammal in the world?',  
        options: [
            'Sharks',
            'None of the above',
            'Human',
            'Blue Whale'
        ],
        answer: 'Blue Whale',
        userAnswer: null
    },
    {
        prompt: 'Who painted the Mona Lisa?',  
        options: [
            'Moana',
            'Donald Trump',
            'Your teacher',
            'Leonardo da Vinci'
        ],
        answer: 'Leonardo da Vinci',
        userAnswer: null
    },
    {
        prompt: 'What is the tallest mountain in the world?',  
        options: [
            'None of the above',
            'All of the above',
            'Mount Everest',
            'Mount Sinai'
        ],
        answer: 'Mount Everest',
        userAnswer: null
    },
    {
        prompt: 'Who is the lead singer of The Beatles?',  
        options: [
            'Rema',
            'Beyonce',
            'Burna Boy',
            'John Lennon'
        ],
        answer: 'John Lennon',
        userAnswer: null
    },
    {
        prompt: 'What is the largest desert in the world?',  
        options: [
            'Sahara',
            'None of the above',
            'Antarctic Desert',
            'All of the above'
        ],
        answer: 'Antarctic Desert',
        userAnswer: null
    },
    {
        prompt: 'Who is the richest person in the world?',  
        options: [
            'Tony Stark',
            'Samuel Jackson',
            'Tom Holland',
            'Elon Musk'
        ],
        answer: 'Elon Musk',
        userAnswer: null
    }
];

const questionBoard = document.querySelector(".question-board");
const questionOptions = document.getElementById("options");
questionOptions.style.paddingTop = "5px";
questionOptions.style.paddingRight = "10px";
questionOptions.style.paddingBottom = "5px";
questionOptions.style.paddingLeft = "10px";
questionOptions.style.marginLeft = "650px";
let currentQuestionsIndex = 0;
const displayedQuestion = document.querySelector(".questions-words");
const submitBtn = document.querySelector("#submitBtn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionsIndex];
    displayedQuestion.textContent = currentQuestion.prompt;
    questionOptions.innerHTML = '';
    currentQuestion.options.forEach(function (choice, i) {
        const choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.classList.add("choiceBtn");
        choiceBtn.textContent = i + 1 + "." + choice;
        choiceBtn.onclick = questionClick;
        questionOptions.appendChild(choiceBtn);
    });
}

loadQuestion();

function questionClick() {
    const currentQuestion = questions[currentQuestionsIndex];
    if (this.value === currentQuestion.answer) {
        currentQuestion.userAnswer = true;
    } else {
        currentQuestion.userAnswer = false;
    }
    currentQuestionsIndex++;
    if (currentQuestionsIndex === questions.length) {
        clearInterval(intervalid);
        document.getElementById("countdown").innerHTML = "Quiz completed!";
        alert('Quiz completed! you may proceed to submit')
    } else {
        loadQuestion();
    }
}

function submitQuiz() {
    let score = 0;
    questions.forEach(question => {
        if (question.userAnswer === true) {
            score++;
        }
    });

    let percentageScore = (score / questions.length) * 100;

    let scoreElement = document.getElementById("score");
    scoreElement = alert(`${center}, ${names}, ${percentageScore}%.`);
    if (percentageScore === 100) {
        let modal = document.getElementById("myModal");
        if (!modal) {
            modal = document.createElement('div');
            modal.id = "myModal";
            modal.className = "modal";
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>${names}, ${center}.</p>
                </div>
            `;
            document.body.appendChild(modal);
        }
        modal.style.display = "block";
    
        document.getElementById("openModal").addEventListener("click", function () {
            modal.style.display = "block";
        });
    
        document.getElementsByClassName("close")[0].addEventListener("click", function () {
            modal.style.display = "none";
        });
    
        window.addEventListener("click", function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
}

