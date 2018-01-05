function submitAnswers(){
    var total = 5;
    var score = 0;

    // get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // form validation


    
    for(i=1; i <= total; i++){
        if (eval('q' +i) == null || eval('q' +i) == ''){
            alert("You missed question " + i);
            return false;
        }

    }
    // Set Correct Answers
    var answers = ["a", "a", "d", "b", "d"];

    // check the answers
    for(i=1; i <= total; i++){

        if(eval('q'+i) == answers[i - 1]){
            score ++;
        }
}
    //Display result 
    var results = document.getElementById("results");
    results.innerHTML = "<h1>You have scored <strong>"+score+ "</strong> out of " + total + "</h1>";
    return false;
}
