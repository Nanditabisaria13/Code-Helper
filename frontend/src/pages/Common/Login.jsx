import React,{useState,useContext} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
    
  const {backendUrl} = useContext(AppContext)
  const {setUser} = useContext(UserContext)

   function submitHandler(e){
    e.preventDefault();
        axios.post(backendUrl + '/users/login',{
          email,
          password
        }).then((res)=>{
          console.log(res.data)
          localStorage.setItem('token',res.data.token)
          setUser(res.data.user)
          navigate('/')
        }).catch((err)=>{
          console.log(err.response.data)
        })
   }
   

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-[#141414]'>
     <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-transparent border border-[#535353] drop-shadow-lg">
      <h1 className="text-3xl font-medium text-center text-white">Welcome,  Login to your Dashboard</h1>
      <form className="space-y-4" onSubmit={submitHandler}>
        <input type="email"
         placeholder="Email"
          className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none" 
          id='email'
          onChange={(e)=>setEmail(e.target.value)}/>
       
        <input type="password"
         placeholder="Password" 
         className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none" 
         id='password'
         onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" className="w-full py-2 font-semibold rounded text-white bg-purple-600 hover:bg-purple-700">
          Login
        </button>
      </form>
      <p className="text-sm text-center text-white">
        Don't have an account?{" "}
        <Link to="/signup" className="text-purple-400 hover:underline">
          Create one
        </Link>
      </p>
    </div>
    </div>
  )
}

export default Login