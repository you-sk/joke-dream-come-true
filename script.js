document.addEventListener('DOMContentLoaded', () => {
    const dreamButton = document.getElementById('dream-button');
    const amountInput = document.getElementById('amount');
    const dreamSite = document.getElementById('dream-site');
    const bankAccount = document.getElementById('bank-account');
    const balanceDisplay = document.getElementById('balance');
    const transactionList = document.getElementById('transaction-list');

    dreamButton.addEventListener('click', () => {
        const amount = parseInt(amountInput.value) || 0;
        
        if (amount <= 0) {
            alert('金額を入力してください！');
            return;
        }

        dreamSite.classList.add('hidden');
        bankAccount.classList.remove('hidden');

        const formattedAmount = amount.toLocaleString();
        balanceDisplay.textContent = `¥${formattedAmount}`;

        const today = new Date();
        const dateStr = `${today.getFullYear()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}`;

        const transactions = [
            { date: dateStr, description: '夢の入金', amount: `+¥${formattedAmount}` }
        ];

        transactionList.innerHTML = '';
        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td style="color: #06ffa5;">${transaction.amount}</td>
            `;
            transactionList.appendChild(row);
        });

        setTimeout(() => {
            alert('夢をかなえました・・・');
        }, 1500);
    });

    amountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            dreamButton.click();
        }
    });
});