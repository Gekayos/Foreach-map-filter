//                                    forEach

// #1

function doubleValues(arr) {
    let newArr = [];
    arr.forEach( function(val) {
      newArr.push(val * 2);
    });
    return newArr;
  }
  
// #2
  
  function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach( function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }
  
// #3

  function showFirstAndLast(arr) {
    let newArr =  [];
    arr.forEach( function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
  }
  
//#4

  function addKeyAndValue(arr, key, value) {
    arr.forEach( function(val) {
      val[key] = value;
    });
    return arr;
  }
   
//#5

  function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach( function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf( lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter] ++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  
  //                                                       map
  
//6

  function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  
//#7

  function valTimesIndex(arr) {
    return arr.map(function( val, idx) {
      return val * idx;
    });
  }
  
//# 8

  function extractKey(arr, key) {
    return arr.map(function(val) {
      return  val[key];
    });
  }
  
//   #9

  function  extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
  
  //                                                                        filter
  
//#10

  function filterByValue(arr, key) {
    return arr.filter(function(val) {
      return val[key] !== undefined;
    });
  }
  
//  #11

  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }
  
// # 12

  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
  
//    #13

  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
  

//   #14


  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }