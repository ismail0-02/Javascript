console.log("Hello World!")
alert("Hello World!")

console.log("chap-----------4----------------")

//ques 1//
//ans 1 //
var userLogo,number1,__items ;
console.log(userLogo,number1,__items)

//ques 2//
//ans 2 //
//legal//
console.log("Legal:")
//var userName;
//var user_Name;
//var num1;
//var user$;
//var user_$2;
console.log("userName \nuser_Name \nnum1 \nuser$ \nuser_$2")

//illegal//
console.log("illegal:")
//var 1user$;
//var user-name;
//var function;
//var !info;
//var 02dob;
console.log("1user$ \nuser-name \nfunction \n!info  \n02dob")

//ques 3//
//ans 3 //
document.writeln("<h1> a) Rules for naming JS variables.</h1>")
document.writeln("<h2> b) Variables names can only contain 'letter','numers','underscore' and 'dollar sign'.</h2>")
document.writeln("<h2> c) Variable must begin wiith 'letter','underscore' or 'dollar sign'. </h2>")
document.writeln("<h2> d) Variables names are case `sensitive`.</h2>")
document.writeln("<h2> e) Variables name should not be JS `keyword`.</h2>")


console.log("chap-----------5----------------")
document.writeln("<h1>chap-----------5----------------</h1>")
//ques 1//
//ans 1//
document.writeln("<h1>Ans 1 </h1>")
let num1 = 25
let num2 = 75
let sumOfNum = num1 + num2 
console.log(sumOfNum)
document.writeln("<h2> Sum of 25 and 75 is 100 ")
//ques 2//
//ans 2//
document.writeln("<h1>Ans 2 </h1>")
let num3 = 55
let num4 = 30
let Subraction  = num3 - num4
console.log(Subraction)
document.writeln("<h2> Subract of 55 and 30 is 25 ")
let num5 = 5
let num6 = 10
let Multiply  = num5 * num6
console.log(Multiply)
document.writeln("<h2> Multiplication of 5 and 10 is 50 ")
let num7 = 75
let num8 = 15
let division  = num7 / num8
console.log(division)
document.writeln("<h2> Division of 75 and 15 is 5 ")

//ques 3//
//ans 3//
document.writeln("<h1>Ans 3 </h1>")
let a = 10
console.log(a)
 document.writeln (" <br>Inital value is ",a )
 a = a + 15
 console.log(a)
  document.writeln ("<br>Value after increment is ",a )
  a = a + 7
  console.log(a)
  document.writeln ("<br>Value after addition  is ",a )  
  a = a - 2
   console.log(a)
  document.writeln ("<br>Value after decrement  is ",a )   
  a = a % 3
  console.log(a)
   document.writeln ("<br>The remainder  is ",a )     

//ques 4//
//ans 4//
document.writeln("<h1>Ans 4 </h1>")
let cost=  600 
let num = 5 
let total = cost * num
console.log(cost)
document.writeln("<br> The cost of one ticket is ",cost)
document.writeln("<br> Total number of ticket is ",num)
document.writeln("<br> Total cost of ", num ,' is ', total)
console.log(num)
console.log(total)

//ques 5//
//ans 5//
document.writeln("<h1>Ans 5 </h1>")
document.writeln("<h1>Table of 4 </h1>")
var number=4
let mul = number*1
document.writeln("<h2>4 x 1 = ",mul,' </h2>')
 mul = number*2
document.writeln("<h2>4 x 2 = ",mul,' </h2>')
 mul = number*3
document.writeln("<h2>4 x 3 = ",mul,' </h2>')
 mul = number*4
document.writeln("<h2>4 x 4 = ",mul,' </h2>')
 mul = number*5
document.writeln("<h2>4 x 5 = ",mul,' </h2>')
 mul = number*6
document.writeln("<h2>4 x 6 = ",mul,' </h2>')
 mul = number*7
document.writeln("<h2>4 x 7 = ",mul,' </h2>')
 mul = number*8
document.writeln("<h2>4 x 8 = ",mul,' </h2>')
 mul = number*9
document.writeln("<h2>4 x 9 = ",mul,' </h2>')
 mul = number*10
document.writeln("<h2>4 x 10 = ",mul,' </h2>')
//ques 6//
//ans 6//
document.writeln("<h1>Ans 6 </h1>")
document.writeln("<h2>Part 1 </h2>")
var C = " C = (F-32)*1.8"
console.log(C)
document.writeln("<h3>" ,C, '</h3>')
var F = 50
document.writeln("<h3>F = " ,F, '</h3>' )
console.log(F)
var C = (F-32)*1.8
console.log(C)
document.writeln("<h3>C = " ,C, '</h3>' )

document.writeln("<h2>Part 2 </h2>")
let Fah = "<h3>F = (C *9/5) + 32  </h3>"
document.writeln(Fah)
console.log(Fah)
var Cel = 15
document.writeln("<h3>F = " ,Cel, '</h3>' )
console.log(Cel)
 Fah = (Cel *9/5) + 32
console.log(Fah)
document.writeln("<h3>C = " ,Fah, '</h3>' )

//ques 7//
//ans 7//
document.writeln("<h1>Ans 7 </h1>")
let item1 = 700
var quantity1 = 3
let item2 = 700
var quantity2 = 5
let shippingCharges = 100
let totalCost = (item1*3)+(item2*5)+shippingCharges
document.writeln(" <br>Cost of item one is ",item1)
document.writeln("<br>Quantity of item one is ",quantity1)
document.writeln("<br>Cost of item two is ",item2)
document.writeln("<br>Quantity of item two is ",quantity2)
document.writeln("<br>Shipping Charges  is ",shippingCharges)
document.writeln("<br> Total cost of your order is ",totalCost)

//ques 8//
//ans 8//
document.writeln("<h1>Ans 8 </h1>")
let totalMarks = 550
let marksObt = 475
let per = marksObt / totalMarks *100 
document.writeln("<h1>Marksheet</h1>")
document.writeln("Total Marks is ", totalMarks)
document.writeln(" <br>Marks obtained is ", marksObt)
document.writeln( '<br> Percantage:',per,'%')

//ques 9//
//ans 9//
document.writeln("<h1>Ans 9 </h1>")
document.writeln("<h2> Currency In PKR </h2>")
let dollar = 104.80
let riyal = 28 
dollar = dollar *10
document.writeln("Amount of 10 US dollars in PKR is: ",dollar)
riyal = riyal *25
document.writeln("<br> Amount of 25 Saudi Riyal in PKR is: ",riyal)
let totalCurrency = dollar + riyal
document.writeln(" <br> A person has 10 US dollars and 25 Saudi Riayls.<br>The amount he has in PKR is : ",totalCurrency)



//ques 10//
//ans 10//

document.writeln("<h1>Ans 10 </h1>")
let x = 5
document.writeln("  x = ",x)
x = x+5
document.writeln("<br> Add 5  ")
x = x*10
document.writeln("<br> Multiply 10  ")
x = x/2
document.writeln("<br> divide by  2   ")
document.writeln(" <br> x = ",x)

//ques 11//
//ans 11//

document.writeln("<h1>Ans 11 </h1>")
document.writeln("<h2> Age Calculator </h2>")
var currentYear = 2025
var birthYear = 1992
var age =  currentYear-birthYear 
document.writeln("Current year = ",currentYear)
document.writeln("<br>Birth year = ",birthYear)
document.writeln(" <br> Your age  = ",age)

//ques 12//
//ans 12//

document.writeln("<h1>Ans 12 </h1>")
document.writeln("<h2> The Geometrizer </h2>")
var radius = 25
document.writeln("Radius of cricle = ",radius)
var circum = 2*3.14*radius
document.writeln(" <br> The circumference is  = ",circum)
let area = 3.14 * radius*radius
document.writeln(" <br> Area of circle is = ",area)

//ques 12//
//ans 12//

document.writeln("<h1>Ans 13 </h1>")
document.writeln("<h2> The Life Time Supply Calculator </h2>")
let snacks = "slanty"
document.writeln("Favourite Snacks = ",snacks)
let myAge = 18
document.writeln("<br>Current age  = ",myAge)
let maxAge = 55
document.writeln("<br>Maximum age  = ",maxAge)
let snackPerDay = 5
document.writeln("<br>Snacks per day   = ",snackPerDay)
let totalSnacks = (maxAge-myAge)*snackPerDay
document.writeln("<br>You will need " , totalSnacks , snacks,' to last you until the ripe old age of ',maxAge)
