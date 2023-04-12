const quizData = [
    {
        question: "Television cable network is an example of?",
        a: "LAN",
        b: "WAN",
        c: "MAN",
        d: "Internet",
        correct: "c",
    },
    {
        question: "Which of the following is not a type of cyber crime?",
        a: "Data theft",
        b: "Installing antivirus for protection",
        c: "Forgery",
        d: "Cyber bullying",
        correct: "b",
    },
    {
        question: "What is an example of e-waste?",
        a: "A ripened mango",
        b: "Unused old shoes",
        c: "Unused old computers",
        d: "Empty cola cans",
        correct: "c",
    },
    {
        question: "Which type of values will not be considered by SQL while executing the following statement: SELECT COUNT(column name) FROM inventory;",
        a: "Numeric value",
        b: "text value",
        c: "Null value",
        d: "Date value",
        correct: "c",
    },
    {
        question: "w  ",
        a: "Numeric value",
        b: "text value",
        c: "Null value",
        d: "Date value",
        correct: "c",
    },
    {
        question: "What is the capital of Dadra and Nagar Haveli?",
        a: "Daman",
        b: "Silvassa",
        c: "Dispur",
        d: "Shilling",
        correct: "a",
    },

{
        question: "What is the S.I. unit of temperature?",
        a: "Kelvin",
        b: "Celsius",
        c: "Centigrade",
        d: "Fahrenheit",
        correct: "a",
    },

{
        question: "Which is the highest literary award of the world ?",
        a: "Nobel Prize",
        b: "Booker Prize",
        c: "Pulitzer Prize",
        d: "Magsaysay Award",
        correct: "a",
    },

{
        question: "Which language is spoken in Karnataka?",
        a: "Marathi",
        b: "Hindi",
        c: "Malayalam",
        d: "Kannada",       
        correct: "d",
    },

{
        question: "Which is post-harvest folk dance in Assam?",
        a: "Ojapali",
        b: "Ankia Nat",
        c: "Bihu",
        d: "None of the above",       
        correct: "c",
    },


{
        question: "The unit of current is?",
        a: "ohm",
        b: "watt",
        c: "ampere",
        d: "None of the above",       
        correct: "c",
    },

{
        question: "The term butterfly is associated with ?",
        a: "kabaddi",
        b: "swimming",
        c: "boxing",
        d: "wrestling",       
        correct: "b",
    },

{
        question: "Which city in Tamil Nadu has airport?",
        a: "Chennai",
        b: "Triuchirapalli",
        c: "Madurai",
        d: "All of the above",       
        correct: "d",
    },

{
        question: "When was Mahatma Gandhi assassinated?",
        a: "1948",
        b: "1951",
        c: "1958",
        d: "1971",       
        correct: "a",
    },

{
        question: "What is the capital of Jharkhand?",
        a: "Raipur",
        b: "Dehradun",
        c: "Ranchi",
        d: "None of the above",       
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})