function factorialize(num) {
    if (num < 0) 
          return "error";
    else if (num == 0 || num == 1) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
console.log(factorialize(-5));
console.log(factorialize(5));
console.log(factorialize(10));