let playerName = "";
let score = 0;
let countdown = 5;

// 要素取得
const topScreen = document.getElementById('topScreen');
const countdownScreen = document.getElementById('countdownScreen');
const playScreen = document.getElementById('playScreen');
const nameInput = document.getElementById('nameInput');
const startButton = document.getElementById('startButton');
const countdownNumber = document.getElementById('countdownNumber');
const playerNameDisplay = document.getElementById('playerName');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const scoreDisplay = document.getElementById('scoreDisplay');
const backButton = document.getElementById('backButton');
const headerTitle = document.getElementById('headerTitle');

// スタートボタン押したとき
startButton.addEventListener('click', () => {
  playerName = nameInput.value.trim();
  if (playerName === "") {
    alert("名前を入力してください！");
    return;
  }
  topScreen.style.display = 'none';
  countdownScreen.style.display = 'flex';
  startCountdown();
});

// カウントダウン処理
function startCountdown() {
  countdownNumber.textContent = countdown;
  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      countdownNumber.textContent = countdown;
    } else {
      clearInterval(interval);
      showPlayScreen();
    }
  }, 1000);
}

// プレイ画面表示
function showPlayScreen() {
  countdownScreen.style.display = 'none';
  playScreen.style.display = 'flex';
  playerNameDisplay.textContent = playerName;
  score = 0;
  scoreDisplay.textContent = `現在の得点：${score}点`;
}

// 点数加算
plusButton.addEventListener('click', () => {
  score += 5;
  scoreDisplay.textContent = `現在の得点：${score}点`;
});

// 点数減算
minusButton.addEventListener('click', () => {
  score -= 1;
  scoreDisplay.textContent = `現在の得点：${score}点`;
});

// トップへ戻る（ボタン）
backButton.addEventListener('click', () => {
  location.reload();
});

// ヘッダータイトル押したらトップへ戻る
headerTitle.addEventListener('click', () => {
  location.reload();
});
