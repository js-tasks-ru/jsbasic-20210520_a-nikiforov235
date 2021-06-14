function makeFriendsList(friends) {
  // ваш код...
  let list = document.createElement('ul')
  for (let elem of friends) {
    list.innerHTML += `<li>${elem.firstName} ${elem.lastName}</li>`
  }
  return list
}
