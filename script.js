document.addEventListener('DOMContentLoaded', () => {
    const passInput = document.getElementById('passInput');
    const loginScreen = document.getElementById('login-screen');
    const logScreen = document.getElementById('log-screen');
    const errorMsg = document.getElementById('errorMsg');

    // 誕生日の4桁を設定
    const SECRET_PASS = "1226"; 

    passInput.addEventListener('input', () => {
        if (passInput.value.length === 4) {
            if (passInput.value === SECRET_PASS) {
                loginScreen.classList.add('hidden');
                logScreen.classList.remove('hidden');
            } else {
                errorMsg.innerText = "ACCESS DENIED.";
                passInput.value = "";
                setTimeout(() => { errorMsg.innerText = ""; }, 2000);
            }
        }
    });
});