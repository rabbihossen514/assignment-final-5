document.getElementById('add-money-btn-1')
    .addEventListener('click', function () {
        const mainBalance = getInputFieldInnerTextById('main-balance');
        const donateMoney = getInputFieldInnerTextById('donate-money-1');
        const addMoney = getInputFieldValueById('add-money-input-1');
        if (addMoney > 0) {
            const balance = mainBalance - addMoney;
            document.getElementById('main-balance').innerText = balance;
            const donate = donateMoney + addMoney;
            document.getElementById('donate-money-1').innerText = donate;
            alert('Congratulations')
        }
        else {
            alert('invalid input.')
        }
    })

document.getElementById('add-money-btn-2')
    .addEventListener('click', function () {
        const mainBalance = getInputFieldInnerTextById('main-balance');
        const donateMoney = getInputFieldInnerTextById('donate-money-2');
        const addMoney = getInputFieldValueById('add-money-input-2');
        if (addMoney > 0) {
            const balance = mainBalance - addMoney;
            document.getElementById('main-balance').innerText = balance;
            const donate = donateMoney + addMoney;
            document.getElementById('donate-money-2').innerText = donate;
            alert('Congratulations')
        }
        else {
            alert('invalid input.')
        }
    })

document.getElementById('add-money-btn-3')
    .addEventListener('click', function () {
        const mainBalance = getInputFieldInnerTextById('main-balance');
        const donateMoney = getInputFieldInnerTextById('donate-money-3');
        const addMoney = getInputFieldValueById('add-money-input-3');
        if (addMoney > 0) {
            const balance = mainBalance - addMoney;
            document.getElementById('main-balance').innerText = balance;
            const donate = donateMoney + addMoney;
            document.getElementById('donate-money-3').innerText = donate;
            alert('Congratulations')
        }
        else {
            alert('invalid input.')
        }
    })
// document.getElementById('add-money-btn-2')
//     .addEventListener('click', function () {
//         const addMoney2 =
//     })