/*
Write a function that takes a string and returns all permutations of the string. Ensure that there are no duplicates in the output.
*/

var strPerm = function(str) {
  var storage = {};
  str = str.split('').sort().join('');
  function subroutine(str) {
    var res = [];
    if (!str.length) {
      return [str];
    }
    for (var i = 0; i < str.length; i++) {
      var subCombo = subroutine(str.substring(0, i) + str.substring(i + 1));
      for (var j = 0; j < subCombo.length; j++) {
        var currentCombo = str[i] + subCombo[j];
        if (!storage[currentCombo]) {
          storage[currentCombo] = currentCombo;
          res.push(currentCombo);
        }
      }
    }
    return res;
  }
  return subroutine(str).join(',');
};

console.log(strPerm('6zu'));

// a b c
// abc, acb, bac, bca, cab, cba