let totalQuotaFund = 0 ;

document.getElementById('btn-quota').addEventListener('click',function(){

    const quotaDonationAmount = getInputValueById('quota-input')
    // number validation
    if (isNaN(quotaDonationAmount) || quotaDonationAmount < 0 || quotaDonationAmount > myBalance ) {
        return alert('Invalid Donation Amount')
    }
    else{
        totalQuotaFund = quotaDonationAmount + totalQuotaFund
        const quotaBalance =  document.getElementById('total-q-donation')
        quotaBalance.innerText = totalQuotaFund.toFixed(2);
        document.getElementById('quota-input').value = '';


 // history
 const historyItems = document.createElement('div');
 historyItems.className = "container mx-auto border border-gary-500 rounded-lg p-8"
 historyItems.innerHTML = `
<p class="text-xl font-bold">${quotaDonationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
<p class="text-base mt-4 text-gray-500">Date : ${new Date().toString()}</p>


`
 const historyContainer = document.getElementById('history-items')

 historyContainer.insertBefore(historyItems, historyContainer.firstChild)

  // my balance
  

  myBalance = myBalance - quotaDonationAmount
      

  document.getElementById('my-balance').innerText = myBalance

  // modal
  const myModal = document.getElementById('my_modal_1');
  myModal.showModal();


    }
})

// button activation
document.getElementById('quota-input').addEventListener('input', function () {
    document.getElementById('btn-quota').removeAttribute("disabled")
})
