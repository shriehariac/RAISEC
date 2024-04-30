let dict = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

const StartBtn = document.querySelector('.start-btn');
const Popup = document.querySelector('.popup');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const question = document.querySelector('.questionSection');
const questionBox = document.querySelector('.question-box');
const nextBtn = document.querySelector('.next-btn');
const Popupresult = document.querySelector('.popup-result');

StartBtn.onclick = () => {
    Popup.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    Popup.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = () => {
    question.classList.add('active');
    Popup.classList.remove('active');
    main.classList.remove('active');
    showQuestions(0);
};

let questionCount = 0;
const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}.${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].Option[0]}</span></div>
                     <div class="option"><span>${questions[index].Option[1]}</span></div>`;
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');



    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener('click', function (event) {
            event.preventDefault();
            const selectedOptionText = option[i].textContent.trim();
            try {
                questionCount++;
                showQuestions(questionCount);
            } catch {
                let entries = Object.entries(dict);

                entries.sort((a, b) => b[1] - a[1]);
                console.log(entries);

                topThree = entries.slice(0, 3);
                console.log(topThree)
                Popupresult.classList.add('active');
                main.classList.add('active');
                const content = ['R', 'I', 'A', 'S', 'E', 'C'];

                for (let i = 0; i < topThree.length; i++) {
                    if (!content.includes(topThree[i])) {
                        document.querySelector(`.${topThree[i][0]}`).classList.toggle(`hide`);
                    }
                }
            }
            if (selectedOptionText === "True") {
                const questionId = questions[index].id;

                if (dict[questionId] < 7) {
                    dict[questionId]++;
                    console.log(dict);
                }
            }
        });
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    console.log(userAnswer);
}
