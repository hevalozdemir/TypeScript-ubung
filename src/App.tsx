import React, { useState } from 'react';
import './App.css'
import { Todos } from './types/Type';
import Input from './componets/input';
import Message from './componets/Message';


//Re-use the return value from a function as a type!
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])

  const addMessage = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }])
    setTodo('')
  }

  const deleteMessage = (id_neu: number) => {
    setTodos(todos.filter(todo => todo.id != id_neu))
  }

  console.log(todos, "todos")

  return (
    <>
      <div>
        <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
        <Message deleteMessage={deleteMessage} todos={todos} />
      </div>
    </>
  )
}

export default App;
