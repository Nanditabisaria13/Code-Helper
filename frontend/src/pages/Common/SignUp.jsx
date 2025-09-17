import React,{ useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserContext} from '../../context/UserContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState('')
      const [password,setPassword] = useState('')
      const navigate = useNavigate()

      const {setUser}= useContext(UserContext)
      const {backendUrl} = useContext(AppContext)
    
      function submitHandler(e){
        e.preventDefault()

        axios.post(backendUrl + '/users/register',{
          firstName,
          lastName,
          email,
          password
        }).then((res)=>{
          localStorage.setItem('token',res.data.token)
          toast.success("Successfully Registered Your Account");
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
      <h1 className="text-3xl font-medium text-center text-white">Welcome, Sign Up to Create your account</h1>
      <form className="space-y-4" onSubmit={submitHandler}>

         <input type="text"
         placeholder="FirstName" 
         className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none"
         onChange={(e)=>setFirstName(e.target.value)}/> 

          <input type="text"
         placeholder="LastName" 
         className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none"
         onChange={(e)=>setLastName(e.target.value)}/> 

        <input type="email"
         placeholder="Email" 
         className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none"
         onChange={(e)=>setEmail(e.target.value)}/> 

        <input type="password"
         placeholder="Password"
         className="w-full px-4 py-2 rounded bg-transparent border border-[#535353] text-white focus:outline-none" 
           onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit" className="w-full py-2 font-semibold rounded bg-purple-600 text-white hover:bg-purple-700">
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center text-white">
        Already have an account?{" "}
        <Link to="/login" className="text-purple-400 hover:underline">
          Login here
        </Link>
      </p>
    </div>

    </div>
  )
}

export default SignUp