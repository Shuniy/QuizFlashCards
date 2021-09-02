import uuid from 'react-native-uuid';

export const decks = {
  React: {
    title: 'React',
    id: uuid.v4(),
    questions: [
      {
        question: 'What is React?',
        id: uuid.v4(),
        answer: 'A library for creating and managing single-page user interfaces',
      },
      {
        question: 'What is JSX?',
        id: uuid.v4(),
        answer:
          'JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ). ',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        id: uuid.v4(),
        answer: 'The componentDidMount lifecycle event',
      },
      {
        question: 'What are the differences between functional and class components?',
        id: uuid.v4(),
        answer:
          'Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components. Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these both components differ.',
      },
      {
        question: 'What is the virtual DOM? How does react use the virtual DOM to render the UI?',
        id: uuid.v4(),
        answer:
          'As stated by the react team, virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM. ',
      },
    ],
  },
  JavaScript: {
    id: uuid.v4(),
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        id: uuid.v4(),
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
  Redux: {
    id: uuid.v4(),
    title: 'Redux',
    questions: [
      {
        id: uuid.v4(),
        question: 'What is Redux?',
        answer: 'A predictable state container for JavaScript Apps',
      },
      {
        id: uuid.v4(),
        question: 'What is an action creator?',
        answer:
          'It is a function that takes an input and returns an object with a type and data property.',
      },
      {
        id: uuid.v4(),
        question: 'What is a reducer?',
        answer:
          'A reducer is a pure function that takes the current state and action and returns the next state.',
      },
      {
        id: uuid.v4(),
        question: 'What is a action?',
        answer:
          'Actions are the only source of information for the store as per Redux official documentation. It carries a payload of information from your application to store. As discussed earlier, actions are plain JavaScript object that must have a type attribute to indicate the type of action performed.',
      },
      {
        id: uuid.v4(),
        question: 'What is a store?',
        answer:
          'A store is basically just a plain JavaScript object that allows components to share state. In a way, we can think of a store as a database. On the most fundamental level, both constructs allow us to store data in some form or another.',
      },
    ],
  },
};
