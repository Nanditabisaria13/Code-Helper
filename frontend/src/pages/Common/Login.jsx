import React,{useState,useContext} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
    
  const {backendUrl,setToken} = useContext(AppContext)
  const {setUser} = useContext(UserContext)

   function submitHandler(e){
    e.preventDefault();
        axios.post(backendUrl + '/users/login',{
          email,
          password
        }).then((res)=>{
           toast.success("Login Successfully!");
          localStorage.setItem('token',res.data.token)
          setToken(res.data.token)
          setUser(res.data.user)
          navigate('/')
        }).catch((err)=>{
          console.log(err.response.data)
          toast.error("Invalid Credentials!");
        })
   }
   

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-[#141414]'>
     <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-transparent border border-[#535353] drop-shadow-lg">
      <h1 className="text-3xl font-medium text-center text-white">Welcome,  Login to your Dashboard</h1>
      <form className="" onSubmit={submitHandler}>

        <div className="flex flex-col w-full">
       <h3 className="text-base font-mono text-zinc-200"> Email </h3>
        <input type="email"
         placeholder="you@example.com"
          className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none" 
          id='email'
          onChange={(e)=>setEmail(e.target.value)}/>
          </div>
       
       <div className="flex flex-col w-full">
        <h3 className="text-base font-mono text-zinc-200"> Password </h3>
        <input type="password"
         placeholder="minimum 6 characters" 
         className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none" 
         id='password'
         onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button type="submit" className="w-full py-2 mt-5 font-semibold rounded text-white bg-purple-600 hover:bg-purple-700">
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