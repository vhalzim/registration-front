import Head from 'next/head'
import Header from '../components/header'
import Signup from './signup'
import Login from './login'

export default function home() {

  return (
      <div>
        <Signup />
      </div>
  )
}
