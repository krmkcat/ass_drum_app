


// ここから下はタイマーのコード
const totalTime = 10;

// タイマーの更新間隔（ミリ秒）
const updateInterval = 1000;

// タイマー表示用の要素を取得
const timerElement = document.createElement('p');
const startButton = document.querySelector('#start-button');

// タイマーを開始する関数を定義
function startTimer() {
  let timeLeft = totalTime;
  timerElement.textContent = `残り時間：${timeLeft}秒`;
  startButton.replaceWith(timerElement);

  const timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer); // タイマーを停止
      // タイムアップ時の処理をここに追加
      const count = document.querySelector('.counter').textContent;
      if (sessionStorage.getItem('count')) {
        sessionStorage.removeItem('count');
      }
      sessionStorage.setItem('count', count);
      location.pathname = '/result';
    } else {
      timerElement.textContent = `残り時間：${timeLeft}秒`;
      timeLeft--;
    }
  }, updateInterval);

  const ass = document.querySelector('.ass');
  ass.addEventListener('click', function () {
    if (timeLeft > 0) {
      const counter = document.querySelector('.counter');
      counter.textContent = parseInt(counter.textContent) + 1;
    }
  });
}

// タイマーを開始
startButton.addEventListener('click', startTimer);