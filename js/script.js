
let produtosData = {};


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

function filterProducts(subcategoria) {
    closeFilterModal();
    
    let produtosFiltrados = [];
    switch(subcategoria) {
        case 'toy-art':
            produtosFiltrados = produtosData.produtosToyArt || [];
            break;
        case 'toy-art-star-wars':
            produtosFiltrados = (produtosData.produtosToyArt || []).filter(p => p.categoria === "Star Wars");
            break;
        case 'toy-art-herois':
            produtosFiltrados = (produtosData.produtosToyArt || []).filter(p => p.categoria === "Herois");
            break;
        case 'toy-art-desenhos':
            produtosFiltrados = (produtosData.produtosToyArt || []).filter(p => p.categoria === "Desenhos");
            break;
        case 'toy-art-filmes':
            produtosFiltrados = (produtosData.produtosToyArt || []).filter(p => p.categoria === "Filmes/Séries");
            break;
        case 'toy-art-harry-potter':
            produtosFiltrados = (produtosData.produtosToyArt || []).filter(p => p.categoria === "Harry Potter");
            break;
        case 'presenteaveis-bolsa':
            produtosFiltrados = (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Bolsa");
            break;
        case 'presenteaveis-carteira':
            produtosFiltrados = (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Carteira");
            break;
        case 'presenteaveis-caneca':
            produtosFiltrados = (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Caneca");
            break;
        case 'presenteaveis-porta-copo':
            produtosFiltrados = (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Porta Copo");
            break;
        case 'presenteaveis-tapete':
            produtosFiltrados = (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Tapete");
            break;
        case 'presenteaveis-guarrafa':
            produtosFiltrados = (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Guarrafa");
            break;
        case 'presenteaveis-placa-decorativa':
            produtosFiltrados = (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Placa Decorativa");
            break;
        case 'moda-geek-camisetas':
            produtosFiltrados = (produtosData.produtosModaGeek || []).filter(p => p.categoria === "Camisetas");
            break;
        case 'moda-geek-bones':
            produtosFiltrados = (produtosData.produtosModaGeek || []).filter(p => p.categoria === "Bonés");
            break;
        case 'ofertas':
            produtosFiltrados = [
                ...(produtosData.produtosToyArt || []),
                ...(produtosData.produtosActionFiguresEstaticos || []),
                ...(produtosData.produtosActionFiguresArticulados || []),
                ...(produtosData.produtosMiniColecionaveis || []),
                ...(produtosData.produtosPresenteaveis || []),
                ...(produtosData.produtosModaGeek || [])
            ].filter(p => p.oferta === true);
            break;
        case 'novidades':
            produtosFiltrados = [
                ...(produtosData.produtosToyArt || []),
                ...(produtosData.produtosActionFiguresEstaticos || []),
                ...(produtosData.produtosActionFiguresArticulados || []),
                ...(produtosData.produtosMiniColecionaveis || []),
                ...(produtosData.produtosPresenteaveis || []),
                ...(produtosData.produtosModaGeek || [])
            ].filter(p => p.novo === true);
            break;
        default:
            produtosFiltrados = [
                ...(produtosData.produtosToyArt || []),
                ...(produtosData.produtosActionFiguresEstaticos || []),
                ...(produtosData.produtosActionFiguresArticulados || []),
                ...(produtosData.produtosMiniColecionaveis || []),
                ...(produtosData.produtosPresenteaveis || []),
                ...(produtosData.produtosModaGeek || [])
            ];
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
    
    const allProducts = [
        ...(produtosData.produtosToyArt || []),
        ...(produtosData.produtosActionFiguresEstaticos || []),
        ...(produtosData.produtosActionFiguresArticulados || []),
        ...(produtosData.produtosMiniColecionaveis || []),
        ...(produtosData.produtosPresenteaveis || []),
        ...(produtosData.produtosModaGeek || [])
    ];
    
    let productData = allProducts.find(p => p.nome === produto);
    
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

// Carregamento dos dados
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('js/produtos.json');
        produtosData = await response.json();
        
        const categorias = {
            'action-figures-estaticos': produtosData.produtosActionFiguresEstaticos || [],
            'action-figures-articulados': produtosData.produtosActionFiguresArticulados || [],
            'mini-colecionaveis': produtosData.produtosMiniColecionaveis || [],
            'presenteaveis-bolsa': (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Bolsa"),
            'presenteaveis-carteira': (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Carteira"),
            'presenteaveis-caneca': (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Caneca"),
            'presenteaveis-porta-copo': (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Porta Copo"),
            'presenteaveis-tapete': (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Tapete"),
            'presenteaveis-guarrafa': (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Guarrafa"),
            'presenteaveis-placa-decorativa': (produtosData.produtosPresenteaveis || []).filter(p => p.categoria === "Placa Decorativa"),
            'moda-geek-camisetas': (produtosData.produtosModaGeek || []).filter(p => p.categoria === "Camisetas"),
            'moda-geek-bones': (produtosData.produtosModaGeek || []).filter(p => p.categoria === "Bonés"),
            'ofertas': [
                ...(produtosData.produtosToyArt || []),
                ...(produtosData.produtosActionFiguresEstaticos || []),
                ...(produtosData.produtosActionFiguresArticulados || []),
                ...(produtosData.produtosMiniColecionaveis || []),
                ...(produtosData.produtosPresenteaveis || []),
                ...(produtosData.produtosModaGeek || [])
            ].filter(p => p.oferta),
            'novidades': [
                ...(produtosData.produtosToyArt || []),
                ...(produtosData.produtosActionFiguresEstaticos || []),
                ...(produtosData.produtosActionFiguresArticulados || []),
                ...(produtosData.produtosMiniColecionaveis || []),
                ...(produtosData.produtosPresenteaveis || []),
                ...(produtosData.produtosModaGeek || [])
            ].filter(p => p.novo)
        };

        document.querySelectorAll('[data-subcategoria]').forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const subcategoria = item.getAttribute('data-subcategoria');
                exibirProdutos(categorias[subcategoria] || [
                    ...(produtosData.produtosToyArt || []),
                    ...(produtosData.produtosActionFiguresEstaticos || []),
                    ...(produtosData.produtosActionFiguresArticulados || []),
                    ...(produtosData.produtosMiniColecionaveis || []),
                    ...(produtosData.produtosPresenteaveis || []),
                    ...(produtosData.produtosModaGeek || [])
                ]);
            });
        });

       
        exibirProdutos([
            ...(produtosData.produtosToyArt || []),
            ...(produtosData.produtosActionFiguresEstaticos || []),
            ...(produtosData.produtosActionFiguresArticulados || []),
            ...(produtosData.produtosMiniColecionaveis || []),
            ...(produtosData.produtosPresenteaveis || []),
            ...(produtosData.produtosModaGeek || [])
        ]);
        
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        document.querySelector('.products-grid').innerHTML = 
            '<p class="no-products">Erro ao carregar os produtos. Por favor, recarregue a página.</p>';
    }
    
    checkScreenSize();
});

window.addEventListener('resize', function() {
    checkScreenSize();
    mudouTamanho();
});

function enviarWhatsApp(produto) {
    const numero = "5517981919993"; 
    const mensagem = `Olá! Gostaria de saber mais sobre o produto: ${produto}.`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}


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