

const getInputValueById = function (id) {
   const inputValue = document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
   return inputNumber;

}


function showButtons(id) {
   let collectionSection = document.getElementById('collection');
   let historySection = document.getElementById('historySection');

   collectionSection.classList.add('hidden');
   historySection.classList.add('hidden');

   document.getElementById(id).classList.remove('hidden')
}



function activationStyles (shows, hides) {
   // shows this
   document.getElementById(shows).classList.add('bg-[#B4F461]');
   document.getElementById(shows).classList.remove('text-gray-500', 'btn-outline');

   // hides this
   document.getElementById(hides).classList.add('text-gray-500');
   document.getElementById(hides).classList.remove('bg-[#B4F461]');
}
