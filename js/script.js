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

const menu = document.querySelector(".menu");
const header = document.querySelector(".nav");
if (menu && header) {
    menu.addEventListener("click", () => {
        header.classList.toggle("active");
    });
}

function mostrarMenu() {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

// Fecha o menu dropdown se clicar fora
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        const dropdown = document.getElementById("myDropdown");
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

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
