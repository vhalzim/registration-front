import Head from 'next/head'
import Header from '../components/header'
import { useState, ChangeEvent, FormEvent } from 'react'
import useNavigate from '../hooks/useNavigate'


export default function Signup() {

  // todo revisar que poronga pasa con el sendHTTPrequest
  const[userInputs, setUserInputs] = useState({
    name:"",
    email:"",
    password:""
  })



  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
    setUserInputs(prevValues => 
      ({ ...prevValues, [name]: value }));
  };

  const sendHttpRequest = async () => {
    try {
      const res = await fetch("http://localhost:3001/user/signup", {
        method: "POST",
        body: JSON.stringify(userInputs),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data =  res
      const dataJson = await data?.json();
      return (
        {message:dataJson.message, state:data?.status}
      )
    } catch (err) {
      console.log(err);
    }
  }
  
  const handleSubmitSignup =  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const {message, state}: {message: string; state: number} = await sendHttpRequest() as {message: string; state: number}
   console.log({message,state})
   if  (state === 201){
    navigate("http://localhost:3000/login")

   } else {
      alert(message)
      setUserInputs({
        name:"",
        email:"",
        password:""
      })
   }


  }

  return (
      <div >
        <Head>
          <title>Signup</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <Header />
          <div className='flex flex-col w-screen h-screen justify-center items-center'>
            <h1 className='mb-8 text-3xl text-blue-500 font-bold'> Signup</h1>
            <form onSubmit={handleSubmitSignup} className=' md:w-[30%] bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.1)]  shadow-3d rounded-xl flex flex-col items-center p-8'> 
              <label>
                <input placeholder='Jhon Doe' name="name"  required={true} onChange={handleChange} value={userInputs.name}></input>
                <span className='input-span'>Name</span>
              </label>
              <label >
                <input placeholder='example@exmail.com' name="email" required={true} onChange={handleChange} value={userInputs.email}></input>
                <span className='input-span'>Email</span>
              </label>
              <label >
                <input placeholder='Password' type="password" name="password" required={true} onChange={handleChange} value={userInputs.password}></input>
                <span className='input-span'>Password</span>
              </label>
              <button type='submit' className='mt-1 px-4 py-1 bg-blue-500 rounded-full font-bold shadow-lg hover:shadow-none'>Signup</button>
            </form >
          </div>
        </main>
      </div>
  )
}
