import React from 'react'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const TodoItems = ({item, onDelete}) => {
  return (
    <div className='todo-items'>
      <Accordion className='accordion'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='list-content'>
            <Button className="button-delete" onClick={()=>{onDelete(item)}}>Delete</Button>
            <h2>{item.title}</h2>
          </Accordion.Header>
          <Accordion.Body className='desc-text'>
            <p>
              {item.desc === "" ? "No Description Provided" : "Description: " + item.desc}
             </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default TodoItems
