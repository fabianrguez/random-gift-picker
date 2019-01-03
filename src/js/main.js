const selectGiftsButton = document.querySelector('.btn-gift');
const giftsNumbersInput = document.querySelector('.gifts-numbers');
const giftsNumbersSelectionDiv = document.querySelector('.gifts-numbers-selection');
const giftsPickerDiv = document.querySelector('.gifts-picker');
const returnDiv = document.querySelector('.btn-back');
const giftsOpenendDiv = document.querySelector('.gifts-opened');
const returnBtn = document.querySelector('.btn-back button');
const pickerBtn = document.querySelector('.btn-picker');
const giftSelectedTitle = document.querySelector('.gift-selected');
const gift = document.querySelector('#gift');
let giftNumbers = 1;
let gifts = [];

function toggleElementVisible(element, forceNonVisible = false, forceVisible = false) {
    if (forceNonVisible) {
        element.style.display = 'none';
    } else if (forceVisible) {
        element.style.display = '';
    }
    else {
        element.style.display = element.style.display === 'none' ? '' : 'none';
    }
}

function handleSelectButtonGiftsClicked() {
    giftNumbers = +giftsNumbersInput.value;
    pickerBtn.disabled = false;
    toggleElementVisible(giftsNumbersSelectionDiv, true);
    toggleElementVisible(giftsPickerDiv);
    toggleElementVisible(returnDiv)
    toggleElementVisible(gift, true);
}

function handleReturnBtnClicked() {
    giftNumbers = 1;
    giftsNumbersInput.value = 1;
    gifts = [];
    toggleElementVisible(giftsNumbersSelectionDiv);
    toggleElementVisible(giftsPickerDiv, true);
    toggleElementVisible(returnDiv, true);
    toggleElementVisible(giftsOpenendDiv, true);
}

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
} 

function generateRandomGift() {
    return randomNumber(giftNumbers);
}

function handleRandomGiftGeneration() {
    toggleElementVisible(gift, false, true);
    let isIncluded = false;
    while (!isIncluded) {
        const randomGift = generateRandomGift();
        if (!gifts.includes(randomGift)) {
            gifts.push(randomGift);
            giftSelectedTitle.innerText = `Regalo ${randomGift}`;
            isIncluded = true;
        }
    }
    if (gifts.length === giftNumbers) {
        pickerBtn.disabled = true;
        setTimeout(showAllGiftsOpenend, 5000);
    }
}

function showAllGiftsOpenend() {
    toggleElementVisible(giftsPickerDiv);
    toggleElementVisible(giftsOpenendDiv);
}

selectGiftsButton.addEventListener('click', handleSelectButtonGiftsClicked);
returnBtn.addEventListener('click', handleReturnBtnClicked);
pickerBtn.addEventListener('click', handleRandomGiftGeneration);