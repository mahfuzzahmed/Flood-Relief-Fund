let totalNoakhaliFund = 0;
let myBalance = 5500;

// noakhali button
document.getElementById('btn-noakhali').addEventListener('click', function () {

    const noakhaliDonationAmount = getInputValueById('noakhali-input')
    // number validation
    if (isNaN(noakhaliDonationAmount) || noakhaliDonationAmount < 0 || noakhaliDonationAmount > myBalance ) {
        return alert('Invalid Donation Amount')
    }
    else {
        totalNoakhaliFund = noakhaliDonationAmount + totalNoakhaliFund

        const noakhaliBalance = document.getElementById('total-n-donation')
        noakhaliBalance.innerText = totalNoakhaliFund.toFixed(2);

        document.getElementById('noakhali-input').value = '';


        // history
        const historyItems = document.createElement('div');
        historyItems.className = "container border border-gary-500 mx-auto rounded-lg p-8"
        historyItems.innerHTML = `
    <p class="text-xl font-bold">${noakhaliDonationAmount} Taka is Donated for Flood at Noakhali, Bangladesh </p>
    <p class="text-base mt-4 text-gray-500">Date : ${new Date().toString()}</p>
    
    
    `
        const historyContainer = document.getElementById('history-items')

        historyContainer.insertBefore(historyItems, historyContainer.firstChild)

        // my balance
      

        myBalance = myBalance - noakhaliDonationAmount
     

        document.getElementById('my-balance').innerText = myBalance

        // modal
        const myModal = document.getElementById('my_modal_1');
        myModal.showModal();

    }


})


// button activation
document.getElementById('noakhali-input').addEventListener('input', function () {
    document.getElementById('btn-noakhali').removeAttribute("disabled")
})




// toggling buttons
document.getElementById('show-btn-donation').addEventListener('click',function(){

    showButtons('collection')

    activationStyles('show-btn-donation', 'show-btn-history');

})
document.getElementById('show-btn-history').addEventListener('click',function(){

    showButtons('historySection')

    activationStyles('show-btn-history', 'show-btn-donation');
})








