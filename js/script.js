
function mudouTamanho() {
    const itens = document.getElementById('itens');
    if (window.innerWidth >= 768) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

function clickMenu() {
    const menu = document.getElementById("menu");
    const itens = document.getElementById('itens');
    
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
        menu.style.position = 'relative';
        menu.style.left = '0%';
    } else {
        itens.style.display = 'block';
        menu.style.position = 'fixed';
        menu.style.left = '85vw';
    }
}

const menu = document.querySelector("#menu");
const header = document.querySelector("#nav");
menu.addEventListener("click", () => header.classList.toggle("active"));

function toggleMenu() {
    document.getElementById('itens').classList.toggle('active');
}


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (window.innerWidth > 992) {
        document.getElementById('mainContent').classList.toggle('with-sidebar');
    }
}


function toggleDropdown(event) {
    event.preventDefault();
    const parent = event.target.closest('.menu-item');
    const dropdown = parent.querySelector('.dropdown-menu');
    const toggle = parent.querySelector('.dropdown-toggle');
    
    document.querySelectorAll('.dropdown-menu').forEach(item => {
        if (item !== dropdown) {
            item.classList.remove('show');
            item.previousElementSibling.classList.remove('active');
        }
    });

    dropdown.classList.toggle('show');
    toggle.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-menu')) {
        document.querySelectorAll('.dropdown-menu').forEach(item => {
            item.classList.remove('show');
            item.previousElementSibling.classList.remove('active');
        });
    }
});


function checkScreenSize() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (window.innerWidth > 992) {
        sidebar.classList.add('active');
        mainContent.classList.add('with-sidebar');
    } else {
        sidebar.classList.remove('active');
        mainContent.classList.remove('with-sidebar');
    }
}



const produtosToyArt = [
    { nome: "Funko Pop - Corazon", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-10.jpg" },
    { nome: "Funko Pop - Beetlejuice", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-100.jpg" },
    { nome: "Funko Pop - Felix", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-102.jpg" },
    { nome: "Funko Pop - Gomamon", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-103.jpg" },
    { nome: "Funko Pop - Patamon", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-104.jpg" },
    { nome: "Funko Pop - Yugi Muto", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-109.jpg" },
    { nome: "Funko Pop - Crabfeeder", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-112.jpg" },
    { nome: "Funko Pop - Liu Kang", imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-121.jpg" }
];

const produtosActionFiguresEstaticos = [
    { nome: "Careca", imagem: "imagens/actionfigures/animes/FIGURES_-21.JPG" },
    { nome: "Bangela", imagem: "imagens/actionfigures/filmes/FIGURES_.JPG" }
];

const produtosActionFiguresArticulados = [
     { nome: "Mina ali", imagem: "imagens/actionfigures-articulados/FIGURES_-56.JPG" },
];

const produtosMiniColecionaveis = [
    
];






function exibirProdutos(produtos) {
    const produtosGrid = document.querySelector('.products-grid');
    produtosGrid.innerHTML = '';

    if (produtos.length === 0) {
        produtosGrid.innerHTML = '<p class="no-products">Nenhum produto encontrado nesta categoria.</p>';
        return;
    }

    produtos.forEach(produto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${produto.imagem}')"></div>
            <div class="product-info">
                <h3 class="product-title">${produto.nome}</h3>
                <button class="btn btn-warning btn-sm" onclick="enviarWhatsApp('${produto.nome}')">Comprar</button>
            </div>
        `;
        produtosGrid.appendChild(productCard);
    });
}


document.addEventListener('DOMContentLoaded', function() {

    const colecionaveisToggle = document.querySelector('.menu-item:first-child .dropdown-toggle');
    if (colecionaveisToggle) {
        colecionaveisToggle.classList.add('active');
        const dropdownMenu = colecionaveisToggle.nextElementSibling;
        dropdownMenu.classList.add('show');
    }



    document.querySelectorAll('.dropdown-menu a').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const subcategoria = item.getAttribute('data-subcategoria');
            
            switch(subcategoria) {
                case 'toy-art':
                    exibirProdutos(produtosToyArt);
                    break;
                case 'action-figures-estaticos':
                    exibirProdutos(produtosActionFiguresEstaticos);
                    break;
                case 'action-figures-articulados':
                    exibirProdutos(produtosActionFiguresArticulados);
                    break;
                case 'mini-colecionaveis':
                    exibirProdutos(produtosMiniColecionaveis);
                    break;
                default:
                    exibirProdutos(produtosToyArt); 
            }
        });
    });
    

    
    exibirProdutos(produtosToyArt);
    checkScreenSize();
});

window.addEventListener('resize', function() {
    checkScreenSize();
    mudouTamanho();
});


function enviarWhatsApp(produto) {
    const numero = "5517991641770";
    const mensagem = `Olá! Gostaria de saber mais sobre o produto: ${produto}.`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}