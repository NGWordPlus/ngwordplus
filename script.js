let playerName = "";
let score = 0;
let countdown = 5;

// NGワードリスト（500個）
const ngWords = [
  "フィラー（えーっと、なんかなど）を使う",
  "相手の名前を呼ぶ",
  "顔や髪を触る",
  "スマホを見る",
  "時計を見る",
  "10秒以上黙る",
  "天気の話をする",
  "笑う",
  "飲み物に手を伸ばす",
  "椅子に座り直す",
  "机や椅子をトントン叩く",
  "昨日・今日という言葉を使う",
  "ヤバいと言う",
  "マジでと言う",
  "話しながら手を動かす",
  "目を伏せる",
  "相手の発言に被せて話す",
  "3文字以内で返答する",
  "5秒以内に返答しない",
  "天井を見る",
  "自分から質問する",
  "すごいねと褒める",
  "逆質問する",
  "返事をはい以外でする",
  "笑顔を見せる",
  "本当？と聞く",
  "自分の考えを否定する",
  "両手を組む",
  "足を組む",
  "うなずく",
  "身振り手振りを使う",
  "無理に盛り上げる",
  "なるほどと言う",
  "会話中に目線を外す",
  "たぶんと言う",
  "1回の発言で2回以上笑う",
  "あくびする",
  "肩をすくめる",
  "知らないと言う",
  "ジェスチャーで伝えようとする",
  "手を口元に持っていく",
  "しゃべりながら腕を組む",
  "両手で顔を覆う",
  "相手の発言を遮る",
  "わかると共感する",
  "ため息をつく",
  "指を鳴らす",
  "前かがみになる",
  "手をポケットに入れる",
  "目を細める",
  "唇を噛む",
  "声を裏返す",
  "目をこする",
  "椅子を揺らす",
  "顔をしかめる",
  "両手で頬杖をつく",
  "耳を触る",
  "鼻を触る",
  "貧乏ゆすりをする",
  "小声になる",
  "話し終わったあと笑う",
  "思い出し笑いをする",
  "返事に間を空ける",
  "あいまいな表現を使う",
  "机に肘をつく",
  "早口になる",
  "急に声が大きくなる",
  "声が小さくなる",
  "腕を広げる動作をする",
  "おどおどする",
  "謝る",
  "口ごもる",
  "ごまかす",
  "相槌を打たない",
  "沈黙を長引かせる",
  "動揺を見せる",
  "髪をいじる",
  "足をバタバタさせる",
  "手を揉む",
  "体を左右に揺らす",
  "背伸びをする",
  "手遊びをする",
  "手を振る",
  "瞬きを多くする",
  "目を泳がせる",
  "相手の話をさえぎる",
  "自分の話に戻す",
  "間違いを指摘する",
  "肩を触る",
  "目を見開く",
  "視線を落とす",
  "足を踏み鳴らす",
  "相手に質問を返す",
  "説明を長くする",
  "結論を先に言う",
  "主語を省略する",
  "感想を言わない",
  "声を高くする",
  "冗談を言う",
  "無表情になる",
  "無言でうなずく",
  "疑問形で答える",
  "つい英語を使う",
  "「でも」「だけど」を使う",
  "話題を変える",
  "話し終わりに笑う",
  "急に真顔になる",
  "両手でガッツポーズする",
  "目を閉じる",
  "背を反らす",
  "片手をあげる",
  "首をかしげる",
  "口を尖らせる",
  "体を丸める",
  "声を裏返す",
  "強くうなずく",
  "口をすぼめる",
  "口元を隠す",
  "首をすくめる",
  "片足を上げる",
  "地面を見つめる",
  "壁を見る",
  "笑いながら謝る",
  "手を合わせる",
  "手をパンと叩く",
  "立ち上がる",
  "足を伸ばす",
  "顔を手で隠す",
  "突然話を変える",
  "間違いに気づかない",
  "笑いながら話す",
  "自分を褒める",
  "沈黙を恐れる",
  "話題を引き伸ばす",
  "相手に質問攻めする",
  "「ちなみに」を使う",
  "会話に詰まる",
  "苦笑いをする",
  "リズムを取るように話す",
  "不自然な間を空ける",
  "背を丸める",
  "鼻をすする",
  "まばたきを頻繁にする",
  "「なんとなく」を使う",
  "不安げな表情を見せる",
  "驚いたリアクションをする",
  "両手で顔を隠す",
  "不満げな表情を見せる",
  "意味もなく笑う",
  "声を裏返す",
  "悲しげな表情を見せる",
  "話題に詰まる",
  "妙に大声を出す",
  "机を指でトントン叩く",
  "何度も同じ話をする",
  "顔を手で覆う",
  "噛みながら話す",
  "自分の発言を撤回する",
  "急に黙り込む",
  "驚いたふりをする",
  "緊張して声が震える",
  "にやける",
  "急に目をそらす",
  "相手の真似をする",
  "自分を卑下する",
  "突然質問する",
  "意味なく話を遮る",
  "相手の発言にオウム返しする"
];


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
const changeWordButton = document.getElementById('changeWordButton');

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

// ランダムにNGワード設定
function setRandomWord() {
  const randomWord = ngWords[Math.floor(Math.random() * ngWords.length)];
  document.getElementById('playerWord').textContent = randomWord;
}

// プレイ画面表示
function showPlayScreen() {
  countdownScreen.style.display = 'none';
  playScreen.style.display = 'flex';
  playerNameDisplay.textContent = playerName;
  score = 0;
  scoreDisplay.textContent = `現在の得点：${score}点`;
  setRandomWord();
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

// お題変更ボタン
changeWordButton.addEventListener('click', () => {
  setRandomWord();
});

// トップへ戻る（ボタン）
backButton.addEventListener('click', () => {
  location.reload();
});

// ヘッダータイトル押したらトップへ戻る
headerTitle.addEventListener('click', () => {
  location.reload();
});
