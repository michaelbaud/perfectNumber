var PerfectNumbers = function() {
  this.classify = function(num) {
      
      if(num <= 0) {
          return 'Classification is only possible for natural numbers.'
      } 
      
      var divArray = this.diviseur(num)
      var sum = 0;
      for (var i = 0; i<divArray.length; i++) {
          sum += divArray[i]
      }
      // return sum 
      if (sum === num) { return 'perfect'}
      else if (sum > num ) { return 'abundant'}
      else return 'deficient'
  }
  this.diviseur= function(num) {
      var i ;
      var divs = new Array()
      if (num<=1) { return divs}
      divs.push(1)
  for(i=2; i<=num/2; i++) { 
      if (num%i===0) {
          divs.push(i)
      }
      
  }
  return divs
  }
  
  
}

module.exports = PerfectNumbers;