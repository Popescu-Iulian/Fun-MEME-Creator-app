// USER UPPER/LEFT VARIABLES
const USER_UPPER_TEXT = document.querySelector('#user-upper-text');
const ADD_UPPER_TEXT_BTN = document.querySelector('[onclick="addUpperText()"]');
const USER_UPPER_FONT_FAMILY = document.querySelector('#user-upper-font-family');
const USER_UPPER_FONT_SIZE = document.querySelector('#user-upper-font-size');
const USER_UPPER_TEXT_COLOR = document.querySelector('#user-upper-text-color');
const USER_UPPER_RESET_BTN = document.querySelector('#user-upper-reset-btn');

// USER IMAGE INPUT/GEN VARIABLES
const USER_IMAGE_URL = document.querySelector('#user-image-url');
const UPPER_TEXT_SPAN = document.querySelector('#upper-text-span');
const USER_MEME_IMAGE = document.querySelector('#user-meme-image');
const LOWER_TEXT_SPAN = document.querySelector('#lower-text-span');

// USER LOWER/RIGHT VARIABLES
const USER_LOWER_TEXT = document.querySelector('#user-lower-text');
const ADD_LOWER_TEXT_BTN = document.querySelector('[onclick="addLowerText()"]');
const USER_LOWER_FONT_FAMILY = document.querySelector('#user-lower-font-family');
const USER_LOWER_FONT_SIZE = document.querySelector('#user-lower-font-size');
const USER_LOWER_TEXT_COLOR = document.querySelector('#user-lower-text-color');
const USER_LOWER_RESET_BTN = document.querySelector('#user-lower-reset-btn');


// USER UPPER/LEFT FUNCTIONS
function addUpperText() {
  return USER_UPPER_TEXT.value.length === 0 ? alert('Please enter an upper text for your fantastic meme') : UPPER_TEXT_SPAN.textContent = USER_UPPER_TEXT.value, USER_UPPER_TEXT.value = '', ADD_UPPER_TEXT_BTN.textContent = 'Add';
}

function editUpperText() {
  ADD_UPPER_TEXT_BTN.textContent = 'Save';
  USER_UPPER_TEXT.value = UPPER_TEXT_SPAN.textContent;
}

function selectedUpperFontFamily() {
  if (USER_UPPER_FONT_FAMILY.value === 'arial') UPPER_TEXT_SPAN.style.fontFamily = '"Arial", sans-serif';
  if (USER_UPPER_FONT_FAMILY.value === 'comic sans') UPPER_TEXT_SPAN.style.fontFamily = '"Comic Sans MS", sans-serif';
  if (USER_UPPER_FONT_FAMILY.value === 'pacifico') UPPER_TEXT_SPAN.style.fontFamily = '"Pacifico", cursive';
}

function setUpperFontSize() {
  UPPER_TEXT_SPAN.style.fontSize = USER_UPPER_FONT_SIZE.value + 'px';
}

function selectedUpperFontColor() {
  UPPER_TEXT_SPAN.style.color = USER_UPPER_TEXT_COLOR.value;
}

function resetUpperSettings() {
  if (confirm('Do you want to reset all upper text settings?')) {
    UPPER_TEXT_SPAN.textContent = '';
    UPPER_TEXT_SPAN.style.fontFamily = 'initial';
    UPPER_TEXT_SPAN.style.fontSize = 'initial';
    UPPER_TEXT_SPAN.style.color = 'initial';
    USER_UPPER_TEXT_COLOR.value = 'initial';
    USER_UPPER_FONT_SIZE.value = 'initial';
    USER_UPPER_FONT_FAMILY.value = 'initial';
  }
}

// USER IMAGE INPUT/GEN FUNCTIONS
function addImage() {
  return USER_IMAGE_URL.value.length === 0 ? alert('Please add an image') : USER_MEME_IMAGE.setAttribute('src', USER_IMAGE_URL.value), USER_IMAGE_URL.value = '';
}

function delImage() {
  if (USER_MEME_IMAGE.hasAttribute('src')) {
    if (confirm('Do you want to remove image?')) {
      USER_MEME_IMAGE.removeAttribute('src');
    }
  }
}

// USER LOWER/RIGHT FUNCTIONS
function addLowerText() {
  return USER_LOWER_TEXT.value.length === 0 ? alert('Please enter a lower text for your fantastic meme') : LOWER_TEXT_SPAN.textContent = USER_LOWER_TEXT.value, USER_LOWER_TEXT.value = '', ADD_LOWER_TEXT_BTN.textContent = 'Add';
}

function editLowerText() {
  ADD_LOWER_TEXT_BTN.textContent = 'Save';
  USER_LOWER_TEXT.value = LOWER_TEXT_SPAN.textContent;
}

function selectedLowerFontFamily() {
  if (USER_LOWER_FONT_FAMILY.value === 'arial') LOWER_TEXT_SPAN.style.fontFamily = '"Arial", sans-serif';
  if (USER_LOWER_FONT_FAMILY.value === 'comic sans') LOWER_TEXT_SPAN.style.fontFamily = '"Comic Sans MS", sans-serif';
  if (USER_LOWER_FONT_FAMILY.value === 'pacifico') LOWER_TEXT_SPAN.style.fontFamily = '"Pacifico", cursive';
}

function setLowerFontSize() {
  LOWER_TEXT_SPAN.style.fontSize = USER_LOWER_FONT_SIZE.value + 'px';
}

function selectedLowerFontColor() {
  LOWER_TEXT_SPAN.style.color = USER_LOWER_TEXT_COLOR.value;
}

function resetLowerSettings() {
  if (confirm('Do you want to reset all lower text settings?')) {
    LOWER_TEXT_SPAN.textContent = '';
    LOWER_TEXT_SPAN.style.fontFamily = 'initial';
    LOWER_TEXT_SPAN.style.fontSize = 'initial';
    LOWER_TEXT_SPAN.style.color = 'initial';
    USER_LOWER_TEXT_COLOR.value = 'initial';
    USER_LOWER_FONT_FAMILY.value = 'initial';
    USER_LOWER_FONT_SIZE.value = 'initial';
  }
}

// window.getComputedStyle($0).width - for uploaded picture width