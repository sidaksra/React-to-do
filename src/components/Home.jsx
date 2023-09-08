import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TodoItems from '../components/TodoItems'

const Home = (props) => {
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit =(e) =>{
    e.preventDefault();
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  }
  return (
    <>
    <div className='todo-home'>
      <div>
        <h1 className="text-center">Stay Organized with Your To-Dos</h1>
        <div className='circle'></div>
      </div>
      <main>
          <div class="container">
              <div class="todo-app">
              <Form on onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Todo Title..." required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Add Description..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  ADD
                </Button>
              </Form>
              </div>
          </div>
      </main>
    </div>
    <div className='list-items'>
      <h2>Things to Do</h2>
      <div className='items'>
        {props.todos.length===0?"Don't wait—get things done! Begin by adding a new todo item.":
          props.todos.map((items)=>
            {
              return <TodoItems item={items} key={items.sno} onDelete={props.onDelete}/>
          })
        }
      </div>
      
    </div>
    </>
  )
}

export default Home
