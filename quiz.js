function CheckAnswer() {
    const correctAnswer = "4";

    const userAnswer = document.querySelector('input[name = "quiz"]:checked  ').value;

    if(userAnswer === correctAnswer){
        let feedback = document.getElementById('feedback');
        feedback.textContent = "Correct! Well done!";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
    }
}

let btn = document.getElementById('submit-answer');
btn.addEventListener('click', CheckAnswer);