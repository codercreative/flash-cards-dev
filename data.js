//https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/main
//https://blog.hubspot.com/website/javascript-interview-questions

export const questions = [
  {
    id: 1,
    topic: "HTML",
    question: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language creating the structure of a webpage",
  },
  {
    id: 2,
    topic: "React",
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like",
  },
  {
    id: 3,
    topic: "JavaScript",
    question: "What is an arrow function?",
    answer:
      "Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.",
  },
  {
    id: 4,
    topic: "JavaScript",
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like",
  },
  {
    id: 5,
    topic: "JavaScript",
    question: "What will be returned in this statement? 0 || 'happy day'?",
    answer:
      "The logical OR operator will use the first value if it is truthy, i.e., anything apart from NaN, null, undefined, 0, '', and false. Otherwise, it will use the second value. In this case, 'happy day' will be returned.",
  },
  {
    id: 6,
    topic: "JavaScript",
    question: "What is hoisting?",
    answer:
      "Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. However, it's important to note that hoisting does not work the same way for function expressions (assigned to variables) as it does for function declarations.",
  },
  {
    id: 7,
    topic: "JavaScript",
    question: "What is event bubbling?",
    answer:
      "Event bubbling is a concept in web development where, when something happens (like a click) to an element on a webpage, that event doesn't just affect that specific element; it also ripples up through its parent elements in the HTML hierarchy. (see also event.stopPropagation() and event delegation)",
  },
  {
    id: 8,
    topic: "HTML",
    question: "When was HTML5 released and what are the key features of HTML5?",
    answer:
      "HTML5 was released in 2014 and introduced many new features like: semantic elements, allowed embedding audio and video content using audio and video tags. Also, the canvas tag allows developers to draw graphics, charts and animations. Also, localStorage was introduced. New input types (email, url, number as well as datalist among others). The viewport meta tag,...and more",
  },
  {
    id: 9,
    topic: "JavaScript",
    question: "Explain the difference between var, let and const",
    answer:
      "Var is outdated, because it is gloablly scoped and can thus be overwritten. Const and let are  block-scoped -- and let and allows reassignment. Const cannot be reassigned. Preferred usage is to use const, unless you need a variable that will be reassigned then use let.",
  },
  {
    id: 10,
    topic: "CSS",
    question: "Explain the box model and box-sizing in CSS",
    answer:
      "The box model is a conceptual model that describes the overall structure of an element (describes the layout of elements with content, padding, border and margin), while box-sizing is a CSS property controlling how dimensions are calculated. 'content-box' (default) excludes padding and border, while 'border-box' includes them.",
  },
  {
    id: 11,
    topic: "JavaScript",
    question:
      "What is the purpose of the JSON.stringify() and JSON.parse() methods?",
    answer:
      "JSON.stringify() converts a JavaScript object to a JSON string, and JSON.parse() converts a JSON string to a JavaScript object.",
  },
  {
    id: 12,
    topic: "JavaScript",
    question:
      "Explain how - this - works in JavaScript. Can you give an example of one of the ways that working with this has changed in ES6??",
    answer:
      "In short, `this` points to different things based on the context: the global environment, the object a method belongs to, the element that triggered an event, or the instance of an object. In ES6, arrow functions were introduced, and they handle this differently compared to traditional function expressions. In an arrow function, this is lexically scoped, meaning it retains the value of this from the surrounding code.",
  },
  {
    id: 13,
    topic: "JavaScript",
    question: "What is JavaScript and what are its key features?",
    answer:
      "JavaScript is a programming language used primarily to create dynamic web content. It can be run on both the client side (web browser) and the server side. It is compatible with all major web browsers",
  },
  {
    id: 14,
    topic: "JavaScript",
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== loose equal is used to compare two variables regardless of the variable's data type (1 == '1' => true). Whereas === strict equal is used to compare two variables' data type and compare values (1 === '1' => false)",
  },
  {
    id: 15,
    topic: "JavaScript",
    question: "What is an object in JavaScript?",
    answer:
      "An object in JavaScript is a collection of properties containing primitive data types, such as strings, numbers, booleans, and functions. An object can also have other objects as its values. Objects are used to model real-world entities and help organize code into reusable components.They are defined using curly braces '{}' and properties are defined as key-value pairs separated by a colon ':'",
  },
  {
    id: 16,
    topic: "JavaScript",
    question: "What is an array in JavaScript?",
    answer:
      "An array in JavaScript is an ordered list of elements containing any data type, including primitive types such as strings and numbers, objects, and other arrays. Arrays are used to store collections of data and can be iterated over using loops like forEach(). They are defined using square brackets '[]' and elements are separated by commas",
  },
  {
    id: 17,
    topic: "JavaScript",
    question: "What is a function in JavaScript?",
    answer:
      "A function in JavaScript is a reusable piece of code that can be used to perform a specific task. Functions are defined using the keyword 'function' followed by a name and parentheses '( )'. The body of the function contains instructions for how it should behave",
  },
  {
    id: 18,
    topic: "JavaScript",
    question: "What is an event in JavaScript?",
    answer:
      "An event is an action or occurrence that happens as a result of user interaction, such as clicking a button, hovering over an element, or pressing a key on the keyboard. Events can also be triggered programmatically using JavaScript code.",
  },
  {
    id: 19,
    topic: "JavaScript",
    question: "What is a callback function in JavaScript?",
    answer:
      "A callback function is a function that is passed as an argument to another function and is executed after the parent function has been completed. Callback functions are often used in asynchronous programming to ensure that certain tasks are completed before proceeding to the next step.",
  },
  {
    id: 20,
    topic: "JavaScript",
    question: "What is a closure and how/why would you use one?",
    answer:
      "In simple terms, closures help you create little bundles of functionality with their own hidden treasures (variables). They're like self-contained worlds where certain information is kept safe and certain tasks can be accomplished. This makes your code more organized, secure, and flexible.",
  },
  {
    id: 21,
    topic: "JavaScript",
    question: "What is the purpose of 'strict mode' in JavaScript?",
    answer:
      "Strict mode is a feature of JavaScript that enables developers to write code in a 'strict' manner, which adds additional checks and controls to the language. It helps prevent errors by offering warnings when certain features of the language are used incorrectly. Strict mode also makes certain optimizations possible, improving performance and security.",
  },
  {
    id: 22,
    topic: "React",
    question:
      "What are React Hooks and how do they differ from class components?",
    answer:
      "Hooks (e.g., useState) are functions that enable functional components to have state and lifecycle features.",
  },
  {
    id: 23,
    topic: "React",
    question: "Explain the concept of virtual DOM in React?",
    answer:
      "Virtual DOM is a lightweight copy of the actual DOM, used for efficient updates and rendering in React.",
  },
  {
    id: 24,
    topic: "React",
    question: "What is the role of the key prop in React lists?",
    answer:
      "The key prop in React lists is used to uniquely identify and track elements during rendering, helping React efficiently manage updates. In practice, you can use the id property from your data as the key.",
  },
  {
    id: 25,
    topic: "JavaScript",
    question:
      "What is the difference between a variable that is null, undefined or undeclared? How would you go about checking for any of these states?",
    answer:
      "Undefined - a variable has been declared but not assigned a value, or it is used before a value has been assigned. Null - a value in JavaScript that explicitly represents the absence of an object value. It is often used to indicate that a variable intentionally has no assigned value.Undeclared - a variable that has been used without being formally declared using let or const. You can check for these states using conditional statements and the typeof operator for undefined",
  },
  {
    id: 26,
    topic: "JavaScript",
    question:
      "What are the benefits of using spread syntax and how is it different from rest syntax?",
    answer:
      "Spread Syntax (...) - Copy arrays or objects easily. Merge arrays or objects effortlessly. Pass elements of an array as separate things to a function. Rest Syntax (... in Function Parameters)- It's like collecting extra items you forgot to list in your shopping. Handle any number of items in a function without listing them all. Collect the remaining items into a handy container.",
  },
  {
    id: 27,
    topic: "JavaScript",
    question:
      "Can you give an example for destructuring an object or an array?",
    answer:
      "const colors = ['red', 'green', 'blue'] becomes: const [firstColor, secondColor, thirdColor] = colors;",
  },
  {
    id: 28,
    topic: "JavaScript",
    question: "What is the difference between the slice and splice method?",
    answer:
      "The slice method returns a shallow copy of a portion of an array into a new array. Does not modify the original array. Takes two optional parameters: start index and end index (end index is exclusive). The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements.Modifies the original array. Takes three parameters: start index, number of elements to remove, and optional elements to add.",
  },
  {
    id: 29,
    topic: "JavaScript",
    question:
      "What is a template literal? Can you give an example of generating a string with ES6 template literals",
    answer:
      "Allow you to interpolate (insert) variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string. Example: const name = 'John' const greeting = `Hello, my name is ${name}`",
  },
  {
    id: 30,
    topic: "JavaScript",
    question: "What is a higher order function?",
    answer:
      "A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce.",
  },
  {
    id: 31,
    topic: "JavaScript",
    question:
      "What is a Ternary operator and what does the word Ternary indicate?",
    answer:
      "A ternary operator is a shorthand way of expressing a simple if-else statement in programming. The term 'ternary' indicates that this operator takes three operands. It's also known as the conditional operator. The syntax for the ternary operator is as follows: const result = (x > 0) ? 'Yes' : 'No';",
  },
  {
    id: 32,
    topic: "JavaScript",
    question: "Implicit and explicit type coercion?",
    answer:
      "You could have a number, string, object, boolean – you name it. Sometimes, you may want to convert data from one type to another to fit a certain operation. Type conversion can either be implicit (automatically done during code execution) or explicit (done by the developer). Implicit Type Conversion is also known (and more commonly referred to) as Coercion. Examples: Implicit: const sum = 35 + 'hello' => console.log(sum) //35hello. Explicit: Number() or String(). for example. Explicit Type Conversion is also known as Type Casting.",
  },
  {
    id: 33,
    topic: "JavaScript",
    question:
      "Can you describe the main difference between the forEach method and the map method and why you would pick one versus the other?",
    answer:
      "forEach: - Executes a provided function once for each array element. It does not create a new array.When you want to perform an action for each element of the array but don't need a new array as a result. map method: - Creates a new array by calling a provided function on each element in the array. A new array containing the results of applying the provided function to each element of the original array. It returns a new array without modifying the original one. When you want to transform each element of the array and create a new array with the transformed values.",
  },
];
