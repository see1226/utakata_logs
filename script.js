document.addEventListener('DOMContentLoaded', () => {
    const passInput = document.getElementById('passInput');
    const loginScreen = document.getElementById('login-screen');
    const logScreen = document.getElementById('log-screen');
    const errorMsg = document.getElementById('errorMsg');
    const statusBadge = document.getElementById('system-status');
    const depthLevel = document.getElementById('depth-level');

    const SECRET_PASS = "1226"; // 誕生日に書き換え

    passInput.addEventListener('input', () => {
        if (passInput.value.length === 4) {
            if (passInput.value === SECRET_PASS) {
                loginScreen.classList.add('hidden');
                logScreen.classList.remove('hidden');
                document.body.style.overflow = 'auto';
                
                // ログイン後、時間経過で不穏な変化を起こす
                triggerEvents();
            } else {
                errorMsg.innerText = "ACCESS DENIED.";
                passInput.value = "";
                setTimeout(() => { errorMsg.innerText = ""; }, 2000);
            }
        }
    });

    function triggerEvents() {
        // 10秒後：ステータス異常
        setTimeout(() => {
            statusBadge.innerText = "CRITICAL ERROR";
            statusBadge.style.backgroundColor = "var(--alert)";
        }, 10000);

        // 20秒後：画面が揺れ始める（汚染開始）
        setTimeout(() => {
            depthLevel.innerText = "Level MAX (OVERFLOW)";
            depthLevel.style.color = "var(--alert)";
        }, 20000);
    }
});