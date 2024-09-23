
console.log('hi gfeni')
let totalFeniFund = 0 ;

document.getElementById('btn-feni').addEventListener('click',function(){

const feniDonationAmount = getInputValueById('feni-input')
    // number validation

    if (isNaN(feniDonationAmount) || feniDonationAmount < 0 || feniDonationAmount > myBalance ) {
        return alert('Invalid Donation Amount')
    }
else{
   totalFeniFund = feniDonationAmount + totalFeniFund
   const feniBalance =  document.getElementById('total-f-donation')
   feniBalance.innerText = totalFeniFund.toFixed(2);

   document.getElementById('feni-input').value = '';
       // history
       const historyItems = document.createElement('div');
       historyItems.className = "container border border-red-500 mx-auto"
       historyItems.innerHTML = `
   <p class="text-xl font-bold">${feniDonationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
   <p class="text-xs text-gray-500">${new Date().toString()}</p>
   
   
   `
       const historyContainer = document.getElementById('history-items')

       historyContainer.insertBefore(historyItems, historyContainer.firstChild)

       // my balance
  

       myBalance = myBalance - feniDonationAmount
      

       document.getElementById('my-balance').innerText = myBalance

       // modal
       const myModal = document.getElementById('my_modal_1');
       myModal.showModal();


}


})

// button activation
document.getElementById('feni-input').addEventListener('input', function () {
    document.getElementById('btn-feni').removeAttribute("disabled")
})