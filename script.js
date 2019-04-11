'use strict';

const STORE = [{
  quNum: 1,
  question: 'What other worldly object moves our planets water up and down (tides)?',
  answers: ['The Moons gravtational interaction with Earth','The Deathstar tracter beam', 'Elon Musks orbiting Tesla',
  'Earths rotation around the Sun' 
  ], 
  correctAnswer: 'The Moons gravtational interaction with Earth'
}, {
  quNum: 2,
  question: 'The time bewteen the rise and fall of the tides is called:',
  answers: ['Slack tide', 'Neap tide', 'No tide', 'Spring tide'],
  correctAnswer: 'Slack tide'
}, {
  quNum: 3,
  question: 'The best time to dive a current sensitive site is:',
  answers: ['Slack tide', 'Low tide', 'High tide', 'Makes no difference'],
  correctAnswer: 'Slack tide'
}, {
  quNum: 4,
  question: 'The max current felt in a tidal exchange occurs during:',
  answers: ['Winter storms', 'High winds', 'Max high to max low tidal exchange', 'Blood moon'],
  correctAnswer: 'Max high to max low tidal exchange'
}, {
  quNum: 5,
  question: 'Youre on a vertical wall during an aggressive ebb tide, you will experiance:',
  answers: ['Waterfall current', 'Jet stream', 'Cold water upwelling', 'Whirlpool'],
  correctAnswer: 'Waterfall current'
}];

let questionNumber = 0;
let numRight = 0;

function renderQuizSheet() {
  if (questionNumber < STORE.length) {
  $('#container').html(
  `<header role="heading">
    <div class="header correctNum">${numRight}/5 correct</div>
    <div class="header questionNum">${STORE[questionNumber].quNum}/5 questions</div>
   </header>
    <div class="${questionNumber}">
      <h3>${STORE[questionNumber].question}</h3>
        <section role="contentinfo">
          <form>
            <label>
              <input class="answers" type="radio" name="answer" value="${STORE[questionNumber].answers[0]}"><span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label>  
              <input class="answers" type="radio" name="answer" value="${STORE[questionNumber].answers[1]}"><span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label>  
              <input class="answers" type="radio" name="answer" value="${STORE[questionNumber].answers[2]}"><span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label> 
              <input class="answers" type="radio" name="answer" value="${STORE[questionNumber].answers[3]}"><span>${STORE[questionNumber].answers[3]}</span>
            </label>  
            <input class="submitButton" type="submit">
          </form>  
        </section>
        </div>`).hide().fadeIn(2000);
  } else {
    totalScoreIs();
  }
};

function startQuiz() {
  $('#container').on('click', '.start', function(event) {
    renderQuizSheet();
  });
};

function submitAnswer() {
  $('#container').on('click', '.submitButton', function(event) {
    event.preventDefault();
    let userAnswer = $('input:checked');
    let answer = userAnswer.val();
    let rightAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === rightAnswer) {
      correctAnswer();
      showNumCorrect();
    } else {
      showCorrectAnswer();
    }
  });
};

function showNumCorrect() {
  numRight++;
};

function correctAnswer() {
  $('#container').html(`
    <div id="greatJob">
      <p class="great">GREAT JOB! You Choose Wisely!</p>
      <img id="wave" src="https://piskel-imgstore-b.appspot.com/img/900c9826-5c10-11e9-a929-9754738d1ad7.gif" alt="wave animation">
      <button type="button" value="button" class="nextQuestion">Keep Exploring</button>
    </div>
  `).hide().fadeIn(1000);
};

function showCorrectAnswer() {
  $('#container').html(`
    <div id="badJob"> 
      <p class="great">You choose poorly, you are now one with the sea</p>
      <div id="correctAnswerDisplay">The correct answer is: ${STORE[questionNumber].correctAnswer}</div>
      <img id="ship" src="https://piskel-imgstore-b.appspot.com/img/3296af99-5c00-11e9-846d-e39355bb3972.gif" alt="sinking ship animation">
      <button type="button" value="button" class="nextQuestion">Escape the sea</button>
    </div>
  `).hide().fadeIn(1000); 
};

function nextQuestionUp() {
  $('#container').on('click', '.nextQuestion', function() {
    questionNumber++;
    renderQuizSheet();
  });
};

function totalScoreIs() {
  $('#container').html(
    `<div class="finalScore">${numRight}/5 correct</div>
    <button type="button" class="startAgain">Play Again?</button>
    <div class="finalDisplay"></div>
    `);
   displayResults(); 
};

function displayResults() {
  if (numRight >2) {
    $('.finalDisplay').html(`
     <div class="fish"> 
      <p class="endIt">Ride those tides!<p>
      <img class="deadFish" src="https://piskel-imgstore-b.appspot.com/img/4c484e63-5c1c-11e9-8c34-0ddba497167b.gif" alt="dead fish animation">
     </div>
    `);
  } else {
    $('.finalDisplay').html(`
      <div class="fish"> 
      <p class="endIt">Dryland is your friend!</p>
      <img class="deadFish" src="https://piskel-imgstore-b.appspot.com/img/88de9e38-5c19-11e9-a1e8-0ddba497167b.gif" alt="sun animation">
     </div>
    `);
  }
};

function startOver() {
  $('#container').on('click', '.startAgain', function() {
    location.reload();
  });
};

function runThisBadBoy() {
  startQuiz();
  nextQuestionUp();
  submitAnswer();
  startOver();
};

$(runThisBadBoy);