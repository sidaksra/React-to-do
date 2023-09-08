import React,{ useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'


import './styles/Home.scss'
import './styles/footer.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const onDelete = (item) =>{
    setTodos(todos.filter((e)=>{
      return e !== item;
    }));
  }

  const addTodo =(title, desc) =>{
    let sno;
    if(todos.length ===0){
      sno = 0;

    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
  
    const myTodo = {
      sno: sno,
      title: title,
      desc :  desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
  }
  
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home todos={todos} onDelete={onDelete} addTodo={addTodo}/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
