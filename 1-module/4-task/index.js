function checkSpam(str) {
  // ваш код...
    let a = str.toLowerCase();

    if (a.includes("1xbet")) {
        return true;
    } else if (a.includes("xxx")) {
        return true;
    } else {
        return false;
    }
};

