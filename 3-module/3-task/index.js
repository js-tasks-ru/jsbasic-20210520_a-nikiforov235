function camelize(str) {
  // ваш код...
  return str
    .split('-')
    .map(function (item, index) { 
      if (index !== 0) {
        return item[0].toUpperCase() + item.slice(1)
      };
      return item
    }) 
    .join('')
    };
