let arr=
[
    {
      quetion: "Q 1 - HTML stands for -",
  
      a: "A. HighText Machine Language",
      b: "B. HyperText and links Markup Language",
      c: "C. HyperText Markup Language",
      d: "D. None of these",
    //   ans: "C. HyperText Markup Language",
      ans: "c",
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
  
  ];


let maincontainer=document.querySelector(".maincontainer");
   
let index=0;
function start_quiz(){
    let input=document.querySelector("input");
    let wrapper=document.querySelector(".wrapper");
    
    
    localStorage.setItem("participent_name",input.value)
    if(input.value!=""){
        wrapper.style.display="none";
        maincontainer.style.display="flex";
        show_quiz();
    }
    
    else{
        alert("please write something");
    }
}
function show_quiz(){

    let footer=document.querySelector(".footer");
    let html="";
    html=`<ul>
    <h2 id="question">${arr[index].quetion}</h2>  
  <li onclick="option(${arr[index].a})">${arr[index].a}</li>
  <li onclick="option()">${arr[index].b}</li>
  <li onclick="option()">${arr[index].c}</li>
  <li onclick="option()">${arr[index].d}</li>
  <div class="button">
  <button id="next_question"onclick="next_question()">Next Question</button>
  <button id="finish"onclick="finish()">Submit</button>
  <button id="previous_question" onclick="previous_question()">Previous Question</button>
</div>
</ul>`
footer.innerHTML=html;
}
function next_question(){
    if(index>=0&&index<arr.length-1){
        index++;
    show_quiz();
    }  
}
function previous_question(){
    if(index>0&&index<arr.length)
    index--;
    show_quiz();
}
function finish(){
    let participent_name=localStorage.getItem("participent_name");
    let remark=document.querySelector(".remark");
    let after_submission=document.querySelector(".after_submission");
    let h2=remark.querySelectorAll("h2");
    maincontainer.style.display="none";
    after_submission.style.display="flex";
    h2[0].innerText=`congrats ${participent_name} you got :-`
    h2[1].innerText=`10 marks`;
}

function option(var1){
    console.log(var1);
}