export const getScrollTop = () => {
    if(document.querySelector('.js-scrollTop')) {
            const bodyHeight = document.querySelector(".wrapper").offsetHeight;
            const screenHeight = window.screen.height
            var target = document.querySelector("footer");
            var scrollToTopBtn = document.querySelector(".js-scrollTop");
            var rootElement = document.body;
            if (bodyHeight <= screenHeight) {
                scrollToTopBtn.style.display = 'none';
            }
            function callback(entries, observer) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                    scrollToTopBtn.classList.add("js-show");
                    } else {
                    scrollToTopBtn.classList.remove("js-show");
                    }
                });
            }

            function scrollToTop() {
                rootElement.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            scrollToTopBtn.addEventListener("click", scrollToTop);

            let observer = new IntersectionObserver(callback);
            observer.observe(target);
    }
}