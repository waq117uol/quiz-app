const quizData = [
    {
        question:"How Old Is Harry?",
        a:"10",
        b:"20",
        c:"30",
        d:"40",
        correct:"c",
    },
    {
        question:"which is the best language for web development?",
        a:"java",
        b:"javascript",
        c:"c+=",
        d:"c",
        correct:"b",
    },
    {
        question:"which is the best backend language in webdev",
        a:"c++",
        b:"php",
        c:"java",
        d:"python",
        correct:"b",
    },
    {
        question:"which is the best backend language in app dev",
        a:"c++",
        b:"php",
        c:"java",
        d:"python",
        correct:"b",
    },
    {
        question:"which is the best backend language in webdev",
        a:"c++",
        b:"php",
        c:"java",
        d:"python",
        correct:"b",
    },

];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");




let currentQuiz=0;
// let answer=undefined;
let score=0;

loadQuiz();


function loadQuiz(){
    deselectAnswer();
    const currentQuizData= quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText =currentQuizData.a;
    b_text.innerText =currentQuizData.b;
    c_text.innerText =currentQuizData.c;
    d_text.innerText =currentQuizData.d;




  
}

function getSelected(){
   
    let answer=undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer= answerEl.id;
             
        }
    });

    return answer;
}


function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
       answerEl.checked=false;
            
    });
}
submitBtn.addEventListener("click",()=> {
     
    //!check to se the answer
    const answer= getSelected();

    if(answer){
        if(answer)
        {
            if(answer === quizData[currentQuiz].correct){
                score++ 
            }
            currentQuiz++;
            if(currentQuiz<quizData.length){
                loadQuiz();
            }else{
                quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
            }
        }
    }
});

    
    
  
    
       
  