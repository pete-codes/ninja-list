import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <div className="navbar"> 
           
        
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      
        </div>
       
     );
}
 
export default Navbar;