
//Object to declar question and answer

const quizQuestions = [{
    question: "Q1: What is the full form of HTML?",
    a: "Hello to my Land.",
    b: "hey text Markup Launguage",
    c: "HyperText Makeup Launguage.",
    d: "HyperText Markup Launguage.",
    ans: "ans4"

},
{
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheet.",
    b: "Cascading Style sheep.",
    c: "Carton Style Sheet.",
    d: "Cascading Style Format.",
    ans: "ans1"

},
{
    question: "Q3: What is the full form of HTTP?",
    a: "HyperText Transfer Project",
    b: "HyperText text Project",
    c: "Hyper Transfer Protocol.",
    d: "HyperText Transfer Protocol..",
    ans: "ans4"
},
{
    question: "Q4: What is the full form of JS?",
    a: "JavaScript",
    b: "Java Script",
    c: "Java System",
    d: "Just Script",
    ans: "ans1"
},
{
    question: "Q5: What does consol.log() command use for?",
    a: "Declare Variable",
    b: "it is an Array",
    c: "Prints the value in consol",
    d: "Function",
    ans: "ans3"
}
];

//Dom Variable
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const statQuizBtn = document.querySelector('.statQuizBtn');
const questionDiv = document.querySelector('.inner-div');
const codingQZ = document.querySelector('#codingQZ');
const timeCounter = document.querySelector('#timer');
var radList = document.getElementsByName('answer');
var finalScore = document.querySelector('#finalScore');
//var reloadPage = document.querySelector('.reloadPage');
var submitbtn = document.querySelector('.submitbtn');
var nameID = document.querySelector("#studentID");
const alertMessage = document.getElementById('alert');

var score;
let questionCount = 0;
let timer = 50;
var interval;
var studentsData=[];

function showDiv() {
    //  event.preventDefault();
    questionDiv.classList.remove("div-hidden");
    timeCounter.classList.remove("div-hidden");
    codingQZ.classList.add("div-hidden");
    statQuizBtn.classList.add("div-hidden");
}

var finalScoreF = function () {
    // event.preventDefault();
    questionDiv.classList.add("div-hidden");
    showScore.classList.remove('ScoreArea');
    clearInterval(interval);
    
    if (timer <= 0) {
        score = 0;
        timer = 0;
    
        finalScore.textContent = "Your Score: " + timer;
        timeCounter.textContent = "Time: " + timer;
        
    }
    else {
        score = timer;
        finalScore.textContent = "Your Score: " + timer;
        timeCounter.textContent = "Time: " + timer;
         }    
}

statQuizBtn.addEventListener('click', () => {
    showDiv();
    interval = setInterval(() => {
        timer--;
        timeCounter.textContent = "Time: " + timer;
        if (timer <= 0) {
            timer = 0;
            finalScoreF(); 
        }
    },
        1000);
});
const loadQuestion = () => {

    const questionList = quizQuestions[questionCount];
    question.innerHTML = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
//Check this function 
function clearAllRadios() {
    radList.value = false
}

//*** */
loadQuestion();

//this function will get the answer selected by the user 

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    //When Loop is finsh this is passing the ID of the radio button to the answer.
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    clearAllRadios();

    if (checkedAnswer == null) {
        alert("plese select your answer!");


        return false;
        //Need to apply time function here
    }
    else if (checkedAnswer === quizQuestions[questionCount].ans) {
        alert("Correct!");

    }
    if (checkedAnswer != quizQuestions[questionCount].ans) {
        timer = timer - 10;
        alert("wrong!");

    }
    else if (timer <= 0) {
        timer = 0;
        finalScoreF();
    }


    questionCount++;

    if (questionCount < quizQuestions.length && timer != 0) {
        loadQuestion();

           }
    else {
        finalScoreF();
    }
   

});

function addToStorage ()
{

    var Students = {
    name: nameID.value,
    grade: score};

      studentsData = JSON.parse(localStorage.getItem("Students")); // Student info is added to Local storage data
    // push the user input into the converted object array
    if(studentsData == null)
    {
        studentsData=[];
    }
    studentsData.push(Students);

     // convert string to json data
    //  let studentInformation = JSON.stringify(students);
    // localStorage.setItem("Students", studentInformation);

    localStorage.setItem('Students',JSON.stringify(studentsData));
    location.href="./score.html";
}

submitbtn.addEventListener("click", function () {
    addToStorage();
    /*if (nameID.value == false) {
        alert("Pleae enter your name ");
        return;
        

    }
    else {
        addToStorage();
    }*/
});
            //console.log(localStorage);
            /*
          if(localStorage.getItem('data') == null)
          {
              localStorage.setItem('data', '[]');
          }
          var oldData =JSON.parse(localStorage.getItem('data'));
          oldData.push({studentsData});
          localStorage.setItem('data', oldData);

           /* studentInformationStore = localStorage.setItem("studentInformation", JSON.stringify(students));
            studentInformation = localStorage.getItem("student");
            
            var studentInformationStore = JSON.parse(studentInformation));
            //studentInformation.(studentInformationStore)
            //studentInformation.(studentInformationStore)
            console.log(studentInformationStore);
       }*/
       //studentInformation.push(studentInformationStore);


          /* studentInformation = localStorage.getItem("student");
           var studentInformationStore = JSON.parse(studentInformation);
           
        if (studentInformationStore == null) {
            studentInformation = [];
          }
         
          localStorage.setItem("students", JSON.stringify(studentInformation));
         location.href = "scores.html";

        }*/
    



   /* for(let i = 0; i<localStorage.length; i++)
        {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            console.log(value);
        }
        
        //location.href = "./score.html";*/
    



