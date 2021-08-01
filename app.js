var quizArr = [
    { 
        Number : 1,
        ques :  "What does HTML stand for ?",
        option: {
          a : "Hyper Text Markup Language",
          b : "Hyper Text Makeup Language",
          c : "Hyper Tool Markup Language",
          d : "Hyper Links and Text Markup Language",

        },
        answer: "Hyper Text Markup Language"
},

{
    Number : 2,
    ques :  "Choose the correct HTML element for the largest heading: ",
    option: {
      a : "h6",
      b : "heading",
      c : "h1",
      d : "head",

    },
    answer: "h1"
},


{
    Number : 3,
    ques :  "What is the correct HTML element for inserting a line break?",
    option: {
      a : "br",
      b : "lb",
      c : "break",
      d : "linebreak",

    },
    answer: "br"
},


{
    Number : 4,
    ques :  "Inline elements are normally displayed without starting a new line.",
    option: {
      a : "True",
      b : "False",
      c : "Maybe",
      d : "No idea",

    },
    answer: "False"
},



{
    Number : 5,
    ques :  "How can you make a numbered list?",
    option: {
      a : "ol",
      b : "ul",
      c : "dl",
      d : "list",

    },
    answer: "ol"
},



{
    Number : 6,
    ques :  "How can you make a bulleted list?",
    option: {
        a : "ol",
        b : "ul",
        c : "dl",
        d : "list",


    },
    answer: "ul"
}

]



var name = document.getElementById("name");
var startBtn = document.getElementById("startBtn")
var quizQues = document.getElementById("quizQues")
var option = document.getElementsByClassName("option") 
var quizApp = document.getElementById("quizApp")
var btn = document.getElementsByClassName("btn")
var cont  = document.getElementById("cont")
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var Btn = document.getElementById('Btn');
var timer;
var hours = 0;
var seconds = 0;
var mins = 0;
var sub  = "Submit";

for(var i = 0; i<4; i++){
    option[i].setAttribute("onclick" , "select(this)")
    // option[i].setAttribute("class", "disabled")    
}


function startQuiz(btn){
    btn.classList.add("hide")
    quizApp.classList.remove("hide")
    cont.classList.remove("hide")
    timer = setInterval(function(){
        seconds ++;
    

        if(seconds >= 60){
            mins ++;
            seconds = 0;
        }

        if(mins >= 60)
        {
            hours ++;
            mins =0;
            seconds = 0
        }
        sec.innerHTML = seconds;
        min.innerHTML = mins;
        hour.innerHTML = hours;
        
        // console.log(sec);
    
    },500)

    // className = "none"

    quesChange();

}


var count = 0;
function quesChange(li){
    quizQues.innerHTML = quizArr[count].ques
    console.log(quizArr[count].ques);
    

    option[0].innerHTML = quizArr[count].option.a
    option[1].innerHTML = quizArr[count].option.b
    option[2].innerHTML = quizArr[count].option.c
    option[3].innerHTML = quizArr[count].option.d

    

    for(var i = 0; i<4; i++){
        // option[i].setAttribute("onclick" , "select(this)")
        option[i].classList.remove("correct");
        option[i].classList.remove("wrong");
        option[i].classList.remove("disable");

    }
    btn[0].className = "btn"

if(!(count == quizArr.length-1)){
    count++
}
else{
 btn.innerHTML = "Finish"
//    btn.innerHTML = sub
    console.log(btn.innerHTML);
    // document.getElementById("option").style.listStyleType = "none";
    // li.style.listStyleType = "none";
    // quizQues.innerHTML = name.value;
    // console.log(quizQues.innerHTML)
    // option[0].innerHTML = "Total Questions" + " = " + quizArr.length ;
    // option[1].innerHTML = "Wrong Questions" + " = " + wrongAnswer;
    // option[2].innerHTML = "Correct Questions" + " = " + correctAnswer;
    // option[3].innerHTML = "Percentage: "


}


}

var score = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var counter = 0;
function select(li){
    console.log(quizArr[0].answer);
    console.log(li.innerHTML);
    if(li.innerHTML === quizArr[counter].answer){
        console.log("true");
        li.classList.add("correct");
        // btn[0].classList.remove("btn")
        score = score + 10;
        correctAnswer = correctAnswer + 1;
    }
    else{
        console.log("false")
        li.classList.add("wrong")
        wrongAnswer = wrongAnswer +1 ;
    }
    for(var i = 0; i<4; i++){
        // option[i].setAttribute("onclick" , "select(this)")
        option[i].classList.add("disable");

}
counter++
console.log(score);
}