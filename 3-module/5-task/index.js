function getMinMax(str) {
  // ваш код...
  const numbers = [];
  str.split(' ').forEach(item =>
    item.split(',').forEach(num => {
    if (!isNaN(parseFloat(num))) {
      numbers.push(parseFloat(num));
    }
  }));
  return {
    min: Math.min.apply(null, numbers),
    max: Math.max.apply(null, numbers)
  };
}
