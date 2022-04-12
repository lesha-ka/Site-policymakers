export const getSurvey = () => {
    if(document.querySelector('.js-surveyForm')) {
        let formStart = document.querySelector('.js-formStart');
        let surveyNext = document.querySelectorAll('.js-surveyNext');
        let surveyPrev = document.querySelectorAll('.js-surveyPrev');
        surveyNext.forEach(function(elem) {
            elem.addEventListener("click", function(e) {
                let surveyQuestion = e.target.closest('.js-surveyQuestion');
                let QuestionNumber = surveyQuestion.getAttribute('data-survey');
                let starsValue = (surveyQuestion.querySelector('input[type="radio"]:checked').value);
                let surveyError = (surveyQuestion.querySelector('.js-surveyError'));
                QuestionNumber++;
                if (starsValue == 0) {
                    surveyError.classList.add('js-show')
                } else {
                    surveyError.classList.remove('js-show')
                    if (QuestionNumber <= 6 & QuestionNumber > 1) {
                        let nextQuestionBlock = document.querySelector(`[data-survey="${QuestionNumber}"]`)
                        surveyQuestion.classList.add('js-hide');
                        nextQuestionBlock.classList.add('js-block');
                    }
                    if (QuestionNumber == 6) {
                        formStart.classList.add('js-hide');
                    }
                }
            })
        });
        surveyPrev.forEach(function(elem) {
            elem.addEventListener("click", function(e) {
                let formStart = document.querySelector('.js-formStart');
                let surveyQuestion = e.target.closest('.js-surveyQuestion');
                let QuestionNumber = surveyQuestion.getAttribute('data-survey');
                QuestionNumber--;
                let prevQuestionBlock = document.querySelector(`[data-survey="${QuestionNumber}"]`)
                surveyQuestion.classList.toggle('js-block');
                prevQuestionBlock.classList.toggle('js-hide');
                if (QuestionNumber == 5) {
                    formStart.classList.toggle('js-hide');
                    prevQuestionBlock.classList.remove('js-hide');
                }
            })
        });
    }
}