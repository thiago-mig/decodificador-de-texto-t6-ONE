const textInput = document.querySelector('textarea');
const encryptBtn = document.querySelector('.encrypt');
const outputContainerDefault = document.querySelector('.output-section__default');
const outputContainerResult = document.querySelector('.output-section__result')
const resultParagraph = document.querySelector('.result');

const encrypt = (value) => {
  let encryptedText = '';
  for (let letter of textInput.value) {
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

const showResult = () => {
  if(outputContainerResult.classList.contains('hidden')){
    outputContainerDefault.classList.add('hidden');
    outputContainerResult.classList.remove('hidden');
  }
  resultParagraph.innerText = encrypt(textInput.value);
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

encryptBtn.addEventListener('click', () =>{
    if(textInput.value.length !== 0) {
      showResult();
    } else {
      resetAll();
    }
});