document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    console.log('cash out button clicked');
    event.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    const cashOutNumber = parseFloat(cashOut);
    // wrong way to verify pin number
    if (pinNumber === '4404') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        //reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        // update the UI
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to cash out. Please try again later')
    }

})