$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


  
$('.carousel').carousel({
  interval: 5000
})


const openModalBtn = document.querySelector('.open-modal');
const modalContainer = document.querySelector('.modal-container');

openModalBtn.addEventListener('click', () => {
  modalContainer.classList.add('active');
});

modalContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-background')) {
    modalContainer.classList.remove('active');
  }
});