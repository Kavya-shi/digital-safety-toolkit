function checkAnswer(answer) {
    if (answer === 'no') {
        document.getElementById("result").innerText = "✅ Correct! Never share OTP.";
    } else {
        document.getElementById("result").innerText = "❌ Wrong! OTP should never be shared.";
    }
}