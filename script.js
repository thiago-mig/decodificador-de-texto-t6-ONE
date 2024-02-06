const textInput = document.querySelector('textarea');
const encryptBtn = document.querySelector('.encrypt');
const outputContainerDefault = document.querySelector('.output-section__default');
const outputContainerResult = document.querySelector('.output-section__result')
const resultParagraph = document.querySelector('.result');


const encrypt = (value) => {
  let encryptedText = '';
  if (value.length !== 0) {
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
  }  
};

const showResult = () => {
  if(outputContainerResult.classList.contains('hidden')){
    outputContainerDefault.classList.add('hidden');
    outputContainerResult.classList.remove('hidden');
  }
  resultParagraph.innerText = encrypt(textInput.value);
  textInput.value = '';
}



encryptBtn.addEventListener('click', () =>{
    showResult();
});