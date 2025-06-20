
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

// Modal de Filtros para Toy Art
function openFilterModal(event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('filterModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeFilterModal() {
    document.getElementById('filterModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', function(event) {
    const filterModal = document.getElementById('filterModal');
    if (event.target === filterModal) {
        closeFilterModal();
    }
});

// Filtro de produtos
function filterProducts(subcategoria) {
    closeFilterModal();
    
    let produtosFiltrados = [];
    switch(subcategoria) {
        case 'toy-art':
            produtosFiltrados = produtosToyArt;
            break;
        case 'toy-art-star-wars':
            produtosFiltrados = produtosToyArt.filter(p => p.categoria === "Star Wars");
            break;
        case 'toy-art-herois':
            produtosFiltrados = produtosToyArt.filter(p => p.categoria === "Herois");
            break;
        case 'toy-art-desenhos':
            produtosFiltrados = produtosToyArt.filter(p => p.categoria === "Desenhos");
            break;
        case 'toy-art-filmes':
            produtosFiltrados = produtosToyArt.filter(p => p.categoria === "Filmes/Séries");
            break;
        case 'toy-art-harry-potter':
            produtosFiltrados = produtosToyArt.filter(p => p.categoria === "Harry Potter");
            break;
        default:
            produtosFiltrados = produtosToyArt;
    }
    
    exibirProdutos(produtosFiltrados);
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


function openModal(produto) {
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalProductImage');
    const modalTitle = document.getElementById('modalProductTitle');
    const modalCategory = document.getElementById('modalProductCategory');
    const modalDescription = document.getElementById('modalProductDescription');
    
    
    let productData = [...produtosToyArt, ...produtosActionFiguresEstaticos, 
                      ...produtosActionFiguresArticulados, ...produtosMiniColecionaveis]
                     .find(p => p.nome === produto);
    
    if (productData) {
        modalImg.style.backgroundImage = `url('${productData.imagem}')`;
        modalTitle.textContent = productData.nome;
        modalCategory.textContent = `Categoria: ${productData.categoria}`;
        modalDescription.textContent = productData.descricao;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}


window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
});


const produtosToyArt = [
    { 
        nome: "Funko Pop - Corazon", 
        imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-10.jpg",
        categoria: "Animes",
        descricao: "Funko Pop do personagem Corazon da série One Piece."
    },
    { 
        nome: "Funko Pop - Beetlejuice", 
        imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-100.jpg",
        categoria: "Filmes",
        descricao: "Funko Pop do personagem Beetlejuice do filme homônimo."
    },
    { 
        nome: "Funko Pop - Felix", 
        imagem: "imagens/funkpop/animes-desenhos/CAPIVARA FUNKO POP-102.jpg",
        categoria: "Desenhos",
        descricao: "Funko Pop do personagem Felix the Cat."
    },
    //Star Wars
     { 
        nome: "Funko Pop - Darth Vader", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-11.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
     { 
        nome: "Funko Pop - Darth Maul", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-13.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
    { 
        nome: "Funko Pop - Ahsoka", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-14.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
    { 
        nome: "Funko Pop - stormtrooper", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-15.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
    { 
        nome: "Funko Pop - Luke Skywalker", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-16.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
    { 
        nome: "Funko Pop - Chewbacca", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-17.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
    { 
        nome: "Funko Pop - Mandaloriana com sabre de luz", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-18.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
      { 
        nome: "Funko Pop - Personagem com Baby Yoda", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-19.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
      { 
        nome: "Funko Pop - Anakin Skywalker", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-20.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
    { 
        nome: "Funko Pop - Baby Yoda (Grugo)", 
        imagem: "imagens/funkpop/star-wars/CAPIVARA FUNKO POP-56.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },
    
    { 
        nome: "Funko Pop - Mandaloriano", 
        imagem: "imagens/funkpop/star-wars/FIGURES_-10.jpg",
        categoria: "Star Wars",
        descricao: "Funko Pop do universo Star Wars."
    },

    //Herois
    { 
        nome: "Funko Pop - Homem Aranha", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-30.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
    { 
        nome: "Funko Pop - Homem Aranha 2", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-31.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
    { 
        nome: "Funko Pop - Venom", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-32.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Venom 2", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-33.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Rocket", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-34.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Sam Wilson(capitão)", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-35.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Baby Gru", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-36.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Baby Gru 2", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-37.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Baby Gru 3", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-38.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Doutor Estranho", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-39.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Wolverine", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-40.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },
     { 
        nome: "Funko Pop - Homem de Ferro", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-41.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da Marvel."
    },

     { 
        nome: "Funko Pop - Batman", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-81.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da DC."
    },
    { 
        nome: "Funko Pop - Tubarão Rei", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-82.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da DC."
    },
    { 
        nome: "Funko Pop - Mulher Maravilha", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-83.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da DC."
    },

    { 
        nome: "Funko Pop - Superman", 
        imagem: "imagens/funkpop/herois/CAPIVARA FUNKO POP-151.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da DC."
    },
    { 
        nome: "Funko Pop - Superman 2", 
        imagem: "imagens/funkpop/herois/FIGURES_-16.jpg",
        categoria: "Herois",
        descricao: "Funko Pop da DC."
    },

    //Harry Potter
     { 
        nome: "Funko Pop - Harry Potter", 
        imagem: "imagens/funkpop/harry-potter/CAPIVARA FUNKO POP-140.jpg",
        categoria: "Harry Potter",
        descricao: "Funko Pop do universo de Harry Potter."
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


];

const produtosActionFiguresEstaticos = [
    { 
        nome: "Careca", 
        imagem: "imagens/actionfigures/animes/FIGURES_-21.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do personagem Careca."
    },
    { 
        nome: "Bangela", 
        imagem: "imagens/actionfigures/filmes/FIGURES_.JPG",
        categoria: "Filmes",
        descricao: "Action figure estático do personagem Bangela."
    }
];

const produtosActionFiguresArticulados = [
    { 
        nome: "Mina ali", 
        imagem: "imagens/actionfigures-articulados/FIGURES_-56.JPG",
        categoria: "Filmes",
        descricao: "Action figure articulado da personagem Mina Ali."
    }
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
            <div class="product-image" style="background-image: url('${produto.imagem}')" onclick="openModal('${produto.nome}')"></div>
            <div class="product-info">
                <h3 class="product-title" onclick="openModal('${produto.nome}')">${produto.nome}</h3>
                <button class="btn btn-warning btn-sm" onclick="enviarWhatsApp('${produto.nome}')">Comprar</button>
            </div>
        `;
        produtosGrid.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    const categorias = {
        'action-figures-estaticos': produtosActionFiguresEstaticos,
        'action-figures-articulados': produtosActionFiguresArticulados,
        'mini-colecionaveis': produtosMiniColecionaveis
    };

    document.querySelectorAll('[data-subcategoria]').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const subcategoria = item.getAttribute('data-subcategoria');
            if (subcategoria !== 'toy-art') {
                exibirProdutos(categorias[subcategoria] || produtosToyArt);
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