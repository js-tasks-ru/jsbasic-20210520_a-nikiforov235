function ucFirst(str) {
  // ваш код...
  if (str === '' || str === undefined) {
    return str; 
} else if (str.length === 1) {
    let firstChar = str[0];
    return firstChar.toUpperCase();
} else {
    let firstChar = str[0];
    let result = firstChar.toUpperCase() + str.slice (1);
    return result; 
}
};
