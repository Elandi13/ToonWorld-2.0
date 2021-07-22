import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [currentUser, setCurrentUser] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  useEffect(()=>{
    const token = null
    if(token){
      fetch(`http://localhost:3000/me`)
      .then((response) => response.json())
      .then(data => {
        setCurrentUser(data)
      })
    }
  },[])
  

    return (
        <React.Fragment>
            <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} isOpen={isOpen} toggle={toggle}/>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} toggle={toggle}/>
        </React.Fragment>
    )   
}

export default Home
