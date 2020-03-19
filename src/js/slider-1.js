
const slider1Toggle1 = document.querySelector('.slider-1__toggle-input-1');
const slider1Toggle2 = document.querySelector('.slider-1__toggle-input-2');
const slider1Toggle3 = document.querySelector('.slider-1__toggle-input-3');

const reviewsItem1 = document.querySelector('.reviews__item-1');
const reviewsItem2 = document.querySelector('.reviews__item-2');
const reviewsItem3 = document.querySelector('.reviews__item-3');

if (slider1Toggle1.checked) {
    reviewsItem1.classList.add('slide-on');
} else if (slider1Toggle2.checked) {
    reviewsItem2.classList.add('slide-on');
} else if (slider1Toggle3.checked) {
    reviewsItem3.classList.add('slide-on')}

slider1Toggle2.addEventListener('change', function () {
    reviewsItem2.classList.add('slide-on');
    reviewsItem1.classList.remove('slide-on');
    reviewsItem3.classList.remove('slide-on');
});
slider1Toggle1.addEventListener('change', function () {
    reviewsItem2.classList.remove('slide-on');
    reviewsItem1.classList.add('slide-on');
    reviewsItem3.classList.remove('slide-on');
});
slider1Toggle3.addEventListener('change', function () {
    reviewsItem2.classList.remove('slide-on');
    reviewsItem1.classList.remove('slide-on');
    reviewsItem3.classList.add('slide-on');
});
