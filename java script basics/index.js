      // This is my first js code
      console.log('hello world');

      let name = "Adarsh";
      console.log(name);

      //they cant be a reserved keyword
      //they shud be meaningful
      //they cnat start from a number
      //they cant contain a space or hyphen
      //they are case sensitive

      let firstName='P' , lastName='Adarsh'; //camelcase

      //or can be declared independently(in different lines)##bestpractise
      //the value of a variable can change but that of a constant cant

      const interestRate= 0.3;
      //interestRate = 1;
      console.log(interestRate);

      let myName = 'Adarsh'; //String literal
      let age = 19 ; // Number literal
      let isApproved = false; //Boolean literal
      let x = undefined; // not much used //since the default value of variables in js is undefined
      let selectedColor = null ;// if we want to clear the value of a variable

      console.log(typeof(selectedColor));

      //js is a dynamic language (this can be seen in console using typeof)
      //in js there is only single type number, not integers or float, just number
      //type of indefined variable(example x) is undefined
      //type of selectedColor is object 
      
      //object,arrays,functions are reference types

      //making key value pairs 

      let person= {
          name1 : 'Adarsh',
          age1 : 19
      };

      console.log(typeof(person));

      //dot notation
      person.name1= 'Adi';

      //Bracket notation
      let selection = 'name1';
      person[selection]='pAdarsh';
      console.log(person.name1);

      //array is an object in js
      
      let myColors = ['red', 'blue'];
      myColors[2]= 'yellow';
      myColors[3]= 7;
      console.log(myColors);
      console.log(myColors.length);

      //function intro

      function greet(name, lastName){
          console.log('hello '+ name+ ' '+lastName);
      }

      greet('John','Smith');

      function square(number1){
          let number2= number1;

          //just for test
          for(number1=1; number1<10; number1++){
              console.log(number1);
          }

          return number2*number2;
      }

      console.log(square(4));
      /*
      OUTPUT--------------------
      node index.js // ouput using node.js
hello world
Adarsh
0.3
object
object
pAdarsh
[ 'red', 'blue', 'yellow', 7 ]
4
hello John Smith
1
2
3
4
5
6
7
8
9
16
PS C:\Users\P.ADARSH\Desktop\js-basics> 
      */
      
      
      
