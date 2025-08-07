const nameInput = document.getElementById('name');
const birthdayInput = document.getElementById('birthday');
const generateButton = document.getElementById('generate');
const resultDiv = document.getElementById('result');

generateButton.addEventListener('click', () => {
    const name = nameInput.value;
    const birthday = birthdayInput.value;

    if (name && birthday) {
        const seed = name + birthday;
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash += seed.charCodeAt(i);
        }
        const luckyNumber = (hash % 100) + 1;

        let message = '';
        let color = '';

        if (luckyNumber >= 1 && luckyNumber <= 20) {
            message = '素晴らしい幸運が訪れるでしょう！';
            color = 'gold';
        } else if (luckyNumber >= 21 && luckyNumber <= 40) {
            message = '良い一日になりそうです。';
            color = 'lightgreen';
        } else if (luckyNumber >= 41 && luckyNumber <= 60) {
            message = '落ち着いて行動すれば、物事は順調に進みます。';
            color = 'lightblue';
        } else if (luckyNumber >= 61 && luckyNumber <= 80) {
            message = '少し注意が必要な日です。慎重に行動しましょう。';
            color = 'lightcoral';
        } else {
            message = '新しい挑戦には最適な日です！';
            color = 'lightpink';
        }

        resultDiv.innerHTML = `
            <p>${name}さんの今日のラッキーナンバーは「${luckyNumber}」です！</p>
            <p>${message}</p>
        `;
        document.body.style.backgroundColor = color;
    } else {
        resultDiv.innerHTML = '<p>名前と誕生日を入力してください。</p>';
    }
});