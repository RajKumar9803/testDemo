import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { ListGroup } from 'react-bootstrap';




function Add() {
  return (
    <div className='container'>

      <ListGroup>
        <ListGroup.Item><FiPlusCircle />AddTasks</ListGroup.Item>


      </ListGroup>
    </div>

  )
}

export default Add