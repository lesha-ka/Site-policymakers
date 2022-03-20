export const getInputEdit = () => {
    if(document.querySelector('.js-inputEdit')) {
        let inputsBlock = document.querySelector('.js-inputsBlock');
        let inputEdit = document.querySelectorAll('.js-inputEdit');
        inputsBlock.addEventListener("click", function (e) {
            if (e.target.classList.contains('js-inputEdit')) {
                let inputParent = e.target.closest('.js-inputWrap');
                inputParent.classList.add('input-active');
                inputParent.querySelector('input').removeAttribute('disabled');
                inputParent.querySelector('input').focus();
            }
        });
    }
}