import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {
  return (
    <>
    <div className='todo-home'>
      <div>
        <h1 className="text-center">Welcome to the To-Do List React App</h1>
      </div>
      <main>
          <div class="container">
              <div class="todo-app">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Todo Title..." required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Add Description..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  ADD
                </Button>
              </Form>
              </div>
          </div>
      </main>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Home
