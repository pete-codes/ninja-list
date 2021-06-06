import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import footer from '../comps/footer'

export default function Home() {
  return (
    <div>
      <Navbar /> 
        
          <h1> Find the best remote companies to work for</h1>

      <footer /> 
    </div>
  )
}
