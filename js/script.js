
const itens = document.getElementById('itens');

function mudouTamanho() {
  if (window.innerWidth >= 750) {
    itens.style.display = 'block';
  } else {
    itens.style.display = 'none';
  }
}

function clickMenu() {
  if (itens.style.display === 'block') {
    itens.style.display = 'none';
  } else {
    itens.style.display = 'block';
  }
}


const menu = document.querySelector("#menu"); 
const header = document.querySelector("header");
if (menu && header) {
  menu.addEventListener("click", () => {
    header.classList.toggle("active");
  });
}


function mostrarMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.addEventListener("click", function (e) {
  if (!e.target.matches('.dropbtn')) {
    const myDropdown = document.getElementById("myDropdown");
    if (myDropdown && myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
});
