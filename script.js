

// 獲取元素
const birthdayButton = document.getElementById('birthday-button');
const birthdayMessage = document.getElementById('birthday-message');

// 定義生日祝福訊息的陣列
const birthdayMessages = [
  '喵OWO!!',
  '喵喵owo!!',
  '^ↀᴥↀ^！',
  "'(=｀ω´=)'",
  'ฅ^•ﻌ•^ฅ',
];

// 定義觸發效果的函數
function triggerBirthdayEffect() {
  // 隨機選取一個生日祝福訊息
  const randomIndex = Math.floor(Math.random() * birthdayMessages.length);
  const selectedMessage = birthdayMessages[randomIndex];

  // 重置訊息的狀態
  birthdayMessage.innerText = selectedMessage;
  birthdayMessage.style.display = 'block';
  birthdayMessage.classList.add('animated-text');

  // 設定定時器，在 2 秒後隱藏訊息
  setTimeout(function() {
    birthdayMessage.style.display = 'none';
    birthdayMessage.classList.remove('animated-text');
  }, 3000);
}

// 綁定點擊事件處理函數
birthdayButton.addEventListener('click', function() {
  // 呼叫觸發效果的函數
  triggerBirthdayEffect();
});



