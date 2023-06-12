let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

const quizData = [{
        question: "Które z tych rodzajów promieniowań nie jest prawdziwe?",
        a: "Prom. kosmiczne",
        b: "Prom. jądrowe",
        c: "Prom. hamowania",
        d: "Prom. rakietowe",
        correct: "d",
    },
    {
        question: "Który rodzaj promieniowania jądrowego jest najbardziej przenikliwy?",
        a: "Alfa",
        b: "Beta",
        c: "Gamma",
        d: "Wszystkie są tak samo przenikliwe",
        correct: "c",
    },
    {
        question: "Kiedy po raz pierwszy zaobserwowano promieniowanie grawitacyjne?",
        a: "14 września 2015",
        b: "12 kwietnia 1998",
        c: "4 stycznia 2011",
        d: "29 sierpnia 1978",
        correct: "a",
    },
    {
        question: "Jak brzmi inna nazwa mikrofalowego promieniowania tła?",
        a: "Małe tylne fale",
        b: "Promieniowanie reliktowe",
        c: "Promieniowanie tapetowe",
        d: "Nie ma innej nazwy",
        correct: "b",
    },
    {
        question: "Który przykład naturalnych źródeł promieniowania z wymienionych ma największą aktywność promieniotwórczą wyrażoną w bekerelach (Bq)?",
        a: "Banan",
        b: "Mleko",
        c: "Popiół węglowy",
        d: "Te substancje nie mają aktywności promieniotwórczej",
        correct: "c",
    },
    {
        question: "Jądrami jakiego pierwiastka są cząsteczki alfa?",
        a: "Helu",
        b: "Argonu",
        c: "Boru",
        d: "Azotu",
        correct: "a",
    },
    {
        question: "Która z tych postaci ostrej choroby popromiennej wyróżnia się największą dawką i śmiertelnością?",
        a: "Postać mózgowa",
        b: "Postać jelitowa",
        c: "Postać hematologiczna",
        d: "Postać enzymatyczna",
        correct: "d",
    },
    {
        question: "Jak nazywa się specjalizacja lekarska zajmująca się i wykorzystująca promieniowanie?",
        a: "Endokrynologia",
        b: "Radiologia",
        c: "Onkologia",
        d: "Kardiologia",
        correct: "b",
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
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>Zdobyłeś ${score}/${quizData.length} punktów</h2>

           <button onclick="location.reload()">Jeszcze raz</button>
           `
        }
    }
})