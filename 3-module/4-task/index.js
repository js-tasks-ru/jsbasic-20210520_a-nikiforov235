function showSalary(users, age) {
  // ваш код...
 let arr = users.filter(item => item.age <= age);
 let newArr = arr.map(itemA => itemA.name + ', ' + itemA.balance);
 return newArr.join('\n'); 
}
