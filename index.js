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

// //myObject = {};//Uncaught TypeError: Assignment to constant variable.

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
// console.log(myObject.a);//3 cause the property of a is present

// //code execution stopped
// //console.log(nonDeclaredVariable);//Uncaught ReferenceError: nonDeclaredVariable is not defined


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
// function myFunction(a,b){
//     console.log(a,b);
// }
// console.log(myFunction(3,2));

// //console.log(a);//Uncaught ReferenceError: a is not defined
// //console.log(b);//Uncaught ReferenceError: b is not defined



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
// function(){}//Uncaught SyntaxError: Function statements require a function name


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

// /**OR Operator || */
// console.log(true||false);//true
// console.log(false||true);//true

// console.log("-----");

// console.log("abc"||"");
// console.log(""||"abc");
// console.log(""||"");
// console.log(""||0||null||undefined||NaN||false);

// console.log("-----");

// let city;
// const defaultCity="Delhi";
// console.log(city||defaultCity);

// console.log("-----");

// let myCity=city||defaultCity;
// console.log(myCity);

// console.log("-----");

// city="Mumbai";
// myCity=city||defaultCity;
// console.log(myCity);

// console.log("-----");

// let myOtherCity=city||console.log("Fill in the city plese")||defaultCity;
// console.log(myOtherCity);

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

// console.log(myNumber1 % myNumber2);// 3
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

// Quick check that "if" is statement
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
//         return a * b * c;// 100
//     }
//     console.log(mult(a,b));
//     return a + b;
// }
// const result = sum(10,5);
// console.log(result);// 15


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
// // a = 10;// Uncaught ReferenceError: a is not defined

// function myFn(){
//     b = 5;// Uncaught ReferenceError: b is not defined at myFn
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




/** ARRAY */

// //Example 1 -Empty array
// const mAarray=[];
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
// console.log(myArray.0);//Uncaught SyntaxError: missing ) after argument list

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
// const myArray =[true,null];
// myArray[2]="Hello";
// myArray[3]=100;
// console.log(myArray);

// const myArray1 =[true,null];
// myArray1.unshift("Hello");
// myArray1.unshift(100);
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
