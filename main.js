questions = [
  {
    quetion: "Q 1 - HTML stands for -",

    a: "A. HighText Machine Language",
    b: "B. HyperText and links Markup Language",
    c: "C. HyperText Markup Language",
    d: "D. None of these",
    ans: "C. HyperText Markup Language",
    qno: "1"
  },
  {
    quetion: "Q 2 - The smallest 4-digit number is",
    a: "A. 1001",
    b: "B. 1000",
    c: "C. 1111",
    d: "D. 9999",
    ans: "B. 1000",
    qno: "2"
  },
  {
    quetion: "Q 3 - Which of the following numbers comes next to 999?",
    a: "A. 100",
    b: "B. 998",
    c: "C. 1000",
    d: "D. None of these",
    ans: "C. 1000",
    qno: "3"
  },
  {
    quetion: "Q 4 - Which of the following numbers is equal to 1 lakh?",
    a: "A. 100000",
    b: "B. 10000",
    c: "C. 1000",
    d: "D. 100",
    ans: "A. 100000",
    qno: "4"

  },
  {
    quetion: "Q 5 - 1 million = how many lakh?",
    a: "A. 10",
    b: "B. 100",
    c: "C. 1000",
    d: "D. 10000",
    ans: "A. 10",
    qno: "5"
  },
  {
    quetion: "Q 6 - The greatest 4-digit number is",
    a: "A. 8888",
    b: "B. 6789",
    c: "C. 9876",
    d: "D. 9999",
    ans: "D. 9999",
    qno: "6"
  },
  {
    quetion: "Q 7 - The smallest 3-digit number is",
    a: "A. 100",
    b: "B. 101",
    c: "C. 111",
    d: "D. none of these",
    ans: "A. 100",
    qno: "7"
  },
  {
    quetion: "Q 8 - The greatest 3-digit number is",
    a: "A. 991",
    b: "B. 997 ",
    c: "C. 999",
    d: "D. 998.",
    ans: "C. 999",
    qno: "8"
  },
  {
    quetion: "Q 9 - Which of the following defines a measurement in inches? ",
    a: "A. in",
    b: "B. mm",
    c: "C. pc",
    d: "D. pt",
    ans: "A. in",
    qno: "9"
  },
  {
    quetion: "Q 10 - Which of the following is a component of CSS style rule?",
    a: "A. Selector",
    b: "B. Property",
    c: "C. Value",
    d: "D. All of the above.",
    ans: "D. All of the above.",
    qno: "10"
  },

]

let my_question = document.getElementById("question");
let my_option1 = document.getElementById("option1");
let my_option2 = document.getElementById("option2");
let my_option3 = document.getElementById("option3");
let my_option4 = document.getElementById("option4");

let come;
main_area_id = document.getElementById("maincontainer");
wrapper_id = document.getElementById("wrapper");
timing = document.getElementById("time")
minutes = document.getElementById("minute");
seconds = document.getElementById("second");


// declearation of start quiz
function start_quiz() {
// function startquiz() {
  console.log("piyush");
come = document.getElementById("welcome").value;
 if(come!=""){
    wrapper_id.style.display = "none";
  main_area_id.style.display = "flex";
  
  let student_name = document.getElementById("p_name");
  student_name.innerHTML = "Good Luck Mr." + come;
  code = setInterval(interval, 1000);
 
     next_question();
 }
 else
 alert("Please Enter Your Name");
  
 

}
let s = 0;
let m = 0;
// function for declear time
function interval() {
  if (s > 59) {
    s = 0;
    m++;
  }


  s = (s < 10) ? `0${s}` : s;
  // m=(m<10)?`0${m}`:m;
  minutes.innerHTML = `Time start -:  0${m}:${s}`;
  if (questions.length<= m) {

    clearInterval(code);
    minutes.innerHTML = "Your Time Is End";
    alert("you have no more time left");
    finish();

  }
  s++;
}

let question_count = 0;
let flag;
function next_question() {
  let question_no = questions[question_count];
  my_question.innerHTML = question_no.quetion;
  my_option1.innerHTML = question_no.a;
  my_option2.innerHTML = question_no.b;
  my_option3.innerHTML = question_no.c;
  my_option4.innerHTML = question_no.d;
  my_option1.style.backgroundColor="rgb(255, 255, 255,0.7)";
  my_option2.style.backgroundColor="rgb(255, 255, 255,0.7)";
  my_option3.style.backgroundColor="rgb(255, 255, 255,0.7)";
  my_option4.style.backgroundColor="rgb(255, 255, 255,0.7)";
 
  question_count++;
  flag = question_count;
}


let count = 0;
function option(op) {

  let question_no = questions[question_count - 1];

  let chhosen_option = document.getElementById("option" + op);
  let your_option = chhosen_option.innerHTML;

  if (question_no.qno == flag) {

    if (your_option == question_no.ans) {

      count++;
      chhosen_option.style.backgroundColor="rgb(79, 79, 238)";

    }
    else{
      chhosen_option.style.backgroundColor="rgb(79, 79, 238)";
    }
    flag = 0;
  }



  console.log(count);

  // 
  // else
  // {
  //   console.log(count);
  // }
  // chhosen_option.style.backgroundColor = "rgb(255, 51, 51)";

}

function previous_question() {

  if (question_count >= 2) {
    question_count--;
    // flag=question_count;
    let question_no = questions[question_count - 1];
    my_question.innerHTML = question_no.quetion;
    my_option1.innerHTML = question_no.a;
    my_option2.innerHTML = question_no.b;
    my_option3.innerHTML = question_no.c;
    my_option4.innerHTML = question_no.d;

  }
}
submission_id=document.getElementById("after_submission");
remark_id=document.getElementById("remark");
marks_id=document.getElementById("marks");

function finish(){
  wrapper_id.style.display = "none";
  main_area_id.style.display = "none";
  submission_id.style.display="flex";
  remark_id.innerHTML="Congrats Mr."+come+" you got :- ";
  marks_id.innerHTML=count*10+" marks";
}
