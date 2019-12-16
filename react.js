// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.

// <script type="text/babel">
//       class HelloReact extends React.Component{
//         render(){
//           return(
//             <h1>I am a Component!</h1>
//           )
//         }
//       }
//       const domContainer = document.querySelector('#react-container');
//       ReactDOM.render(<HelloReact />, domContainer);
//     </script>


// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

// var  ames = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// } 

// names.map((value, index) => {
// console.log(`${names[index]} is ${names[index].length} characters long.`)

// })


// 3. Destructure the following variables out of state.

// this.state = {
//   name: "Dracula",
//   home: "Transylvania",
//   dislikes: ["mirrors", "garlic", "wooden stakes"]
// }

// const { name, home, dislikes } = this.state

// console.log(name)
// console.log(home)
// console.log(dislikes)


// 4. Write a React method that would add one and update the state of the count each time the method is called.


// class Counter extends Component

// constructor(){
//   super()
// this.state = {
//   count: 0
//   }
// }
// addone = () => {
//   this.setState({ counter: this.state.counter +1})
// }


// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
import React, { Component } from 'react'
import './App.css'

class App extends Component{
  render(){
    return(
      <Recipes />
    )
  }
}

class Recipes extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes:[
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
      ]
    }
  }

  render() {
    let { recipes } = this.state

    let recipe = recipes.map(recipe => {
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })

    return(
      <ul>
        {recipe}
      </ul>
    )
  }
}
export default App
