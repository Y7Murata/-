// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
  text.textContent('ボタンをクリックしました');
}, 2000);

// 要素に「これはリスト要素です」というテキストを追加する
text.textContent = 'ボタンをクリックしました';

})
