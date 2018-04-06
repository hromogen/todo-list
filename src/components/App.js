import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
 
const App = () => (
  <main>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </main>
)
 
export default App