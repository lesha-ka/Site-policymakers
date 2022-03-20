export const getStars = () => {
    if(document.querySelector('.js-starsCount')) {
        let starsBlock = document.querySelectorAll('.js-starsWrap');
        starsBlock.forEach(function(elem) {
            let starsResult = elem.querySelectorAll('span');
            let starsCount = document.querySelector('.js-starsCount').getAttribute('data-count');
            for (let i = 0; i < starsCount; i++) {
                starsResult[i].classList.add('active');
            }
            console.log(starsCount)
        })
    }
}