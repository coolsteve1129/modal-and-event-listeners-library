//const openButton = document.querySelectorAll('[data-modal-target]')
const openBtn = document.getElementById('newBookBtn')
const closeBtn = document.getElementById('closeBtn')
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    modal.classList.add("active");
    overlay.classList.add("active");
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
});


// openButton.forEach(button => {
//     button.addEventListener('click', () =>{
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal);
//     })
// })
// ^^this is how you would do it if you had 
//multiple buttons to select
