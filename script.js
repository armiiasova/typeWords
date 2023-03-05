const textArea = document.querySelector('#text')
const totalWords = document.querySelector('.amountOfWords')
const totalCharacters = document.querySelector('.amountOfCharacters')


textArea.addEventListener('keyup', (event) => {
  // inside this part is going to run 
  // state . 
  let allTextOnTextArea = (event.target.value)

  // show how many charactes do we have .

  const arrayofWords = allTextOnTextArea.split(" ")

  if (arrayofWords.length === 1 && arrayofWords[0].length === 0) {
    totalWords.innerText = 0
    totalCharacters.innerText = 0
    return
  }
  totalWords.innerText = arrayofWords.length
  totalCharacters.innerText = allTextOnTextArea.length
})
