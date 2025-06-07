
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
const header = document.querySelector("#nav");
menu.addEventListener("click", () => header.classList.toggle("active"));
        


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

// MOSTRAR PRODUTOS POR CATEGORIA
function mostrarCategoria(categoriaId) {
  const categorias = document.querySelectorAll('.categoria');
  categorias.forEach(div => div.style.display = 'none');

  const divCategoria = document.getElementById(`div-${categoriaId}`);
  if (divCategoria) {
    divCategoria.style.display = 'block';
  }

  document.getElementById('titulo-inicial').style.display = 'none';
  document.getElementById('btn-voltar').style.display = 'block';
}

function voltarAoInicio() {
  const categorias = document.querySelectorAll('.categoria');
  categorias.forEach(div => div.style.display = 'none');

  document.getElementById('titulo-inicial').style.display = 'block';
  document.getElementById('btn-voltar').style.display = 'none';
}

// ⬇️ ESSENCIAL: chama a função ao carregar e redimensionar
window.addEventListener("resize", mudouTamanho);
window.addEventListener("load", mudouTamanho);
