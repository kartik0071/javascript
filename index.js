// //Example 1-variable decleration
// var a;
// console.log(a);

// // console.log(b); //Uncaught ReferenceError: b is not defined
// let c;
// console.log(c);

// const d; //Uncaught SyntaxError: Missing initializer in const declaration
// console.log(d);

// const e=20;
// console.log(e);

// /**Example 2-"let" */
// let myNumber=10;
// console.log(myNumber);

// //decleration
// let mystring;

// //assingment
// mystring="Hello form string";
// console.log(mystring);

// //re-assingment
// mystring="New value for mystring variable";
// console.log(mystring);

// /**Example 3-"var" */
// var myNumber=10;
// console.log(myNumber);

// //decleration
// var myString;

// //assingment
// mystring="Hello form string";
// console.log(mystring);

// //re-assingment
// mystring="New value for mystring variable";
// console.log(mystring);

// //re-assingment variable to the string
// mystring=55;
// console.log(mystring);


// //**Example 4-"const"*/

// const myBoolean=true;

// console.log(myBoolean);

// //myBoolean=false; //Uncaught TypeError: Assignment to constant variable.

// //const myBoolean=false;//Uncaught SyntaxError: Identifier 'myBoolean' has already been declared


// // task 1

// const myObject={};

// console.log(myObject);

// // myObject = {};//Uncaught TypeError: Assignment to constant variable.

// let x=10;
// const y=true;
// const myObject={
//     a: x,
//     b: y
// };
// console.log(myObject);
// x= 20;
// let anotherObject;
// anotherObject={
//     newA: x,
//     b: y,
//     c: myObject};
// console.log(anotherObject);


// //prof that javascript is dynamic in nature assigning multiple values to myVariable

// let myVariable;
// console.log(myVariable);//undefined

// myVariable=10;
// console.log(myVariable);//10

// myVariable=true;
// console.log(myVariable);//true

// myVariable={
//     x:true,
//     y:10
// };
// console.log(myVariable);
// //by using . you can change the property inside an object

// myVariable.y=20;
// myVariable.x=false;
// console.log(myVariable);

// myVariable.y=true;
// myVariable.x=50;
// console.log(myVariable);

// //this will break the code
// myVariable=null;
// console.log(myVariable);

// myVariable.x=false;//Uncaught TypeError: Cannot set properties of null (setting 'x')


// //task
// let variable;
// console.log(variable);
// variable=null;
// console.log(variable);
// variable=15;
// console.log(variable);
// variable=false;
// console.log(variable);




// /**Example 1-Create object and modify its properties */

// let myObject;
// console.log(myObject);

// myObject={
//     a:10,
//     b:"abc"
// };
// console.log(myObject);//created an object

// myObject.a=25;
// console.log(myObject);//modified property of the object

// myObject.c=true;
// console.log(myObject);//added a new property to object

// delete myObject.b;
// console.log(myObject);//deleted a property form the object


// /** Challange 1 **/

// var myPost
// console.log(myPost);

// myPost={}
// console.log(myPost); //created object myPost

// myPost.postTitle="Object is refrence type";
// console.log(myPost); //added property "postTitle" with value "Object is refrence type"

// myPost.postLikes=0;
// console.log(myPost);//added property "postLikes" with value 0

// myPost.shared=false;
// console.log(myPost);//added property "shared" with value "false"

// myPost.postLikes=1;
// console.log(myPost);//increased value of the "postLikes" by "1"

// delete myPost.shared;
// console.log(myPost);//delete property "shared"



// /**Example-2 */

// const myObject={};

// myObject.a=true;// NO error! Variable is not reassigned
// myObject.b=25;
// console.log(myObject);

// //myObject={ a:true };//Uncaught TypeError: Assignment to constant variable.


// /** Challange-2 */

// let myObject={a:10};
// console.log(myObject);

// let copyofmyObject=myObject;
// console.log(copyofmyObject);

// copyofmyObject.b=false;
// console.log(copyofmyObject);
// console.log(myObject);


// /**Example-3 using bracket notation */

// let myObject={
//     a:true,
//     b:null,
//     c:25
// };

// //console.log(myObject[a]);//Uncaught ReferenceError: a is not defined
// console.log(myObject["a"]);//true

// console.log(myObject["b"]);//null

// const propertyName="c";
// console.log(myObject[propertyName]);//25

// // console.log(myObject["propertyName"]);//undefined cause propertyName is not present inside the object

// /** HARD FOR YOU  */
// myObject["new"+"Property"+"Name"]="Value for dynamically computed property name";
// console.log(myObject);


// /**Example-4 Missing properties */

// const myObject={
//     a:3,
//     b:true
// };
// //code execution is not stopped
// console.log(myObject.c);//undefined
// console.log(myObject.absentProperty);//undefined
// console.log(myObject.a);// 3 cause the property of a is present
// console.log(myObject.b);// true cause the property of b is present

// // // code execution stopped
// // console.log(nonDeclaredVariable);//Uncaught ReferenceError: nonDeclaredVariable is not defined


// /**Important */
// //Never assign "undefined" to any property or variable.Use "null" insted
// myObject.newPropertyWithUndefinedValue=undefined;
// console.log(myObject);
// console.log(myObject.newPropertyWithUndefinedValue);


// /** Challange-3 */

// let objectWithNestedObject={};
// objectWithNestedObject.nestedObject={};
// console.log(objectWithNestedObject);
// objectWithNestedObject.nestedObject.a=null;
// objectWithNestedObject.nestedObject.b=true;
// objectWithNestedObject.nestedObject.c=34;
// console.log(objectWithNestedObject);




// /** Functions */
// /**Example 1 simplest function in Javascript*/
// function myFunction(a,b){}
// console.log(myFunction);
// myFunction();
// const functionResult=myFunction();
// console.log(functionResult);//undefined
// console.log(myFunction());//undefined
// console.log(myFunction(10,true));//undefined


// /**Example 2-parameters of function*/
// function myFunction(a,b){
//     console.log(a);
//     console.log(b);
// }
// myFunction(10,5);//10 5
// myFunction(true,null);//true,null
// myFunction();//undefined undefined
// myFunction("abc");//abc undefined
// console.log(myFunction(4,3));//4 3 undefined //first it is printing function values and after that undefined for the function


// /** Example 3-Function scope */
// let a=3;
// var b=4;
// function myFunction(a,b){
//     console.log(a,b);
// }
// console.log(myFunction(3,5));

// // console.log(a);//Uncaught ReferenceError: a is not defined
// // console.log(b);//Uncaught ReferenceError: b is not defined



// /**Example 4-Reuse Parameter names */
// function myFunction1(a,b){
//     console.log(a,b);
// }
// function myFunction2(a,b){
//     console.log(a,b);
// }
// const a=true;
// const b=null;
// myFunction1(2,3);//2 3
// myFunction2(4,5);//4 5
// console.log(a,b);//true null


// /**Example 5- Add "return" */
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,5));//7
// console.log(sum(10,3));//13
// console.log(sum("abc",2));//"abc2"
// console.log(sum());//NaN


// /**Example 6-What happens after "return"? */
// function myFunction(a){
//     console.log(a);
//     return a;//function stops here
//     console.log(a);
// }
// myFunction(10);//10


// /**Chalange 1 */
// function mult(a,b,c){
//     let z=a*b*c;
//     console.log(z);
// }
// mult(0,1,2);//0
// mult(2,4,6);//48
// mult(2,4,"abc");//NaN
// mult();//NaN
// console.log(mult(2,4,6));//48 is printed inside of the function and function returns "undefined"


// /**Challange 2 */
// function concatenateStrings(string1,string2){
//     const string3=string1+string2;
//     return(string3);
// }
// pappu=concatenateStrings('abcd','efgh');
// console.log(pappu);


// /**Challange 3 */
// function outerFunction(a,b){
//     function innerFunction(c){
//         return c*c;
//     }
//     const sum= a+b;
//     const result =innerFunction(sum);

//     console.log(result);
// }
// outerFunction(2,3);//25

// outerFunction(3,7);//100




// /**Example 1 -Try to "declare" function expression */

// //it is not possible to use function expression standalone
// function (){}//Uncaught SyntaxError: Function statements require a function name


// /** Example 2-Assign function expression to the variable */
// const myFunction=function(){};
//     console.log(myFunction());//undefined
//     console.log(myFunction);//ƒ (){}


// /**Example 3- Callback function */
// setTimeout(function(){
//     console.log("Delayed message");
// },1000);


// /**Example 4-callback function(example 2) */
// let i=1;
// setInterval(function(){
//     console.log("message logged each 1 second "+i);
//     i=i+1;
// },1000);


// /**Challange 1-JS -BASIC/CORE/CHALLANGE */
// let i=1;
// const myIntervel = setInterval(function(){
//     console.log("here is message number"+i);
//     i=i+1;
// },2000);
// console.log(myIntervel);
// setTimeout(function(){
//     clearInterval(myIntervel);
// },10000);



// /**SECTION 1-Arithmetic Operatiors */
// let a,b;
// a=1;
// b=2;
// console.log(a+b);//3
// console.log(a*b);//2
// console.log(a/b);//0.5
// console.log(a-b);//-1
// console.log(a%b);//1


// //string concatenation
// const a='Hello',b='world';
// console.log(a+' '+b);
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log(a-b);


// //Uanry Plus
// let c='1';
// console.log(+ c);//1
// console.log(Number(c));//1
// c=undefined;
// console.log(+c);//NaN
// c="abcd"
// console.log(+c);


// //Unary minus
// c='5';
// console.log(-c);//-5
// c='abc';
// console.log(-c);//NaN


// //++
// let d=5;
// ++d;
// console.log(d);//6

// d++;
// console.log(d);//7

// //Built-in "++" function FIRST increments value of the oprand and second returns value of the oprand
// console.log(++d);//8 prefix
// //Built-in "++" function FIRST returns value of the oprand and second increments value of the oprand 
// console.log(d++);//8 postfix
// console.log(d);//9


// //--
// console.log(d--);//9
// console.log(d);//8
// console.log(--d);//7
// console.log(d);//7




// /**Section 2-Comparison Operators */
// /**Number Comperison */
// let a,b;

// a= 5;
// b= 7;
// c= 5;
// console.log(a<b);//true
// console.log(a>b);//false
// console.log(a>=c);//true
// console.log(a<=c);//true
// console.log('-----')

// let myStr1, myStr2;

// myStr1='abcd';
// myStr2='efgh';
// myStr3='ABCD';

// console.log(myStr1>myStr2);//false
// console.log(myStr1<myStr2);//true
// console.log(myStr1>myStr3);//true
// console.log('-----')


// //Equality Operator
// //NEVER USE "==" and "!=" OPERATORS!!!
// let myString='0';
// let myNumber=0;
// let myBoolean=false;

// //Types of the Values may be diffrent
// console.log(myString==myNumber);//true
// console.log(myBoolean==myNumber);//true
// console.log(myString==myBoolean);//true
// console.log('-----')


// //Type and Value are compared
// console.log(myString===myNumber);//False
// console.log(myBoolean===myNumber);//False
// console.log(myString===myBoolean);//False


// //HOW you should compare variables of diffrent types
// console.log(Number(myString)===myNumber);//true

// console.log(+myString===myNumber);//true

// console.log(myString!=myNumber);//false

// console.log(myString!==myNumber);//true

// console.log(null===undefined);//false

// console.log(null==undefined);//true

// console.log(0===""===null===undefined===false);//true




// /** Section 3- Logical Operators */

// /** OR Operator || */
// console.log(true||false);//true
// console.log(false||true);//true

// console.log("-----");

// console.log("abc"||"");// abc
// console.log(""||"abc");// abc
// console.log(""||"");// ""
// console.log(""||0||null||undefined||NaN||false);// false

// console.log("-----");

// let city;
// console.log(city);// undefined
// const defaultCity="Delhi";
// console.log(city||defaultCity);// Delhi

// console.log("-----");

// let myCity=city||defaultCity;
// console.log(myCity);// Delhi

// console.log("-----");

// city="Mumbai";
// myCity=city||defaultCity;// Mumbai
// console.log(myCity);

// console.log("-----");

// let myOtherCity=city||console.log("Fill in the city plese")||defaultCity;
// console.log(myOtherCity);// Mumbai

// console.log("-------------");


// /** AND Operator && */

// console.log(true&&false);//false
// console.log(false&&true);//false

// //AND returns value of the first "falsy" operand
// console.log("abc" && 10 && false && "" && " abcd")//false
// console.log("abc" && 10 && NaN && "" && " abcd")//NaN
// console.log("abc" && 10 && "" && " abcd")//""

// //All operands are "truthy"
// console.log("abc" && 10 && true && 123 && "Hello World");//Hello World

// console.log("-------------");



// /**NOT Operator ! */

// console.log(! "abcd");// false
// console.log(! "");// true
// console.log(! 0);// true
// console.log(! NaN);// true

// let myVariable;
// myVariable=undefined;
// console.log(! myVariable);// true

// myVariable="Kartik";
// console.log(! myVariable);// false

// //Quick truthy/falsy check
// myVariable=null;
// console.log(! ! myVariable);// false

// myVariable=10;
// console.log(!!myVariable);// true




// /** SECTION 4 Operator precedence */

// console.log(2 + 4 * 10);// 42 First "*" Second "+""
// console.log((2 + 4) * 10);//60 First "()", Second "+",Third "*"

// let a;
// a = 1;

// a = a + 5;//first "+",Second "="

// console.log(a);//6




// /**SECTION 5 Operator Associativity */

// let a,b;
// b=3;

// a= b = 5;//right-to-left Associativity
// console.log(a,b);

// console.log(4 + 5 + 6);// 15 left-to-right Associativity
// console.log(6 + 5 + 4);// 15 left-to-right Associativity

// console.log(5 * 10 / 2);// 25 left-to-right Associativity
// console.log(5 * 10 / 2 / 5);// 5 left-to-right Associativity

// console.log(5 * 10 / (2 / 5));// 125 left-to-right Associativity



// /**CHALLANGE */

// // TASK 1

// let myVariable1 =10,myVariable2 = "5",myVariable3;

// myVariable3=(myVariable1<=myVariable2)

// console.log(myVariable3);


// // TASK 2
// let myNumber1 = 10;
// let myNumber2 = 3;

// console.log(myNumber1 % myNumber2);// 1
// console.log(25 % 5);// 0
// console.log(14 % 8);// 6

// console.log(100 % 30 % 3);// 1 left-to-right Associativity


// /** TASK 3 */

// console.log(3 || true && null || false );
// //STEP 1: true && null-> null
// //STEP 2: 3 || null-> 3
// //RESULT: 3 || false-> 3



// /** TASK 4 */

// let a = 10;

// //a = a + a;
// a += a;
// console.log(a);// 20

// //a = a+1;
// a += 1;
// console.log(a);// 21

// //a = a * 2;
// a *= 2;
// console.log(a);// 42

// //a = a-5;
// a -= 5;
// console.log(a);// 37

// //a = a / 2;
// a /= 2;
// console.log(a);// 18.5

// //a = a % 2;
// a %= 2;
// console.log(a);// 0.5




// /** EXPRESSIONS */

// 10
// "abc"
// 5+3

// ;(function(a){
//     console.log(a);
// })//Function expression embedded

// // Immediately Invoked Function Expression
// ;(function()
// {
//     console.log("hello from Kartik");
// })()//Function call is expression

// let a;
// a=10// Assingment expression

// //5=true// Uncaught SyntaxError: Invalid left-hand side in assignment

// 4<=10<=20||5// true-Logical expression




// /**STATEMENTS*/

// let a;// Variable declaration is statement

// a = 3

// function myFunction(b){
//     //Quick check that "return" is a statement (not expression)
//     //console.log(return b);//Uncaught SyntaxError: Unexpected token 'return'
//     return b;
// }

// myFunction(a)

// if(true){
//     console.log("Hello from 'if' statement!");
// } 

// // Quick check that "if" is statement
//  console.log(if(true){
//     console.log("Hello from 'if' statement!");
// } );// Uncaught SyntaxError: Unexpected token 'if'



// /** EXPRESSION STATEMENTS */
// console.log(4+3);// 7 Expression statement

// //console.log(console.log(4+3);)//Uncaught SyntaxError: missing ) after argument list

// console.log(console.log(4+3));// 7 undefined Expression statement

// let a;
// a=5;// Expression statement

// true; //Expression statement

// // console.log(true;);// Uncaught SyntaxError: missing ) after argument list
// console.log(true);



// /**Challanges */

// /**TASK 1 */

// const myObject={
//     x:10,
//     y:true
// };
// //console.log(delete myObject.x);//"delete" operator is used in the expression

// delete myObject.x;//Expression statement


// /**TASK 2 */

// function fn()
// {
//     console.log("Greeting from the 'fn'function");
//     return function(a){
//         console.log(a);
//     }
// }
// fn()// Greeting from the 'fn'function
// (true)// "true" because this line will be interpreted as function call with argument "true" 


// /** TASK 3 */
// function firstFunction(a,b){
//     return a+b;
// } // Function Decleration
// const secondFunction= function(a,b){
//     return a+b;
// };// Statement




// /** SCOPES */

// /** Example 1-Global Scope */
// var a = 10;
// let b = true;

// console.log(a);// 10
// console.log(window.a);// 10

// console.log(b);// true
// console.log(window.b);// undefined

// const c = "abcd";

// console.log(c);// abcd
// console.log(window.c);// undefined

// function myFunction(a){
//  console.log(a);// undefined 
//  console.log(b);// true
// }

// console.log(myFunction);// ƒ myFunction(a){ console.log(a);   }
// console.log(window.myFunction);// ƒ myFunction(a){ console.log(a);   }

// myFunction();// undefined true



// /** Example 2- Function Scope */
// let e;

// function myFunction(a,b){
//     const c=true;
//     console.log(c);
// //    console.log(d);// Uncaught ReferenceError: d is not defined at myFunction
//     console.log(e);// undefined

//     console.log(a, b)// Values of the parameters "a" and "b"
// }
// myFunction();

// myFunction(2,3);

// console.log(c);// Uncaught ReferenceError: c is not defined

// console.log(a);// Uncaught ReferenceError: a is not defined

// console.log(b);// Uncaught ReferenceError: b is not defined


// /** Example 3-Scope chain */
// const c = 2;
// function sum(a,b){
//     // const c=3;
//     function mult(a,b){
//         return a * b * c;
//     }
//     console.log(mult(a,b));
//     return a + b;
// }
// const result = sum(10,5);
// console.log(result);


// /**Example 4 */

// a=10;// Variable "a" will be automatically declared in the global scope

// console.log(a);

// const myFunction = function(){
//     b = 5;// Variable "b" will be automatically declared in the global scope
//     console.log(b);// 5
// }
// myFunction();
// console.log(b);



// /**Example 5 - Strict mode */

// "use strict";
//  a = 10;// Uncaught ReferenceError: a is not defined

// function myFn(){
//   b = 5;// Uncaught ReferenceError: b is not defined at myFn
// }
// myFn();



// /**Example 6 - Strict mode in function */
// a = 10;

// function myFn(){
//     "use strict";
//      b = 5;// Uncaught ReferenceError: b is not defined at myFn
// }
// myFn();



// /** CHALLANGES */
// //TASK 1
// const b = 2;
// let d= 15;
// function myFn1(a){
//     let b;
//     let d = 10;
//     myFn2(b);

// }

// function myFn2(a){
//     let c = 5;
//     console.log(a, b, c, d);
// }
// myFn1();


// //TASK 2
// "use strict";
// function myFunction(){
//     let a = 2;
//     return a;
// }
// myFunction();


// //TASK 3 callback function

// setTimeout(function myFn(){
//     console.log("Hello from myFn function");
// },2000);

// myFn();

// //ANSWER

// // Uncaught ReferenceError: myFn is not defined
// // Hello from myFn function




// /** ARRAY */

// //Example 1 -Empty array
// const myArray=[];
// console.log(myArray);


// //Example 2 Add elements to Array
// const myArray = [];
// myArray[0] = "First Element";
// console.log(myArray);

// myArray[1] ="Second Element";
// console.log(myArray);

// myArray.push("Third Element");// Preferable method to add elements in an array
// console.log(myArray);


// //Example 3 - Modify Elements
// const myArray=[3,true,"abcd",{}];
// console.log(myArray);

// myArray[1]="New Value For Second Element"
// console.log(myArray);

// myArray[0]=null;
// console.log(myArray);

// myArray[3].newProp = 10;
// console.log(myArray);
// console.log(myArray[3].newProp);//10
// console.log(myArray[3]["newProp"]);


// //Example 4 -Square bracket notation
// const myArray = [1, 2];
// console.log(myArray[0]);//1
// //If Property in the Object is numeric you can't use . notation
// // console.log(myArray.0);//Uncaught SyntaxError: missing ) after argument list


// //Example 5 - Delete Elements
// const myArray=[true, null, 1, 2, "abcd"];
// console.log(myArray);
// delete myArray[2];
// console.log(myArray);

// console.log(myArray[2]);// Undefined

// myArray.pop();
// console.log(myArray);// [true, null, empty, 2]

// myArray.pop();
// console.log(myArray);// [true, null, empty]

// myArray.shift();
// console.log(myArray);


// //Example 6 - Compare Arrays
// const myArray1 = [1, 2, 3];
// const myArray2 = [1, 2, 3];

// console.log(myArray1===myArray2);// false

// const copyofmyArray1 = myArray1;

// console.log(copyofmyArray1===myArray1);// true

// console.log(myArray1.toString()===myArray2.toString());// true


// //CHALLANGE 1
// var myArray =[true,null];
// console.log(myArray);
// myArray[2]="Hello";
// console.log(myArray);
// myArray[3]=100;
// console.log(myArray);

// console.log("-------")

// var myArray1 =[true,null];
// console.log(myArray);
// myArray1.unshift("Mello");
// console.log(myArray);
// myArray1.unshift(200);
// console.log(myArray1);


// // CHALLANGE 2
// const myArray = [1,2]
// myArray[10]='abc';
// console.log(myArray);// [1, 2, empty × 8, 'abc'] length is 11


// //CHALLANGE 3
// let car1={
//     carBrand : "Toyota",
//     Price : 300000
// };
// let car2={
//     carBrand : "Audi",
//     Price : 400000
// };
// let car3={
//     carBrand : "Ferrari",
//     Price : 500000
// };
//  let ArrayofCars = [car1,car2,car3];
//  console.log(ArrayofCars);

// ArrayofCars[3]=car4={carBrand : "BMW",Price : 300000};
// console.log(ArrayofCars);


// /** LOOPS */

// /** Regular for loop */
// //Example 1
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i);// "i" is not available in the global scope


// //Example 2- Regular for loop with array
// //NEVER USE THIS KIND OF LOOPS WITH ARRAYS
// const myArray = [0,true, "abcd",null];
// for (let i = 0; i<myArray.length; i++){
//     console.log(myArray[i]);
// }

// /** WHILE LOOP */
// // Example 3
// let i=0;
// while(i > -5){
//     console.log(i);
//     i--;
// }


// /** Do While Loop */
// // Example 4
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i < 10);


// /** For in loop */
// // Example 5
// const myObject = {
//     a: "abc",
//     b:true,
//     c:null,
//     d:150
// };
// for(let key in myObject){
//     console.log(key);
//     console.log(myObject[key]);
// }


// //Example 6 - for in loop with Objects with inherited properties
// const myObject = {
//     a: "abc",
//     b:true,
//     c:null,
//     d:150
// };
// Object.prototype.globalprop = "Inherited property";
// for(let key in myObject){
//     console.log(key, myObject[key]);
// }


// //Example 7 - for in loop with arrays
// const myArray = [true, {},{}, 10];
// Array.prototype.globalprop = "Global array property";
// for (let key in myArray){
//     console.log(key, myArray[key]);
// }


// //Example 8 - for loop with Arrays
// const persons = [
//     {
//         name:"Kartik",
//         age: 24
//     },
//     {
//         name:"buckey",
//         age: 4
//     },
//     {
//         name:"Sheela",
//         age: 21
//     }
// ];
// for(let person of persons){
//     console.log(person.name +" "+person.age + "years old");
// }
// // console.log(person);//Uncaught ReferenceError: person is not defined


// /** Conditional Statements */

// /** "if" statement */
// // Example 1
// let i = 10;
// if(i > 0){
//     console.log(i);
// }
// if (i){
//     console.log(i);
// }


// /**"if else" Statement */
// // Example 2
// const myArray = [4, true, "abc", null, 5, 10];
// if(myArray.length>5){
//     console.log("Array is large");
// }
// else{
//     console.log("Array is small");
// }


// // Example 3 Chaining "if" and "if else" statements
// let color = "green";
// if(color === "green"){
//     console.log("it is green in color")
// }
// else if (color === "yellow"){
//     console.log("It is yellow in color")
// }
// else if(color === "red"){
//     console.log("it is red in color")
// }
// else {
//     console.log("color is Unknown");
// }


// /** "Switch" statement */
// // Example 4
// let color="green";
// switch(color){
//     case "green":
//         console.log("it is green in color");
//         break;
//     case "yellow":
//         console.log("it is yellow in color");
//         break;
//     case "red":
//         console.log("it is red in color");
//         break;
//     default:
//         console.log("color is Unknown")
// }


// /** Ternary operator */
// // Example 5
// let i=10;
// let j;
// j =  i < 100 ? i : 0 ;
// console.log(j);

// i > 10 && j
// ? console.log("conditional is truthy")
// : console.log("conditional is falsy");
// console.log(j);

// // Task 1
// const myObject = {
//     key1: true,
//     key5: 10,
//     key3: "abc",
//     key4: null,
//     key10:NaN
// };
// for(let key in myObject){
//     if(key==="key1" || key === "key3"){
//         console.log(myObject[key]);

//     }
// }


// // Task 2
// const MIN = 1;
// const MAX = 9;
// const myNumbers = [
//     4,
//     6,
//     8,
//     9,
//     2
// ];
// let newRandomNumber;
// function getRandomInt(min, max)
// {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function isNotUnique(newRandomNum){
//     for (let number of myNumbers)
//     {
//         if(number === newRandomNum)
//         {
//             console.log("Number"+ newRandomNum +"is not unique !");
//             return true;
//         }
//     }
// }
// do
// {
//     newRandomNumber = getRandomInt(MIN, MAX);
// }
// while(isNotUnique(newRandomNumber));
// myNumbers.push(newRandomNumber);
// console.log(myNumbers);


// //Task 3 - for in loop
// const myObject = {
//     name: "Kartik",
//     age:24,
//     city: "Delhi"
// };
// Object.prototype.country = "India";
// for (let key in myObject){
//     if(myObject.hasOwnProperty(key))
//     {
//         console.log(myObject[key]);
//     }
    
// }

// //Task 4 
// function emptyArray(inputArray){
//     if(inputArray.length > 0)
//     {
//         return "Array is not empty";
//     }   else 
//     {
//         return"Array is empty";
//     }
//     }
// console.log(emptyArray([1,3]));
// console.log(emptyArray([]));


// //Task 5
// function emptyArray(inputArray)
// {
//     return inputArray.length > 0
//     ? "Array is not empty"
//     :"Array is empty"
// }
// console.log(emptyArray([1,3]));
// console.log(emptyArray([]));



// /** ADVANCE TOPICS */
// //Example 1
// //Global execution context
// console.log("This is global execution context");

// const a = 10;
// console.log(a);
// function myFunction(a,b){
//     console.log("This is function execcution context");
//     return a + b;
// }
// console.log(myFunction(5, 20));// function execcution context

// console.log(myFunction(5, 2));// function execcution context


// //Example 2 - Execution contexts stack

// console.log("Global execution context - root level in the stack");
// function firstLevel()
// {
//     console.log("Function execution context - second level in the stack")
    
//     function secondLevel()
//     {
//         console.log("Function execution context - third level in the stack")   
        
//         function thirdLevel()
//         {
//             console.log("Function execution context - forth level in the stack")
//         }
//             thirdLevel();
//     }
//         secondLevel();
// }
//     firstLevel();


// // Example 1 - "this" in the global execution context

// console.log(this);// window
// console.log(this === window);// true

// this.console.log("Method of this");// Method of this


// // Example 2 - "this" inside of the function
// function myFunction(){
//     console.log(this);
// }
// myFunction();
// window.myFunction();


// // Example 3 - "this" inside of the function in strict mode
// "use strict";
// function myFunction(){
//     console.log(this);
// }
// myFunction();// "this" is undefined in strict mode
// window.myFunction();// "this" is equal to window in strict mode


// // Example 4 - "this" inside of the methods of the object
// const myObject = 
// {
//     name: "buckey",
//     age:4,
//     greeting: function()
//     {
//         console.log(this);// {name: "buckey",age:4,greeting:....}
//         console.log("Name of the person is" + this.name + "and age is "+ this.age);//name of the person is buckey and age is 4
//     }
// };
// myObject.greeting();

// // greeting();// Uncaught ReferenceError: greeting is not defined



// // Example 1 CALL - custom "this"
// const myObject = {
//     a:10,
//     b:null
// };
// function myFunction(){
//     console.log(this);
// }
// myFunction();// window

// myFunction.call(myObject);// "this" is {a: 10, b: null}


// // Example 2 CALL - custom "this" and arguments
// const myObject = {
//     a:10,
//     b:null
// };
// function myFunction(a, b){
//     console.log(a+b);
//     console.log(this);
// }
// //myFunction();// window

// myFunction.call(myObject, 10, 3);// "this" is {a: 10, b: null}


// // Example 3 CALL- Call method of the object with other object as "this"
// const person1 = {
//     city:"Delhi",
//     name:"kartik",
//     info:function() {
//         console.log(this.name + " lives in "+ this.city);
//     }
// };
// person1.info();

// const person2 = {
//     city:"Mumbai",
//     name:"Rahul"
// }
// person1.info.call(person2);


// // Example 4 APPLY - custom "this" and arguments
// const myObject = {
//     a:10,
//     b:null
// };
// function myFunction(a, b, c){
//     let sum = a+ b+ c;
//     for(let key in this){
//         if(typeof this [key]=== "number"){
//             sum += this[key];
//         }
//     }
//     console.log(sum);
// }
// myFunction.apply(myObject,[10,3,5])// {a: 10, b: null}


// // Example 5 BIND - custom "this" and arguments
// const myObject = {
//     a:10,
//     b:null
// };
// function myFunction(a, b){
//     console.log(a+b);
//     console.log(this);
// }
// const customFunction = myFunction.bind(myObject,10, 3);// present "this" and both arguments

// customFunction();

// const customFunction2 = myFunction.bind(myObject);// preset only "this"
// customFunction2(20, 6);// call with custom arguments

// const customFunction3 = myFunction.bind(myObject,50);// present "this" and only first argument
// customFunction3(30);//pass remaning arguments 



// /** Pass by value v/s Pass by Refrence */

// // Pass by value
// // if variable that holds value of primitive value type is passed to the function as argument, it's value can't be changed inside of the function

// function myFunction(ParameterA){
//     ParameterA = 20;
//     return ParameterA;
// }
// const a = 10;
// console.log (myFunction(a));// 20
// console.log(a);// 10


// // Pass by refrence
// const myArray = [1, 2, 3];
// console.log(myArray);
// function myFunction(arr){
//     console.log(arr === myArray); // true 
//     arr.push(4);
//     console.log(arr);
//     return arr;
// }
// myFunction(myArray);
// console.log(myArray);


// // IIF - Immediately invoked function expression
// function addCustomGlobalMethod(globalObject)
// {
//     globalObject.CustomMethod = function()
//     {
//         console.log("Greeting form the custom method");
//     }
// }
// addCustomGlobalMethod(this);
// console.log(this === window);// true
// console.log(typeof window);// object

// this.CustomMethod();
// // Greeting form the custom method

// window.CustomMethod();
// // Greeting form the custom method

// CustomMethod();
// // Greeting form the custom method


// // Callbacks, events,events queue and execution contexts stack,Web APIs
// function watingFn(timeInMs){
//     const futureTime = Date.now() + timeInMs;
//     while (futureTime > Date.now()){
//         //Wating....
//     }
// }
// watingFn(5000);

// setTimeout(() => console.log("callback is executed"),2000);

// console.log("Last statement in the global execution context");


// //closer 
// function outerFn(mult)
// {
//     const a = 10;
//     function innerFn(b)
//     {
//         console.dir(innerFn);
//         return (a + b)* mult;
//     }
//     return innerFn;
// }
// const res1 = outerFn(2);
// console.log(res1(20));

// const res2 = outerFn(3);
// console.log(res2(20));



// /**ES6 Variable Life Cycle */

/** var */
// // Scope
// var a = 10;
// console.log(a);

// function fn(){
//     var b = true;
//     console.log(b);
// }
// fn();
// console.log(b);// Uncaught ReferenceError: b is not defined


// //Reassingment
// var c= 1;
// c =2;

// function fn2(){
//     c = 3;
// }
// fn2();


// // Redeclaration

// var d = false;
// var d = true;

// function fn3(){
//     var d = 5;
// }
// fn3();


// //Hoisting
// e = 5;
// var e;

// //Global Scope
// var a;

// // Function Scope
// function fn(){
//     var b;
// }

// // Block Scope
// {
//     var c;
// }

// if(true){

// }else{

// }

/** let */

// // Scope
// let a = 10;
// console.log(a);

// function fn(){
//     let b = true;
//     console.log(b);
// }
// fn();
// // console.log(b);// Uncaught ReferenceError: b is not defined
// {
//     let b1 = 1;
// }
// // console.log(b1);// Uncaught ReferenceError: b1 is not defined

// for (let j = 0; j< 5; j++){
//     console.log(j);
// }


// //Reassingment
// let c= 1;
// c =2;

// function fn2(){
//     c = 3;
// }
// fn2();


// // Redeclaration
// let d = false;
// // let d = true; //Uncaught SyntaxError: Identifier 'd' has already been declared
// console.log(d);
// function fn3(){
//     var d = 5;
//     console.log(d);
// }
// fn3();
// {
//     let d = "abcd"
//     console.log(d);
// }


// //Hoisting
// let e;
// e = 5;
// // let e;// Uncaught ReferenceError: Cannot access 'e' before initialization

// function fn4(){
//     let f;
//     f = 10; 
//     console.log(f);
//     //let f;
//     //f = 10;
// }
// fn4();



/** Constant */
// const - variable that cannot be re assigned
// const myConst = 10;
// myConst =12;

// const myConst = [] // refrence type
// myConst.push("newElement");
// myConst.push("anotherElement")
// // myConst = [1,2,3,4];// Uncaught TypeError: Assignment to constant variable.

// const anotherConst = {}; // refrence type
// anotherConst.a = 10;
// // // anotherConst = {
// // //     b: 20
// // // };//Uncaught TypeError: Assignment to constant variable.

// const primitiveTypeConst = null; // primitive type
// // primitiveTypeConst = undefined; // Uncaught TypeError: Assignment to constant variable.

// const PI = Math.PI; 


// // Scope
// const a = 10;
// console.log(a);

// function fn(){
//     console.log(a);
//     const b = true;
//     console.log(b);
// }
// fn();
// // console.log(b);// Uncaught ReferenceError: b is not defined
// {
//     const b1 = 1;
// }
// // console.log(b1);// Uncaught ReferenceError: b1 is not defined

// for (let j = 0; j< 5; j++)//if we use const insted of let then Uncaught TypeError: Assignment to constant variable
// {
//     console.log(j);
// }


// //Reassingment
// const c= 1;
// // c =2; // not possible with const

// function fn2(){
//    // c = 3; // not possible with const
// }
// fn2();


// // Redeclaration
// const d = false;
// // const d = true; //Uncaught SyntaxError: Identifier 'd' has already been declared
// console.log(d);
// function fn3(){
//     const d = 5;
//     console.log(d);
// }
// fn3();
// {
//     const d = "abcd"
//     console.log(d);
// }


// //Hoisting
// const e = 5;
// // let e;// Uncaught ReferenceError: Cannot access 'e' before initialization

// function fn4(){
//     const f = 10; 
//     console.log(f);
//     //let f;
//     //f = 10;
// }
// fn4();

/**Variable usage Guidelines */
// /** 1. Make code readable for other developers */
// a = "Kartik"
// b = "Delhi"

// function test(x, y){
//     d = " Hello " + x + " from " + y;
//     return d;
// }
// var a, b, d;
// console.log(test(a,b));

/** Re-written with improved readability */

// var personName = "Kartik"
// var personCity = "Delhi"

// function test(personName, personCity){
//     var greetPerson = " Hello " + personName + " from " + personCity;
//     return greetPerson;
// }
// console.log(test(personName,personCity));


// /** 2. Always declare variables before first usage */
// a= 10;
// var a; 


// /** 3 Always add "use strict at the begning of each JS file" */
// "use strict";
// let b =10;
// function fn(){
//     var d = b;
//     return d;
// }


// /** 4. Don't expose to the outer scopes locally used variables */
// //Exposed
// function fn2(){
//     myArray = [1, 2, 3];
//     for(i = 0; i< myArray.length; i++){
//         console.log(myArray[i]);
//     }
// }
// fn2();

// //Don't Expose
// function fn2(){
//     myArray = [1, 2, 3];
//     for(var i = 0; i< myArray.length; i++){
//         console.log(myArray[i]);
//     }
// }
// fn2();


// /** Whare to use CONST ? */
// //Example 1
// function multiplier(a){
//     const MULT = 10;
//     return a * MULT;
// }
// console.log(multiplier(2));
// console.log(multiplier(5));

// // Example 2 (Execute in Node.js)
// const path = require("path");
// console.log(path.resolve());

// // Example 3 
// const sum = function(a, b){
//     return a + b;
// };
// console.log(sum(2, 5));


// /** Whare to use Let ? */
// // Example 1
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// // Example 2
// function shortStr(str){
//     const MAX_LENGTH = 10;
//     if (str.length>MAX_LENGTH)
//     {
//         let newStr;
//         newstr = str.substring(0, MAX_LENGTH)
//         console.log(newStr);
//     }
//     else
//     {
//        // console.log(newStr);// not defined
//         console.log(str);
//     }
// }
// shortStr("Long string example");
// shortStr("short");


// /**Whare to use Var */
// // Example 1
// var person = {
//     name:"kartik",
//     age:24
// };
// function updatePerson(person){
//     var updatePerson = {};
//     if(person.name) {
//         updatePerson.name = person.name;
//     }
//     updatePerson.updateAt = new Date();
//     return updatePerson;
// }
// console.log(updatePerson(person));


// /** Challange 1 */
// "use strict"
// const number1 =[23, 87 ,110, 11, 20, 5, 34];
// const number2 =[11, 21, 31];
// const onlyOddNumbers = function(arr){
//     var OddNumbers = [];
//     var evenNumbersQuantity = 0;
//     const len = arr.length;
//     for (let i = 0; i< len; i++){
//         arr[i] % 2
//         ? OddNumbers.push(arr[i])
//         :evenNumbersQuantity++;
//     }
//     var info;
//     if (evenNumbersQuantity === 0){
//         info = "Array contains only odd numbers";
//         console.log(info);
//     }
//     else{
//         info = "There are "+ evenNumbersQuantity + "even numbers";
//         console.log(info);
//     }
//     return {
//         OddNumbers:OddNumbers,
//         evenNumbersQuantity:evenNumbersQuantity
//     };
// };
// console.log(onlyOddNumbers(number1));
// console.log(onlyOddNumbers(number2));


// /** Challange 2 */
// const menuItems = document.querySelectorAll(".nav-link ");
// const LEN = menuItems.length;
// console.log(menuItems);
// for(let i = 0; i < LEN; i++){
//     menuItems[i].onclick = function(){
//        for (let j = 0; j< LEN; j++ ){
//            menuItems[j].classList.remove("active");
//        }
//     menuItems[i].classList.add("active");
//     console.log(menuItems[i].innerHTML); 
//     };
// }



// /** Variable Lifecycle Phase */
// // life cycle of var
// var a; // Declaration , Initializartion
// a = 10;// Assingnment

// function fn(b)// Declaration , Initializartion = undefined value
// {
//     console.log(b);
// }
// fn();

// // with function
// function fn(){
//     console.log(c); // undefined
//     var c;
//     d = 10;
//     console.log(d);
//     var d;
// }
// // console.log(c); // Uncaught ReferenceError: c is not defined
// // console.log(d); // Uncaught ReferenceError: d is not defined
// fn();

// // life cycle of undeclared variable 

// function fn(){
//     function fn2(){
//        // console.log(a); // a is not defined
//         a = 10;
//         console.log(a);
//     }
//     fn2();
//     console.log(a);
// }
// fn();
// console.log(a); // a is declared in the global scope

// // life cycle of let

// // GLobal scope
// let a;// a is initialized with "undefined"
// console.log(a);// undefined
// a = 10;// a is assigned and has value 10
// console.log(a);// 10

// // function
// function fn(){
// console.log(a); // a is not defined
// let a;// a is initialized with "undefined"
// console.log(a);// undefined
// a = 10;// a is assigned and has value 10
// console.log(a);// 10
// }
// // console.log(a);
// fn();

// // life cycle of const
// // console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// const a = 10;
// console.log(a);

// {
//     const b = 1;
//     console.log(b);
// }
// // console.log(b); // Uncaught ReferenceError: b is not defined


// // Function life cycle
// console.log(laugh);// function contents in the string format
// laugh();// declared, initialized and assigned
// function laugh(){
//     console.log("ha ha ha");
// }
// laugh();


// // IIFE - Immediately Invoked Function Expression
// (function(){
//     console.log("That's function expression")
// })();


// // Function Expression assigned to the value
// // console.log(sum(5, 10)); // TDZ- Temporal Dead Zone Uncaught ReferenceError: Cannot access 'sum' before initialization
// const sum = function(a, b) {
//     return a + b;
    
// };
// console.log(sum(5, 10));// success

// // Variable lifeCycle example 1
// a= 2;
// const b = 5;
// const sum = function(a, b){
//     return a + b;
// };
// if(b > a){
//     let multResult = mult(a, b);
//     finalResult = multResult;
// } else{
//     let sumResult = sum(a, b);
//     finalResult = sumResult;
// }
// var a;
// function mult(a, b){
//     result = a*b;
//     return result;
//     var result;
// }
// console.log(finalResult);


// //variable lifeCycle example 2
// let b = 5;
// a = b;
// {
//     let c =a;
// }
// var a = 1;

// var c;
// console.log(a, b, c);



// /** Arrow function */

// // function declaration
// function fn(a, b){
//     return a + b;
// }
// fn(2,3);

// // anonymous function expression
// //2.1 Assingment to the variable 
// const fn1 = function (a, b){
//     return a + b; 
// };

// // 2.2 IIFE - Immediately Invoked Function Expression
// (function(a, b){
//     console.log("IIFE is executed");
//     return a + b;
// })(2, 3);

// //2.3 Callback
// setTimeout(function(a, b){
//     console.log("callback function is executed");
//     return a + b;
// },1000);

// // named function
// //3.1 Assingment to the variable 
// const fn1 = function sum(a, b){
//     return a + b; 
// };

// // 3.2 IIF - Immediately Invoked Function
// (function sum(a, b){
//     console.log("IIFE is executed");
//     return a + b;
// })(2, 3);

// //3.3 Named Callback function
// setTimeout(function sum(a, b){
//     console.log("callback function is executed");
//     return a + b;
// },1000);


// // anonymous function expression
// function (a, b){
//     return a + b;
// }

// // anonymous arrow function expression
// // Implicit return of a + b
// (a, b) => a + b
// // explicit return of a + b
// (a, b) => {
//     returb a + b;
// }
// // omit () with one papameter
// a => a * a
// // () are mandatory without any parameters
// () => 2
// // explicit return of the object
// (a, b) =>{
//     return {
//         a1: a,
//         b1:b
//     }
// }
// // // Implicit return of the object
// (a, b) =>{
//         a1: a,
//         b1:b
// }

// /** Using arrow function */
// // Example 1
// // console.log(sum(3,6)); //Uncaught ReferenceError: Cannot access 'sum' before initialization
// const sum = (a, b) => a + b;
// console.log(sum(3,6));


// // Example 2
// const post = {
//     title:"Sample title",
//     Comments:10,
//     shared: true,
//     published: true,
//     postId: 5043
// }

// // const processedPost = (post) => {
// //     return {
// //         title:post.title,
// //         Comments: post.Comments,
// //         popular: post.Comments > 5 ? true :false
// //     }
// // }
// // console.log(processedPost(post));

// // Implicit return of the object

// const processedPost = post => ({
//         title:post.title,
//         Comments: post.Comments,
//         popular: post.Comments > 5 ? true :false
    
// });
// console.log(processedPost(post));

// // Example 3
// (() => {
//     this.greet= () => "hey what's up ?";
//     return this;
// })();


/** Arrow functions and "this" */

// //Example 1
// const num = {
//     value:100,
//     info: ()=>{
//         console.log(this);// window
//         return this.value;
//     }
//     //info: function info(){
//     //     console.log(this);
//     //     return this.value;
//     // }
// };
// console.log(num.info());


// //Example 2
// const anotherNum = {
//     value:5,
//     // info: ()=>{
//     //     console.log(this);// window
//     //     return this.value;
//     // }
//     info: function info(){
//         console.log(this);
//         return this.value;
//     }
// };
// const newNum = {
//     value: 17
// };
// console.log(anotherNum.info.call(newNum));



//Example 3
// const str = {
//     value:"Delayed greeting",
    // this is lost in the callback function
    // greet: function greet(){
    //     setTimeout(function(){
    //         console.log(this);// window
    //         console.log(this.value);// Undefined
    //     },1000);
    //  }
    //  //Option 1
    // greet: function greet(){
    //     const self = this;
    //    setTimeout(function(){
    //        console.log(self);
    //        console.log(self.value);// Delayed greeting
    //    },1000);
    // }

//     //Option 2
//     greet: function greet(){
//         setTimeout(()=>{
//             console.log(this);// str
//             console.log(this.value);// Delayed greeting
//         },1000);
//      }
// };
// console.log(str.greet());



// //Example 1 - Object literal
// const num = {
//     value:100,
//     // info: ()=>{
//     //     console.log(this);// window
//     //     return this.value;
//     // }
//     info: function (){
//         console.log(this);
//         return this.value;
//     }
// };


// // Example 2 - function constructor
// function GroceryItem(title, kind){
//     this.title = title;
//     this.kind = kind;
// }
// /**Uncaught TypeError: GroceryItem is not a constructor */
// // const GroceryItem = (title, kind) => {
// //     this.title = title;
// //     this.kind = kind;
// // };
// GroceryItem.prototype.info = function(){
//     return this.title + " is " + this.kind;
// };
// // /** "this" is window and function always returns "undefined is undefined" */
// // GroceryItem.prototype.info = () => {
// //     console.log(this);
// //     return this.title + " is " + this.kind;
// // }
// const apple = new GroceryItem("Apple","fruit");
// console.log(apple);
// const brocolli = new GroceryItem("Brocolli","vegetable");
// console.log(brocolli);


// /** Button */
// const createButton = ()=>{
//     const btn =document.createElement("button");
//     let clickQty = 0;
//     btn.innerHTML = "click me";
//     // btn.onclick = function(){
//     //     console.log("Button was clicked")
//     //     btn.innerHTML = "Button was clicked "+ ++ clickQty +" times";
//     // };

//     /**Regular function expression */
//     btn.addEventListener("click",function(){
//         //console.log(this);
//         console.log("Button was clicked")
//         this.innerHTML = "Button was clicked "+ ++ clickQty +" times";
//     });

//         // /** Arrow function expression */
//         // btn.addEventListener("click",() => {
//         //     console.log("Button was clicked")
//         //     console.log(this) // window object
//         //     this.innerHTML = "Button was clicked "+ ++ clickQty +" times";
//         // });
//     document.body.appendChild(btn);
// };
// createButton("Click me");


// /** Arguments in functions */

// //regular function declaration
// function sum(){
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(Array.isArray(arguments));
//     const argumentsArray = Array.from(arguments);
//     console.log(argumentsArray);
// }
// sum(1,2,3,4,5,6,7);


// // Arrow function Expression
// const sum2 = (...arguments) => {
//     console.log(...arguments);
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(Array.isArray(arguments));
//     const argumentsArray = Array.from(arguments);
//     console.log(argumentsArray);
// };
// sum(1,2,3);
