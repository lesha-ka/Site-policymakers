export const getStars = () => {
    function starsResult() {
        let starsBlock = document.querySelectorAll('.js-starsWrap');
        starsBlock.forEach(function(elem) {
            let starsResult = elem.querySelectorAll('span');
            let starsCount = elem.querySelector('.js-starsCount').getAttribute('data-count');
            for (let i = 0; i < starsCount; i++) {
                starsResult[i].classList.add('active');
            }
        })
    }
    if(document.querySelector('.js-starsCount')) {
        starsResult();
    }
    if(document.querySelector('.js-surveyForm')) {
        let surveyForm = document.querySelector('.js-surveyForm');
        surveyForm.addEventListener("click", function (e) {
            if (e.target.getAttribute('type') == 'radio') {
                let starsParent = e.target.closest('.js-ratingInput');
                let starsValue = (starsParent.querySelector('input[type="radio"]:checked').value);
                let surveyQuestion = e.target.closest('.js-surveyQuestion');
                let QuestionNumber = surveyQuestion.getAttribute('data-survey');
                let resultBlock = document.querySelector(`[data-result="${QuestionNumber}"]`)
                resultBlock.setAttribute('data-count', starsValue);
                starsResult();
            }
        });
    }
}