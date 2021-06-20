import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import emailsignup from '../comps/emailsignup'

import footer from '../comps/footer'

import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
   console.log(ninjas)

  return (
    <div>
         <Navbar /> 
     <h1> Find the best remote companies to work for </h1> 
     <button className="btn"> Global </button>
     <button className="btn"> US </button>
     <button className="btn"> UK </button>
      {ninjas.map(ninja => (
        <Link href={'/' + ninja.id} key={ninja.id}>
          <a>
            <div className="even-col"> 
            <h3>{ ninja.name }</h3>
            </div>
            
          </a>
        </Link>
      ))}
    
    </div>
  );
}

export default Ninjas;

// export default function Home() {
 
//   const pizzas = [


//     {
//       id:'1',
//       name:'ghost',
//       slug:'remote-companies-ghost'

//     },

//     {
//       id:'2',
//       name:'podia',
//       slug:'remote-companies-podia'

//     },

//     {
//       id:'3',
//       name:'mailerlite',
//       slug:'remote-companies-mailerlite'

//     }
//   ]

//   return (
    
//     <div> 
//    
   
//             )

// }