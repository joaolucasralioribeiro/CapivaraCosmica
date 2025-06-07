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





// Toggle menu do header em mobile
        function toggleMenu() {
            document.getElementById('itens').classList.toggle('active');
        }
        
        // Toggle sidebar
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            
            if (window.innerWidth > 992) {
                mainContent.classList.toggle('with-sidebar');
            }
        }
        
        // Toggle dropdowns
        function toggleDropdown(event) {
            event.preventDefault();
            const parent = event.target.closest('.menu-item');
            const dropdown = parent.querySelector('.dropdown-menu');
            const toggle = parent.querySelector('.dropdown-toggle');
            
            // Fecha outros dropdowns abertos
            document.querySelectorAll('.dropdown-menu').forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove('show');
                    item.previousElementSibling.classList.remove('active');
                }
            });
            
            // Alterna o dropdown atual
            dropdown.classList.toggle('show');
            toggle.classList.toggle('active');
        }
        
        // Fecha dropdowns ao clicar fora
        document.addEventListener('click', function(event) {
            if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-menu')) {
                document.querySelectorAll('.dropdown-menu').forEach(item => {
                    item.classList.remove('show');
                    item.previousElementSibling.classList.remove('active');
                });
            }
        });
        
        // Verifica o tamanho da tela ao carregar
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
        
        window.addEventListener('load', checkScreenSize);
        window.addEventListener('resize', checkScreenSize);
