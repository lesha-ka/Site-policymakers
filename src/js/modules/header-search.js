export const getHeaderSearch = () => {
    if(document.querySelector('.js-headerSearch')) {
        const headerSearch = document.querySelector(".js-headerSearch");
        const headerSearchIcon = document.querySelector(".js-headerSearchIcon");
        const headerSearchForm = document.querySelector(".js-headerSearchForm");
        function showHeaderSearch() {
            headerSearchForm.classList.toggle("js-block");
            headerSearchIcon.classList.toggle("js-hide");
        }
        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(headerSearch);
    
            if ( ! withinBoundaries ) {
                headerSearchForm.classList.remove("js-block");
                headerSearchIcon.classList.remove("js-hide");
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                headerSearchForm.classList.remove("js-block");
                headerSearchIcon.classList.remove("js-hide");
            }
        });
        headerSearchIcon.addEventListener("click", showHeaderSearch);
    }
}