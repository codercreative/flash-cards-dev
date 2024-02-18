//https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/main

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
      "Event bubbling is a concept in web development where, when something happens (like a click) to an element on a webpage, that event doesn't just affect that specific element; it also ripples up through its parent elements in the HTML hierarchy.",
  },
  {
    id: 8,
    topic: "HTML",
    question:
      "When was HTML5 introduced and What are the key features of HTML5?",
    answer:
      "HTML5 was released in 2014 and introduced many new features like: semantic elements, allowed embedding audio and video content using audio and video tags. Also, the canvas tag allows developers to draw graphics, charts and animations. Also, localStorage was introduced. New input types (email, url, number as well as datalist among others). The viewport meta tag,...and more",
  },
  {
    id: 9,
    topic: "JavaScript",
    question: "Explain the difference between var, let and const",
    answer:
      "Var is outdated, because it is gloablly scoped and can thus be overwritten. Let is block-scoped and allows reassignment. Const cannot be reassigned. Preferred usage is to use const, unless you need a variable that will be reassigned then use let (for example within a counter, etc.) ",
  },
];
