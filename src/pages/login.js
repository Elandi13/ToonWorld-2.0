import React, {useEffect, useState} from 'react'
import LoginPage from '../components/Login'

const Login = () => {
  // eslint-disable-next-line 
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
      <LoginPage setCurrentUser={setCurrentUser} />
    </React.Fragment>
  )
}

export default Login
