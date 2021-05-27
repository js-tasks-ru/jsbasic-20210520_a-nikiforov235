function factorial(n) {
  // ваш код... 
  while ( n === 1 || n === 0) {
    return 1; 
  };
 
  for (let a = n - 1; a > 1; a--) {
    n = n * a;
  }; 
  return n; 
};
