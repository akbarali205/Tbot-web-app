import React from 'react'

function data() {
  // this function must return array about courses
  const dat = [
    {
      id: 1,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      price: 19.99
    },
    {
      id: 2,
      name: 'Angular',
      description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      price: 29.99
    },
    {
        id: 3,
        name: 'Vue',
        description: 'Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
        price: 39.99
    },
    {
        id: 4,
        name: 'Node.js',
        description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        price: 49.99
    },
    {
        id: 5,
        name: 'Python',
        description: 'Python is an interpreted, high-level, general-purpose programming language.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        price: 59.99
    },
    {
        id: 6,
        name: 'JavaScript',
        description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        price: 69.99
    },
    {
        id: 7,
        name: 'Java',
        description: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.',
        image: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg',
        price: 79.99
    },
    {
        id: 8,
        name: 'C++',
        description: 'C++ is a general-purpose programming language created by  Bjarne Stroustrup. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
        price: 89.99
    },
    {
        id: 9,
        name: 'C#',
        description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png',
        price: 99.99
    },
    {
        id: 10,
        name: 'C',
        description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
        price: 109.99
    }
  ]
  return { dat }
}

export default data