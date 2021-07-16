var LIMIT = Number.parseInt(process.argv[2]);

//Simple Fizzbuzz with equality operators

/*
function isDivisibleBy(n){
  for (let i = 1; i <= n; i++){
    if (i % 6 == 0){
      console.log("Netcapital");
    } else if (i % 2 == 0){
      console.log("Net");
    } else if (i % 3 == 0){
      console.log("capital");
    } else {
      console.log(i);
    }
  };
};

isDivisibleBy(LIMIT);
*/

/* 
  Alternative Fizzbuzz- also with equality operators. Eliminates the use of excessive else statements if this 
  code hypothetically was to be revisited and the divisors needed to be changed or new divisors needed to be added.
*/

/*
function isDivisibleBy(n){
  for(let i = 1; i <= n; i++){
    let output = "";
    if(i % 2 == 0){
      output += "Net";
    }
    if(i % 3 == 0){
      output += "capital";
    }
    if(output == ""){
      output = i;
    }
    console.log(output);
  };
};

isDivisibleBy(LIMIT);
*/

//Bonus: Fizzbuzz without equality operators

function isDivisibleBy(n){
  for(let i = 0; i < n;)
    console.log(
      ( ++i%2 ? '' : 'Net' ) + ( i%3 ? '' : 'capital' ) || i
    )
};

isDivisibleBy(LIMIT);
