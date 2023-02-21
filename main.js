function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const titleTag = document.getElementsByTagName("h1")[0]
const buttonEl = document.getElementsByTagName("button")
const inputEl = document.getElementsByTagName("input")[0]
const tombolTebak = buttonEl[0]
const tombolReset = buttonEl[1]
const cardEl = document.getElementsByClassName("card")[0]

let numberTarget = 0
function generateRandomNumber() {
  numberTarget = randomInteger(1, 10) // ini range 1 sampai 3
}

tombolTebak.addEventListener("click", () => {
  const answer = +inputEl.value

  if (answer === numberTarget) {
    titleTag.innerText = "Jawaban Benar"
    titleTag.style = "color: green; font-size: 50px;"
    cardEl.style = "display:none;"
  } else if (answer < numberTarget) {
    titleTag.innerText = "Jawaban Terlalu Kecil"
    titleTag.style = "color: yellow;"
  } else {
    titleTag.innerText = "Jawaban Terlalu Besar"
    titleTag.style = "color: red;"
  }
})

tombolReset.addEventListener("click", () => {
  generateRandomNumber()
  titleTag.innerText = "Tebak Nomor"
  titleTag.removeAttribute("style")
  cardEl.removeAttribute("style")
})

generateRandomNumber()
