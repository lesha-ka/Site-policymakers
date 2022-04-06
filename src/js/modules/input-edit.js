export const getInputEdit = () => {
    if(document.querySelector('.js-inputEdit')) {
        let inputsBlock = document.querySelector('.js-inputsBlock');
        let inputEdit = document.querySelectorAll('.js-inputEdit');
        inputsBlock.addEventListener("click", function (e) {
            inputEdit.forEach(function(elem) {
                elem.closest('.js-inputWrap').classList.remove('input-active');
                elem.closest('.js-inputWrap').querySelector('input').setAttribute('disabled', 'true');
            });
            if (e.target.classList.contains('js-inputEdit')) {
                let inputParent = e.target.closest('.js-inputWrap');
                if (inputParent.classList.contains('input-active')) {
                    inputParent.classList.remove('input-active');
                    inputParent.querySelector('input').setAttribute('disabled', 'true');
                } else {
                    inputParent.classList.add('input-active');
                    inputParent.querySelector('input').removeAttribute('disabled');
                    inputParent.querySelector('input').focus();
                }
            }
        });
    }
}