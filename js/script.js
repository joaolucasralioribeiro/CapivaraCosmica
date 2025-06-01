 function mudouTamanho() {
            if (window.innerWidth >= 750) {
                itens.style.display = 'block'
            } else {
                itens.style.display = 'none'
            }
        }
        function clickMenu() {
        const menu = document.getElementById("menu");

            if (itens.style.display == 'block') {
                itens.style.display = 'none'
                menu.style.position = 'relative'
                menu.style.left = '0%'

            } else {
                itens.style.display = 'block'
                menu.style.position = 'fixed'
                menu.style.left = '90%'
            }
        }

  
          const menu = document.querySelector("#menu");
          const header = document.querySelector("#nav");
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