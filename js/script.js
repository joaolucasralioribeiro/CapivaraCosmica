
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
        case 'presenteaveis-bolsa':
            produtosFiltrados = produtosPresenteaveis.filter(p => p.categoria === "Bolsa");
            break;
        case 'presenteaveis-carteira':
            produtosFiltrados = produtosPresenteaveis.filter(p => p.categoria === "Carteira");
            break;
        case 'presenteaveis-caneca':
            produtosFiltrados = produtosPresenteaveis.filter(p => p.categoria === "Caneca");
            break;
        case 'presenteaveis-porta-copo':
            produtosFiltrados = produtosPresenteaveis.filter(p => p.categoria === "Porta Copo");
            break;
        case 'presenteaveis-tapete':
            produtosFiltrados = produtosPresenteaveis.filter(p => p.categoria === "Tapete");
            break;
        case 'presenteaveis-guarrafa':
            produtosFiltrados = produtosPresenteaveis.filter(p => p.categoria === "Guarrafa");
            break;
        case 'presenteaveis-placa-decorativa':
            produtosFiltrados = produtosPresenteaveis.filter(p => p.categoria === "Placa Decorativa");
            break;
        case 'moda-geek-camisetas':
            produtosFiltrados = produtosModaGeek.filter(p => p.categoria === "Camisetas");
            break;
        case 'moda-geek-bones':
            produtosFiltrados = produtosModaGeek.filter(p => p.categoria === "Bonés");
            break;
        case 'ofertas':
            produtosFiltrados = [...produtosToyArt, ...produtosActionFigures, ...produtosMiniColecionaveis, ...produtosPresenteaveis, ...produtosModaGeek]
                              .filter(p => p.oferta === true);
            break;
        case 'novidades':
            produtosFiltrados = [...produtosToyArt, ...produtosActionFigures, ...produtosMiniColecionaveis, ...produtosPresenteaveis, ...produtosModaGeek]
                              .filter(p => p.novo === true);
            break;
        default:
            produtosFiltrados = [...produtosToyArt, ...produtosActionFigures, ...produtosMiniColecionaveis, ...produtosPresenteaveis, ...produtosModaGeek];
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
                      ...produtosActionFiguresArticulados, ...produtosMiniColecionaveis,
                      ...produtosPresenteaveis, ...produtosModaGeek]
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
    //Filmes  - Séries

     { 
        nome: "Funko Pop - Optimus Prime", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-84.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do universo de Transformers."
    },
     { 
        nome: "Funko Pop - Megatron", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-85.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do universo de Transformers."
    },
    { 
        nome: "Funko Pop - Bumblebee", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-86.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do universo de Transformers."
    },
    
     { 
        nome: "Funko Pop - Boneco Barbie", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-93.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do universo de Barbie."
    },
     { 
        nome: "Funko Pop - Wandinha", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-97.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop da série Wednesday."
    },
     { 
        nome: "Funko Pop -  Daemon Targaryen", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-111.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop da série House of the Dragon."
    },
     { 
        nome: "Funko Pop - Eddie Munson", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-115.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop da série Stranger Things."
    },
     { 
        nome: "Funko Pop - Maui", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-130.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do filme Moana da Disney."
    },
     
      
      { 
        nome: "Funko Pop -  Eleven", 
        imagem: "imagens/funkpop/filmes-series/FIGURES_-55.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop da série Stranger Things."
    },
      { 
        nome: "Funko Pop - Daenerys Targaryen e Drogon", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-153.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop da série Game of Thrones."
    },
      { 
        nome: "Funko Pop - Freddy Fazbear", 
        imagem: "imagens/funkpop/filmes-series/FIGURES_-3.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do jogo Five Nights at Freddy's."
    },
      { 
        nome: "Funko Pop -  Rocky Balboa", 
        imagem: "imagens/funkpop/filmes-series/FIGURES_-6.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do filme Rocky."
    },
      { 
        nome: "Funko Pop -  Frodo", 
        imagem: "imagens/funkpop/filmes-series/CAPIVARA FUNKO POP-118.jpg",
        categoria: "Filmes/Séries",
        descricao: "Funko Pop do filme Senhor dos Anéis."
    },
    
    

    //Animes - Desenhos
    { 
        nome: "Funko Pop - Vegetta", 
        imagem: "imagens/funkpop/animes-desenhos/FIGURES_-9.jpg",
        categoria: "Desenhos",
        descricao: "Funko Pop do universo de Dragon Ball."
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
    { 
        nome: "Funko Pop - Hermione", 
        imagem: "imagens/funkpop/harry-potter/CAPIVARA FUNKO POP-141.jpg",
        categoria: "Harry Potter",
        descricao: "Funko Pop do universo de Harry Potter."
    },
     { 
        nome: "Funko Pop - O Trio", 
        imagem: "imagens/funkpop/harry-potter/CAPIVARA FUNKO POP-142.jpg",
        categoria: "Harry Potter",
        descricao: "Funko Pop do universo de Harry Potter."
    },
     { 
        nome: "Funko Pop - Hogwarts Express", 
        imagem: "imagens/funkpop/harry-potter/CAPIVARA FUNKO POP-137.jpg",
        categoria: "Harry Potter",
        descricao: "Funko Pop do universo de Harry Potter."
    },
     

];

const produtosActionFiguresEstaticos = [
    { 
        nome: "Son Goku Super Saiyajin ", 
        imagem: "imagens/actionfigures/animes/FIGURES_-41.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime Dragon Ball"
    },
     { 
        nome: "Freeza", 
        imagem: "imagens/actionfigures/animes/FIGURES_-43.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime Dragon Ball"
    },
    { 
        nome: "Naruto Uzumaki", 
        imagem: "imagens/actionfigures/animes/FIGURES_-25.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime Naruto."
    },
     { 
        nome: "Sasuke Uchiha (", 
        imagem: "imagens/actionfigures/animes/FIGURES_-23.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime Naruto."
    },
     { 
        nome: "Saitama", 
        imagem: "imagens/actionfigures/animes/FIGURES_-21.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime One-Punch Man."
    },
    { 
        nome: "Roronoa Zoro", 
        imagem: "imagens/actionfigures/animes/FIGURES_-29.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime One Piece."
    },
    { 
        nome: "Naruto Uzumaki (Modo Sábio dos Seis Caminhos)", 
        imagem: "imagens/actionfigures/animes/FIGURES_-27.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime Naruto."
    },
    { 
        nome: "Monkey D. Luffy ", 
        imagem: "imagens/actionfigures/animes/FIGURES_-33.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime One Piece."
    },
    { 
        nome: "Izuku Midoriya", 
        imagem: "imagens/actionfigures/animes/FIGURES_-39.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime Deku - My Hero Academia"
    },
    { 
        nome: " Katsuki Bakugo", 
        imagem: "imagens/actionfigures/animes/FIGURES_-37.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime Deku - My Hero Academia"
    },
    { 
        nome: "Endeavor  ", 
        imagem: "imagens/actionfigures/animes/FIGURES_-45.JPG",
        categoria: "Animes",
        descricao: "Action figure estático do anime  My Hero Academia."
    },
    { 
        nome: "Evangelion Unidade-01", 
        imagem: "imagens/actionfigures/animes/FIGURES_-35.JPG",
        categoria: "Animes",
        descricao: "Action figure estático da série Neon Genesis Evangelion"
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


const produtosPresenteaveis = [
    { 
        nome: "Bolsa Star Wars", 
        imagem: "imagens/presenteaveis/bolsa-star-wars.jpg",
        categoria: "Bolsa",
        descricao: "Bolsa temática de Star Wars, material resistente"
    },
    { 
        nome: "Carteira Marvel", 
        imagem: "imagens/presenteaveis/carteira-marvel.jpg",
        categoria: "Carteira",
        descricao: "Carteira com estampa dos Vingadores, múltiplos compartimentos"
    },
    { 
        nome: "Caneca Harry Potter", 
        imagem: "imagens/presenteaveis/caneca-harry-potter.jpg",
        categoria: "Caneca",
        descricao: "Caneca temática de Harry Potter, muda de cor com líquido quente"
    },
    { 
        nome: "Porta Copos Game of Thrones", 
        imagem: "imagens/presenteaveis/porta-copos-got.jpg",
        categoria: "Porta Copo",
        descricao: "Set de 6 porta copos com brasões das casas de Game of Thrones"
    },
    { 
        nome: "Tapete Mario Bros", 
        imagem: "imagens/presenteaveis/tapete-mario.jpg",
        categoria: "Tapete",
        descricao: "Tapete infantil com tema do Mario, antiderrapante"
    },
    { 
        nome: "Garrafa Termica Avengers", 
        imagem: "imagens/presenteaveis/garrafa-avengers.jpg",
        categoria: "Guarrafa",
        descricao: "Garrafa térmica dos Vingadores, mantém temperatura por 24h"
    },
    { 
        nome: "Placa Decorativa Star Wars", 
        imagem: "imagens/presenteaveis/placa-star-wars.jpg",
        categoria: "Placa Decorativa",
        descricao: "Placa de metal com frase icônica de Star Wars"
    }
];


const produtosModaGeek = [
    { 
        nome: "Camiseta Homem-Aranha", 
        imagem: "imagens/moda-geek/camiseta-homem-aranha.jpg",
        categoria: "Camisetas",
        descricao: "Camiseta 100% algodão com estampa do Homem-Aranha"
    },
    { 
        nome: "Camiseta Star Wars", 
        imagem: "imagens/moda-geek/camiseta-star-wars.jpg",
        categoria: "Camisetas",
        descricao: "Camiseta básica com logo de Star Wars"
    },
    { 
        nome: "Boné Marvel", 
        imagem: "imagens/moda-geek/bone-marvel.jpg",
        categoria: "Bonés",
        descricao: "Boné ajustável com logo da Marvel"
    },
    { 
        nome: "Boné Nintendo", 
        imagem: "imagens/moda-geek/bone-nintendo.jpg",
        categoria: "Bonés",
        descricao: "Boné clássico com logo da Nintendo"
    }
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
        'mini-colecionaveis': produtosMiniColecionaveis,
        'presenteaveis-bolsa': produtosPresenteaveis.filter(p => p.categoria === "Bolsa"),
        'presenteaveis-carteira': produtosPresenteaveis.filter(p => p.categoria === "Carteira"),
        'presenteaveis-caneca': produtosPresenteaveis.filter(p => p.categoria === "Caneca"),
        'presenteaveis-porta-copo': produtosPresenteaveis.filter(p => p.categoria === "Porta Copo"),
        'presenteaveis-tapete': produtosPresenteaveis.filter(p => p.categoria === "Tapete"),
        'presenteaveis-guarrafa': produtosPresenteaveis.filter(p => p.categoria === "Guarrafa"),
        'presenteaveis-placa-decorativa': produtosPresenteaveis.filter(p => p.categoria === "Placa Decorativa"),
        'moda-geek-camisetas': produtosModaGeek.filter(p => p.categoria === "Camisetas"),
        'moda-geek-bones': produtosModaGeek.filter(p => p.categoria === "Bonés"),
        'ofertas': [...produtosToyArt, ...produtosActionFiguresEstaticos, ...produtosActionFiguresArticulados, ...produtosMiniColecionaveis, ...produtosPresenteaveis, ...produtosModaGeek].filter(p => p.oferta),
        'novidades': [...produtosToyArt, ...produtosActionFiguresEstaticos, ...produtosActionFiguresArticulados, ...produtosMiniColecionaveis, ...produtosPresenteaveis, ...produtosModaGeek].filter(p => p.novo)
    };

    document.querySelectorAll('[data-subcategoria]').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const subcategoria = item.getAttribute('data-subcategoria');
            exibirProdutos(categorias[subcategoria] || [...produtosToyArt, ...produtosActionFiguresEstaticos, ...produtosActionFiguresArticulados, ...produtosMiniColecionaveis, ...produtosPresenteaveis, ...produtosModaGeek]);
        });
    });

    exibirProdutos([...produtosToyArt, ...produtosActionFiguresEstaticos, ...produtosActionFiguresArticulados, ...produtosMiniColecionaveis, ...produtosPresenteaveis, ...produtosModaGeek]);
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



// Botão de voltar ao topo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

document.getElementById("backToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});