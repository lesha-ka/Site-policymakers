export const getMoreText = () => {
    if(document.querySelector('.js-textBox')) {
        let textBox = document.querySelectorAll('.js-textBox');
        textBox.forEach(function(elem) {
            let infoText = elem.querySelector('.js-infoText');
            let infoTextMaxHeight = getComputedStyle(infoText).maxHeight;
            infoTextMaxHeight = parseInt(infoTextMaxHeight, 10);
            let infoTextHeight = infoText.scrollHeight;
            let btnMore = elem.querySelector('.js-moreText');
            if (infoTextHeight > infoTextMaxHeight) {
                btnMore.classList.add('js-block')
            }
            function showMoreText() {
                if (btnMore.classList.contains('js-lessText')) {
                    infoText.classList.remove('politician-info__text--open')
                    btnMore.innerHTML = 'Показать ещё';
                    btnMore.classList.remove('js-lessText')
                } else {
                    infoText.classList.add('politician-info__text--open')
                    btnMore.innerHTML = 'Скрыть';
                    btnMore.classList.add('js-lessText')
                }
            }
            btnMore.addEventListener("click", showMoreText);
        })
    }
}