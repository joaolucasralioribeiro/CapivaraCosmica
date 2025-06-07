// MENU RESPONSIVO
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

// ANIMAÇÃO DE MENU
const menu = document.querySelector("#menu"); // corrigido para o ID correto do botão de menu
const header = document.querySelector("header");
if (menu && header) {
  menu.addEventListener("click", () => {
    header.classList.toggle("active");
  });
}

// DROPDOWN
function mostrarMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// corrigido o parêntese mal fechado em window.addEventListener
window.addEventListener("click", function (e) {
  if (!e.target.matches('.dropbtn')) {
    const myDropdown = document.getElementById("myDropdown");
    if (myDropdown && myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
});
