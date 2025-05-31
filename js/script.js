 function mudouTamanho() {
            if (window.innerWidth >= 750) {
                itens.style.display = 'block'
            } else {
                itens.style.display = 'none'
            }
        }
        function clickMenu() {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }
        }

  
        const menu = document.querySelector(".menu");
        const header = document.querySelector(".nav");
        menu.addEventListener("click", () => header.classList.toggle("active"));

//Função do dropdown na página de produtos

function mostrarMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


//Função utilizado para mostrar os produtos 

function mostrarCategoria(categoria) {
       
        const categorias = document.querySelectorAll('.categoria');
        categorias.forEach(div => div.style.display = 'none');

        
        const divSelecionada = document.getElementById(`div-${categoria}`);
        if (divSelecionada) {
            divSelecionada.style.display = 'block';
        }
    }
