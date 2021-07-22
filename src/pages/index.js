import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [currentUser, setCurrentUser] = useState(null)


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
            <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </React.Fragment>
    )   
}

export default Home
