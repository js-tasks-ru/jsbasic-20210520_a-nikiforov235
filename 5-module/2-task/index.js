function toggleText() {
  // ваш код...
  const div = document.querySelector('#text')
  const btn = document.querySelector('.toggle-text-button')
  btn.addEventListener('click', function () {
    div.hidden = !div.hidden
  } )
}
