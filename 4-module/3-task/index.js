function highlight(table) {
  // ваш код...
  let rows = table.rows;
  for (tr of rows) {
  // обработка data-available
  let status = tr.lastElementChild.getAttribute('data-available')
  if (!status) {tr.setAttribute('hidden','true')}
  if (status === 'true') {tr.classList.add('available')}
  if (status === 'false') {tr.classList.add('unavailable')}
  // обработка gender
  let gender = tr.lastElementChild.previousElementSibling.innerHTML
  if (gender === 'm') {tr.classList.add('male')}
  if (gender === 'f') {tr.classList.add('female')}
  //обработка age
  let age = tr.firstElementChild.nextElementSibling.innerHTML
  if (+age < 18) {tr.style.textDecoration = 'line-through'}
  }
};


