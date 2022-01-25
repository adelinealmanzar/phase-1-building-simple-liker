// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.querySelector('#modal')
// todo: make tests pass
let hidden = document.createElement
modal.hidden = true;


const likeGlyphs = document.querySelectorAll('.like-glyph')
likeGlyphs.forEach(likeGlyph => {
  likeGlyph.addEventListener('click', (e) => {
    // when a user clicks an empty heart
    function handleFailure(error) {
      likeGlyph.innerText = EMPTY_HEART
      modal.hidden = false
      const errorMessage = document.querySelector('#modal-message')
      errorMessage.textContent = `${error}`
      setTimeout(() => modal.hidden = true, 3000)
    }
    function handleSuccess() {
      modal.hidden = true
      likeGlyph.innerText = FULL_HEART
      console.log(likeGlyph)
      likeGlyph.classList.toggle('activated-heart')
    }
    mimicServerCall()
    .then(handleSuccess)
    .catch(handleFailure)
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
