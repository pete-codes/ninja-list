import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div>
      <Navbar /> 
        
          <h1> Home page </h1>

      <Footer /> 
    </div>
  )
}
