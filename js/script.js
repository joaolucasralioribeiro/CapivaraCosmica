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