let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3,
    },
    {
        'question': 'Mit welchem Tag bindet man einen Link ein?',
        'answer_1': 'span',
        'answer_2': 'a href',
        'answer_3': 'img',
        'answer_4': 'p',
        'right_answer': 2,
    },
    {
        'question': 'Welches Attribut kann man nicht für Textarea verwenden?',
        'answer_1': 'readonly',
        'answer_2': 'max',
        'answer_3': 'from',
        'answer_4': 'spellcheck',
        'right_answer': 1,
    },
    {
        'question': 'Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?',
        'answer_1': 'a[title]{...}',
        'answer_2': 'a > title {...}',
        'answer_3': 'a.title {...}',
        'answer_4': 'a=title {...}',
        'right_answer': 1,
    },
    {
        'question': 'Wie definierst man in JavaScript eine Variable?',
        'answer_1': 'let 100 = rate;',
        'answer_2': '100 = let rate;',
        'answer_3': 'rate = 100;',
        'answer_4': 'let rate = 100;',
        'right_answer': 4,
    },
];
let rightAnswer = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {

    if (currentQuestion >= questions.length) {
        //End Screen(muss noch gemacht werden!)
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('right-answers').innerHTML = rightAnswer;
        document.getElementById('all-questions-endCard').innerHTML = questions.length;
    } else {
        let question = questions[currentQuestion];
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectetQuestionNumber = selection.slice(-1); //nimmt den letzten Buchstaben aus dem string(von der var answer_3 die 3. answer_3 wird durch onclick mit gegeben!!)

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectetQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');//mit .parentNode wählt man das übergeordnete Element aus (zB die div in dem nav tag)
        rightAnswer ++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showCurrentQuestion();

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}