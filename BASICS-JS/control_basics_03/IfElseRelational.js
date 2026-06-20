if(true){
    console.log("hello if from java to js")
}else{
    console.log("hii");
}

//>, <, >= , <= , ==, =(assignment operator). === strict equal too. !=. !==(strict not equal to type check).

let temp =43;
if(temp < 50){
    console.log(`hello this temp is ${temp}`);
}else{
    console.log("greter than 50 ")
}

let ary = "Hello Aryan Bhai";
let van = 6;
console.log("hii aryan : ", ary , van);
console.log(`yup why backticks are important then ${van} + how are you ${ary}`);
/*
Accha question bhai. Pehle JavaScript mein backticks (` `) nahi the. Log aise hi karte the:
```javascript
let ary = "Hello Aryan Bhai";
let van = 6;
console.log("hii aryan :", ary, van);
Ya string banani ho to:
```javascript
let msg = "Value is " + van + " and name is " + ary;
Kaam to ho jata tha.

## Problem 1: Bahut saare `+` lagane padte the
```javascript
let name = "Aryan";
let age = 22;

let msg = "My name is " + name + " and my age is " + age;
Thoda bada ho jaye:

```javascript
let msg = "My name is " + name +
          ", age is " + age +
          ", next year I will be " + (age + 1);
```

Padhna mushkil ho jata hai.

Backticks ke saath:

```javascript
let msg = `My name is ${name}, age is ${age}, next year I will be ${age + 1}`;
```

Kaafi clean.

---

## Problem 2: Expressions directly likh sakte ho

Without backticks:

```javascript
console.log("Result = " + (5 + 3));
```

With backticks:

```javascript
console.log(`Result = ${5 + 3}`);
```

`${}` ke andar koi bhi JavaScript expression likh sakte ho.

```javascript
let a = 10;
let b = 20;

console.log(`${a + b}`);
console.log(`${a * b}`);
console.log(`${Math.max(a, b)}`);
```

---

## Problem 3: Multi-line Strings

Normal quotes:

```javascript
let msg = "Hello
Aryan";
```

❌ Error

Backticks:

```javascript
let msg = `Hello
Aryan`;
```

✅ Works

---

## Tumhare example mein

Ye:

```javascript
console.log("hii aryan : ", ary, van);
```

Sirf console ke liye theek hai.

Lekin agar string banana ho:

```javascript
let msg = "hii aryan : " + ary + " " + van;
```

Vs

```javascript
let msg = `hii aryan : ${ary} ${van}`;
```

Second wala zyada readable hai.

---

Java se compare karo. Java mein pehle:

```java
String msg = "Name: " + name + ", Age: " + age;
```

Ab modern Java mein:

```java
String msg = String.format("Name: %s, Age: %d", name, age);
```

JavaScript ke template literals (`${}`) thoda `String.format()` jaisa convenience dete hain.

To backticks koi naya kaam nahi karte jo pehle impossible tha. Unka main purpose hai:

* Better readability
* Less `+`
* Expression interpolation (`${}`)
* Multi-line strings

Isi liye modern JS codebases mein tum bahut baar dekhoge:

```javascript
const apiUrl = `${baseUrl}/clients/${clientId}`;
```

instead of

```javascript
const apiUrl = baseUrl + "/clients/" + clientId;
```

*/