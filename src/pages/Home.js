import React, { Component } from 'react';
import Todos from "../component/todos.js";
import AddTodo from "../component/AddTodo.js";
//import Homes from "./Home.css"; 

class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      // create your empty list here call it todos.
       todos : []
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    todo.id = Math.random();
    // An array that contains the current array and the new todo item
    let new_list = [...this.state.todos, todo];
    // Updates the local state with the new array.
    this.setState({
      todos: new_list,
    });
  };
  render() {
    return (
      <div className="Home">
        <Todos todos = {this.state.todos}/>
        <AddTodo addTodo = {this.addTodo}/>
        <h1>Todo's </h1>
        <p> Welcome to Myles Bennette's Website, I hope you enjoy your stay!</p>
      </div>
    );  
  }
}

export default Home;