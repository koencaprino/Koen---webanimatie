var box = document.querySelector('.rechthoek');

document.addEventListener('keypress', function(e) {
  if(e.keyCode === 32) {
     box.classList.toggle('animate')
  }
})
