const closeModal = document.getElementById('close-modal');
modal = document.getElementById('my_modal_1');

document.getElementById('add-money-btn-1')
    .addEventListener('click', function () {
        const mainBalance = getInputFieldInnerTextById('main-balance');
        const donateMoney = getInputFieldInnerTextById('donate-money-1');
        const addMoney = getInputFieldValueById('add-money-input-1');
        if (addMoney > 0 && mainBalance > 0) {
            const balance = mainBalance - addMoney;
            document.getElementById('main-balance').innerText = balance;
            const donate = donateMoney + addMoney;
            document.getElementById('donate-money-1').innerText = donate;

            modal.classList.add('modal-open');

            const historyDetails = document.createElement("div");
            historyDetails.className = 'mb-4 p-4 rounded-xl border';
            historyDetails.innerHTML = `
        <p class="text-xl font-bold text-common_light_color">${addMoney} Taka is Donate for Flood at Noakhali, Bangladesh.</p>
        <p class="text-base text-common_gray_color">Donate Date & Time: ${new Date().toString()}</p>
        `
            const allHistory = document.getElementById('donate-history');
            allHistory.appendChild(historyDetails);
        }
        else {
            alert('Sorry! Your Donation is Failed. Please try again.')
        }
    })
closeModal.addEventListener('click', function () {
    modal.classList.remove('modal-open');
})

document.getElementById('add-money-btn-2')
    .addEventListener('click', function () {
        const mainBalance = getInputFieldInnerTextById('main-balance');
        const donateMoney = getInputFieldInnerTextById('donate-money-2');
        const addMoney = getInputFieldValueById('add-money-input-2');
        if (addMoney > 0 && mainBalance > 0) {
            const balance = mainBalance - addMoney;
            document.getElementById('main-balance').innerText = balance;
            const donate = donateMoney + addMoney;
            document.getElementById('donate-money-2').innerText = donate;

            modal.classList.add('modal-open');

            const historyDetails = document.createElement("div");
            historyDetails.className = 'mb-4 p-4 rounded-xl border';
            historyDetails.innerHTML = `
        <p class="text-xl font-bold text-common_light_color">${addMoney} Taka is Donate for Flood Relief in Feni, Bangladesh.</p>
        <p class="text-base text-common_gray_color">Donate Date & Time: ${new Date().toString()}</p>
        `
            const allHistory = document.getElementById('donate-history');
            allHistory.appendChild(historyDetails);
        }
        else {
            alert('Sorry! Your Donation is Failed. Please try again.')
        }
    })
closeModal.addEventListener('click', function () {
    modal.classList.remove('modal-open');
})

document.getElementById('add-money-btn-3')
    .addEventListener('click', function () {
        const mainBalance = getInputFieldInnerTextById('main-balance');
        const donateMoney = getInputFieldInnerTextById('donate-money-3');
        const addMoney = getInputFieldValueById('add-money-input-3');
        if (addMoney > 0 && mainBalance > 0) {
            const balance = mainBalance - addMoney;
            document.getElementById('main-balance').innerText = balance;
            const donate = donateMoney + addMoney;
            document.getElementById('donate-money-3').innerText = donate;

            modal.classList.add('modal-open');

            const historyDetails = document.createElement("div");
            historyDetails.className = 'mb-4 p-4 rounded-xl border';
            historyDetails.innerHTML = `
        <p class="text-xl font-bold text-common_light_color">${addMoney} Taka is Donate for Aid for Injured in the Quota Movement.</p>
        <p class="text-base text-common_gray_color">Donate Date & Time: ${new Date().toString()}</p>
        `
            const allHistory = document.getElementById('donate-history');
            allHistory.appendChild(historyDetails);
        }
        else {
            alert('Sorry! Your Donation is Failed. Please try again.')
        }
    })
closeModal.addEventListener('click', function () {
    modal.classList.remove('modal-open');
})

const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', function () {
    historyBtn.classList.add('bg-blog_btn_color');
    donationBtn.classList.remove('bg-blog_btn_color');

    document.getElementById('home-main').classList.add('hidden');
    document.getElementById('donate-section').classList.remove('hidden');
})

donationBtn.addEventListener('click', function () {
    donationBtn.classList.add('bg-blog_btn_color');
    historyBtn.classList.remove('bg-blog_btn_color');

    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('home-main').classList.remove('hidden');
})