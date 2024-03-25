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
      "Var is outdated, because it is globally scoped and can thus be overwritten. Const and let are  block-scoped -- and let and allows reassignment. Const cannot be reassigned. Preferred usage is to use const, unless you need a variable that will be reassigned then use let.",
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
      "Loose equality (==) in JavaScript compares two variables regardless of their data types. For example, 1 == '1' would evaluate to true because it only compares the values. On the other hand, strict equality (===) not only compares the values but also ensures that the data types are the same. Therefore, 1 === '1' would evaluate to false because the data types (number and string) are different.",
  },
  {
    id: 15,
    topic: "JavaScript",
    question: "What is an object in JavaScript?",
    answer:
      "An object in JavaScript is a collection of properties containing primitive data types, such as strings, numbers, booleans, and functions (called methods within an object). An object can also have other objects as its values. Objects are used to model real-world entities and help organize code into reusable components.They are defined using curly braces '{}' and properties are defined as key-value pairs separated by a colon ':'",
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
      "A closure in JavaScript is when an inner function has access to the variables of its outer function, even after the outer function has finished executing.",
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
      "The slice method in JavaScript returns a shallow copy of a specified portion of an array into a new array without modifying the original array. It accepts two optional parameters: the start index and the end index (where the end index is exclusive). In contrast, the splice method changes the contents of an array by removing or replacing existing elements and optionally adding new elements. Unlike slice, splice modifies the original array. It takes three parameters: the start index, the number of elements to remove, and optional elements to add.",
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
      "It is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce.",
  },
  {
    id: 31,
    topic: "JavaScript",
    question:
      "What is a ternary operator and what does the word ternary indicate?",
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
  {
    id: 34,
    topic: "JavaScript",
    question: "What is JavaScript?",
    answer:
      "JavaScript is a popular web scripting language and is used for client-side and server-side development. The JavaScript code can be inserted into HTML pages that can be understood and executed by web browsers while also supporting object-oriented programming abilities.",
  },
  {
    id: 35,
    topic: "JavaScript",
    question: "What are the various data types that exist in JavaScript?",
    answer:
      "Primitive Data Types: Number, string, boolean, undefined, null, symbol (added in ECMAScript 6) - represents a unique identifier. Object Data Types: Object (key, value pairs), array, function. Other Data Types: like Set",
  },
  {
    id: 36,
    topic: "JavaScript",
    question: "What are some of the built in methods in JavaScript?",
    answer:
      "For example: Array methods: push(), pop(), shift(), unshift(), slice(),length. String methods: charAt(), concat(), indexOf(), , toUpperCase(), toLowerCase(). Object methods: Object.keys(), Object.values(), Object.entries(). Math methods: Math.random(), Math.floor(), Math.max(), Math.min()...and many more...",
  },
  {
    id: 37,
    topic: "JavaScript",
    question: "What are some of the JavaScript frameworks and their uses?",
    answer:
      "React (library developed by Facebook) enables the creation of reusable UI components and supports a virtual DOM for efficient updates; Angular (developed by Google) provides a comprehensive framework for building large-scale applications with features like two-way data binding, dependency injection, and modularization.; Vue - is known for its simplicity and flexibility, Vue.js is easy to integrate into other projects and allows developers to incrementally adopt its features.",
  },
  {
    id: 38,
    topic: "JavaScript",
    question: "Explain the difference between null and undefined",
    answer:
      "Null in JavaScript means an empty value and is also a primitive type in JavaScript (Note: null is a primitive value that represents the intentional absence of any object value, in other words typeof = object). The variable which has been assigned as null contains no value. Undefined, on the other hand, means the variable has been declared, but its value has not been assigned. Use null when you want to represent the intentional absence of a value, and undefined when a variable has not been assigned a value.",
  },
  {
    id: 39,
    topic: "JavaScript",
    question:
      "1) What will be console.logged here: console.log(foo) foo = 1; 2) ...and here:  console.log(foo) var foo = 2; 3) ...and here: foo = 3; console.log(foo); var foo; 4)...and here: function foo() {}",
    answer:
      "1) foo is not defined 2) The variable foo is hoisted to the top of its containing scope, but its value is not assigned until the line where it's assigned 2. So, before the assignment, foo holds the value undefined. Therefore, when you log foo, it prints undefined. 3) foo will log 3. 4) it will be hoisted to the top and run anywhere === be sure to include why it is outdated to use var and that let and const variables are used instead (local scoped) to reduce errors",
  },
  {
    id: 40,
    topic: "JavaScript",
    question: "How does React handle the rendering of components?",
    answer:
      "In React, components represent different parts of the user interface. React handles rendering by utilizing a virtual DOM, which compares changes to the previous version before updating the actual DOM. This process minimizes unnecessary DOM updates, resulting in better performance and a smoother user experience.",
  },
  {
    id: 41,
    topic: "JavaScript",
    question:
      "Imagine you're working on a web application where you have a form submission event triggered by a button click. You've come across the e.preventDefault() method being used in the event handler function. Can you explain what e.preventDefault() does?",
    answer:
      "e.preventDefault() is a method in JavaScript that prevents the default action associated with an event from occurring. In the context of form submission triggered by a button click, e.preventDefault() can be used to stop the default behavior of the browser, which is to submit the form and reload the page.",
  },
  {
    id: 42,
    topic: "JavaScript",
    question: "What is currying in JavaScript?",
    answer:
      "Currying in JavaScript is a functional programming concept where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument",
  },
  {
    id: 43,
    topic: "Software development practice",
    question:
      "What is accessibility and why is it important? What are some techniquess for improving accessibility?",
    answer:
      "Accessibility refers to the practice of ensuring that websites and web applications are usable by people with disabilities. Techniques for enhancing accessibility are: Using semantic HTML tags, making sure that all functionality can be accessed by keyboard alone, setting alt text for images, using sufficient color contrast to ensure readability, making forms accessible with labels, legends, fieldsets; ensuring responsive design, etc.",
  },
  {
    id: 44,
    topic: "Software development practice",
    question: "What is responsive web design and why is it important?",
    answer:
      "Responsive web design ensures websites adapt to various devices and screen sizes, optimizing viewing and interaction experiences. It's crucial as it enhances user experience, accessibility, and SEO performance. Media queries play a pivotal role in responsive design, allowing styles to be adjusted based on device characteristics. Techniques like flexbox, grid layout, and fluid typography further aid in creating flexible and scalable layouts. Conditional loading with JavaScript optimizes performance by selectively loading assets based on device capabilities. Overall, responsive web design is essential for providing a seamless and inclusive browsing experience across a diverse range of devices.",
  },
  {
    id: 45,
    topic: "Software development practice",
    question:
      "What is version control, and why is it important in software development?",
    answer:
      "Version control, exemplified by tools like Git, is a system that tracks changes to files over time, enabling multiple contributors to collaborate on a project concurrently. It's critical in software development for preserving a chronological record of alterations, fostering collaboration among team members, and facilitating seamless rollback to previous versions in case of errors or necessary changes.",
  },
  {
    id: 46,
    topic: "Software development practice",
    question:
      "What techniques can you employ to optimize the performance of a web application?",
    answer:
      "To optimize web application performance, techniques such as minification and compression of files, caching strategies, image optimization, reducing server requests, and asynchronous loading of resources can be employed. Additionally, implementing lazy loading, which defers the loading of non-critical resources until they are needed, can significantly improve page load times. These approaches help decrease load times and improve overall user experience.",
  },
  {
    id: 47,
    topic: "JavaScript",
    question:
      "What are promises in JavaScript, and how do they help in asynchronous programming?",
    answer:
      "Promises are objects that represent the eventual completion or failure of an asynchronous operation. They help in asynchronous programming by providing a more organized way to handle asynchronous tasks.",
  },
  {
    id: 48,
    topic: "JavaScript",
    question: "How do you handle errors in JavaScript?",
    answer:
      "Errors in JavaScript can be handled using try...catch blocks. Code that might throw an error is placed within the try block, and any potential errors are caught and handled in the catch block.",
  },
  {
    id: 49,
    topic: "JavaScript",
    question:
      "How do you access and manipulate elements in the DOM using JavaScript?",
    answer:
      "Elements in the DOM can be accessed and manipulated using JavaScript methods such as getElementById, querySelector, innerHTML, setAttribute, addEventListener, etc.",
  },
  {
    id: 50,
    topic: "JavaScript",
    question: "Explain the difference between localStorage and sessionStorage.",
    answer:
      "localStorage and sessionStorage are both web storage APIs used to store data locally in the user's browser. The main difference is that localStorage persists even after the browser is closed, while sessionStorage is cleared when the browser session ends.",
  },
  {
    id: 51,
    topic: "Security",
    question: "What is CORS, and why is it important in web development?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers that controls access to resources on a different origin (domain). It's important in web development as it helps prevent malicious attacks by enforcing restrictions on cross-origin requests, ensuring the security of web applications.",
  },
  {
    id: 52,
    topic: "Security",
    question:
      "What are some common security vulnerabilities in web applications, and how can they be mitigated?",
    answer:
      "Common security vulnerabilities include Cross-Site Scripting (XSS), SQL Injection, Cross-Site Request Forgery (CSRF), etc. They can be mitigated by implementing proper input validation, using parameterized queries, securing sensitive data, and keeping software up-to-date with security patches.",
  },
  {
    id: 53,
    topic: "Software development practice",
    question:
      "How would you use browser developer tools to debug JavaScript code?",
    answer:
      "Browser developer tools, such as those found in Chrome or Firefox, offer a range of features to debug JavaScript code. To start debugging, you can open the developer tools by pressing F12 or right-clicking on the webpage and selecting 'Inspect'. Within the developer tools, you can navigate to the 'Sources' tab to view and debug JavaScript files. Here, you can set breakpoints by clicking on the line number to pause code execution at specific points, inspect variable values, step through code execution line by line, and monitor network activity. These tools help identify and fix errors, optimize code performance, and enhance overall development efficiency.",
  },
];
