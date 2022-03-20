export const getHeaderMenu = () => {
    if(document.querySelector('.js-headerMenu')) {
        const headerMenu = document.querySelector(".js-headerMenu");
        const headerMenuList = document.querySelector(".js-headerMenuList");
        const headerBurger = document.querySelector(".js-headerBurger");
        function showHeaderMenu() {
            headerMenuList.classList.toggle("js-block");
            headerMenu.classList.toggle("js-headerMenuOpen");
            headerBurger.classList.toggle("header__burger-active");
        }
        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(headerMenu);
         
            if ( ! withinBoundaries ) {
                headerMenuList.classList.remove("js-block");
                headerMenu.classList.remove("js-headerMenuOpen");
                headerBurger.classList.remove("header__burger-active");            
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                headerMenuList.classList.remove("js-block");
                headerMenu.classList.remove("js-headerMenuOpen"); 
                headerBurger.classList.remove("header__burger-active"); 
            }
        });
        headerMenu.addEventListener("click", showHeaderMenu);
    }
}