
// 11-33
let i = 0    ;
while (i <= 100) {  
    i++; 
    if ( i >= 11 && i <= 33) {
        document.write(i + '<br>')
    }  
};

// even and odd numbers
for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
    //   alert( i );
      document.write(i + '<br>')
    }
  };

// sum of 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
   sum += i;
  document.write(sum + '<br>');

}

