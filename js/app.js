const container = document.getElementById("container");

container.addEventListener('click', (e) => {
 if(e.target.classList.contains('skill__content_list-title')){
   e.target.parentElement.classList.toggle('scale')
   e.target.children[2].classList.toggle('rotate')
 }

});
