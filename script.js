const textInput = document.querySelector('textarea');
const encryptBtn = document.querySelector('.encrypt');
const decryptBtn = document.querySelector('.decrypt');
const outputContainerDefault = document.querySelector('.output-section__default');
const outputContainerResult = document.querySelector('.output-section__result');
const copyBtnContainer = document.querySelector('.output-section__result__btn-container');
const resultParagraph = document.querySelector('.result');
const copyBtn = document.querySelector('.copyBtn');

const encrypt = (text) => {
  let encryptedText = '';
  for (let letter of text) {
    switch (letter) {
      case 'a':
        encryptedText += 'ai';
        break;
      case 'e':
        encryptedText += 'enter';
        break;
      case 'i':
        encryptedText += 'imes';
        break;
      case 'o':
        encryptedText += 'ober';
        break;
      case 'u':
        encryptedText += 'ufat';
        break;
      default:
        encryptedText += letter;
        break;
    }
  }
  return encryptedText;
};

const decrypt = (text) => {
  let keys = ['ai', 'enter', 'imes', 'ober', 'ufat'];
  let defaultLetters = ['a', 'e', 'i', 'o', 'u'];
  for (const key in keys) {
    text = text.replaceAll(keys[key], defaultLetters[key]);
  }
  return text;
}

const showResult = (method) => {
  if(outputContainerResult.classList.contains('hidden')){
    outputContainerDefault.classList.add('hidden');
    outputContainerResult.classList.remove('hidden');
  }
  resultParagraph.innerText = method(textInput.value);
  textInput.value = '';
}

const resetAll = () => {
  if(outputContainerDefault.classList.contains('hidden')) {
    outputContainerDefault.classList.remove('hidden');
  }
  if(!outputContainerResult.classList.contains('hidden')) {
    outputContainerResult.classList.add('hidden');
  }
}

const copyFunc = () => {
  navigator.clipboard.writeText(resultParagraph.innerText);
}

const showTooltip = () => {
  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip';
  tooltip.innerText = 'Texto copiado para área de transferência';
  copyBtnContainer.insertBefore(tooltip, copyBtn);
  setTimeout(() => tooltip.remove(), 2500);
}

encryptBtn.addEventListener('click', () =>{
  if(textInput.value.length !== 0) {
    showResult(encrypt);
  } else {
    resetAll();
  }
});

decryptBtn.addEventListener('click', () => {
  if (textInput.value.length !== 0) {
    showResult(decrypt);
  } else {
    resetAll();
  }
});

copyBtn.addEventListener('click', () => {
  copyFunc();
  showTooltip();
});
