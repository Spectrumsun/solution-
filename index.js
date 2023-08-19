function solution(A) {
  A.sort();
  if(A.indexOf(1) == -1) return 1;
  let missing = 1;
  for(let i = A.indexOf(1); i < A.length; i++) {
    if(A[i] != missing) {
      missing++;
      if(A[i] != missing) return missing;
    }
  }
 return missing + 1;
}

function solutzion(A) {
   var missing = 1;
   // sort the array.
   A.sort(function(a, b) { return a-b });

   // try to find the 1 in sorted array if there is no 1 so answer is 1
   if ( A.indexOf(1) == -1) { return 1; }

   // just search positive numbers to find missing number 
   for ( var i = A.indexOf(1); i < A.length; i++) {
      if ( A[i] != missing) {
        missing++;
        if ( A[i] != missing ) { return missing; }
      }
   }

   // if cant find any missing number return next integer number
   return missing + 1;
}


// console.log(solution([1,2,3]), 'answer')
// console.log(solution([1,2,3,4,6]), 'answer')
// console.log(solution([-2, -1]), 'answer')


function solution(N) {
    // Implement your solution here
  const check = [];
  const bin = N.toString(2);
  console.log(bin, 'bin')
  if(!bin.includes(0)) return 0
  // if(bin[bin.length - 1] != 1) return 0;
  const slit = bin.split('1');

  for(let i = 0; i < slit.length; i++) {
    check.push(slit[i].length)
  };
  check.sort();
  return check[check.length - 1];
}

console.log(solution(15))
console.log(solution(9))
console.log(solution(32), '32')
console.log(solution(1376796946))

console.log('10000'.includes('1000001'), 'yeah')


// const object = {
//   age_int: 1,
//   name_float: 1.5,
//   my_string: 'appple',
//   to_bool: true,
// };

// const object2 = {
//   age_int: 'lol',
//   name_float: 1.5,
//   my_string: 1,
//   to_bool: true,
// };

// const types = {
//   'int': 'number',
//   'string': 'string',
//   'bool': 'boolean', 
//   'float': 'number',
//   'number': 'number'
// };

// function isInt(n) {
//    return n % 1 === 0;
// };

// const func = (object) => {
//   const validateObj = {};
//   for (const [key, value] of Object.entries(object)) {
//       const keyvalue = key.split('_')[1];
//       const keyType = types[keyvalue];
//       const typeOfValue = typeof value;
//       if(keyType === typeOfValue ) {
//           validateObj[key] = value
//       } else {
//         validateObj[key] = 'Wrong type!';
//     }
//   }
//   return validateObj;
// }
    
// console.log(func(object), 'object---');
// console.log(func(object2), 'object---');



const calPoints = function (ops) {
  const sign = ["C", "D", "+"];
  const newArr = [];
  for (let i = 0; i < ops.length; i++)  {
    if(!sign.includes(ops[i])) {
       newArr.push(Number(ops[i]));
    }
    if(ops[i] === "C") {
        newArr.pop();
    }
    if(ops[i] === "D") {
      newArr.push(2 * newArr[newArr.length - 1]);
    }
    if(ops[i] === "+") {
      const add = newArr[newArr.length - 1] + newArr[newArr.length - 2];
      newArr.push(add);
    }
  };
  return newArr.reduce((arr, curr) => arr + curr, 0);
}

console.log(calPoints(['5', '2', 'C', 'D', '+']), 'hahaha');
console.log(calPoints(["5","-2", "4", "C", "D", "9", "+", "+"], 'tew'));

const isValidParentheses = (s)  => {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
   // console.log(stack, 'stack');
    console.log(char, 'char in mapping')
    if (char in mapping) {
      const topElement = stack.pop() || '#';
      if(mapping[char] !== topElement) return false;
    } else {
      stack.push(char);
    }
  } 
  return stack.length === 0;
};

console.log(isValidParentheses("([{}])"), 'a')

console.log(isValidParentheses("([{})"), 'b');

const mapping = {
  ')': '(',
  '}': '{',
  ']': '['
};

console.log('}' in mapping, 'checkk')