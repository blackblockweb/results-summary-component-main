let result = document.getElementById("result");

let Reaction = document.getElementById("react");

let memory = document.getElementById("emory");

let Verbal = document.getElementById("verb");

let Visual = document.getElementById("Visu");

let submit = document.getElementById("submit");

let degree = document.getElementById("degree");

let message = document.getElementById("message");


submit.onclick = function () {
 let total = ( +Reaction.value + +memory.value + +Verbal.value + +Visual.value) / 400;
   let total2 = total * 100;
 result.innerHTML = total2;

 if (total2 >= 85) {
    degree.innerHTML = "Excellelt" ;
    message.innerHTML = "You scored higher than 65% of the people who have taken these tests.";
    }else if(total2 >= 75){
        degree.innerHTML = "Very Good" ;
        message.innerHTML = "You scored higher than 45% of the people who have taken these tests.";
    }else if(total2 >= 70){
        degree.innerHTML = "Good" ;
        message.innerHTML = "You scored higher than 30% of the people who have taken these tests.";
    }else if(total2 >= 50){
        degree.innerHTML = "passed" ;
        message.innerHTML = "You scored higher than 10% of the people who have taken these tests.";
    }else{
        degree.innerHTML = "Not passed" ;
        message.innerHTML = "You should be Sad because you are Not passed and You Should study hard and take the tast again";
    }
}

