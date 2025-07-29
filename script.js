document.addEventListener('DOMContentLoaded', () => {
    const dreamButton = document.getElementById('dream-button');
    const amountInput = document.getElementById('amount');
    const dreamSite = document.getElementById('dream-site');
    const bankAccount = document.getElementById('bank-account');
    const balanceDisplay = document.getElementById('balance');
    const transactionList = document.getElementById('transaction-list');
    const lastLoginSpan = document.getElementById('last-login');
    const modal = document.getElementById('modal');
    const modalCloseBtn = document.getElementById('modal-close');

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
        const dateStr = `${today.getFullYear()}年${(today.getMonth() + 1)}月${today.getDate()}日`;
        const timeStr = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;
        
        lastLoginSpan.textContent = `${dateStr} ${timeStr}`;

        transactionList.innerHTML = '';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dateStr}</td>
            <td>振込入金</td>
            <td>-</td>
            <td>¥${formattedAmount}</td>
            <td>¥${formattedAmount}</td>
        `;
        transactionList.appendChild(row);

        setTimeout(() => {
            modal.classList.remove('hidden');
        }, 5000);
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    amountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            dreamButton.click();
        }
    });
});